"use strict";var _slicedToArray=function(){function e(e,r){var t=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();!function(){function e(e,r,t,n,o){var i=function(){this.g={}};Object.assign(i.prototype,t.Game.prototype,n.model.Game);var a=function(){};Object.assign(a.prototype,t.Board.prototype,n.model.Board),i.prototype.mBoardClass=a;var s=function(e){this.Init(e)};Object.assign(s.prototype,t.Move.prototype,n.model.Move),i.prototype.mMoveClass=s,i.prototype.config=o.config,"undefined"!=typeof SystemJS&&(i.prototype.config.baseURL=SystemJS.getConfig().baseURL,i.prototype.config.view.fullPath=SystemJS.getConfig().baseURL+"games/"+r.module),i.prototype.module=r.module,i.prototype.name=e;var m={game:o.config.model.gameOptions,view:o.config.view};c[e]={gameClass:i,initArgs:m};var u=new i;return u.Init(m),u}function r(e,r){var i=c[e];if(i){return new Promise(function(e,r){var t=new i.gameClass;t.Init(i.initArgs),e(t)})}return"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?n(e,r):"undefined"!=typeof process&&"node"===process.title?t(e,r):o(e,r)}function t(r,t){Date.now();return t=t||{},new Promise(function(t,n){var o=require("./jocly-allgames.js").games,i=o[r];if(!i)return n(new Error("Game "+r+" not found"));var a=require("./jocly.game.js"),s=require("./games/"+i.module+"/"+r+"-model.js"),m=require("./games/"+i.module+"/"+r+"-config.js");t(e(r,i,a,s,m))})}function n(r,t){Date.now();return t=t||{},new Promise(function(t,n){importScripts("jocly-allgames.js");var o=exports.games,i=o[r];if(!i)return n(new Error("Game "+r+" not found"));var a=exports,s=exports={};importScripts("jocly.game.js");var m=exports={};importScripts("games/"+i.module+"/"+r+"-model.js");var u=exports={};importScripts("games/"+i.module+"/"+r+"-config.js"),exports=a,t(e(r,i,s,m,u))})}function o(r,t){return t=t||{},new Promise(function(t,n){exports.listGames().then(function(o){var i=o[r];if(!i)return n(new Error("Game "+r+" not found"));var a=[SystemJS.import("jocly.game.js"),SystemJS.import("games/"+i.module+"/"+r+"-model.js"),SystemJS.import("games/"+i.module+"/"+r+"-config.js")];Promise.all(a).then(function(n){var o=_slicedToArray(n,3),a=o[0],s=o[1],m=o[2],u=e(r,i,a,s,m);t(u)},function(e){n(e)})},n)})}function i(e){return new Promise(function(t,n){r(e).then(function(r){var n=new a(e,r);t(n)},function(e){n(e)})})}function a(e,r){this.gameName=e,this.game=r,this.iframe=null,this.id=++g,d[this.id]=this}function s(e){var r=e.data,t=d[r.joclyEmbeddedGameId];if(t){var n=r.replyId;if(n){var o=p[n];if(o)if(delete p[n],"error"==r.message.type){var i=new Error(r.message.error.message,r.message.error.fileName,r.message.error.lineNumber);o(i)}else o(null,r.message)}else"machine-progress"==r.message.type&&t.machineProgressListener&&t.machineProgressListener(r.message.progress)}}function m(e,r,t){var n={message:r};if(t){var o=++l;n.replyId=o,p[o]=t}try{e.iframe.contentWindow.postMessage(n,"*")}catch(e){console.error("Message",r,"could not be posted:",e)}}function u(e,r,t){return t=Array.from(t||[]),new Promise(function(n,o){m(e,{type:"method",id:e.id,methodName:r,args:t},function(e,r){e?o(e):n.apply(null,r&&r.args||[])})})}var c={},h="browser";"undefined"!=typeof process&&"node"===process.title?h="node":"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&(h="worker"),exports.listGames=function(){return new Promise(function(e,r){"undefined"!=typeof SystemJS?SystemJS.import("jocly-allgames.js").then(function(r){if("undefined"!=typeof SystemJS){var t=SystemJS.getConfig().baseURL;for(var n in r.games){var o=r.games[n];o.thumbnail=t+"games/"+o.module+"/"+o.thumbnail}}e(r.games)},function(e){console.warn("Could not load Jocly games",e),r(e)}):e(require("./jocly-allgames.js").games)})};var f=!1,d={},l=0,p={},g=0;a.prototype.attachElement=function(e,r){if("node"==h)return Promise.reject(new Error("attachElement(): not supported in node.js"));if(!this.game||this.iframe)return Promise.reject(new Error("attachElement(): match is already attached"));r=r||{};var t=this;return new Promise(function(r,n){f||(f=!0,window.addEventListener("message",s)),t.element=e;var o=document.createElement("iframe"),i={name:"jocly-embedded-"+t.id,frameborder:0,src:SystemJS.getConfig().baseURL+"jocly.embed.html",width:"100%",height:"100%"};Object.keys(i).forEach(function(e){o.setAttribute(e,i[e])}),Object.assign(o.style,{position:"absolute",top:0,right:0,bottom:0,left:0,whiteSpace:"normal"});var a=document.createElement("div");Object.assign(a.style,{position:"relative",whiteSpace:"nowrap",width:"100%",height:"100%"}),a.appendChild(o),e.appendChild(a),t.iframe=o,o.onload=function(){m(t,{type:"init",id:t.id,gameName:t.gameName,playedMoves:t.game.mPlayedMoves},function(e,o){e?n(e):(t.game=null,r())})}})},a.prototype.detachElement=function(){if("node"==h)return Promise.reject(new Error("detachElement(): not supported in node.js"));if(this.game||!this.iframe)return Promise.reject(new Error("detachElement(): match is not attached"));var e=this;return new Promise(function(t,n){Promise.all([r(e.gameName),u(e,"getPlayedMoves")]).then(function(r){var t=_slicedToArray(r,2),n=t[0],o=t[1];return e.game=n,n.Load({playedMoves:o}),u(e,"destroy")}).then(function(){for(;e.element.firstChild;)e.element.removeChild(e.element.firstChild);delete e.element,delete e.iframe,t()}).catch(n)})},a.prototype.getTurn=function(){if(this.game){var e=this;return new Promise(function(r,t){r(e.game.GetWho())})}return u(this,"getTurn",arguments)},a.prototype.getMoveString=function(e){if(this.game){var r=this;return new Promise(function(t,n){t(Array.isArray(e)?e.map(function(e){return r.game.CreateMove(e).ToString()}):r.game.CreateMove(e).ToString())})}return u(this,"getMoveString",arguments)},a.prototype.pickMove=function(e){if(this.game){var r=this;return new Promise(function(t,n){r.game.mBoard.mMoves&&0!=r.game.mBoard.mMoves.length||r.game.mBoard.GenerateMoves(r.game),t(r.game.GetBestMatchingMove(e,r.game.mBoard.mMoves))})}return u(this,"pickMove",arguments)},a.prototype.playMove=function(e){if("node"==h||!this.iframe&&!this.area)return this.applyMove(e);if(this.game){var r=this;return new Promise(function(t,n){r.game.PlayMove(e).then(function(){var e=r.game.GetFinished();e||r.game.InvertWho(),r.game.DisplayBoard(),t({finished:!!e,winner:e})}).catch(function(e){n(e)})})}return u(this,"playMove",arguments)},a.prototype.applyMove=function(e){if(this.game){var r=this;return new Promise(function(t,n){r.game.ApplyMove(e);var o=r.game.GetFinished();o||r.game.InvertWho(),r.area&&r.game.DisplayBoard(),t({finished:!!o,winner:o})})}return u(this,"applyMove",arguments)},a.prototype.destroy=function(e){var r=this;if(this.game){return new Promise(function(e,t){r.area&&r.game.GameDestroyView(),e()})}return this.detachElement().then(function(){delete d[r.id]})},a.prototype.getPlayedMoves=function(){if(this.game){var e=this;return new Promise(function(r,t){r(Array.from(e.game.mPlayedMoves))})}return u(this,"getPlayedMoves")},a.prototype.userTurn=function(){if("node"==h)return Promise.reject(new Error("userTurn(): not supported in node.js"));if(!this.area&&!this.iframe)return Promise.reject(new Error("userTurn(): match is not attached to DOM element"));if(this.game){var e=function(){r.game.HumanMove=t,delete r.userTurnReject},r=this;if(this.userTurnReject)return Promise.reject(new Error("userTurn(): already in user input mode"));var t;return new Promise(function(e,n){function o(t){r.game.ApplyMove(t);var n=r.game.GetFinished();n||r.game.InvertWho(),r.game.DisplayBoard(),e({move:t,finished:!!n,winner:n})}r.userTurnReject=n,t=r.game.HumanMove,r.game.HumanMove=o,r.game.HumanTurn()}).then(function(r){return e(),r}).catch(function(r){throw e(),r})}return u(this,"userTurn")},a.prototype.abortUserTurn=function(){if("node"==h)return Promise.reject(new Error("abortUserTurn(): not supported in node.js"));if(!this.area&&!this.iframe)return Promise.reject(new Error("abortUserTurn(): match is not attached to DOM element"));if(this.game){var e=this;if(!this.userTurnReject)return Promise.reject(new Error("abortUserTurn(): not in user input mode"));return new Promise(function(r,t){e.game.HumanTurnEnd();var n=e.userTurnReject;delete e.userTurnReject,n(new Error("User input aborted")),r()})}return u(this,"abortUserTurn")},a.prototype.machineSearch=function(e){var r=this;if(this.game){var t=function(){r.game.MachineMove=n,r.game.MachineProgress=o,delete r.machineSearchReject};e=Object.assign({level:r.game.config.model.levels[0],threaded:!0},e);var n,o;return new Promise(function(t,i){function a(e){var n=e.move;delete e.move;var o=r.game.GetFinished();t({move:n,finished:!!o,winner:o})}function s(e){r.area&&window.parent.postMessage({joclyEmbeddedGameId:r.id,message:{type:"machine-progress",progress:e}},"*")}r.machineSearchReject=i,n=r.game.MachineMove,r.game.MachineMove=a,o=r.game.MachineProgress,r.game.MachineProgress=s,r.game.StartMachine(e)}).then(function(e){return t(),e}).catch(function(e){throw t(),e})}var i=function(){delete r.machineProgressListener};return e=e||{},r.machineProgressListener=e.progress||function(){},delete e.progress,u(this,"machineSearch",[e]).then(function(e){return i(),e}).catch(function(e){throw i(),e})},a.prototype.abortMachineSearch=function(){if(this.game){var e=this;if(!this.machineSearchReject)return Promise.reject(new Error("abortMachineSearch(): machine not searching"));return new Promise(function(r,t){e.game.StopThreadedMachine();var n=e.machineSearchReject;delete e.machineSearchReject,n(new Error("Machine search aborted")),r()})}return u(this,"abortMachineSearch")},a.prototype.setViewOptions=function(e){if("node"==h)return Promise.reject(new Error("setViewOptions(): not supported in node.js"));if(!this.area&&!this.iframe)return Promise.reject(new Error("setViewOptions(): match is not attached to DOM element"));if(this.game){var r=this;return new Promise(function(t,n){r.game.GameDestroyView();var o={mSkin:"skin",mNotation:"notation",mSounds:"sounds",mShowMoves:"showMoves",mAutoComplete:"autoComplete"};for(var i in o)void 0!==e[o[i]]&&(r.game[i]=e[o[i]]);r.game.GameInitView(),t()})}return u(this,"setViewOptions",arguments)},a.prototype.getFinished=function(){if(this.game){var e=this;return new Promise(function(r,t){var n=e.game.GetFinished();r({finished:!!n,winner:n})})}return u(this,"getFinished")},a.prototype.rollback=function(e){if(this.game){var r=this;return new Promise(function(t,n){e<0&&(e=r.game.mPlayedMoves.length+e),e=Math.max(0,Math.min(e,r.game.mPlayedMoves.length));var o=r.game.mPlayedMoves;r.game.BackTo(e,o),r.area&&r.game.DisplayBoard(),t()})}return u(this,"rollback",arguments)},a.prototype.otherPlayer=function(e){return new Promise(function(r,t){1==e?r(-1):e==-1?r(1):t(new Error("otherPlayer: invalid input"))})},a.prototype.save=function(){if(this.game){var e=this;return new Promise(function(r,t){r({playedMoves:Array.from(e.game.mPlayedMoves)})})}return u(this,"save")},a.prototype.load=function(e){if(this.game){var r=this;return new Promise(function(t,n){r.game.Load(e),r.area&&r.game.DisplayBoard(),t()})}return u(this,"load",arguments)},exports.createMatch=i,exports._createInternalGame=r,exports.PLAYER_A=1,exports.PLAYER_B=-1,exports.DRAW=2}();