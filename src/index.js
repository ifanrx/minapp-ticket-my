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
  didMount() {
    if (typeof my.BaaS === 'undefined' || /^v?(\d+)\./i.exec(my.BaaS._config.VERSION)[1] < 2) {
      throw new Error('请使用 v2.0 版本以上的知晓云 SDK')
    }
  },
  methods: {
    reportTicket: function (e) {
      my.BaaS.reportTicket(e.detail.formId)
    },
    handleTap: function (e) {
      this.props.onTap && this.props.onTap(e)
      if (this.props.disappearAfterClick) {
        this.setData({
          hideButton: true,
        })
      }
    }
  },
})
