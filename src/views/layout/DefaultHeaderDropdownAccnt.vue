<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img
        src="@/assets/images/avatars/2.jpg"
        class="img-avatar"
        :alt="adminUser.lastName" />
    </template>\
    <template slot="dropdown">
      <b-dropdown-header
        tag="div"
        class="text-center">
        <strong>Settings</strong>
      </b-dropdown-header>
      <b-dropdown-item @click="logout"><font-awesome-icon icon="lock"></font-awesome-icon> Logout</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
import store from '../../store'

export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return {
      adminUser: {}
    }
  },
  created () {
    store.dispatch('user/GetInfo').then(res => {
      this.adminUser = res.data
    }).catch((err) => {
      store.dispatch('user/FedLogOut').then(() => {
        console.log(err || 'Verification failed, please login again')
      })
      location.reload()
    })
  },
  methods: {
    logout () {
      store.dispatch('user/LogOut').then(() => {
        location.reload()
      })
    }
  }
}
</script>
<style lang="scss">
  .img-avatar{
    border: solid 1px black;
    width: 35px;
    height: 35px;
  }
</style>
