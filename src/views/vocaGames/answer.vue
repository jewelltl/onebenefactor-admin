<template>
  <div class="animated fadeIn">
    <b-form>
      <b-form-group>
        <b-row>
          <b-col md="7">
            <b-input 
              class="mb-2 mr-sm-2 mb-sm-0 form-control"
              placeholder="Type answer here"
              v-model="form.text"
            />
          </b-col>
          <b-col md="2">
            <b-form-select class="m-b-2 mr-sm-2 mb-sm-0 form-control" v-model="form.isRightAnswer">
              <option :value="true">True</option>
              <option :value="false">False</option>
            </b-form-select>
          </b-col>
          <b-col md="3" v-if="answer == 'new'">
            <b-button variant="primary" @click="createAnswer">Save</b-button>
          </b-col>
          <b-col md="3" v-else>
            <b-button variant="primary" @click="updateAnswer">Update</b-button>
            <b-button variant="warning" @click="removeAnswer">Remove</b-button>
          </b-col>
        </b-row>
      </b-form-group>
    </b-form>
  </div>
</template>
<script>

import notificationMixin from '../../mixins/notification.js'
import { addAnswer, removeAnswer, updateAnswer } from '../../api/voca-game.js'

export default {
  name: 'VAnswer',
  mixins: [notificationMixin],
  props: [ 'answer', 'question' ],
  data () {
    return {
      form: {
        _id: null,
        text: '',
        isRightAnswer: false
      }
    }
  },
  created () {
    if (this.answer !== 'new') {
      this.form = this.answer
    }
  },
  methods: {
    createAnswer () {
      let data = this.form
      delete data._id
      addAnswer(this.question, data).then(res => {
        this.form.text = ''
        this.form.isRightAnswer = false
        this.successNotification('Succeed', 'Succeed in Adding a new answer!')
        this.$root.$emit('update-answer', res.data.answer)
      }).catch(err => {
        this.errorNotification('Failure', err)
      })
    },
    updateAnswer () {
      updateAnswer(this.form).then(res => {
        this.successNotification('Succeed', 'Successfully updated an answer!')
        console.log(res)
      }).catch(err => {
        console.log(err)
        this.errorNotification('Failure', err)
      })
    },
    removeAnswer () {
      removeAnswer(this.form._id).then(res => {
        this.successNotification('Succeed', 'Successfully removed an answer!')
        this.$root.$emit('update-answer', res.data.answer)
      }).catch(err => {
        this.errorNotification('Failure', err)
      })
    }
  }
}
</script>