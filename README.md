# next-wx-share
> Wechat api for shart part.


## usage:
```js
import NxWxShare from 'next-wx-share';
import NxWxApi from 'next-wx-api';


// SHARE TYPES:
/*
[
'onMenuShareTimeline',
'onMenuShareAppMessage',
'onMenuShareQQ',
'onMenuShareWeibo',
'onMenuShareQZone',
]
*/


// share all:
NxWxShare.share( NxWxApi.SHARE, {
  title: '', // 分享标题
  desc: '', // 分享描述
  link: '', // 分享链接
  imgUrl: '', // 分享图标
}).then(({ status, data })=>{
  // your codes goes here!
});

```
