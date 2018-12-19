<template>
  <div class="animated fadeIn">
    <b-card no-body>
      <b-card-header>
        Game Record
      </b-card-header>
      <b-card-body>
        <b-row class="text-center">
          <b-table striped hover :items="histories" :fields="fields">
            <template slot="user" slot-scope="data">              
              <span v-if="data.item.user">
                {{data.item.user.firstName}} {{data.item.user.lastName}}
              </span>
            </template>
            <template slot="gameType" slot-scope="data">
              {{types[data.item.gameType]}}
            </template>
            <template slot="date" slot-scope="data">
              {{data.item.date.createdAt | format_date}}
            </template>
          </b-table>
        </b-row>
      </b-card-body>
    </b-card>    
  </div>
</template>
<script>

import notificationMixin from '@/mixins/notification.js'
import { getHistory } from '@/api/voca-game.js'

export default {
  name: 'GameHistory',
  mixins: [notificationMixin],
  data () {
    return {
      types: ['Vocabulary', 'Card'],
      histories: [],
      fields: {
        user: {
          label: 'User',
          sortable: true
        },
        gameType: {
          label: 'Type',
          sortable: true
        },
        amount: {
          label: 'Amount',
          sortable: true
        },
        createdAt: {
          label: 'Date',
          sortable: true
        }
      }
    }
  },
  created () {
    this.getHistory()
  },
  methods: {
    getHistory () {
      getHistory().then(res => {
        this.histories = res.data
        console.log(res.data)
      }).catch(err => {
        this.errorNotification('Failure', err)
      })
    }
  }
}
</script>
