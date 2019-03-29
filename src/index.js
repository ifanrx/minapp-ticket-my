Component({
  properties: {
    disappearAfterClick: {
      type: Boolean,
      value: false,
    }
  },
  data: {
    hideButton: false,
  },
  methods: {
    reportTicket: function (e) {
      my.BaaS.reportTicket(e.detail.formId)
    },
    handleTap: function (e) {
      this.props.onTap && this.props.onTap(e)
      this.setData({
        hideButton: true,
      })
    }
  },
})
