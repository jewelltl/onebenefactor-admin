<template>
  <div class="animated fadeIn">
    <b-card no-body>
      <b-card-header>
        Topics
      </b-card-header>
      <b-card-body>
        <b-row>
          <b-col md="10" offset-md="1">
            <b-card>
              <b-form @submit.prevent="addTopic">
                <b-row>
                  <b-col md="2" class="text-right">
                    <label>Add new topic</label>
                  </b-col>
                  <b-col md="7">
                    <b-form-input id="topic" v-model="topic" type="text"></b-form-input>
                  </b-col>
                  <b-col md="3">
                    <b-button type="submit" variant="primary" class="float-left">Add</b-button>    
                  </b-col>
                </b-row>
              </b-form>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="10" offset-md="1">
            <b-list-group>
              <b-list-group-item v-for="(topic, index) in topics" :key="index">
                <b-link @click.prevent="navToDetail(topic._id)">{{topic.text}}</b-link>
                <b-button-group  class="float-right">
                  <b-button size="sm" variant="primary">Edit</b-button>
                  <b-button size="sm" variant="warning">Remove</b-button>
                </b-button-group>
              </b-list-group-item>
            </b-list-group>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>
<script>
import { addTopic, getTopics } from '@/api/voca-game.js'
import notificationMixin from '@/mixins/notification.js'
import cTable from '../shared/table.vue'
export default {
  name: 'Topic',
  mixins: [notificationMixin],
  components: { cTable },
  data () {
    return {
      topic: '',
      topics: []
    }
  },
  created () {
    this.getTopics()
  },
  methods: {
    addTopic () {
      addTopic({text: this.topic}).then(res => {
        this.topic = ''
        this.successNotification('Succeed', 'Succeed in creating a new topic.')
        this.topics.push(res.data)
      }).catch(e => {
        this.errorNotification('Failure', 'Failed in creating a new topic')
      })
    },
    getTopics () {
      getTopics().then(res => {
        this.topics = res.data
        console.log(res.data)
      }).then(e => {
        console.log(e)
      })
    },
    navToDetail (id) {
      console.log(id)
    }
  }
}
</script>
