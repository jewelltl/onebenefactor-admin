export default {
  methods: {
    successNotification (title, message) {
      this.$toast.success({
        title: title,
        message: message
      })
    },
    errorNotification (title, message) {
      this.$toast.error({
        title: title,
        message: message
      })
    }
  }
}
