define("tpl!achy/biz/globalFooter/main.html",[],function(){return function(obj){obj||(obj={});{var __t,__p="";_.escape,Array.prototype.join}with(obj)__p+='<footer class="global-footer">\n    ',links&&(__p+='\n    <div class="container clearfix">\n        <div class="column col-md-2">\n            <h4>产品展示</h4>\n            <ul>\n                <li><a href="https://gw.wmcloud.com/rdp" target="_blank">投资研究</a></li>\n                <li><a href="https://app.wmcloud.com/sns" target="_blank">社交办公</a></li>\n            </ul>\n        </div>\n        <div class="column col-md-2">\n            <h4>关于我们</h4>\n            <ul>\n                <li><a href="http://www.datayes.com/#/about/" target="_blank">公司简介</a></li>\n                <li><a href="https://gw.wmcloud.com/tongke/portal.php" target="_blank">通客社区</a></li>\n            </ul>\n        </div>\n        <div class="column col-md-6">\n            <h4>联系我们</h4>\n            <div class="contact">\n                <div class="support-number">全国免费客服热线: <strong>4000 820 386</strong></div>\n                <address>\n                    总部地址: 上海市浦东新区陆家嘴西路99号万向大厦19层<br>\n                    美国分部地址: 2880 Zanker Road, Ste 207 San Jose, CA 95134\n                </address>\n                <div>客服邮箱: <a href="mailto:info@datayes.com" target="_blank">info@datayes.com</a></div>\n            </div>\n        </div>\n        <div class="column col-md-2 wechat-qrcode">\n            <img src="http://www.datayes.com/img/qrcode_160.gif" alt=""><br>\n            <span>微信公众账号: 通联数据</span>\n        </div>\n    </div>\n    '),__p+='\n    <div class="copyright">\n        <div class="container">\n            <p>\n                <span>© 2015 <a href="http://www.datayes.com/" target="_blank">DataYes</a></span>\n                <a class="icp" href="http://www.miibeian.gov.cn/" target="_blank">沪ICP备13045831号</a>\n                <span>咨询热线：4000 820 386</span>\n                ',appName&&(__p+="\n                <span>"+(null==(__t=appName)?"":__t)+" "+(null==(__t=appVersion)?"":__t)+"</span>\n                "),__p+='\n                <a href="http://www.datayes.com/#/protocol" target="_blank" class="agreement">用户协议</a>\n            </p>\n        </div>\n    </div>\n</footer>\n';return __p}}),define("achy/biz/globalFooter/main",["tpl!achy/biz/globalFooter/main.html"],function(n){var a={links:!0,appendTo:document.body,appName:"",appVersion:""},t=function(t){this.opts=_.defaults(t,a),this.wrapper=$(n(t)),$(this.opts.appendTo).append(this.wrapper)};return t}),define("achy/biz/globalFooter",["achy/biz/globalFooter/main"],function(n){return n});