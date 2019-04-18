const config = require('./config')
App({
  onLaunch: function() {
    require('./sdk/sdk-alipay.2.0.8-a')
    // my.BaaS.auth.loginWithAlipay()
    my.BaaS.init(config.clientID, {logLevel: 'debug', autoLogin: true})
  }
})
