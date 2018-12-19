<template>
  <div class="animated fadeIn">
    <b-card no-body>
      <b-card-header>
        Register Answer <b-badge variant="info">{{question.topic.text}}</b-badge>
      </b-card-header>
      <b-card-body>
        <p>{{question.text}}</p>
        <b-row>
          <b-col md="12">
            <v-answer
              :question="question._id"
              answer="new"
            />
          </b-col>
        </b-row>
      </b-card-body>
      
    </b-card>
    <b-card no-body v-if="answers.length > 0">
      <b-card-header>
        Answers
      </b-card-header>
      <b-card-body>
        <b-row v-for="(answer, index) in answers" :key="index">
          <b-col md="12">
            <v-answer
              :question="question._id"
              :answer="answer"
            />
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>
<script>
import { getQuestion } from '@/api/voca-game.js'
import notificationMixin from '@/mixins/notification.js'
import VAnswer from './answer.vue'
export default {
  name: 'QuestionDetail',
  mixins: [notificationMixin],
  components: { VAnswer },
  data () {
    return {
      question: {},
      answers: []
    }
  },
  created () {
    this.getQuestion(this.$route.params.question_id)
    this.$root.$on('update-answer', answers => {
      this.answers = answers
    })
  },
  methods: {
    getQuestion (questionId) {
      getQuestion(questionId).then(res => {
        this.question = res.data
        if (typeof res.data.answer !== 'undefined') {
          this.answers = res.data.answer
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
