Component({
  didMount() {
    if (typeof my.BaaS === 'undefined' || /^v?(\d+)\./i.exec(my.BaaS._config.VERSION)[1] < 2) {
      throw new Error('请先接入知晓云 SDK')
    }
  },
  methods: {
    reportTicket: function (e) {
      my.BaaS.reportTicket(e.detail.formId)
    },
  },
})
