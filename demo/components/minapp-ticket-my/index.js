Component({
  properties: {},
  data: {},
  methods: {
    reportTicket: function (e) {
      my.BaaS.reportTicket(e.detail.formId)
    },
    handleTap: function (e) {
      this.props.onTap && this.props.onTap(e)
    }
  },
})
