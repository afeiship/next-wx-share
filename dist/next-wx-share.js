(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var wx = global.wx = global.wx;

  var NxWxShare = nx.declare('nx.WxShare', {
    statics: {
      share: function( inTypes, inOptions ) {

        wx.ready(function () {
          inTypes.forEach(function (item) {
            return new Promise(function(resove, reject){
              wx[item](
                nx.mix( inOptions, {
                  success: function( data ){
                    resove( { status:'success', data: data} );
                  },
                  fail: function( data ){
                    resove( { status:'fail', data: data} );
                  },
                  complete: function( data ){
                    resolve( { status:'complete', data: data } )
                  }
                })
              )
            });
          });
        });

      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWxShare;
  }

}());
