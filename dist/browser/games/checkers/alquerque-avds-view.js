exports.view=View={Game:{},Board:{},Move:{}},function(){function e(e,t,a,i,o,s,r,n,l){var c=document.createElement("canvas");c.width=c.height=512,ctxTmp=c.getContext("2d"),ctxTmp.fillStyle=r,ctxTmp.fillRect(0,0,512,512),ctxTmp.translate(256,256),l&&ctxTmp.rotate(l/180*Math.PI),ctxTmp.globalCompositeOperation=n,ctxTmp.drawImage(t,0,0,t.width,t.height,-256,-256,512,512),e.drawImage(c,0,0,512,512,a-o/2,i-s/2,o,s)}function t(t,a,i,o,s,r,n,l){e(t,a,i,o,s,r,n,"destination-in",l)}var a,i,o,s,r,n,l,c,d,h=1,u=12298905,p=2236962;View.Game.xdInitExtra=function(e){},View.Game.xdPreInit=function(e){},View.Game.chMakeDummyMesh=function(e){return"undefined"!=typeof THREE?new THREE.Mesh(new THREE.CubeGeometry(.001,.001,.001),new THREE.MeshLambertMaterial):null};var g={};View.Game.chMakeTokenPiece=function(e,a,i,o){var s=this.mViewOptions.fullPath,r="_"+a+"_"+i+"_",n=g[r];Array.isArray(n)?n.push(o):n?o(new THREE.Mesh(n.geometry,n.material)):(g[r]=[o],function(a,i,o){function r(){function e(e){i<0&&(e.fillStyle="rgba(0,0,0,0.9)",e.fillRect(0,0,u,u))}if(0==--h){var s=document.createElement("canvas");s.width=s.height=u;var r=new THREE.Texture(s),p=document.createElement("canvas");p.width=p.height=u;var g=new THREE.Texture(p),m=s.getContext("2d");m.drawImage(l,0,0,u,u),e(m),1==a&&t(m,d,u/2,u/2,u,u,i>0?"rgba(0,0,0,0.9)":"rgba(221, 193, 148, 1)",0),p.getContext("2d").drawImage(n,0,0,u,u),r.needsUpdate=!0,g.needsUpdate=!0;var f=document.createElement("canvas");f.width=f.height=u;var v=new THREE.Texture(f),w=f.getContext("2d");w.drawImage(l,0,0,u,u),e(w),v.needsUpdate=!0;var E="#050505",b=50;i<0&&(E="#111111",b=10);var y=new THREE.MeshPhongMaterial({name:"piecetop",color:14540253,specular:E,shininess:b,map:r,bumpMap:g,bumpScale:.06}),M=new THREE.MeshPhongMaterial({name:"pieceborders",color:14540253,specular:E,shininess:b,map:v}),T=new THREE.MultiMaterial([M,y]);o({geometry:c,material:T})}}var n,l,c,d,h=4,u=256;e.getResource("smoothedfilegeo|0|"+s+"/res/xd-view/meshes/piece-v2.js",function(e,t){c=e,r()}),e.getResource("image|"+s+"/res/xd-view/meshes/piecetop-bump.jpg",function(e){n=e,r()}),e.getResource("image|"+s+"/res/xd-view/meshes/piecediff.jpg",function(e){l=e,r()}),e.getResource("image|"+s+"/res/xd-view/meshes/piecetop-queen-mask.png",function(e){d=e,r()})}(a,i,function(e){var t=g[r];g[r]={geometry:e.geometry,material:e.material},t.forEach(function(t){t(new THREE.Mesh(e.geometry,e.material))})}))},View.Game.xdInit=function(e){function t(e,t,a,i){function o(){if(0==--n){for(var e=0;e<l.length;e++)s.add(l[e]);t(s)}}for(var s,r=["turtle-legs-smoothed","turtle-head-smoothed","turtle-tail-smoothed","turtle-hotel","turtle-house"],n=r.length,l=[],c=0;c<r.length;c++){var d=0,h=!1,u=!0;"turtle-hotel"!==r[c]&&"turtle-house"!==r[c]||(d=0),"turtle-hotel"===r[c]&&(u=!1);var p="smoothedfilegeo|"+d+"|"+b+"/res/xd-view/meshes/"+r[c]+".js";!function(t){e.getResource(p,function(a,n){function c(){if(0==--p){if(0==t)s=new THREE.Mesh(a,new THREE.MultiMaterial(d)),s.castShadow=!0,s.receiveShadow=h;else{var e=new THREE.Mesh(a,new THREE.MultiMaterial(d));e.castShadow=!0,e.receiveShadow=h,e.visible=u,e.title=r[t],l.push(e)}o()}}for(var d=[],p=1,g=0;g<n.length;g++)!function(t){p++;var a=n[t].clone();if("mat.turtle"===a.name&&(a.emissive={r:0,g:0,b:0}),"mat.turtle"===a.name||"mat.buildings"===a.name){a.shininess=10,a.specular={r:0,g:0,b:0};var o;o=i==-1?b+"/res/xd-view/meshes/turtle-black.png":b+"/res/xd-view/meshes/turtle.png",e.getMaterialMap(o,function(e){a.map=e,"mat.buildings"===a.name&&(a.shading=THREE.FlatShading),d[t]=a,c()})}else"mat.buildings"===a.name&&(a.shading=THREE.FlatShading),d[t]=a,c()}(g);c()})}(c)}}function g(i,o){e.createGadget("piece#"+o,{"2d":{type:"sprite",z:4,file:b+"/res/images/basic-pieces-v2x200.png",clipx:0,clipy:1==i?0:100,clipwidth:100,clipheight:100,width:s,height:s,opacity:1},green:{file:b+"/res/images/basic2.png"},"2d-wood-alquerque":{type:"sprite",z:4,file:b+"/res/images/basic-alquerque2.png",clipx:0,clipy:1==i?0:150,clipwidth:150,clipheight:150,width:.9*s,height:.9*s,opacity:1},kids:{type:"sprite",z:4,file:b+"/res/images/pieces-kids200x200.png",clipx:0,clipy:1==i?0:100,clipwidth:100,clipheight:100,width:.9*s,height:.9*s,opacity:1},classic3d:{type:"custommesh3d",create:function(t){return this._pKey="dummy",E.chMakeDummyMesh(e)},display:function(e,t,i){var o="_"+t.checkersType+"_"+t.checkersSide+"_";if(o!=this._pKey){this._pKey=o;var s=this;a.chMakeTokenPiece(s,t.checkersType,t.checkersSide,function(e){s.replaceMesh(e,t,i)})}},scale:[5/n,5/n,5/n],z:h},turkish3d:{type:"meshfile",scale:[1,1,1],smooth:0,z:h,materials:{base:{color:1==i?u:p,shininess:1==i?10:20,specular:1==i?{r:.5,g:.5,b:.5}:{r:.6,g:.3,b:0},reflectivity:.5,transparent:!0,opacity:1}}},alquerque3d:{type:"custommesh3d",scale:[1,1,1],create:function(){for(var e=THREE.SmoothShading,t=new THREE.MeshPhongMaterial({name:"ball",specular:328965,shininess:500,shading:e,opacity:1,transparent:!1,envMap:d,reflectivity:.2,combine:THREE.MixOperation}),a=l.clone(),i=0;i<a.faces.length;i++)a.faces[i].materialIndex=0;return new THREE.Mesh(a,new THREE.MultiMaterial([t]))}},turtles3d:{type:"custommesh3d",create:function(e){t(this,e,"pawn",i)},rotate:1==i?180:0,scale:[.5,.5,.5],checkersType:0,z:h,display:function(e,t){if(this.object3d.children)for(var a=0;a<this.object3d.children.length;a++){var i=this.object3d.children[a];switch(i.title){default:break;case"turtle-hotel":i.joclyVisible=1==t.checkersType||1==this.options.checkersType&&0!==t.checkersType;break;case"turtle-house":i.joclyVisible=0==t.checkersType||0==this.options.checkersType&&1!==t.checkersType}}}}})}function m(e,t,a){function i(e,t){var a=new THREE.Shape;return a.moveTo(-e/2,-t/2),a.lineTo(e/2,-t/2),a.lineTo(e/2,t/2),a.lineTo(-e/2,t/2),a}var o=i(t+.5+.1,a+.5+.1),s=i(t+.1,a+.1);o.holes.push(s);var r={amount:.4,steps:1,bevelSize:.1,bevelThickness:.04,bevelSegments:1},n=new THREE.ExtrudeGeometry(o,r),l=new THREE.Matrix4;l.makeRotationX(-Math.PI/2),n.applyMatrix(l);var c="#000000";e.options.frameColorFill&&(c=e.options.frameColorFill),frameMat=new THREE.MeshPhongMaterial({color:c,shininess:500,specular:"#444444"});var d=new THREE.Mesh(n,frameMat);return d.position.y=-r.amount-.01,d}function f(e,t,a,i){function r(e,t,a,i){e.textAlign="center",e.textBaseline="middle",e.fillStyle=i,e.font=Math.ceil(t/5)+"px Monospace";for(var s=0;s<E.g.Coord.length;s++){var r=E.g.Coord[s],l=r[0],c=E.g.getColumn(r[1],l);E.mViewAs>0&&(l=o-1-l),E.mViewAs<0&&(c=n-1-c);var d=E.checkersPosToString(s),h=(c+(1-n)/2)*t-t/3,u=(l+(1-o)/2)*a-a/3;e.fillText(d,h,u)}}var l=new THREE.Object3D,c=document.createElement("canvas");c.width=c.height=1024;var d=new THREE.Texture(c),h=document.createElement("canvas");h.width=h.height=1024;var u=new THREE.Texture(h),p=5;void 0!==e.options.margin&&(p=e.options.margin),e.getResource("image|"+b+"/res/images/wood-chipboard-5.jpg",function(i){function g(e,t,a,i,o,s){e.fillStyle=t,e.fillRect(a-o/2,i-s/2,o,s)}function f(e){e.strokeStyle="#000000",e.lineWidth="2";for(var t=0;t<o;t++)e.beginPath(),e.moveTo(-n/2*b,(-o/2+t)*y),e.lineTo(n/2*b,(-o/2+t)*y),e.stroke();for(var a=0;a<n;a++)e.beginPath(),e.moveTo((-n/2+a)*b,-o/2*y),e.lineTo((-n/2+a)*b,o/2*y),e.stroke();e.lineWidth="4",e.beginPath(),e.moveTo(-n/2*b,-o/2*y),e.lineTo(n/2*b,-o/2*y),e.lineTo(n/2*b,o/2*y),e.lineTo(-n/2*b,o/2*y),e.lineTo(-n/2*b,-o/2*y),e.stroke()}var v="rgba(159, 76, 12,0.2)",w="rgba(246, 222, 174,0.5)";void 0!==e.options.blackCellFill&&(v=e.options.blackCellFill),void 0!==e.options.whiteCellFill&&(w=e.options.whiteCellFill);var E=c.getContext("2d");E.translate(512,512),E.drawImage(i,-512,-512,1024,1024),E.fillStyle=v,E.fillRect(-512,-512,1024,1024);for(var b=1024/(n*(1+2*p/100)),y=1024/(o*(1+2*p/100)),M=0;M<o;M++)for(var T=0;T<n;T++)!function(e,t){g(E,(e+t)%2?v:w,(t+(1-n)/2)*b,(e+(1-o)/2)*y,b,y)}(M,T);f(E);var x=w;void 0!==e.options.notationColor&&(x=e.options.notationColor),a&&r(E,b,y,x);var R=h.getContext("2d");R.translate(512,512),R.fillStyle="#ffffff",R.fillRect(-512,-512,1024,1024),f(R),a&&r(R,b,y,"#000000"),d.needsUpdate=!0,u.needsUpdate=!0;var k="#010101";void 0!==e.options.boardSpecular&&(k=e.options.boardSpecular);var G=new THREE.PlaneGeometry((1+2*p/100)*n*s/1e3,(1+2*p/100)*o*s/1e3),H=new THREE.Mesh(G,new THREE.MeshPhongMaterial({map:d,bumpMap:u,bumpScale:.005,specular:k,shininess:400}));H.rotation.x=-Math.PI/2,H.receiveShadow=!0,l.add(H);var S=(1+2*p/100)*n*s/1e3,C=(1+2*p/100)*o*s/1e3,P=m(e,S,C);l.add(P),t(l)})}function v(e,t){function a(){if(0==--c){for(var e=0;e<d.length;e++)i.add(d[e]);t(i)}}for(var i,r=["board-alquerque-external-frame","board-checkers-triangle","board-checkers-slot"],l=new THREE.MeshPhongMaterial({color:2236962,shininess:10,specular:4473924}),c=r.length,d=[],h=0;h<r.length;h++){var u=0;"board-checkers-slot"==r[h]&&(u=0);var p="smoothedfilegeo|"+u+"|"+b+"/res/xd-view/meshes/"+r[h]+".js";!function(t){e.getResource(p,function(c,h){for(var u=[],p=0;p<h.length;p++){var g=h[p].clone();"mat.slot"!=g.name&&(g.shading=THREE.FlatShading),u.push(g)}if(0==t){u[0].specular={r:0,g:0,b:0},i=new THREE.Mesh(c,new THREE.MultiMaterial(u)),margin=-4;var f=(1+2*margin/100)*n*s/1e3,v=(1+2*margin/100)*o*s/1e3,w=m(e,f,v);w.position.y+=.2,w.scale.y*=1.2,i.add(w),i.receiveShadow=!0}else{switch(u[0].shininess=500,u[0].specular.setHex(131586),r[t]){case"board-checkers-triangle":for(var E=[{x:1,y:1},{x:1,y:-1},{x:-1,y:-1},{x:-1,y:1}],b=0;b<4;b++)for(var y=0;y<4;y++)for(var M=0;M<2;M++){var T;T=0==M?new THREE.Mesh(c,new THREE.MultiMaterial(u)):new THREE.Mesh(c,l),T.receiveShadow=!0,T.position.x=2*E[b].x,T.position.z=2*E[b].y,T.rotation.y=Math.PI/2*y,M>0&&(T.rotation.x=Math.PI,T.position.y=.28),d.push(T)}break;case"board-checkers-slot":for(var x=0;x<5;x++)for(var R=0;R<5;R++){var T=new THREE.Mesh(c,l);T.receiveShadow=!0,T.position.x=2*(R-2),T.position.z=2*(x-2),d.push(T)}break;default:var T=new THREE.Mesh(c,new THREE.MultiMaterial(u));T.receiveShadow=!0,T.title=r[t],d.push(T)}}a()})}(h)}}function w(e){var t=this;return this.getResource("smoothedfilegeo|0|"+b+"/res/xd-view/meshes/flatscreen.js",function(a,i){for(var o=[],s=0;s<i.length;s++)if("screen"==i[s].name){var r=i[s].clone();r.map=e,r.emissive={r:1,g:1,b:1},r.overdraw=!0,o.push(r)}else if("boomer"==i[s].name){var r=i[s].clone();r.shading=THREE.FlatShading,o.push(r)}else if("tv"==i[s].name){var r=i[s].clone();r.shading=THREE.FlatShading,o.push(r)}else o.push(i[s]);var n=new THREE.Mesh(a,new THREE.MultiMaterial(o));n.visible=!1,t.objectReady(n)}),null}var E=this;this.g.getColumn=function(e,t){return 2*e+t%2},this.g.dimensions={width:this.mOptions.width,squareWidth:2*this.mOptions.width,height:this.mOptions.height},this.xdPreInit();var b=this.mViewOptions.fullPath,y=(this.g.lightcellDistance,this.mOptions.initial);if(i=this.g.dimensions.width,n=this.g.dimensions.squareWidth,o=this.g.dimensions.height,s=Math.floor(12e3/n,12e3/o),"undefined"!=typeof THREE){l=new THREE.SphereGeometry(1,32,16),c=["black.png","white.png","red.png"];var M=b+"/res/xd-view/meshes/skybox/",T=[M+"px.jpg",M+"nx.jpg",M+"py.jpg",M+"ny.jpg",M+"pz.jpg",M+"nz.jpg"];d=(new THREE.CubeTextureLoader).load(T)}e.createGadget("board",{"2d":{type:"image"}}),e.createGadget("lightside",{"3d":{type:"custom3d",create:function(){return new THREE.PointLight(11184895,1,30)},z:1e4,x:1e4,castShadow:!1},turtles3d:{create:function(){return new THREE.PointLight(11184895,3,30,2)}}}),e.createGadget("lightback",{"3d":{type:"custom3d",create:function(){return new THREE.PointLight(11193599,.7,30)},z:1e4,y:-1e4,castShadow:!1},turtles3d:{create:function(){return new THREE.PointLight(11193599,3,30,2)}}});for(var x=0;x<this.g.Coord.length;x++)!function(t){e.createGadget("text#"+t,{"2d":{type:"element",width:.2*s,height:.2*s,initialClasses:"notation",css:{"text-align":"center"},z:4,display:function(e,a,i){e.css({"font-size":.6*i+"pt","line-height":1*i+"px"}).text(E.checkersPosToString(t))}},alquerque3d:{type:"custommesh3d",z:.05*-s,rotateX:-90,create:function(){var e=this;return this.getResource("font|"+b+"/res/xd-view/fonts/helvetiker_regular.typeface.json",function(a){var i=new THREE.TextGeometry(""+E.checkersPosToString(t),{size:.2,height:.05,curveSegments:6,font:a}),o=new THREE.MeshBasicMaterial,s=new THREE.Mesh(i,o);e.objectReady(s)}),null}}}),e.createGadget("cell#"+t,{"2d":{type:"element",initialClasses:"xd-choice",width:s,height:s,z:1},"3d":{type:"meshfile",file:b+"/res/xd-view/meshes/ring-target.js",flatShading:!0,smooth:0,z:0,scale:[8/n,8/n,8/n],materials:{square:{transparent:!0,opacity:0},ring:{color:16777215,opacity:1}}}})}(x);if(this.mInitial){for(var R=0;R<this.mInitial.pieces.length;R++){g(this.mInitial.pieces[R].s,R)}r=0;for(var R in y.a)r++;for(var R in y.b)r++}else{var k=0;for(var R in y.a)g(JocGame.PLAYER_A,k++);for(var R in y.b)g(JocGame.PLAYER_B,k++);r=y.a.length+y.b.length}var G={blackCellFill:"rgba(140, 41, 41,0.4)",whiteCellFill:"rgba(140, 41, 41,0.4)",notationColor:"#000000"},H={blackCellFill:"rgba(0,100,0,0.5)",whiteCellFill:"rgba(255,255,255,1)",frameColorFill:"#ffffff",boardSpecular:"#000000",margin:10};e.createGadget("boardframeNotations",{"3d":{type:"custommesh3d",create:function(e){f(this,e,!0,1)}},turkish3d:G,turtles3d:H}),e.createGadget("boardframeNotationsB",{"3d":{type:"custommesh3d",create:function(e){f(this,e,!0,-1)}},turkish3d:G,turtles3d:H}),e.createGadget("boardframeB",{"3d":{type:"custommesh3d",create:function(e){f(this,e,!1,-1)}},turkish3d:G,turtles3d:H}),e.createGadget("boardframe",{"3d":{type:"custommesh3d",create:function(e){f(this,e,!1,1)}},turkish3d:G,turtles3d:H,alquerque3d:{type:"custommesh3d",create:function(e){v(this,e)},scale:[1.2,1.2,1.2],checkersType:0,z:-320}}),e.createGadget("turtlesworld",{turtles3d:{harbor:!1,type:"custommesh3d",color:6719488,z:-850,create:function(){var e=this,t=new THREE.CylinderGeometry(150,150,1,64,1,!1),a=new THREE.MeshPhongMaterial({color:16711680}),i=new THREE.Mesh(t,a);return i.receiveShadow=!0,this.getResource("smoothedfilegeo|0|"+b+"/res/xd-view/meshes/rainbowflat.js",function(t,a){a[0].transparent=!0,a[0].opacity=.8,a[0].side=THREE.DoubleSide,a[0].shininess=10,a[0].specular.setHex(2236962);var o=new THREE.Mesh(t,new THREE.MultiMaterial(a));o.scale.set(7,7,7),o.position.set(7,0,-7),o.rotation.y=-45,i.add(o),e.objectReady(i)}),null}}}),e.createGadget("flowers",{turtles3d:{harbor:!1,type:"custommesh3d",create:function(){var e=this,t=new THREE.Object3D,a=b+"/res/xd-view/meshes/star.png",i=new THREE.TextureLoader;return i.setCrossOrigin("anonymous"),i.load(a,function(a){for(var i=a,o=0;o<1;o++){for(var s=new THREE.PointsMaterial({size:.5,map:i,blending:THREE.NormalBlending,depthTest:!0,transparent:!0}),r=new THREE.Geometry,o=0;o<1e3;o++){var n=new THREE.Vector3,l=12+40*Math.random(),c=2*Math.random()*Math.PI;n.x=l*Math.cos(c),n.z=l*Math.sin(c),n.y=.2,r.vertices.push(n)}s.color.setHex(16777215);var d=new THREE.Points(r,s);t.add(d)}e.objectReady(t)},function(e){console.log(e.loaded/e.total*100+"% loaded")},function(e){console.log("An error happened")}),null}}}),e.createGadget("rocks",{turtles3d:{harbor:!1,type:"custommesh3d",z:-200,scale:[1,1,1],flatShading:!0,create:function(){var e=this;return this.getResource("smoothedfilegeo|0|"+b+"/res/xd-view/meshes/rocksmoothed.js",function(t,a){for(var i=new THREE.Object3D,o=0;o<100;o++){var s=new THREE.Mesh(t,new THREE.MultiMaterial(a)),r=20+40*Math.random(),n=2*Math.random()*Math.PI,l=.3+2*Math.random();s.scale.set(l,l,l),s.position.x=r*Math.cos(n),s.position.z=r*Math.sin(n),s.rotation.y=2*Math.random()*Math.PI,s.castShadow=!0,i.add(s)}e.objectReady(i)}),null}}}),e.createGadget("fences",{turtles3d:{harbor:!1,type:"custommesh3d",z:-200,scale:[2,2,2],flatShading:!0,create:function(){var e=this;return this.getResource("smoothedfilegeo|0|"+b+"/res/xd-view/meshes/turtle-fences.js",function(t,a){for(var i=new THREE.MeshPhongMaterial({color:16777215,specular:2236962,shininess:100,shading:THREE.FlatShading}),o=new THREE.Mesh(t,i),s=0;s<3;s++){var r=new THREE.Mesh(t,i);r.rotation.y=(s+1)*(Math.PI/2),r.castShadow=!0,o.add(r)}e.objectReady(o)}),null}}});for(var S=0;S<o;S++)for(var C=0;C<n;C++){var R=S*n+C;e.createGadget("square#"+R,{"2d":{type:"element",z:2,classes:""},"3d":{receiveShadow:!0}}),e.saveGadgetProps("square#"+R,["color"],"initial")}e.createGadget("videoa",{"3d":{type:"video3d",makeMesh:function(e){w.call(this,e)}}}),e.createGadget("videob",{"3d":{type:"video3d",makeMesh:function(e){w.call(this,e)}}}),this.xdInitExtra(e)},View.Game.xdBuildScene=function(e){a=this;e.updateGadget("fences",{turtles3d:{visible:!0}}),e.updateGadget("rocks",{turtles3d:{visible:!0}}),e.updateGadget("flowers",{turtles3d:{visible:!0}}),e.updateGadget("turtlesworld",{turtles3d:{visible:!0}});e.updateGadget("videoa",{"3d":{visible:!0,scale:[2,2,2],rotate:1==this.mViewAs?180:0,rotateX:1==this.mViewAs?30:-30,z:3e3,y:1==this.mViewAs?12e3:-12e3,playerSide:1}}),e.updateGadget("videob",{"3d":{visible:!0,scale:[2,2,2],rotate:1==this.mViewAs?0:180,rotateX:1==this.mViewAs?-30:30,z:3e3,y:1==this.mViewAs?-12e3:12e3,playerSide:-1}}),e.updateGadget("board",{"2d":{visible:!0,rotate:this.mViewAs==JocGame.PLAYER_A?0:180,x:0,y:0,width:n*s,height:o*s}}),e.updateGadget("boardframe",{"3d":{visible:!this.mNotation&&this.mViewAs>0},alquerque3d:{visible:!0}}),e.updateGadget("boardframeNotations",{"3d":{visible:this.mNotation&&this.mViewAs>0},alquerque3d:{visible:!1}}),e.updateGadget("boardframeB",{"3d":{visible:!this.mNotation&&this.mViewAs<0},alquerque3d:{visible:!1}}),e.updateGadget("boardframeNotationsB",{"3d":{visible:this.mNotation&&this.mViewAs<0},alquerque3d:{visible:!1}}),e.updateGadget("lightside",{"3d":{visible:!0}}),e.updateGadget("lightback",{"3d":{visible:!0}});for(var t=0;t<o;t++)for(var i=0;i<n;i++){var r=t*n+i,l=(t+i)%2,c=this.getVCoord(t,i);e.updateGadget("square#"+r,{base:{x:c[0],y:c[1]},"2d":{initialClasses:l?"cell-black":"cell-white",width:s,height:s},"3d":{visible:!0,scale:[1,1,1]}})}for(var d=0;d<this.g.Coord.length;d++){var c=this.getCCoord(d);e.updateGadget("text#"+d,{base:{visible:this.mNotation},"2d":{x:c[0]-.42*s,y:c[1]-.42*s},"3d":{x:c[0]-.47*s,y:c[1]+.47*s},alquerque3d:{z:.02*s},turtles3d:{z:.02*s}}),e.updateGadget("cell#"+d,{base:{visible:!1,x:c[0],y:c[1]}})}},View.Game.getVCoord=function(){var e,t;if(1==arguments.length){var a=arguments[0],i=this.g.Coord[a];e=i[0],t=i[1]}else e=arguments[0],t=arguments[1];return e=o-1-e,this.mViewAs==JocGame.PLAYER_B&&(e=o-1-e,t=n-1-t),[(t-(n-1)/2)*s,(e-(o-1)/2)*s]},View.Game.getCCoord=function(e){var t=this.g.Coord[e],a=t[0],i=this.g.getColumn(t[1],a);return this.getVCoord(a,i)},View.Board.xdDisplay=function(e,t){for(var a=0;a<this.pieces.length;a++){var i=this.pieces[a];if(i){var o=t.getCCoord(i.p);e.updateGadget("piece#"+a,{base:{visible:!0,x:o[0],y:o[1]},"2d":{clipx:0==i.t?0:100,clipy:1==i.s?0:100,opacity:1},"2d-wood-alquerque":{clipy:1==i.s?0:150,clipx:0==i.t?0:150},kids:{clipy:1==i.s?0:100},"3d":{checkersType:i.t,checkersSide:i.s},classic3d:{z:h},alquerque3d:{z:.3*s,scale:[3e-4*s,3e-4*s,3e-4*s],materials:{ball:{map:t.mViewOptions.fullPath+"/res/xd-view/meshes/"+(i.s===JocGame.PLAYER_A?"red":"black")+(0==i.t?"":"-king")+".png",reflectivity:(i.s,JocGame.PLAYER_A,.6),opacity:1}}},turkish3d:{scale:[3e-4*s,3e-4*s,3e-4*s],file:t.mViewOptions.fullPath+"/res/xd-view/meshes/turkish"+(0==i.t?"":"-queen")+".js",z:h,materials:{base:{opacity:1}}},turtles3d:{scale:[3e-4*s,3e-4*s,3e-4*s],z:h,checkersType:i.t,rotate:this.CheckersAngle(t,i,i.plp,i.p)}})}else e.updateGadget("piece#"+a,{base:{visible:!1}})}for(var a=this.pieces.length;a<r;a++)e.updateGadget("piece#"+a,{base:{visible:!1}});e.updateGadget("boardframe",{"3d":{materials:{playera:{color:t.mViewAs==JocGame.PLAYER_A?u:p},playerb:{color:t.mViewAs==JocGame.PLAYER_B?u:p}}},turkish3d:{materials:{mainframe:{color:1118481}}},turtles3d:{materials:{mainframe:{color:5635976}}}}),e.updateGadget("videoa",{"3d":{materials:{tv:{color:u}}}}),e.updateGadget("videob",{"3d":{materials:{tv:{color:p}}}})},View.Board.xdInput=function(e,t){return{initial:{pos:[]},getActions:function(a,i){var o={},s=i.pos.length;return a.forEach(function(a){if(!(s>=a.pos.length)){var r=!0;if(i.pos.forEach(function(e,t){a.pos[t]!=e&&(r=!1)}),r){var n=a.pos[s],l=o[n];if(void 0===l){var c;c=s>0?this.board[a.pos[0]]:this.board[n]<0?null:this.board[n];var d=["cell#"+n];null!=c&&d.push("piece#"+c),l=o[n]={moves:[],view:["cell#"+n],click:d,highlight:function(a){e.updateGadget("cell#"+n,{"2d":{classes:"cancel"==a?"xd-cancel":"xd-choice-view",opacity:t.mShowMoves||"cancel"==a?.5:0},"3d":{materials:{ring:{color:"cancel"==a?16729088:16777215,opacity:t.mShowMoves||"cancel"==a?1:0,transparent:!t.mShowMoves&&"cancel"!=a}},castShadow:t.mShowMoves||"cancel"==a}})},unhighlight:function(){},validate:{pos:i.pos.concat([n])},execute:function(o){if(0==s)return void o();var r=null!=a.capt[s]?this.board[a.capt[s]]:null;this.checkersAnimateMove(e,t,this.board[i.pos[0]],a.pos[s],r,function(){o()})},unexecute:function(){var i=this.board[a.pos[0]],o=t.getCCoord(a.pos[s]);e.updateGadget("piece#"+i,{base:{x:o[0],y:o[1]}});var r=null!=a.capt[s]?this.board[a.capt[s]]:null;null!=r&&e.updateGadget("piece#"+r,{"2d":{opacity:1},"3d":{materials:{base:{opacity:1},queen:{opacity:1}}}})}}}l.moves.push(a)}}},this),o}}},View.Board.checkersAnimateMove=function(e,t,a,i,o,r){function n(){null!==o&&t.PlaySound("tac"+(1+Math.floor(3*Math.random()))),0==--l&&(e.updateGadget("piece#"+a,{"3d":{positionEasingUpdate:null}}),r())}null===o&&t.PlaySound("move"+(1+Math.floor(4*Math.random())));var l=1,c=t.getCCoord(i),d=h,u=s,p=-4*(u-0),g=null!==o?this.pieces[o].p:this.pieces[a].p;if(e.updateGadget("piece#"+a,{base:{x:c[0],y:c[1]},"3d":{positionEasingUpdate:function(e){null!==o&&(this.object3d.position.y=(p*e*e-p*e+d)*this.SCALE3D)}},alquerque3d:{positionEasingUpdate:function(e){d=.3*s,null!==o&&(this.object3d.position.y=(p*e*e-p*e+d)*this.SCALE3D)}},turtles3d:{rotate:this.CheckersAngle(t,this.pieces[a],g,i)}},400,n),null!==o){l++;t.getCCoord(this.pieces[o].p);e.updateGadget("piece#"+o,{"2d":{opacity:.3},"3d":{materials:{base:{opacity:.3},queen:{opacity:.3}}}},400,n)}},View.Board.checkersVanishCapts=function(e,t,a,i){function o(){0==--r&&i()}var r=0;for(var n in a)r++,e.updateGadget("piece#"+n,{"2d":{opacity:0},"3d":{z:.24*-s},turkish3d:{z:-s},kids3d:{z:.5*-s}},500,o);0==r&&i()},View.Board.xdPlayedMove=function(e,t,a){function i(){var d=null,h=a.capt[c];null!==h&&(d=r.board[h],l[d]=!0,haveCapts=!0),r.checkersAnimateMove(e,t,n,a.pos[c],d,function(){c++,c==a.pos.length?s.checkersVanishCapts(e,t,l,function(){if(0==r.pieces[r.board[a.pos[0]]].t){var e=t.g.Coord[a.pos[a.pos.length-1]][0];(1==s.mWho&&e==o-1||s.mWho==-1&&0==e)&&t.PlaySound("promo")}t.MoveShown()}):i()})}var s=this,r=t.mOldBoard,n=r.board[a.pos[0]],l={},c=1;return i(),!1},View.Board.CheckersAngle=function(e,t,a,i){if(a!=i){var o;if(e.CheckersEachDirection(a,function(a,s){for(;null!==a;){if(a==i){switch(s){case 0:o=135;break;case 2:o=45;break;case 3:o=-45;break;case 1:o=-135;break;default:o=e.mViewAs==t.s?180:0}return!1}a=e.g.Graph[a][s]}return!0}),void 0!==o)return 1==e.mViewAs?o:o+180}return e.mViewAs==t.s?180:0}}(),function(){View.Board.xdInput=function(e,t){return{initial:{pos:[]},getActions:function(a,i){var o={},s=i.pos.length,r=0,n=[];return a.forEach(function(e){var t=!0;i.pos.forEach(function(a,i){e.pos[i]!=a&&(t=!1)}),t&&(n.push(e),i.pos.length==e.pos.length?r|=1:r|=2)}),n.forEach(function(a){if(!(3!=r&&i.pos.length>=a.pos.length)){var n,l=a.pos[0],c=!1;i.pos.length==a.pos.length?(n=a.pos[Math.max(0,i.pos.length-1)],c=!0):n=a.pos[i.pos.length];var d=o[n];if(void 0===d){var h=null;(3!=r||c)&&(h=this.board[a.pos[0]]);var u=["cell#"+n];null!=h&&u.push("piece#"+h),function(s,r,n,l,c){d=o[r]={moves:[],view:["cell#"+r,"cell#"+s],click:n,highlight:function(a){"cancel"==a?e.updateGadget("cell#"+s,{base:{visible:!0},"2d":{classes:"xd-cancel",opacity:t.mShowMoves||.5},"3d":{materials:{ring:{color:16729088,opacity:t.mShowMoves||1,transparent:t.mShowMoves||!1}},castShadow:t.mShowMoves||!0}}):e.updateGadget("cell#"+r,{"2d":{classes:"xd-choice-view",opacity:t.mShowMoves||0},"3d":{materials:{ring:{color:16777215,opacity:t.mShowMoves||0,transparent:t.mShowMoves||!0}},castShadow:t.mShowMoves||!1}})},unhighlight:function(t){"cancel"==t?e.updateGadget("cell#"+s,{base:{visible:!1}}):e.updateGadget("cell#"+r,{base:{visible:!1}})},validate:{pos:i.pos.concat([r])},execute:function(o){if(0==l)return void o();if(c)return void o();var s=null!=a.capt[l]?this.board[a.capt[l]]:null;this.checkersAnimateMove(e,t,this.board[i.pos[0]],a.pos[l],s,function(){o()}),null!=s&&e.updateGadget("piece#"+s,{"2d":{opacity:.5},"3d":{materials:{ball:{opacity:.5,transparent:!0},base:{opacity:.5,transparent:!0},queen:{opacity:.5,transparent:!0}}}})},unexecute:function(){var i=this.board[a.pos[0]],o=t.getCCoord(a.pos[Math.max(0,l-1)]);e.updateGadget("piece#"+i,{base:{x:o[0],y:o[1]}});var s=null!=a.capt[l]?this.board[a.capt[l]]:null;null!=s&&e.updateGadget("piece#"+s,{"2d":{opacity:1},"3d":{materials:{ball:{opacity:1},base:{opacity:1},queen:{opacity:1}}}})}},l>0&&(d.cancel=["cell#"+s],d.noAutoCancel=!0)}(l,n,u,s,c)}d.moves.push(a)}},this),o}}}}(),View.Game.xdPreInit=function(){this.g.lightcellDistance=1.7,this.g.dimensions={width:this.mOptions.width,squareWidth:this.mOptions.width,height:this.mOptions.height},this.g.getColumn=function(e,t){return e}},View.Game.xdInitExtra=function(e){e.updateGadget("board",{"2d-wood-alquerque":{file:this.mViewOptions.fullPath+"/res/images/alquarqueboard1.jpg"}})};