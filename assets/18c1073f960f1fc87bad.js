(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[1653],{703655:(t,e,r)=>{var o=r(332792);function n(t){this.mode=o.MODE_8BIT_BYTE;this.data=t}n.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}};t.exports=n},827321:t=>{function e(){this.buffer=new Array;this.length=0}e.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0);t&&(this.buffer[e]|=128>>>this.length%8);this.length++}};t.exports=e},249381:t=>{t.exports={L:1,M:0,Q:3,H:2}},632832:(t,e,r)=>{var o=r(611518);function n(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e)
;for(var o=0;o<t.length-r;o++)this.num[o]=t[o+r]}n.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var i=0;i<t.getLength();i++)e[r+i]^=o.gexp(o.glog(this.get(r))+o.glog(t.get(i)));return new n(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=o.glog(this.get(0))-o.glog(t.get(0)),r=new Array(this.getLength()),i=0;i<this.getLength();i++)r[i]=this.get(i);for(i=0;i<t.getLength();i++)r[i]^=o.gexp(o.glog(t.get(i))+e);return new n(r,0).mod(t)}};t.exports=n},114450:(t,e,r)=>{var o=r(703655),n=r(917611),i=r(827321),a=r(493160),u=r(632832);function s(t,e){this.typeNumber=t;this.errorCorrectLevel=e;this.modules=null;this.moduleCount=0;this.dataCache=null;this.dataList=[]}var l=s.prototype;l.addData=function(t){var e=new o(t);this.dataList.push(e);this.dataCache=null};l.isDark=function(t,e){
if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]};l.getModuleCount=function(){return this.moduleCount};l.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=n.getRSBlocks(t,this.errorCorrectLevel),r=new i,o=0,u=0;u<e.length;u++)o+=e[u].dataCount;for(u=0;u<this.dataList.length;u++){var s=this.dataList[u];r.put(s.mode,4);r.put(s.getLength(),a.getLengthInBits(s.mode,t));s.write(r)}if(r.getLengthInBits()<=8*o)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())};l.makeImpl=function(t,e){this.moduleCount=4*this.typeNumber+17;this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[r][o]=null}this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern()
;this.setupTypeInfo(t,e);this.typeNumber>=7&&this.setupTypeNumber(t);null==this.dataCache&&(this.dataCache=s.createData(this.typeNumber,this.errorCorrectLevel,this.dataList));this.mapData(this.dataCache,e)};l.setupPositionProbePattern=function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var o=-1;o<=7;o++)e+o<=-1||this.moduleCount<=e+o||(this.modules[t+r][e+o]=0<=r&&r<=6&&(0==o||6==o)||0<=o&&o<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=o&&o<=4)};l.getBestMaskPattern=function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var o=a.getLostPoint(this);if(0==r||t>o){t=o;e=r}}return e};l.createMovieClip=function(t,e,r){var o=t.createEmptyMovieClip(e,r);this.make();for(var n=0;n<this.modules.length;n++)for(var i=1*n,a=0;a<this.modules[n].length;a++){var u=1*a;if(this.modules[n][a]){o.beginFill(0,100);o.moveTo(u,i);o.lineTo(u+1,i);o.lineTo(u+1,i+1);o.lineTo(u,i+1);o.endFill()}}return o};l.setupTimingPattern=function(){
for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)};l.setupPositionAdjustPattern=function(){for(var t=a.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var o=t[e],n=t[r];if(null==this.modules[o][n])for(var i=-2;i<=2;i++)for(var u=-2;u<=2;u++)this.modules[o+i][n+u]=-2==i||2==i||-2==u||2==u||0==i&&0==u}};l.setupTypeNumber=function(t){for(var e=a.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var o=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=o}for(r=0;r<18;r++){o=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=o}};l.setupTypeInfo=function(t,e){for(var r=this.errorCorrectLevel<<3|e,o=a.getBCHTypeInfo(r),n=0;n<15;n++){var i=!t&&1==(o>>n&1);n<6?this.modules[n][8]=i:n<8?this.modules[n+1][8]=i:this.modules[this.moduleCount-15+n][8]=i}for(n=0;n<15;n++){i=!t&&1==(o>>n&1)
;n<8?this.modules[8][this.moduleCount-n-1]=i:n<9?this.modules[8][15-n-1+1]=i:this.modules[8][15-n-1]=i}this.modules[this.moduleCount-8][8]=!t};l.mapData=function(t,e){for(var r=-1,o=this.moduleCount-1,n=7,i=0,u=this.moduleCount-1;u>0;u-=2){6==u&&u--;for(;;){for(var s=0;s<2;s++)if(null==this.modules[o][u-s]){var l=!1;i<t.length&&(l=1==(t[i]>>>n&1));a.getMask(e,o,u-s)&&(l=!l);this.modules[o][u-s]=l;if(-1==--n){i++;n=7}}if((o+=r)<0||this.moduleCount<=o){o-=r;r=-r;break}}}};s.PAD0=236;s.PAD1=17;s.createData=function(t,e,r){for(var o=n.getRSBlocks(t,e),u=new i,l=0;l<r.length;l++){var f=r[l];u.put(f.mode,4);u.put(f.getLength(),a.getLengthInBits(f.mode,t));f.write(u)}var h=0;for(l=0;l<o.length;l++)h+=o[l].dataCount;if(u.getLengthInBits()>8*h)throw new Error("code length overflow. ("+u.getLengthInBits()+">"+8*h+")");u.getLengthInBits()+4<=8*h&&u.put(0,4);for(;u.getLengthInBits()%8!=0;)u.putBit(!1);for(;!(u.getLengthInBits()>=8*h);){u.put(s.PAD0,8);if(u.getLengthInBits()>=8*h)break
;u.put(s.PAD1,8)}return s.createBytes(u,o)};s.createBytes=function(t,e){for(var r=0,o=0,n=0,i=new Array(e.length),s=new Array(e.length),l=0;l<e.length;l++){var f=e[l].dataCount,h=e[l].totalCount-f;o=Math.max(o,f);n=Math.max(n,h);i[l]=new Array(f);for(var g=0;g<i[l].length;g++)i[l][g]=255&t.buffer[g+r];r+=f;var d=a.getErrorCorrectPolynomial(h),c=new u(i[l],d.getLength()-1).mod(d);s[l]=new Array(d.getLength()-1);for(g=0;g<s[l].length;g++){var p=g+c.getLength()-s[l].length;s[l][g]=p>=0?c.get(p):0}}var m=0;for(g=0;g<e.length;g++)m+=e[g].totalCount;var v=new Array(m),C=0;for(g=0;g<o;g++)for(l=0;l<e.length;l++)g<i[l].length&&(v[C++]=i[l][g]);for(g=0;g<n;g++)for(l=0;l<e.length;l++)g<s[l].length&&(v[C++]=s[l][g]);return v};t.exports=s},917611:(t,e,r)=>{var o=r(249381);function n(t,e){this.totalCount=t;this.dataCount=e}
n.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]]
;n.getRSBlocks=function(t,e){var r=n.getRsBlockTable(t,e);if(null==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=r.length/3,i=new Array,a=0;a<o;a++)for(var u=r[3*a+0],s=r[3*a+1],l=r[3*a+2],f=0;f<u;f++)i.push(new n(s,l));return i};n.getRsBlockTable=function(t,e){switch(e){case o.L:return n.RS_BLOCK_TABLE[4*(t-1)+0];case o.M:return n.RS_BLOCK_TABLE[4*(t-1)+1];case o.Q:return n.RS_BLOCK_TABLE[4*(t-1)+2];case o.H:return n.RS_BLOCK_TABLE[4*(t-1)+3];default:return}};t.exports=n},611518:t=>{for(var e={glog:function(t){if(t<1)throw new Error("glog("+t+")");return e.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return e.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},r=0;r<8;r++)e.EXP_TABLE[r]=1<<r;for(r=8;r<256;r++)e.EXP_TABLE[r]=e.EXP_TABLE[r-4]^e.EXP_TABLE[r-5]^e.EXP_TABLE[r-6]^e.EXP_TABLE[r-8];for(r=0;r<255;r++)e.LOG_TABLE[e.EXP_TABLE[r]]=r;t.exports=e},332792:t=>{t.exports={MODE_NUMBER:1,MODE_ALPHA_NUM:2,
MODE_8BIT_BYTE:4,MODE_KANJI:8}},493160:(t,e,r)=>{var o=r(332792),n=r(632832),i=r(611518),a=0,u=1,s=2,l=3,f=4,h=5,g=6,d=7,c={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;c.getBCHDigit(e)-c.getBCHDigit(c.G15)>=0;)e^=c.G15<<c.getBCHDigit(e)-c.getBCHDigit(c.G15);return(t<<10|e)^c.G15_MASK},getBCHTypeNumber:function(t){
for(var e=t<<12;c.getBCHDigit(e)-c.getBCHDigit(c.G18)>=0;)e^=c.G18<<c.getBCHDigit(e)-c.getBCHDigit(c.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;){e++;t>>>=1}return e},getPatternPosition:function(t){return c.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case a:return(e+r)%2==0;case u:return e%2==0;case s:return r%3==0;case l:return(e+r)%3==0;case f:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case h:return e*r%2+e*r%3==0;case g:return(e*r%2+e*r%3)%2==0;case d:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new n([1],0),r=0;r<t;r++)e=e.multiply(new n([1,i.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case o.MODE_NUMBER:return 10;case o.MODE_ALPHA_NUM:return 9;case o.MODE_8BIT_BYTE:case o.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case o.MODE_NUMBER:return 12;case o.MODE_ALPHA_NUM:return 11;case o.MODE_8BIT_BYTE:
return 16;case o.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case o.MODE_NUMBER:return 14;case o.MODE_ALPHA_NUM:return 13;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,o=0;o<e;o++)for(var n=0;n<e;n++){for(var i=0,a=t.isDark(o,n),u=-1;u<=1;u++)if(!(o+u<0||e<=o+u))for(var s=-1;s<=1;s++)n+s<0||e<=n+s||0==u&&0==s||a==t.isDark(o+u,n+s)&&i++;i>5&&(r+=3+i-5)}for(o=0;o<e-1;o++)for(n=0;n<e-1;n++){var l=0;t.isDark(o,n)&&l++;t.isDark(o+1,n)&&l++;t.isDark(o,n+1)&&l++;t.isDark(o+1,n+1)&&l++;0!=l&&4!=l||(r+=3)}for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(o,n)&&!t.isDark(o,n+1)&&t.isDark(o,n+2)&&t.isDark(o,n+3)&&t.isDark(o,n+4)&&!t.isDark(o,n+5)&&t.isDark(o,n+6)&&(r+=40);for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(o,n)&&!t.isDark(o+1,n)&&t.isDark(o+2,n)&&t.isDark(o+3,n)&&t.isDark(o+4,n)&&!t.isDark(o+5,n)&&t.isDark(o+6,n)&&(r+=40)
;var f=0;for(n=0;n<e;n++)for(o=0;o<e;o++)t.isDark(o,n)&&f++;return r+=10*(Math.abs(100*f/e/e-50)/5)}};t.exports=c},888632:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},n=u(r(45697)),i=r(667294),a=u(i);function u(t){return t&&t.__esModule?t:{default:t}}var s={bgColor:n.default.oneOfType([n.default.object,n.default.string]).isRequired,bgD:n.default.string.isRequired,fgColor:n.default.oneOfType([n.default.object,n.default.string]).isRequired,fgD:n.default.string.isRequired,size:n.default.number.isRequired,title:n.default.string,viewBoxSize:n.default.number.isRequired,xmlns:n.default.string},l={title:void 0,xmlns:"http://www.w3.org/2000/svg"},f=(0,i.forwardRef)((function(t,e){var r=t.bgColor,n=t.bgD,i=t.fgD,u=t.fgColor,s=t.size,l=t.title,f=t.viewBoxSize,h=function(t,e){var r={}
;for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o]);return r}(t,["bgColor","bgD","fgD","fgColor","size","title","viewBoxSize"]);return a.default.createElement("svg",o({},h,{height:s,ref:e,viewBox:"0 0 "+f+" "+f,width:s}),l?a.default.createElement("title",null,l):null,a.default.createElement("path",{d:n,fill:r}),a.default.createElement("path",{d:i,fill:u}))}));f.displayName="QRCodeSvg";f.propTypes=s;f.defaultProps=l;e.default=f},101653:(t,e,r)=>{"use strict";({value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},n=f(r(114450)),i=f(r(249381)),a=f(r(45697)),u=r(667294),s=f(u),l=f(r(888632));function f(t){return t&&t.__esModule?t:{default:t}}var h={bgColor:a.default.oneOfType([a.default.object,a.default.string]),fgColor:a.default.oneOfType([a.default.object,a.default.string]),level:a.default.string,size:a.default.number,
value:a.default.string.isRequired},g=(0,u.forwardRef)((function(t,e){var r=t.bgColor,a=t.fgColor,u=t.level,f=t.size,h=t.value,g=function(t,e){var r={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o]);return r}(t,["bgColor","fgColor","level","size","value"]),d=new n.default(-1,i.default[u]);d.addData(h);d.make();var c=d.modules;return s.default.createElement(l.default,o({},g,{bgColor:r,bgD:c.map((function(t,e){return t.map((function(t,r){return t?"":"M "+r+" "+e+" l 1 0 0 1 -1 0 Z"})).join(" ")})).join(" "),fgColor:a,fgD:c.map((function(t,e){return t.map((function(t,r){return t?"M "+r+" "+e+" l 1 0 0 1 -1 0 Z":""})).join(" ")})).join(" "),ref:e,size:f,viewBoxSize:c.length}))}));g.displayName="QRCode";g.propTypes=h;g.defaultProps={bgColor:"#FFFFFF",fgColor:"#000000",level:"L",size:256};e.Z=g}}]);
//# sourceMappingURL=18c1073f960f1fc87bad.js.map