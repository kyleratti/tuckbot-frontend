(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(0)),a=l(n(39)),u=l(n(41));t.default=({children:e})=>i.createElement("div",{className:"wrapper"},i.createElement(u.default,null),i.createElement("div",{className:"page-container"},i.createElement("div",{className:"content"},e)),i.createElement(a.default,null))},,,,,,function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(0)),i=n(7);t.default=()=>l.createElement(i.Link,{to:"/watch/random"},"watch a random video")},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(l,i){function a(e){try{o(r.next(e))}catch(e){i(e)}}function u(e){try{o(r.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}o((r=r.apply(e,t||[])).next())}))},l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const i=l(n(0)),a=n(50);t.useRedditVideo=function(e){const[t,n]=i.useState(!1),[l,u]=i.useState(null),[o,s]=i.useState(null);return i.useEffect(()=>{(()=>r(this,void 0,void 0,(function*(){n(!0);try{const t=yield a.fetchVideo(e);s(t),u(null)}catch(e){s(null),u(e.message)}finally{n(!1)}})))()},[e]),{isLoading:t,errorMessage:l,videoResponse:o}}},,,function(e,t,n){e.exports=n(20)},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(0)),a=n(22);n(26);const u=l(n(30));a.render(i.createElement(u.default,null),document.getElementById("main"))},,,,,,function(e,t,n){var r=n(27);"string"==typeof r&&(r=[[e.i,r,""]]);var l={insert:"head",singleton:!1};n(29)(r,l);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(28)(!1)).push([e.i,'html{height:100%}body{height:100%;margin:0;background-repeat:no-repeat;background-attachment:fixed;background:#767676;background:linear-gradient(0deg, #414141 0%, #2b2b2b 15%);font-family:"Arial",Arial,Helvetica,sans-serif;color:#afb0b2;place-items:center}a,a:visited{color:#3d70ab;font-weight:bold;text-decoration:none}a:hover{color:#d65656}.videoTitle h2{color:#d65656}.inline-list{list-style-type:none;padding:0}.inline-list li{display:inline-block;margin:.5em}.inline-list dt:before{content:"";display:block}.inline-list dt,.inline-list dd{display:inline}.inline-list dt:after{content:":"}.inline-list dd{margin-left:.75em}video{padding:.2em;min-width:500px;min-height:260px;max-width:90%;max-height:90%;position:relative;background:linear-gradient(to top, #767676, #2b2b2b);padding:3px}#main{display:flex;align-items:center;justify-content:center}#tuckie-boy{cursor:grab;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}header,footer{text-align:center}header{font-family:"Courier New";letter-spacing:.2ch;text-transform:uppercase}footer{margin:1em;font-size:.8em}.content{text-align:center}.dot-tv{font-size:.6em;font-weight:normal;letter-spacing:normal;color:#767676}',""])},,,function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(0)),a=n(7),u=l(n(36));t.default=()=>i.createElement(a.HashRouter,null,i.createElement(u.default,null))},,,,,,function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(0)),a=n(7),u=l(n(37)),o=l(n(42)),s=l(n(44)),c=l(n(47)),d=l(n(48)),f=l(n(51));t.default=()=>i.createElement(a.Switch,null,i.createElement(a.Route,{path:"/",exact:!0,component:o.default}),i.createElement(a.Route,{path:"/contact",exact:!0,component:u.default}),i.createElement(a.Route,{path:"/tucker",exact:!0,component:s.default}),i.createElement(a.Route,{path:"/watch",exact:!0,component:c.default}),i.createElement(a.Route,{path:"/watch/random",exact:!0,component:d.default}),i.createElement(a.Route,{path:"/watch/:redditPostId",exact:!0,component:f.default}),i.createElement(a.Redirect,{to:"/"}))},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(38));t.default=l.default},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(0)),a=l(n(9));t.default=()=>i.createElement(a.default,null,i.createElement("div",null,i.createElement("dl",{className:"inline-list"},i.createElement("dt",null,"General Inquiries"),i.createElement("dd",null,i.createElement("a",{href:"mailto:inquire@tuckbot.tv"},"inquire@tuckbot.tv")),i.createElement("dt",null,"Takedown Requests"),i.createElement("dd",null,i.createElement("a",{href:"mailto:takedown@tuckbot.tv"},"takedown@tuckbot.tv")))))},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(0)),a=l(n(40)),u=l(n(15));t.default=()=>i.createElement("footer",null,i.createElement("ul",{className:"inline-list"},i.createElement("li",null,i.createElement(a.default,null)),i.createElement("li",null,i.createElement(u.default,null))))},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(0)),i=n(7);t.default=()=>l.createElement(i.Link,{to:"/contact"},"contact")},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(0)),i=n(5),a=3;class u extends l.Component{constructor(e){super(e),this.state={numClicks:0},this.state={numClicks:0},this.handleClick=this.handleClick.bind(this)}handleClick(){this.setState({numClicks:this.state.numClicks+1})}render(){let e=null;return this.state.numClicks>a&&(e=l.createElement(i.Redirect,{push:!0,to:"/tucker"})),l.createElement("header",null,e,l.createElement("h1",null,l.createElement("span",{id:"tuckie-boy",onClick:this.handleClick},"🐶"),"Tuckbot",l.createElement("span",{className:"dot-tv"},".tv")))}}t.default=u},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(43));t.default=l.default},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(0)),a=l(n(9)),u=l(n(15));t.default=()=>i.createElement(a.default,null,i.createElement("p",null,"Welcome to Tuckbot. If you're on this page, you've either found it by accident or have a curious mind."),i.createElement(u.default,null))},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(45));t.default=l.default},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(0)),a=l(n(9)),u=l(n(46)),o=Math.floor(Date.now()/1e3)-1456790400,s=Math.floor(o/31536e3);class c extends i.Component{render(){return i.createElement(a.default,null,i.createElement("h1",null,"Hi there, I'm Tucker!"),i.createElement("p",null,"Hi! I'm Tucker. Thanks for the pets! I am ",s," years old. My favorite thing to do is to suck on my toy ducks. I have a few ducks: medium ducks, small ducks, huge ducks, tiny ducks, yellow ducks, green ducks, purple ducks, orange ducks, slightly more yellow ducks...basically every kind of duck. And a few more."),i.createElement("p",null,"Here's a few pictures of me."),i.createElement(u.default,null))}}t.default=c},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(0));t.default=()=>l.createElement("div",null,l.createElement("b",null,"TODO: there will be a photo gallery here, one day"))},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(0));t.default=()=>l.createElement("div",null,"You tried to watch with no redditPostId. Good job.")},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(49));t.default=l.default},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(0)),i=n(7),a=n(16);t.default=()=>{const{videoResponse:e,errorMessage:t}=a.useRedditVideo("random"),n=i.useHistory();return t?l.createElement("div",null,t):e?(setTimeout(()=>{n.replace(`/watch/${e.redditPostId}`)},0),l.createElement("div",null,"Redirecting")):l.createElement("div",null,"Loading")}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(l,i){function a(e){try{o(r.next(e))}catch(e){i(e)}}function u(e){try{o(r.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}o((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const l="https://api.tuckbot.tv/video";function i(e){return r(this,void 0,void 0,(function*(){const t=yield fetch(`${l}/${e}`,{method:"GET",mode:"no-cors"});if(200!==t.status){let e;try{e=(yield t.json()).status.message}catch(n){e=t.statusText}throw new Error(`${t.status}: ${e}`)}try{const e=yield t.json();return{redditPostId:e.data.redditPostId,redditPostTitle:e.data.redditPostTitle,mirrorUrl:e.data.mirrorUrl}}catch(e){throw new Error("Server returned an invalid result.")}}))}t.fetchVideo=i,t.fetchRandom=function(){return r(this,void 0,void 0,(function*(){return i("random")}))}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(52));t.default=l.default},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(0)),a=l(n(53)),u=l(n(9));t.default=({match:{params:{redditPostId:e}}})=>i.createElement(u.default,null,i.createElement(i.Fragment,null,i.createElement(a.default,{redditPostId:e})))},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(54));t.default=l.default},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(0)),a=n(55),u=n(16),o=l(n(56)),s=l(n(58)),c=l(n(60));t.default=({redditPostId:e})=>{const{isLoading:t,errorMessage:n,videoResponse:r}=u.useRedditVideo(e);let l=r?r.redditPostTitle:"Watch";if(a.setTitle(l),n)return i.createElement("div",null,"Error: ",n);if(t)return i.createElement("div",null,"Loading...");if(r){const{redditPostTitle:e,mirrorUrl:t,redditPostId:n}=r;return i.createElement(i.Fragment,null,i.createElement(c.default,{title:e}),i.createElement(s.default,{mirrorUrl:t}),i.createElement(o.default,{redditPostId:n}))}return i.createElement("div",null,"Not loading")}},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(0));t.setTitle=function(e){l.useEffect(()=>{document.title=`${e} 🐶 Tuckbot`},[e])}},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(0)),a=l(n(57));t.default=({redditPostId:e})=>i.createElement("div",{className:"videoDetails"},i.createElement("ul",{className:"inline-list"},i.createElement("li",null,i.createElement(a.default,{redditPostId:e}))))},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(0));t.default=({redditPostId:e})=>l.createElement("a",{href:"https://reddit.com/"+e},"see on reddit")},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(0)),i=n(59);t.default=({mirrorUrl:e})=>l.createElement("div",{className:"videoPlayer"},l.createElement("video",{controls:!0,poster:i,src:e,controlsList:"nodownload"}))},function(e,t,n){e.exports=n.p+"assets/img/poster_5165009702bcea916f486ffa60701b9f.png"},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(0));t.default=({title:e})=>l.createElement("div",{className:"videoTitle"},l.createElement("h2",null,e))}],[[19,1,2]]]);
//# sourceMappingURL=client_350751e20ae9c24b77d8.bundle.js.map