(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var wx = (global.wx = global.wx);

  var NxWxShare = nx.declare('nx.WxShare', {
    statics: {
      share: function(inTypes, inOptions) {
        inTypes.forEach(function(item) {
          return new Promise(function(resolve, reject) {
            if (global.__WEIXIN_READY___) {
              wx[item](
                nx.mix(inOptions, {
                  success: function(data) {
                    resolve({ status: 'success', data: data });
                  },
                  cancel: function(data) {
                    resolve({ status: 'cancel', data: data });
                  }
                })
              );
            } else {
              reject({
                status: 'fail',
                msg: '微信SDK还未初始化'
              });
            }
          });
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWxShare;
  }
})();
