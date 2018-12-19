<template>
  <div class="animated fadeIn">
    <b-card no-body>
      <b-card-header>
        Questions
        <div class="card-header-actions">
          <b-button variant="primary" v-b-modal.quizRegModal>New Queston</b-button>
        </div>
      </b-card-header>
      <b-card-body>
        <b-row class="text-center">
          <b-table striped hover :items="questions" :fields="fields">
            <template slot="text" slot-scope="data">
              <b-link @click.prevent="toQuestion(data.item._id)">{{data.item.text}}</b-link>
            </template>
          </b-table>
        </b-row>
      </b-card-body>
    </b-card>
    <b-modal
      title="Register Question"
      id="quizRegModal"
      ref="quizRegModal"
      @ok="handleOk"
      centered
    >
      <form @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Question"
        >
          <b-form-input
            type="text"
            placeholder="Enter Question"
            v-model="form.text"
            data-vv-name="question"
            :class="{'is-invalid': errors.has('question')}"
            v-validate="'required'"
          ></b-form-input>
          <b-form-invalid-feedback>
            {{errors.first('question')}}
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          label="Topic"
        > 
          <b-form-select
            v-model="form.topic"
            :options="topics"
            data-vv-name="topic"
            :class="{'is-invalid': errors.has('topic')}"
            v-validate="'required'"
          >
            <template slot="first">
              <option :value="null" disabled>--Please Select a topic--</option>
            </template>
          </b-form-select>
          <b-form-invalid-feedback>
            {{errors.first('topic')}}
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          label="Level"
        > 
          <b-form-input
            type="number"
            placeholder="Enter Level"
            v-model="form.level"
            data-vv-name="level"
            :class="{'is-invalid': errors.has('level')}"
            v-validate="'required|between:1,10'"
          ></b-form-input>
          <b-form-invalid-feedback>
            {{errors.first('level')}}
          </b-form-invalid-feedback>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>
<script>
import notificationMixin from '../../mixins/notification.js'
export default {
  name: 'Question',
  mixins: [notificationMixin],
  data () {
    return {
      form: {
        text: '',
        topic: null,
        level: 1
      },
      topics: [],
      questions: [],
      fields: {
        text: {
          label: 'text',
          sortable: true
        },
        topic: {
          label: 'Topic',
          key: 'topic.text',
          sortable: true
        },
        level: {
          label: 'Level',
          sortable: true
        }
      }
    }
  },
  created () {
    this.setInitialData()
  },
  methods: {
    setInitialData () {
      this.$store.dispatch('topic/getTopics').then(suc => {
        this.topics = this.$store.state.topic.topics.map(topic => {
          return { value: topic._id, text: topic.text }
        })
      }).catch(err => {
        console.log(err)
      })
      this.$store.dispatch('question/getQuestions').then(suc => {
        this.questions = this.$store.state.question.questions
        console.log(this.questions)
      }).catch(err => {
        console.log(err)
      })
    },
    handleOk (evt) {
      evt.preventDefault()
      this.handleSubmit()
    },
    handleSubmit () {
      this.$validator
        .validateAll()
        .then(res => {
          if (res) {
            this.$store.dispatch('question/addQuestion', this.form).then(suc => {
              this.questions = this.$store.state.question.questions
              this.$refs.quizRegModal.hide()
            }).catch(err => {
              console.log('error respo')
              console.log(err)
            })
            this.successNotification('Succeed', 'New Question was registered successfully!')
          }
        })
    },
    toQuestion (questionId) {
      this.$router.push({name: 'Register Answers', params: {question_id: questionId}})
    }
  }
}
</script>
