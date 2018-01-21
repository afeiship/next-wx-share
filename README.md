# next-wx-share
> Wechat api for shart part.


## usage:
```js
import NxWxShare from 'next-wx-share';

NxWxShare.share([
  'onMenuShareTimeline',
  'onMenuShareAppMessage'
],{
  title: '', // 分享标题
  desc: '', // 分享描述
  link: '', // 分享链接
  imgUrl: '', // 分享图标
}).then(({ status, data})=>{
  
});

```
