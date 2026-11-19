(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,ee=1033,j=33776,M=33777,N=33778,P=33779,F=35840,te=35841,I=35842,ne=35843,re=36196,ie=37492,ae=37496,oe=37488,L=37489,R=37490,se=37491,ce=37808,le=37809,ue=37810,de=37811,fe=37812,pe=37813,me=37814,he=37815,ge=37816,_e=37817,ve=37818,ye=37819,be=37820,xe=37821,Se=36492,Ce=36494,we=36495,Te=36283,Ee=36284,De=36285,Oe=36286,ke=2300,Ae=2301,z=2302,je=2303,Me=2400,Ne=2401,B=2402,Pe=3200,Fe=`srgb`,V=`srgb-linear`,Ie=`linear`,Le=`srgb`,Re=7680,ze=7681,Be=35044,Ve=35048,He=2e3;function Ue(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function We(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ge(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ke(){let e=Ge(`canvas`);return e.style.display=`block`,e}var qe={};function Je(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ye(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function H(...e){e=Ye(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function U(...e){e=Ye(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Xe(...e){let t=e.join(` `);t in qe||(qe[t]=!0,H(...e))}function Ze(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Qe={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},$e=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},et=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),tt=1234567,nt=Math.PI/180,rt=180/Math.PI;function it(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(et[e&255]+et[e>>8&255]+et[e>>16&255]+et[e>>24&255]+`-`+et[t&255]+et[t>>8&255]+`-`+et[t>>16&15|64]+et[t>>24&255]+`-`+et[n&63|128]+et[n>>8&255]+`-`+et[n>>16&255]+et[n>>24&255]+et[r&255]+et[r>>8&255]+et[r>>16&255]+et[r>>24&255]).toLowerCase()}function W(e,t,n){return Math.max(t,Math.min(n,e))}function at(e,t){return(e%t+t)%t}function ot(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function st(e,t,n){return e===t?0:(n-e)/(t-e)}function ct(e,t,n){return(1-n)*e+n*t}function lt(e,t,n,r){return ct(e,t,1-Math.exp(-n*r))}function ut(e,t=1){return t-Math.abs(at(e,t*2)-t)}function dt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ft(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function pt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function mt(e,t){return e+Math.random()*(t-e)}function ht(e){return e*(.5-Math.random())}function gt(e){e!==void 0&&(tt=e);let t=tt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _t(e){return e*nt}function vt(e){return e*rt}function yt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function bt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function xt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function St(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:H(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ct(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function wt(e,t){if(t.constructor===Float32Array)return e;let n=Ct(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Tt(e,t){if(t.constructor===Float32Array)return e;let n=Ct(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Et={DEG2RAD:nt,RAD2DEG:rt,generateUUID:it,clamp:W,euclideanModulo:at,mapLinear:ot,inverseLerp:st,lerp:ct,damp:lt,pingpong:ut,smoothstep:dt,smootherstep:ft,randInt:pt,randFloat:mt,randFloatSpread:ht,seededRandom:gt,degToRad:_t,radToDeg:vt,isPowerOfTwo:yt,ceilPowerOfTwo:bt,floorPowerOfTwo:xt,setQuaternionFromProperEuler:St,normalize:Tt,denormalize:wt},G=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:H(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(W(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ot.copy(this).projectOnVector(e),this.sub(Ot)}reflect(e){return this.sub(Ot.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ot=new K,kt=new Dt,q=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Xe(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(At.makeScale(e,t)),this}rotate(e){return Xe(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(At.makeRotation(-e)),this}translate(e,t){return Xe(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(At.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},At=new q,jt=new q().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mt=new q().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nt(){let e={enabled:!0,workingColorSpace:V,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Ft(e.r),e.g=Ft(e.g),e.b=Ft(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=It(e.r),e.g=It(e.g),e.b=It(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ie:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[V]:{primaries:t,whitePoint:r,transfer:Ie,toXYZ:jt,fromXYZ:Mt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:r,transfer:Le,toXYZ:jt,fromXYZ:Mt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),e}var Pt=Nt();function Ft(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function It(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Lt,Rt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lt===void 0&&(Lt=Ge(`canvas`)),Lt.width=e.width,Lt.height=e.height;let t=Lt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Lt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ge(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ft(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ft(t[e]/255)*255):t[e]=Ft(t[e]);return{data:t,width:e.width,height:e.height}}return H(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},zt=0,Bt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zt++}),this.uuid=it(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Vt(r[t].image)):e.push(Vt(r[t]))}else e=Vt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Vt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Rt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(H(`Texture: Unable to serialize Texture.`),{})}var Ht=0,Ut=new K,Wt=class r extends $e{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ht++}),this.uuid=it(),this.name=``,this.source=new Bt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new q,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ut).x}get height(){return this.source.getSize(Ut).y}get depth(){return this.source.getSize(Ut).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){H(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?H(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null,Wt.DEFAULT_MAPPING=300,Wt.DEFAULT_ANISOTROPY=1;var Gt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this.w=W(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this.w=W(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kt=class extends $e{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Wt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Bt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},qt=class extends Kt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jt=class extends Wt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Yt=class extends Wt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Xt=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Zt.setFromMatrixColumn(e,0).length(),i=1/Zt.setFromMatrixColumn(e,1).length(),a=1/Zt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($t,e,en)}lookAt(e,t,n){let r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),tn.crossVectors(n,rn),tn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),tn.crossVectors(n,rn)),tn.normalize(),nn.crossVectors(rn,tn),r[0]=tn.x,r[4]=nn.x,r[8]=rn.x,r[1]=tn.y,r[5]=nn.y,r[9]=rn.y,r[2]=tn.z,r[6]=nn.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],M=r[3],N=r[7],P=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*ee+c*P,i[12]=a*w+o*O+s*j+c*F,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*ee+f*P,i[13]=l*w+u*O+d*j+f*F,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*ee+g*P,i[14]=p*w+m*O+h*j+g*F,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*ee+b*P,i[15]=_*w+v*O+y*j+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Zt.set(r[0],r[1],r[2]).length(),o=Zt.set(r[4],r[5],r[6]).length(),s=Zt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Qt.copy(this);let c=1/a,l=1/o,u=1/s;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=l,Qt.elements[5]*=l,Qt.elements[6]*=l,Qt.elements[8]*=u,Qt.elements[9]*=u,Qt.elements[10]*=u,t.setFromRotationMatrix(Qt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=He,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=He,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zt=new K,Qt=new Xt,$t=new K(0,0,0),en=new K(1,1,1),tn=new K,nn=new K,rn=new K,an=new Xt,on=new Dt,sn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(W(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-W(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(W(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-W(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(W(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-W(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:H(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return an.makeRotationFromQuaternion(e),this.setFromRotationMatrix(an,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return on.setFromEuler(this),this.setFromQuaternion(on,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER=`XYZ`;var cn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},ln=0,un=new K,dn=new Dt,fn=new Xt,pn=new K,mn=new K,hn=new K,gn=new Dt,_n=new K(1,0,0),vn=new K(0,1,0),yn=new K(0,0,1),bn={type:`added`},xn={type:`removed`},Sn={type:`childadded`,child:null},Cn={type:`childremoved`,child:null},wn=class e extends $e{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ln++}),this.uuid=it(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new sn,r=new Dt,i=new K(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new q}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.multiply(dn),this}rotateOnWorldAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.premultiply(dn),this}rotateX(e){return this.rotateOnAxis(_n,e)}rotateY(e){return this.rotateOnAxis(vn,e)}rotateZ(e){return this.rotateOnAxis(yn,e)}translateOnAxis(e,t){return un.copy(e).applyQuaternion(this.quaternion),this.position.add(un.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_n,e)}translateY(e){return this.translateOnAxis(vn,e)}translateZ(e){return this.translateOnAxis(yn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pn.copy(e):pn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),mn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(mn,pn,this.up):fn.lookAt(pn,mn,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),dn.setFromRotationMatrix(fn),this.quaternion.premultiply(dn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(U(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null):U(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xn),Cn.child=e,this.dispatchEvent(Cn),Cn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,e,hn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,gn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};wn.DEFAULT_UP=new K(0,1,0),wn.DEFAULT_MATRIX_AUTO_UPDATE=!0,wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=class extends wn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},En={type:`move`},Dn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(En)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},On={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},An={h:0,s:0,l:0};function jn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var J=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Pt.workingColorSpace){if(e=at(e,1),t=W(t,0,1),n=W(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=jn(i,r,e+1/3),this.g=jn(i,r,e),this.b=jn(i,r,e-1/3)}return Pt.colorSpaceToWorking(this,r),this}setStyle(e,t=Fe){function n(t){t!==void 0&&parseFloat(t)<1&&H(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:H(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);H(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fe){let n=On[e.toLowerCase()];return n===void 0?H(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ft(e.r),this.g=Ft(e.g),this.b=Ft(e.b),this}copyLinearToSRGB(e){return this.r=It(e.r),this.g=It(e.g),this.b=It(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fe){return Pt.workingToColorSpace(Mn.copy(this),e),Math.round(W(Mn.r*255,0,255))*65536+Math.round(W(Mn.g*255,0,255))*256+Math.round(W(Mn.b*255,0,255))}getHexString(e=Fe){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,r=Mn.g,i=Mn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Fe){Pt.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,r=Mn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(An);let n=ct(kn.h,An.h,t),r=ct(kn.s,An.s,t),i=ct(kn.l,An.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new J;J.NAMES=On;var Nn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new J(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pn=class extends wn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fn=new K,In=new K,Ln=new K,Rn=new K,zn=new K,Bn=new K,Vn=new K,Hn=new K,Un=new K,Wn=new K,Gn=new Gt,Kn=new Gt,qn=new Gt,Jn=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Fn.subVectors(e,t),r.cross(Fn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Fn.subVectors(r,t),In.subVectors(n,t),Ln.subVectors(e,t);let a=Fn.dot(Fn),o=Fn.dot(In),s=Fn.dot(Ln),c=In.dot(In),l=In.dot(Ln),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Rn)!==null&&Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Rn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Rn.x),s.addScaledVector(a,Rn.y),s.addScaledVector(o,Rn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Gn.setScalar(0),Kn.setScalar(0),qn.setScalar(0),Gn.fromBufferAttribute(e,t),Kn.fromBufferAttribute(e,n),qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Gn,i.x),a.addScaledVector(Kn,i.y),a.addScaledVector(qn,i.z),a}static isFrontFacing(e,t,n,r){return Fn.subVectors(n,t),In.subVectors(e,t),Fn.cross(In).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),Fn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;zn.subVectors(r,n),Bn.subVectors(i,n),Hn.subVectors(e,n);let s=zn.dot(Hn),c=Bn.dot(Hn);if(s<=0&&c<=0)return t.copy(n);Un.subVectors(e,r);let l=zn.dot(Un),u=Bn.dot(Un);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(zn,a);Wn.subVectors(e,i);let f=zn.dot(Wn),p=Bn.dot(Wn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Bn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Vn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Vn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(zn,a).addScaledVector(Bn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yn=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Zn):Zn.fromBufferAttribute(r,t),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Qn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Qn.copy(e.boundingBox)),Qn.applyMatrix4(e.matrixWorld),this.union(Qn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),or.subVectors(this.max,ar),$n.subVectors(e.a,ar),er.subVectors(e.b,ar),tr.subVectors(e.c,ar),nr.subVectors(er,$n),rr.subVectors(tr,er),ir.subVectors($n,tr);let t=[0,-nr.z,nr.y,0,-rr.z,rr.y,0,-ir.z,ir.y,nr.z,0,-nr.x,rr.z,0,-rr.x,ir.z,0,-ir.x,-nr.y,nr.x,0,-rr.y,rr.x,0,-ir.y,ir.x,0];return!lr(t,$n,er,tr,or)||(t=[1,0,0,0,1,0,0,0,1],!lr(t,$n,er,tr,or))?!1:(sr.crossVectors(nr,rr),t=[sr.x,sr.y,sr.z],lr(t,$n,er,tr,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xn=[new K,new K,new K,new K,new K,new K,new K,new K],Zn=new K,Qn=new Yn,$n=new K,er=new K,tr=new K,nr=new K,rr=new K,ir=new K,ar=new K,or=new K,sr=new K,cr=new K;function lr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){cr.fromArray(e,a);let o=i.x*Math.abs(cr.x)+i.y*Math.abs(cr.y)+i.z*Math.abs(cr.z),s=t.dot(cr),c=n.dot(cr),l=r.dot(cr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ur=new K,dr=new G,fr=0,pr=class extends $e{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Be,this.updateRanges=[],this.gpuType=h,this.version=0,this._normalizationScale=e===void 0?void 0:Ct(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix4(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyNormalMatrix(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.transformDirection(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?wt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Tt(e,this.array):Math.round(e*t)}},mr=class extends pr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},hr=class extends pr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},gr=class extends pr{constructor(e,t,n){super(new Float32Array(e),t,n)}},_r=new Yn,vr=new K,yr=new K,br=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?_r.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);let t=vr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(vr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(yr)),this.expandByPoint(vr.copy(e.center).sub(yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xr=0,Sr=new Xt,Cr=new wn,wr=new K,Tr=new Yn,Er=new Yn,Dr=new K,Or=class e extends $e{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xr++}),this.uuid=it(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ue(e)?hr:mr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new q().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sr.makeRotationFromQuaternion(e),this.applyMatrix4(Sr),this}rotateX(e){return Sr.makeRotationX(e),this.applyMatrix4(Sr),this}rotateY(e){return Sr.makeRotationY(e),this.applyMatrix4(Sr),this}rotateZ(e){return Sr.makeRotationZ(e),this.applyMatrix4(Sr),this}translate(e,t,n){return Sr.makeTranslation(e,t,n),this.applyMatrix4(Sr),this}scale(e,t,n){return Sr.makeScale(e,t,n),this.applyMatrix4(Sr),this}lookAt(e){return Cr.lookAt(e),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new gr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&H(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)U(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Tr.setFromBufferAttribute(n),this.morphTargetsRelative?(Dr.addVectors(this.boundingBox.min,Tr.min),this.boundingBox.expandByPoint(Dr),Dr.addVectors(this.boundingBox.max,Tr.max),this.boundingBox.expandByPoint(Dr)):(this.boundingBox.expandByPoint(Tr.min),this.boundingBox.expandByPoint(Tr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&U(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)U(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);else if(e){let n=this.boundingSphere.center;if(Tr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Er.setFromBufferAttribute(n),this.morphTargetsRelative?(Dr.addVectors(Tr.min,Er.min),Tr.expandByPoint(Dr),Dr.addVectors(Tr.max,Er.max),Tr.expandByPoint(Dr)):(Tr.expandByPoint(Er.min),Tr.expandByPoint(Er.max))}Tr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Dr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Dr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Dr.fromBufferAttribute(a,t),o&&(wr.fromBufferAttribute(e,t),Dr.add(wr)),r=Math.max(r,n.distanceToSquared(Dr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&U(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){U(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new pr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new K,s[e]=new K;let l=new K,u=new K,d=new K,f=new G,p=new G,m=new G,h=new K,g=new K;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new K,b=new K,x=new K,S=new K;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new pr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dr.fromBufferAttribute(e,t),Dr.normalize(),e.setXYZ(t,Dr.x,Dr.y,Dr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new pr(a,r,i)}if(this.index===null)return H(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},kr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Be,this.updateRanges=[],this.version=0,this.uuid=it()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ar(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ar(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Ar(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=it()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var jr=new K,Mr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:Ct(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix4(e),this.setXYZ(t,jr.x,jr.y,jr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyNormalMatrix(e),this.setXYZ(t,jr.x,jr.y,jr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.transformDirection(e),this.setXYZ(t,jr.x,jr.y,jr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Je(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new pr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Je(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?wt(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Tt(e,this.data.array):Math.round(e*t)}},Nr=new K,Pr=new K,Fr=new q,Ir=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Nr.subVectors(n,t).cross(Pr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Nr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fr.getNormalMatrix(e),r=this.coplanarPoint(Nr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Lr=0,Rr=class extends $e{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lr++}),this.uuid=it(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new J(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Re,this.stencilZFail=Re,this.stencilZPass=Re,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){H(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?H(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new J().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Ir().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new G().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new G().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},zr=class extends Rr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new J(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Br,Vr=new K,Hr=new K,Ur=new K,Wr=new G,Gr=new G,Kr=new Xt,qr=new K,Jr=new K,Yr=new K,Xr=new G,Zr=new G,Qr=new G,$r=class extends wn{constructor(e=new zr){if(super(),this.isSprite=!0,this.type=`Sprite`,Br===void 0){Br=new Or;let e=new kr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Br.setIndex([0,1,2,0,2,3]),Br.setAttribute(`position`,new Mr(e,3,0,!1)),Br.setAttribute(`uv`,new Mr(e,2,3,!1))}this.geometry=Br,this.material=e,this.center=new G(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&U(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Hr.setFromMatrixScale(this.matrixWorld),Kr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Ur.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ei(qr.set(-.5,-.5,0),Ur,a,Hr,r,i),ei(Jr.set(.5,-.5,0),Ur,a,Hr,r,i),ei(Yr.set(.5,.5,0),Ur,a,Hr,r,i),Xr.set(0,0),Zr.set(1,0),Qr.set(1,1);let o=e.ray.intersectTriangle(qr,Jr,Yr,!1,Vr);if(o===null&&(ei(Jr.set(-.5,.5,0),Ur,a,Hr,r,i),Zr.set(0,1),o=e.ray.intersectTriangle(qr,Yr,Jr,!1,Vr),o===null))return;let s=e.ray.origin.distanceTo(Vr);s<e.near||s>e.far||t.push({distance:s,point:Vr.clone(),uv:Jn.getInterpolation(Vr,qr,Jr,Yr,Xr,Zr,Qr,new G),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function ei(e,t,n,r,i,a){Wr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Gr.copy(Wr):(Gr.x=a*Wr.x-i*Wr.y,Gr.y=i*Wr.x+a*Wr.y),e.copy(t),e.x+=Gr.x,e.y+=Gr.y,e.applyMatrix4(Kr)}var ti=new K,ni=new K,ri=new K,ii=new K,ai=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ni.copy(e).add(t).multiplyScalar(.5),ri.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(ni);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ri),o=ii.dot(this.direction),s=-ii.dot(ri),c=ii.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ni).addScaledVector(ri,d),f}intersectSphere(e,t){if(e.radius<0)return null;ti.subVectors(e.center,this.origin);let n=ti.dot(this.direction),r=ti.dot(ti)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,j,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,j=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,j=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,j=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,j=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,j=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,j=g)),w===0)return null;let N=S/w,P=C/w,F=1/w,te=T-N*D,I=E-P*D,ne=O-N*A,re=k-P*A,ie=ee-N*M,ae=j-P*M,oe=ie*re-ae*ne,L=te*ae-I*ie,R=ne*I-re*te;if(r){if(oe<0||L<0||R<0)return null}else if((oe<0||L<0||R<0)&&(oe>0||L>0||R>0))return null;let se=oe+L+R;if(se===0)return null;let ce=F*(oe*D+L*A+R*M);return(se>0?ce<0:ce>0)?null:this.at(ce/se,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oi=class extends Rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new J(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},si=new Xt,ci=new ai,li=new br,ui=new K,di=new K,fi=new K,pi=new K,mi=new K,hi=new K,gi=new K,_i=new K,Y=class extends wn{constructor(e=new Or,t=new oi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){hi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(mi.fromBufferAttribute(s,e),a?hi.addScaledVector(mi,r):hi.addScaledVector(mi.sub(t),r))}t.add(hi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),li.copy(n.boundingSphere),li.applyMatrix4(i),ci.copy(e.ray).recast(e.near),li.containsPoint(ci.origin)===!1&&(ci.intersectSphere(li,ui)===null||ci.origin.distanceToSquared(ui)>(e.far-e.near)**2)||(si.copy(i).invert(),ci.copy(e.ray).applyMatrix4(si),(n.boundingBox===null||ci.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=yi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=yi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=yi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=yi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function vi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;_i.copy(s),_i.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(_i);return l<n.near||l>n.far?null:{distance:l,point:_i.clone(),object:e}}function yi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,di),e.getVertexPosition(c,fi),e.getVertexPosition(l,pi);let u=vi(e,t,n,r,di,fi,pi,gi);if(u){let e=new K;Jn.getBarycoord(gi,di,fi,pi,e),i&&(u.uv=Jn.getInterpolatedAttribute(i,s,c,l,e,new G)),a&&(u.uv1=Jn.getInterpolatedAttribute(a,s,c,l,e,new G)),o&&(u.normal=Jn.getInterpolatedAttribute(o,s,c,l,e,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new K,materialIndex:0};Jn.getNormal(di,fi,pi,t.normal),u.face=t,u.barycoord=e}return u}var bi=class extends Wt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xi=class extends pr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Si=new Xt,Ci=new Xt,wi=[],Ti=new Yn,Ei=new Xt,Di=new Y,Oi=new br,ki=class extends Y{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Ei)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Si),Ti.copy(e.boundingBox).applyMatrix4(Si),this.boundingBox.union(Ti)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new br),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Si),Oi.copy(e.boundingSphere).applyMatrix4(Si),this.boundingSphere.union(Oi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Di.geometry=this.geometry,Di.material=this.material,Di.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oi.copy(this.boundingSphere),Oi.applyMatrix4(n),e.ray.intersectsSphere(Oi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Si),Ci.multiplyMatrices(n,Si),Di.matrixWorld=Ci,Di.raycast(e,wi);for(let e=0,n=wi.length;e<n;e++){let n=wi[e];n.instanceId=i,n.object=this,t.push(n)}wi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new bi(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ai=new br,ji=new G(.5,.5),Mi=new K,Ni=class{constructor(e=new Ir,t=new Ir,n=new Ir,r=new Ir,i=new Ir,a=new Ir){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=He,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476+ji.distanceTo(e.center),Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Mi.x=r.normal.x>0?e.max.x:e.min.x,Mi.y=r.normal.y>0?e.max.y:e.min.y,Mi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Mi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Pi=new Xt,Fi=class e{constructor(){this.coordinateSystem=He,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Pi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Ni),n[e].setFromProjectionMatrix(Pi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Ni),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Ii=class extends Rr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new J(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Li=new K,Ri=new K,zi=new Xt,Bi=new ai,Vi=new br,Hi=new K,Ui=new K,Wi=class extends wn{constructor(e=new Or,t=new Ii){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Li.fromBufferAttribute(t,e-1),Ri.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Li.distanceTo(Ri);e.setAttribute(`lineDistance`,new gr(n,1))}else H(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vi.copy(n.boundingSphere),Vi.applyMatrix4(r),Vi.radius+=i,e.ray.intersectsSphere(Vi)===!1)return;zi.copy(r).invert(),Bi.copy(e.ray).applyMatrix4(zi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Gi(this,e,Bi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Gi(this,e,Bi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Gi(this,e,Bi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Gi(this,e,Bi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Gi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Li.fromBufferAttribute(s,i),Ri.fromBufferAttribute(s,a),n.distanceSqToSegment(Li,Ri,Hi,Ui)>r)return;Hi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Hi);if(!(c<t.near||c>t.far))return{distance:c,point:Ui.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Ki=new K,qi=new K,Ji=class extends Wi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Ki.fromBufferAttribute(t,e),qi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Ki.distanceTo(qi);e.setAttribute(`lineDistance`,new gr(n,1))}else H(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Yi=class extends Wt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xi=class extends Wt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Zi=class extends Wt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Qi=class extends Zi{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},$i=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ea=class e extends Or{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new gr(c,3)),this.setAttribute(`normal`,new gr(l,3)),this.setAttribute(`uv`,new gr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new K;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ta=class e extends Or{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new K,g=new K;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new gr(o,3)),this.setAttribute(`normal`,new gr(s,3)),this.setAttribute(`uv`,new gr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},na=class e extends Or{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new K,l=new G;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new gr(a,3)),this.setAttribute(`normal`,new gr(o,3)),this.setAttribute(`uv`,new gr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ra=class e extends Or{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new gr(u,3)),this.setAttribute(`normal`,new gr(d,3)),this.setAttribute(`uv`,new gr(f,2));function _(){let a=new K,_=new K,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new G,m=new K,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ia=class e extends ra{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},aa=class e extends Or{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new gr(i,3)),this.setAttribute(`normal`,new gr(i.slice(),3)),this.setAttribute(`uv`,new gr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new K,r=new K,i=new K;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new K;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new K;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new K,t=new K,n=new K,r=new K,o=new G,s=new G,c=new G;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},oa=class e extends aa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},sa=class e extends aa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ca=class e extends Or{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new gr(p,3)),this.setAttribute(`normal`,new gr(m,3)),this.setAttribute(`uv`,new gr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},la=class e extends Or{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new K,p=new G;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new gr(s,3)),this.setAttribute(`normal`,new gr(c,3)),this.setAttribute(`uv`,new gr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ua=class e extends Or{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new K,d=new K,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new gr(p,3)),this.setAttribute(`normal`,new gr(m,3)),this.setAttribute(`uv`,new gr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function da(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(pa(i))i.isRenderTargetTexture?(H(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(pa(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function fa(e){let t={};for(let n=0;n<e.length;n++){let r=da(e[n]);for(let e in r)t[e]=r[e]}return t}function pa(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ma(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ha(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pt.workingColorSpace}var ga={clone:da,merge:fa},_a=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,va=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ya=class extends Rr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_a,this.fragmentShader=va,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=da(e.uniforms),this.uniformsGroups=ma(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new J().setHex(r.value);break;case`v2`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Gt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Xt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ba=class extends ya{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},xa=class extends Rr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new J(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new J(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sa=class extends Rr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new J(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new J(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ca=class extends Rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Pe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wa=class extends Rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ta(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ea(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Da=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Oa=class extends Da{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Me,endingEnd:Me}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ne:i=e,o=2*t-n;break;case B:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ne:a=e,s=2*n-t;break;case B:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ka=class extends Da{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Aa=class extends Da{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ja=class extends Da{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Pa(n,t,g,y,r);i[p]=Ma(x,o,_,b,m)}return i}};function Ma(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Na(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Pa(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Ma(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Na(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Fa=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ta(t,this.TimeBufferType),this.values=Ta(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ta(e.times,Array),values:Ta(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ea(e.settings)&&(n.settings={inTangents:Ta(e.settings.inTangents,Array),outTangents:Ta(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ja(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ke:t=this.InterpolantFactoryMethodDiscrete;break;case Ae:t=this.InterpolantFactoryMethodLinear;break;case z:t=this.InterpolantFactoryMethodSmooth;break;case je:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return H(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ke;case this.InterpolantFactoryMethodLinear:return Ae;case this.InterpolantFactoryMethodSmooth:return z;case this.InterpolantFactoryMethodBezier:return je}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Ea(this.settings)&&(Ia(this.settings.inTangents,e),Ia(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ea(this.settings)&&(La(this.settings.inTangents,e),La(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(U(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(U(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){U(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){U(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&We(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){U(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===z,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ea(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ia(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function La(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Fa.prototype.ValueTypeName=``,Fa.prototype.TimeBufferType=Float32Array,Fa.prototype.ValueBufferType=Float32Array,Fa.prototype.DefaultInterpolation=Ae;var Ra=class extends Fa{constructor(e,t,n){super(e,t,n)}};Ra.prototype.ValueTypeName=`bool`,Ra.prototype.ValueBufferType=Array,Ra.prototype.DefaultInterpolation=ke,Ra.prototype.InterpolantFactoryMethodLinear=void 0,Ra.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends Fa{constructor(e,t,n,r){super(e,t,n,r)}};za.prototype.ValueTypeName=`color`;var Ba=class extends Fa{constructor(e,t,n,r){super(e,t,n,r)}};Ba.prototype.ValueTypeName=`number`;var Va=class extends Da{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Dt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ha=class extends Fa{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Va(this.times,this.values,this.getValueSize(),e)}};Ha.prototype.ValueTypeName=`quaternion`,Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends Fa{constructor(e,t,n){super(e,t,n)}};Ua.prototype.ValueTypeName=`string`,Ua.prototype.ValueBufferType=Array,Ua.prototype.DefaultInterpolation=ke,Ua.prototype.InterpolantFactoryMethodLinear=void 0,Ua.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends Fa{constructor(e,t,n,r){super(e,t,n,r)}};Wa.prototype.ValueTypeName=`vector`;var Ga=class extends wn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new J(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ka=class extends Ga{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new J(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},qa=new Xt,Ja=new K,Ya=new K,Xa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new G(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ni,this._frameExtents=new G(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ja.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ja),Ya.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ya),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(qa,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Za=new K,Qa=new Dt,$a=new K,eo=class extends wn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=He,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Za,Qa,$a),$a.x===1&&$a.y===1&&$a.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Qa,$a.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Za,Qa,$a),$a.x===1&&$a.y===1&&$a.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Qa,$a.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},to=new K,no=new G,ro=new G,io=class extends eo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rt*2*Math.atan(Math.tan(nt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){to.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(to.x,to.y).multiplyScalar(-e/to.z),to.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(to.x,to.y).multiplyScalar(-e/to.z)}getViewSize(e,t){return this.getViewBounds(e,no,ro),t.subVectors(ro,no)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ao=class extends Xa{constructor(){super(new io(90,1,.5,500)),this.isPointLightShadow=!0}},oo=class extends Ga{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ao}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},so=class extends eo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},co=class extends Xa{constructor(){super(new so(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lo=class extends Ga{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new co}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},uo=class extends Or{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},fo=-90,po=1,mo=class extends wn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new io(fo,po,e,t);r.layers=this.layers,this.add(r);let i=new io(fo,po,e,t);i.layers=this.layers,this.add(i);let a=new io(fo,po,e,t);a.layers=this.layers,this.add(a);let o=new io(fo,po,e,t);o.layers=this.layers,this.add(o);let s=new io(fo,po,e,t);s.layers=this.layers,this.add(s);let c=new io(fo,po,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ho=class extends io{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},go=`\\[\\]\\.:\\/`,_o=RegExp(`[\\[\\]\\.:\\/]`,`g`),vo=`[^\\[\\]\\.:\\/]`,yo=`[^`+go.replace(`\\.`,``)+`]`,bo=`((?:WC+[\\/:])*)`.replace(`WC`,vo),xo=`(WCOD+)?`.replace(`WCOD`,yo),So=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,vo),Co=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,vo),wo=RegExp(`^`+bo+xo+So+Co+`$`),To=[`material`,`materials`,`bones`,`map`],Eo=class{constructor(e,t,n){let r=n||Do.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Do=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(_o,``)}static parseTrackName(e){let t=wo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);To.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){H(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){U(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){U(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){U(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){U(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){U(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;U(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Do.Composite=Eo,Do.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Do.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Do.prototype.GetterByBindingType=[Do.prototype._getValue_direct,Do.prototype._getValue_array,Do.prototype._getValue_arrayElement,Do.prototype._getValue_toArray],Do.prototype.SetterByBindingTypeAndVersioning=[[Do.prototype._setValue_direct,Do.prototype._setValue_direct_setNeedsUpdate,Do.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Do.prototype._setValue_array,Do.prototype._setValue_array_setNeedsUpdate,Do.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Do.prototype._setValue_arrayElement,Do.prototype._setValue_arrayElement_setNeedsUpdate,Do.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Do.prototype._setValue_fromArray,Do.prototype._setValue_fromArray_setNeedsUpdate,Do.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Oo=new Xt,ko=class{constructor(e,t,n=0,r=1/0){this.ray=new ai(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new cn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):U(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Oo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Oo),this}intersectObject(e,t=!0,n=[]){return jo(e,this,n,t),n.sort(Ao),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)jo(e[r],this,n,t);return n.sort(Ao),n}};function Ao(e,t){return e.distance-t.distance}function jo(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)jo(r[e],t,n,!0)}}(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function Mo(e,t,n,r){let i=No(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case j:case M:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case N:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case te:case ne:return Math.max(e,16)*Math.max(t,8)/4;case F:case I:return Math.max(e,8)*Math.max(t,8)/2;case re:case ie:case oe:case L:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ae:case R:case se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case le:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case de:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case fe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case pe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ge:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case be:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case xe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Se:case Ce:case we:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Te:case Ee:return Math.ceil(e/4)*Math.ceil(t/4)*8;case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function No(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?H(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Po(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Fo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Io={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new J(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new q}},envmap:{envMap:{value:null},envMapRotation:{value:new q},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new q}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new q}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new q},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new q},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new q},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new q}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new q}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new q}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new J(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new J(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0},uvTransform:{value:new q}},sprite:{diffuse:{value:new J(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}}},Lo={basic:{uniforms:fa([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Io.meshbasic_vert,fragmentShader:Io.meshbasic_frag},lambert:{uniforms:fa([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new J(0)},envMapIntensity:{value:1}}]),vertexShader:Io.meshlambert_vert,fragmentShader:Io.meshlambert_frag},phong:{uniforms:fa([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new J(0)},specular:{value:new J(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Io.meshphong_vert,fragmentShader:Io.meshphong_frag},standard:{uniforms:fa([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new J(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Io.meshphysical_vert,fragmentShader:Io.meshphysical_frag},toon:{uniforms:fa([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new J(0)}}]),vertexShader:Io.meshtoon_vert,fragmentShader:Io.meshtoon_frag},matcap:{uniforms:fa([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Io.meshmatcap_vert,fragmentShader:Io.meshmatcap_frag},points:{uniforms:fa([X.points,X.fog]),vertexShader:Io.points_vert,fragmentShader:Io.points_frag},dashed:{uniforms:fa([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Io.linedashed_vert,fragmentShader:Io.linedashed_frag},depth:{uniforms:fa([X.common,X.displacementmap]),vertexShader:Io.depth_vert,fragmentShader:Io.depth_frag},normal:{uniforms:fa([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Io.meshnormal_vert,fragmentShader:Io.meshnormal_frag},sprite:{uniforms:fa([X.sprite,X.fog]),vertexShader:Io.sprite_vert,fragmentShader:Io.sprite_frag},background:{uniforms:{uvTransform:{value:new q},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Io.background_vert,fragmentShader:Io.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new q}},vertexShader:Io.backgroundCube_vert,fragmentShader:Io.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Io.cube_vert,fragmentShader:Io.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Io.equirect_vert,fragmentShader:Io.equirect_frag},distance:{uniforms:fa([X.common,X.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Io.distance_vert,fragmentShader:Io.distance_frag},shadow:{uniforms:fa([X.lights,X.fog,{color:{value:new J(0)},opacity:{value:1}}]),vertexShader:Io.shadow_vert,fragmentShader:Io.shadow_frag}};Lo.physical={uniforms:fa([Lo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new q},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new q},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new q},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new q},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new q},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new q},sheen:{value:0},sheenColor:{value:new J(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new q},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new q},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new q},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new q},attenuationDistance:{value:0},attenuationColor:{value:new J(0)},specularColor:{value:new J(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new q},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new q},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new q}}]),vertexShader:Io.meshphysical_vert,fragmentShader:Io.meshphysical_frag};var Ro={r:0,b:0,g:0},zo=new Xt,Bo=new q;Bo.set(-1,0,0,0,1,0,0,0,1);function Vo(e,t,n,r,i,a){let o=new J(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Y(new ea(1,1,1),new ya({name:`BackgroundCubeMaterial`,uniforms:da(Lo.backgroundCube.uniforms),vertexShader:Lo.backgroundCube.vertexShader,fragmentShader:Lo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(zo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Bo),l.material.toneMapped=Pt.getTransfer(i.colorSpace)!==Le,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Y(new ca(2,2),new ya({name:`BackgroundMaterial`,uniforms:da(Lo.background.uniforms),vertexShader:Lo.background.vertexShader,fragmentShader:Lo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Pt.getTransfer(i.colorSpace)!==Le,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ro,ha(e)),n.buffers.color.setClear(Ro.r,Ro.g,Ro.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ho(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Uo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Wo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(H(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&H(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&H(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Go(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ir,s=new q,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ko=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Yi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ea(5,5,5),i=new ya({name:`CubemapFromEquirect`,uniforms:da(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Y(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new mo(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},qo=256,Jo=3,Yo=20,Xo=256,Zo=16,Qo=3,$o=new K,es=new J,ts=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new mo(1,10,null),this._boxMesh=new Y(new ea(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=$o}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(es));let h=new mo(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ss(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(qo,xt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?qo:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=ns(e,!1,!1),n=Math.log2(e)-Jo;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ns(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=cs()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ss()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=is(),this._integrationMaterial=as());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Zo);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Qo)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Xo*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=os());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function ns(e,t,n){return new Ko(e,{minFilter:c,generateMipmaps:t,type:g,colorSpace:V,depthBuffer:n})}function rs(e,t,n){return new ya({name:e,uniforms:t,vertexShader:Io.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function is(){return rs(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Xo}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function as(){return rs(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Zo}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function os(){return rs(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Yo}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ss(){return rs(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function cs(){return rs(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ls(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Ko(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ts(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ts(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function us(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Xe(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ds(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?hr:mr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function fs(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ps(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:U(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ms(e,t,n){let r=new WeakMap,i=new Gt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Jt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new G(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function hs(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var gs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function _s(e,t,n,r,i,a){let o=new qt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Or;u.setAttribute(`position`,new gr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new gr([0,2,0,0,2,0],2));let d=new ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Y(u,d),p=new so(-1,1,1,-1,0,1),m=null,h=null,_=!1,v,b=null,x=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<x.length;n++){let r=x[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){x=e,S=x.length>0&&x[0].isRenderPass===!0;let t=o.width,n=o.height;x.length>0&&s===null&&(s=new qt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new qt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&x.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Zi(t,n),a===!0&&(l.format=E,l.type=y)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<x.length;e++){let i=x[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(_||e.toneMapping===0&&x.length===0)return!1;if(b=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=v,_=!0;let n=o,r=s;for(let i=0;i<x.length;i++){let a=x[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Pt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=gs[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(b),e.render(f,p),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var vs=new Wt,ys=new Zi(1,1),bs=new Qi(1),xs=new Jt,Ss=new Yt,Cs=new Yi,ws=[],Ts=[],Es=new Float32Array(16),Ds=new Float32Array(9),Os=new Float32Array(4);function ks(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ws[i];if(a===void 0&&(a=new Float32Array(i),ws[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function As(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function js(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ms(e,t){let n=Ts[t];n===void 0&&(n=new Int32Array(t),Ts[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ns(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ps(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(As(n,t))return;e.uniform2fv(this.addr,t),js(n,t)}}function Fs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(As(n,t))return;e.uniform3fv(this.addr,t),js(n,t)}}function Is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(As(n,t))return;e.uniform4fv(this.addr,t),js(n,t)}}function Ls(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(As(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),js(n,t)}else{if(As(n,r))return;Os.set(r),e.uniformMatrix2fv(this.addr,!1,Os),js(n,r)}}function Rs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(As(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),js(n,t)}else{if(As(n,r))return;Ds.set(r),e.uniformMatrix3fv(this.addr,!1,Ds),js(n,r)}}function zs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(As(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),js(n,t)}else{if(As(n,r))return;Es.set(r),e.uniformMatrix4fv(this.addr,!1,Es),js(n,r)}}function Bs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Vs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(As(n,t))return;e.uniform2iv(this.addr,t),js(n,t)}}function Hs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(As(n,t))return;e.uniform3iv(this.addr,t),js(n,t)}}function Us(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(As(n,t))return;e.uniform4iv(this.addr,t),js(n,t)}}function Ws(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Gs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(As(n,t))return;e.uniform2uiv(this.addr,t),js(n,t)}}function Ks(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(As(n,t))return;e.uniform3uiv(this.addr,t),js(n,t)}}function qs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(As(n,t))return;e.uniform4uiv(this.addr,t),js(n,t)}}function Js(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Ys(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Js(ys):vs,n.setTexture2D(t||a,i)}function Xs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ss,i)}function Zs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Js(bs):Cs,n.setTextureCube(t||a,i)}function Qs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||xs,i)}function $s(e){switch(e){case 5126:return Ns;case 35664:return Ps;case 35665:return Fs;case 35666:return Is;case 35674:return Ls;case 35675:return Rs;case 35676:return zs;case 5124:case 35670:return Bs;case 35667:case 35671:return Vs;case 35668:case 35672:return Hs;case 35669:case 35673:return Us;case 5125:return Ws;case 36294:return Gs;case 36295:return Ks;case 36296:return qs;case 35678:case 36198:case 36298:case 36306:case 35682:return Ys;case 35679:case 36299:case 36307:return Xs;case 35680:case 36300:case 36308:case 36293:return Zs;case 36289:case 36303:case 36311:case 36292:return Qs}}function ec(e,t){e.uniform1fv(this.addr,t)}function tc(e,t){let n=ks(t,this.size,2);e.uniform2fv(this.addr,n)}function nc(e,t){let n=ks(t,this.size,3);e.uniform3fv(this.addr,n)}function rc(e,t){let n=ks(t,this.size,4);e.uniform4fv(this.addr,n)}function ic(e,t){let n=ks(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ac(e,t){let n=ks(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function oc(e,t){let n=ks(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function sc(e,t){e.uniform1iv(this.addr,t)}function cc(e,t){e.uniform2iv(this.addr,t)}function lc(e,t){e.uniform3iv(this.addr,t)}function uc(e,t){e.uniform4iv(this.addr,t)}function dc(e,t){e.uniform1uiv(this.addr,t)}function fc(e,t){e.uniform2uiv(this.addr,t)}function pc(e,t){e.uniform3uiv(this.addr,t)}function mc(e,t){e.uniform4uiv(this.addr,t)}function hc(e,t,n){let r=this.cache,i=t.length,a=Ms(n,i);As(r,a)||(e.uniform1iv(this.addr,a),js(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Js(ys):vs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function gc(e,t,n){let r=this.cache,i=t.length,a=Ms(n,i);As(r,a)||(e.uniform1iv(this.addr,a),js(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ss,a[e])}function _c(e,t,n){let r=this.cache,i=t.length,a=Ms(n,i);As(r,a)||(e.uniform1iv(this.addr,a),js(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Js(bs):Cs;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function vc(e,t,n){let r=this.cache,i=t.length,a=Ms(n,i);As(r,a)||(e.uniform1iv(this.addr,a),js(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||xs,a[e])}function yc(e){switch(e){case 5126:return ec;case 35664:return tc;case 35665:return nc;case 35666:return rc;case 35674:return ic;case 35675:return ac;case 35676:return oc;case 5124:case 35670:return sc;case 35667:case 35671:return cc;case 35668:case 35672:return lc;case 35669:case 35673:return uc;case 5125:return dc;case 36294:return fc;case 36295:return pc;case 36296:return mc;case 35678:case 36198:case 36298:case 36306:case 35682:return hc;case 35679:case 36299:case 36307:return gc;case 35680:case 36300:case 36308:case 36293:return _c;case 36289:case 36303:case 36311:case 36292:return vc}}var bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$s(t.type)}},xc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yc(t.type)}},Sc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Cc=/(\w+)(\])?(\[|\.)?/g;function wc(e,t){e.seq.push(t),e.map[t.id]=t}function Tc(e,t,n){let r=e.name,i=r.length;for(Cc.lastIndex=0;;){let a=Cc.exec(r),o=Cc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){wc(n,l===void 0?new bc(s,e,t):new xc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Sc(s),wc(n,e)),n=e}}}var Ec=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Tc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Dc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Oc=37297,kc=0;function Ac(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var jc=new q;function Mc(e){Pt._getMatrix(jc,Pt.workingColorSpace,e);let t=`mat3( ${jc.elements.map(e=>e.toFixed(4))} )`;switch(Pt.getTransfer(e)){case Ie:return[t,`LinearTransferOETF`];case Le:return[t,`sRGBTransferOETF`];default:return H(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Nc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ac(e.getShaderSource(t),r)}return i}function Pc(e,t){let n=Mc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Fc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ic(e,t){let n=Fc[t];return n===void 0?(H(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Lc=new K;function Rc(){return Pt.getLuminanceCoefficients(Lc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Lc.x.toFixed(4)}, ${Lc.y.toFixed(4)}, ${Lc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function zc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Hc).join(`
`)}function Bc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Vc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Hc(e){return e!==``}function Uc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Wc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(e){return e.replace(Gc,qc)}function qc(e,t){let n=Io[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Kc(n)}var Jc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(e){return e.replace(Jc,Xc)}function Xc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Zc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Qc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function $c(e){return Qc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var el={302:`ENVMAP_MODE_REFRACTION`};function tl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:el[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var nl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function rl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:nl[e.combine]||`ENVMAP_BLENDING_NONE`}function il(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=$c(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=tl(n),d=rl(n),f=zc(n),p=Bc(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Hc).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Hc).join(`
`),g.length>0&&(g+=`
`)):(h=[Zc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Hc).join(`
`),g=[Zc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Io.tonemapping_pars_fragment,n.toneMapping===0?``:Ic(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Io.colorspace_pars_fragment,Pc(`linearToOutputTexel`,n.outputColorSpace),Rc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Hc).join(`
`)),o=Kc(o),o=Uc(o,n),o=Wc(o,n),s=Kc(s),s=Uc(s,n),s=Wc(s,n),o=Yc(o),s=Yc(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Dc(i,i.VERTEX_SHADER,v),x=Dc(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Nc(i,b,`vertex`),n=Nc(i,x,`fragment`);U(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):H(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Ec(i,m),w=Vc(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Oc)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kc++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var al=0,ol=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sl(e),t.set(e,n)),n}},sl=class{constructor(e){this.id=al++,this.code=e,this.usedTimes=0}};function cl(e){return e===1030||e===37490||e===36285}function ll(e,t,n,r,i,a){let o=new cn,s=new ol,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&H(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Lo[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),j=m.isInstancedMesh===!0,M=m.isBatchedMesh===!0,N=!!i.map,P=!!i.matcap,F=!!b,te=F&&b.isPMREMTexture===!0,I=!!i.aoMap,ne=!!i.lightMap,re=!!i.bumpMap&&i.wireframe===!1,ie=!!i.normalMap,ae=!!i.displacementMap,oe=!!i.emissiveMap,L=!!i.metalnessMap,R=!!i.roughnessMap,se=i.anisotropy>0,ce=i.clearcoat>0,le=i.diffuseRoughness>0,ue=i.dispersion>0,de=i.retroreflectivity>0,fe=i.iridescence>0,pe=i.sheen>0,me=i.transmission>0,he=se&&!!i.anisotropyMap,ge=ce&&!!i.clearcoatMap,_e=ce&&!!i.clearcoatNormalMap,ve=ce&&!!i.clearcoatRoughnessMap,ye=le&&!!i.diffuseRoughnessMap,be=fe&&!!i.iridescenceMap,xe=fe&&!!i.iridescenceThicknessMap,Se=pe&&!!i.sheenColorMap,Ce=pe&&!!i.sheenRoughnessMap,we=!!i.specularMap,Te=!!i.specularColorMap,Ee=!!i.specularIntensityMap,De=me&&!!i.transmissionMap,Oe=me&&!!i.thicknessMap,ke=!!i.gradientMap,Ae=!!i.alphaMap,z=i.alphaTest>0,je=!!i.alphaHash,Me=!!i.extensions,Ne=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let B=te?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Pe={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:M,batchingColor:M&&m._colorsTexture!==null,instancing:j,instancingColor:j&&m.instanceColor!==null,instancingMorph:j&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:N,matcap:P,envMap:F,envMapMode:F&&b.mapping,envMapPMREM:te,envMapMaxLod:te?B.length-1:null,envMapSize:te?B[0].width:null,aoMap:I,lightMap:ne,bumpMap:re,normalMap:ie,displacementMap:ae,emissiveMap:oe,normalMapObjectSpace:ie&&i.normalMapType===1,normalMapTangentSpace:ie&&i.normalMapType===0,packedNormalMap:ie&&i.normalMapType===0&&cl(i.normalMap.format),metalnessMap:L,roughnessMap:R,anisotropy:se,anisotropyMap:he,clearcoat:ce,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:ve,diffuseRoughness:le,diffuseRoughnessMap:ye,dispersion:ue,retroreflection:de,iridescence:fe,iridescenceMap:be,iridescenceThicknessMap:xe,sheen:pe,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:Te,specularIntensityMap:Ee,transmission:me,transmissionMap:De,thicknessMap:Oe,gradientMap:ke,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ae,alphaTest:z,alphaHash:je,combine:i.combine,mapUv:N&&p(i.map.channel),aoMapUv:I&&p(i.aoMap.channel),lightMapUv:ne&&p(i.lightMap.channel),bumpMapUv:re&&p(i.bumpMap.channel),normalMapUv:ie&&p(i.normalMap.channel),displacementMapUv:ae&&p(i.displacementMap.channel),emissiveMapUv:oe&&p(i.emissiveMap.channel),metalnessMapUv:L&&p(i.metalnessMap.channel),roughnessMapUv:R&&p(i.roughnessMap.channel),anisotropyMapUv:he&&p(i.anisotropyMap.channel),clearcoatMapUv:ge&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:_e&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ye&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:be&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&p(i.sheenRoughnessMap.channel),specularMapUv:we&&p(i.specularMap.channel),specularColorMapUv:Te&&p(i.specularColorMap.channel),specularIntensityMapUv:Ee&&p(i.specularIntensityMap.channel),transmissionMapUv:De&&p(i.transmissionMap.channel),thicknessMapUv:Oe&&p(i.thicknessMap.channel),alphaMapUv:Ae&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ie||se),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(N||Ae),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ie===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:N&&i.map.isVideoTexture===!0&&Pt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:oe&&i.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Me&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Lo[t];n=ga.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new il(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function ul(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function dl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function fl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function pl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||dl),r.length>1&&r.sort(t||fl),i.length>1&&i.sort(t||fl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ml(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new pl,e.set(t,[i])):n>=r.length?(i=new pl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function hl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new K,color:new J};break;case`SpotLight`:n={position:new K,direction:new K,color:new J,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new J,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new J,groundColor:new J};break;case`RectAreaLight`:n={color:new J,position:new K,halfWidth:new K,halfHeight:new K}}return e[t.id]=n,n}}}function gl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var _l=0;function vl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function yl(e){let t=new hl,n=gl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new Xt,o=new Xt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(vl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=_l++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function bl(e){let t=new yl(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function xl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new bl(e),t.set(n,[a])):r>=i.length?(a=new bl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Sl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wl=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],Tl=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],El=new Xt,Dl=new K,Ol=new K;function kl(e,t,n){let i=new Ni,a=new G,s=new G,c=new Gt,l=new Ca,u=new wa,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:Sl,fragmentShader:Cl}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Or;y.setAttribute(`position`,new pr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Y(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(H(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){H(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){H(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new qt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Zi(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Ko(a.x),p.map.depthTexture=new Qi(a.x,m)):(p.map=new qt(a.x,a.y),p.map.depthTexture=new Zi(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Dl.setFromMatrixPosition(d.matrixWorld),e.position.copy(Dl),Ol.copy(e.position),Ol.add(wl[t]),e.up.copy(Tl[t]),e.lookAt(Ol),e.updateMatrixWorld(),n.makeTranslation(-Dl.x,-Dl.y,-Dl.z),El.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(El,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new qt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),s=n.material;if(Array.isArray(s)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)E(l[e],r,a,o,s,c)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Al(e,t){function n(){let t=!1,n=new Gt,r=null,i=new Gt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?L(e.DEPTH_TEST):R(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Qe[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?L(e.STENCIL_TEST):R(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new J(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(P)[1]),M=N>=1);let F=null,te={},I=e.getParameter(e.SCISSOR_BOX),ne=e.getParameter(e.VIEWPORT),re=new Gt().fromArray(I),ie=new Gt().fromArray(ne);function ae(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let oe={};oe[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),oe[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),oe[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),L(e.DEPTH_TEST),o.setFunc(3),me(!1),he(1),L(e.CULL_FACE),fe(0);function L(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function R(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function se(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ce(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function le(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ue={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ue[103]=e.MIN,ue[104]=e.MAX;let de={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function fe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(R(e.BLEND),g=!1);else if(g===!1&&(L(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:U(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:U(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:U(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:U(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ue[n],ue[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(de[r],de[i],de[o],de[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function pe(t,n){t.side===2?R(e.CULL_FACE):L(e.CULL_FACE);let r=t.side===1;n&&(r=!r),me(r),t.blending===1&&t.transparent===!1?fe(0):fe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),_e(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?L(e.SAMPLE_ALPHA_TO_COVERAGE):R(e.SAMPLE_ALPHA_TO_COVERAGE)}function me(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function he(t){t===0?R(e.CULL_FACE):(L(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ge(t){t!==k&&(M&&e.lineWidth(t),k=t)}function _e(t,n,r){t?(L(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):R(e.POLYGON_OFFSET_FILL)}function ve(t){t?L(e.SCISSOR_TEST):R(e.SCISSOR_TEST)}function ye(t){t===void 0&&(t=e.TEXTURE0+j-1),F!==t&&(e.activeTexture(t),F=t)}function be(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+j-1:F);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||oe[t]),i.type=t,i.texture=n)}function xe(){let t=te[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Se(){try{e.compressedTexImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ce(){try{e.compressedTexImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function we(){try{e.texSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Te(){try{e.texSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Oe(){try{e.texStorage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function ke(){try{e.texStorage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ae(){try{e.texImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function z(){try{e.texImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function je(t){return d[t]===void 0?e.getParameter(t):d[t]}function Me(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ne(t){re.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),re.copy(t))}function B(t){ie.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ie.copy(t))}function Pe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Fe(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function V(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},F=null,te={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new J(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,re.set(0,0,e.canvas.width,e.canvas.height),ie.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:L,disable:R,bindFramebuffer:se,drawBuffers:ce,useProgram:le,setBlending:fe,setMaterial:pe,setFlipSided:me,setCullFace:he,setLineWidth:ge,setPolygonOffset:_e,setScissorTest:ve,activeTexture:ye,bindTexture:be,unbindTexture:xe,compressedTexImage2D:Se,compressedTexImage3D:Ce,texImage2D:Ae,texImage3D:z,pixelStorei:Me,getParameter:je,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:Oe,texStorage3D:ke,texSubImage2D:we,texSubImage3D:Te,compressedTexSubImage2D:Ee,compressedTexSubImage3D:De,scissor:Ne,viewport:B,reset:V}}function jl(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new G,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function D(e,t){return T?new OffscreenCanvas(e,t):Ge(`canvas`)}function O(e,t,n){let r=1,i=V(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=D(n,a));let o=t?D(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),H(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&H(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function k(e){return e.generateMipmaps}function A(e){l.generateMipmap(e)}function ee(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function j(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];H(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||H(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Ie:Pt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function M(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,H(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function N(e,t){return k(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function P(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function F(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function te(e){ne(e.target)}function I(e){re(e.target)}function ne(e){e.removeEventListener(`dispose`,te),F(e),ae(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function re(e){e.removeEventListener(`dispose`,I),F(e),L(e)}function ie(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?re(t):ne(t))}C.clear(),b.clear()}function ae(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&oe(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function oe(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function L(e){let t=f.get(e);t.__depthDisposeCallback&&t.__depthDisposeCallback();let n=e.depthTexture;if(n&&n.renderTarget===e&&ne(n),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let r=e.textures;for(let e=0,t=r.length;e<t;e++){let t=f.get(r[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(r[e])}f.remove(e)}let R=0;function se(){R=0}function ce(){return R}function le(e){R=e}function ue(){let e=R;return e>=p.maxTextures&&H(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),R+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function fe(e,t){let n=f.get(e);if(e.isVideoTexture&&Pe(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)H(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)H(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ce(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function pe(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Ce(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function me(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Ce(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function he(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?we(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let ge={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},_e={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},ve={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function ye(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&H(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,ge[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,ge[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,ge[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,_e[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,_e[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,ve[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function be(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,te),P(t));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=de(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&oe(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function xe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Se(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=xe(r.start,t.width,4),c=xe(n.start,t.width,4);r.start<=o+1&&s===c&&xe(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function Ce(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=be(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Pt.getPrimaries(Pt.workingColorSpace),n=t.colorSpace===``?null:Pt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=O(t.image,!1,p.maxTextureSize);e=Fe(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=j(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);ye(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=N(t,e);if(t.isDepthTexture)u=M(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&Se(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=Mo(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=Mo(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=V(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=V(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);k(t)&&t.mipmapsAutoUpdate===!0&&A(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function we(e,t,n){if(t.image.length!==6)return;let r=be(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=Pt.getPrimaries(Pt.workingColorSpace),o=t.colorSpace===``?null:Pt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=O(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Fe(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=j(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=N(t,h);ye(l.TEXTURE_CUBE_MAP,t);let C;if(t.isDepthTexture){if(v=M(t.format===E,t.type),b){if(y)d.texStorage2D(l.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let e=0;e<6;e++)d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,h.width,h.height,0,g,_,null)}}else if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=V(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}k(t)&&t.mipmapsAutoUpdate===!0&&A(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Te(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=j(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),B(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Ne(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ee(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=M(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;B(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ne(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ne(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=j(i.internalFormat,a,o,i.normalized,i.colorSpace);B(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ne(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ne(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function De(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);i.__renderTarget=t;let a=r?t.depthTexture.image[0]:t.depthTexture.image;i.__webglTexture&&a.width===t.width&&a.height===t.height||(a.width=t.width,a.height=t.height,t.depthTexture.needsUpdate=!0),r?he(t.depthTexture,0):fe(t.depthTexture,0);let o=i.__webglTexture,s=Ne(t),c=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,u=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)B(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else if(t.depthTexture.format===1027)B(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Oe(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)De(t.__webglFramebuffer[n],e,n);else e.texture.mipmaps.length>0?De(t.__webglFramebuffer[0],e,0):De(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Ee(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(e.texture.mipmaps.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Ee(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function ke(e,t,n){let r=f.get(e);t!==void 0&&Te(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Oe(e)}function Ae(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,I),P(e);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&B(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=j(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Ne(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Ee(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),ye(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)Te(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else Te(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);k(t)?A(l.TEXTURE_CUBE_MAP):t.mipmaps.length>0&&l.texParameteri(l.TEXTURE_CUBE_MAP,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),ye(o,r),Te(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),k(r)&&A(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),ye(i,t),t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)Te(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else Te(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);k(t)?A(i):t.mipmaps.length>0&&l.texParameteri(i,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}e.depthBuffer&&Oe(e)}function z(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(k(r)&&r.mipmapsAutoUpdate===!0){let t=ee(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),A(t),d.unbindTexture()}}}let je=[];function Me(e){if(e.samples>0){if(B(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.texture.mipmaps.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(je.length=0,je.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&je.push(a),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,je))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Ne(e){return Math.min(p.maxSamples,e.samples)}function B(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Pe(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Fe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Pt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&H(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):U(`WebGLTextures: Unsupported texture color space:`,n)),t}function V(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=fe,this.setTexture2DArray=pe,this.setTexture3D=me,this.setTextureCube=he,this.rebindTextures=ke,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=B,this.dispose=ie}function Ml(e,t){function n(n,r=``){let i,a=Pt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Nl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Fl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new $i(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ya({vertexShader:Nl,fragmentShader:Pl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Y(new ca(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Il=class extends $e{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Fl,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new G,k=null,A=null,ee=new io;ee.viewport=new Gt;let j=new io;j.viewport=new Gt;let M=[ee,j],N=new ho,P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Dn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Dn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Dn,C[e]=t),t.getHandSpace()};function te(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function I(){r.removeEventListener(`select`,te),r.removeEventListener(`selectstart`,te),r.removeEventListener(`selectend`,te),r.removeEventListener(`squeeze`,te),r.removeEventListener(`squeezestart`,te),r.removeEventListener(`squeezeend`,te),r.removeEventListener(`end`,I),r.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}P=null,F=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,L.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,te),r.addEventListener(`selectstart`,te),r.addEventListener(`selectend`,te),r.addEventListener(`squeeze`,te),r.addEventListener(`squeezestart`,te),r.addEventListener(`squeezeend`,te),r.addEventListener(`end`,I),r.addEventListener(`inputsourceschange`,ne),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new qt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Zi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new qt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),L.setContext(r),L.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),N.near=j.near=ee.near=t,N.far=j.far=ee.far=n,(P!==N.near||F!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),P=N.near,F=N.far),N.layers.mask=e.layers.mask|6,ee.layers.mask=N.layers.mask&-5,j.layers.mask=N.layers.mask&-3;let i=e.parent,a=N.cameras;re(N,i);for(let e=0;e<a.length;e++)re(a[e],i);N.projectionMatrix.copy(ee.projectionMatrix),N.projectionMatrixInverse.copy(ee.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),ie(e,N,i)};function ie(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=rt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)},this.getCameraTexture=function(e){return v[e]};let ae=null;function oe(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==N.cameras.length&&(N.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=M[n];o===void 0&&(o=new io,o.layers.enable(n),o.viewport=new Gt,M[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(N.matrix.copy(o.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),i===!0&&N.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new $i,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ae&&ae(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let L=new Po;L.setAnimationLoop(oe),this.setAnimationLoop=function(e){ae=e},this.dispose=function(){}}},Ll=new Xt,Rl=new q;Rl.set(-1,0,0,0,1,0,0,0,1);function zl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ha(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Ll.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Rl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Bl(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?H(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):H(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Vl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hl=null;function Ul(){return Hl===null&&(Hl=new bi(Vl,16,16,k,g),Hl.name=`DFG_LUT`,Hl.minFilter=o,Hl.magFilter=o,Hl.wrapS=t,Hl.wrapT=t,Hl.generateMipmaps=!1,Hl.needsUpdate=!0),Hl}var Wl=class{constructor(e={}){let{canvas:t=Ke(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ee,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},k=null,j=null,M=[],N=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,te=!1,I=null,ne=null,re=null,ie=null;this._outputColorSpace=Fe;let ae=0,oe=0,L=null,R=-1,se=null,ce=new Gt,le=new Gt,ue=null,de=new J(0),fe=0,pe=t.width,me=t.height,he=1,ge=null,_e=null,ve=new Gt(0,0,pe,me),ye=new Gt(0,0,pe,me),be=!1,xe=new Ni,Se=new Fi,Ce=!1,we=!1,Te=new Xt,Ee=new K,De=new Gt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function Ae(){return L===null?he:1}let z=n;function je(e,n){return t.getContext(e,n)}let Me,Ne,B,Pe,V,Ie,Le,Re,ze,Be,Ve,Ue,We,Ge,qe,Ye,Xe,Qe,$e,et,tt,nt,rt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,at,!1),t.addEventListener(`webglcontextrestored`,ot,!1),t.addEventListener(`webglcontextcreationerror`,st,!1),z===null){let t=`webgl2`;if(z=je(t,e),z===null)throw je(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}it()}catch(e){throw t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),U(`WebGLRenderer: `+e.message),e}function it(){Me=new us(z),Me.init(),tt=new Ml(z,Me),Ne=new Wo(z,Me,e,tt),B=new Al(z,Me),Ne.reversedDepthBuffer&&h&&B.buffers.depth.setReversed(!0),ne=z.createFramebuffer(),re=z.createFramebuffer(),ie=z.createFramebuffer(),Pe=new ps(z),V=new ul,Ie=new jl(z,Me,B,V,Ne,tt,Pe),Le=new ls(F),Re=new Fo(z),nt=new Ho(z,Re),ze=new ds(z,Re,Pe,nt),Be=new hs(z,ze,Re,nt,Pe),Qe=new ms(z,Ne,Ie),qe=new Go(V),Ve=new ll(F,Le,Me,Ne,nt,qe),Ue=new zl(F,V),We=new ml,Ge=new xl(Me),Xe=new Vo(F,Le,B,Be,x,s),Ye=new kl(F,Be,Ne),rt=new Bl(z,Pe,Ne,B),$e=new Uo(z,Me,Pe),et=new fs(z,Me,Pe),Pe.programs=Ve.programs,F.capabilities=Ne,F.extensions=Me,F.properties=V,F.renderLists=We,F.shadowMap=Ye,F.state=B,F.info=Pe}S!==1009&&(P=new _s(S,t.width,t.height,o,r,i));let W=new Il(F,z);this.xr=W,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(e){e!==void 0&&(he=e,this.setSize(pe,me,!1))},this.getSize=function(e){return e.set(pe,me)},this.setSize=function(e,n,r=!0){W.isPresenting?H(`WebGLRenderer: Can't change size while VR device is presenting.`):(pe=e,me=n,t.width=Math.floor(e*he),t.height=Math.floor(n*he),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(pe*he,me*he).floor()},this.setDrawingBufferSize=function(e,n,r){pe=e,me=n,he=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)U(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){H(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}P.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ce)},this.getViewport=function(e){return e.copy(ve)},this.setViewport=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),B.viewport(ce.copy(ve).multiplyScalar(Ae()).round())},this.getScissor=function(e){return e.copy(ye)},this.setScissor=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),B.scissor(le.copy(ye).multiplyScalar(Ae()).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(e){B.setScissorTest(be=e)},this.setOpaqueSort=function(e){ge=e},this.setTransparentSort=function(e){_e=e},this.getClearColor=function(e){return e.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(L!==null){let t=L.texture.format;e=C.has(t)}if(e){let e=L.texture.type,t=w.has(e),n=Xe.getClearColor(),r=Xe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,z.clearBufferuiv(z.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,z.clearBufferiv(z.COLOR,0,E))}else r|=z.COLOR_BUFFER_BIT}t&&(r|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&z.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),I=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),Xe.dispose(),We.dispose(),Ge.dispose(),Ie.dispose(),V.dispose(),Le.dispose(),Be.dispose(),ze.dispose(),nt.dispose(),rt.dispose(),Ve.dispose(),W.dispose(),W.removeEventListener(`sessionstart`,mt),W.removeEventListener(`sessionend`,ht),gt.stop()};function at(e){e.preventDefault(),Je(`WebGLRenderer: Context Lost.`),te=!0}function ot(){Je(`WebGLRenderer: Context Restored.`),te=!1;let e=Pe.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;it(),Pe.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function st(e){U(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ct(e){let t=e.target;t.removeEventListener(`dispose`,ct),lt(t)}function lt(e){ut(e),V.remove(e)}function ut(e){let t=V.get(e).programs;t!==void 0&&(t.forEach(function(e){Ve.releaseProgram(e)}),e.isShaderMaterial&&Ve.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Oe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=G(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ze.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;nt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=Re.get(c),g=et,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*Ae()),g.setMode(z.LINES)):g.setMode(z.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*Ae()),i.isLineSegments?g.setMode(z.LINES):i.isLineLoop?g.setMode(z.LINE_LOOP):g.setMode(z.LINE_STRIP)}else i.isPoints?g.setMode(z.POINTS):i.isSprite&&g.setMode(z.TRIANGLES);if(i.isBatchedMesh){if(Me.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Re.get(c).bytesPerElement:1,o=V.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(z,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function dt(e,t,n,r){I!==null&&e.isNodeMaterial&&I.setObject(r,e),Ce===!0&&qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ct(e,t,r),e.side=0,e.needsUpdate=!0,Ct(e,t,r),e.side=2):Ct(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),I!==null&&I.renderStart(e,t,n),j=Ge.get(n),j.init(t),N.push(j),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights(),I!==null&&I.updateLights(j.state.lightsArray),we=this.localClippingEnabled,Ce=qe.init(this.clippingPlanes,we),Ce===!0&&qe.setGlobalState(this.clippingPlanes,t),I!==null&&Ye.render(j.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];dt(o,n,t,e),r.add(o)}else dt(i,n,t,e),r.add(i)}}),j=N.pop(),I!==null&&I.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=V.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Me.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ft=null;function pt(e){ft&&ft(e)}function mt(){gt.stop()}function ht(){gt.start()}let gt=new Po;gt.setAnimationLoop(pt),typeof self<`u`&&gt.setContext(self),this.setAnimationLoop=function(e){ft=e,W.setAnimationLoop(e),e===null?gt.stop():gt.start()},W.addEventListener(`sessionstart`,mt),W.addEventListener(`sessionend`,ht),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){U(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(te===!0)return;I!==null&&I.renderStart(e,t);let n=W.enabled===!0&&W.isPresenting===!0,r=P!==null&&(L===null||n)&&P.begin(F,L);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(W.cameraAutoUpdate===!0&&W.updateCamera(t),t=W.getCamera()),e.isScene===!0&&e.onBeforeRender(F,e,t,L),j=Ge.get(e,N.length),j.init(t),j.state.textureUnits=Ie.getTextureUnits(),N.push(j),Te.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Se.setFromArrayCamera(t):xe.setFromProjectionMatrix(Te,He,t.reversedDepth),we=this.localClippingEnabled,Ce=qe.init(this.clippingPlanes,we),k=We.get(e,M.length),k.init(),M.push(k),this.info.render.frame++,W.enabled===!0&&W.isPresenting===!0){let e=F.xr.getDepthSensingMesh();e!==null&&_t(e,t,-1/0,F.sortObjects)}_t(e,t,0,F.sortObjects),k.finish(),I!==null&&I.updateLights(j.state.lightsArray),F.sortObjects===!0&&k.sort(ge,_e),ke=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,ke&&Xe.addToRenderList(k,e),this.info.autoReset===!0&&this.info.reset(),Ce===!0&&qe.beginShadows();let i=j.state.shadowsArray;if(Ye.render(i,e,t),Ce===!0&&qe.endShadows(),(r&&P.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(j.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];yt(n,r,e,a)}ke&&Xe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];vt(k,e,n,n.viewport)}}else r.length>0&&yt(n,r,e,t),ke&&Xe.render(e),vt(k,e,t)}L!==null&&oe===0&&(Ie.updateMultisampleRenderTarget(L),Ie.updateRenderTargetMipmap(L)),r&&P.end(F),e.isScene===!0&&e.onAfterRender(F,e,t),nt.resetDefaultState(),R=-1,se=null,N.pop(),N.length>0?(j=N[N.length-1],Ie.setTextureUnits(j.state.textureUnits),Ce===!0&&qe.setGlobalState(F.clippingPlanes,j.state.camera)):j=null,M.pop(),k=M.length>0?M[M.length-1]:null,I!==null&&I.renderEnd()};function _t(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)j.pushLight(e),e.castShadow&&j.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Se:xe;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&De.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Te);let i=Be.update(e),a=e.material;a.visible&&k.push(e,i,a,n,De.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Se:xe;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Be.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),De.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),De.copy(e.boundingSphere.center)),De.applyMatrix4(e.matrixWorld).applyMatrix4(Te)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,De.z,s,t)}}else a.visible&&k.push(e,i,a,n,De.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)_t(i[e],t,n,r)}function vt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;j.setupLightsView(n),Ce===!0&&qe.setGlobalState(F.clippingPlanes,n),r&&B.viewport(ce.copy(r)),i.length>0&&bt(i,t,n),a.length>0&&bt(a,t,n),o.length>0&&bt(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function yt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[r.id]===void 0){let e=Me.has(`EXT_color_buffer_half_float`)||Me.has(`EXT_color_buffer_float`);j.state.transmissionRenderTarget[r.id]=new qt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Ne.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}let a=j.state.transmissionRenderTarget[r.id],o=r.viewport||ce;a.setSize(o.z*F.transmissionResolutionScale,o.w*F.transmissionResolutionScale);let s=F.getRenderTarget(),u=F.getActiveCubeFace(),d=F.getActiveMipmapLevel();F.setRenderTarget(a),F.getClearColor(de),fe=F.getClearAlpha(),fe<1&&F.setClearColor(16777215,.5),F.clear(),ke&&Xe.render(n);let f=F.toneMapping;F.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),j.setupLightsView(r),Ce===!0&&qe.setGlobalState(F.clippingPlanes,r),bt(e,n,r),Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a),Me.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,xt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a))}F.setRenderTarget(s,u,d),F.setClearColor(de,fe),p!==void 0&&(r.viewport=p),F.toneMapping=f}function bt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&xt(o,t,n,s,l,c)}}function xt(e,t,n,r,i,a){I!==null&&i.isNodeMaterial&&I.setObject(e,i),e.onBeforeRender(F,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(F,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=2):F.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(F,t,n,r,i,a)}function St(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Ct(e,t,n){t.isScene!==!0&&(t=Oe);let r=V.get(e),i=j.state.lights,a=j.state.shadowsArray,o=i.state.version,s=Ve.getParameters(e,i.state,a,t,n,j.state.lightProbeGridArray),c=Ve.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Le.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ct),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Et(e,s),d}else s.uniforms=Ve.getUniforms(e),I!==null&&e.isNodeMaterial&&I.build(e,n,s),e.onBeforeCompile(s,F),d=Ve.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=qe.uniform),Et(e,s),r.needsLights=Ot(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=St(j.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function wt(e,t,n,r,i){let a=V.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Ct(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ec.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Et(e,t){let n=V.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function G(e,t,n,r,i){t.isScene!==!0&&(t=Oe),Ie.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=L===null?F.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Pt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Le.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(h=F.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=V.get(r),y=j.state.lights;if(Ce===!0&&(we===!0||e!==se)){let t=e===se&&r.id===R;qe.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==qe.numPlanes||v.numIntersection!==qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===St(j.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?wt(r,t,i,s,h):Ct(r,t,i),I&&r.isNodeMaterial&&I.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(B.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==R&&(R=r.id,w=!0),C||se!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(z,`projectionMatrix`,e.projectionMatrix),E.setValue(z,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(z,Ee.setFromMatrixPosition(e.matrixWorld)),Ne.logarithmicDepthBuffer&&E.setValue(z,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(z,`isOrthographic`,e.isOrthographicCamera===!0),se!==e&&(se=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(z,`sunShadowMap`,y.state.sunShadowMap,Ie),y.state.directionalShadowMap.length>0&&E.setValue(z,`directionalShadowMap`,y.state.directionalShadowMap,Ie),y.state.spotShadowMap.length>0&&E.setValue(z,`spotShadowMap`,y.state.spotShadowMap,Ie),y.state.pointShadowMap.length>0&&E.setValue(z,`pointShadowMap`,y.state.pointShadowMap,Ie)),i.isSkinnedMesh){E.setOptional(z,i,`bindMatrix`),E.setOptional(z,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(z,`boneTexture`,e.boneTexture,Ie))}i.isBatchedMesh&&(E.setOptional(z,i,`batchingTexture`),E.setValue(z,`batchingTexture`,i._matricesTexture,Ie),E.setOptional(z,i,`batchingIdTexture`),E.setValue(z,`batchingIdTexture`,i._indirectTexture,Ie),E.setOptional(z,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(z,`batchingColorTexture`,i._colorsTexture,Ie));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&Qe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(z,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=Ul()),w){if(E.setValue(z,`toneMappingExposure`,F.toneMappingExposure),v.needsLights&&Dt(O,T),a&&r.fog===!0&&Ue.refreshFogUniforms(O,a),Ue.refreshMaterialUniforms(O,r,he,me,j.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of j.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}Ec.upload(z,Tt(v),O,Ie)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ec.upload(z,Tt(v),O,Ie),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(z,`center`,i.center),E.setValue(z,`modelViewMatrix`,i.modelViewMatrix),E.setValue(z,`normalMatrix`,i.normalMatrix),E.setValue(z,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];rt.update(n,S),rt.bind(n,S)}}return S}function Dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ot(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(e,t,n){let r=V.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),V.get(e.texture).__webglTexture=t,V.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=V.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){L=e,ae=t,oe=n;let r=null,i=!1,a=!1;if(e){let o=V.get(e);if(o.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(z.FRAMEBUFFER,o.__webglFramebuffer),ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest,B.viewport(ce),B.scissor(le),B.setScissorTest(ue),R=-1;return}if(o.__webglFramebuffer===void 0)Ie.setupRenderTarget(e);else if(o.__hasExternalTextures)Ie.rebindTextures(e,V.get(e.texture).__webglTexture,V.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&V.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ie.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=V.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ie.useMultisampledRTT(e)===!1?V.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest}else ce.copy(ve).multiplyScalar(he).floor(),le.copy(ye).multiplyScalar(he).floor(),ue=be;if(n!==0&&(r=ne),B.bindFramebuffer(z.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(ce),B.scissor(le),B.setScissorTest(ue),i){let r=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=V.get(e.textures[t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,t.__webglTexture,n)}R=-1};function kt(e){let t=V.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ne.textureFormatReadable(e.format),t.__typeReadable=Ne.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){B.bindFramebuffer(z.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s);let u=kt(o);if(u.__formatReadable===!1){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&z.readPixels(t,n,r,i,tt.convert(c),tt.convert(l),a)}finally{let e=L===null?null:V.get(L).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){B.bindFramebuffer(z.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s);let d=kt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.bufferData(z.PIXEL_PACK_BUFFER,a.byteLength,z.STREAM_READ),z.readPixels(t,n,r,i,tt.convert(l),tt.convert(u),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let p=L===null?null:V.get(L).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,p);let m=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Ze(z,m,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,a),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(f),z.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ie.setTexture2D(e,0),z.copyTexSubImage2D(z.TEXTURE_2D,n,0,0,o,s,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=tt.convert(t.format),_=tt.convert(t.type),v;t.isData3DTexture?(Ie.setTexture3D(t,0),v=z.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ie.setTexture2DArray(t,0),v=z.TEXTURE_2D_ARRAY):(Ie.setTexture2D(t,0),v=z.TEXTURE_2D),B.activeTexture(z.TEXTURE0),B.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(z.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(z.UNPACK_ROW_LENGTH),b=B.getParameter(z.UNPACK_IMAGE_HEIGHT),x=B.getParameter(z.UNPACK_SKIP_PIXELS),S=B.getParameter(z.UNPACK_SKIP_ROWS),C=B.getParameter(z.UNPACK_SKIP_IMAGES);B.pixelStorei(z.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(z.UNPACK_SKIP_PIXELS,l),B.pixelStorei(z.UNPACK_SKIP_ROWS,u),B.pixelStorei(z.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=V.get(e),r=V.get(t),h=V.get(n.__renderTarget),g=V.get(r.__renderTarget);B.bindFramebuffer(z.READ_FRAMEBUFFER,h.__webglFramebuffer),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(e).__webglTexture,i,d+n),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(t).__webglTexture,a,m+n)),z.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,z.DEPTH_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||V.has(e)){let n=V.get(e),r=V.get(t);B.bindFramebuffer(z.READ_FRAMEBUFFER,re),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,ie);for(let e=0;e<c;e++)w?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,n.__webglTexture,i),T?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,r.__webglTexture,a),i===0?T?z.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):z.copyTexSubImage2D(v,a,f,p,l,u,o,s):z.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,z.COLOR_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?z.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(z.UNPACK_ROW_LENGTH,y),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(z.UNPACK_SKIP_PIXELS,x),B.pixelStorei(z.UNPACK_SKIP_ROWS,S),B.pixelStorei(z.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&z.generateMipmap(v),B.unbindTexture()},this.initRenderTarget=function(e){V.get(e).__webglFramebuffer===void 0&&Ie.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ie.setTextureCube(e,0):e.isData3DTexture?Ie.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ie.setTexture2DArray(e,0):Ie.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){ae=0,oe=0,L=null,B.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return He}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}},Gl=class extends Pn{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new ea;e.deleteAttribute(`uv`);let t=new xa({side:1}),n=new xa,r=new oo(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new Y(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new ki(e,n,6),o=new wn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new Y(e,Kl(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new Y(e,Kl(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new Y(e,Kl(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new Y(e,Kl(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Y(e,Kl(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Y(e,Kl(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Kl(e){return new Sa({color:0,emissive:16777215,emissiveIntensity:e})}var ql={id:`lab-01`,name:`Разбитая пробирка`,intro:`Держи палец на полу — рой ползёт туда. Доберись до слива.`,goal:{type:`exit`},stars:[{type:`time`,max:20},{type:`eat`,min:1}],startWorms:25,room:{size:[8,10],height:3},spawn:[0,.8,3.5],exit:{pos:[1.5,0,-3.8],radius:.8,kind:`drain`},doors:[[3.4,0,-2.5]],humans:[[-1.5,0,-3]],food:[[0,0,2],[-1.2,0,.6],[.8,0,-.6],[-2.6,.9,-1.8]],boxes:[{c:[-1.6,.45,-.2],h:[1.6,.45,.4],color:`#56636c`},{c:[2.6,.35,1.2],h:[.4,.35,.4],color:`#8a6a45`},{c:[-2.6,.45,-1.8],h:[.6,.45,.5],color:`#56636c`}]},Jl={id:`lab-02`,name:`Учёные`,intro:`Зелёные сгустки — еда, рой от неё растёт. Съешь двух учёных: подкрадывайся сзади, заметив рой, они бегут к дверям.`,goal:{type:`eat`,count:2},stars:[{type:`time`,max:60},{type:`eat`,min:4}],startWorms:25,room:{size:[14,14],height:3,wallColor:`#9fb0a8`},spawn:[0,.8,4],doors:[[6.4,0,-6],[-6.4,0,-6]],humans:[[-4.5,0,5.5],[4.5,0,5.2],[-.5,0,-3.8],[4.5,0,-2.6]],food:[[-1.8,0,5.6],[2.2,0,4.6],[-3.5,.8,3],[5.6,0,1.2],[-5.6,0,1],[.2,0,-3],[-5.2,0,-5.4],[5.6,0,-2.4],[4.1,1.3,2.55]],boxes:[{c:[-5,.6,-1],h:[2,.6,.15],color:`#7f8e89`},{c:[-2,.675,-1],h:[1,.525,.15],color:`#6c7a76`},{c:[4,.6,-1],h:[3,.6,.15],color:`#7f8e89`},{c:[-3.5,.4,3],h:[1,.4,.6],color:`#56636c`},{c:[4,.35,2.5],h:[.35,.35,.35],color:`#8a6a45`},{c:[4.65,.3,3.35],h:[.3,.3,.3],color:`#7d5f3c`},{c:[4.1,1,2.55],h:[.28,.3,.28],color:`#94744d`},{c:[2.5,1.5,-4],h:[.35,1.5,.35],color:`#a3abab`},{c:[-2.5,2.55,-5.5],h:[4.5,.2,.3],color:`#7a8590`},{c:[3,1.6,-6.8],h:[1.5,.05,.2],color:`#6c6c6c`}]},Yl={id:`lab-03`,name:`Стены`,intro:`Рой ползает по стенам. Выход — решётка вентиляции высоко на стене.`,goal:{type:`exit`},stars:[{type:`time`,max:30},{type:`food`,min:4}],startWorms:25,room:{size:[10,10],height:3},spawn:[-2.5,.8,3.5],exit:{pos:[2.5,1.9,-5],radius:.7,kind:`vent`},doors:[[-4.4,0,-3.5]],humans:[[2,0,2.5],[-2,0,-3]],food:[[-.5,0,3.6],[3.6,0,3.6],[3.6,.7,.5],[-3.8,0,.8],[.5,0,-2.6],[3.7,1.25,-4.6]],waypoints:[[.5,.3],[.5,1],[.5,1.7]],boxes:[{c:[-2.5,.6,1],h:[2.5,.6,.15],color:`#7f8e89`},{c:[3,.675,1],h:[2,.525,.15],color:`#6c7a76`},{c:[3.6,.35,.5],h:[.35,.35,.35],color:`#8a6a45`},{c:[3.5,1.2,-4.75],h:[1,.05,.25],color:`#6c6c6c`},{c:[2.5,1.9,-4.98],h:[.45,.3,.03],kind:`decor`,solid:!1,color:`#2a3034`}]},Xl={id:`lab-04`,name:`Вентиляция`,intro:`Люди не пролезают в решётки вентиляции, а рой просачивается сквозь них тонким потоком.`,goal:{type:`exit`},stars:[{type:`time`,max:40},{type:`food`,min:3}],startWorms:25,room:{size:[12,12],height:3},spawn:[2,.8,4.5],exit:{pos:[-3,0,-4.5],radius:.8,kind:`drain`},doors:[[5.4,0,0],[5.4,0,-4.6]],humans:[[1.5,0,.8],[-.5,0,-4]],food:[[-4,0,.5],[0,0,-.2],[4,0,-.8],[4.6,0,4.4]],boxes:[{c:[-5.15,1.5,2],h:[.85,1.5,.15],color:`#7f8e89`},{c:[-3.5,1.7,2],h:[.8,1.3,.15],color:`#6c7a76`},{c:[-3.5,.2,2],h:[.8,.2,.15],kind:`grate`},{c:[1.65,1.5,2],h:[4.35,1.5,.15],color:`#7f8e89`},{c:[-1.65,1.5,-2],h:[4.35,1.5,.15],color:`#7f8e89`},{c:[3.5,1.7,-2],h:[.8,1.3,.15],color:`#6c7a76`},{c:[3.5,.2,-2],h:[.8,.2,.15],kind:`grate`},{c:[5.15,1.5,-2],h:[.85,1.5,.15],color:`#7f8e89`},{c:[-1.5,.45,4.2],h:[1.2,.45,.5],color:`#56636c`},{c:[-.5,.4,.6],h:[.9,.4,.45],color:`#56636c`}]},Zl={id:`lab-05`,name:`Охрана`,intro:`Охранник стреляет по рою. Пролезь через решётку внизу стены и доберись до слива. Рывок — двойной тап.`,goal:{type:`exit`},stars:[{type:`time`,max:45},{type:`eat`,min:2}],startWorms:25,room:{size:[12,12],height:3},spawn:[-3,.8,4],exit:{pos:[4.6,0,-4.6],radius:.8,kind:`drain`},doors:[[-5.4,0,-5.4]],humans:[{pos:[2.6,0,-3.2],kind:`guard`},[-3,0,-3.6]],food:[[-4.6,0,1.6],[-1.5,0,2.2],[2.5,0,3.8],[4.6,0,1.4],[3.6,.9,4.2]],boxes:[{c:[-3.3,1.5,0],h:[2.7,1.5,.15],color:`#7f8e89`},{c:[3.3,1.5,0],h:[2.7,1.5,.15],color:`#7f8e89`},{c:[0,1.7,0],h:[.6,1.3,.15],color:`#6c7a76`},{c:[0,.2,0],h:[.6,.2,.15],kind:`grate`},{c:[1,.5,-1.7],h:[.7,.5,.4],color:`#56636c`},{c:[3.6,.45,4.2],h:[.6,.45,.5],color:`#8a6a45`}]},Ql={id:`house-01`,name:`Прихожая`,location:`house`,intro:`Дверь на массу продавливается, только когда у неё достаточно червей. Наешься, чтобы вырасти до 16.`,goal:{type:`exit`},stars:[{type:`time`,max:45},{type:`worms`,min:20}],startWorms:10,room:{size:[12,10],height:3},spawn:[-3,.8,3.5],exit:{pos:[3.5,0,-3.3],radius:.8,kind:`drain`},doors:[[5.4,0,3.6]],humans:[{pos:[3.5,0,2.2],kind:`resident`}],food:[[-5,0,1.4],[-1,0,4.2],[.5,0,1.6],[-3,0,1.2],[4.8,0,4.4]],massDoors:[{c:[1.5,1.5,.5],h:[1,1.5,.15],need:16}],boxes:[{c:[-2.25,1.5,.5],h:[3.75,1.5,.15],color:`#b8a98e`},{c:[4.25,1.5,.5],h:[1.75,1.5,.15],color:`#b8a98e`},{c:[-4.4,.4,3.9],h:[1.2,.4,.45],color:`#6a4a6a`},{c:[1.2,.4,3.6],h:[.5,.4,.5],color:`#8a6a45`},{c:[4.6,.45,-1.5],h:[.9,.45,.4],color:`#e8ecef`},{c:[-3.5,.5,-3.6],h:[1,.5,.6],color:`#8a6a45`}]},$l={id:`house-02`,name:`Спальни`,location:`house`,intro:`Жильцы прячутся в спальнях и захлопывают двери. Продави дверь массой и съешь двоих.`,goal:{type:`eat`,count:2},stars:[{type:`time`,max:70},{type:`eat`,min:3}],startWorms:25,room:{size:[14,10],height:3},spawn:[0,.8,3.2],doors:[[-6.4,0,3.4]],humans:[{pos:[-4.5,0,1.6],kind:`resident`},{pos:[4.5,0,1.8],kind:`resident`},{pos:[1.5,0,-.1],kind:`resident`}],food:[[-2.5,0,4],[2.5,0,4],[-5.5,0,0],[5.6,0,.2],[0,0,1.2]],massDoors:[{c:[-3.5,1.5,-1],h:[1,1.5,.15],need:14,open:!0,hideout:[-3.6,0,-3.6]},{c:[3.5,1.5,-1],h:[1,1.5,.15],need:14,open:!0,hideout:[3.6,0,-3.6]}],boxes:[{c:[-5.75,1.5,-1],h:[1.25,1.5,.15],color:`#b8a98e`},{c:[0,1.5,-1],h:[2.5,1.5,.15],color:`#b8a98e`},{c:[5.75,1.5,-1],h:[1.25,1.5,.15],color:`#b8a98e`},{c:[0,1.5,-3],h:[.15,1.5,1.85],color:`#a89a80`},{c:[-5.4,.3,-3.6],h:[1,.3,.75],color:`#7a5a8a`},{c:[5.4,.3,-3.6],h:[1,.3,.75],color:`#5a7a8a`},{c:[-1.6,.4,2.6],h:[.7,.4,.4],color:`#6a4a3a`},{c:[3.2,.4,3.9],h:[1,.4,.4],color:`#6a4a6a`}]},eu={id:`house-03`,name:`Кухня`,intro:`На кухне огнемётчик. Огонь не достаёт выше 2 м: заходи со спины или по стене, используй рывок.`,location:`house`,goal:{type:`eat`,count:2},stars:[{type:`time`,max:75},{type:`eat`,min:3}],startWorms:25,room:{size:[14,12],height:3},spawn:[0,.8,4],doors:[[-6.4,0,-5.4],[6.4,0,-5.4]],humans:[{pos:[.5,0,-3.8],kind:`flamer`},{pos:[-4.5,0,-4],kind:`resident`},{pos:[4.5,0,-4.5],kind:`resident`}],food:[[-5,0,3.5],[-2.5,0,1.6],[2.5,0,1.8],[5,0,4],[-5.5,0,-2],[5.5,0,-1.8]],massDoors:[{c:[0,1.5,0],h:[1,1.5,.15],need:18}],boxes:[{c:[-4,1.5,0],h:[3,1.5,.15],color:`#b8a98e`},{c:[4,1.5,0],h:[3,1.5,.15],color:`#b8a98e`},{c:[-3,.4,4],h:[.9,.4,.5],color:`#8a6a45`},{c:[3.5,.45,-3],h:[.6,.45,.6],color:`#e8ecef`},{c:[-3,.5,-2.5],h:[.5,.5,.5],color:`#7d5f3c`}]},tu={id:`house-04`,name:`Гостиная`,location:`house`,intro:`Пол под током мигает. Пройди по мебели, по стене или в момент, когда ток выключен.`,goal:{type:`exit`},stars:[{type:`time`,max:35},{type:`worms`,min:24}],startWorms:25,room:{size:[12,10],height:3},spawn:[-1,.8,3.4],exit:{pos:[3.4,0,-3.4],radius:.8,kind:`drain`},doors:[[-5.4,0,-4]],humans:[{pos:[-3,0,-3.4],kind:`resident`}],food:[[-4.5,0,2.8],[2.5,0,3.8],[-3.5,.95,0],[.5,0,-3.8]],hazards:[{c:[0,0],h:[6,1.2],kind:`electric`,on:1.6,off:1.4},{c:[3.4,-1.9],h:[1.4,.5],kind:`acid`}],solution:[[-3.5,0,2.3],[-3.5,.9,1],[-3.5,.9,-1],[-3.5,0,-2.4],[.5,0,-3.6],[3.4,0,-3.4]],boxes:[{c:[-3.5,.45,0],h:[.5,.45,1.7],color:`#6a4a3a`},{c:[3.8,.4,2.6],h:[1.4,.4,.5],color:`#6a4a6a`},{c:[-1,.25,-2.4],h:[.7,.25,.45],color:`#8a6a45`},{c:[5.6,2.45,0],h:[.4,.1,3],color:`#8a7a68`}]},nu={id:`house-05`,name:`Подвал`,location:`house`,intro:`Всё сразу: ток, дверь на массу, охранник и огнемётчик. Съешь троих.`,goal:{type:`eat`,count:3},stars:[{type:`time`,max:120},{type:`eat`,min:4}],startWorms:30,room:{size:[14,12],height:3,wallColor:`#8d8a80`},spawn:[-2,.8,4.2],doors:[[-6.4,0,-5.4],[6.4,0,-5.4]],humans:[{pos:[3.8,0,-3],kind:`guard`},{pos:[-3.5,0,-3.6],kind:`flamer`},{pos:[-6,0,-4.6],kind:`resident`},{pos:[.4,0,-4.8],kind:`resident`}],food:[[-5.5,0,4.5],[-4.5,0,2.2],[.5,0,4.5],[5.5,0,4.2],[5.5,0,2.2],[3,0,3.2]],hazards:[{c:[-2.5,1],h:[4.5,.6],kind:`electric`,on:1.5,off:1.5}],massDoors:[{c:[-3.5,1.5,-.5],h:[1,1.5,.15],need:20}],boxes:[{c:[-5.75,1.5,-.5],h:[1.25,1.5,.15],color:`#8d8a80`},{c:[.7,1.5,-.5],h:[3.2,1.5,.15],color:`#8d8a80`},{c:[4,1.7,-.5],h:[.1,1.3,.15],color:`#8d8a80`},{c:[4.7,1.7,-.5],h:[.6,1.3,.15],color:`#7a776e`},{c:[4.7,.2,-.5],h:[.6,.2,.15],kind:`grate`},{c:[6.15,1.5,-.5],h:[.85,1.5,.15],color:`#8d8a80`},{c:[1.5,.5,-2.6],h:[.6,.5,.6],color:`#6a5a48`},{c:[-5.6,.45,3.4],h:[.9,.45,.5],color:`#6a5a48`},{c:[2.6,.6,5.3],h:[1.5,.6,.4],color:`#5a6066`}]};function ru(e){switch(e){case`kiosk`:case`fridge`:case`slide`:case`cabinet`:return[`jaws`,2];case`dumpster`:case`lamp`:case`counter`:return[`jaws`,3];case`car`:case`brickwall`:case`facade`:return[`jaws`,4];case`van`:case`garage`:return[`jaws`,5];case`container`:return[`jaws`,6];default:return null}}var iu={car:`машину`,van:`фургон`,dumpster:`мусорный бак`,crates:`ящики`,bench:`скамейку`,kiosk:`ларёк`,fridge:`холодильник`,chair:`стул`,slide:`горку`,cardboard:`коробку`,cabinet:`шкаф`,table:`столик`,stall:`прилавок`,brickwall:`стену`,gate:`ворота`,garage:`гараж`,counter:`стойку`,lamp:`фонарь`,sandbox:`песочницу`,facade:`фасад`,container:`контейнер`,pallet:`поддон`};function au(e){return e===`brickwall`||e===`facade`?.35:1}var ou=[`car`,`van`,`dumpster`,`crates`,`bench`,`kiosk`,`fridge`,`chair`,`slide`,`cardboard`,`cabinet`,`table`,`stall`,`brickwall`,`gate`,`garage`,`counter`,`lamp`,`sandbox`,`facade`,`container`,`pallet`],Z=10396840,su=6120038,cu=15127706,lu=3882822,uu=2763824,du=6974834,fu=1908514,pu=3816512,mu=9417928,hu=13625072,gu=9071173,_u=13214318,vu=11569752,yu=14203012,bu=15785098;function Q(e,t,n,r,i,a,o,s){return{c:[(e+t)/2,(n+r)/2,(i+a)/2],h:[(t-e)/2,(r-n)/2,(a-i)/2],color:o,core:s}}function xu(e,t,n,r,i,a){return{...Q(e,t,n,r,i,a,0,0),fill:!0}}function Su(e){return[e,{...e,c:[-e.c[0],e.c[1],e.c[2]]}]}function Cu(e,t,n,r,i,a,o,s=0){let c=e/2,l=n/2,u=s+t,d=[Q(-c,c,s,s+r,-l,l,i,a),Q(-c,-c+r,s+r,u,-l,l,i,a),Q(c-r,c,s+r,u,-l,l,i,a),Q(-c+r,c-r,s+r,u,-l,-l+r,i,a),Q(-c+r,c-r,s+r,u,l-r,l,i,a)];return o&&d.push(Q(-c,c,u,u+r,-l,l,i,a)),d}function wu(e){let t=.95,n=Zu(e,.75),r=9067068;return[...Su(Q(.8,1,0,.6,1,1.6,fu,pu)),...Su(Q(.8,1,0,.6,-1.6,-1,fu,pu)),Q(-.8799999999999999,.8799999999999999,.25,.35,-1.93,1.93,3814704,Z),...Su(Q(.8799999999999999,t,0,.9,-2,2,e,Z)),Q(-.8799999999999999,.8799999999999999,0,.9,1.93,2,e,Z),Q(-.8799999999999999,.8799999999999999,0,.9,-2,-1.93,e,Z),Q(-.95,t,.9,.97,.85,2,e,Z),Q(-.45,.45,.35,.78,1.1,1.75,su,8028036),Q(.52,.8,.35,.6,1.05,1.35,fu,13157024),Q(-.75,.75,.4,.82,1.82,1.9,12106944,Z),Q(-.8799999999999999,.8799999999999999,.35,.9,.78,.85,su,Z),Q(-.95,t,.9,.97,-2,-1.32,e,Z),Q(-.8799999999999999,.8799999999999999,.35,.9,-1.39,-1.32,su,Z),Q(-.6,.15,.35,.68,-1.9,-1.45,7031342,14075034),Q(.25,.8,.35,.47,-1.9,-1.42,fu,pu),...Su(Q(.12,.7,.35,.55,-.15,.4,r,cu)),...Su(Q(.12,.7,.55,1.15,-.25,-.12,r,cu)),Q(-.85,.85,.35,.55,-1.25,-.75,r,cu),Q(-.85,.85,.55,1.1,-1.32,-1.2,r,cu),Q(-.8799999999999999,.8799999999999999,.7,.95,.55,.78,uu,du),Q(-.62,-.18,.82,1.18,.4,.46,fu,pu),Q(-.44,-.36,.92,1,.46,.55,uu,Z),...Su(Q(.825,.865,.975,1.375,-1.24,.71,mu,hu)),Q(-.95+.14,.8099999999999999,.975,1.375,.73,.78,mu,hu),Q(-.95+.14,.8099999999999999,.975,1.375,-1.31,-1.26,mu,hu),...Su(Q(.82,.8899999999999999,.97,1.38,.72,.8,n,Z)),...Su(Q(.82,.8899999999999999,.97,1.38,-.32,-.25,n,Z)),...Su(Q(.82,.8899999999999999,.97,1.38,-1.32,-1.25,n,Z)),Q(-.95+.06,.8899999999999999,1.38,1.45,-1.32,.8,e,Z),xu(-.8799999999999999,.8799999999999999,0,.25,-1.93,1.93),xu(-.8799999999999999,.8799999999999999,.35,1.38,-1.25,.72),xu(-.8799999999999999,.8799999999999999,.35,.9,.85,1.93),xu(-.8799999999999999,.8799999999999999,.35,.9,-1.93,-1.39)]}function Tu(e){let t=.85,n=1.9,r=1.6;return[...Su(Q(.7,.9,0,.56,1,1.56,fu,pu)),...Su(Q(.7,.9,0,.56,-1.5,-.94,fu,pu)),Q(-.78,.78,.25,.35,-1.8299999999999998,1.8299999999999998,su,Z),...Su(Q(.78,t,0,.35,-1.9,n,e,Z)),Q(-.78,.78,0,.35,1.8299999999999998,n,e,Z),Q(-.78,.78,0,.35,-1.9,-1.8299999999999998,e,Z),xu(-.78,.78,0,.25,-1.8299999999999998,1.8299999999999998),Q(-.78,.78,.35,.85,1.8299999999999998,n,e,Z),Q(-.85,t,.85,.92,1.45,n,e,Z),Q(-.4,.4,.35,.78,1.5,1.8,su,8028036),Q(-.78,.78,.35,.85,1.38,1.45,su,Z),...Su(Q(.1,.65,.35,.58,.55,1.05,lu,cu)),...Su(Q(.1,.65,.58,1.2,.48,.6,lu,cu)),Q(-.78,.78,.7,.95,1.2,1.38,uu,du),Q(-.6,-.2,.88,1.22,1.08,1.14,fu,pu),Q(-.77,.77,.925,1.5250000000000001,1.39,1.44,mu,hu),...Su(Q(.78,t,.35,r,-1.9,.4,e,Z)),...Su(Q(.78,t,.35,.92,.4,1.45,e,Z)),...Su(Q(.725,.765,.925,1.5250000000000001,.41,1.37,mu,hu)),Q(-.78,.78,.35,r,-1.9,-1.8299999999999998,e,Z),Q(-.85,t,1.53,r,-1.9,1.45,e,Z),Q(-.78,.78,.35,1.53,.4,.47,su,Z),Q(-.75,-.2,.35,.8,-1.75,-1.15,vu,yu),Q(-.7,-.25,.8,1.15,-1.7,-1.25,12884578,yu),Q(.1,.75,.35,.95,-1.8,-1,vu,yu),Q(-.7,.2,.35,.6,-.6,.2,10516554,yu),Q(.25,.75,.35,.75,-.4,.3,5929632,15262416),xu(-.78,.78,.35,1.53,-1.8299999999999998,.4),xu(-.78,.78,.35,1.53,.47,1.38),xu(-.78,.78,.35,.85,1.45,1.8299999999999998)]}function Eu(e){let t=2500908,n=5917240;return[...Cu(1.8,1.08,1.2,.07,e,Z,!1),Q(-.9,.9,1.08,1.15,-.6,.1,Zu(e,.8),Z),Q(-.75,-.15,.07,.62,-.45,.2,t,n),Q(0,.75,.07,.55,-.4,.45,3095084,n),Q(-.6,0,.62,.92,-.2,.4,t,n),Q(.1,.6,.55,.85,-.45,-.05,vu,yu),Q(-.3,.1,.07,.4,.25,.5,6982202,13162640)]}function Du(){let e=12073004,t=15786152;return[...Cu(1.2,.8,1.2,.07,gu,_u,!1),Q(-.53,.53,.07,.62,-.53,.53,14271626,15259816),Q(-.45,-.1,.62,.78,-.45,-.1,e,t),Q(.05,.45,.62,.76,-.4,.05,e,t),Q(-.4,0,.62,.77,.1,.45,10137674,t),Q(.1,.45,.62,.75,.15,.45,e,t),...Cu(.8,.33,.8,.07,8216380,_u,!0,.8).map(e=>({...e,c:[e.c[0]-.2,e.c[1],e.c[2]-.1]})),Q(-.53,.13,.87,1.12,-.43,.23,15259816,15918784),xu(-.53,.13,.87,1.13,-.43,.23)]}function Ou(){let e=2895667;return[...Su(Q(.82,.9,0,.42,-.28,.28,e,su)),...Su(Q(.82,.9,.42,.95,-.3,-.22,e,su)),Q(-1,1,.42,.49,.12,.28,gu,_u),Q(-1,1,.42,.49,-.08,.08,gu,_u),Q(-1,1,.42,.49,-.28,-.12,gu,_u),Q(-1,1,.58,.72,-.3,-.23,gu,_u),Q(-1,1,.8,.94,-.3,-.23,gu,_u)]}function ku(e){let t=1.5,n=.08,r=[14172204,2919128,15254060,3844186,15235628,10504920],i=[Q(-1.5,t,0,n,-1,1,su,Z),Q(-1.5,t,n,2.32,-1,-.92,e,bu),...Su(Q(1.42,t,n,2.32,-.92,1,e,bu)),Q(-1.42,1.42,n,1,.92,1,e,bu),Q(-1.41,1.41,1.005,1.995,.935,.995,mu,hu),Q(-1.42,1.42,2,2.32,.92,1,e,bu),Q(-1.6,1.6,2.32,2.4,-1,1.2,Zu(e,.7),Z),Q(-1.42,1.42,n,1,.45,.85,13154458,_u),Q(.3,.75,1,1.25,.5,.8,uu,du),Q(-.5,-.1,n,.55,-.1,.3,5913130,cu)];for(let[e,t]of[[.75,0],[1.35,2],[1.95,4]]){i.push(Q(-1.42,1.42,e,e+.06,-.92,-.55,14209732,_u));for(let n=0;n<5;n++){let a=-1.3+n*.55;i.push(Q(a,a+.3,e+.06,e+.38,-.88,-.6,r[(t+n)%r.length],15788760))}}return i.push(xu(-1.42,1.42,n,2.32,-.92,.92)),i}function Au(){let e=15002348,t=13623526,n=.6,r=.5,i=.09;return[Q(-.6,n,0,i,-.5,r,e,bu),Q(-.6,n,2.1100000000000003,2.2,-.5,r,e,bu),...Su(Q(.51,n,i,2.1100000000000003,-.5,r,e,bu)),Q(-.51,.51,i,2.1100000000000003,-.5,-.41000000000000003,e,bu),Q(-.6,n,i,2.1100000000000003,.41000000000000003,r,e,bu),Q(-.48,-.42,.9,1.6,r,.55,10134696,Z),Q(-.51,.51,1.55,1.62,-.41000000000000003,.41000000000000003,e,bu),Q(-.51,.51,1.62,1.9,-.41000000000000003,.41000000000000003,14676730,16055295),Q(-.51,.51,.55,.6,-.41000000000000003,.41000000000000003,t,hu),Q(-.51,.51,1.05,1.1,-.41000000000000003,.41000000000000003,t,hu),Q(-.4,-.25,.6,.95,-.3,-.15,3832378,11065504),Q(-.2,-.05,.6,.92,-.3,-.15,8014378,15251552),Q(.05,.35,.6,.85,-.3,0,15790320,16447728),Q(-.4,0,1.1,1.22,-.3,.1,15255610,16048256),Q(.1,.42,1.1,1.3,-.3,.1,13650490,15773856),Q(-.4,.4,i,.4,-.3,.3,8042570,14217392),xu(-.51,.51,i,2.1100000000000003,-.41000000000000003,.41000000000000003)]}function ju(){let e=6177064,t=_u;return[...Su(Q(.17,.23,0,.42,.17,.23,e,t)),...Su(Q(.17,.23,0,.42,-.23,-.17,e,t)),Q(-.25,.25,.42,.49,-.25,.25,e,t),...Su(Q(.17,.23,.49,.95,-.25,-.18,e,t)),Q(-.23,.23,.7,.9,-.25,-.18,e,t)]}function Mu(e){let t=3828392,n=[...Su(Q(.32,.4,0,1.25,-1.2,-1.12,t,Z)),...Su(Q(.32,.4,0,1.25,-.72,-.64,t,Z)),Q(-.4,.4,1.12,1.2,-1.2,-.64,14202954,_u),Q(-.4,.4,1.2,1.5,-1.2,-1.13,t,Z)];for(let e=0;e<3;e++)n.push(Q(-.32,.32,.3+e*.3,.36+e*.3,-1.2,-1.12,14202954,_u));for(let t=0;t<6;t++){let r=-.64+t*.3,i=1.05-t*.18;n.push(Q(-.3,.3,i,i+.07,r,r+.3,e,15777960)),n.push(...Su(Q(.3,.37,i,i+.2,r,r+.3,e,15777960)))}return n}function Nu(e){let t=e,n=[4881072,14174778,15259824];return[...Cu(t,t,t,.06,vu,yu,!0),Q(-t/2+.06,t/2-.06,.06,t*.35,-t/2+.06,t/2-.06,15525072,16183520),Q(-t*.3,0,t*.35,t*.7,-t*.3,t*.1,n[0],13688040),Q(.02,t*.32,t*.35,t*.6,-t*.1,t*.3,n[1],15777968),xu(-t/2+.06,t/2-.06,.06,t,-t/2+.06,t/2-.06)]}function Pu(e){let t=.8,n=.07,r=[3828440,14196794,3844202,14174826],i=[...Cu(2,t,1,n,e,Z,!0),Q(-.9299999999999999,.9299999999999999,.38,.43,-.43,.43,Zu(e,.85),Z)];for(let e=0;e<6;e++){let t=-.88+e*.3;i.push(Q(t,t+.12,n,.36,-.3,.3,r[e%4],16052452)),i.push(Q(t+.05,t+.17,.43,.7,-.3,.3,r[(e+2)%4],16052452))}return i.push(xu(-.9299999999999999,.9299999999999999,n,t,-.43,.43)),i}function Fu(){return[Q(-.25,.25,0,.06,-.25,.25,su,Z),Q(-.05,.05,.06,.74,-.05,.05,su,Z),Q(-.5,.5,.74,.81,-.5,.5,14207144,_u),Q(-.32,-.04,.81,.84,-.22,.06,16053488,16777215),Q(-.25,-.1,.84,.92,-.14,-.02,14196816,15784096),Q(.14,.26,.81,.93,.08,.2,15263976,9067056)]}function Iu(e){let t=[14172204,15254060,8042570,15235628],n=[...Cu(2.4,.9,1.2,.07,gu,_u,!0),Q(-1,-.2,.07,.5,-.45,.45,vu,yu),Q(.2,1,.07,.45,-.45,.45,vu,yu),xu(-1.13,1.13,.07,.9,-.53,.53),...Su(Q(1.08,1.16,.97,2,-.6,-.52,su,Z)),Q(-1.3,1.3,2,2.07,-.7,.35,e,15788248)];for(let e=0;e<4;e++){let r=-1.1+e*.56;n.push(Q(r,r+.5,.97,1.05,-.5,.3,gu,_u)),n.push(Q(r+.04,r+.46,1.05,1.17,-.46,.26,t[e],16050352))}return n}var Lu=9062968,Ru=12088154,zu=10132114,Bu=12894904;function Vu(e,t){let n=[];for(let r=-e/2;r<e/2-.01;r+=2){let i=Math.min(e/2,r+2),a=.9+Math.abs(Math.round(r*3))%3*.06;n.push(Q(-.11,.11,0,t-.08,r,i,Zu(Lu,a),Ru))}return n.push(Q(-.13,.13,t-.08,t,-e/2,e/2,zu,Bu)),n.map(e=>({...e,cell:.07}))}function Hu(e,t){let n=[Q(-.1,.1,0,t,-e/2,-e/2+.16,su,Z),Q(-.1,.1,0,t,e/2-.16,e/2,su,Z)],r=Math.max(3,Math.round((e-.32)/.3)),i=(e-.32)/r;for(let a=0;a<r;a++){let r=-e/2+.16+a*i;n.push(Q(-.05,.05,.02,t-.05,r+.01,r+i-.01,a%2?8017462:8806462,_u))}return n.push(Q(-.08,.08,.6,.72,-e/2+.16,e/2-.16,6177064,_u)),n.push(Q(-.08,.08,t-1,t-.88,-e/2+.16,e/2-.16,6177064,_u)),n.map(e=>({...e,cell:.06}))}function Uu(e){let t=.1,n=[Q(-5,5,2.3,2.4,-1,1,zu,Bu),Q(-5,5,0,2.3,-1,-.9,zu,Bu),...Su(Q(4.9,5,0,2.3,-.9,1,zu,Bu))];for(let r=0;r<3;r++){let i=-4.9+(10-2*t)/3*r,a=i+(10-2*t)/3;n.push(Q(i,i+.12,0,2.3,.9,1,zu,Bu)),n.push(Q(i+.12,a,0,2.3,.9299999999999999,1,r===1?Zu(e,.85):e,Z)),n.push(Q(i+.12,a,.3,.36,.98,1.02,su,Z)),n.push(Q(i+.12,a,1.1,1.16,.98,1.02,su,Z)),n.push(Q(i+.3,a-.3,1,1.06,-.9,-.5,gu,_u)),n.push(Q(i+.4,i+.8,1.06,1.36,-.85,-.55,3832504,14209200)),n.push(Q(a-.8,a-.4,1.06,1.3,-.85,-.55,12071482,14209200)),n.push(Q(i+.4,i+1.1,0,.7,-.2,.1,fu,pu)),n.push(Q(a-1,a-.4,0,.35,-.5,0,13122090,Z))}return n.push(xu(-4.9,4.9,0,2.3,-.9,.9299999999999999)),n.map(e=>({...e,cell:.06}))}function Wu(){let e=1.1,t=.07;return[...Cu(7,1.04,1,t,6965810,_u,!1),Q(-3.55,3.55,1.04,e,-.55,.55,15262940,16052974),Q(-3.2,-.5,.4,.46,-.43,.43,gu,_u),Q(-3.1,-2.3,.46,.8,-.3,.3,15790320,15262416),Q(2.5,3,e,1.35,-.3,.1,uu,du),Q(-1.6,.4,e,1.1600000000000001,-.4,.4,15257800,16180444),Q(-1.4,-.9,1.1600000000000001,1.3,-.25,.15,9062954,15784112),Q(-.6,-.1,1.1600000000000001,1.32,-.25,.15,15778e3,16773364),xu(-3.43,3.43,t,1.04,-.43,.43)].map(e=>({...e,cell:.05}))}function Gu(){return[Q(-.15,.15,0,.12,-.15,.15,su,Z),Q(-.06,.06,.12,3.3,-.06,.06,3817284,Z),Q(-.06,.06,3.2,3.3,.06,.7,3817284,Z),Q(-.15,.15,3.05,3.2,.55,.85,16052424,16776160)]}function Ku(){let e=1.5;return[Q(-1.5,e,0,.3,-1.5,-1.4,gu,_u),Q(-1.5,e,0,.3,1.4,e,gu,_u),...Su(Q(1.4,e,0,.3,-1.4,1.4,gu,_u)),Q(-1.4,1.4,0,.18,-1.4,1.4,14468234,15259816),Q(.3,.55,.18,.42,-.4,-.15,14170682,15769760),Q(-.6,-.1,.18,.24,.3,.42,3832536,11585776)].map(e=>({...e,cell:.05}))}function qu(e){let t=.12,n=2.4,r=e;return[Q(-2,2,0,.5,-.12/2,t/2,Zu(r,.85),Ru),Q(-2,-.8,.5,n,-.12/2,t/2,r,Ru),Q(.8,2,.5,n,-.12/2,t/2,r,Ru),Q(-.8,.8,2,n,-.12/2,t/2,r,Ru),Q(-.79,.79,.505,1.995,-.055,-.005,mu,hu),Q(-.9,.9,.44,.52,-.12/2,.12,zu,Bu),Q(-.05,.05,.5,2,-.01,.02,15263968,16777215)].map(e=>({...e,cell:.07}))}function Ju(e){let t=1.2,n=[Q(-1.2,t,0,.12,-3,3,su,Z),Q(-1.2,t,2.52,2.6,-3,3,e,Z)];for(let r=-3;r<2.99;r+=.5){let i=Math.round((r+3)*2)%2?.88:1;n.push(...Su(Q(1.1199999999999999,t,.12,2.52,r,r+.5,Zu(e,i),Z)))}n.push(Q(-1.1199999999999999,1.1199999999999999,.12,2.52,2.92,3,Zu(e,.92),Z)),n.push(Q(-1.1199999999999999,-.02,.12,2.52,-3,-2.92,Zu(e,.8),Z)),n.push(Q(.02,1.1199999999999999,.12,2.52,-3,-2.92,Zu(e,.8),Z)),n.push(Q(-.5,-.42,.4,2.2,-3.04,-3,12106944,Z)),n.push(Q(.42,.5,.4,2.2,-3.04,-3,12106944,Z));for(let e=0;e<4;e++){let t=-2.7+e*1.1;n.push(Q(-1.05,-.1,.12,.9,t,t+.9,vu,yu)),n.push(Q(-1,-.15,.9,1.6,t+.05,t+.85,12884578,yu)),n.push(Q(.15,1,.12,1,t+.1,t+.8,e%2?2906778:10103852,14211264))}return n.push(xu(-1.1199999999999999,1.1199999999999999,.12,2.52,-2.92,2.92)),n.map(e=>({...e,cell:.07}))}function Yu(e){let t=[];for(let e of[-.5,-.04,.42])t.push(Q(e,e+.08,0,.1,-.5,.5,gu,_u));for(let e=-.5;e<.45;e+=.2)t.push(Q(-.6,.6,.1,.15,e,e+.14,10123858,_u));for(let n=0;n<2;n++)for(let r=0;r<2;r++)t.push(Q(-.55+r*.56,-.01+r*.56,.15+n*.25,.4+n*.25,-.45,.45,n%2?Zu(e,.9):e,15261896));return t}function Xu(e,t){let n=t??8947848,r=e.prefab===`car`?wu(n):e.prefab===`van`?Tu(n):e.prefab===`dumpster`?Eu(n):e.prefab===`crates`?Du():e.prefab===`bench`?Ou():e.prefab===`kiosk`?ku(n):e.prefab===`fridge`?Au():e.prefab===`chair`?ju():e.prefab===`slide`?Mu(n):e.prefab===`cardboard`?Nu(e.size??.7):e.prefab===`table`?Fu():e.prefab===`stall`?Iu(n):e.prefab===`brickwall`?Vu(e.size??4,e.height??3.9):e.prefab===`gate`?Hu(e.size??2.4,e.height??3.9):e.prefab===`garage`?Uu(n):e.prefab===`counter`?Wu():e.prefab===`lamp`?Gu():e.prefab===`sandbox`?Ku():e.prefab===`facade`?qu(n):e.prefab===`container`?Ju(n):e.prefab===`pallet`?Yu(n):Pu(n),i=((e.rot??0)%360+360)%360,[a,o,s]=e.pos;return r.map(e=>{let[t,n,r]=e.c,[c,l,u]=e.h;for(let e=0;e<i;e+=90)[t,r]=[r,-t],[c,u]=[u,c];return{...e,c:[a+t,o+n,s+r],h:[c,l,u]}})}function Zu(e,t){let n=Math.round((e>>16&255)*t),r=Math.round((e>>8&255)*t),i=Math.round((e&255)*t);return n<<16|r<<8|i}var Qu=1e9,$u=-.15,ed=.2,td=.06,nd=.25,rd=-.01,id=.13,ad=.1,od=.03,sd=.3,cd=.04,ld=.1,ud=[[1,0,0],[0,1,0],[0,0,1],[1,1,0],[1,-1,0],[1,0,1],[1,0,-1],[0,1,1],[0,1,-1]],dd=class{cell;min;nx;ny;nz;F;mask;inside;part;cores;colors;partTotal;partLeft;fills=[];fillOf;thin0;insideTotal;insideLeft;gone=!1;version=0;dirtyChunks=new Set;probes=[];pending=[];removed=[];seen=null;nearMap=null;nearSide=null;nearDim=[0,0,0];nearVersion=-1;groundJ=0;stack=null;constructor(e){let t=Qu,n=Qu,r=Qu,i=-1e9,a=-1e9,o=-1e9;for(let s of e)t=Math.min(t,s.c[0]-s.h[0]),i=Math.max(i,s.c[0]+s.h[0]),n=Math.min(n,s.c[1]-s.h[1]),a=Math.max(a,s.c[1]+s.h[1]),r=Math.min(r,s.c[2]-s.h[2]),o=Math.max(o,s.c[2]+s.h[2]);let s=Math.max(0,...e.map(e=>e.cell??0));this.cell=s||((i-t)*(a-n)*(o-r)<4?.04:.05);let c=this.cell;this.min=[t-nd,n-nd,r-nd],this.nx=Math.ceil((i-t+2*nd)/c),this.ny=Math.ceil((a-n+2*nd)/c),this.nz=Math.ceil((o-r+2*nd)/c);let l=this.nx*this.ny*this.nz;this.F=new Float32Array(l).fill($u),this.mask=new Uint8Array(l),this.inside=new Uint8Array(l),this.part=new Uint8Array(l),this.thin0=new Uint16Array(l),this.fillOf=new Uint8Array(l),this.partTotal=new Int32Array(e.length),this.partLeft=new Int32Array(e.length),this.cores=e.map(e=>e.core??fd(e.color??8947848,.5)),this.colors=e.map(e=>e.color??8947848);let[u,d,f]=this.min;e.forEach((e,t)=>{let n=(t,n,r)=>Math.max(0,Math.floor((t-e.h[n]-r)/c-.5)+1),r=(t,n,r,i)=>Math.min(i-1,Math.ceil((t+e.h[n]-r)/c-.5)-1),i=n(e.c[0],0,u),a=r(e.c[0],0,u,this.nx),o=n(e.c[1],1,d),s=r(e.c[1],1,d,this.ny),l=n(e.c[2],2,f),p=r(e.c[2],2,f,this.nz);e.fill&&this.fills.push({index:t,open:!1,covers:[]});for(let n=l;n<=p;n++)for(let r=o;r<=s;r++)for(let o=i;o<=a;o++){let i=this.index(o,r,n);e.fill?this.fillOf[i]||(this.fillOf[i]=this.fills.length):(this.inside[i]=1,this.part[i]=Math.min(255,t))}});for(let t of this.fills){let n=e[t.index],r=n.c[1]+n.h[1],i=4*n.h[0]*n.h[2];e.forEach((e,a)=>{if(e.fill)return;let o=e.c[1]-e.h[1];if(o<r-.03||o>r+.15)return;let s=Math.min(e.c[0]+e.h[0],n.c[0]+n.h[0])-Math.max(e.c[0]-e.h[0],n.c[0]-n.h[0]),c=Math.min(e.c[2]+e.h[2],n.c[2]+n.h[2])-Math.max(e.c[2]-e.h[2],n.c[2]-n.h[2]);s>0&&c>0&&s*c>i*.5&&t.covers.push(a)}),t.covers.length||(t.open=!0)}let p=e.map(e=>{let t=2*e.h[0]<id,n=2*e.h[1]<id,r=2*e.h[2]<id;return!!t|(n?2:0)|(r?4:0)|(t||n?24:0)|(t||r?96:0)|(n||r?384:0)}),m=0,h=this.ny;for(let e=0;e<this.nz;e++)for(let t=0;t<this.ny;t++)for(let n=0;n<this.nx;n++){let r=this.index(n,t,e);this.inside[r]&&(m++,this.partTotal[this.part[r]]++,t<h&&(h=t),this.thin0[r]=p[this.part[r]],(Math.imul(r,2654435761)>>>0)%27==0&&this.probes.push(r))}this.groundJ=h+1,this.insideTotal=Math.max(1,m),this.insideLeft=m,this.partLeft.set(this.partTotal)}coverLeft(e){let t=0,n=0;for(let r of e.covers)t+=this.partLeft[r],n+=this.partTotal[r];return n?t/n:0}hidden(e){let t=this.fillOf[e];return t>0&&!this.fills[t-1].open}get chunksX(){return Math.ceil(this.nx/16)}get chunksY(){return Math.ceil(this.ny/16)}chunkId(e,t,n){return e+this.chunksX*(t+this.chunksY*n)}index(e,t,n){return e+this.nx*(t+this.ny*n)}get left(){return this.insideLeft/this.insideTotal}contains(e,t,n,r=0){let[i,a,o]=this.min,s=this.cell;return e>i-r&&t>a-r&&n>o-r&&e<i+this.nx*s+r&&t<a+this.ny*s+r&&n<o+this.nz*s+r}bite(e,t,n,r){let i=this.cell,[a,o,s]=this.min,c=r-$u,l=Math.max(0,Math.floor((e-c-a)/i)),u=Math.min(this.nx-1,Math.ceil((e+c-a)/i)),d=Math.max(0,Math.floor((t-c-o)/i)),f=Math.min(this.ny-1,Math.ceil((t+c-o)/i)),p=Math.max(0,Math.floor((n-c-s)/i)),m=Math.min(this.nz-1,Math.ceil((n+c-s)/i)),h=0;for(let c=p;c<=m;c++){let p=s+(c+.5)*i-n;for(let n=d;n<=f;n++){let s=o+(n+.5)*i-t;for(let t=l;t<=u;t++){let o=a+(t+.5)*i-e,l=r-Math.sqrt(o*o+s*s+p*p),u=this.index(t,n,c),d=this.F[u];if(l<=d||this.hidden(u))continue;let f=l>ed?ed:l;this.F[u]=f,d<=rd&&f>rd&&this.inside[u]&&(h++,this.partLeft[this.part[u]]--);let m=Math.round(Math.max(-.06,Math.min(td,f))/td*127.5+127.5);this.mask[u]=m}}}this.insideLeft-=h,this.version++;let g=Math.ceil(ad/i)+1,_=(e,t)=>Math.max(0,Math.min(t-1,e));return this.pending.push(_(Math.floor((e-r-a)/i)-g,this.nx),_(Math.ceil((e+r-a)/i)+g,this.nx),_(Math.floor((t-r-o)/i)-g,this.ny),_(Math.ceil((t+r-o)/i)+g,this.ny),_(Math.floor((n-r-s)/i)-g,this.nz),_(Math.ceil((n+r-s)/i)+g,this.nz)),this.markDirty(l,u,d,f,p,m),h}markDirty(e,t,n,r,i,a){for(let o=Math.max(0,i-1)/16|0;o<=((a+1)/16|0);o++)for(let i=Math.max(0,n-1)/16|0;i<=((r+1)/16|0);i++)for(let n=Math.max(0,e-1)/16|0;n<=((t+1)/16|0);n++)this.dirtyChunks.add(this.chunkId(n,i,o))}solid(e,t,n){if(e<0||t<0||n<0||e>=this.nx||t>=this.ny||n>=this.nz)return!1;let r=this.index(e,t,n);return this.inside[r]===1&&this.F[r]<=rd}thinDirs(e,t,n){let r=this.cell,i=0;for(let a=0;a<ud.length;a++){let[o,s,c]=ud[a],l=r*Math.hypot(o,s,c),u=Math.ceil(id/l),d=0,f=0;for(;d<u&&this.solid(e+o*(d+1),t+s*(d+1),n+c*(d+1));)d++;if(!(d>=u)){for(;f<u&&this.solid(e-o*(f+1),t-s*(f+1),n-c*(f+1));)f++;(d+f+1)*l<id&&(i|=1<<a)}}return i}thin(e,t,n,r){return(this.thinDirs(t,n,r)&~this.thin0[e])!==0}clear(e,t,n){let r=this.index(e,t,n);this.setF(r,cd),this.insideLeft--,this.partLeft[this.part[r]]--,this.markDirty(Math.max(0,e-1),e+1,Math.max(0,t-1),t+1,Math.max(0,n-1),n+1);let i=[r-1,r+1,r-this.nx,r+this.nx,r-this.nx*this.ny,r+this.nx*this.ny];for(let e of i)e>=0&&e<this.F.length&&!this.inside[e]&&this.setF(e,cd);this.removed.push(e,t,n)}setF(e,t){this.F[e]>=t||(this.F[e]=t,this.mask[e]=Math.round(Math.max(-.06,Math.min(td,t))/td*127.5+127.5))}chip(e,t,n,r){let i=this.cell,[a,o,s]=this.min,c=Math.max(0,Math.floor((e-r-a)/i)),l=Math.min(this.nx-1,Math.ceil((e+r-a)/i)),u=Math.max(0,Math.floor((t-r-o)/i)),d=Math.min(this.ny-1,Math.ceil((t+r-o)/i)),f=Math.max(0,Math.floor((n-r-s)/i)),p=Math.min(this.nz-1,Math.ceil((n+r-s)/i)),m=0;for(let h=f;h<=p;h++)for(let f=u;f<=d;f++)for(let u=c;u<=l;u++){let c=a+(u+.5)*i-e,l=o+(f+.5)*i-t,d=s+(h+.5)*i-n;if(c*c+l*l+d*d>r*r)continue;let p=this.index(u,f,h);!this.inside[p]||this.F[p]>rd||this.hidden(p)||(this.clear(u,f,h),m++)}return m&&this.version++,m}detachAll(){let{F:e,inside:t}=this;for(let n=0;n<this.nz;n++)for(let r=0;r<this.ny;r++)for(let i=0;i<this.nx;i++){let a=this.index(i,r,n);t[a]&&e[a]<=rd&&this.clear(i,r,n)}this.version++}takePieces(e){let t=this.removed;if(!t.length)return[];let n=this.cell,r=new Map;for(let i=0;i<t.length;i+=3){let a=this.min[0]+(t[i]+.5)*n,o=this.min[1]+(t[i+1]+.5)*n,s=this.min[2]+(t[i+2]+.5)*n,c=Math.floor(a/e)*73856093^Math.floor(o/e)*19349663^Math.floor(s/e)*83492791,l=r.get(c);l||(l={x:0,y:0,z:0,cells:0,part:this.part[this.index(t[i],t[i+1],t[i+2])]},r.set(c,l)),l.x+=a,l.y+=o,l.z+=s,l.cells++}this.removed=[];let i=[...r.values()];for(let e of i)e.x/=e.cells,e.y/=e.cells,e.z/=e.cells;return i}settle(){if(!this.pending.length)return 0;let e=this.pending.slice(0,48);this.pending=this.pending.slice(Math.max(48,this.pending.length-96));let t=0;for(let n=0;n<2;n++)for(let n=0;n<e.length;n+=6)for(let r=e[n+4];r<=e[n+5];r++)for(let i=e[n+2];i<=e[n+3];i++)for(let a=e[n];a<=e[n+1];a++){let e=this.index(a,i,r);!this.inside[e]||this.F[e]>rd||this.F[e]<-.1||this.thin(e,a,i,r)&&(this.clear(a,i,r),t++)}return t&&this.version++,t}prune(){let e=this.F.length,t=this.seen??=new Uint8Array(e),n=this.stack??=new Int32Array(e);t.fill(0);let{nx:r,ny:i}=this,a=r,o=r*i,s=od/this.cell**3,c=sd/this.cell**3,l=this.groundJ,u=0,{F:d,inside:f}=this;for(let p=0;p<e;p++){if(!f[p]||t[p]||d[p]>rd)continue;let e=0,m=0,h=!1,g=!1;for(t[p]=1,n[m++]=p;e<m;){let s=n[e++];d[s]>-.14&&(h=!0),!g&&(s/r|0)%i<=l&&(g=!0);let c=s-1;!t[c]&&f[c]&&d[c]<=rd&&(t[c]=1,n[m++]=c),c=s+1,!t[c]&&f[c]&&d[c]<=rd&&(t[c]=1,n[m++]=c),c=s-a,!t[c]&&f[c]&&d[c]<=rd&&(t[c]=1,n[m++]=c),c=s+a,!t[c]&&f[c]&&d[c]<=rd&&(t[c]=1,n[m++]=c),c=s-o,!t[c]&&f[c]&&d[c]<=rd&&(t[c]=1,n[m++]=c),c=s+o,!t[c]&&f[c]&&d[c]<=rd&&(t[c]=1,n[m++]=c)}if(!(!h||m>=s&&(g||m>=c))){for(let e=0;e<m;e++){let t=n[e],a=t%r,s=(t/r|0)%i,c=t/o|0;this.clear(a,s,c)}u+=m}}return u&&this.version++,u}nearestMaterial(e,t,n,r,i){let a=this.cell,[o,s,c]=this.min,l=Math.round((e-o)/a-.5),u=Math.round((t-s)/a-.5),d=Math.round((n-c)/a-.5),f=Math.ceil(r/a),p=r*r,m=!1;for(let r=-f;r<=f;r++){let h=d+r;if(!(h<0||h>=this.nz))for(let r=-f;r<=f;r++){let d=u+r;if(!(d<0||d>=this.ny))for(let r=-f;r<=f;r++){let u=l+r;if(u<0||u>=this.nx)continue;let f=this.index(u,d,h);if(!this.inside[f]||this.F[f]>rd||this.hidden(f))continue;let g=o+(u+.5)*a,_=s+(d+.5)*a,v=c+(h+.5)*a,y=(g-e)**2+(_-t)**2+(v-n)**2;y<p&&(p=y,i[0]=g,i[1]=_,i[2]=v,m=!0)}}}return m}refreshNear(){if(this.nearVersion===this.version&&this.nearMap)return;this.nearVersion=this.version;let e=ld/this.cell,t=Math.ceil(this.nx/e),n=Math.ceil(this.ny/e),r=Math.ceil(this.nz/e),i=t*n*r;this.nearMap&&this.nearMap.length===i||(this.nearMap=new Int32Array(i),this.nearSide=new Uint8Array(i),this.nearDim=[t,n,r]);let a=this.nearMap.fill(-1),o=this.nearSide,s=new Int32Array(i),c=0,{F:l,inside:u,nx:d,ny:f}=this,p=d,m=d*f,h=(r,i,l,u,d)=>{let f=(u/e|0)*t*n+(l/e|0)*t+(i/e|0);a[f]<0&&(a[f]=r,o[f]=d,s[c++]=f)},g=e=>u[e]===1&&l[e]<=rd;for(let e=0;e<this.nz;e++)for(let t=0;t<d;t++)for(let n=f-1;n>=0;n--){let r=t+p*n+m*e;if(g(r)){this.hidden(r)||h(r,t,n,e,0);break}}if(!c)for(let e=0;e<f;e++)for(let t=0;t<d;t++)for(let n=this.nz-1;n>=0;n--){let r=t+p*e+m*n;if(g(r)){this.hidden(r)||h(r,t,e,n,1);break}}for(let e=0;e<c;e++){let i=s[e],l=i%t,u=(i/t|0)%n,d=i/(t*n)|0,f=a[i],p=o[i];l>0&&a[i-1]<0&&(a[i-1]=f,o[i-1]=p,s[c++]=i-1),l<t-1&&a[i+1]<0&&(a[i+1]=f,o[i+1]=p,s[c++]=i+1),u>0&&a[i-t]<0&&(a[i-t]=f,o[i-t]=p,s[c++]=i-t),u<n-1&&a[i+t]<0&&(a[i+t]=f,o[i+t]=p,s[c++]=i+t),d>0&&a[i-t*n]<0&&(a[i-t*n]=f,o[i-t*n]=p,s[c++]=i-t*n),d<r-1&&a[i+t*n]<0&&(a[i+t*n]=f,o[i+t*n]=p,s[c++]=i+t*n)}}nearest(e,t,n,r){let i=this.nearMap;if(!i)return!1;let[a,o,s]=this.nearDim,c=(e,t)=>e<0?0:e>=t?t-1:e,l=c(Math.floor((e-this.min[0])/ld),a)+a*(c(Math.floor((t-this.min[1])/ld),o)+o*c(Math.floor((n-this.min[2])/ld),s)),u=i[l];if(u<0||this.F[u]>rd)return!1;let d=this.cell,f=u%this.nx,p=(u/this.nx|0)%this.ny,m=u/(this.nx*this.ny)|0,h=this.nearSide[l]===0;return r[0]=this.min[0]+(f+.5)*d,r[1]=this.min[1]+(p+.5)*d+(h?d*.5+.05:0),r[2]=this.min[2]+(m+.5)*d+(h?0:d*.5+.05),!0}aim(e,t,n,r,i=1,a=0){let o=this.aimProbes(e,t,n,r,i,a);if(o||this.insideLeft<=0)return o;let s=[];for(let e=0;e<this.F.length;e++)this.inside[e]&&this.F[e]<=rd&&s.push(e);let c=Math.max(1,Math.ceil(s.length/2e3));return this.probes=s.filter((e,t)=>t%c===0),this.aimProbes(e,t,n,r,i,a)}aimProbes(e,t,n,r,i,a){let o=this.cell,s=a*a,c=0;for(let a=0;a<i;a++){let i=1/0,a=0,l=0,u=0;for(let d of this.probes){if(this.F[d]>rd||this.hidden(d))continue;let f=d%this.nx,p=(d-f)/this.nx%this.ny,m=(d-f-p*this.nx)/(this.nx*this.ny),h=this.min[0]+(f+.5)*o,g=this.min[1]+(p+.5)*o,_=this.min[2]+(m+.5)*o,v=(h-e)**2+(_-n)**2+.3*(g-t)**2-.5*g;if(v>=i)continue;let y=!1;for(let e=0;e<c&&!y;e++)y=(h-r[e*3])**2+(_-r[e*3+2])**2<s;y||(i=v,a=h,l=g,u=_)}if(i===1/0)break;r[c*3]=a,r[c*3+1]=l,r[c*3+2]=u,c++}return c}sample(e,t,n,r,i){if(this.gone)return Qu;let a=this.cell,o=(e-this.min[0])/a-.5,s=(t-this.min[1])/a-.5,c=(n-this.min[2])/a-.5,{nx:l,ny:u,nz:d}=this;if(o<0||s<0||c<0||o>l-1||s>u-1||c>d-1)return-1e9;let f=Math.floor(o),p=Math.floor(s),m=Math.floor(c);f>l-2&&(f=l-2),p>u-2&&(p=u-2),m>d-2&&(m=d-2),o-=f,s-=p,c-=m;let h=this.F,g=l,_=l*u,v=f+l*(p+u*m),y=h[v],b=h[v+1],x=h[v+g],S=h[v+g+1],C=h[v+_],w=h[v+_+1],T=h[v+_+g],E=h[v+_+g+1],D=y+(b-y)*o,O=x+(S-x)*o,k=C+(w-C)*o,A=T+(E-T)*o,ee=D+(O-D)*s,j=ee+(k+(A-k)*s-ee)*c;if(j<=-.1499)return r[i]=0,r[i+1]=1,r[i+2]=0,j;let M=(b-y)*(1-s)*(1-c)+(S-x)*s*(1-c)+(w-C)*(1-s)*c+(E-T)*s*c,N=(x-y)*(1-o)*(1-c)+(S-b)*o*(1-c)+(T-C)*(1-o)*c+(E-w)*o*c,P=(C-y)*(1-o)*(1-s)+(w-b)*o*(1-s)+(T-x)*(1-o)*s+(E-S)*o*s,F=Math.sqrt(M*M+N*N+P*P);return F>1e-6?(r[i]=M/F,r[i+1]=N/F,r[i+2]=P/F):(r[i]=0,r[i+1]=1,r[i+2]=0),j}};function fd(e,t){return Math.round((e>>16&255)*t)<<16|Math.round((e>>8&255)*t)<<8|Math.round((e&255)*t)}var pd=.5,md=.3,hd=class{boxes;data;n;enabled;physIndex;grates;spawn;meta;bites=[];edibleOf;touchE=[];touchD;touchN;gMin=[0,0,0];gDim=[0,0,0];gStart;gBoxes;constructor(e,t){this.boxes=e,this.meta=t,this.spawn=t.spawn;let n=e.filter(e=>e.solid!==!1&&e.kind!==`grate`);this.n=n.length,this.data=new Float32Array(this.n*6),n.forEach((e,t)=>{this.data.set([e.c[0],e.c[1],e.c[2],e.h[0],e.h[1],e.h[2]],t*6)}),this.enabled=new Uint8Array(this.n).fill(1),this.physIndex=new Int32Array(e.length).fill(-1),e.forEach((e,t)=>this.physIndex[t]=n.indexOf(e)),this.edibleOf=new Int16Array(this.n).fill(-1),(t.edibles??[]).forEach((t,n)=>{let r=new dd(t.boxes.map(t=>e[t]));this.bites.push(r),t.volume=r.insideTotal*r.cell**3;for(let r of t.boxes){let t=this.physIndex[r];t>=0&&!e[r].fill&&(this.edibleOf[t]=n)}}),this.touchD=new Float32Array(Math.max(1,this.bites.length)),this.touchN=new Float32Array(Math.max(1,this.bites.length)*3);let r=e.filter(e=>e.kind===`grate`);this.grates=new Float32Array(r.length*6),r.forEach((e,t)=>this.grates.set([e.c[0],e.c[1],e.c[2],e.h[0],e.h[1],e.h[2]],t*6));let i=[1/0,1/0,1/0],a=[-1/0,-1/0,-1/0];for(let e of n)for(let t=0;t<3;t++)i[t]=Math.min(i[t],e.c[t]-e.h[t]),a[t]=Math.max(a[t],e.c[t]+e.h[t]);for(let e=0;e<3;e++)this.gMin[e]=i[e],this.gDim[e]=Math.max(1,Math.ceil((a[e]-i[e])/pd));let[o,s,c]=this.gDim,l=Array.from({length:o*s*c},()=>[]),u=(e,t)=>Math.max(0,Math.min(t-1,e));n.forEach((e,t)=>{let n=[0,1,2].map(t=>[u(Math.floor((e.c[t]-e.h[t]-md-i[t])/pd),this.gDim[t]),u(Math.floor((e.c[t]+e.h[t]+md-i[t])/pd),this.gDim[t])]);for(let r=n[2][0];r<=n[2][1];r++)for(let a=n[1][0];a<=n[1][1];a++)for(let c=n[0][0];c<=n[0][1];c++){let n=[i[0]+c*pd,i[1]+a*pd,i[2]+r*pd],u=0;for(let t=0;t<3;t++){let r=Math.max(e.c[t]-e.h[t]-(n[t]+pd),n[t]-(e.c[t]+e.h[t]),0);u+=r*r}u<.09&&l[(r*s+a)*o+c].push(t)}}),this.gStart=new Int32Array(l.length+1),l.forEach((e,t)=>this.gStart[t+1]=this.gStart[t]+e.length),this.gBoxes=new Int32Array(this.gStart[l.length]),l.forEach((e,t)=>this.gBoxes.set(e,this.gStart[t]))}sdf(e,t,n,r,i){let a=Math.floor((e-this.gMin[0])/pd),o=Math.floor((t-this.gMin[1])/pd),s=Math.floor((n-this.gMin[2])/pd),[c,l,u]=this.gDim;if(a<0||o<0||s<0||a>=c||o>=l||s>=u)return this.sdfRange(e,t,n,r,i,null,0,this.n);let d=(s*l+o)*c+a,f=this.gStart[d],p=this.gStart[d+1];return f===p?(r[i]=0,r[i+1]=1,r[i+2]=0,md):this.sdfRange(e,t,n,r,i,this.gBoxes,f,p)}sdfExact(e,t,n,r,i){return this.sdfRange(e,t,n,r,i,null,0,this.n)}resetBites(e){let t=this.meta.edibles?.[e];t&&(this.bites[e]=new dd(t.boxes.map(e=>this.boxes[e])))}setBox(e,t,n){let r=this.boxes[e];r.c=[t[0],t[1],t[2]],r.h=[n[0],n[1],n[2]];let i=this.physIndex[e];i>=0&&this.data.set([t[0],t[1],t[2],n[0],n[1],n[2]],i*6)}setEnabled(e,t){let n=this.physIndex[e];n>=0&&(this.enabled[n]=+!!t)}navSdf(e,t,n,r,i){let a=this.sdf(e,t,n,r,i),o=this.grates;for(let r=0;r<o.length;r+=6){let i=Math.abs(e-o[r])-o[r+3],s=Math.abs(t-o[r+1])-o[r+4],c=Math.abs(n-o[r+2])-o[r+5],l=Math.hypot(Math.max(i,0),Math.max(s,0),Math.max(c,0))+Math.min(Math.max(i,s,c),0);l<a&&(a=l)}return a}sdfRange(e,t,n,r,i,a,o,s){let c=this.data,l=this.enabled,u=a?md:1e9,d=0,f=1,p=0,m=this.touchE;m.length=0;for(let r=o;r<s;r++){let i=a?a[r]:r;if(!l[i])continue;let o=this.edibleOf[i],s=i*6,h=e-c[s],g=t-c[s+1],_=n-c[s+2],v=(h<0?-h:h)-c[s+3],y=(g<0?-g:g)-c[s+4],b=(_<0?-_:_)-c[s+5],x=v>0?v:0,S=y>0?y:0,C=b>0?b:0,w=Math.sqrt(x*x+S*S+C*C),T=v>y?v:y;b>T&&(T=b);let E=w+(T<0?T:0);if(o>=0){let e=m.indexOf(o);e<0&&(e=m.length,m.push(o),this.touchD[e]=1e9),E<this.touchD[e]&&(this.touchD[e]=E,this.boxNormal(h,g,_,v,y,x,S,C,w,T,this.touchN,e*3))}else if(E<u){if(u=E,w>1e-6){let e=1/w;d=(h<0?-x:x)*e,f=(g<0?-S:S)*e,p=(_<0?-C:C)*e}else T===v?(d=h<0?-1:1,f=0,p=0):T===y?(d=0,f=g<0?-1:1,p=0):(d=0,f=0,p=_<0?-1:1)}}for(let r=0;r<m.length;r++){let i=this.touchD[r],a=this.touchN[r*3],o=this.touchN[r*3+1],s=this.touchN[r*3+2];if(i<u){let c=this.bites[m[r]].sample(e,t,n,this.vn,0);c>i&&(i=c,a=this.vn[0],o=this.vn[1],s=this.vn[2]),i<u&&(u=i,d=a,f=o,p=s)}}return r[i]=d,r[i+1]=f,r[i+2]=p,u}vn=new Float32Array(3);boxNormal(e,t,n,r,i,a,o,s,c,l,u,d){if(c>1e-6){let r=1/c;u[d]=(e<0?-a:a)*r,u[d+1]=(t<0?-o:o)*r,u[d+2]=(n<0?-s:s)*r}else l===r?(u[d]=e<0?-1:1,u[d+1]=0,u[d+2]=0):l===i?(u[d]=0,u[d+1]=t<0?-1:1,u[d+2]=0):(u[d]=0,u[d+1]=0,u[d+2]=n<0?-1:1)}},gd=.5;function _d(e){let t=Sd(e),[n,r]=t.room.size,i=t.room.height,a=n/2,o=r/2,s=t.location??`lab`,c=bd(t.room.wallColor,s===`house`?12102030:10465448),l=[{c:[0,-.25,0],h:[a+gd,.25,o+gd],kind:`floor`},{c:[0,i+.25,0],h:[a+gd,.25,o+gd],kind:`ceiling`,visible:!1},{c:[0,i/2,-o-gd/2],h:[a+gd,i/2+.25,gd/2],kind:`wall`,color:c},{c:[0,i/2,o+gd/2],h:[a+gd,i/2+.25,gd/2],kind:`wall`,visible:!1},{c:[-a-gd/2,i/2,0],h:[gd/2,i/2+.25,o+gd],kind:`wall`,color:c},{c:[a+gd/2,i/2,0],h:[gd/2,i/2+.25,o+gd],kind:`wall`,color:c},{c:[0,.15,o+gd/2],h:[a+gd,.15,gd/2],kind:`decor`,solid:!1,color:yd(c,.7)}],u=new Map;for(let e of t.boxes??[]){if(e.gnaw){let t=u.get(e.gnaw)??[];t.push(l.length),u.set(e.gnaw,t)}l.push({c:[...e.c],h:[...e.h],kind:e.kind??`prop`,color:bd(e.color,8359561),visible:e.visible,solid:e.solid,gnaw:e.gnaw})}let d=new Map,f=new Map,p=new Map,m=new Map,h=new Map;for(let e of t.props??[]){let t=e.color?bd(e.color,8947848):null;if(e.prefab===`facade`){let n=[1/0,1/0,1/0],r=[-1/0,-1/0,-1/0];for(let i of Xu(e,t))if(!i.fill){for(let e=0;e<3;e++)n[e]=Math.min(n[e],i.c[e]-i.h[e]),r[e]=Math.max(r[e],i.c[e]+i.h[e]);l.push({c:i.c,h:i.h,kind:`decor`,solid:!1,color:i.color})}l.push({c:[(n[0]+r[0])/2,(n[1]+r[1])/2,(n[2]+r[2])/2],h:[(r[0]-n[0])/2,(r[1]-n[1])/2,(r[2]-n[2])/2],kind:`wall`,visible:!1});continue}t!==null&&d.set(e.id,t),e.need&&f.set(e.id,e.need),p.set(e.id,au(e.prefab));let n=e.req??ru(e.prefab);n&&h.set(e.id,n),m.set(e.id,e.prefab);let r=u.get(e.id)??[];for(let n of Xu(e,t))r.push(l.length),l.push(n.fill?{c:n.c,h:n.h,kind:`prop`,visible:!1,fill:!0,gnaw:e.id,cell:n.cell}:{c:n.c,h:n.h,kind:`prop`,color:n.color,core:n.core,gnaw:e.id,cell:n.cell});u.set(e.id,r)}let g=[...u].map(([e,t])=>{let n=1/0,r=-1/0,i=1/0,a=-1/0,o=1/0,s=0,c=t[0],u=-1;for(let e of t){let t=l[e];if(n=Math.min(n,t.c[0]-t.h[0]),r=Math.max(r,t.c[0]+t.h[0]),i=Math.min(i,t.c[2]-t.h[2]),a=Math.max(a,t.c[2]+t.h[2]),o=Math.min(o,t.c[1]-t.h[1]),t.solid!==!1){let n=8*t.h[0]*t.h[1]*t.h[2];s+=n,n>u&&(u=n,c=e)}}return{id:e,boxes:t,base:[(n+r)/2,Math.max(0,o),(i+a)/2],volume:s,color:d.get(e)??l[c].color??8947848,need:f.get(e)??0,weight:p.get(e)??1,prefab:m.get(e),req:h.get(e)}}),_=[];for(let e of t.massDoors??[])_.push({box:l.length,need:e.need,startOpen:!!e.open,hideout:e.hideout??null}),l.push({c:e.c,h:e.h,kind:`door`,color:9082012});for(let e of t.doors??[])l.push(...vd(e,a,o));let v=(t.humans??[]).map(e=>Array.isArray(e)?{pos:e,kind:`scientist`}:{pos:e.pos,kind:e.kind}),y=new hd(l,{spawn:t.spawn,doors:t.doors??[],humans:v,food:t.food??[],waypoints:t.waypoints??[],massDoors:_,edibles:g,hazards:(t.hazards??[]).map(e=>({c:e.c,h:e.h,kind:e.kind,on:e.on??1.6,off:e.off??1.4})),location:s});return{id:t.id,name:t.name,intro:t.intro??``,goal:t.goal,stars:t.stars,startWorms:t.startWorms??25,exit:t.exit?{pos:t.exit.pos,radius:t.exit.radius??.8,kind:t.exit.kind??`drain`}:null,level:y,location:s,solution:t.solution??[],sandbox:!!t.sandbox,infest:t.infest?{spawns:t.infest.spawns,civilians:t.infest.civilians??9,growth:{human:t.infest.growth?.human??5,fighter:t.infest.growth?.fighter??8,food:t.infest.growth?.food??3},foodRespawn:t.infest.foodRespawn??30}:null}}function vd(e,t,n){let r=3878698,i=4644976,a=[{d:t-e[0],axis:`x`,s:1},{d:t+e[0],axis:`x`,s:-1},{d:n-e[2],axis:`z`,s:1},{d:n+e[2],axis:`z`,s:-1}].sort((e,t)=>e.d-t.d)[0];if(a.axis===`x`)return[{c:[a.s*(t-.02),1,e[2]],h:[.03,1,.55],kind:`decor`,solid:!1,color:r},{c:[a.s*(t-.03),2.2,e[2]],h:[.04,.1,.25],kind:`decor`,solid:!1,color:i}];let o=a.s*(n-.02);return[{c:[e[0],1,o],h:[.55,1,.03],kind:`decor`,solid:!1,color:r},{c:[e[0],2.2,a.s*(n-.03)],h:[.25,.1,.04],kind:`decor`,solid:!1,color:i}]}function yd(e,t){let n=Math.round((e>>16&255)*t),r=Math.round((e>>8&255)*t),i=Math.round((e&255)*t);return n<<16|r<<8|i}function bd(e,t){if(!e)return t;let n=parseInt(e.replace(`#`,``),16);return Number.isFinite(n)?n:t}var xd=class extends Error{};function Sd(e){let t=e,n=e=>`уровень ${typeof t?.id==`string`?t.id:`?`}: ${e}`,r=e=>{throw new xd(n(e))};t&&typeof t==`object`||r(`не объект`),typeof t.id==`string`&&t.id||r(`нет id`),typeof t.name!=`string`&&r(`нет name`),t.room&&Cd(t.room.size,2)&&t.room.height>0||r(`room: нужны size [w, d] и height`),Cd(t.spawn,3)||r(`spawn: нужен [x, y, z]`);let[i,a]=t.room.size,o=e=>Math.abs(e[0])<=i/2+.01&&Math.abs(e[2])<=a/2+.01&&e[1]>=0&&e[1]<=t.room.height;if(o(t.spawn)||r(`spawn вне комнаты`),t.goal&&[`exit`,`eat`,`infest`,`district`].includes(t.goal.type)||r(`goal.type: exit, eat, infest или district`),t.goal.type===`district`&&(t.goal.share>0&&t.goal.share<=1||r(`goal.share для district — доля 0..1`),(t.props??[]).length||r(`цель district, но нет props`)),t.goal.type===`infest`&&(t.goal.count>=1||r(`goal.count для infest должен быть ≥ 1`),t.infest&&Array.isArray(t.infest.spawns)&&t.infest.spawns.length||r(`цель infest, но нет infest.spawns`)),t.goal.type===`exit`&&!t.exit&&r(`цель exit, но нет exit`),t.goal.type===`eat`){let e=(t.humans??[]).length;t.goal.count>=1&&t.goal.count<=e||r(`goal.count должен быть 1..${e} (столько людей на уровне)`)}t.exit&&(Cd(t.exit.pos,3)||r(`exit.pos: нужен [x, y, z]`),o(t.exit.pos)||r(`exit вне комнаты`)),Array.isArray(t.stars)||r(`stars: нужен массив условий`);for(let e of t.stars)e.type===`time`&&e.max>0||(e.type===`eat`||e.type===`food`||e.type===`worms`)&&e.min>=0||r(`stars: непонятное условие ${JSON.stringify(e)}`);let s=(t.humans??[]).map(e=>Array.isArray(e)?e:(e&&[`scientist`,`resident`,`guard`,`flamer`].includes(e.kind)||r(`humans: непонятный kind ${JSON.stringify(e)}`),e.pos));for(let e of t.massDoors??[])Cd(e.c,3)&&Cd(e.h,3)&&e.need>=1||r(`massDoors: нужны c, h и need ≥ 1: ${JSON.stringify(e)}`),e.hideout&&!Cd(e.hideout,3)&&r(`massDoors: hideout — [x, y, z]`);for(let e of t.hazards??[])(!Cd(e.c,2)||!Cd(e.h,2)||e.kind!==`electric`&&e.kind!==`acid`)&&r(`hazards: нужны c [x, z], h [hx, hz], kind electric|acid`);for(let[e,n]of[[`doors`,t.doors],[`humans`,s],[`food`,t.food],[`infest.spawns`,t.infest?.spawns]])for(let t of n??[])Cd(t,3)||r(`${e}: нужен [x, y, z]`),o(t)||r(`${e}: точка ${JSON.stringify(t)} вне комнаты`);for(let e of t.waypoints??[])Cd(e,2)||r(`waypoints: нужен [x, z]`);(t.humans??[]).length&&!(t.doors??[]).length&&r(`есть люди, но нет дверей, куда им бежать`);for(let e of t.boxes??[])Cd(e.c,3)&&Cd(e.h,3)&&!e.h.some(e=>!(e>0))||r(`boxes: плохая коробка ${JSON.stringify(e)}`);let c=new Set;for(let e of t.props??[])ou.includes(e.prefab)||r(`props: нет заготовки «${e.prefab}» (есть: ${ou.join(`, `)})`),Cd(e.pos,3)||r(`props: плохой pos у ${e.id}`),e.rot!==void 0&&e.rot%90!=0&&r(`props: поворот ${e.id} должен быть кратен 90°`),(!e.id||c.has(e.id))&&r(`props: нужен уникальный id (${e.id})`),c.add(e.id);return t}function Cd(e,t){return Array.isArray(e)&&e.length===t&&e.every(e=>typeof e==`number`&&Number.isFinite(e))}var wd=[ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu];function Td(e){return _d(wd[e])}var Ed={id:`showcase`,name:`Превью`,goal:{type:`eat`,count:1},stars:[],startWorms:110,room:{size:[9,8],height:4.5},spawn:[-2.6,.5,-3.2],doors:[[4,0,3.4]],humans:[[.6,0,-2.9]],food:[],boxes:[{c:[-3.2,.45,-2.7],h:[1,.45,.6],color:`#56636c`},{c:[2.8,.35,-2.9],h:[.4,.35,.4],color:`#8a6a45`},{c:[-1,1.7,-3.85],h:[1.2,.05,.15],color:`#6c6c6c`}]},Dd={id:`sandbox`,name:`Тестовый стенд`,sandbox:!0,intro:`Стенд: лазай по стенам, полкам и коробу, нападай. Люди и еда возрождаются. Число червей — на панели слева.`,goal:{type:`eat`,count:1},stars:[],startWorms:40,room:{size:[18,14],height:3.5},spawn:[0,.8,4.5],doors:[[-8.4,0,-6.4],[8.4,0,-6.4],[8.4,0,5.4]],humans:[[-3,0,2.5],{pos:[3.5,0,2.2],kind:`resident`},{pos:[-5,0,-5],kind:`guard`},{pos:[.5,0,-5.5],kind:`flamer`},{pos:[6.5,0,-5.8],kind:`resident`}],food:[[-1.5,0,5.5],[1.5,0,5.8],[4,0,4.5],[-5,0,5.5],[-8,1.8,1.6],[-8.6,2.25,0],[1,0,.5],[-6,0,-2.5],[6,0,-2.5],[3,0,-5.5]],hazards:[{c:[5.2,3.2],h:[1.2,.8],kind:`electric`,on:1.5,off:1.5},{c:[-2.2,4.6],h:[.8,.5],kind:`acid`}],massDoors:[{c:[6.5,1.75,-4],h:[1,1.75,.15],need:15}],props:[{prefab:`cardboard`,pos:[-3,0,-3.5],size:.8,id:`box1`},{prefab:`cardboard`,pos:[-2.2,0,-3.1],size:.6,id:`box2`},{prefab:`cabinet`,pos:[3,0,5.2],color:`#56636c`,id:`cabinet`}],boxes:[{c:[-8,.3,4],h:[.8,.3,.6],color:`#56636c`},{c:[-8,.6,2.8],h:[.8,.6,.6],color:`#5d6a72`},{c:[-8,.9,1.6],h:[.8,.9,.6],color:`#64717a`},{c:[-8.6,2.2,0],h:[.4,.05,2],color:`#6c6c6c`},{c:[-5,3.1,-2],h:[4,.2,.3],color:`#7a8590`},{c:[1,1.75,2],h:[.3,1.75,.3],color:`#a3abab`},{c:[-3,.6,-1],h:[2,.6,.15],color:`#7f8e89`},{c:[.5,.675,-1],h:[1.5,.525,.15],color:`#6c7a76`},{c:[6.25,.6,-1],h:[2.75,.6,.15],color:`#7f8e89`},{c:[4.75,1.75,-4],h:[.75,1.75,.15],color:`#9fb0a8`},{c:[8.25,1.75,-4],h:[.75,1.75,.15],color:`#9fb0a8`},{c:[4,1.75,-5.5],h:[.15,1.75,1.5],color:`#9fb0a8`}]},Od={id:`infest-01`,name:`Квартал`,intro:`Нашествие: ешь людей и расти. Двери между дворами продавливаются массой роя. Сбежавшие зовут полицию.`,goal:{type:`infest`,count:60},stars:[{type:`time`,max:420},{type:`worms`,min:250}],startWorms:25,location:`street`,room:{size:[48,16],height:4,wallColor:`#6e665e`},spawn:[-21,.8,4],doors:[[-18,0,-7.4],[-23.4,0,-2],[-10.5,0,-7.4],[-1.5,0,-7.4],[1,0,-7.4],[23.4,0,-3],[23.4,0,5]],humans:[{pos:[-17.5,0,1],kind:`resident`},{pos:[-14.5,0,-4],kind:`resident`},{pos:[-8,0,2],kind:`resident`},{pos:[-2,0,-5],kind:`resident`},{pos:[5,0,0],kind:`resident`},{pos:[9,0,-4],kind:`resident`},{pos:[17,0,1],kind:`resident`},{pos:[21,0,-2],kind:`resident`}],food:[[-21.5,0,-5.6],[-19,0,-5.5],[-23,0,2],[-15,0,6],[-9.5,0,5.6],[-5.5,0,5.6],[-11,0,-.5],[4,1.1,-6.6],[8,1.1,-6.6],[3,.8,-2],[7,.8,-2],[8,.8,3.5],[21,.3,4.5],[13,0,-5]],massDoors:[{c:[-12,2,2],h:[.15,2,1.2],need:20},{c:[0,2,2],h:[.15,2,1.2],need:45},{c:[12,2,2],h:[.15,2,1.2],need:80}],infest:{civilians:10,spawns:[[-18,0,-5.5],[-14,0,2],[-20,0,6.5],[-10,0,-5],[-2,0,5],[-7,0,6.5],[2,0,-5],[10,0,5],[6,0,6.5],[16,0,-1],[22,0,1],[18,0,6.5]],growth:{human:5,fighter:8,food:3},foodRespawn:30},props:[{prefab:`dumpster`,pos:[-22.5,0,-6.8],color:`#3f6b4a`,id:`bin1`},{prefab:`dumpster`,pos:[-20.4,0,-6.8],color:`#3a5f7a`,id:`bin2`},{prefab:`car`,pos:[-17,0,-2.5],color:`#8b2f2f`,id:`car1`},{prefab:`crates`,pos:[-14,0,-6.5],id:`crates`},{prefab:`bench`,pos:[-20,0,5],id:`bench1`},{prefab:`kiosk`,pos:[-6,0,-6.9],color:`#4f7a8a`,id:`kiosk`},{prefab:`bench`,pos:[-3,0,.9],id:`bench2`},{prefab:`van`,pos:[-5,0,-1.4],rot:90,color:`#d8d2c4`,id:`van`},{prefab:`fridge`,pos:[10.8,0,-7.2],id:`fridge`},{prefab:`chair`,pos:[3,0,-.9],id:`chair1`},{prefab:`chair`,pos:[7,0,-.9],id:`chair2`},{prefab:`slide`,pos:[16,0,-4],color:`#c0503c`,id:`slide`},{prefab:`car`,pos:[14.8,0,4],rot:90,color:`#2f5d8b`,id:`car2`},{prefab:`bench`,pos:[20,0,-.5],id:`bench3`}],boxes:[{c:[-12,2,-3.6],h:[.15,2,4.4],color:`#7d4f3f`},{c:[-12,2,5.6],h:[.15,2,2.4],color:`#7d4f3f`},{c:[0,2,-3.6],h:[.15,2,4.4],color:`#7d4f3f`},{c:[0,2,5.6],h:[.15,2,2.4],color:`#7d4f3f`},{c:[12,2,-3.6],h:[.15,2,4.4],color:`#7d4f3f`},{c:[12,2,5.6],h:[.15,2,2.4],color:`#7d4f3f`},{c:[-6,.005,-1.5],h:[5.85,.005,1.6],kind:`decor`,solid:!1,color:`#2b2e33`},{c:[-9,.012,-1.5],h:[.6,.004,.06],kind:`decor`,solid:!1,color:`#d8d4c8`},{c:[-6,.012,-1.5],h:[.6,.004,.06],kind:`decor`,solid:!1,color:`#d8d4c8`},{c:[-1.5,.012,-1.5],h:[.6,.004,.06],kind:`decor`,solid:!1,color:`#d8d4c8`},{c:[-9.5,.45,4.5],h:[1.2,.45,.6],color:`#7a5a3a`},{c:[-5.5,.45,4.5],h:[1.2,.45,.6],color:`#7a5a3a`},{c:[-10,1.75,-3.6],h:[.08,1.75,.08],color:`#3a3f44`},{c:[-2,1.75,-3.6],h:[.08,1.75,.08],color:`#3a3f44`},{c:[6,.005,0],h:[5.85,.005,7.85],kind:`decor`,solid:!1,color:`#b49a74`},{c:[6,.55,-6.6],h:[3.5,.55,.5],color:`#5a3b2a`},{c:[3,.4,-2],h:[.6,.4,.6],color:`#7a5636`},{c:[7,.4,-2],h:[.6,.4,.6],color:`#7a5636`},{c:[3,.4,3],h:[.6,.4,.6],color:`#7a5636`},{c:[8,.4,3.5],h:[.6,.4,.6],color:`#7a5636`},{c:[18,.005,-2],h:[5,.005,4],kind:`decor`,solid:!1,color:`#3f6b3a`},{c:[21,.15,4.5],h:[1.5,.15,1.5],color:`#c8b27a`},{c:[18,1.2,-7],h:[5,1.2,1],color:`#6b6f73`}]},kd={id:`district-01`,name:`Район`,intro:`Съешь весь район! Еда даёт 🧬 — качай внизу Рой, Скорость и Челюсти. 🔒🦷N — нужны челюсти уровня N.`,goal:{type:`district`,share:.95},stars:[{type:`time`,max:900},{type:`worms`,min:120}],startWorms:25,location:`street`,room:{size:[16,48],height:4,wallColor:`#6e665e`},spawn:[4,.8,21],food:[[-5.6,0,21.5],[-5.5,0,19],[2,0,23],[6,0,15],[5.6,0,9.5],[5.6,0,5.5],[-.5,0,11],[-6.6,1.1,-4],[-6.6,1.1,-8],[-2,.8,-3],[-2,.8,-7],[3.5,.8,-8],[4.5,.3,-21],[-5,0,-13]],props:[{prefab:`cardboard`,pos:[-1,0,23],id:`box1`,size:.7,rot:90},{prefab:`cardboard`,pos:[-.5,0,22.1],id:`box2`,size:.5,rot:90},{prefab:`cardboard`,pos:[5.8,0,15],id:`box3`,size:.7,rot:90},{prefab:`cardboard`,pos:[1.6,0,13.6],id:`box4`,size:.6,rot:90},{prefab:`chair`,pos:[5.2,0,22.4],id:`chair1`,rot:90},{prefab:`chair`,pos:[5.2,0,17.7],id:`chair2`,rot:90},{prefab:`bench`,pos:[5,0,20],id:`bench1`,rot:90},{prefab:`crates`,pos:[-6.5,0,14],id:`crates`,rot:90},{prefab:`dumpster`,pos:[-6.8,0,22.5],id:`bin1`,color:`#3f6b4a`,rot:90},{prefab:`dumpster`,pos:[-6.8,0,20.4],id:`bin2`,color:`#3a5f7a`,rot:90},{prefab:`car`,pos:[-2.5,0,17],id:`car1`,color:`#8b2f2f`,rot:90},{prefab:`stall`,pos:[4.5,0,9.5],id:`stall1`,color:`#c8463c`,rot:90},{prefab:`stall`,pos:[4.5,0,5.5],id:`stall2`,color:`#3c7ac8`,rot:90},{prefab:`bench`,pos:[.9,0,3],id:`bench2`,rot:90},{prefab:`cardboard`,pos:[-6.6,0,8.2],id:`box5`,size:.6,rot:90},{prefab:`cardboard`,pos:[-6.8,0,3.4],id:`box6`,size:.7,rot:90},{prefab:`cardboard`,pos:[1.5,0,10.8],id:`box7`,size:.5,rot:90},{prefab:`van`,pos:[-1.4,0,5],id:`van`,rot:180,color:`#d8d2c4`},{prefab:`kiosk`,pos:[-6.8,0,6],id:`kiosk`,color:`#4f7a8a`,rot:90},{prefab:`table`,pos:[-2,0,-3],id:`table1`,rot:90},{prefab:`table`,pos:[-2,0,-7],id:`table2`,rot:90},{prefab:`table`,pos:[3,0,-3],id:`table3`,rot:90},{prefab:`table`,pos:[3.5,0,-8],id:`table4`,rot:90},{prefab:`chair`,pos:[-.9,0,-3],id:`chair3`,rot:90},{prefab:`chair`,pos:[-.9,0,-7],id:`chair4`,rot:90},{prefab:`chair`,pos:[4.1,0,-3],id:`chair5`,rot:270},{prefab:`chair`,pos:[4.6,0,-8],id:`chair6`,rot:270},{prefab:`chair`,pos:[-2,0,-1.9],id:`chair7`,rot:180},{prefab:`fridge`,pos:[-7.2,0,-10.8],id:`fridge`,rot:90},{prefab:`slide`,pos:[-4,0,-16],id:`slide`,color:`#c0503c`,rot:90},{prefab:`car`,pos:[4,0,-14.8],id:`car2`,rot:180,color:`#2f5d8b`},{prefab:`bench`,pos:[-.5,0,-20],id:`bench3`,rot:90},{prefab:`cardboard`,pos:[-4.5,0,-22.5],id:`box8`,size:.7,rot:90},{prefab:`cardboard`,pos:[-1,0,-13.5],id:`box9`,size:.6,rot:90},{prefab:`dumpster`,pos:[.8,0,-22.6],id:`bin3`,color:`#6b5a3a`,rot:90},{prefab:`brickwall`,pos:[-3.6,0,12],id:`wall1a`,size:8.8,req:[`jaws`,3],rot:90},{prefab:`brickwall`,pos:[5.6,0,12],id:`wall1b`,size:4.8,req:[`jaws`,3],rot:90},{prefab:`gate`,pos:[2,0,12],id:`gate1`,size:2.4,req:[`jaws`,1],rot:90},{prefab:`brickwall`,pos:[-3.6,0,0],id:`wall2a`,size:8.8,req:[`jaws`,5],rot:90},{prefab:`brickwall`,pos:[5.6,0,0],id:`wall2b`,size:4.8,req:[`jaws`,5],rot:90},{prefab:`gate`,pos:[2,0,0],id:`gate2`,size:2.4,req:[`jaws`,4],rot:90},{prefab:`brickwall`,pos:[-3.6,0,-12],id:`wall3a`,size:8.8,req:[`jaws`,8],rot:90},{prefab:`brickwall`,pos:[5.6,0,-12],id:`wall3b`,size:4.8,req:[`jaws`,8],rot:90},{prefab:`gate`,pos:[2,0,-12],id:`gate3`,size:2.4,req:[`jaws`,7],rot:90},{prefab:`lamp`,pos:[-3.6,0,10],id:`lamp1`,rot:90},{prefab:`lamp`,pos:[-3.6,0,2],id:`lamp2`,rot:90},{prefab:`counter`,pos:[-6.6,0,-6],id:`counter`,rot:90},{prefab:`sandbox`,pos:[4.5,0,-21],id:`sandbox`,rot:90},{prefab:`garage`,pos:[-7,0,-18],id:`garage`,color:`#5a6a7a`,rot:90},{prefab:`facade`,pos:[-7.94,0,22],rot:90,id:`facade0`},{prefab:`facade`,pos:[-7.94,0,18],rot:90,id:`facade1`},{prefab:`facade`,pos:[-7.94,0,14],rot:90,id:`facade2`},{prefab:`facade`,pos:[-7.94,0,10],rot:90,id:`facade3`},{prefab:`facade`,pos:[-7.94,0,6],rot:90,id:`facade4`},{prefab:`facade`,pos:[-7.94,0,2],rot:90,id:`facade5`},{prefab:`facade`,pos:[-7.94,0,-2],rot:90,id:`facade6`},{prefab:`facade`,pos:[-7.94,0,-6],rot:90,id:`facade7`},{prefab:`facade`,pos:[-7.94,0,-10],rot:90,id:`facade8`},{prefab:`facade`,pos:[-7.94,0,-14],rot:90,id:`facade9`},{prefab:`facade`,pos:[-7.94,0,-22],rot:90,id:`facade10`},{prefab:`facade`,pos:[7.94,0,22],rot:270,id:`facade11`},{prefab:`facade`,pos:[7.94,0,18],rot:270,id:`facade12`},{prefab:`facade`,pos:[7.94,0,14],rot:270,id:`facade13`},{prefab:`facade`,pos:[7.94,0,10],rot:270,id:`facade14`},{prefab:`facade`,pos:[7.94,0,6],rot:270,id:`facade15`},{prefab:`facade`,pos:[7.94,0,2],rot:270,id:`facade16`},{prefab:`facade`,pos:[7.94,0,-2],rot:270,id:`facade17`},{prefab:`facade`,pos:[7.94,0,-6],rot:270,id:`facade18`},{prefab:`facade`,pos:[7.94,0,-10],rot:270,id:`facade19`},{prefab:`facade`,pos:[7.94,0,-14],rot:270,id:`facade20`},{prefab:`facade`,pos:[7.94,0,-18],rot:270,id:`facade21`},{prefab:`facade`,pos:[7.94,0,-22],rot:270,id:`facade22`},{prefab:`facade`,pos:[-6,0,-23.94],id:`facade23`},{prefab:`facade`,pos:[-2,0,-23.94],id:`facade24`},{prefab:`facade`,pos:[2,0,-23.94],id:`facade25`},{prefab:`facade`,pos:[6,0,-23.94],id:`facade26`}],boxes:[{c:[-1.5,.005,6],h:[1.6,.005,5.85],kind:`decor`,solid:!1,color:`#2b2e33`},{c:[-1.5,.012,9],h:[.06,.004,.6],kind:`decor`,solid:!1,color:`#d8d4c8`},{c:[-1.5,.012,6],h:[.06,.004,.6],kind:`decor`,solid:!1,color:`#d8d4c8`},{c:[-1.5,.012,1.5],h:[.06,.004,.6],kind:`decor`,solid:!1,color:`#d8d4c8`},{c:[0,.005,-6],h:[7.85,.005,5.85],kind:`decor`,solid:!1,color:`#b49a74`},{c:[-2,.005,-18],h:[4,.005,5],kind:`decor`,solid:!1,color:`#3f6b3a`}]},Ad={id:`district-02`,name:`Промзона`,intro:`Промзона: контейнеры, фургоны, поддоны — металл крепкий, качай 🦷 Челюсти!`,goal:{type:`district`,share:.95},stars:[{type:`time`,max:1100},{type:`worms`,min:150}],startWorms:25,location:`street`,room:{size:[16,48],height:4,wallColor:`#5e5a56`},spawn:[4,.8,21],food:[[2.5,0,20],[-1.5,0,15],[-4,0,23],[2.5,0,9],[-3.5,0,3],[-3.5,0,8],[3,0,-3],[-1.5,0,-9],[-2,0,-4],[-3,0,-15],[0,0,-21],[4.5,0,-14]],props:[{prefab:`brickwall`,pos:[-3.6,0,12],id:`wall1a`,size:8.8,req:[`jaws`,4],rot:90},{prefab:`brickwall`,pos:[5.6,0,12],id:`wall1b`,size:4.8,req:[`jaws`,4],rot:90},{prefab:`gate`,pos:[2,0,12],id:`gate1`,size:2.4,req:[`jaws`,2],rot:90},{prefab:`brickwall`,pos:[-3.6,0,0],id:`wall2a`,size:8.8,req:[`jaws`,6],rot:90},{prefab:`brickwall`,pos:[5.6,0,0],id:`wall2b`,size:4.8,req:[`jaws`,6],rot:90},{prefab:`gate`,pos:[2,0,0],id:`gate2`,size:2.4,req:[`jaws`,5],rot:90},{prefab:`brickwall`,pos:[-3.6,0,-12],id:`wall3a`,size:8.8,req:[`jaws`,9],rot:90},{prefab:`brickwall`,pos:[5.6,0,-12],id:`wall3b`,size:4.8,req:[`jaws`,9],rot:90},{prefab:`gate`,pos:[2,0,-12],id:`gate3`,size:2.4,req:[`jaws`,8],rot:90},{prefab:`lamp`,pos:[-3.6,0,10],id:`lamp1`,rot:90},{prefab:`lamp`,pos:[-3.6,0,2],id:`lamp2`,rot:90},{prefab:`container`,pos:[-6.1,0,18],id:`cont1`,rot:180,color:`#2f6a9a`},{prefab:`pallet`,pos:[-1,0,22.5],id:`pal1`,color:`#d8d0b8`,rot:90},{prefab:`pallet`,pos:[-1,0,21],id:`pal2`,color:`#c8b890`,rot:90},{prefab:`pallet`,pos:[3,0,14.5],id:`pal3`,color:`#d8d0b8`,rot:90},{prefab:`cardboard`,pos:[5.5,0,23],id:`box1`,size:.7,rot:90},{prefab:`cardboard`,pos:[6,0,22.1],id:`box2`,size:.5,rot:90},{prefab:`cardboard`,pos:[6.2,0,16],id:`box3`,size:.6,rot:90},{prefab:`cardboard`,pos:[-2.5,0,13.8],id:`box4`,size:.7,rot:90},{prefab:`dumpster`,pos:[1.5,0,17],id:`bin1`,color:`#7a6a3a`,rot:90},{prefab:`chair`,pos:[5.6,0,19.5],id:`chair1`,rot:90},{prefab:`bench`,pos:[4.2,0,18.5],id:`bench1`,rot:90},{prefab:`van`,pos:[-5.6,0,6],id:`van1`,rot:180,color:`#e8e2d4`},{prefab:`van`,pos:[-1.2,0,6],id:`van2`,rot:180,color:`#c8d0d8`},{prefab:`crates`,pos:[4.5,0,10.5],id:`crates1`,rot:90},{prefab:`crates`,pos:[5.5,0,2],id:`crates2`,rot:90},{prefab:`cabinet`,pos:[5.6,0,6.5],id:`cab1`,color:`#4a5a6a`,rot:90},{prefab:`pallet`,pos:[1.5,0,10.5],id:`pal4`,color:`#c8b890`,rot:90},{prefab:`pallet`,pos:[2.2,0,1.8],id:`pal5`,color:`#a8a090`,rot:90},{prefab:`cardboard`,pos:[6.8,0,9],id:`box5`,size:.6,rot:90},{prefab:`cardboard`,pos:[6.6,0,3.6],id:`box6`,size:.7,rot:90},{prefab:`container`,pos:[-6.1,0,-6],id:`cont2`,rot:180,color:`#9a3a2a`},{prefab:`container`,pos:[1,0,-6],id:`cont3`,rot:180,color:`#3a7a4a`},{prefab:`pallet`,pos:[5,0,-2],id:`pal6`,color:`#d8d0b8`,rot:90},{prefab:`pallet`,pos:[5,0,-10],id:`pal7`,color:`#c8b890`,rot:90},{prefab:`dumpster`,pos:[-3,0,-10.3],id:`bin2`,color:`#3a5f7a`,rot:90},{prefab:`cardboard`,pos:[-3,0,-2],id:`box7`,size:.6,rot:90},{prefab:`cardboard`,pos:[6.6,0,-3],id:`box8`,size:.5,rot:90},{prefab:`table`,pos:[5.8,0,-8],id:`table1`,rot:90},{prefab:`chair`,pos:[5.8,0,-7],id:`chair2`,rot:180},{prefab:`garage`,pos:[-7,0,-18],id:`garage`,color:`#7a6a5a`,rot:90},{prefab:`container`,pos:[2,0,-16],id:`cont4`,rot:180,color:`#c88a2a`},{prefab:`car`,pos:[3,0,-21.8],id:`car1`,color:`#3a3a3a`,rot:90},{prefab:`pallet`,pos:[6,0,-14],id:`pal8`,color:`#d8d0b8`,rot:90},{prefab:`pallet`,pos:[6,0,-15.5],id:`pal9`,color:`#a8a090`,rot:90},{prefab:`cardboard`,pos:[-4,0,-22.5],id:`box9`,size:.7,rot:90},{prefab:`cardboard`,pos:[-4.2,0,-13.5],id:`box10`,size:.6,rot:90},{prefab:`crates`,pos:[6.3,0,-20],id:`crates3`,rot:90},{prefab:`facade`,pos:[-7.94,0,22],rot:90,id:`facade0`},{prefab:`facade`,pos:[-7.94,0,18],rot:90,id:`facade1`},{prefab:`facade`,pos:[-7.94,0,14],rot:90,id:`facade2`},{prefab:`facade`,pos:[-7.94,0,10],rot:90,id:`facade3`},{prefab:`facade`,pos:[-7.94,0,6],rot:90,id:`facade4`},{prefab:`facade`,pos:[-7.94,0,2],rot:90,id:`facade5`},{prefab:`facade`,pos:[-7.94,0,-2],rot:90,id:`facade6`},{prefab:`facade`,pos:[-7.94,0,-6],rot:90,id:`facade7`},{prefab:`facade`,pos:[-7.94,0,-10],rot:90,id:`facade8`},{prefab:`facade`,pos:[-7.94,0,-14],rot:90,id:`facade9`},{prefab:`facade`,pos:[-7.94,0,-22],rot:90,id:`facade10`},{prefab:`facade`,pos:[7.94,0,22],rot:270,id:`facade11`},{prefab:`facade`,pos:[7.94,0,18],rot:270,id:`facade12`},{prefab:`facade`,pos:[7.94,0,14],rot:270,id:`facade13`},{prefab:`facade`,pos:[7.94,0,10],rot:270,id:`facade14`},{prefab:`facade`,pos:[7.94,0,6],rot:270,id:`facade15`},{prefab:`facade`,pos:[7.94,0,2],rot:270,id:`facade16`},{prefab:`facade`,pos:[7.94,0,-2],rot:270,id:`facade17`},{prefab:`facade`,pos:[7.94,0,-6],rot:270,id:`facade18`},{prefab:`facade`,pos:[7.94,0,-10],rot:270,id:`facade19`},{prefab:`facade`,pos:[7.94,0,-14],rot:270,id:`facade20`},{prefab:`facade`,pos:[7.94,0,-18],rot:270,id:`facade21`},{prefab:`facade`,pos:[7.94,0,-22],rot:270,id:`facade22`},{prefab:`facade`,pos:[-6,0,-23.94],id:`facade23`},{prefab:`facade`,pos:[-2,0,-23.94],id:`facade24`},{prefab:`facade`,pos:[2,0,-23.94],id:`facade25`},{prefab:`facade`,pos:[6,0,-23.94],id:`facade26`}],boxes:[{c:[0,.005,6],h:[7.85,.005,5.85],kind:`decor`,solid:!1,color:`#6f6f6a`},{c:[0,.005,-6],h:[7.85,.005,5.85],kind:`decor`,solid:!1,color:`#7a756c`},{c:[0,.005,-18],h:[7.85,.005,5.85],kind:`decor`,solid:!1,color:`#6a6e70`},{c:[0,.012,-18],h:[.08,.004,5.5],kind:`decor`,solid:!1,color:`#d8c84a`}]};function jd(){return{biteR:1,biteTime:1,wormsMul:1,crumbMul:1}}var Md=e=>`${Math.round(e*100)}%`,Nd=e=>5*2**Math.floor((e-1)/10),Pd=e=>1+.06*e,Fd=e=>1.06**e,Id=e=>.96**e,Ld=[{id:`ram`,icon:`💥`,name:`Таран`,kind:`active`,cost:0,growth:1,max:1,cooldown:5,key:`Пробел`,free:!0,stat:()=>``,about:`Рывок вперёд: откалывает куски от всего, во что врежется`},{id:`swarm`,icon:`🪱`,name:`Рой`,kind:`passive`,cost:20,growth:1.16,max:30,stat:e=>`+${Nd(e+1)} червей`,about:`Больше червей — быстрее ест`},{id:`speed`,icon:`💨`,name:`Скорость`,kind:`passive`,cost:30,growth:1.3,max:15,stat:e=>Md(Pd(e)),about:`Рой ползает быстрее`},{id:`jaws`,icon:`🦷`,name:`Челюсти`,kind:`passive`,cost:40,growth:1.5,max:12,stat:e=>`сила ${e+1}`,about:`Кусают крупнее и чаще, прогрызают прочное`}];function Rd(e,t){return Math.round(e.cost*e.growth**t)}function zd(e){return 1.5*e+.25*e*e}var Bd=[{id:`magnet`,icon:`🧲`,name:`Магнит`,about:`обломки и мелочь в 4 м сами летят к рою`,cost:80,at:100},{id:`ram2`,icon:`💥`,name:`Таран ×3`,about:`таран откалывает втрое больше, перезарядка 2 с`,cost:300,at:400},{id:`queen`,icon:`👑`,name:`Матка`,about:`новый червь каждые 3 с — бесплатно`,cost:900,at:1200},{id:`dna2`,icon:`💰`,name:`Жирная ДНК`,about:`×2 🧬 за всё съеденное`,cost:2e3,at:2500},{id:`jump`,icon:`🦘`,name:`Прыгуны`,about:`черви запрыгивают на машины и стойки`,cost:3e3,at:4500},{id:`dna3`,icon:`💎`,name:`Мутация ДНК`,about:`ещё ×1,5 🧬 за всё`,cost:6e3,at:8e3}],Vd=[`swarm`,`speed`,`jaws`],Hd=140,Ud=380,Wd=class{m;root;cards=new Map;perkEl;perkKey=``;holdT=0;holdTimer=0;keyT=0;constructor(e,t){this.m=t,this.root=document.createElement(`div`),this.root.className=`shopbar hidden`;for(let e of[`pointerdown`,`pointerup`,`touchstart`])this.root.addEventListener(e,e=>e.stopPropagation());this.perkEl=document.createElement(`button`),this.perkEl.className=`up-perk hidden`,this.perkEl.addEventListener(`pointerdown`,e=>{e.preventDefault(),this.pressPerk()});let n=document.createElement(`div`);n.className=`up-list`;for(let e of Vd){let t=Ld.find(t=>t.id===e),r=document.createElement(`button`);r.className=`up-card`,r.innerHTML=`<kbd class="up-key">${Vd.indexOf(e)+1}</kbd><span class="up-head"><span class="up-icon">${t.icon}<i class="up-lvl"></i></span><b>${t.name}</b></span>
        <span class="up-eff"></span><span class="up-sub"></span><span class="up-price"></span>`,r.addEventListener(`pointerdown`,e=>{e.preventDefault(),this.press(t),this.stopHold(),this.holdT=window.setTimeout(()=>{this.holdTimer=window.setInterval(()=>this.press(t,!0),Hd)},Ud)});for(let e of[`pointerup`,`pointerleave`,`pointercancel`])r.addEventListener(e,()=>this.stopHold());n.append(r),this.cards.set(e,{el:r,key:``})}this.root.append(this.perkEl,n),e.append(this.root)}get visible(){return!this.root.classList.contains(`hidden`)}setVisible(e){e!==this.visible&&(this.root.classList.toggle(`hidden`,!e),document.body.classList.toggle(`with-shopbar`,e),e||this.stopHold())}pressKey(e,t){if(e===4)return!t&&this.visible&&this.pressPerk(),this.visible;let n=Vd[e-1];if(!n||!this.visible)return!1;let r=performance.now();return t&&r-this.keyT<Hd||(this.keyT=r,this.press(Ld.find(e=>e.id===n),t)),!0}pressPerk(){let e=this.m.buyPerk()?`bought`:`nope`;this.perkEl.classList.remove(e),this.perkEl.offsetWidth,this.perkEl.classList.add(e),this.update()}stopHold(){clearTimeout(this.holdT),clearInterval(this.holdTimer)}press(e,t=!1){let{el:n}=this.cards.get(e.id),r=this.m.buy(e.id);if(!r&&t&&this.stopHold(),!r&&t)return;let i=r?`bought`:`nope`;n.classList.remove(i),n.offsetWidth,n.classList.add(i),this.update()}update(){if(!this.visible)return;let e=this.m,t=e.dna(),n=e.hint(),r=e.perk();this.perkEl.classList.toggle(`hidden`,!r),document.body.classList.toggle(`with-perk`,!!r),r?(this.perkEl.classList.toggle(`can`,t>=r.cost),this.perkEl.style.setProperty(`--fill`,String(Math.min(1,t/r.cost))),this.perkKey!==r.id&&(this.perkKey=r.id,this.perkEl.innerHTML=`<kbd class="up-key">4</kbd><span class="up-perk-icon">${r.icon}</span>
          <span class="up-perk-text"><b>✨ ${r.name}</b><span>${r.about}</span></span><span class="up-perk-price">🧬 ${Kd(r.cost)}</span>`)):this.perkKey=``;for(let r of Vd){let i=this.cards.get(r),a=Ld.find(e=>e.id===r),o=e.owned(r),s=o>=a.max,c=e.price(r);i.el.classList.toggle(`can`,e.whyNot(r)===null),i.el.classList.toggle(`maxed`,s),i.el.style.setProperty(`--fill`,s?`1`:String(Math.min(1,t/Math.max(1,c))));let[l,u]=this.effect(r,o,n),d=`${o}|${l}|${u}|${s?`max`:c}`;d!==i.key&&(i.key=d,i.el.querySelector(`.up-lvl`).textContent=String(o),i.el.querySelector(`.up-eff`).innerHTML=s?`<b>всё</b>`:l,i.el.querySelector(`.up-sub`).innerHTML=u,i.el.querySelector(`.up-price`).textContent=s?`максимум`:`🧬 ${Kd(c)}`)}}effect(e,t,n){if(e===`swarm`){let e=this.m.worms();return[`${e} → <b>${e+Nd(t+1)}</b>`,`червей`]}if(e===`speed`)return[`${Gd(Pd(t))} → <b>${Gd(Pd(t+1))}</b>`,`скорость`];let r=n?n.level===t+1?`🔓 откроет ${n.reason}`:`🔒 ${n.reason}: ещё ${n.level-t}`:`кусают сильнее`;return[`сила ${t} → <b>${t+1}</b>`,r]}},Gd=e=>`${Math.round(e*100)}%`;function Kd(e){return e<1e4?String(Math.floor(e)):e<1e6?(e/1e3).toFixed(+(e<1e5)).replace(`.`,`,`)+`K`:(e/1e6).toFixed(1).replace(`.`,`,`)+`M`}var qd=.05,Jd=class{x0;z0;nx;nz;mask;total;eaten=0;version=0;constructor(e,t,n,r){this.x0=e-n,this.z0=t-r,this.nx=Math.ceil(n*2/qd),this.nz=Math.ceil(r*2/qd),this.mask=new Uint8Array(this.nx*this.nz),this.total=this.nx*this.nz}get left(){return 1-this.eaten/this.total}solidAt(e,t){let n=Math.floor((e-this.x0)/qd),r=Math.floor((t-this.z0)/qd);return n<0||r<0||n>=this.nx||r>=this.nz?!1:this.mask[n+this.nx*r]===0}bite(e,t,n){let r=qd,i=Math.max(0,Math.floor((e-n-this.x0)/r)),a=Math.min(this.nx-1,Math.ceil((e+n-this.x0)/r)),o=Math.max(0,Math.floor((t-n-this.z0)/r)),s=Math.min(this.nz-1,Math.ceil((t+n-this.z0)/r)),c=0;for(let l=o;l<=s;l++){let o=this.z0+(l+.5)*r-t;for(let t=i;t<=a;t++){let i=this.x0+(t+.5)*r-e;if(i*i+o*o>n*n)continue;let a=t+this.nx*l;this.mask[a]||(this.mask[a]=255,c++)}}return c&&(this.eaten+=c,this.version++),c}},Yd=.12,Xd=class{tex=null;floor=null;version=-1;t=0;attach(e,t){if(this.tex?.dispose(),this.tex=null,this.floor=t,!t)return;let n=new bi(t.mask,t.nx,t.nz,D,l);n.minFilter=n.magFilter=o,n.unpackAlignment=1,n.needsUpdate=!0,this.tex=n,this.version=t.version;let r=new G(t.x0,t.z0),i=new G(t.nx*qd,t.nz*qd);e.traverse(e=>{if(!(e instanceof Y))return;let t=e.material;t instanceof xa&&(t.onBeforeCompile=e=>{e.uniforms.uFloorMask={value:n},e.uniforms.uFloorMin={value:r},e.uniforms.uFloorSize={value:i},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vFW;`).replace(`#include <project_vertex>`,`#include <project_vertex>
vFW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vFW;
uniform sampler2D uFloorMask;
uniform vec2 uFloorMin;
uniform vec2 uFloorSize;
float fHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float fNoise(vec2 x) {
  vec2 i = floor(x); vec2 f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(fHash(i), fHash(i + vec2(1, 0)), f.x), mix(fHash(i + vec2(0, 1)), fHash(i + vec2(1, 1)), f.x), f.y);
}`).replace(`#include <color_fragment>`,`#include <color_fragment>
// только то, что лежит на полу (сам пол и плоские участки на нём)
if (vFW.y < 0.035) {
  vec2 fuv = (vFW.xz - uFloorMin) / uFloorSize;
  float fe = texture2D(uFloorMask, fuv).r + (fNoise(vFW.xz * 22.0) - 0.5) * 0.35;
  // земля в выгрызенном, тёмная кромка вокруг дыры
  vec3 dirt = vec3(0.1, 0.065, 0.04) * (0.7 + 0.6 * fNoise(vFW.xz * 9.0));
  float hole = smoothstep(0.45, 0.6, fe);
  float rim = smoothstep(0.2, 0.45, fe) * (1.0 - hole);
  diffuseColor.rgb = mix(diffuseColor.rgb * (1.0 - 0.45 * rim), dirt, hole);
}`)},t.customProgramCacheKey=()=>`floor-bites-`+t.type+(t.map?`-map`:``)+(t.vertexColors?`-vc`:``),t.needsUpdate=!0)})}update(e){let t=this.floor;t&&this.tex&&(this.t-=e,this.t>0||t.version===this.version||(this.t=Yd,this.version=t.version,this.tex.needsUpdate=!0))}},Zd=.2,Qd=.06,$d=2147483647,ef=1.4,tf=class{level;nx;nz;x0;z0;free;top;dist;queue;n3=new Float32Array(3);target=-1;dirty=!0;constructor(e){this.level=e;let t=e.boxes.find(e=>e.kind===`floor`),n=t?t.h[0]:8,r=t?t.h[2]:8;this.x0=(t?t.c[0]:0)-n,this.z0=(t?t.c[2]:0)-r,this.nx=Math.ceil(n*2/Zd),this.nz=Math.ceil(r*2/Zd);let i=this.nx*this.nz;this.free=new Uint8Array(i),this.top=new Float32Array(i),this.dist=new Int32Array(i).fill($d),this.queue=new Int32Array(i),this.rebuildFree()}invalidate(){this.rebuildFree(),this.dirty=!0}rebuildFree(){for(let e=0;e<this.nx;e++)for(let t=0;t<this.nz;t++){let n=this.x0+(e+.5)*Zd,r=this.z0+(t+.5)*Zd,i=this.level.sdf(n,Qd,r,this.n3,0)>.05,a=!i&&this.level.sdf(n,ef,r,this.n3,0)>.05;this.free[e*this.nz+t]=i||a?1:0;let o=0;if(a&&this.level.sdf(n,Qd,r,this.n3,0)<0){for(let e=Qd;e<ef;e+=.05)if(this.level.sdf(n,e,r,this.n3,0)>0){o=e;break}}this.top[e*this.nz+t]=o}}cellOf(e,t){let n=Math.floor((e-this.x0)/Zd),r=Math.floor((t-this.z0)/Zd);return n<0||r<0||n>=this.nx||r>=this.nz?-1:n*this.nz+r}nearestFree(e,t){let n=this.cellOf(e,t);if(n>=0&&this.free[n])return n;let r=Math.floor((e-this.x0)/Zd),i=Math.floor((t-this.z0)/Zd);for(let e=1;e<10;e++){let t=-1,n=1/0;for(let a=-e;a<=e;a++)for(let o=-e;o<=e;o++){if(Math.max(Math.abs(a),Math.abs(o))!==e)continue;let s=r+a,c=i+o;if(s<0||c<0||s>=this.nx||c>=this.nz||!this.free[s*this.nz+c])continue;let l=a*a+o*o;l<n&&(n=l,t=s*this.nz+c)}if(t>=0)return t}return-1}setTarget(e,t){let n=this.nearestFree(e,t);if(n===this.target&&!this.dirty)return;this.target=n,this.dirty=!1;let{dist:r,queue:i,free:a,nz:o}=this;if(r.fill($d),n<0)return;let s=0,c=0;for(r[n]=0,i[c++]=n;s<c;){let e=i[s++],t=e/o|0,n=e-t*o,l=r[e]+1;if(t>0){let t=e-o;a[t]&&r[t]>l&&(r[t]=l,i[c++]=t)}if(t<this.nx-1){let t=e+o;a[t]&&r[t]>l&&(r[t]=l,i[c++]=t)}if(n>0){let t=e-1;a[t]&&r[t]>l&&(r[t]=l,i[c++]=t)}if(n<o-1){let t=e+1;a[t]&&r[t]>l&&(r[t]=l,i[c++]=t)}}}obstacleTopOnLine(e,t,n,r){let i=Math.hypot(n-e,r-t),a=Math.ceil(i/(Zd*.75)),o=0;for(let i=1;i<a;i++){let s=i/a,c=this.cellOf(e+(n-e)*s,t+(r-t)*s);c>=0&&this.top[c]>o&&(o=this.top[c])}return o}topAt(e,t){let n=this.cellOf(e,t);return n>=0?this.top[n]:0}lineFree(e,t,n,r){let i=Math.hypot(n-e,r-t),a=Math.ceil(i/(Zd*.75));for(let i=1;i<a;i++){let o=i/a,s=this.cellOf(e+(n-e)*o,t+(r-t)*o);if(s>=0&&!this.free[s])return!1}return!0}dirAt(e,t,n){let r=this.cellOf(e,t);if(r<0)return-1;let{dist:i,nz:a}=this,o=i[r],s=r/a|0,c=r-s*a,l=0,u=0,d=o;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){if(!e&&!t)continue;let n=s+e,r=c+t;if(n<0||r<0||n>=this.nx||r>=a||e&&t&&(i[(s+e)*a+c]===$d||i[s*a+c+t]===$d))continue;let o=i[n*a+r];o<d&&(d=o,l=e,u=t)}if(d===$d)return-1;o===$d&&(o=d+1);let f=Math.sqrt(l*l+u*u)||1;return n[0]=l/f,n[1]=u/f,o*Zd}},nf={drive:48,driveTail:.5,stick:20,gravity:9.8,dampSurface:.86,dampPile:.9,dampAir:.995,dampAlong:.95,dampSide:.65,formation:!0,wallSlide:0,wiggle:18,wiggleFreq:10,wiggleK:.85,iterations:3},rf=32768,af=1.6,of=1.2,sf=92837111,cf=689287499,lf=283923481,uf=new Uint8Array(14),df=new Uint8Array(14),ff=new Uint8Array(14);{uf[0]=df[0]=ff[0]=1;let e=1;for(let t=0;t<3;t++)for(let n=0;n<3;n++)for(let r=0;r<3;r++)(t-1)*9+(n-1)*3+(r-1)<=0||(uf[e]=t,df[e]=n,ff[e]=r,e++)}var pf=class{maxWorms;level;params={...nf};count=0;restLen=.055;radius=.038;pos;prev;snap;sDist;sNrm;contact;phase;speedMul;offR;gnawTo;gnawOn;offA;offW;offH;wig;segRest;stun;tint;heat;dashDuration=1;dashCooldownMax=5;dashBoost=2.2;dashT=0;dashCooldown=0;jump=0;sticky=!1;dashX=0;dashZ=-1;cvx=0;cvz=0;cellStart=new Int32Array(32769);cellOf;sorted;hx=new Int32Array(3);hy=new Int32Array(3);hz=new Int32Array(3);tx=0;ty=0;tz=0;get target(){return[this.tx,this.ty,this.tz]}tnx=0;tny=1;tnz=0;following=!1;centroid=new Float32Array(3);time=0;bodies=new Float32Array(144);bodyCount=0;attractors=new Float32Array(160);attrOn=new Uint8Array(32);attractorCount=0;flow;flowDir=new Float32Array(2);n3=new Float32Array(3);constructor(e,t){this.level=e,this.flow=new tf(e),this.maxWorms=t;let n=t*10;this.pos=new Float32Array(n*3),this.prev=new Float32Array(n*3),this.snap=new Float32Array(n*3),this.sDist=new Float32Array(n).fill(1),this.sNrm=new Float32Array(n*3),this.contact=new Uint8Array(n),this.cellOf=new Int32Array(n),this.sorted=new Int32Array(n),this.phase=new Float32Array(t),this.speedMul=new Float32Array(t),this.offR=new Float32Array(t),this.gnawTo=new Float32Array(t*3),this.gnawOn=new Uint8Array(t),this.offA=new Float32Array(t),this.offW=new Float32Array(t),this.offH=new Float32Array(t),this.wig=new Float32Array(t),this.segRest=new Float32Array(t*9),this.stun=new Float32Array(t),this.tint=new Float32Array(t*3),this.heat=new Float32Array(t);let[r,,i]=e.spawn;this.tx=r,this.ty=0,this.tz=i,this.centroid.set([r,0,i])}setCount(e){if(e=Math.max(0,Math.min(this.maxWorms,Math.floor(e))),e>this.count){let t=this.count===0,n=t?this.level.spawn[0]:this.centroid[0],r=t?this.level.spawn[1]:this.centroid[1]+1,i=t?this.level.spawn[2]:this.centroid[2];for(let t=this.count;t<e;t++)this.spawnWorm(t,n,r,i)}this.count=e}spawnAt(e,t,n,r,i=0){let a=0;for(;a<e&&this.count<this.maxWorms;){let e=this.count;if(this.spawnWorm(e,t,n,r,.25,.2),i>0){let t=Math.random()*Math.PI*2,n=i*(.6+Math.random()*.6)/60;for(let r=0;r<10;r++){let i=(e*10+r)*3;this.prev[i]-=Math.cos(t)*n,this.prev[i+1]-=n*1.2,this.prev[i+2]-=Math.sin(t)*n}}this.count++,a++}return a}lineFreeNear(e,t,n,r){let i=Math.hypot(n-e,r-t);if(i<=of)return!0;let a=(i-of)/i;return this.flow.lineFree(e,t,e+(n-e)*a,t+(r-t)*a)}rescueT=0;rescueLost(){let e=this.level.boxes.find(e=>e.kind===`floor`);if(!e)return;let t=t=>{let n=t*10*3;return this.pos[n+1]<e.c[1]-e.h[1]||Math.abs(this.pos[n]-e.c[0])>e.h[0]||Math.abs(this.pos[n+2]-e.c[2])>e.h[2]};for(let e=0;e<this.count;e++){if(!t(e))continue;let n=-1;for(let r=0;r<8&&n<0;r++){let r=Math.floor(Math.random()*this.count);r!==e&&!t(r)&&(n=r)}if(n<0)this.spawnWorm(e,this.level.spawn[0],this.level.spawn[1],this.level.spawn[2]);else{this.spawnWorm(e,0,0,0);for(let t=0;t<30;t++){let r=e*10*3+t,i=n*10*3+t;this.pos[r]=this.snap[r]=this.prev[r]=this.pos[i]+(t%3==1?.06:0)}}}}spawnLike(e,t=0){if(this.count>=this.maxWorms||e<0||e>=this.count)return!1;let n=this.count;this.spawnWorm(n,0,0,0);let r=Math.random()*Math.PI*2,i=t*(.6+Math.random()*.6)/60;for(let t=0;t<10;t++){let a=(n*10+t)*3,o=(e*10+t)*3;this.pos[a]=this.snap[a]=this.prev[a]=this.pos[o],this.pos[a+1]=this.snap[a+1]=this.prev[a+1]=this.pos[o+1]+.06,this.pos[a+2]=this.snap[a+2]=this.prev[a+2]=this.pos[o+2],this.prev[a]-=Math.cos(r)*i,this.prev[a+1]-=i*1.2,this.prev[a+2]-=Math.sin(r)*i}return this.count++,!0}spawnWorm(e,t,n,r,i=.6,a=.8){this.gnawOn[e]=0;let o=Math.random()*Math.PI*2,s=Math.cos(o),c=Math.sin(o),l=Math.sqrt(Math.random())*i,u=Math.random()*Math.PI*2,d=t+Math.cos(u)*l,f=n+Math.random()*a,p=r+Math.sin(u)*l;for(let t=0;t<10;t++){let n=e*10+t,r=n*3;this.pos[r]=this.prev[r]=this.snap[r]=d-s*t*this.restLen,this.pos[r+1]=this.prev[r+1]=this.snap[r+1]=f,this.pos[r+2]=this.prev[r+2]=this.snap[r+2]=p-c*t*this.restLen,this.sDist[n]=1,this.contact[n]=0}this.phase[e]=Math.random()*Math.PI*2,this.speedMul[e]=.8+Math.random()*.4,this.offR[e]=Math.sqrt(Math.random()),this.offA[e]=Math.random()*Math.PI*2,this.offW[e]=(Math.random()-.5)*.8,this.offH[e]=Math.random(),this.wig[e]=0,this.stun[e]=0,this.heat[e]=0;let m=.82+Math.random()*.3;this.tint[e*3]=m*(.95+Math.random()*.1),this.tint[e*3+1]=m*(.85+Math.random()*.2),this.tint[e*3+2]=m*(.9+Math.random()*.15)}setTarget(e,t,n,r,i,a){this.tx=e,this.ty=t,this.tz=n,this.tnx=r,this.tny=i,this.tnz=a,this.following=!0}clump(){if(!this.following)return;this.following=!1;let e=this.medoid();this.tx=e[0],this.ty=e[1],this.tz=e[2],this.level.sdf(e[0],e[1]-.05,e[2],this.medN,0)<.15&&this.medN[1]>.7&&(this.tnx=0,this.tny=1,this.tnz=0)}medN=new Float32Array(3);med=new Float32Array(3);medoid(){let e=this.count,t=this.med;if(t.set(this.centroid),e===0)return t;let{sNrm:n,sDist:r}=this,i=this.radius+.05,a=e=>{let t=e*10+5;return r[t]<i&&n[t*3+1]>.7},o=e=>a(e)&&this.pos[(e*10+5)*3+1]<.3;for(let e of[o,a,()=>!0])if(this.pickMedoid(e,t))return t;return t}pickMedoid(e,t){let n=this.count,r=this.pos,i=[];for(let t=0;t<n;t++)e(t)&&i.push(t);if(!i.length)return!1;let a=Math.max(1,Math.floor(i.length/48)),o=1/0;for(let e=0;e<i.length;e+=a){let a=(i[e]*10+5)*3,s=0;for(let e=0;e<n;e++){let t=(e*10+5)*3;s+=Math.hypot(r[a]-r[t],r[a+1]-r[t+1],r[a+2]-r[t+2])}s<o&&(o=s,t[0]=r[a],t[1]=r[a+1],t[2]=r[a+2])}return!0}kill(e){let t=this.count-1;if(!(e<0||e>t)){if(e!==t){let n=e*10*3,r=t*10*3,i=r+30;this.pos.copyWithin(n,r,i),this.prev.copyWithin(n,r,i),this.snap.copyWithin(n,r,i),this.sNrm.copyWithin(n,r,i),this.sDist.copyWithin(e*10,t*10,t*10+10),this.contact.copyWithin(e*10,t*10,t*10+10),this.phase[e]=this.phase[t],this.speedMul[e]=this.speedMul[t],this.offR[e]=this.offR[t],this.offA[e]=this.offA[t],this.offW[e]=this.offW[t],this.offH[e]=this.offH[t],this.wig[e]=this.wig[t],this.stun[e]=this.stun[t],this.heat[e]=this.heat[t],this.tint.copyWithin(e*3,t*3,t*3+3),this.gnawTo.copyWithin(e*3,t*3,t*3+3),this.gnawOn[e]=this.gnawOn[t]}this.gnawOn[t]=0,this.count=t}}killMany(e){let t=[...new Set(e)].sort((e,t)=>t-e);for(let e of t)this.kill(e)}get canDash(){return this.dashCooldown<=0&&this.count>0}dash(){if(!this.canDash)return!1;let e=this.centroid,t=0,n=0;this.following&&(t=this.tx-e[0],n=this.tz-e[2]),t*t+n*n<.04&&(t=this.cvx,n=this.cvz),t*t+n*n<.01&&(t=this.dashX,n=this.dashZ);let r=Math.sqrt(t*t+n*n);t/=r,n/=r,this.dashX=t,this.dashZ=n,this.dashT=this.dashDuration,this.dashCooldown=this.dashCooldownMax,this.following||(this.tx=e[0]+t*3,this.tz=e[2]+n*3);let i=1/60,a=t*3.2*i,o=n*3.2*i;for(let e=0;e<this.count*10;e++){let t=e*3;this.prev[t]-=a,this.prev[t+1]-=.021666666666666667,this.prev[t+2]-=o}return!0}explode(e,t,n,r=1.8,i=7,a=!0){let o=r*r;for(let s=0;s<this.count;s++){let c=!1;for(let a=0;a<10;a++){let l=(s*10+a)*3,u=this.pos[l]-e,d=this.pos[l+1]-t+.4,f=this.pos[l+2]-n,p=u*u+d*d+f*f;if(p>o)continue;let m=Math.sqrt(p)+1e-5,h=i*(1-m/r)*(.7+Math.random()*.6)*.016666666666666666/m;this.prev[l]-=u*h,this.prev[l+1]-=d*h,this.prev[l+2]-=f*h,c=!0}c&&a&&(this.stun[s]=.45+Math.random()*.25)}}step(e){this.dashCooldown>0&&(this.dashCooldown-=e),this.dashT>0&&(this.dashT-=e);let t=this.count*10;t!==0&&((this.rescueT+=e)>.25&&(this.rescueT=0,this.rescueLost()),this.snap.set(this.pos.subarray(0,t*3)),this.time+=e,this.applyForces(e),this.collideWorms(),this.solveConstraints(),this.collideLevel(e),this.updateCentroid())}applyForces(e){let t=this.params,{pos:n,prev:r,sDist:i,sNrm:a,contact:o}=this,s=e*e,c=this.time,l=this.radius+.05,u=this.dashT>0,d=.3*Math.cbrt(this.count/25),f=(this.following?.05*Math.sqrt(this.count):.55*d)*(u?1.8:1),p=this.centroid[0],m=this.centroid[2],h=this.tx-p,g=this.tz-m,_=Math.sqrt(h*h+g*g),v=this.params.formation&&this.following&&!u&&_>1.5*d,y=this.ty<.3;v&&(h/=_,g/=_);let b=u?0:this.following?.5*d:1.2*d,x=u?0:this.following?.25:1,S=u?this.dashBoost:1,{tnx:C,tny:w,tnz:T}=this,E=0,D=1;Math.abs(w)>.9&&(E=1,D=0);let O=D*T-0*w,k=0*C-E*T,A=E*w-D*C,ee=1/Math.sqrt(O*O+k*k+A*A);O*=ee,k*=ee,A*=ee;let j=w*A-T*k,M=T*O-C*A,N=C*k-w*O,P=!1;for(let e=0;e<this.attractorCount;e++){let t=e*5,n=this.attractors[t+4],r=n<=0||this.following&&Math.hypot(this.attractors[t]-this.tx,this.attractors[t+2]-this.tz)<n;this.attrOn[e]=+!!r,r&&(P=!0)}this.flow.setTarget(this.tx+C*.3,this.tz+T*.3);for(let u=0;u<this.count;u++){let _=this.stun[u]>0;_&&(this.stun[u]-=e);let E=this.phase[u],D=this.offA[u]+c*this.offW[u]*(1+.6*x),ee=mf(this.offR[u]+x*.45*Math.sin(c*(.22+.1*this.speedMul[u])+E)),F=mf(this.offH[u]+x*.5*Math.sin(c*(.3+.12*this.speedMul[u])+E*1.7)),te=ee*f,I=Math.cos(D)*te,ne=Math.sin(D)*te,re=b*(.15+.85*F)*(1-.5*ee),ie=this.tx+O*I+j*ne+C*re,ae=this.ty+k*I+M*ne+w*re,oe=this.tz+A*I+N*ne+T*re,L=u*10,R=L*3,se=!1;if(this.gnawOn[u]&&!_&&this.lineFreeNear(n[R],n[R+2],this.gnawTo[u*3],this.gnawTo[u*3+2]))se=!0,ie=this.gnawTo[u*3],ae=this.gnawTo[u*3+1],oe=this.gnawTo[u*3+2];else if(P&&!_){let e=this.attractors,t=1/0,r=-1;for(let i=0;i<this.attractorCount;i++){if(!this.attrOn[i])continue;let a=i*5,o=e[a]-n[R],s=e[a+1]-n[R+1],c=e[a+2]-n[R+2],l=o*o+s*s+c*c,u=Math.abs(e[a+3]);l<u*u&&l<t&&(e[a+3]<0?this.lineFreeNear(n[R],n[R+2],e[a],e[a+2]):this.flow.lineFree(n[R],n[R+2],e[a],e[a+2]))&&(t=l,r=i)}if(r>=0){se=!0;let t=r*5,n=.15*this.offR[u];ie=e[t]+Math.cos(D)*n,ae=e[t+1],oe=e[t+2]+Math.sin(D)*n}}let ce=0;!se&&y&&this.flow.topAt(n[R],n[R+2])===0&&(ce=this.flow.obstacleTopOnLine(n[R],n[R+2],ie,oe),ce>0&&n[R+1]<ce+.1&&ae<ce+.3&&(ae=ce+.3));let le=ie-n[R],ue=ae-n[R+1],de=oe-n[R+2],fe=Math.sqrt(le*le+ue*ue+de*de)+1e-6;le/=fe,ue/=fe,de/=fe;let pe=!se&&!y&&!this.lineFreeNear(n[R],n[R+2],ie,oe);if(!se&&(y||pe)){let e=this.flow.dirAt(n[R],n[R+2],this.flowDir);if(e>1&&e>fe*1.05&&(pe||!this.flow.lineFree(n[R],n[R+2],ie,oe))){if(le=this.flowDir[0],ue=0,de=this.flowDir[1],n[R+1]>=.35){ue=-.8;let e=1/Math.sqrt(le*le+ue*ue+de*de);le*=e,ue*=e,de*=e}fe=e}}let me=this.speedMul[u],he=_?0:Math.max(Math.min(1,fe/.35),.18*x)*me*S;if(v&&!se&&n[R+1]<.25){let e=(L+5)*3,t=n[e]-p,r=n[e+2]-m,i=t*h+r*g,a=.15*d,o=.7*d,s=i>a?1-(i-a)/o:i<-a?1+(-i-a)/o:1;if(he*=s<.15?.15:s>1.4?1.4:s,ue*ue<.5){let e=t*-g+r*h,n=Math.max(-1,Math.min(1,e/d))*1.2;le+=g*n,de-=h*n;let i=Math.sqrt(le*le+ue*ue+de*de)||1;le/=i,ue/=i,de/=i}}let ge=a[R],_e=a[R+1],ve=a[R+2],ye=i[L]<l,be=!this.following&&w>.7,xe=be&&ce===0&&n[R+1]>this.ty+.2,Se=_||!this.sticky&&ye&&_e<-.5&&le*ge+ue*_e+de*ve>.6&&fe>.8||ye&&_e<.7&&xe;if(this.jump>0&&!_&&se&&ye&&_e>.7&&ae-n[R+1]>.35&&Math.random()<e*this.jump){let t=ie-n[R],r=oe-n[R+2],i=Math.hypot(t,r);if(i<af){let a=Math.sqrt(19.6*Math.min(1.6,ae-n[R+1]+.35)),o=Math.min(2.5,i*2.2)/(i||1);for(let i=0;i<10;i++){let s=(L+i)*3;this.prev[s]=n[s]-t*o*e,this.prev[s+1]=n[s+1]-a*e,this.prev[s+2]=n[s+2]-r*o*e}}}let Ce=Math.min(1,fe/.5),we=t.wiggle*(.35+.1*x+.65*Ce);this.wig[u]+=e*t.wiggleFreq*me*(.45+.55*Ce);let Te=this.wig[u]+this.phase[u],Ee=Te*.55,De=n[R]-n[R+3],Oe=n[R+1]-n[R+4],ke=n[R+2]-n[R+5],Ae=Math.sqrt(De*De+Oe*Oe+ke*ke)||1;De/=Ae,Oe/=Ae,ke/=Ae;let z=De*le+Oe*ue+ke*de,je=z<=-.2?0:z>=.4?.65:.65*(z+.2)/.6;for(let e=0;e<10;e++){let c=L+e,u=c*3,d=be&&ce===0&&n[u+1]>this.ty+.2&&a[u+1]<.7,f=!Se&&!d&&i[c]<l,p=o[c]===1,m=0,h=0,g=0,v=0,y=1,b=0,x,S=(e===0?L:c-1)*3,C=(e===0?L+1:e===9?c:c+1)*3,w=n[S]-n[C],T=n[S+1]-n[C+1],E=n[S+2]-n[C+2],D=Math.sqrt(w*w+T*T+E*E)||1;w/=D,T/=D,E/=D;let O,k,A;if(e===0)O=le,k=ue,A=de;else{O=w*je+le*.35,k=T*je+ue*.35,A=E*je+de*.35;let e=Math.sqrt(O*O+k*k+A*A)||1;O/=e,k/=e,A/=e}let ee=.6+.4*Math.sin(Ee-e*.7),j=(e===0?1:t.driveTail)*ee;if(f){v=a[u],y=a[u+1],b=a[u+2];let n=O*v+k*y+A*b;O-=v*n,k-=y*n,A-=b*n;let r=Math.sqrt(O*O+k*k+A*A);if(e===0&&r<.3&&y>-.5){let e=n>0?-1:1;O-=v*y*e,k+=(1-y*y)*e,A-=b*y*e,r=Math.sqrt(O*O+k*k+A*A)}r>.05&&(O/=r,k/=r,A/=r);let i=t.drive*j*he;if(m+=O*i-v*t.stick,h+=k*i-y*t.stick,g+=A*i-b*t.stick,y<.8&&y>-.8){let e=t.gravity*t.wallSlide;m+=v*y*e,h-=(1-y*y)*e,g+=b*y*e}x=t.dampSurface}else if(p){let e=t.drive*j*he;m+=O*e,h+=k*e-t.gravity*.2,g+=A*e,x=t.dampPile}else{let e=t.drive*j*he*.2;m+=O*e,h+=k*e-t.gravity,g+=A*e,x=t.dampAir}if(!_){let n=T*b-E*y,r=E*v-w*b,i=w*y-T*v,a=Math.sqrt(n*n+r*r+i*i);if(a>1e-4){let o=we*(e===0?.4:e===1?.3:.14),s=Math.sin(Te-e*t.wiggleK)*o/a;m+=n*s,h+=r*s,g+=i*s}}let M=n[u]-r[u],N=n[u+1]-r[u+1],P=n[u+2]-r[u+2];if(f||p){let e=M*w+N*T+P*E,n=f?M*v+N*y+P*b:0,r=M-w*e-v*n,i=N-T*e-y*n,a=P-E*e-b*n,o=t.dampAlong,s=f?t.dampSide:(t.dampSide+t.dampPile)*.5;M=w*e*o+r*s+v*n*x,N=T*e*o+i*s+y*n*x,P=E*e*o+a*s+b*n*x}else M*=x,N*=x,P*=x;r[u]=n[u],r[u+1]=n[u+1],r[u+2]=n[u+2],n[u]+=M+m*s,n[u+1]+=N+h*s,n[u+2]+=P+g*s}}}collideWorms(){let e=this.count*10,{pos:t,cellStart:n,cellOf:r,sorted:i,contact:a}=this,o=this.radius*2,s=1/o,c=o*o,l=1024;for(;l<e*2&&l<rf;)l<<=1;let u=l-1;n.fill(0,0,l+1);for(let i=0;i<e;i++){let e=i*3,a=(Math.imul(Math.floor(t[e]*s),sf)^Math.imul(Math.floor(t[e+1]*s),cf)^Math.imul(Math.floor(t[e+2]*s),lf))&u;r[i]=a,n[a+1]++}for(let e=0;e<l;e++)n[e+1]+=n[e];for(let t=0;t<e;t++)i[n[r[t]]++]=t;for(let e=l;e>0;e--)n[e]=n[e-1];n[0]=0,a.fill(0,0,e);let d=this.hx,f=this.hy,p=this.hz;for(let r=0;r<e;r++){let e=r*3,l=t[e],m=t[e+1],h=t[e+2],g=Math.floor(l*s),_=Math.floor(m*s),v=Math.floor(h*s);for(let e=0;e<3;e++)d[e]=Math.imul(g+e-1,sf),f[e]=Math.imul(_+e-1,cf),p[e]=Math.imul(v+e-1,lf);let y=r/10|0,b=0,x=0,S=0,C=a[r];for(let e=0;e<14;e++){let s=(d[uf[e]]^f[df[e]]^p[ff[e]])&u,g=n[s+1];for(let u=n[s];u<g;u++){let n=i[u],s=n-r;if((e===0?s<=0:s===0)||s<=2&&s>=-2&&(n/10|0)===y)continue;let d=n*3,f=t[d]-l,p=t[d+1]-m,g=t[d+2]-h,_=f*f+p*p+g*g;if(_>=c||_<1e-12)continue;let v=Math.sqrt(_),w=(o-v)*.4/v,T=f*w,E=p*w,D=g*w;b-=T,x-=E,S-=D,t[d]+=T,t[d+1]+=E,t[d+2]+=D,C=1,a[n]=1}}t[e]=l+b,t[e+1]=m+x,t[e+2]=h+S,a[r]=C}}solveConstraints(){let{pos:e}=this,t=this.restLen,n=t*1.8,r=this.segRest;for(let e=0;e<this.count;e++){let n=(this.wig[e]+this.phase[e])*.55;for(let i=0;i<9;i++)r[e*9+i]=t*(1+.09*Math.sin(n-i*.7))}for(let t=0;t<this.params.iterations;t++)for(let t=0;t<this.count;t++){let i=t*10;for(let n=0;n<9;n++){let a=(i+n)*3,o=a+3,s=e[o]-e[a],c=e[o+1]-e[a+1],l=e[o+2]-e[a+2],u=Math.sqrt(s*s+c*c+l*l)+1e-9,d=(u-r[t*9+n])*.5/u;e[a]+=s*d,e[a+1]+=c*d,e[a+2]+=l*d,e[o]-=s*d,e[o+1]-=c*d,e[o+2]-=l*d}for(let t=0;t<8;t++){let r=(i+t)*3,a=r+6,o=e[a]-e[r],s=e[a+1]-e[r+1],c=e[a+2]-e[r+2],l=Math.sqrt(o*o+s*s+c*c)+1e-9;if(l>=n)continue;let u=(l-n)*.5*.3/l;e[r]+=o*u,e[r+1]+=s*u,e[r+2]+=c*u,e[a]-=o*u,e[a+1]-=s*u,e[a+2]-=c*u}}}collideLevel(e){let t=this.count*10,{pos:n,prev:r,sDist:i,sNrm:a,level:o,bodies:s}=this,c=this.radius,l=this.bodyCount;for(let u=0;u<t;u++){let t=u*3,d=n[t],f=n[t+1],p=n[t+2],m=o.sdf(d,f,p,a,t);if(m<0){let e=r[t],n=r[t+1],i=r[t+2],s=o.sdf(e,n,i,this.n3,0);if(s>0){let r=this.n3[0],o=this.n3[1],c=this.n3[2],l=(d-e)*r+(f-n)*o+(p-i)*c+s;(l<m||r*a[t]+o*a[t+1]+c*a[t+2]<.5)&&(m=l,a[t]=r,a[t+1]=o,a[t+2]=c)}}let h=-1;for(let e=0;e<l;e++){let n=e*9,r=s[n+6],i=s[n],o=s[n+1],c=s[n+2],l=s[n+3]-i,u=s[n+4]-o,g=s[n+5]-c,_=d-i,v=f-o,y=p-c;if(Math.abs(_-l*.5)>r+.5||Math.abs(y-g*.5)>r+.5)continue;let b=l*l+u*u+g*g,x=b>0?(_*l+v*u+y*g)/b:0;x=x<0?0:x>1?1:x;let S=_-l*x,C=v-u*x,w=y-g*x,T=Math.sqrt(S*S+C*C+w*w)+1e-9,E=T-r;E<m&&(m=E,a[t]=S/T,a[t+1]=C/T,a[t+2]=w/T,h=n)}if(h>=0&&m<c+.03){let i=s[h+7]*e*.9,a=s[h+8]*e*.9;n[t]+=i,r[t]+=i,n[t+2]+=a,r[t+2]+=a}if(m<c){let e=a[t],o=a[t+1],s=a[t+2],l=c-m;n[t]+=e*l,n[t+1]+=o*l,n[t+2]+=s*l;let d=(n[t]-r[t])*e+(n[t+1]-r[t+1])*o+(n[t+2]-r[t+2])*s;d<0&&(r[t]+=e*d,r[t+1]+=o*d,r[t+2]+=s*d),i[u]=c}else i[u]=m}}updateCentroid(){let e=0,t=0,n=0,{pos:r}=this;for(let i=0;i<this.count;i++){let a=i*10*3+15;e+=r[a],t+=r[a+1],n+=r[a+2]}let i=1/Math.max(1,this.count),a=e*i,o=n*i,s=.1;this.cvx+=((a-this.centroid[0])*60-this.cvx)*s,this.cvz+=((o-this.centroid[2])*60-this.cvz)*s,this.centroid[0]=a,this.centroid[1]=t*i,this.centroid[2]=o}};function mf(e){return e<0?0:e>1?1:e}var hf=.75,gf=.3,_f=[.35,.9,1.4],vf=.15,yf=class{level;xs=[];zs=[];adj=[];doors=[];hideouts=[];hideoutDoor=[];n3=new Float32Array(3);constructor(e){this.level=e;let t=e.boxes.find(e=>e.kind===`floor`),n=t?t.h[0]:7,r=t?t.h[2]:7,i=t?t.c[0]:0,a=t?t.c[2]:0;for(let e=i-n+hf/2;e<i+n;e+=hf)for(let t=a-r+hf/2;t<a+r;t+=hf)this.clear(e,t)&&this.addNode(e,t);let o=this.xs.length;for(let[t,n]of e.meta.waypoints??[])this.addNode(t,n);for(let t of e.meta.doors)this.doors.push(this.addNode(t[0],t[2]));(e.meta.massDoors??[]).forEach((e,t)=>{e.hideout&&(this.hideouts.push(this.addNode(e.hideout[0],e.hideout[2])),this.hideoutDoor.push(t))});for(let e=0;e<this.xs.length;e++)for(let t=e+1;t<this.xs.length;t++)Math.hypot(this.xs[e]-this.xs[t],this.zs[e]-this.zs[t])<=(e>=o||t>=o?hf*2.2:hf*1.5)&&this.los(this.xs[e],this.zs[e],this.xs[t],this.zs[t])&&(this.adj[e].push(t),this.adj[t].push(e))}get size(){return this.xs.length}addNode(e,t){return this.xs.push(e),this.zs.push(t),this.adj.push([]),this.xs.length-1}clear(e,t){for(let n of _f)if(this.level.navSdf(e,n,t,this.n3,0)<gf)return!1;return!0}los(e,t,n,r){let i=Math.hypot(n-e,r-t),a=Math.max(1,Math.ceil(i/vf));for(let i=0;i<=a;i++){let o=i/a;if(!this.clear(e+(n-e)*o,t+(r-t)*o))return!1}return!0}nearest(e,t){let n=-1,r=1/0,i=0,a=1/0;for(let o=0;o<this.xs.length;o++){let s=Math.hypot(this.xs[o]-e,this.zs[o]-t);s<a&&(a=s,i=o),s<r&&s<hf*2.5&&this.los(e,t,this.xs[o],this.zs[o])&&(r=s,n=o)}return n>=0?n:i}path(e,t,n){let r=this.xs.length,i=new Float64Array(r).fill(1/0),a=new Int32Array(r).fill(-1),o=new Uint8Array(r);for(i[e]=0;;){let e=-1,s=1/0;for(let t=0;t<r;t++)!o[t]&&i[t]<s&&(s=i[t],e=t);if(e<0)return null;if(t.includes(e)){let t=[];for(let n=e;n>=0;n=a[n])t.push(n);return t.reverse()}o[e]=1;for(let t of this.adj[e]){let r=Math.hypot(this.xs[e]-this.xs[t],this.zs[e]-this.zs[t])+(n?n(t):0);s+r<i[t]&&(i[t]=s+r,a[t]=e)}}}},bf=(e,t)=>e.eatenByPrefab[t]??0,xf=(e,t)=>Math.min(1,e/t);function Sf(e,t,n,r,i){return{id:e,text:t,reward:n,done:e=>r(e)>=i,progress:e=>xf(r(e),i)}}var Cf=[Sf(`first`,`Первый предмет съеден`,5,e=>e.objectsEaten,1),Sf(`chairs`,`Съедено 3 стула`,8,e=>bf(e,`chair`),3),Sf(`litter20`,`Подобрано 20 мелочей`,10,e=>e.litter,20),Sf(`dna500`,`Добыто 500 🧬`,15,e=>e.dna,500),Sf(`boxes`,`Съедено 5 коробок`,12,e=>bf(e,`cardboard`),5),Sf(`floor10`,`Выеден десятый кусок пола`,15,e=>e.floorShare*100,10),Sf(`worms100`,`Рой в 100 червей`,15,e=>e.worms,100),Sf(`car`,`Съедена машина`,25,e=>bf(e,`car`),1),Sf(`abil10`,`10 улучшений`,20,e=>e.abilityLevels,10),Sf(`gate`,`Прогрызены первые ворота`,25,e=>bf(e,`gate`),1),Sf(`dna3k`,`Добыто 3 000 🧬`,40,e=>e.dna,3e3),Sf(`litter100`,`Подобрано 100 мелочей`,30,e=>e.litter,100),Sf(`worms200`,`Рой в 200 червей`,40,e=>e.worms,200),Sf(`van`,`Съеден фургон`,40,e=>bf(e,`van`),1),Sf(`kiosk`,`Съеден ларёк`,50,e=>bf(e,`kiosk`),1),Sf(`walls`,`Съедено 3 стены`,50,e=>bf(e,`brickwall`),3),Sf(`floor50`,`Выедена половина пола`,60,e=>e.floorShare*100,50),Sf(`worms400`,`Рой в 400 червей`,60,e=>e.worms,400),Sf(`dna15k`,`Добыто 15 000 🧬`,100,e=>e.dna,15e3),Sf(`objects50`,`Съедено 50 предметов`,80,e=>e.objectsEaten,50)],wf=.24,Tf=.25,Ef=1.5,Df=3.8,Of=1.5,kf=Math.cos(70*Math.PI/180),Af=.9,jf=.85,Mf=1.35,Nf=3.5,Pf=.12,Ff=12,If=55,Lf=3,Rf=.35,zf=.75,Bf=1.05,Vf=.7,Hf=30,Uf=2,Wf=5,Gf=7,Kf=5,qf=.7,Jf=1.3,Yf=4,Xf=2.6,Zf=28*Math.PI/180,Qf=Math.cos(Zf),$f=.8,ep=.9,tp=.5,np=1.5,rp=.35,ip=.12,ap=.7,op=.09,sp=10,cp=.12,lp=.4,up=6,dp=.4,fp=1.5,pp=.3,mp=5,hp=.16,gp=.16,_p=7,vp=150,yp=6,bp=25,xp=.22,Sp=.15,Cp=.5,wp=[3836490,13122106,15262936,13138474,5937722,15255626],Tp=.02,Ep=.06,Dp=.4,Op=1,kp=.09,Ap=.13,jp=20,Mp=600,Np=10,Pp=.8,Fp=4,Ip=2,Lp=3,Rp=1.4,zp=4,Bp=.16,Vp=260,Hp=.1,Up=4,Wp=.9,Gp=1.5,Kp=.15,qp=.01,Jp=4,Yp=.12,Xp=1,Zp=6,Qp=8,$p=.3,em=8,tm=.5,nm=2,rm=class{level;swarm;rules;rand;nav;doors=[];fx=[];kills=[];inFlame;hurtBy;clock=0;mods={shotSave:0,burnMul:1};respawn=!1;invulnerable=!1;growth={human:Lf,fighter:Wf,food:nm};foodRespawn=0;humansVersion=0;nextHumanId=0;director=null;humans=[];food=[];steerByKeys=!1;playerIdle=!1;mut=jd();owned={ram:1};cooldown={};swarmLevel=0;dna=0;dnaMul=1;perks=new Set;queenT=0;dnaTotal=0;lockedHint=null;lockOf(e){let t=e.def.req;if(!t)return null;let n=t[0];return(this.owned[n]??0)>=t[1]?null:{ability:n,level:t[1]}}suggestion(){if(this.rules?.goal.type!==`district`)return null;let e=this.swarm.centroid,t=null,n=1/0;for(let r of this.edibles){if(r.gone)continue;let i=this.lockOf(r);if(!i)continue;let a=i.level*100+Math.hypot(r.def.base[0]-e[0],r.def.base[2]-e[2]);a<n&&(n=a,t={id:i.ability,level:i.level,reason:iu[r.def.prefab??``]??`предмет`})}return t}floor=null;floorColors=[];get eatenVolume(){let e=0;for(let t of this.edibles)e+=Math.min(t.eaten,t.bites.insideTotal)*t.bites.cell**3*(t.def.weight??1);return this.floor&&(e+=this.floor.eaten*qd*qd*Tp),e}get eatenKg(){return this.eatenVolume*Mp+this.stats.litterEaten*.4+this.stats.foodEaten*1.5}get districtShare(){let e=0;for(let t of this.edibles)e+=t.bites.insideTotal*t.bites.cell**3*(t.def.weight??1);return this.floor&&(e+=this.floor.total*qd*qd*Tp),e?this.eatenVolume/e:0}get xp(){let e=0;for(let t of this.edibles){let n=t.bites.insideTotal;e+=Math.min(t.eaten,n)/n*(1+n*t.bites.cell**3)*(t.def.weight??1)}return this.floor&&(e+=this.floor.eaten*qd*qd*Ep),e+this.litterXp}get levelProgress(){let e=zd(this.swarmLevel),t=zd(this.swarmLevel+1);return Math.max(0,Math.min(1,(this.xp-e)/(t-e)))}abilityPrice(e){return Rd(Ld.find(t=>t.id===e),this.owned[e]??0)}perkOffer(){if(this.rules?.goal.type!==`district`)return null;let e=Bd.find(e=>!this.perks.has(e.id));return e&&this.dnaTotal>=e.at?e:null}buyPerk(){let e=this.perkOffer();if(!e||this.dna<e.cost)return!1;this.dna-=e.cost,this.perks.add(e.id);let t=this.swarm;return e.id===`dna2`?this.dnaMul*=2:e.id===`dna3`?this.dnaMul*=1.5:e.id===`jump`?t.jump=Pp:e.id===`ram2`&&(t.dashCooldownMax=Math.min(t.dashCooldownMax,2)),!0}whyNot(e){let t=Ld.find(t=>t.id===e);if(!t||t.free)return`не продаётся`;if((this.owned[e]??0)>=t.max)return`максимум`;let n=this.abilityPrice(e);return this.dna<n?`не хватает ${Math.ceil(n-this.dna)} 🧬`:null}buyAbility(e){return this.whyNot(e)===null&&(this.dna-=this.abilityPrice(e),this.owned[e]=(this.owned[e]??0)+1,this.applyPassive(e),!0)}applyPassive(e){let t=this.swarm,n=this.owned[e]??0;if(e===`swarm`){let e=Nd(n),r=t.centroid;for(let n=0;n<e;n++)this.addWorm(Math.floor(this.rand()*t.count));this.events.push({kind:`gnaw`,x:r[0],y:r[1]+.3,z:r[2],worms:e})}else e===`speed`?t.params.drive*=Pd(n)/Pd(n-1):e===`jaws`&&(this.mut.biteR*=Fd(n)/Fd(n-1),this.mut.biteTime*=Id(n)/Id(n-1))}reserve=0;visibleCap=600;get totalWorms(){return this.swarm.count+this.reserve}addWorm(e){return this.swarm.count>=this.visibleCap?(this.reserve++,!0):this.swarm.spawnLike(e,1.5)}abilityReady(e){let t=Ld.find(t=>t.id===e);return!t?.cooldown||!this.owned[e]?0:e===`ram`?1-Math.max(0,this.swarm.dashCooldown)/this.swarm.dashCooldownMax:1-Math.max(0,this.cooldown[e]??0)/t.cooldown}useAbility(e,t,n){return!this.owned[e]||this.phase!==`playing`||this.abilityReady(e)<1?!1:(Ld.find(t=>t.id===e),e===`ram`?this.swarm.dash()?(this.ramLeft=40*(this.perks.has(`ram2`)?3:1),!0):!1:!0)}ramLeft=0;milestonesDone=new Set;newMilestones=[];milestoneStats(){let e={};for(let t of this.edibles)t.gone&&t.def.prefab&&(e[t.def.prefab]=(e[t.def.prefab]??0)+1);return{eatenByPrefab:e,objectsEaten:this.edibles.filter(e=>e.gone).length,floorShare:this.floor?1-this.floor.left:0,litter:this.stats.litterEaten,dna:this.dnaTotal,level:this.swarmLevel+1,abilityLevels:Object.values(this.owned).reduce((e,t)=>e+t,0),worms:this.totalWorms}}nextMilestone(){let e=this.milestoneStats(),t=null;for(let n of Cf){if(this.milestonesDone.has(n.id))continue;let r=n.progress(e);(!t||r>t.progress)&&(t={def:n,progress:r})}return t}updateMilestones(){let e=this.milestoneStats();for(let t of Cf)!this.milestonesDone.has(t.id)&&t.done(e)&&(this.milestonesDone.add(t.id),this.newMilestones.push(t),this.wormMeter+=t.reward,this.flushMeter(null))}updateLevel(){if(this.rules?.goal.type!==`district`)return;this.milestoneTick=(this.milestoneTick+1)%5,this.milestoneTick===0&&this.updateMilestones();let e=this.xp;for(;e>=zd(this.swarmLevel+1);)this.swarmLevel++}crumbs=[];edibles=[];gnawTick=0;stats={humansEaten:0,humansEscaped:0,foodEaten:0,score:0,overflow:0,litterEaten:0};events=[];heads;phase=`playing`;outcome=null;elapsed=0;exitFill=0;exitHold=0;constructor(e,t,n=null,r=Math.random){if(this.level=e,this.swarm=t,this.rules=n,this.rand=r,this.nav=new yf(e),this.heads=new Float32Array(t.maxWorms*3),this.inFlame=new Uint8Array(t.maxWorms),this.hurtBy=new Uint8Array(t.maxWorms),n?.goal.type===`district`){this.foodRespawn=jp;let t=e.boxes.find(e=>e.kind===`floor`);t&&(this.floor=new Jd(t.c[0],t.c[2],t.h[0]-.5,t.h[2]-.5)),this.floorColors=e.boxes.filter(e=>e.kind===`decor`&&e.c[1]<.05&&e.h[1]<.02),this.scatterLitter()}this.reset()}reset(){this.nextHumanId=0,this.humans=this.level.meta.humans.map(e=>this.makeHuman(this.nextHumanId++,e.kind,e.pos[0],e.pos[2])),this.humansVersion++,this.resetRest()}addHuman(e,t,n){let r=this.nav.nearest(t,n),i=this.makeHuman(this.nextHumanId++,e,this.nav.xs[r],this.nav.zs[r]);return this.humans.push(i),this.humansVersion++,i}clearHumans(){this.humans=[],this.humansVersion++}pruneHumans(e){let t=this.humans.filter(t=>!((t.state===`eaten`||t.state===`escaped`)&&t.t>e));t.length!==this.humans.length&&(this.humans=t,this.humansVersion++)}sendTo(e,t,n){e.homeX=t,e.homeZ=n,(e.state===`idle`||e.state===`wander`)&&this.startWander(e)}makeHuman(e,t,n,r){return{id:e,kind:t,x:n,z:r,homeX:n,homeZ:r,heading:this.rand()*Math.PI*2,speed:0,state:`idle`,t:0,wait:.5+this.rand()*2,path:[],pathI:0,replan:0,attached:0,progress:0,cooldown:0,lostT:0,firing:!1,top:Ef,struggleT:Uf,shookT:9}}resetRest(){for(let e of this.level.meta.massDoors??[])this.level.setEnabled(e.box,!e.startOpen);this.swarm.flow.invalidate(),this.doors=(this.level.meta.massDoors??[]).map(e=>({box:e.box,need:e.need,count:0,hold:0,opened:e.startOpen,open:+!!e.startOpen})),this.clock=0,this.nav=new yf(this.level),this.resetEdibles(),this.food=this.level.meta.food.map(e=>({x:e[0],y:e[1],z:e[2],alive:!0,progress:0,goneT:0})),this.stats={humansEaten:0,humansEscaped:0,foodEaten:0,score:0,overflow:0,litterEaten:0},this.events.length=0,this.phase=`playing`,this.outcome=null,this.elapsed=0,this.exitFill=0,this.exitHold=0,this.syncSwarm()}exitNeed(){let e=this.swarm.count;return Math.max(Math.min(5,e),Math.ceil(e*.35))}wormsAtExit(){let e=this.rules?.exit;if(!e)return 0;let{pos:t,count:n}=this.swarm,r=(e.radius+.1)**2,i=0;for(let a=0;a<n;a++){let n=(a*10+5)*3,o=t[n]-e.pos[0],s=t[n+1]-e.pos[1],c=t[n+2]-e.pos[2];o*o+s*s+c*c<r&&i++}return i}checkOutcome(e){let t=this.rules;if(!t||this.phase!==`playing`)return;if(this.swarm.count===0){this.finish(`lost`,`Рой погиб`);return}if(t.goal.type===`district`){this.districtShare>=t.goal.share&&this.finish(`won`,`Район съеден`);return}if(t.goal.type===`infest`){this.stats.score>=t.goal.count&&this.finish(`won`,`Квартал заражён`);return}if(t.goal.type===`eat`){let e=t.goal.count;this.stats.humansEaten>=e?this.finish(`won`,`Цель выполнена`):this.stats.humansEaten+this.humansLeft<e&&this.finish(`lost`,`Слишком многие сбежали`);return}let n=this.wormsAtExit(),r=this.exitNeed();this.exitFill=Math.min(1,n/r),this.exitHold=n>=r?this.exitHold+e:0,this.exitHold>=.4&&this.finish(`won`,`Рой ушёл в `+(t.exit?.kind===`vent`?`вентиляцию`:`слив`))}finish(e,t){let n=this.rules,r=[e===`won`,...n.stars.slice(0,2).map(t=>e===`won`&&this.starMet(t))];for(;r.length<3;)r.push(!1);let i=r.filter(Boolean).length,a=e===`won`?n.goal.type===`district`?10*i+3*this.edibles.filter(e=>e.gone).length+Math.floor(this.swarm.count/2):10*i+(n.goal.type===`infest`?3:5)*this.stats.humansEaten+Math.floor(this.swarm.count/2):0;this.phase=e,this.outcome={result:e,reason:t,stars:r,time:this.elapsed,reward:a}}revive(e){if(this.phase!==`lost`||this.swarm.count>0)return!1;let[t,n,r]=this.level.spawn;return this.swarm.spawnAt(e,t,n,r),this.phase=`playing`,this.outcome=null,!0}starMet(e){switch(e.type){case`time`:return this.elapsed<=e.max;case`eat`:return this.stats.humansEaten>=e.min;case`food`:return this.stats.foodEaten>=e.min;case`worms`:return this.swarm.count>=e.min}}get humansLeft(){return this.humans.filter(e=>e.state!==`eaten`&&e.state!==`escaped`).length}get foodLeft(){return this.food.filter(e=>e.alive).length}step(e){this.events.length=0,this.fx.length=0,this.kills.length=0,this.phase===`playing`&&(this.elapsed+=e),this.collectHeads(),this.clock+=e,this.inFlame.fill(0,0,this.swarm.count),this.hurtBy.fill(0,0,this.swarm.count),this.director?.step(e);for(let t of this.humans)this.updateHuman(t,e);this.updateHazards(),this.updateHeat(e);for(let t of this.food)this.updateFood(t,e);this.fallCrumbs(e);let t=++this.gnawTick>=Zp;if(t){this.gnawTick=0;for(let e=0;e<zp&&this.reserve>0&&this.swarm.count<this.visibleCap&&this.swarm.spawnLike(Math.floor(this.rand()*this.swarm.count),.5);e++)this.reserve--;this.updateEdibles(e*Zp),this.gnawFloor(e*Zp),this.eatLitter(e*Zp),this.eatCrumbs(e*Zp),this.updateLevel()}this.updateAbilities(e,t),this.updateDoors(e),this.kills.length&&this.swarm.killMany(this.kills),this.checkOutcome(e),this.syncSwarm()}killWorm(e,t){if(this.invulnerable){this.swarm.heat[e]=Math.min(this.swarm.heat[e],.9);return}if(this.kills.includes(e))return;this.kills.push(e);let n=(e*10+5)*3,r=this.swarm.pos;this.fx.push({type:`death`,x:r[n],y:r[n+1],z:r[n+2],cause:t})}los(e,t,n,r,i,a){let o=r-e,s=i-t,c=a-n,l=Math.sqrt(o*o+s*s+c*c),u=Math.ceil(l/.15),d=this.n3;for(let r=1;r<u-1;r++){let i=r/u;if(this.level.sdf(e+o*i,t+s*i,n+c*i,d,0)<.02)return!1}return!0}n3=new Float32Array(3);nearestVisibleWorm(e,t,n){let r=t*t,i=-1,a=this.heads,o=[];for(let t=0;t<this.swarm.count;t++){let i=a[t*3]-e.x,s=a[t*3+1]-n,c=a[t*3+2]-e.z;i*i+s*s+c*c<r*4&&o.push(t)}o.sort((t,r)=>this.dist2(e,t,n)-this.dist2(e,r,n));for(let t of o.slice(0,6)){let o=this.dist2(e,t,n);o>=r||this.kills.includes(t)||this.los(e.x,n,e.z,a[t*3],a[t*3+1],a[t*3+2])&&(r=o,i=t)}return i}dist2(e,t,n){let r=this.heads,i=r[t*3]-e.x,a=r[t*3+1]-n,o=r[t*3+2]-e.z;return i*i+a*a+o*o}updateGuard(e,t){e.cooldown-=t;let n=this.nearestVisibleWorm(e,Gf,Jf);if(n<0){e.lostT+=t,e.lostT>Yf&&this.setState(e,`idle`);return}e.lostT=0;let r=this.heads,i=Math.atan2(r[n*3]-e.x,r[n*3+2]-e.z);if(e.heading=am(e.heading,i,Kf*t),Math.abs(im(e.heading,i))<.35&&e.cooldown<=0){e.cooldown=qf*(e.attached>=Ff?2:1);let t=e.x+Math.sin(e.heading)*.4,i=e.z+Math.cos(e.heading)*.4;this.fx.push({type:`shot`,fx:t,fy:Jf,fz:i,tx:r[n*3],ty:r[n*3+1],tz:r[n*3+2]}),this.rand()>=this.mods.shotSave&&this.killWorm(n,`shot`)}}updateFlamer(e,t){if(this.nearestVisibleWorm(e,6,1.1)<0)return e.firing=!1,e.lostT+=t,e.lostT>Yf&&this.setState(e,`idle`),0;e.lostT=0;let n=this.swarm.centroid,r=n[0]-e.x,i=n[2]-e.z,a=Math.atan2(r,i);e.heading=am(e.heading,a,ep*t);let o=Math.sin(e.heading),s=Math.cos(e.heading),c=!1,{pos:l,count:u}=this.swarm;for(let t=0;t<u;t++)for(let n of[0,5]){let r=(t*10+n)*3,i=l[r]-e.x,a=l[r+2]-e.z;if(l[r+1]>2)continue;let u=Math.sqrt(i*i+a*a);if(!(u>2.6||u<.05)&&!((i*o+a*s)/u<Qf)){this.inFlame[t]=1,c=!0;break}}if(e.firing=c,Math.sqrt(r*r+i*i)>2.6*.75){let n=tp*t*Math.max(.1,1-e.attached/If),r=e.x+o*n,i=e.z+s*n;if(this.nav.clear(r,i)&&Math.hypot(r-e.homeX,i-e.homeZ)<np)return e.x=r,e.z=i,n/t}return 0}hazardActive(e){let t=this.level.meta.hazards?.[e];return t?t.kind===`acid`||this.clock%(t.on+t.off)<t.on:!1}updateHazards(){let e=this.level.meta.hazards??[];if(!e.length)return;let{pos:t,count:n}=this.swarm;e.forEach((e,r)=>{if(!this.hazardActive(r))return;let i=e.kind===`acid`?2:1;for(let r=0;r<n;r++)for(let n of[0,5,9]){let a=(r*10+n)*3;if(!(t[a+1]>ip)&&!(Math.abs(t[a]-e.c[0])>e.h[0]||Math.abs(t[a+2]-e.c[1])>e.h[1])){this.hurtBy[r]=i;break}}})}updateHeat(e){let t=this.swarm;for(let n=0;n<t.count;n++)this.hurtBy[n]?(t.heat[n]+=e/rp,t.heat[n]>=1&&this.killWorm(n,this.hurtBy[n]===2?`acid`:`shock`)):this.inFlame[n]?(t.heat[n]+=e/($f*this.mods.burnMul),t.heat[n]>=1&&this.killWorm(n,`fire`)):t.heat[n]>0&&(t.heat[n]=Math.max(0,t.heat[n]-e*.5))}updateDoors(e){let{pos:t,count:n}=this.swarm;this.doors.forEach((r,i)=>{if(r.open=r.opened?Math.min(1,r.open+e/.6):Math.max(0,r.open-e/.4),r.opened)return;let a=this.level.boxes[r.box],o=a.h[0]+.9,s=a.h[2]+.9,c=0;for(let e=0;e<n;e++){let n=(e*10+5)*3;Math.abs(t[n]-a.c[0])<o&&Math.abs(t[n+2]-a.c[2])<s&&t[n+1]<a.c[1]+a.h[1]+.3&&c++}r.count=c,r.hold=c>=r.need?r.hold+e:0,r.hold>=.5&&(r.opened=!0,this.level.setEnabled(r.box,!1),this.swarm.flow.invalidate(),this.fx.push({type:`door`,index:i}),this.rebuildNav())})}collectHeads(){let{pos:e,count:t}=this.swarm;for(let n=0;n<t;n++){let t=n*10*3;this.heads[n*3]=e[t],this.heads[n*3+1]=e[t+1],this.heads[n*3+2]=e[t+2]}}seesSwarm(e){let t=Math.sin(e.heading),n=Math.cos(e.heading),r=Df*Df,i=Of*Of,a=this.heads,o=this.seen;o.length=0;for(let s=0;s<this.swarm.count;s++){let c=a[s*3]-e.x,l=a[s*3+1]-.9,u=a[s*3+2]-e.z,d=c*c+l*l+u*u;if(d<i)o.push(s);else if(d<r){let e=Math.sqrt(c*c+u*u)+1e-6;(c*t+u*n)/e>kf&&o.push(s)}}if(!o.length)return!1;let s=Math.min(4,o.length);for(let t=0;t<s;t++){let n=o[Math.floor(t*o.length/s)];if(this.los(e.x,1.4,e.z,a[n*3],a[n*3+1],a[n*3+2]))return!0}return!1}seen=[];countAttached(e){let{pos:t,count:n}=this.swarm,r=wf+this.swarm.radius+Pf,i=r*r,a=0;for(let o=0;o<n*10;o++){let n=o*3,s=t[n]-e.x;if(s>r||s<-r)continue;let c=t[n+2]-e.z;if(c>r||c<-r)continue;let l=t[n+1],u=l-(l<.25?Tf:l>e.top?e.top:l);s*s+u*u+c*c<i&&a++}return a}updateHuman(e,t){if(e.state===`eaten`||e.state===`escaped`){e.t+=t,e.speed=0,this.respawn&&e.t>3&&Object.assign(e,this.makeHuman(e.id,e.kind,e.homeX,e.homeZ));return}e.t+=t,e.attached=this.countAttached(e),e.attached>=Ff?(e.progress+=t*Math.min(e.attached,150)/90,(e.state===`idle`||e.state===`wander`)&&this.setState(e,`alert`)):e.progress=Math.max(0,e.progress-t*.3);let n=e.progress<Rf?Ef:e.progress<zf?Bf:Vf;if(e.top+=(n-e.top)*Math.min(1,t*4),e.shookT+=t,e.attached>0&&e.attached<Hf&&e.progress<Rf&&e.state!==`hidden`&&(e.struggleT-=t,e.struggleT<=0&&(e.struggleT=Uf*(.8+this.rand()*.4),e.shookT=0,this.swarm.explode(e.x,.7,e.z,.45,1.5))),e.progress>=1){this.setState(e,`eaten`),e.firing=!1,this.stats.humansEaten++;let t=e.kind===`guard`||e.kind===`flamer`;this.stats.score+=t?2:1,this.grow(`human`,e.x,.5,e.z,t?this.growth.fighter:this.growth.human,e);return}let r=e.kind===`guard`||e.kind===`flamer`;if((e.state===`idle`||e.state===`wander`||e.state===`alert`)&&r&&(e.state===`alert`||this.seesSwarm(e))?(this.setState(e,`fight`),e.cooldown=.5,e.lostT=0):(e.state===`idle`||e.state===`wander`)&&this.seesSwarm(e)&&(this.setState(e,`alert`),this.fx.push({type:`alert`,id:e.id})),e.state===`fight`){e.speed=e.kind===`guard`?(this.updateGuard(e,t),0):this.updateFlamer(e,t);return}e.firing=!1;let i=0;switch(e.state){case`idle`:e.t>e.wait&&this.startWander(e);break;case`wander`:i=jf;break;case`alert`:e.t>Af&&this.startFlee(e);break;case`flee`:i=Mf,e.replan-=t,e.replan<=0&&this.startFlee(e)}if(i*=Math.max(.1,1-e.attached/If),e.speed=this.followPath(e,i*t)/t,e.pathI>=e.path.length&&(e.state===`wander`||e.state===`flee`)){let t=e.path[e.path.length-1],n=this.nav.hideouts.indexOf(t);e.state===`flee`&&n>=0?(this.setState(e,`hidden`),this.closeDoor(this.nav.hideoutDoor[n])):e.state===`flee`&&this.nav.doors.includes(t)?(this.setState(e,`escaped`),this.stats.humansEscaped++):e.state===`wander`&&(this.setState(e,`idle`),e.wait=1+this.rand()*2.5)}}closeDoor(e){let t=this.doors[e];t&&t.opened&&(t.opened=!1,t.hold=0,this.level.setEnabled(t.box,!0),this.swarm.flow.invalidate(),this.fx.push({type:`door`,index:e}),this.rebuildNav())}rebuildNav(){this.nav=new yf(this.level);for(let e of this.humans)e.path=[],e.pathI=0,e.replan=0}setState(e,t){e.state=t,e.t=0}startWander(e){let t=[];for(let n=0;n<this.nav.size;n++)this.nav.doors.includes(n)||this.nav.hideouts.includes(n)||Math.hypot(this.nav.xs[n]-e.homeX,this.nav.zs[n]-e.homeZ)<Nf&&t.push(n);let n=this.nav.nearest(e.x,e.z),r=t.length?t[Math.floor(this.rand()*t.length)]:n,i=this.nav.path(n,[r]);this.setState(e,`wander`),e.path=i??[],e.pathI=0}startFlee(e){let t=this.swarm.centroid,n=.09*Math.sqrt(this.swarm.count)+1.5,r=this.nav,i=r.nearest(e.x,e.z),a=r.path(i,[...r.doors,...r.hideouts],e=>{let i=Math.hypot(r.xs[e]-t[0],r.zs[e]-t[2]);return i<n?12*(1-i/n)+2:0});e.state!==`flee`&&this.setState(e,`flee`),e.path=a??[],e.pathI=e.path.length>1&&this.closerToSecond(e)?1:0,e.replan=1}closerToSecond(e){let t=e.path[0],n=e.path[1],r=this.nav,i=Math.hypot(r.xs[n]-r.xs[t],r.zs[n]-r.zs[t]);return Math.hypot(r.xs[n]-e.x,r.zs[n]-e.z)<i&&r.los(e.x,e.z,r.xs[n],r.zs[n])}followPath(e,t){let n=0;for(;t>1e-6&&e.pathI<e.path.length;){let r=e.path[e.pathI],i=this.nav.xs[r]-e.x,a=this.nav.zs[r]-e.z,o=Math.hypot(i,a);if(o<1e-4){e.pathI++;continue}let s=Math.atan2(i,a);e.heading=am(e.heading,s,.2);let c=Math.min(t,o);e.x+=i/o*c,e.z+=a/o*c,n+=c,t-=c,c>=o&&e.pathI++}return n}updateFood(e,t){if(!e.alive){e.goneT+=t,(this.respawn&&e.goneT>5||this.foodRespawn>0&&e.goneT>this.foodRespawn&&this.swarmFar(e.x,e.z,5))&&(e.alive=!0,e.progress=0);return}if(e.y>.01){let n=this.level.sdf(e.x,e.y-.02,e.z,this.n3c,0);n>.01&&(e.y=Math.max(0,e.y-Math.min(n,4*t)))}let{pos:n,count:r}=this.swarm,i=e.y+.08,a=$p+this.swarm.radius,o=a*a,s=0;for(let t=0;t<r*10&&s<em;t++){let r=t*3,c=n[r]-e.x;if(c>a||c<-a)continue;let l=n[r+1]-i,u=n[r+2]-e.z;c*c+l*l+u*u<o&&s++}s>=em?e.progress+=t/tm:e.progress=Math.max(0,e.progress-t),e.progress>=1&&(e.alive=!1,e.goneT=0,this.stats.foodEaten++,this.grow(`food`,e.x,e.y+.3,e.z,this.growth.food))}resetEdibles(){this.edibles=(this.level.meta.edibles??[]).map((e,t)=>{this.edibles.length&&this.level.resetBites(t);for(let n of this.level.bites[t].fills)this.level.setEnabled(e.boxes[n.index],!0);return{def:e,bites:this.level.bites[t],left:1,worth:Math.max(2,Math.round(e.volume*Qp*(e.weight??1))),given:0,gone:!1,goneT:0,biters:0,aim:[],aimRange:0,idleT:0,pruneT:0,eaten:0,credited:0,nearT:0,hull:sm(e.boxes.map(e=>this.level.boxes[e]))}}),this.biteT.fill(0)}updateEdibles(e){if(!this.edibles.length)return;let{pos:t,count:n}=this.swarm;this.swarm.gnawOn.fill(0),this.lockedHint=null;for(let r=0;r<n;r++){let n=r*10*3,i=Math.hypot(t[n]-this.lastHead[r*3],t[n+1]-this.lastHead[r*3+1],t[n+2]-this.lastHead[r*3+2]),[a,o,s]=this.swarm.target,c=Math.hypot(t[n]-a,t[n+1]-o,t[n+2]-s)>.8;this.stuckT[r]=this.swarm.following&&c&&i<.04?this.stuckT[r]+e:0,this.lastHead[r*3]=t[n],this.lastHead[r*3+1]=t[n+1],this.lastHead[r*3+2]=t[n+2]}let[r,i,a]=this.swarm.target,o=!1,s=this.humans.some(e=>e.state!==`eaten`&&e.state!==`escaped`&&Math.hypot(e.x-r,e.z-a)<Gp),c=-1;if(this.playerIdle&&this.rules?.goal.type===`district`){let e=this.swarm.centroid,t=Rp;this.edibles.forEach((n,r)=>{if(n.gone)return;let i=n.hull,a=Math.hypot(Math.max(i[0]-e[0],0,e[0]-i[1]),Math.max(i[4]-e[2],0,e[2]-i[5]));a<t&&(t=a,c=r)})}this.edibles.forEach((l,u)=>{if(l.biters=0,l.aim=[],l.gone){if(l.goneT+=e,this.respawn&&l.goneT>8&&this.swarmFar(l.def.base[0],l.def.base[2],2.5)){this.level.resetBites(u);for(let e of this.level.bites[u].fills)this.level.setEnabled(l.def.boxes[e.index],!0);Object.assign(l,{bites:this.level.bites[u],left:1,given:0,gone:!1,goneT:0,idleT:0,pruneT:0,eaten:0,credited:0,nearT:0}),o=!0,this.flowChanged=!0,this.fx.push({type:`gnawed`,index:u,x:l.def.base[0],y:l.def.base[1],z:l.def.base[2],color:l.def.color})}return}let d=l.def.boxes.map(e=>this.level.boxes[e]).filter(e=>e.solid!==!1),f=l.hull,p=(r>f[0]&&r<f[1]&&a>f[4]&&a<f[5]||i>.03)&&d.some(e=>Math.abs(r-e.c[0])<e.h[0]+Kp&&Math.abs(a-e.c[2])<e.h[2]+Kp&&i<e.c[1]+e.h[1]+1.2),m=l.bites,h=this.lockOf(l);if(h){(p&&!this.steerByKeys||u===c)&&(this.lockedHint=h);return}let g=u===c&&!(p&&!this.steerByKeys),_=p&&!s&&!this.steerByKeys||g,v=Math.max(1,Math.min(Up,Math.round(n/40),Math.ceil(l.def.volume/1.5))),y=this.swarm.centroid,b=_?g?m.aim(y[0],y[1],y[2],this.aimOut,v,Wp):m.aim(r,i,a,this.aimOut,v,Wp):0;if(_&&l.nearT<=0&&(l.nearT=pp,m.refreshNear()),l.nearT-=e,b){for(let e=0;e<b;e++)l.aim.push([this.aimOut[e*3],this.aimOut[e*3+1],this.aimOut[e*3+2]]);l.aimRange=Math.hypot(m.nx,m.nz)*m.cell*.5+1.5}let x=0,S=0;for(let r=0;r<n;r++){let n=r*10*3,i=t[n],a=t[n+1],o=t[n+2];if(_&&m.contains(i,a,o,fp)&&m.nearest(i,a,o,this.ctr)&&(this.swarm.gnawTo.set(this.ctr,r*3),this.swarm.gnawOn[r]=1),!m.contains(i,a,o)||!_&&this.stuckT[r]<=dp||(this.biteT[r]+=e*(.8+this.rand()*.4),this.biteT[r]<ap*this.mut.biteTime)||!m.nearestMaterial(i,a,o,cp,this.ctr))continue;this.biteT[r]=0,l.biters++;let s=(op+this.rand()*.03)*this.mut.biteR,[c,d,f]=this.ctr,p=(i+c)/2,h=(a+d)/2,g=(o+f)/2;l.eaten+=m.bite(p,h,g,s),S++,x<sp&&(x++,this.fx.push({type:`gnaw`,index:u,x:i,y:a,z:o,bx:c,by:d,bz:f,color:this.colorAt(l,c,d,f)}))}l.pruneT+=e;for(let e of m.fills)e.open||(m.coverLeft(e)<lp||_&&l.idleT>up)&&(e.open=!0,m.version++,this.level.setEnabled(l.def.boxes[e.index],!1),this.flowChanged=!0,l.nearT=0);if(_||S){if(S)l.idleT=0,m.settle(),l.pruneT>Xp&&(l.pruneT=0,m.prune());else if(l.idleT+=e,!(l.idleT>Jp&&m.left<Yp))return;l.left=m.left,this.flowChanged=!0,(l.left<=qp||!S)&&(this.markGone(l),o=!0),this.spawnCrumbs(u,m.takePieces(Bp)),this.giveWorms(l)}}),this.flowDirtyT+=e,this.flowChanged&&(this.flowDirtyT>.5||o)&&(this.flowChanged=!1,this.flowDirtyT=0,this.swarm.flow.invalidate()),o&&this.rebuildNav()}giveWorms(e){let t=e.bites,n=e.gone&&!this.crumbs.some(t=>t.edible===this.edibles.indexOf(e)),r=e.worth*this.mut.wormsMul,i=n?r:r*Math.min(e.eaten,t.insideTotal)/t.insideTotal;i>e.credited&&(this.wormMeter+=i-e.credited,e.credited=i),this.flushMeter(e)}flushMeter(e){if(this.rules?.goal.type===`district`){let t=Math.floor(this.wormMeter);t>0&&(this.wormMeter-=t,this.dna+=t*Np*this.dnaMul,this.dnaTotal+=t*Np*this.dnaMul,e&&(e.given+=t));return}let{pos:t,count:n}=this.swarm;for(;this.wormMeter>=1-1e-9;){--this.wormMeter,e&&e.given++;let r=e?this.biteWorm(e.bites,t,n):-1;r<0&&(r=Math.floor(this.rand()*this.swarm.count));let i=r*10*3;this.addWorm(r)||this.stats.overflow++,this.events.push({kind:`gnaw`,x:t[i],y:t[i+1],z:t[i+2],worms:1})}}gnawFloor(e){let t=this.floor;if(!t)return;let{pos:n,count:r}=this.swarm,i=0,a=0,o=kp*this.mut.biteR;for(let s=0;s<r;s++){if(this.swarm.gnawOn[s])continue;let r=s*10*3,c=n[r],l=n[r+1],u=n[r+2];if(l>Ap||(this.floorT[s]+=e*(.8+this.rand()*.4),this.floorT[s]<Op*this.mut.biteTime)||!t.solidAt(c,u))continue;this.floorT[s]=0;let d=t.bite(c,u,o);i+=d,d&&a<4&&(a++,this.fx.push({type:`gnaw`,index:-1,x:c,y:l,z:u,bx:c,by:.01,bz:u,color:this.floorColorAt(c,u)}))}i&&(this.wormMeter+=i*qd*qd*Dp*this.mut.wormsMul,this.flushMeter(null))}floorT=new Float32Array(2e3);litter=[];litterGrid=new Map;litterXp=0;scatterLitter(){let e=this.floor;if(!e)return;let t=new Float32Array(3),n=e.nx*qd,r=e.nz*qd;for(let i=0;this.litter.length<vp&&i<3e3;i++){let i=e.x0+.4+this.rand()*(n-.8),a=e.z0+.4+this.rand()*(r-.8);this.level.sdf(i,.6,a,t,0)<.29||this.litter.push({x:i,y:0,z:a,kind:Math.floor(this.rand()*yp),rot:this.rand()*Math.PI*2,alive:!0,goneT:0})}this.litter.forEach((e,t)=>{let n=cm(e.x,e.z),r=this.litterGrid.get(n)??[];r.push(t),this.litterGrid.set(n,r)})}eatLitter(e){if(!this.litter.length)return;for(let t of this.litter)t.alive||(t.goneT+=e,t.goneT>bp&&this.swarmFar(t.x,t.z,6)&&(t.alive=!0,t.goneT=0));let{pos:t,count:n}=this.swarm,[r,,i]=this.swarm.target,a=0,o=0;if(this.perks.has(`magnet`)){let e=this.swarm.centroid,t=Math.floor(e[0]),n=Math.floor(e[2]),r=0;for(let i=t-Fp;i<=t+Fp&&r<Ip;i++)for(let t=n-Fp;t<=n+Fp&&r<Ip;t++)for(let n of this.litterGrid.get(i*7919+t)??[]){let t=this.litter[n];if(!(!t.alive||Math.hypot(t.x-e[0],t.z-e[2])>Fp)&&(t.alive=!1,t.goneT=0,a++,this.fx.push({type:`gnaw`,index:-1,x:e[0],y:e[1]+.2,z:e[2],bx:t.x,by:.05,bz:t.z,color:wp[t.kind]}),++r>=Ip))break}}for(let e=0;e<n;e++){let n=e*10*3,s=t[n],c=t[n+1],l=t[n+2];if(c>.5)continue;let u=Math.floor(s),d=Math.floor(l),f=-1,p=1;for(let e=u-1;e<=u+1;e++)for(let t=d-1;t<=d+1;t++){let n=this.litterGrid.get(e*7919+t);if(n)for(let e of n){let t=this.litter[e];if(!t.alive)continue;let n=(t.x-s)**2+(t.z-l)**2;n<p&&(p=n,f=e)}}if(f<0)continue;let m=this.litter[f];p<xp*xp?(m.alive=!1,m.goneT=0,a++,o++<6&&this.fx.push({type:`gnaw`,index:-1,x:s,y:c,z:l,bx:m.x,by:.05,bz:m.z,color:wp[m.kind]})):!this.swarm.gnawOn[e]&&this.swarm.following&&Math.hypot(r-s,i-l)<3.5&&(this.swarm.gnawTo[e*3]=m.x,this.swarm.gnawTo[e*3+1]=.04,this.swarm.gnawTo[e*3+2]=m.z,this.swarm.gnawOn[e]=1)}a&&(this.stats.litterEaten+=a,this.litterXp+=a*Sp,this.wormMeter+=a*Cp*this.mut.wormsMul,this.flushMeter(null))}floorColorAt(e,t){for(let n of this.floorColors)if(Math.abs(e-n.c[0])<n.h[0]&&Math.abs(t-n.c[2])<n.h[2])return n.color??9078144;return 9078144}markGone(e){let t=e.bites;t.detachAll();for(let n of t.fills)this.level.setEnabled(e.def.boxes[n.index],!1);e.left=0,e.gone=!0,e.goneT=0,t.gone=!0}updateAbilities(e,t){for(let t of Object.keys(this.cooldown))this.cooldown[t]>0&&(this.cooldown[t]-=e);if(this.swarm.dashT>0&&this.ramLeft>0){let{pos:e,count:t}=this.swarm,n=0;this.edibles.forEach((r,i)=>{if(r.gone||this.lockOf(r))return;let a=r.bites;for(let i=0;i<t&&this.ramLeft>0&&n<mp;i++){let t=i*10*3;a.contains(e[t],e[t+1],e[t+2])&&a.nearestMaterial(e[t],e[t+1],e[t+2],gp,this.ctr)&&a.chip(this.ctr[0],this.ctr[1],this.ctr[2],hp*this.mut.biteR)&&(this.ramLeft--,n++,this.fx.push({type:`gnawed`,index:-1,x:this.ctr[0],y:this.ctr[1],z:this.ctr[2],color:this.colorAt(r,this.ctr[0],this.ctr[1],this.ctr[2])}))}n&&(r.left=a.left,this.flowChanged=!0,this.spawnCrumbs(i,a.takePieces(Bp)),r.left<=qp&&(this.markGone(r),this.rebuildNav()))})}this.perks.has(`queen`)&&this.swarm.count<this.visibleCap&&(this.queenT+=e,this.queenT>=Lp&&(this.queenT=0,this.addWorm(Math.floor(this.rand()*this.swarm.count))))}milestoneTick=0;wormMeter=0;spawnCrumbs(e,t){if(!t.length)return;let n=this.edibles[e].bites;for(let r of t){if(this.crumbs.length>=Vp){let t=null,i=1/0;for(let n of this.crumbs){if(n.edible!==e)continue;let a=(n.x-r.x)**2+(n.y-r.y)**2+(n.z-r.z)**2;a<i&&(i=a,t=n)}if(t){t.cells+=r.cells*(n.cell/t.cell)**3,t.size=om(t.cells,t.cell);continue}}this.crumbs.push({x:r.x,y:r.y,z:r.z,vy:0,size:om(r.cells,n.cell),cells:r.cells,cell:n.cell,edible:e,color:n.colors[r.part]??8947848,core:n.cores[r.part]??6710886,seed:this.rand(),pullT:0})}}fallCrumbs(e){let t=this.swarm.centroid,n=this.perks.has(`magnet`);for(let r of this.crumbs){if(n&&r.pullT<=0&&Math.hypot(t[0]-r.x,t[2]-r.z)<Fp&&Math.hypot(t[0]-r.x,t[2]-r.z)>.6&&(r.pullT=.3),r.pullT>0){r.pullT-=e;let n=t[0]-r.x,i=t[2]-r.z,a=Math.hypot(n,i);if(a>.4){let t=Math.min(a-.4,_p*e);r.x+=n/a*t,r.z+=i/a*t}r.y+=(.7-r.y)*Math.min(1,e*6),r.vy=0;continue}let i=this.level.sdf(r.x,r.y-r.size*.5,r.z,this.n3c,0);i>.005?(r.vy-=9.8*e,r.y+=Math.max(r.vy*e,-i)):(r.y-=i,r.vy=0)}}eatCrumbs(e){if(!this.crumbs.length)return;let{pos:t,count:n}=this.swarm,r=0;for(let i of this.crumbs){let a=i.size*.5+Hp,o=a*a,s=Math.max(1,4.2*.1**3/i.cell**3)*this.mut.crumbMul;for(let a=0;a<n&&i.cells>0;a++){let n=a*10*3,c=t[n]-i.x,l=t[n+1]-i.y,u=t[n+2]-i.z;if(c*c+l*l+u*u>o||(this.biteT[a]+=e*(.8+this.rand()*.4),this.biteT[a]<ap*this.mut.biteTime))continue;this.biteT[a]=0;let d=Math.min(i.cells,s);i.cells-=d;let f=this.edibles[i.edible];f&&(f.eaten+=d*(i.cell/f.bites.cell)**3),r<sp&&(r++,this.fx.push({type:`gnaw`,index:i.edible,x:t[n],y:t[n+1],z:t[n+2],bx:i.x,by:i.y,bz:i.z,color:this.rand()<.5?i.color:i.core}))}i.size=om(i.cells,i.cell)}let i=this.crumbs.length;if(this.crumbs=this.crumbs.filter(e=>e.cells>.5),this.crumbs.length!==i)for(let e of this.edibles)this.giveWorms(e)}n3c=new Float32Array(3);flowChanged=!1;flowDirtyT=0;ctr=[0,0,0];aimOut=[];stuckT=new Float32Array(2e3);lastHead=new Float32Array(6e3);biteT=new Float32Array(2e3);colorAt(e,t,n,r){let i=e.def.color,a=1/0;for(let o of e.def.boxes){let e=this.level.boxes[o];if(e.fill)continue;let s=Math.max(Math.abs(t-e.c[0])-e.h[0],Math.abs(n-e.c[1])-e.h[1],Math.abs(r-e.c[2])-e.h[2]);s<a&&(a=s,i=e.color??i)}return i}biteWorm(e,t,n){let r=0,i=-1;for(let a=0;a<n;a++){let n=a*10*3;e.contains(t[n],t[n+1],t[n+2],.2)&&(r++,this.rand()*r<1&&(i=a))}return i}swarmFar(e,t,n){let r=this.swarm.centroid;return Math.hypot(r[0]-e,r[2]-t)>n}grow(e,t,n,r,i,a){if(this.rules?.goal.type===`district`){this.wormMeter+=i*this.mut.wormsMul,this.flushMeter(null);return}let o=Math.max(0,this.visibleCap-this.swarm.count),s=this.swarm.spawnAt(Math.min(i,o),t,n,r,a?3:0);this.stats.overflow+=i-s,this.events.push({kind:e,x:t,y:n,z:r,worms:i,human:a?{id:a.id,kind:a.kind,heading:a.heading}:void 0})}syncSwarm(){let e=this.swarm,t=0,n=0;for(let r of this.humans)if(r.state!==`eaten`&&r.state!==`escaped`){if(t<16){let n=t*9,i=r.speed;e.bodies.set([r.x,Math.min(Tf,r.top-.05),r.z,r.x,r.top,r.z,wf,Math.sin(r.heading)*i,Math.cos(r.heading)*i],n),t++}if(n<32){let t=Math.min(r.top-.1,r.attached>=Ff?.5+.9*r.progress:1);e.attractors.set(e.dashT>0?[r.x,t,r.z,2.8,0]:[r.x,t,r.z,3,1],n*5),n++}}for(let t of this.edibles)for(let r of t.aim){if(n>=32)break;e.attractors.set([r[0],r[1],r[2],-t.aimRange,0],n*5),n++}let[r,,i]=e.target,a=this.humans.some(e=>e.state!==`eaten`&&e.state!==`escaped`&&Math.hypot(e.x-r,e.z-i)<Gp);if(this.crumbs.length&&!a&&!this.steerByKeys){let[t,,r]=e.target,i=this.edibles.map(e=>{let n=e.hull;return t>n[0]-1&&t<n[1]+1&&r>n[4]-1&&r<n[5]+1}),a=this.crumbs.map(e=>({c:e,d:(e.x-t)**2+(e.z-r)**2})).filter(e=>e.d<6.25||i[e.c.edible]).sort((e,t)=>e.d-t.d).slice(0,10);for(let{c:t}of a){if(n>=32)break;e.attractors.set([t.x,t.y,t.z,-4,0],n*5),n++}}for(let t of this.food)!t.alive||n>=32||(e.attractors.set([t.x,t.y+.05,t.z,3,.6],n*5),n++);let o=this.rules?.exit;this.phase===`won`&&o&&n<32&&(e.attractors.set([o.pos[0],o.pos[1],o.pos[2],100,0],n*5),n++),e.bodyCount=t,e.attractorCount=n}};function im(e,t){let n=t-e;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return n}function am(e,t,n){let r=t-e;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;return e+Math.max(-n,Math.min(n,r))}function om(e,t){return Math.max(.04,Math.min(.3,Math.cbrt(Math.max(0,e)*t**3)*1.15))}function sm(e){let t=[1/0,-1/0,1/0,-1/0,1/0,-1/0];for(let n of e)for(let e=0;e<3;e++)t[e*2]=Math.min(t[e*2],n.c[e]-n.h[e]),t[e*2+1]=Math.max(t[e*2+1],n.c[e]+n.h[e]);return t}function cm(e,t){return Math.floor(e)*7919+Math.floor(t)}var lm=class{group=new Tn;meshes=[];slots=[];scale=new Float32Array;m=new Xt;q=new Dt;e=new sn;p=new K;s=new K;rebuild(e){for(let e of this.meshes)this.group.remove(e),e.geometry.dispose(),e.material.dispose();this.meshes=[],this.slots=Array.from({length:wp.length},()=>[]),e.forEach((e,t)=>this.slots[e.kind].push(t)),this.scale=new Float32Array(e.length).fill(1);let t=[new ra(.035,.035,.22,8).rotateZ(Math.PI/2).translate(0,.035,0),new ra(.035,.035,.12,10).rotateZ(Math.PI/2).translate(0,.035,0),new oa(.07,0).scale(1.2,.5,1).translate(0,.03,0),new oa(.09,0).scale(1.4,.35,1.1).translate(0,.03,0),new ia(.08,.18,6).translate(0,.09,0),new ua(.06,8,6).scale(1.8,.45,.8).translate(0,.025,0)];this.slots.forEach((e,n)=>{let r=new xa({color:wp[n],roughness:n===0?.2:.7,metalness:n===1?.6:0}),i=new ki(t[n],r,Math.max(1,e.length));i.count=e.length,i.instanceMatrix.setUsage(Ve),this.group.add(i),this.meshes.push(i)}),this.update(e,0)}update(e,t){this.slots.forEach((n,r)=>{let i=this.meshes[r];i&&(n.forEach((n,r)=>{let a=e[n],o=+!!a.alive;this.scale[n]+=(o-this.scale[n])*Math.min(1,t*(a.alive?3:12)),t===0&&(this.scale[n]=o);let s=this.scale[n];this.e.set(0,a.rot,0),this.q.setFromEuler(this.e),this.p.set(a.x,a.y,a.z),this.s.setScalar(s<.02?0:s),this.m.compose(this.p,this.q,this.s),i.setMatrixAt(r,this.m)}),i.instanceMatrix.needsUpdate=!0)})}},um=class{group=new Tn;items=[];rebuild(e){for(let e of this.items)this.group.remove(e.sprite),e.sprite.material.map?.dispose(),e.sprite.material.dispose();this.items=[];for(let t of e){let e=t.def.req;if(!e)continue;let n=new $r(new zr({map:dm(`🔒 ${Ld.find(t=>t.id===e[0])?.icon??`?`}${e[1]}`),depthTest:!1,transparent:!0}));n.scale.set(.95,.42,1),n.position.set(t.def.base[0],t.hull[3]+.45,t.def.base[2]),n.renderOrder=20,this.group.add(n),this.items.push({sprite:n,e:t})}}update(e){for(let t of this.items)t.sprite.visible=!t.e.gone&&e.lockOf(t.e)!==null}};function dm(e){let t=document.createElement(`canvas`);t.width=128,t.height=56;let n=t.getContext(`2d`);n.fillStyle=`rgba(15, 18, 22, 0.82)`,n.beginPath(),n.roundRect(4,4,120,48,14),n.fill(),n.fillStyle=`#ffd34d`,n.font=`bold 30px system-ui, sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(e,64,30);let r=new Xi(t);return r.colorSpace=Fe,r}var fm=[4,9,16,26],pm=[[0,0],[1,0],[2,0],[2,1],[3,2]],mm=.6,hm=2,gm=.1,_m=7,vm=2,ym=4,bm=3,xm=14,Sm=4,Cm=1.8,wm=e=>e.kind===`guard`||e.kind===`flamer`,Tm=e=>e.state!==`eaten`&&e.state!==`escaped`,Em=class{game;def;rand;alarm=0;stage=0;news=[];civT=vm;fightT=0;huntT=0;eaten=0;escaped=0;flamersCalled=!1;constructor(e,t,n=Math.random){this.game=e,this.def=t,this.rand=n,e.growth={...t.growth},e.foodRespawn=t.foodRespawn,e.mods.burnMul*=Cm,e.director=this}get alarmFill(){let e=this.stage===0?0:fm[this.stage-1],t=fm[this.stage]??e+10;return Math.min(1,Math.max(0,(this.alarm-e)/(t-e)))}step(e){let t=this.game;if(t.phase!==`playing`)return;let n=t.stats.humansEaten-this.eaten,r=t.stats.humansEscaped-this.escaped;this.eaten+=n,this.escaped+=r,this.alarm+=n*mm+r*hm,r>0&&this.news.push(`Свидетель сбежал — тревога растёт`),t.humans.some(e=>wm(e)&&e.state===`fight`)||(this.alarm=Math.max(0,this.alarm-e*gm));let i=0;for(;i<fm.length&&this.alarm>=fm[i];)i++;i>this.stage?i>=3&&!this.flamersCalled?(this.flamersCalled=!0,this.news.push(`Вызвали огнемётчиков!`)):i===1?this.news.push(`Тревога! Едет полиция`):this.news.push(`Тревога растёт`):i===0&&this.stage>0&&this.news.push(`Всё стихло`),this.stage=i,t.pruneHumans(2.5),this.civT-=e,this.fightT-=e,this.huntT-=e,this.civT<=0&&(this.civT=vm,this.spawnCivilian()),this.fightT<=0&&(this.fightT=ym,this.spawnFighter()),this.huntT<=0&&(this.huntT=bm,this.hunt())}aliveCount(){return this.game.humans.filter(Tm).length}spawnCivilian(){let e=this.game;if(this.aliveCount()>=xm)return;let t=e.nav,n=this.reachable(),r=e.humans.filter(e=>Tm(e)&&!wm(e)),i=r.filter(e=>n[t.nearest(e.x,e.z)]).length,a=e.swarm.centroid,o=this.def.spawns.filter(e=>Math.hypot(e[0]-a[0],e[2]-a[2])>=_m),s;if(i<Sm)s=o.filter(e=>n[t.nearest(e[0],e[2])]);else if(r.length<this.def.civilians)s=o;else return;if(!s.length)return;let c=s[Math.floor(this.rand()*s.length)];e.addHuman(`resident`,c[0],c[2])}reachable(){let e=this.game.nav,t=this.game.swarm.centroid,n=new Uint8Array(e.size),r=[e.nearest(t[0],t[2])];n[r[0]]=1;for(let t=0;t<r.length;t++)for(let i of e.adj[r[t]])n[i]||(n[i]=1,r.push(i));return n}spawnFighter(){let e=this.game,[t,n]=pm[this.stage],r=e.humans.filter(e=>Tm(e)&&wm(e)),i=r.filter(e=>e.kind===`guard`).length,a=r.length-i<n?`flamer`:i<t?`guard`:null;if(!a||this.aliveCount()>=xm)return;let o=e.swarm.centroid,s=e.nav,c=s.nearest(o[0],o[2]),l=e.level.meta.doors.filter(e=>Math.hypot(e[0]-o[0],e[2]-o[2])>=6).sort((e,t)=>Math.hypot(e[0]-o[0],e[2]-o[2])-Math.hypot(t[0]-o[0],t[2]-o[2]));for(let t of l){if(!s.path(s.nearest(t[0],t[2]),[c]))continue;let n=e.addHuman(a,t[0],t[2]);e.sendTo(n,o[0],o[2]);return}}hunt(){let e=this.game,t=e.swarm.centroid;for(let n of e.humans)!wm(n)||n.state!==`idle`&&n.state!==`wander`||Math.hypot(n.homeX-t[0],n.homeZ-t[2])<2||e.sendTo(n,t[0],t[2])}},Dm=600,Om=class{h;root;count;slider;shown=-1;constructor(e,t){this.h=t,this.root=document.createElement(`div`),this.root.className=`sandbox hidden`,this.root.innerHTML=`
      <button class="sb-head" data-toggle>Стенд <span>▾</span></button>
      <div class="sb-body">
        <div class="sb-row">
          <span>Червей</span>
          <input class="sb-num" type="number" min="1" max="${Dm}" step="1" data-num />
        </div>
        <input class="sb-slider" type="range" min="1" max="${Dm}" step="1" data-slider />
        <div class="sb-btns">
          <button data-add="-10">−10</button><button data-add="10">+10</button>
          <button data-mul="0.5">½</button><button data-mul="2">×2</button>
          <button data-set="150">150</button>
        </div>
        <div class="sb-label">Поставить перед роем</div>
        <div class="sb-btns">
          <button data-human="scientist">Учёный</button>
          <button data-human="resident">Жилец</button>
          <button data-human="guard">Охранник</button>
          <button data-human="flamer">Огнемётчик</button>
        </div>
        <div class="sb-btns"><button data-clear>Убрать всех людей</button></div>
        <label class="sb-check"><input type="checkbox" data-inv /> Бессмертие роя</label>
        <label class="sb-check"><input type="checkbox" data-resp checked /> Люди и еда возрождаются</label>
        <div class="sb-btns">
          <button data-reset>Сброс стенда</button>
          <button data-exit>В Гнездо</button>
        </div>
      </div>`,this.root.addEventListener(`pointerdown`,e=>e.stopPropagation()),this.root.addEventListener(`keydown`,e=>e.stopPropagation()),e.append(this.root),this.count=this.root.querySelector(`[data-num]`),this.slider=this.root.querySelector(`[data-slider]`);let n=e=>{let n=Math.max(1,Math.min(Dm,Math.round(e)));t.setWorms(n),this.sync(!0)};this.slider.addEventListener(`input`,()=>n(Number(this.slider.value))),this.count.addEventListener(`change`,()=>n(Number(this.count.value))),this.root.querySelectorAll(`[data-add]`).forEach(e=>e.addEventListener(`click`,()=>n(t.getWorms()+Number(e.dataset.add)))),this.root.querySelectorAll(`[data-mul]`).forEach(e=>e.addEventListener(`click`,()=>n(t.getWorms()*Number(e.dataset.mul)))),this.root.querySelectorAll(`[data-set]`).forEach(e=>e.addEventListener(`click`,()=>n(Number(e.dataset.set)))),this.root.querySelectorAll(`[data-human]`).forEach(e=>e.addEventListener(`click`,()=>t.addHuman(e.dataset.human))),this.root.querySelector(`[data-clear]`).addEventListener(`click`,t.clearHumans),this.root.querySelector(`[data-inv]`).addEventListener(`change`,e=>t.setInvulnerable(e.target.checked)),this.root.querySelector(`[data-resp]`).addEventListener(`change`,e=>t.setRespawn(e.target.checked)),this.root.querySelector(`[data-reset]`).addEventListener(`click`,t.reset),this.root.querySelector(`[data-exit]`).addEventListener(`click`,t.exit),this.root.querySelector(`[data-toggle]`).addEventListener(`click`,()=>this.root.classList.toggle(`folded`))}show(){this.root.classList.remove(`hidden`),this.sync(!0)}hide(){this.root.classList.add(`hidden`)}sync(e=!1){let t=this.h.getWorms();(t!==this.shown||e)&&(this.shown=t,this.slider.value=String(t),document.activeElement!==this.count&&(this.count.value=String(t)))}},km=[.85,1,1,1,.96,.9,.8,.68,.54,.4],Am=class{mesh;silhouette;geo;aStart;aEnd;aTint;lerped;segs=9;mat;pulse={value:new Gt(0,-100,0,0)};thick={value:1};constructor(e,t,n){let r=n===`low`?new ta(1,1,2,6):new ta(1,1,3,8),i=new uo;i.index=r.index,i.setAttribute(`position`,r.getAttribute(`position`)),i.setAttribute(`normal`,r.getAttribute(`normal`));let a=e*this.segs;this.aStart=new xi(new Float32Array(a*3),3),this.aEnd=new xi(new Float32Array(a*3),3),this.aStart.setUsage(Ve),this.aEnd.setUsage(Ve);let o=new Float32Array(a*2),s=t*1.15;for(let e=0;e<a;e++){let t=e%this.segs;o[e*2]=km[t]*s,o[e*2+1]=km[t+1]*s}this.aTint=new xi(new Float32Array(a*3),3),i.setAttribute(`aStart`,this.aStart),i.setAttribute(`aEnd`,this.aEnd),i.setAttribute(`aRad`,new xi(o,2)),i.setAttribute(`aTint`,this.aTint),i.instanceCount=0,this.geo=i;let c=new xa({color:12865628,roughness:.22,metalness:0,envMapIntensity:1.2}),l=e=>{e.uniforms.uPulse=this.pulse,e.uniforms.uThick=this.thick,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec3 aStart;
attribute vec3 aEnd;
attribute vec2 aRad;
attribute vec3 aTint;
uniform vec4 uPulse;
uniform float uThick;
varying vec3 vTint;`).replace(`#include <beginnormal_vertex>`,`vec3 wAxis = aEnd - aStart;
float wLen = length(wAxis);
wAxis = wLen > 1e-5 ? wAxis / wLen : vec3(0.0, 1.0, 0.0);
vec3 wRef = abs(wAxis.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
vec3 wU = normalize(cross(wRef, wAxis));
vec3 wW = cross(wU, wAxis); // правый базис: иначе треугольники вывернуты
vec3 objectNormal = wU * normal.x + wAxis * normal.y + wW * normal.z;
vTint = aTint;`).replace(`#include <begin_vertex>`,`float wT = position.y > 0.0 ? 1.0 : 0.0;
vec3 wC = mix(aStart, aEnd, wT);
vec3 wPd = wC - uPulse.xyz;
float wR = mix(aRad.x, aRad.y, wT) * uThick * (1.0 + uPulse.w * exp(-dot(wPd, wPd) * 1.2));
float wOff = position.y - (wT > 0.5 ? 0.5 : -0.5);
vec3 transformed = wC + (wU * position.x + wAxis * wOff + wW * position.z) * wR;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vTint;`).replace(`#include <color_fragment>`,`#include <color_fragment>
diffuseColor.rgb *= vTint;`)};c.onBeforeCompile=l,this.mat=c,this.mesh=new Y(i,c),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2;let u=new xa({depthFunc:6,depthWrite:!1,blending:5,blendEquation:100,blendSrc:200,blendDst:202,stencilWrite:!0,stencilRef:1,stencilFunc:517,stencilZPass:ze,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-400});u.onBeforeCompile=e=>{l(e),e.fragmentShader=e.fragmentShader.replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
// рентген: тёмная розоватая тень с косой штриховкой — сразу видно, что
// черви за стенкой, а не на ней
float sHatch = step(0.5, fract((gl_FragCoord.x + gl_FragCoord.y) / 9.0));
gl_FragColor = vec4(vec3(0.62, 0.42, 0.48) * mix(0.75, 1.0, sHatch), 1.0);`)},u.customProgramCacheKey=()=>`worm-silhouette`,this.silhouette=new Y(i,u),this.silhouette.frustumCulled=!1,this.silhouette.renderOrder=1,this.lerped=new Float32Array(e*10*3)}setSkin(e){this.mat.color.setHex(e.color),this.mat.roughness=e.roughness,this.mat.metalness=e.metalness,this.mat.emissive.setHex(e.emissive),this.mat.emissiveIntensity=e.emissiveIntensity}gulp(e,t,n){this.pulse.value.set(e,t,n,.6)}setThickness(e){this.thick.value=e}tick(e){this.pulse.value.w*=Math.exp(-e*7)}update(e,t){let n=e.count*10*3,{pos:r,snap:i,tint:a,heat:o}=e,s=this.lerped;for(let e=0;e<n;e++)s[e]=i[e]+(r[e]-i[e])*t;let c=this.aStart.array,l=this.aEnd.array,u=this.aTint.array,d=0;for(let t=0;t<e.count;t++){let e=1-.75*o[t],n=a[t*3]*e,r=a[t*3+1]*e*e,i=a[t*3+2]*e*e;for(let e=0;e<this.segs;e++,d++){let a=(t*10+e)*3,o=d*3;c[o]=s[a],c[o+1]=s[a+1],c[o+2]=s[a+2],l[o]=s[a+3],l[o+1]=s[a+4],l[o+2]=s[a+5];let f=e===0?.8:1;u[o]=n*f,u[o+1]=r*f,u[o+2]=i*f}}for(let e of[this.aStart,this.aEnd,this.aTint])e.clearUpdateRanges(),e.addUpdateRange(0,d*3),e.needsUpdate=!0;this.geo.instanceCount=d}};function jm(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Or;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Mm(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Mm(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Mm(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new pr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Nm(e){let t=new Tn,n=[],r=e.boxes.find(e=>e.kind===`floor`);if(r){let i=r.h[0]*2,a=r.h[2]*2,o=e.meta.location,s=o===`house`?Fm():o===`street`?Im():Lm(),c=o===`house`?2:o===`street`?1.5:1;s.repeat.set(i/c,a/c);let l=new Y(new ca(i,a),new xa({map:s,roughness:.55,metalness:0}));l.rotation.x=-Math.PI/2,l.position.set(r.c[0],r.c[1]+r.h[1],r.c[2]),t.add(l),n.push(l)}let i=[],a=new J;for(let t of e.boxes){if(t.kind===`floor`||t.kind===`door`||t.kind===`grate`||t.visible===!1||t.gnaw)continue;let e=new ea(t.h[0]*2,t.h[1]*2,t.h[2]*2);e.translate(t.c[0],t.c[1],t.c[2]),a.setHex(t.color??8947848);let n=e.getAttribute(`position`).count,r=new Float32Array(n*3),o=e.getAttribute(`normal`);for(let e=0;e<n;e++){let t=o.getY(e),n=t>.5?1.08:t<-.5?.6:.9;r[e*3]=a.r*n,r[e*3+1]=a.g*n,r[e*3+2]=a.b*n}e.setAttribute(`color`,new pr(r,3)),e.deleteAttribute(`uv`),i.push(e)}if(i.length){let e=new Y(jm(i),new xa({vertexColors:!0,roughness:.7,metalness:.05}));t.add(e),n.push(e)}let o=e.boxes.filter(e=>e.kind===`grate`);if(o.length){let e=new xa({map:Pm(),alphaTest:.5,roughness:.5,metalness:.6,side:2});for(let n of o){let r=new Y(new ea(n.h[0]*2,n.h[1]*2,n.h[2]*2),e);r.position.set(n.c[0],n.c[1],n.c[2]),t.add(r)}}return{group:t,pickables:n}}function Pm(){let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`);n.clearRect(0,0,64,64),n.fillStyle=`#9aa4aa`;for(let e=0;e<64;e+=16)n.fillRect(e,0,5,64);n.fillRect(0,0,64,4),n.fillRect(0,60,64,4);let r=new Xi(t);return r.wrapS=r.wrapT=e,r.repeat.set(3,1),r.colorSpace=Fe,r}function Fm(){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=[`#7a5434`,`#835c3a`,`#6f4b2e`,`#8a6340`];for(let e=0;e<8;e++){let t=e%2*64;for(let i=-t;i<256;i+=128)n.fillStyle=r[(e*3+Math.floor((i+t)/128))%r.length],n.fillRect(i,e*32,128,32),n.fillStyle=`rgba(30,18,10,0.55)`,n.fillRect(i,e*32,2,32);n.fillStyle=`rgba(30,18,10,0.45)`,n.fillRect(0,e*32,256,2)}let i=new Xi(t);return i.wrapS=i.wrapT=e,i.colorSpace=Fe,i.anisotropy=4,i}function Im(){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`);n.fillStyle=`#2a2c2e`,n.fillRect(0,0,256,256);let r=[`#5d6062`,`#646769`,`#585b5d`,`#6a6c6d`];for(let e=0;e<2;e++)for(let t=0;t<2;t++)n.fillStyle=r[e*2+t],n.fillRect(t*128+2,e*128+2,124,124);for(let e=0;e<900;e++)n.fillStyle=Math.random()<.5?`rgba(0,0,0,0.12)`:`rgba(255,255,255,0.06)`,n.fillRect(Math.random()*256,Math.random()*256,2,2);let i=new Xi(t);return i.wrapS=i.wrapT=e,i.colorSpace=Fe,i.anisotropy=4,i}function Lm(){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`);n.fillStyle=`#1f2528`,n.fillRect(0,0,256,256);let r=[[`#8e9a97`,`#84908d`],[`#899592`,`#93a09c`]];for(let e=0;e<2;e++)for(let t=0;t<2;t++)n.fillStyle=r[e][t],n.fillRect(t*128+3,e*128+3,122,122);let i=new Xi(t);return i.wrapS=i.wrapT=e,i.colorSpace=Fe,i.anisotropy=4,i}var Rm=2.05,zm=class{group=new Tn;rigs=[];mats={coat:new xa({color:15331056,roughness:.8}),pants:new xa({color:3094340,roughness:.9}),skin:new xa({color:14856332,roughness:.7}),hair:new xa({color:3811872,roughness:.9}),glasses:new xa({color:1777444,roughness:.4}),uniform:new xa({color:2899548,roughness:.8}),shirts:[5210040,6986330,10111578,13146698].map(e=>new xa({color:e,roughness:.85})),jeans:new xa({color:3820906,roughness:.9}),cap:new xa({color:1713206,roughness:.7}),gun:new xa({color:1382170,roughness:.4,metalness:.5}),suit:new xa({color:14712874,roughness:.7}),tank:new xa({color:12071466,roughness:.4,metalness:.3}),visor:new xa({color:2240568,roughness:.15,metalness:.4}),flame:new oi({color:16734736,transparent:!0,opacity:.4,depthWrite:!1,blending:2,side:2})};geo={leg:new ta(.085,.55,2,8).translate(0,-.36,0),torso:new ta(.22,.42,3,10),coatTail:new ra(.23,.27,.35,10),arm:new ta(.065,.45,2,8).translate(0,-.28,0),head:new ua(.14,12,10),hair:new ua(.145,12,6,0,Math.PI*2,0,Math.PI*.45),glasses:new ea(.2,.04,.03),cap:new ra(.15,.15,.08,12),visorCap:new ea(.18,.02,.12),gun:new ea(.07,.1,.4),tank:new ta(.11,.35,3,10),nozzle:new ra(.035,.05,.55,8).rotateX(Math.PI/2),mask:new ea(.24,.12,.05),flame:new ia(Math.tan(Zf)*Xf,Xf,16,1,!0).rotateX(-Math.PI/2).translate(0,0,Xf/2)};barMats={bg:new zr({color:1316892,transparent:!0,opacity:.75,depthTest:!1}),fill:new zr({color:16732010,depthTest:!1}),alert:new zr({map:Bm(),depthTest:!1,transparent:!0})};outfit(e,t){let n=this.mats,r=e===`guard`?n.uniform:e===`flamer`?n.suit:e===`resident`?n.shirts[t%n.shirts.length]:n.coat,i=e===`resident`?n.jeans:e===`flamer`?n.suit:n.pants;return{top:r.color.getHex(),bottom:i.color.getHex(),hat:e===`guard`?n.cap.color.getHex():e===`flamer`?n.tank.color.getHex():null}}rebuild(e){for(let e of this.rigs)this.group.remove(e.root);this.rigs=e.map(e=>this.makeRig(e.kind,e.id));for(let e of this.rigs)this.group.add(e.root)}makeRig(e,t){let{mats:n,geo:r}=this,i=e===`guard`?n.uniform:e===`flamer`?n.suit:e===`resident`?n.shirts[t%n.shirts.length]:n.coat,a=new Tn,o=new Tn;a.add(o);let s=e===`resident`?n.jeans:n.pants,c=new Y(r.leg,s),l=new Y(r.leg,s);c.position.set(-.1,.8,0),l.position.set(.1,.8,0);let u=new Y(r.torso,i);u.position.y=1.15;let d=new Y(r.coatTail,e===`scientist`?i:s);d.position.y=.82;let f=new Y(r.arm,i),p=new Y(r.arm,i);f.position.set(-.29,1.42,0),p.position.set(.29,1.42,0);let m=new Y(r.head,n.skin);m.position.y=1.66;let h=new Y(r.hair,n.hair);h.position.y=1.67,h.rotation.x=-.25;let g=new Y(r.glasses,n.glasses);g.position.set(0,1.68,.13),o.add(c,l,u,d,f,p,m);let _=null;if(e===`scientist`)o.add(h,g);else if(e===`resident`)o.add(h);else if(e===`guard`){let e=new Y(r.cap,n.cap);e.position.y=1.77;let t=new Y(r.visorCap,n.cap);t.position.set(0,1.74,.14);let i=new Y(r.gun,n.gun);i.position.set(.12,1.25,.3),o.add(e,t,i)}else{let e=new Y(r.tank,n.tank);e.position.set(0,1.15,-.28);let t=new Y(r.nozzle,n.gun);t.position.set(.1,1.1,.4);let i=new Y(r.mask,n.visor);i.position.set(0,1.68,.12),_=new Y(r.flame,n.flame),_.position.set(.1,1.1,.65),_.visible=!1,o.add(e,t,i,_)}let v=new $r(this.barMats.bg);v.scale.set(.64,.1,1),v.position.y=Rm,v.renderOrder=10;let y=new $r(this.barMats.fill);y.center.set(0,.5),y.position.set(-.6/2,Rm,0),y.scale.set(.001,.06,1),y.renderOrder=11;let b=new $r(this.barMats.alert);return b.scale.set(.35,.35,1),b.position.y=2.15,b.renderOrder=12,a.add(v,y,b),v.visible=y.visible=!1,{root:a,body:o,legL:c,legR:l,armL:f,armR:p,barBg:v,barFill:y,alert:b,flame:_,phase:Math.random()*10,pose:0}}update(e,t){e.forEach((e,n)=>{let r=this.rigs[n];if(!r)return;if(e.state===`escaped`){r.root.visible=!1;return}if(r.root.visible=!0,r.root.position.set(e.x,0,e.z),r.body.rotation.y=e.heading,e.state===`eaten`){let t=Math.min(1,e.t/.18);r.body.scale.set(1+t*.4,Math.max(.05,1-t),1+t*.4),r.alert.visible=!1,r.flame&&(r.flame.visible=!1),t>=1&&(r.root.visible=!1);return}if(r.body.scale.setScalar(1),r.body.rotation.x=0,e.state===`hidden`){r.body.scale.set(1,.72,1),r.legL.rotation.x=r.legR.rotation.x=-.9,r.armL.rotation.set(Math.PI-.6,0,-.6),r.armR.rotation.set(Math.PI-.6,0,.6),r.body.position.x=(Math.random()-.5)*.02,r.body.position.y=0,r.alert.visible=!1;return}let i=e.progress<.35?0:e.progress<.75?1:2;if(r.pose+=(i-r.pose)*Math.min(1,t*6),r.pose>.05){r.phase+=t*9;let e=Math.min(1,r.pose),n=Math.max(0,r.pose-1),i=Math.sin(r.phase*1.3);r.body.position.y=-.42*e-.25*n,r.body.rotation.x=-1.25*n,r.legL.rotation.x=r.legR.rotation.x=-1.45*e,r.armL.rotation.set(Math.PI-.4+i*.4*(1-n),0,-.3-.6*n),r.armR.rotation.set(Math.PI-.2-i*.3,0,.25+i*.15*n),r.body.position.x=(Math.random()-.5)*.05,r.alert.visible=!1,r.flame&&(r.flame.visible=!1);return}r.body.position.y=0;let a=e.state===`alert`||e.state===`flee`;r.phase+=t*(2+e.speed*6);let o=Math.min(1,e.speed/.8)*.7,s=Math.sin(r.phase);r.legL.rotation.x=s*o,r.legR.rotation.x=-s*o;let c=e.state===`fight`;if(c)r.armL.rotation.set(-1.35,0,.35),r.armR.rotation.set(-1.45,0,-.1);else if(e.shookT<.35){let t=1-e.shookT/.35;r.armL.rotation.set(-.9*t,0,.5*t),r.armR.rotation.set(-.9*t,0,-.5*t),r.legL.rotation.x=.6*t}else if(a||e.attached>0){let e=Math.sin(r.phase*1.7)*.35;r.armL.rotation.set(Math.PI-.3+e,0,-.25),r.armR.rotation.set(Math.PI-.3-e,0,.25)}else r.armL.rotation.set(-s*o*.8,0,.08),r.armR.rotation.set(s*o*.8,0,-.08);let l=e.attached>0?Math.min(1,e.attached/40)*.04:0;if(r.body.position.x=(Math.random()-.5)*l,r.alert.visible=e.attached===0&&(e.state===`alert`||(e.state===`flee`||c)&&e.t<1.2),r.flame&&(r.flame.visible=e.firing,e.firing)){let e=.85+Math.random()*.25;r.flame.scale.set(e,e,.9+Math.random()*.15)}})}};function Bm(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#ffd34d`,t.strokeStyle=`#1b1b1b`,t.lineWidth=6,t.font=`bold 56px system-ui, sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.strokeText(`!`,32,34),t.fillText(`!`,32,34);let n=new Xi(e);return n.colorSpace=Fe,n}var Vm=class{mesh;m=new Xt;q=new Dt;e=new sn;p=new K;s=new K;t=0;constructor(e){let t=new sa(.13,1),n=new xa({color:6283322,emissive:3719210,emissiveIntensity:1.3,roughness:.25,transparent:!0,opacity:.92});this.mesh=new ki(t,n,e),this.mesh.count=0,this.mesh.instanceMatrix.setUsage(Ve)}update(e,t){this.t+=t,this.mesh.count=e.length,e.forEach((e,t)=>{let n=1;e.alive||(n=Math.max(0,1-e.goneT/.25));let r=1+Math.sin(this.t*3+t*1.7)*.08,i=1-e.progress*.35,a=n*r*i;this.e.set(this.t*.6+t,this.t*.4+t*2,0),this.q.setFromEuler(this.e),this.p.set(e.x,e.y+.1+Math.sin(this.t*2+t)*.02,e.z),this.s.set(a,a*.8,a),this.m.compose(this.p,this.q,this.s),this.mesh.setMatrixAt(t,this.m)}),this.mesh.instanceMatrix.needsUpdate=!0}},Hm=class{group=new Tn;ring;ringMat;t=0;constructor(e,t){let n=new Float32Array(3),r=e.pos;t.sdfExact(r[0]+.01,r[1]+.05,r[2]+.01,n,0);let i=new K(n[0],n[1],n[2]).normalize();this.group.position.set(r[0],r[1],r[2]).addScaledVector(i,.012),this.group.quaternion.setFromUnitVectors(new K(0,0,1),i);let a=e.radius*.55,o=new xa({color:790288,roughness:.9}),s=new xa({color:7305856,roughness:.45,metalness:.6}),c=new Y(new na(a,24),o),l=new Y(new la(a,a*1.15,24),s);l.position.z=.002,this.group.add(c,l);for(let e=-2;e<=2;e++){let t=new Y(new ea(Math.sqrt(Math.max(0,a*a-(e*a*.36)**2))*2,a*.09,.02),s);t.position.set(0,e*a*.36,.01),this.group.add(t)}this.ringMat=new oi({color:7208842,transparent:!0,opacity:.6,depthWrite:!1,blending:2}),this.ring=new Y(new la(e.radius*.92,e.radius,40),this.ringMat),this.ring.position.z=.006,this.group.add(this.ring)}update(e,t){this.t+=e;let n=1+Math.sin(this.t*4)*.06;this.ring.scale.setScalar(n),this.ringMat.opacity=.35+.25*Math.sin(this.t*4)*.5+.4*t,this.ringMat.color.setHSL(.36-.1*t,1,.55+.15*t)}dispose(){this.group.traverse(e=>{e instanceof Y&&e.geometry.dispose()})}},Um=16,Wm=48,Gm=96,Km=64,qm=128,Jm=.22,Ym=class{group=new Tn;tracerPos=new Float32Array(96);tracerLife=new Float32Array(Um);tracerGeo=new Or;tracerMat=new Ii({color:16773536,transparent:!0,opacity:.9,blending:2,depthWrite:!1});nextTracer=0;puffs=[];nextPuff=0;puffTex=Xm();flashes=[];scraps;scrapPos=new Float32Array(288);scrapVel=new Float32Array(288);scrapRot=new Float32Array(288);scrapLife=new Float32Array(Gm);nextScrap=0;sm=new Xt;sq=new Dt;se=new sn;sv=new K;ss=new K;scol=new J;debrisMesh;debris=Array.from({length:Km},()=>({p:new K,v:new K,r:new K,w:new K,size:0,life:0}));nextDebris=0;morselMesh;morselPath=new Float32Array(768);morselT=new Float32Array(qm).fill(2);nextMorsel=0;constructor(){this.debrisMesh=new ki(new oa(.5,0),new xa({roughness:.85,flatShading:!0}),Km),this.debrisMesh.frustumCulled=!1,this.group.add(this.debrisMesh),this.morselMesh=new ki(new oa(.5,0),new xa({roughness:.8,flatShading:!0}),qm),this.morselMesh.frustumCulled=!1,this.group.add(this.morselMesh),this.scraps=new ki(new ea(.09,.012,.07),new xa({roughness:.9,side:2}),Gm),this.scraps.frustumCulled=!1,this.sm.makeScale(0,0,0);for(let e=0;e<Gm;e++)this.scraps.setMatrixAt(e,this.sm),this.scraps.setColorAt(e,this.scol.setHex(16777215));this.group.add(this.scraps),this.sm.makeScale(0,0,0);for(let e=0;e<qm;e++)this.morselMesh.setMatrixAt(e,this.sm),this.morselMesh.setColorAt(e,this.scol.setHex(16777215));for(let e=0;e<Km;e++)this.debrisMesh.setMatrixAt(e,this.sm),this.debrisMesh.setColorAt(e,this.scol.setHex(16777215));this.tracerGeo.setAttribute(`position`,new pr(this.tracerPos,3).setUsage(Ve));let e=new Ji(this.tracerGeo,this.tracerMat);e.frustumCulled=!1,this.group.add(e);for(let e=0;e<Wm;e++){let e=new $r(new zr({map:this.puffTex,transparent:!0,depthWrite:!1}));e.visible=!1,this.group.add(e),this.puffs.push({sprite:e,life:0,max:1,vy:0})}for(let e=0;e<4;e++){let e=new $r(new zr({map:this.puffTex,color:16765024,transparent:!0,depthWrite:!1,blending:2}));e.visible=!1,this.group.add(e),this.flashes.push({sprite:e,life:0,max:.06,vy:0})}}push(e){for(let t of e)if(t.type===`shot`){let e=this.nextTracer++%Um;this.tracerPos.set([t.fx,t.fy,t.fz,t.tx,t.ty,t.tz],e*6),this.tracerLife[e]=.07;let n=this.flashes.find(e=>e.life<=0)??this.flashes[0];n.life=n.max,n.sprite.position.set(t.fx,t.fy,t.fz),n.sprite.scale.setScalar(.35),n.sprite.visible=!0}else if(t.type===`death`){let e=this.puffs[this.nextPuff++%Wm],n=t.cause===`fire`;e.max=e.life=n?.7:.45,e.vy=n?.9:.4,e.sprite.position.set(t.x,t.y+.05,t.z);let r={shot:12107960,fire:3811874,shock:10475775,acid:10157914}[t.cause];e.sprite.material.color.setHex(r),e.sprite.visible=!0}}chips(e,t,n,r,i=3){this.burst(e,t,n,[r],i,.5,!1)}burst(e,t,n,r,i=18,a=1,o=!0){for(let s=0;s<i;s++){let i=this.nextScrap++%Gm,c=Math.random()*Math.PI*2,l=(1.2+Math.random()*1.8)*a;this.scrapPos.set([e+Math.cos(c)*.15,t+Math.random()*.3,n+Math.sin(c)*.15],i*3),this.scrapVel.set([Math.cos(c)*l,(2.5+Math.random()*2.5)*a,Math.sin(c)*l],i*3),this.scrapRot.set([Math.random()*6,Math.random()*6,Math.random()*6],i*3),this.scrapLife[i]=(1.1+Math.random()*.5)*(o?1:.7),this.scraps.setColorAt(i,this.scol.setHex(r[s%r.length]))}if(this.scraps.instanceColor&&(this.scraps.instanceColor.needsUpdate=!0),o)for(let r=0;r<3;r++){let i=this.puffs[this.nextPuff++%Wm];i.max=i.life=.6+r*.15,i.vy=.5,i.sprite.position.set(e+(Math.random()-.5)*.4,t+.1,n+(Math.random()-.5)*.4),i.sprite.material.color.setHex(14272944),i.sprite.visible=!0}}morsel(e,t,n,r,i,a,o){let s=this.nextMorsel++%qm,c=s*6;this.morselPath.set([e,t,n,r,i,a],c),this.morselT[s]=0,this.morselMesh.setColorAt(s,this.scol.setHex(o)),this.morselMesh.instanceColor&&(this.morselMesh.instanceColor.needsUpdate=!0)}crumble(e,t=22){let n=e.filter(e=>e.h[0]*e.h[1]*e.h[2]>.001);if(n.length){for(let e=0;e<t;e++){let t=n[e%n.length],r=this.debris[this.nextDebris++%Km];r.p.set(t.c[0]+(Math.random()*2-1)*t.h[0],t.c[1]+(Math.random()*2-1)*t.h[1],t.c[2]+(Math.random()*2-1)*t.h[2]),r.v.set((r.p.x-t.c[0])*2.5+(Math.random()-.5),1.5+Math.random()*2.5,(r.p.z-t.c[2])*2.5+(Math.random()-.5)),r.r.set(Math.random()*6,Math.random()*6,Math.random()*6),r.w.set((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12),r.size=.1+Math.random()*.16,r.life=1.3+Math.random()*.5,this.scol.setHex(t.color??8947848),Math.random()<.4&&this.scol.multiplyScalar(.5),this.debrisMesh.setColorAt(this.debris.indexOf(r),this.scol)}this.debrisMesh.instanceColor&&(this.debrisMesh.instanceColor.needsUpdate=!0)}}update(e){let t=!1;for(let n=0;n<qm;n++){let r=this.morselT[n];if(r>1.5)continue;t=!0;let i=this.morselT[n]=r+e/Jm;if(i>=1){this.morselT[n]=2,this.sm.makeScale(0,0,0),this.morselMesh.setMatrixAt(n,this.sm);continue}let a=n*6,o=this.morselPath,s=i*i;this.sv.set(o[a]+(o[a+3]-o[a])*s,o[a+1]+(o[a+4]-o[a+1])*s+Math.sin(i*Math.PI)*.04,o[a+2]+(o[a+5]-o[a+2])*s),this.sq.setFromEuler(this.se.set(i*9+n,i*7,n)),this.sm.compose(this.sv,this.sq,this.ss.setScalar(.06*(1-.75*s))),this.morselMesh.setMatrixAt(n,this.sm)}t&&(this.morselMesh.instanceMatrix.needsUpdate=!0);let n=!1;this.debris.forEach((t,r)=>{if(t.life<=0)return;n=!0,t.life-=e,t.v.y-=9.8*e,t.p.addScaledVector(t.v,e);let i=t.size*.4;t.p.y<i&&(t.p.y=i,t.v.set(t.v.x*.5,Math.abs(t.v.y)*.2,t.v.z*.5),t.w.multiplyScalar(.6)),t.r.addScaledVector(t.w,e);let a=t.life<=0?0:t.size*Math.min(1,t.life/.4);this.sq.setFromEuler(this.se.set(t.r.x,t.r.y,t.r.z)),this.sm.compose(t.p,this.sq,this.ss.setScalar(a)),this.debrisMesh.setMatrixAt(r,this.sm)}),n&&(this.debrisMesh.instanceMatrix.needsUpdate=!0);let r=!1;for(let t=0;t<Gm;t++){if(this.scrapLife[t]<=0)continue;r=!0,this.scrapLife[t]-=e;let n=t*3,i=this.scrapPos,a=this.scrapVel,o=this.scrapRot;a[n+1]-=9.8*e;let s=Math.exp(-e*2.5);a[n]*=s,a[n+2]*=s,a[n+1]<-1.2&&(a[n+1]=-1.2),i[n]+=a[n]*e,i[n+1]+=a[n+1]*e,i[n+2]+=a[n+2]*e;let c=i[n+1]<=.01;c?(i[n+1]=.01,a[n]=a[n+1]=a[n+2]=0):(o[n]+=e*7,o[n+1]+=e*5);let l=Math.min(1,this.scrapLife[t]/.3);this.sq.setFromEuler(this.se.set(c?0:o[n],o[n+1],c?0:o[n+2])),this.sm.compose(this.sv.set(i[n],i[n+1],i[n+2]),this.sq,this.ss.setScalar(this.scrapLife[t]>0?l:0)),this.scraps.setMatrixAt(t,this.sm)}r&&(this.scraps.instanceMatrix.needsUpdate=!0);let i=!1;for(let t=0;t<Um;t++)this.tracerLife[t]>0&&(this.tracerLife[t]-=e,i=!0,this.tracerLife[t]<=0&&this.tracerPos.fill(0,t*6,t*6+6));i&&(this.tracerGeo.attributes.position.needsUpdate=!0);for(let t of this.puffs){if(t.life<=0)continue;t.life-=e;let n=1-t.life/t.max;t.sprite.position.y+=t.vy*e,t.sprite.scale.setScalar(.15+n*.35),t.sprite.material.opacity=.8*(1-n),t.life<=0&&(t.sprite.visible=!1)}for(let t of this.flashes)t.life<=0||(t.life-=e,t.life<=0&&(t.sprite.visible=!1))}};function Xm(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.5,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),new Xi(e)}var Zm=class{group=new Tn;rigs=[];mat=new xa({color:9082012,roughness:.45,metalness:.55});stripe=new xa({color:14200874,roughness:.6});rebuild(e,t){for(let e of this.rigs)this.group.remove(e.mesh,e.label),e.mesh.geometry.dispose(),e.tex.dispose();this.rigs=e.map(e=>{let n=t.boxes[e.box],r=new Y(new ea(n.h[0]*2,n.h[1]*2,n.h[2]*2),this.mat);r.position.set(n.c[0],n.c[1],n.c[2]);let i=new Y(new ea(n.h[0]*2+.01,.12,n.h[2]*2+.01),this.stripe);i.position.y=-n.h[1]+.25,r.add(i);let a=document.createElement(`canvas`);a.width=128,a.height=64;let o=new Xi(a);o.colorSpace=Fe;let s=new $r(new zr({map:o,depthTest:!1,transparent:!0}));return s.scale.set(.9,.45,1),s.position.set(n.c[0],Math.min(n.c[1]+n.h[1]+.35,2.6),n.c[2]+n.h[2]+.05),s.renderOrder=12,this.group.add(r,s),{mesh:r,baseY:n.c[1],height:n.h[1]*2,label:s,canvas:a,tex:o,shown:``}})}update(e){e.forEach((e,t)=>{let n=this.rigs[t];if(!n)return;let r=e.open*e.open*(3-2*e.open);n.mesh.position.y=n.baseY+r*(n.height-.1),n.label.visible=!e.opened;let i=`${e.count}/${e.need}`;i!==n.shown&&(n.shown=i,Qm(n.canvas,i,e.count>=e.need),n.tex.needsUpdate=!0)})}};function Qm(e,t,n){let r=e.getContext(`2d`);r.clearRect(0,0,e.width,e.height),r.fillStyle=`rgba(12,14,16,0.8)`,r.beginPath(),r.roundRect(4,4,e.width-8,e.height-8,14),r.fill(),r.fillStyle=n?`#9cff7a`:`#ffffff`,r.font=`bold 34px system-ui, sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(`🐛 ${t}`,e.width/2,e.height/2+2)}var $m=class{group=new Tn;items=[];elecTex=eh();t=0;rebuild(e){for(let e of this.items)this.group.remove(e.mesh),e.mesh.geometry.dispose(),e.mat.dispose();this.items=e.map(e=>{let t=e.kind===`acid`,n=t?new na(1,28):new ca(e.h[0]*2,e.h[1]*2),r=new oi({color:t?8257338:7325951,map:t?null:this.elecTex.clone(),transparent:!0,opacity:.75,depthWrite:!1});r.map&&(r.map.needsUpdate=!0,r.map.repeat.set(e.h[0]*2,e.h[1]*2));let i=new Y(n,r);return i.rotation.x=-Math.PI/2,i.position.set(e.c[0],.006,e.c[1]),t&&i.scale.set(e.h[0],e.h[1],1),i.renderOrder=-1,this.group.add(i),{mesh:i,mat:r,kind:e.kind}})}update(e,t){this.t+=e,this.items.forEach((e,n)=>{if(e.kind===`acid`){e.mat.opacity=.6+Math.sin(this.t*2+n)*.08;return}let r=t(n);e.mat.opacity=r?.6+Math.random()*.35:.5,e.mat.color.setHex(r?9427199:3820120)})}};function eh(){let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`);n.fillStyle=`rgba(40,90,140,0.6)`,n.fillRect(0,0,64,64),n.strokeStyle=`#ffffff`,n.lineWidth=3,n.strokeRect(2,2,60,60),n.beginPath(),n.moveTo(10,40),n.lineTo(26,22),n.lineTo(34,36),n.lineTo(54,14),n.stroke();let r=new Xi(t);return r.wrapS=r.wrapT=e,r}var th=400,nh=class{mesh;m=new Xt;q=new Dt;e=new sn;p=new K;s=new K;col=new J;zero=new Xt().makeScale(0,0,0);slot=Array(th).fill(null);constructor(){this.mesh=new ki(new oa(.62,0),new xa({roughness:.85,flatShading:!0}),th),this.mesh.frustumCulled=!1;for(let e=0;e<th;e++)this.mesh.setMatrixAt(e,this.zero),this.mesh.setColorAt(e,this.col.setHex(16777215))}update(e){let t=!1;for(let n=0;n<th;n++){let r=e[n];if(!r){this.slot[n]&&(this.slot[n]=null,this.mesh.setMatrixAt(n,this.zero));continue}this.slot[n]!==r&&(this.slot[n]=r,this.col.setHex(r.seed<.35?r.core:r.color),this.mesh.setColorAt(n,this.col),t=!0);let i=r.seed*40;this.e.set(i,i*1.7,i*.6),this.q.setFromEuler(this.e),this.s.set(r.size,r.size*.7,r.size*.9),this.p.set(r.x,r.y,r.z),this.m.compose(this.p,this.q,this.s),this.mesh.setMatrixAt(n,this.m)}this.mesh.instanceMatrix.needsUpdate=!0,t&&this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}},rh=2.5,ih=50,ah=1e3/57,oh=class{getCount;setCount;max;el;t=0;frames=0;frameMs=0;physMs=0;physMax=0;bad=0;best=0;done=!1;constructor(e,t,n,r){this.getCount=t,this.setCount=n,this.max=r,this.el=document.createElement(`div`),this.el.style.cssText=`position:fixed;left:50%;top:56px;transform:translateX(-50%);z-index:50;padding:10px 14px;border-radius:10px;background:rgba(15,18,22,.82);color:#fff;font:600 14px/1.35 system-ui,sans-serif;text-align:center;pointer-events:none;max-width:90vw`,e.appendChild(this.el),this.show(`Стресс-тест: разгоняемся…`)}frame(e,t,n){if(this.done||(this.t+=n,this.frames++,this.frameMs+=e,this.physMs+=t,this.physMax=Math.max(this.physMax,t),this.t<rh))return;let r=this.frameMs/this.frames,i=Math.min(60,1e3/r),a=this.physMs/this.frames,o=this.getCount();r<=ah?(this.bad=0,this.best=o,o>=this.max?this.finish(`Дошли до потолка ${this.max} червей, 60 FPS держится`):this.setCount(Math.min(this.max,o+ih))):++this.bad>=2&&this.finish(`Максимум при 60 FPS: ${this.best} червей<br><small>на ${o}: ${i.toFixed(0)} FPS, физика ${a.toFixed(1)} мс</small>`),this.done||this.show(`Стресс-тест: ${this.getCount()} червей<br><small>${i.toFixed(0)} FPS · физика ${a.toFixed(1)} мс (пик ${this.physMax.toFixed(1)})</small>`),this.t=0,this.frames=0,this.frameMs=0,this.physMs=0,this.physMax=0}finish(e){this.done=!0,this.show(e)}show(e){this.el.innerHTML=e}},sh=64,ch=5,lh=class{mesh;next=0;born=new Float32Array(sh).fill(-1);basePos=[];baseRot=[];baseSize=[];clock=0;m=new Xt;v=new K;sc=new K;color=new J;constructor(){let e=new ea(1,1,1),t=new xa({roughness:.9});this.mesh=new ki(e,t,320),this.mesh.instanceMatrix.setUsage(Ve),this.mesh.frustumCulled=!1;for(let e=0;e<320;e++)this.basePos.push(new K),this.baseRot.push(new Dt),this.baseSize.push(new K),this.mesh.setColorAt(e,this.color.setHex(16777215));this.clear()}clear(){this.born.fill(-1),this.next=0,this.m.makeScale(0,0,0);for(let e=0;e<320;e++)this.mesh.setMatrixAt(e,this.m);this.mesh.instanceMatrix.needsUpdate=!0}add(e,t,n,r){let i=this.next++%sh;this.born[i]=this.clock;let a=[[.02,.05,.5,.05,.42,.2,.025,r.top],[-.05,-.18,.32,.04,.48,-.35,.05,r.bottom],[.22,-.36,.11,.07,.2,.5,.035,2760988],[-.12,-.42,.11,.07,.2,-.2,.035,2760988],[-.25,.22,.24,.08,.24,.7,.06,r.hat??0]],o=Math.cos(n),s=Math.sin(n);a.forEach(([a,c,l,u,d,f,p,m],h)=>{let g=i*ch+h;h===4&&r.hat===null&&(l=u=d=0),this.baseRot[g].setFromAxisAngle(this.v.set(0,1,0),n+f),this.basePos[g].set(e+a*o+c*s,p,t-a*s+c*o),this.baseSize[g].set(l,u,d),this.mesh.setColorAt(g,this.color.setHex(m))}),this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}setPart(e,t){this.m.compose(this.basePos[e],this.baseRot[e],this.sc.copy(this.baseSize[e]).multiplyScalar(t)),this.mesh.setMatrixAt(e,this.m)}update(e){this.clock+=e;let t=!1;for(let n=0;n<sh;n++){let r=this.born[n]<0?-1:this.clock-this.born[n];if(r<0||r>.6){if(r>.6&&r-e<=.6){for(let e=0;e<ch;e++)this.setPart(n*ch+e,1);t=!0}continue}let i=Math.max(0,(r-.15)/.45),a=i<=0?0:1+Math.sin(i*Math.PI)*.25*(1-i);for(let e=0;e<ch;e++)this.setPart(n*ch+e,a);t=!0}t&&(this.mesh.instanceMatrix.needsUpdate=!0)}},uh=-.01,dh={pos:new Float32Array,nrm:new Float32Array,col:new Float32Array,idx:new Uint32Array},fh=class{f;boxes;chunks=new Map;v=new Float64Array(8);pal;constructor(e,t){this.f=e,this.boxes=t,this.pal=new Float32Array(e.cores.length*3);let n=new J;e.cores.forEach((e,t)=>{n.setHex(e),this.pal.set([n.r,n.g,n.b],t*3)})}outside(e,t,n,r){for(let i of this.boxes)if(Math.abs(e-i.c[0])<i.h[0]+r&&Math.abs(t-i.c[1])<i.h[1]+r&&Math.abs(n-i.c[2])<i.h[2]+r)return!1;return!0}update(e=1/0){let t=this.f;if(!t.dirtyChunks.size)return!1;let n=t.chunksX,r=t.chunksY,i=Math.ceil(t.nz/16),a=0;for(let o of t.dirtyChunks){if(a++>=e)break;t.dirtyChunks.delete(o);let s=o%n,c=(o-s)/n%r,l=(o-s-c*n)/(n*r);if(s>=n||c>=r||l>=i)continue;let u=this.build(s,c,l);u.idx.length?this.chunks.set(o,u):this.chunks.delete(o)}return!0}merged(){let e=0,t=0;for(let n of this.chunks.values())e+=n.pos.length,t+=n.idx.length;if(!t)return dh;let n=new Float32Array(e),r=new Float32Array(e),i=new Float32Array(e),a=new Uint32Array(t),o=0,s=0;for(let e of this.chunks.values()){n.set(e.pos,o),r.set(e.nrm,o),i.set(e.col,o);let t=o/3;for(let n=0;n<e.idx.length;n++)a[s+n]=e.idx[n]+t;o+=e.pos.length,s+=e.idx.length}return{pos:n,nrm:r,col:i,idx:a}}build(e,t,n){let r=this.f,{nx:i,ny:a,nz:o,cell:s,F:c}=r,[l,u,d]=r.min,f=Math.max(0,e*16-1),p=Math.min(i-1,(e+1)*16),m=Math.max(0,t*16-1),h=Math.min(a-1,(t+1)*16),g=Math.max(0,n*16-1),_=Math.min(o-1,(n+1)*16),v=p-f,y=h-m,b=_-g;if(v<=0||y<=0||b<=0)return dh;let x=new Int32Array(v*y*b).fill(-1),S=r.inside,C=c.length,w=i,T=i*a,E=e=>{if(S[e])return c[e];let t=-1;if(e>=1&&S[e-1]&&c[e-1]>t&&(t=c[e-1]),e+1<C&&S[e+1]&&c[e+1]>t&&(t=c[e+1]),e>=w&&S[e-w]&&c[e-w]>t&&(t=c[e-w]),e+w<C&&S[e+w]&&c[e+w]>t&&(t=c[e+w]),e>=T&&S[e-T]&&c[e-T]>t&&(t=c[e-T]),e+T<C&&S[e+T]&&c[e+T]>t&&(t=c[e+T]),t!==-1)return t;for(let n of mh){let r=e+n[0]+n[1]*w+n[2]*T;r>=0&&r<C&&S[r]&&c[r]>t&&(t=c[r])}return t},D=[],O=[],k=[],A=[],{part:ee}=r,j=this.pal,M=v+1,N=(v+1)*(y+1),P=new Float32Array(N*(b+1));for(let e=g;e<=_;e++)for(let t=m;t<=h;t++){let n=(t-m)*M+(e-g)*N-f,r=i*(t+a*e);for(let e=f;e<=p;e++)P[n+e]=E(r+e)}let F=(e,t,n)=>P[e-f+M*(t-m)+N*(n-g)],te=this.v;for(let e=g;e<_;e++)for(let t=m;t<h;t++)for(let n=f;n<p;n++){let o=n-f+M*(t-m)+N*(e-g),p=P[o]>uh;if(P[o+1]>uh===p&&P[o+M]>uh===p&&P[o+M+1]>uh===p&&P[o+N]>uh===p&&P[o+N+1]>uh===p&&P[o+N+M]>uh===p&&P[o+N+M+1]>uh===p)continue;te[0]=P[o],te[1]=P[o+1],te[2]=P[o+M],te[3]=P[o+M+1],te[4]=P[o+N],te[5]=P[o+N+1],te[6]=P[o+N+M],te[7]=P[o+N+M+1];let h=0,_=0,b=0,C=0;for(let[e,t]of hh){let n=te[e],r=te[t];if(n>uh==r>uh)continue;let i=(n-uh)/(n-r);h+=(e&1)+((t&1)-(e&1))*i,_+=(e>>1&1)+((t>>1&1)-(e>>1&1))*i,b+=(e>>2&1)+((t>>2&1)-(e>>2&1))*i,C++}let w=l+(n+.5+h/C)*s,T=u+(t+.5+_/C)*s,E=d+(e+.5+b/C)*s;if(this.outside(w,T,E,s))continue;x[n-f+v*(t-m+y*(e-g))]=D.length/3,D.push(w,T,E),r.sample(w,T,E,ph,0),O.push(ph[0],ph[1],ph[2]);let A=n+i*(t+a*e),F=-1,I=1/0;for(let e=0;e<8;e++){let t=A+(e&1)+(e>>1&1)*i+(e>>2&1)*i*a;S[t]&&c[t]<I&&(I=c[t],F=ee[t])}let ne=F<0?0:F*3;k.push(j[ne],j[ne+1],j[ne+2])}let I=(e,t,n)=>e>=Math.max(t,n*16)&&e<(n+1)*16,ne=(e,t,n,r)=>{if(e<0||t<0||n<0||r<0)return;let i=D[t*3]-D[e*3],a=D[t*3+1]-D[e*3+1],o=D[t*3+2]-D[e*3+2],s=D[n*3]-D[e*3],c=D[n*3+1]-D[e*3+1],l=D[n*3+2]-D[e*3+2],u=a*l-o*c,d=o*s-i*l,f=i*c-a*s;u*(O[e*3]+O[n*3])+d*(O[e*3+1]+O[n*3+1])+f*(O[e*3+2]+O[n*3+2])>=0?A.push(e,t,n,e,n,r):A.push(e,n,t,e,r,n)},re=(e,t,n)=>e<f||t<m||n<g||e>=p||t>=h||n>=_?-1:x[e-f+v*(t-m+y*(n-g))];for(let r=Math.max(1,g);r<_;r++)for(let s=Math.max(1,m);s<h;s++)for(let c=Math.max(1,f);c<p;c++){if(!I(c,0,e)||!I(s,0,t)||!I(r,0,n))continue;let l=F(c,s,r)>uh;c+1<i&&l!==F(c+1,s,r)>uh&&ne(re(c,s-1,r-1),re(c,s,r-1),re(c,s,r),re(c,s-1,r)),s+1<a&&l!==F(c,s+1,r)>uh&&ne(re(c-1,s,r-1),re(c,s,r-1),re(c,s,r),re(c-1,s,r)),r+1<o&&l!==F(c,s,r+1)>uh&&ne(re(c-1,s-1,r),re(c,s-1,r),re(c,s,r),re(c-1,s,r))}return{pos:new Float32Array(D),nrm:new Float32Array(O),col:new Float32Array(k),idx:new Uint32Array(A)}}},ph=new Float32Array(3),mh=[];for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++)Math.abs(n)+Math.abs(t)+Math.abs(e)>=2&&mh.push([n,t,e]);var hh=[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]],gh=48,_h=.15,vh=8,yh=`
float bHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float bNoise(vec3 x) {
  vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(bHash(i), bHash(i + vec3(1,0,0)), f.x), mix(bHash(i + vec3(0,1,0)), bHash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(bHash(i + vec3(0,0,1)), bHash(i + vec3(1,0,1)), f.x), mix(bHash(i + vec3(0,1,1)), bHash(i + vec3(1,1,1)), f.x), f.y), f.z);
}`,bh=class{group=new Tn;pickables=[];items=[];rebuild(e,t){for(let e of this.items)this.dispose(e);this.items=t.map(t=>this.make(e,t)),this.refreshPickables(t)}make(e,t){let n=t.def.boxes.map(t=>e.boxes[t]).filter(e=>!e.fill),r=n.filter(e=>e.solid!==!1),i=n.slice(0,gh),a=t.bites,s=new Yt(a.mask,a.nx,a.ny,a.nz);s.format=D,s.type=l,s.minFilter=s.magFilter=o,s.unpackAlignment=1,s.needsUpdate=!0;let c=new K(a.nx*a.cell,a.ny*a.cell,a.nz*a.cell),u=new K(...a.min),d=n.map(e=>Sh(e)),f=jm(d);d.forEach(e=>e.dispose());let p=new xa({vertexColors:!0,roughness:.7,metalness:.05});p.onBeforeCompile=e=>{e.uniforms.uMask={value:s},e.uniforms.uMin={value:u},e.uniforms.uSize={value:c},e.uniforms.uCell={value:a.cell},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec3 bBoxC;
attribute vec3 bBoxH;
varying vec3 vBW;
varying vec3 vBN;
varying vec3 vBC;
varying vec3 vBH;`).replace(`#include <project_vertex>`,`#include <project_vertex>
vBW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vBN = normalize((modelMatrix * vec4(objectNormal, 0.0)).xyz);
vBC = bBoxC;
vBH = bBoxH;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vBW;
varying vec3 vBN;
varying vec3 vBC;
varying vec3 vBH;
uniform highp sampler3D uMask;
uniform vec3 uMin;
uniform vec3 uSize;
uniform float uCell;
${yh}`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
// маску берём на полклетки внутри предмета: на самой грани она смешана с
// клеткой снаружи (там укусов нет), и от съеденного оставалась тонкая плёнка
// (и на полторы клетки: если съедено там, корка у самой грани — уже осколок)
// точки выборки зажаты внутрь своей коробки: на рёбрах сдвиг по нормали одной
// грани оставлял выборку между клеткой предмета и клеткой снаружи (красные линии)
vec3 bM = min(vec3(uCell * 0.5), vBH);
vec3 bLo = vBC - vBH + bM, bHi = vBC + vBH - bM;
float bF = (max(texture(uMask, (clamp(vBW - vBN * uCell * 0.6, bLo, bHi) - uMin) / uSize).r,
                texture(uMask, (clamp(vBW - vBN * uCell * 1.5, bLo, bHi) - uMin) / uSize).r) * 2.0 - 1.0) * ${td.toFixed(3)};
float bJag = (bNoise(vBW * 24.0) - 0.5) * 0.025 + (bNoise(vBW * 70.0) - 0.5) * 0.01;
if (bF + bJag > -0.012) discard;
float bRim = smoothstep(-0.047, -0.012, bF + bJag);`).replace(`#include <color_fragment>`,`#include <color_fragment>
diffuseColor.rgb *= mix(1.0, 0.45, bRim);`)},p.customProgramCacheKey=()=>`bite-shell`;let m=new Y(f,p),h=new xa({vertexColors:!0,color:14211288,roughness:.9,metalness:0,side:2}),g=Array.from({length:gh},(e,t)=>new K(...i[t]?.c??[0,-100,0])),_=Array.from({length:gh},(e,t)=>new K(...i[t]?.h??[0,0,0]));h.onBeforeCompile=e=>{e.uniforms.uBoxC={value:g},e.uniforms.uBoxH={value:_},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vBW;`).replace(`#include <project_vertex>`,`#include <project_vertex>
vBW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vBW;
uniform vec3 uBoxC[${gh}];
uniform vec3 uBoxH[${gh}];
${yh}`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
float bBox = 1e5;
for (int i = 0; i < ${gh}; i++) {
  vec3 q = abs(vBW - uBoxC[i]) - uBoxH[i];
  bBox = min(bBox, length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0));
}
if (bBox > 0.002) discard;`).replace(`#include <color_fragment>`,`#include <color_fragment>
// глубже — темнее, и пятнисто, как волокна
diffuseColor.rgb *= mix(1.0, 0.6, smoothstep(0.0, 0.35, -bBox)) * (0.85 + 0.3 * bNoise(vBW * 30.0));`)},h.customProgramCacheKey=()=>`bite-cavity`;let v=new Y(new Or,h);v.frustumCulled=!1,this.group.add(m,v);let y=new oi({visible:!1}),b=r.map(e=>{let t=new Y(xh,y);return t.position.set(e.c[0],e.c[1],e.c[2]),t.scale.set(e.h[0]*2,e.h[1]*2,e.h[2]*2),t.updateMatrixWorld(),t});return{field:a,shell:m,cavity:v,mesher:new fh(a,i),tex:s,version:a.version,remeshT:0,proxies:b}}refreshPickables(e){this.pickables.length=0,this.items.forEach((t,n)=>{e[n]?.gone||this.pickables.push(...t.proxies)})}update(e,t,n){let r=!1;t.forEach((t,i)=>{let a=this.items[i];if(!a)return;a.field!==t.bites&&(this.dispose(a),a=this.items[i]=this.make(e,t),r=!0);let o=!t.gone;if(a.shell.visible!==o&&(r=!0),a.shell.visible=a.cavity.visible=o,o&&(a.version!==a.field.version&&(a.version=a.field.version,a.tex.needsUpdate=!0),a.remeshT-=n,a.remeshT<=0&&a.field.dirtyChunks.size)){a.remeshT=_h,a.mesher.update(vh);let e=a.mesher.merged(),t=new Or;t.setAttribute(`position`,new pr(e.pos,3)),t.setAttribute(`normal`,new pr(e.nrm,3)),t.setAttribute(`color`,new pr(e.col,3)),t.setIndex(new pr(e.idx,1)),a.cavity.geometry.dispose(),a.cavity.geometry=t}}),r&&this.refreshPickables(t)}dispose(e){this.group.remove(e.shell,e.cavity),e.shell.geometry.dispose(),e.cavity.geometry.dispose(),e.shell.material.dispose(),e.cavity.material.dispose(),e.tex.dispose()}},xh=new ea(1,1,1);function Sh(e){let t=new ea(e.h[0]*2,e.h[1]*2,e.h[2]*2);t.translate(e.c[0],e.c[1],e.c[2]);let n=new J(e.color??8947848),r=t.getAttribute(`position`).count,i=t.getAttribute(`normal`),a=new Float32Array(r*3);for(let e=0;e<r;e++){let t=i.getY(e),r=t>.5?1.08:t<-.5?.6:.9;a[e*3]=n.r*r,a[e*3+1]=n.g*r,a[e*3+2]=n.b*r}t.setAttribute(`color`,new pr(a,3));let o=new Float32Array(r*3),s=new Float32Array(r*3);for(let t=0;t<r;t++)o.set(e.c,t*3),s.set(e.h,t*3);return t.setAttribute(`bBoxC`,new pr(o,3)),t.setAttribute(`bBoxH`,new pr(s,3)),t.deleteAttribute(`uv`),t}var Ch=class{stats;slider;label;game;root;shownWorms=-1;dashBtn;abStack;abKey=``;abEls=new Map;onAbility;grow;growKey=``;dashShown=-1;open=!1;last=null;constructor(e,t,n,r){this.root=e,this.game=wh(`div`,`game-hud`);let i=wh(`div`,`hud`);i.addEventListener(`click`,e=>{e.target.closest(`input, button`)||(this.open=!this.open,i.classList.toggle(`open`,this.open),this.last&&this.update(this.last))}),this.stats=wh(`pre`,`hud-stats`);let a=wh(`label`,`hud-row`);this.label=wh(`span`,`hud-label`),this.slider=document.createElement(`input`),this.slider.type=`range`,this.slider.min=`10`,this.slider.max=String(n),this.slider.step=`10`,this.slider.value=String(t),this.setLabel(t),this.slider.addEventListener(`input`,()=>{let e=Number(this.slider.value);this.setLabel(e),r.onWorms(e)}),a.append(this.label,this.slider);let o=wh(`button`,`hud-btn`);o.textContent=`Сброс`,o.addEventListener(`click`,r.onReset),i.append(this.stats,a,o);let s=wh(`button`,`dash-btn`);s.innerHTML=`<span>Рывок</span>`,s.addEventListener(`pointerdown`,e=>{e.stopPropagation(),r.onDash()}),this.dashBtn=s;let c=wh(`div`,`help`);c.textContent=`Держи палец / ЛКМ — рой ползёт. WASD / стрелки — направление (рой сам перелезает предметы). Рывок — кнопка, двойной тап или Пробел.`,this.grow=wh(`div`,`grow-hud`),this.grow.addEventListener(`pointerdown`,e=>e.stopPropagation()),this.abStack=wh(`div`,`ab-stack`),this.abStack.addEventListener(`pointerdown`,e=>e.stopPropagation()),this.onAbility=r.onAbility,e.append(i,this.game,this.grow,this.abStack,s,c);for(let e of[i,s])e.addEventListener(`pointerdown`,e=>e.stopPropagation())}setLabel(e){this.label.textContent=`Червей: ${e}`}setDash(e){let t=Math.round(e*40)/40;t!==this.dashShown&&(this.dashShown=t,this.dashBtn.style.setProperty(`--ready`,`${t*360}deg`),this.dashBtn.classList.toggle(`ready`,t>=1))}setGrowth(e,t,n,r,i=-1,a=0,o=``,s=0){let c=Math.round(t*40)/40,l=Math.round(r*40)/40,u=Math.round(s*40)/40,d=`${e}|${c}|${n}|${l}|${Math.floor(i)}|${a}|${o}|${u}`;if(d===this.growKey)return;this.growKey=d;let f=(e,t)=>`<span class="grow-bar ${t}"><i style="width:${(e*100).toFixed(0)}%"></i></span>`;this.grow.innerHTML=(i>=0?`<div class="grow-kg">🧬 <b>${Th(i)}</b></div>`:``)+`<div class="grow-row"><span class="grow-val">🪱 <b>${Th(e)}</b></span>${t>=0?f(c,`worm`):``}</div>`+(a>0?`<div class="grow-res">из них в запасе ${Th(a)}</div>`:``)+(n>=0?`<div class="grow-row"><span class="grow-val">Ур. <b>${n}</b></span>${f(l,`lvl`)}</div>`:``)+(o?`<div class="grow-goal">🏆 ${o}${f(u,`goal`)}</div>`:``)}setDashLabel(e){let t=this.dashBtn.querySelector(`span`);t&&t.textContent!==e&&(t.textContent=e)}setAbilities(e){let t=e.map(e=>e.id).join(`,`);if(t!==this.abKey){this.abKey=t,this.abStack.innerHTML=``,this.abEls.clear();for(let t of e){let e=document.createElement(`button`);e.className=`ab-btn`,e.innerHTML=`<span>${t.icon}</span>${t.key?`<em class="ab-key">${t.key}</em>`:``}`,e.addEventListener(`pointerdown`,e=>{e.stopPropagation(),this.onAbility(t.id)}),this.abStack.append(e),this.abEls.set(t.id,e)}}for(let t of e){let e=this.abEls.get(t.id),n=Math.round(t.ready*40)/40;e.style.setProperty(`--ready`,`${n*360}deg`),e.classList.toggle(`ready`,n>=1),e.classList.toggle(`new`,!!t.isNew)}}setWorms(e){e!==this.shownWorms&&(this.shownWorms=e,this.setLabel(e),this.slider.value=String(e))}updateGame(e){let t=e.overflow>0?` <span class="dim">(+${e.overflow} не влезло)</span>`:``;(e.objectsTotal??-1)>=0?this.game.innerHTML=`<span>🪑 Предметов <b>${e.objects}/${e.objectsTotal}</b></span><span>🟢 Еда <b>${e.food}</b></span>${t}`:this.game.innerHTML=`<span>🧪 Съедено <b>${e.eaten}</b></span><span>🚪 Сбежало <b>${e.escaped}</b></span>`+(e.humansLeft>=0?`<span>👤 Осталось <b>${e.humansLeft}</b></span>`:``)+`<span>🟢 Еда <b>${e.foodTotal>=0?`${e.food}/${e.foodTotal}`:e.food}</b></span>${t}`}pop(e,t,n,r){let i=wh(`div`,r?`pop pop-big`:`pop`);i.textContent=n,i.style.left=`${e}px`,i.style.top=`${t}px`,this.root.append(i),setTimeout(()=>i.remove(),1e3)}update(e){this.last=e;let t=e.physMs>4?` ⚠`:``;this.open?this.stats.textContent=`FPS      ${e.fps.toFixed(0)}\nкадр     ${e.frameMs.toFixed(1)} мс\nфизика   ${e.physMs.toFixed(2)} мс/кадр${t}\n  макс   ${e.physMaxMs.toFixed(2)} мс\nчервей   ${e.worms}  точек ${e.points}\ndraw     ${e.calls}`:this.stats.textContent=`${e.fps.toFixed(0)} FPS · физика ${e.physMs.toFixed(1)} мс${t}`}};function wh(e,t){let n=document.createElement(e);return n.className=t,n}function Th(e){return Math.floor(e).toLocaleString(`ru-RU`)}var Eh=class{banner;title;goal;timer;intro;arrow;result;introTimer=0;lastGoal=``;lastTime=``;constructor(e){this.banner=kh(`banner`),this.title=kh(`banner-title`),this.goal=kh(`banner-goal`),this.timer=kh(`banner-timer`),this.banner.append(this.title,this.goal,this.timer),this.intro=kh(`intro`),this.arrow=kh(`exit-arrow`),this.arrow.innerHTML=`<span>➤</span>`,this.result=kh(`result hidden`),e.append(this.banner,this.intro,this.arrow,this.result)}startLevel(e,t,n){this.title.textContent=e.sandbox||e.goal.type===`district`?e.name:e.infest?`Нашествие · ${e.name}`:`${t+1}/${n} · ${e.name}`,this.lastGoal=``,this.result.classList.add(`hidden`),this.intro.textContent=e.intro,this.intro.classList.toggle(`hidden`,!e.intro),this.introTimer=e.intro?6:0}update(e,t,n,r){t!==this.lastGoal&&(this.goal.textContent=t,this.lastGoal=t),this.goal.style.setProperty(`--fill`,`${Math.round(n*100)}%`);let i=Oh(r);i!==this.lastTime&&(this.timer.textContent=i,this.lastTime=i),this.introTimer>0&&(this.introTimer-=e,this.introTimer<=0&&this.intro.classList.add(`hidden`))}flash(e){this.intro.textContent=e,this.intro.classList.remove(`hidden`),this.introTimer=2.5}dismissIntroSoon(){this.introTimer>2&&(this.introTimer=2)}pointArrow(e,t=0,n=0,r=0){this.arrow.style.display=e?`block`:`none`,e&&(this.arrow.style.left=`${t}px`,this.arrow.style.top=`${n}px`,this.arrow.style.transform=`translate(-50%, -50%) rotate(${r}rad)`)}showResult(e,t,n,r){let i=t.result===`won`,a=[null,e.stars[0]??null,e.stars[1]??null],o=t.stars.map((e,t)=>{let n=a[t]?Dh(a[t]):`Пройти уровень`;return`<div class="star ${e?`on`:``}" style="animation-delay:${.25+t*.25}s">
          <span class="star-icon">★</span><span class="star-label">${n}</span></div>`}).join(``);this.result.innerHTML=`
      <div class="result-card ${i?`won`:`lost`}">
        <div class="result-title">${i?e.goal.type===`district`?`Район съеден!`:e.infest?`Квартал заражён!`:`Уровень пройден!`:`Поражение`}</div>
        <div class="result-reason">${t.reason} · ${Oh(t.time)}</div>
        <div class="stars">${o}</div>
        ${i?`<div class="reward">+<span data-reward>${t.reward}</span> биомассы</div>`:``}
        ${i&&r.onDouble?`<button class="btn ad-btn" data-act="double">▶ Удвоить биомассу за рекламу</button>`:``}
        ${!i&&r.onRevive?`<button class="btn ad-btn" data-act="revive">▶ Воскресить рой за рекламу</button>`:``}
        <div class="result-buttons">
          <button class="btn secondary" data-act="nest">Гнездо</button>
          <button class="btn secondary" data-act="retry">Заново</button>
          ${i?`<button class="btn primary" data-act="next">${n?`Дальше`:`С начала`}</button>`:``}
        </div>
      </div>`,this.result.classList.remove(`hidden`),this.result.querySelector(`[data-act="retry"]`)?.addEventListener(`click`,r.onRetry),this.result.querySelector(`[data-act="next"]`)?.addEventListener(`click`,r.onNext),this.result.querySelector(`[data-act="nest"]`)?.addEventListener(`click`,r.onNest);let s=this.result.querySelector(`[data-act="double"]`);s?.addEventListener(`click`,async()=>{if(s.disabled=!0,await r.onDouble()){let e=this.result.querySelector(`[data-reward]`);e&&(e.textContent=String(t.reward*2)),s.textContent=`Биомасса удвоена ✓`}else s.textContent=`Реклама недоступна`});let c=this.result.querySelector(`[data-act="revive"]`);c?.addEventListener(`click`,async()=>{c.disabled=!0,await r.onRevive()?this.hideResult():c.textContent=`Реклама недоступна`});for(let e of this.result.querySelectorAll(`button`))e.addEventListener(`pointerdown`,e=>e.stopPropagation())}hideResult(){this.result.classList.add(`hidden`)}};function Dh(e){switch(e.type){case`time`:return`Быстрее ${Oh(e.max)}`;case`eat`:return`Съесть людей: ${e.min}`;case`food`:return`Съесть еды: ${e.min}`;case`worms`:return`Червей в конце: ${e.min}+`}}function Oh(e){let t=Math.floor(e);return`${Math.floor(t/60)}:${String(t%60).padStart(2,`0`)}`}function kh(e){let t=document.createElement(`div`);return t.className=e,t}var Ah=[40,80,140,220,320],jh=[{id:`start`,name:`Размер роя`,effect:e=>`+${e*5} червей на старте`},{id:`speed`,name:`Скорость`,effect:e=>`+${e*8}% к скорости ползания`},{id:`armor`,name:`Панцирь`,effect:e=>`${e*12}% пуль мимо, огонь жжёт в ${(1+e*.15).toFixed(2)} раза дольше`},{id:`dash`,name:`Рывок`,effect:e=>`сильнее на ${e*10}%, перезарядка ${(5-e*.5).toFixed(1)} с`}],Mh=[{id:`pink`,name:`Розовые`,stars:0,color:12865628,roughness:.22,metalness:0,emissive:0,emissiveIntensity:0},{id:`black`,name:`Чёрные`,stars:6,color:2761254,roughness:.18,metalness:.1,emissive:0,emissiveIntensity:0},{id:`glow`,name:`Светящиеся`,stars:12,color:8257434,roughness:.3,metalness:0,emissive:3133274,emissiveIntensity:.9},{id:`gold`,name:`Золотые`,stars:20,color:15249482,roughness:.25,metalness:.85,emissive:0,emissiveIntensity:0}];function Nh(e){return{extraWorms:e.start*5,driveMul:1+e.speed*.08,shotSave:e.armor*.12,burnMul:1+e.armor*.15,dashBoost:1+e.dash*.1,dashCooldown:5-e.dash*.5}}var Ph=`squirm.save.v1`;function Fh(){return{v:1,levels:{},biomass:0,upgrades:{start:0,speed:0,armor:0,dash:0},skin:`pink`,adSkins:[],muted:!1}}var Ih=class{storage;data;constructor(e){this.storage=e,this.data=this.load()}static browserStorage(){try{let e=window.localStorage,t=`__squirm_probe__`;return e.setItem(t,`1`),e.removeItem(t),e}catch{return null}}load(){let e=Fh();if(!this.storage)return e;try{let t=this.storage.getItem(Ph);if(!t)return e;let n=JSON.parse(t);if(!n||n.v!==1)return e;let r=Fh();r.biomass=Math.max(0,Math.floor(Number(n.biomass)||0));for(let e of jh){let t=Math.floor(Number(n.upgrades?.[e.id])||0);r.upgrades[e.id]=Math.max(0,Math.min(5,t))}if(n.levels&&typeof n.levels==`object`)for(let[e,t]of Object.entries(n.levels)){let n=Math.max(0,Math.min(3,Math.floor(Number(t?.stars)||0)));r.levels[e]={stars:n,done:!!t?.done}}return Mh.some(e=>e.id===n.skin)&&(r.skin=n.skin),r.muted=!!n.muted,Array.isArray(n.adSkins)&&(r.adSkins=n.adSkins.filter(e=>Mh.some(t=>t.id===e))),r}catch{return e}}save(){if(this.storage)try{this.storage.setItem(Ph,JSON.stringify(this.data))}catch{}}get totalStars(){return Object.values(this.data.levels).reduce((e,t)=>e+t.stars,0)}get mods(){return Nh(this.data.upgrades)}isUnlocked(e,t){return t===0||!!this.data.levels[e[t-1]]?.done}nextLevel(e){let t=e.findIndex(e=>!this.data.levels[e]?.done);return t<0?e.length-1:t}get isNewPlayer(){return Object.keys(this.data.levels).length===0&&this.data.biomass===0}recordWin(e,t,n){let r=this.data.levels[e];this.data.levels[e]={stars:Math.max(r?.stars??0,t),done:!0},this.data.biomass+=n,this.save()}upgradeCost(e){let t=this.data.upgrades[e];return t>=5?null:Ah[t]}buy(e){let t=this.upgradeCost(e);return t===null||this.data.biomass<t?!1:(this.data.biomass-=t,this.data.upgrades[e]++,this.save(),!0)}isSkinUnlocked(e){let t=Mh.find(t=>t.id===e);return!!t&&(this.totalStars>=t.stars||this.data.adSkins.includes(e))}unlockSkinForAd(e){this.data.adSkins.includes(e)||this.data.adSkins.push(e),this.data.skin=e,this.save()}setSkin(e){return this.isSkinUnlocked(e)?(this.data.skin=e,this.save(),!0):!1}},Lh=class{progress;levels;h;root;selected=0;bonus=!1;constructor(e,t,n,r){this.progress=t,this.levels=n,this.h=r,this.root=document.createElement(`div`),this.root.className=`nest hidden`,this.root.addEventListener(`pointerdown`,e=>e.stopPropagation()),e.append(this.root)}get visible(){return!this.root.classList.contains(`hidden`)}show(){let e=this.levels.map(e=>e.id);this.selected=this.progress.nextLevel(e),this.bonus=!1,this.render(),this.root.classList.remove(`hidden`)}hide(){this.root.classList.add(`hidden`)}render(){let e=this.progress,t=e.data,n=this.levels.map(e=>e.id),r=this.levels.length*3+6,i=e=>[0,1,2].map(t=>`<span class="${e>t?`on`:``}">★</span>`).join(``),a=jh.map(n=>{let r=t.upgrades[n.id],i=e.upgradeCost(n.id),a=Array.from({length:5},(e,t)=>`<i class="${t<r?`on`:``}"></i>`).join(``),o=r<5?n.effect(r+1):n.effect(r),s=i===null?`<button class="btn small" disabled>Макс.</button>`:`<button class="btn small primary" data-buy="${n.id}" ${t.biomass<i?`disabled`:``}>🧬 ${i}</button>`;return`<div class="up">
        <div class="up-text"><b>${n.name}</b><div class="pips">${a}</div><div class="up-eff">${r<5?`Дальше: `:``}${o}</div></div>
        ${s}
      </div>`}).join(``),o=Mh.map(n=>{let r=e.isSkinUnlocked(n.id),i=t.skin===n.id,a=`#`+n.color.toString(16).padStart(6,`0`),o=r?``:`<span class="lock">★${n.stars}</span>${this.h.adsAvailable()?`<span class="ad" data-adskin="${n.id}">▶ за рекламу</span>`:``}`;return`<button class="skin ${i?`cur`:``} ${r?``:`locked`}" data-skin="${n.id}" ${r?``:`aria-disabled="true"`}>
        <span class="swatch ${n.id}" style="--c:${a}"></span><span class="skin-name">${n.name}</span>${o}
      </button>`}).join(``),s=this.levels.map((r,i)=>{let a=t.levels[r.id],o=e.isUnlocked(n,i),s=[0,1,2].map(e=>`<span class="${a&&a.stars>e?`on`:``}">★</span>`).join(``);return`<button class="lv ${i===this.selected?`sel`:``}" data-lv="${i}" ${o?``:`disabled`}>
        <span class="lv-n">${o?i+1:`🔒`}</span><span class="lv-name">${r.name}</span><span class="lv-stars">${s}</span>
      </button>`}).join(``),c=this.levels[this.selected],l=this.h.adsAvailable()?`<button class="btn secondary" data-bonus ${this.bonus?`disabled`:``}>${this.bonus?`+50% роя ✓`:`▶ +50% роя за рекламу`}</button>`:``;this.root.innerHTML=`
      <div class="nest-card">
        <div class="nest-head">
          <div class="nest-title">Гнездо</div>
          <div class="nest-res"><span>🧬 <b>${t.biomass}</b></span><span>★ <b>${e.totalStars}</b>/${r}</span></div>
        </div>
        <button class="btn primary big district-btn" data-district>▶ ${this.h.districtName()} <span class="lv-stars">${i(this.h.districtStars())}</span></button>
        <div class="nest-sec">Прокачка</div>
        <div class="ups">${a}</div>
        <div class="nest-sec">Черви</div>
        <div class="skins">${o}</div>
        <div class="nest-sec">Испытания</div>
        <div class="lvs">${s}</div>
        <div class="nest-play">
          ${l}
          <button class="btn secondary big" data-play>Испытание ${this.selected+1}. ${c.name}</button>
        </div>
        <button class="btn secondary sandbox-btn" data-sandbox>🧪 Тестовый стенд</button>
      </div>`,this.root.querySelectorAll(`[data-buy]`).forEach(t=>t.addEventListener(`click`,()=>{e.buy(t.dataset.buy)&&this.render()})),this.root.querySelectorAll(`[data-skin]`).forEach(t=>t.addEventListener(`click`,n=>{if(n.target.dataset.adskin)return;let r=t.dataset.skin;e.setSkin(r)&&(this.h.onSkin(r),this.render())})),this.root.querySelectorAll(`[data-adskin]`).forEach(t=>t.addEventListener(`click`,async n=>{n.stopPropagation();let r=t.dataset.adskin;await this.h.rewarded()&&(e.unlockSkinForAd(r),this.h.onSkin(r)),this.render()})),this.root.querySelectorAll(`[data-lv]`).forEach(e=>e.addEventListener(`click`,()=>{this.selected=Number(e.dataset.lv),this.render()})),this.root.querySelector(`[data-bonus]`)?.addEventListener(`click`,async()=>{await this.h.rewarded()&&(this.bonus=!0),this.render()}),this.root.querySelector(`[data-district]`)?.addEventListener(`click`,()=>{this.hide(),this.h.onDistrict()}),this.root.querySelector(`[data-sandbox]`)?.addEventListener(`click`,()=>{this.hide(),this.h.onSandbox()}),this.root.querySelector(`[data-play]`)?.addEventListener(`click`,()=>{this.hide(),this.h.onPlay(this.selected,this.bonus)})}},Rh=typeof location<`u`&&new URLSearchParams(location.search).get(`ads`)===`1`,zh=new class{sdk=null;playing=!1;hooks={onAdStart:()=>{},onAdEnd:()=>{}};adActive=!1;log=[];setHooks(e){this.hooks=e}async init(){let e=window.PokiSDK;if(!e)this.note(`init: SDK не загружен — без рекламы`);else try{await e.init(),this.sdk=e,this.note(`init`)}catch{this.sdk=e,this.note(`init: ошибка, играем дальше`)}}loadingFinished(){this.call(`gameLoadingFinished`,()=>this.sdk?.gameLoadingFinished())}gameplayStart(){this.playing||(this.playing=!0,this.call(`gameplayStart`,()=>this.sdk?.gameplayStart()))}gameplayStop(){this.playing&&(this.playing=!1,this.call(`gameplayStop`,()=>this.sdk?.gameplayStop()))}async commercialBreak(){if(this.gameplayStop(),this.sdk&&Rh){this.note(`commercialBreak`);try{await this.sdk.commercialBreak(()=>this.startAd())}catch{}this.endAd()}}async rewardedBreak(){let e=this.playing;if(this.gameplayStop(),!this.sdk||!Rh)return this.note(`rewardedBreak: реклама выключена — без награды`),e&&this.gameplayStart(),!1;this.note(`rewardedBreak`);let t=!1;try{t=await this.sdk.rewardedBreak(()=>this.startAd())}catch{t=!1}return this.endAd(),e&&this.gameplayStart(),this.note(`rewardedBreak → ${t}`),t}get adsAvailable(){return this.sdk!==null&&Rh}startAd(){this.adActive=!0,this.hooks.onAdStart()}endAd(){this.adActive&&(this.adActive=!1,this.hooks.onAdEnd())}call(e,t){this.note(e);try{t()}catch{}}note(e){this.log.push(e),this.log.length>50&&this.log.shift()}},Bh=new class{ctx=null;master;sfx;rustleGain;rustleFilter;flameGain;zapGain;noise;muted=!1;adMuted=!1;lastScream=0;lastSquelch=0;unlock(){if(this.ctx){this.ctx.state===`suspended`&&this.ctx.resume();return}let e=window.AudioContext??window.webkitAudioContext;if(!e)return;try{this.ctx=new e}catch{return}let t=this.ctx;this.master=t.createGain(),this.master.connect(t.destination),this.sfx=t.createGain(),this.sfx.gain.value=.7,this.sfx.connect(this.master),this.applyVolume(),this.noise=t.createBuffer(1,t.sampleRate*2,t.sampleRate);let n=this.noise.getChannelData(0);for(let e=0;e<n.length;e++)n[e]=Math.random()*2-1;this.rustleFilter=t.createBiquadFilter(),this.rustleFilter.type=`bandpass`,this.rustleFilter.frequency.value=900,this.rustleFilter.Q.value=.8,this.rustleGain=t.createGain(),this.rustleGain.gain.value=0;let r=t.createGain();r.gain.value=.6;let i=t.createOscillator();i.frequency.value=7;let a=t.createGain();a.gain.value=.4,i.connect(a).connect(r.gain),i.start(),this.loopNoise().connect(this.rustleFilter).connect(r).connect(this.rustleGain).connect(this.master);let o=t.createBiquadFilter();o.type=`lowpass`,o.frequency.value=500,this.flameGain=t.createGain(),this.flameGain.gain.value=0,this.loopNoise().connect(o).connect(this.flameGain).connect(this.sfx);let s=t.createOscillator();s.type=`sawtooth`,s.frequency.value=110;let c=t.createBiquadFilter();c.type=`highpass`,c.frequency.value=700,this.zapGain=t.createGain(),this.zapGain.gain.value=0,s.connect(c).connect(this.zapGain).connect(this.sfx),s.start();let l=t.createGain();l.gain.value=.035,l.connect(this.master);for(let e of[55,55.7,82.4]){let n=t.createOscillator();n.type=`sine`,n.frequency.value=e,n.connect(l),n.start()}let u=t.createOscillator();u.frequency.value=.07;let d=t.createGain();d.gain.value=.02,u.connect(d).connect(l.gain),u.start()}loopNoise(){let e=this.ctx.createBufferSource();return e.buffer=this.noise,e.loop=!0,e.start(),e}get isMuted(){return this.muted}setMuted(e){this.muted=e,this.applyVolume()}setAdMuted(e){this.adMuted=e,this.applyVolume()}applyVolume(){if(!this.ctx)return;let e=this.muted||this.adMuted?0:.9;this.master.gain.setTargetAtTime(e,this.ctx.currentTime,.05)}update(e,t,n,r){if(!this.ctx)return;let i=this.ctx.currentTime,a=Math.min(1,Math.sqrt(e)/15),o=Math.min(1,.25+t/2);this.rustleGain.gain.setTargetAtTime(.22*a*o,i,.15),this.rustleFilter.frequency.setTargetAtTime(700+700*o,i,.2),this.flameGain.gain.setTargetAtTime(n?.35:0,i,.05),this.zapGain.gain.setTargetAtTime(.05*r,i,.03)}env(e,t,n,r){let i=this.ctx.currentTime;e.gain.setValueAtTime(1e-4,i),e.gain.exponentialRampToValueAtTime(t,i+n),e.gain.exponentialRampToValueAtTime(1e-4,i+n+r)}burst(e,t,n,r){let i=this.ctx,a=i.createBufferSource();a.buffer=this.noise;let o=i.createBiquadFilter();o.type=e,o.frequency.value=t;let s=i.createGain();a.connect(o).connect(s).connect(this.sfx),this.env(s,n,.004,r),a.start(0,Math.random()),a.stop(i.currentTime+r+.05)}shot(){this.ctx&&(this.burst(`highpass`,1200,.5,.12),this.burst(`lowpass`,300,.6,.18))}squelch(){if(!this.ctx)return;let e=performance.now();if(e-this.lastSquelch<60)return;this.lastSquelch=e;let t=this.ctx,n=t.createOscillator();n.type=`sine`;let r=t.createGain();n.frequency.setValueAtTime(320,t.currentTime),n.frequency.exponentialRampToValueAtTime(90,t.currentTime+.18),n.connect(r).connect(this.sfx),this.env(r,.35,.01,.2),n.start(),n.stop(t.currentTime+.25),this.burst(`bandpass`,600,.25,.15)}gulp(){if(!this.ctx)return;let e=this.ctx,t=e.createOscillator();t.type=`triangle`;let n=e.createGain();t.frequency.setValueAtTime(180,e.currentTime),t.frequency.exponentialRampToValueAtTime(50,e.currentTime+.4),t.connect(n).connect(this.sfx),this.env(n,.5,.02,.45),t.start(),t.stop(e.currentTime+.5)}crunch(){if(!this.ctx)return;let e=performance.now();e-this.lastCrunch<110||(this.lastCrunch=e,this.burst(`bandpass`,1800+Math.random()*1400,.16,.05))}lastCrunch=0;pop(){if(!this.ctx)return;let e=this.ctx,t=e.createOscillator();t.type=`sine`;let n=e.createGain();t.frequency.setValueAtTime(260,e.currentTime),t.frequency.exponentialRampToValueAtTime(950,e.currentTime+.07),t.connect(n).connect(this.sfx),this.env(n,.35,.005,.12),t.start(),t.stop(e.currentTime+.15)}scream(e=1){if(!this.ctx)return;let t=performance.now();if(t-this.lastScream<400)return;this.lastScream=t;let n=this.ctx,r=n.currentTime,i=n.createOscillator();i.type=`sawtooth`;let a=(420+Math.random()*120)*e;i.frequency.setValueAtTime(a,r),i.frequency.linearRampToValueAtTime(a*1.6,r+.15),i.frequency.linearRampToValueAtTime(a*1.1,r+.6);let o=n.createOscillator();o.frequency.value=9;let s=n.createGain();s.gain.value=a*.05,o.connect(s).connect(i.frequency);let c=n.createBiquadFilter();c.type=`bandpass`,c.frequency.value=900,c.Q.value=4;let l=n.createGain();i.connect(c).connect(l).connect(this.sfx),this.env(l,.3,.03,.6),i.start(),o.start(),i.stop(r+.7),o.stop(r+.7)}door(){this.ctx&&this.burst(`lowpass`,180,.7,.35)}dash(){if(!this.ctx)return;let e=this.ctx,t=e.createBufferSource();t.buffer=this.noise;let n=e.createBiquadFilter();n.type=`bandpass`,n.Q.value=2,n.frequency.setValueAtTime(400,e.currentTime),n.frequency.exponentialRampToValueAtTime(2500,e.currentTime+.3);let r=e.createGain();t.connect(n).connect(r).connect(this.sfx),this.env(r,.4,.05,.3),t.start(),t.stop(e.currentTime+.4)}jingle(e){if(!this.ctx)return;let t=this.ctx;(e?[392,494,587,784]:[392,330,262,196]).forEach((e,n)=>{let r=t.createOscillator();r.type=`square`,r.frequency.value=e;let i=t.createGain();r.connect(i).connect(this.sfx);let a=t.currentTime+n*.12;i.gain.setValueAtTime(1e-4,a),i.gain.exponentialRampToValueAtTime(.12,a+.01),i.gain.exponentialRampToValueAtTime(1e-4,a+.22),r.start(a),r.stop(a+.25)})}},Vh=`modulepreload`,Hh=function(e,t){return new URL(e,t).href},Uh={},Wh=function(e){return e.pathname.endsWith(`.css`)},Gh=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Kh=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Hh(t,n);let r=s(t),i=Wh(r);return Gh(Uh,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Vh,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},qh=new URLSearchParams(location.search),Jh=qh.has(`stress`),Yh=Jh?2e3:600,Xh=4,Zh=1/60,Qh=4,$h=Et.degToRad(55),eg=qh.get(`q`)===`low`?`low`:`high`,tg=qh.has(`level`)?iv(qh.get(`level`),1,1,wd.length)-1:null,ng=new Ih(Ih.browserStorage()),rg=wd.map(e=>({id:e.id,name:e.name}));Bh.setMuted(ng.data.muted);var ig=qh.has(`worms`)?iv(qh.get(`worms`),25,1,Yh):null,ag=document.getElementById(`app`),og=new Wl({antialias:eg===`high`,powerPreference:`high-performance`,stencil:!0});og.setPixelRatio(Math.min(window.devicePixelRatio,eg===`high`?2:1)),og.toneMapping=4,og.toneMappingExposure=.95,ag.appendChild(og.domElement);var sg=og.domElement,cg=new Pn;cg.background=new J(724240),cg.fog=new Nn(724240,14,30),cg.environment=new ts(og).fromScene(new Gl,.04).texture,cg.environmentIntensity=.45;var lg=new Ka(13623551,2760736,.7);cg.add(lg);var ug=new lo(16773600,1.8);ug.position.set(-4,10,5),cg.add(ug);var dg=new io(50,1,.1,60),fg=null,pg=new zm;cg.add(pg.group);var mg=new Vm(64);cg.add(mg.mesh);var hg=new Ym;cg.add(hg.group);var gg=new Zm;cg.add(gg.group);var _g=new $m;cg.add(_g.group);var vg=new lh;cg.add(vg.mesh);var yg=new nh;cg.add(yg.mesh);var bg=new bh;cg.add(bg.group);var xg=new um;cg.add(xg.group);var Sg=new Xd,Cg=new lm;cg.add(Cg.group);var wg=new Y(new ca(1,1),new oi({map:rv(),transparent:!0,depthWrite:!1,opacity:.55}));wg.rotation.x=-Math.PI/2,wg.position.y=.004,wg.renderOrder=-1,cg.add(wg);var Tg=new Y(new la(.16,.22,32),new oi({color:16736368,transparent:!0,opacity:.8,depthWrite:!1}));Tg.visible=!1,cg.add(Tg);var Eg=null;function $(){return Eg}function Dg(e,t=!1,n,r){Eg&&(cg.remove(Eg.levelGroup),nv(Eg.levelGroup),Eg.exitView&&(cg.remove(Eg.exitView.group),Eg.exitView.dispose()));let i=n??Td(e),a=new pf(i.level,Yh),o=ng.mods,s=ig??Math.round((i.startWorms+o.extraWorms)*(t?1.5:1));a.setCount(s),a.params.drive*=o.driveMul,a.dashBoost*=o.dashBoost,a.dashCooldownMax=o.dashCooldown,fg||(fg=new Am(Yh,a.radius,eg),cg.add(fg.mesh,fg.silhouette));let c=new rm(i.level,a,i.sandbox?null:i);c.respawn=i.sandbox,i.sandbox?c_.show():c_.hide(),c.mods={shotSave:o.shotSave,burnMul:o.burnMul};let l=i.infest?new Em(c,i.infest):null;c.visibleCap=i.goal.type===`district`?eg===`low`?220:450:Yh,P_=-1,fg.setSkin(Mh.find(e=>e.id===ng.data.skin)??Mh[0]),fg.setThickness(1);let{group:u,pickables:d}=Nm(i.level);Sg.attach(u,c.floor),Cg.rebuild(c.litter),cg.add(u);let f=i.exit?new Hm(i.exit,i.level):null;f&&cg.add(f.group),pg.rebuild(c.humans),gg.rebuild(c.doors,i.level),_g.rebuild(i.level.meta.hazards??[]),vg.clear(),bg.rebuild(i.level,c.edibles),xg.rebuild(c.edibles),__?.setVisible(!1);let p=i.location===`house`,m=i.location===`street`;lg.color.setHex(p?16769728:m?12899046:13623551),ug.color.setHex(p?16765600:m?16771276:16773600),ug.intensity=p?1.5:m?1.7:1.8,Eg={index:e,def:i,swarm:a,game:c,levelGroup:u,pickables:d,exitView:f,resultShown:!1,revived:!1,startCount:s,director:l,humansVersion:c.humansVersion,restart:r??(()=>void w_(e))},Zg.set(i.level.spawn[0],0,i.level.spawn[2]),Qg=7,kg.down=!1,o_.startLevel(i,e,wd.length),a_.setWorms(a.count),Og()}function Og(){let e=[];cg.traverse(t=>{t.visible||=(e.push(t),!0)}),og.compile(cg,dg);for(let t of e)t.visible=!1}var kg={down:!1,x:0,y:0,id:-1},Ag={t:0,x:0,y:0},jg=new Set,Mg=new ko,Ng=new G,Pg=new K,Fg=new K;function Ig(){return bg.pickables.length?[...$().pickables,...bg.pickables]:$().pickables}function Lg(e,t){let n=sg.getBoundingClientRect();Ng.set((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),Mg.setFromCamera(Ng,dg);let r=Mg.intersectObjects(Ig(),!1)[0];return!r||!r.face?null:(Pg.copy(r.face.normal).transformDirection(r.object.matrixWorld),{point:r.point.clone(),normal:Pg.clone()})}var Rg=new ko,zg=new K,Bg=new K(0,-1,0);function Vg(e,t,n=!1){Rg.set(zg.set(e,6,t),Bg);let r=Rg.intersectObjects(n?$().pickables:Ig(),!1)[0];if(!r||!r.face)return null;let i=r.face.normal.clone().transformDirection(r.object.matrixWorld);return i.y<.5?null:{point:r.point.clone(),normal:i}}function Hg(e,t,n){$().swarm.explode(e,t,n)}function Ug(){if(Gg())return;let{game:e,swarm:t,def:n}=$();e.phase===`playing`&&(n.goal.type===`district`?e.useAbility(`ram`,t.target[0],t.target[2]):t.dash())&&Bh.dash()}function Wg(e){if(Gg())return;let{game:t,swarm:n}=$();t.useAbility(e,n.target[0],n.target[2])&&Bh.pop()}sg.addEventListener(`contextmenu`,e=>e.preventDefault());function Gg(){return zh.adActive||s_.visible}window.addEventListener(`pointerdown`,()=>Bh.unlock(),{capture:!0}),window.addEventListener(`keydown`,()=>Bh.unlock(),{capture:!0}),sg.addEventListener(`pointerdown`,e=>{if(Gg())return;if(e.button===2){let t=Lg(e.clientX,e.clientY);t&&Hg(t.point.x,t.point.y,t.point.z);return}if(kg.down)return;let t=performance.now();t-Ag.t<300&&Math.hypot(e.clientX-Ag.x,e.clientY-Ag.y)<40&&Ug(),Ag={t,x:e.clientX,y:e.clientY},kg.down=!0,kg.id=e.pointerId,kg.x=e.clientX,kg.y=e.clientY,o_.dismissIntroSoon();try{sg.setPointerCapture(e.pointerId)}catch{}}),sg.addEventListener(`pointermove`,e=>{e.pointerId===kg.id&&(kg.x=e.clientX,kg.y=e.clientY)});var Kg=e=>{e.pointerId===kg.id&&(kg.down=!1,kg.id=-1)};sg.addEventListener(`pointerup`,Kg),sg.addEventListener(`pointercancel`,Kg),window.addEventListener(`keydown`,e=>{if(!Gg()){if(jg.add(e.code),e.code===`Space`&&Ug(),$().def.goal.type===`district`){for(let t of Ld)t.key&&t.key.length===1&&e.code===`Key`+t.key&&Wg(t.id);let t=/^(?:Digit|Numpad)([1-4])$/.exec(e.code);t&&__.pressKey(Number(t[1]),e.repeat)&&e.preventDefault()}e.code===`KeyR`&&$().restart()}}),window.addEventListener(`keyup`,e=>jg.delete(e.code)),window.addEventListener(`blur`,()=>jg.clear());var qg=1.5;function Jg(e,t){let n=$().def.level.boxes.find(e=>e.kind===`floor`);if(!n)return[e,t];let r=n.h[0]-.5-.25,i=n.h[2]-.5-.25;return[Math.max(n.c[0]-r,Math.min(n.c[0]+r,e)),Math.max(n.c[2]-i,Math.min(n.c[2]+i,t))]}function Yg(e){let t=$().swarm,n=!1,r=!1;if(kg.down){let e=Lg(kg.x,kg.y);e&&(e.normal.y>.5&&([e.point.x,e.point.z]=Jg(e.point.x,e.point.z)),t.setTarget(e.point.x,e.point.y,e.point.z,e.normal.x,e.normal.y,e.normal.z),Xg(e.point,e.normal)),n=!0}else{let e=(jg.has(`KeyD`)||jg.has(`ArrowRight`)?1:0)-(jg.has(`KeyA`)||jg.has(`ArrowLeft`)?1:0),i=(jg.has(`KeyS`)||jg.has(`ArrowDown`)?1:0)-(jg.has(`KeyW`)||jg.has(`ArrowUp`)?1:0);if(e||i){let a=t.centroid,o=$().game.edibles.some(e=>!e.gone&&a[0]>e.hull[0]&&a[0]<e.hull[1]&&a[1]<e.hull[3]&&a[2]>e.hull[4]&&a[2]<e.hull[5]),s=Math.hypot(e,i),c=e/s,l=i/s,u=null;for(let e of[.5,1,qg]){let[t,n]=Jg(a[0]+c*e,a[2]+l*e),r=Vg(t,n,o);if(r&&r.point.y>a[1]+.15){u=r;break}e===qg&&(u=r)}if(u)t.setTarget(u.point.x,u.point.y,u.point.z,u.normal.x,u.normal.y,u.normal.z);else{let[e,n]=Jg(a[0]+c*qg,a[2]+l*qg);t.setTarget(e,0,n,0,1,0)}Tg.visible=!1,n=!0,r=!0,o_.dismissIntroSoon()}}n||(t.clump(),Tg.visible=!1),$().game.steerByKeys=r,$().game.playerIdle=!n}function Xg(e,t){Tg.position.copy(e).addScaledVector(t,.01),Tg.lookAt(Fg.copy(e).add(t)),Tg.visible=!0}var Zg=new K,Qg=7,$g=1;sg.addEventListener(`wheel`,e=>{e.preventDefault(),$g=Et.clamp($g*Math.exp(e.deltaY*.001),.3,2.5)},{passive:!1});var e_=null,t_=null,n_=0;function r_(e){if(e_){n_+=e;let t=e_(n_);dg.position.set(...t.pos),dg.lookAt(t.look[0],t.look[1],t.look[2]),wg.visible=!1;return}let t=$().swarm,n=t.centroid,r=1-Math.exp(-e*3);Zg.x+=(n[0]-Zg.x)*r,Zg.y+=(Math.max(0,n[1])-Zg.y)*r,Zg.z+=(n[2]-Zg.z)*r;let i=6.2+.18*Math.sqrt(t.count);dg.aspect<1&&(i/=Math.sqrt(dg.aspect)),($().def.infest||$().def.goal.type===`district`)&&(i*=1.25),i*=$g,Qg+=(i-Qg)*(1-Math.exp(-e*1.5)),D_*=Math.exp(-e*6);let a=Qg*(1-.07*D_),o=.06*D_;dg.position.set(Zg.x+(Math.random()-.5)*o,Zg.y+Math.sin($h)*a+(Math.random()-.5)*o,Zg.z+Math.cos($h)*a),dg.lookAt(Zg);let s=1.2+.2*Math.sqrt(t.count);wg.position.x=Zg.x,wg.position.z=Zg.z,wg.scale.set(s,s,1)}function i_(){let e=ag.clientWidth,t=ag.clientHeight;og.setSize(e,t,!1),dg.aspect=e/t,dg.updateProjectionMatrix()}window.addEventListener(`resize`,i_),i_();var a_=new Ch(ag,25,Yh,{onWorms:e=>$().swarm.setCount(e),onDash:Ug,onAbility:e=>Wg(e),onReset:()=>Dg($().index)}),o_=new Eh(ag),s_=new Lh(ag,ng,rg,{onPlay:(e,t)=>void w_(e,t),rewarded:()=>zh.rewardedBreak(),adsAvailable:()=>zh.adsAvailable,onSkin:e=>fg?.setSkin(Mh.find(t=>t.id===e)??Mh[0]),onSandbox:()=>l_(),onDistrict:()=>g_(),districtStars:()=>ng.data.levels[f_[m_()].id]?.stars??0,districtName:()=>{let e=m_(),t=p_();return`Район ${e+1}: ${f_[e].name}${t?` · рост ×${h_().toFixed(1).replace(`.`,`,`)}`:``}`}}),c_=new Om(ag,{getWorms:()=>$().swarm.count,setWorms:e=>$().swarm.setCount(e),addHuman:e=>{let{game:t,swarm:n}=$();t.addHuman(e,n.centroid[0],n.centroid[2]-2.5),pg.rebuild(t.humans)},clearHumans:()=>{$().game.clearHumans(),pg.rebuild($().game.humans)},setInvulnerable:e=>$().game.invulnerable=e,setRespawn:e=>$().game.respawn=e,reset:()=>l_(),exit:()=>{c_.hide(),T_()}});function l_(){o_.hideResult(),s_.hide(),zh.gameplayStop(),Dg(0,!1,_d(Dd),l_),zh.gameplayStart()}var u_=null;function d_(){l_(),$().game.respawn=!1,$().game.clearHumans(),c_.hide(),$().swarm.setCount(50),u_=new oh(ag,()=>$().swarm.count,e=>$().swarm.setCount(e),Yh);let e=0;t_=t=>{e+=t*.35,$().swarm.setTarget(Math.cos(e)*3,0,Math.sin(e)*2.5,0,1,0)}}var f_=[kd,Ad];function p_(){return f_.filter(e=>ng.data.levels[e.id]?.done).length}function m_(){let e=f_.findIndex(e=>!ng.data.levels[e.id]?.done);return e<0?f_.length-1:e}function h_(){return 1+.5*p_()}function g_(e=m_()){o_.hideResult(),s_.hide(),zh.gameplayStop(),Dg(0,!1,_d(f_[e]),()=>g_(e));let{game:t,swarm:n}=$();t.mut.wormsMul*=h_(),n.setCount(n.count+10*p_()),$().districtIndex=e,zh.gameplayStart()}var __=new Wd(ag,{dna:()=>$().game.dna,worms:()=>$().game.totalWorms,owned:e=>$().game.owned[e]??0,price:e=>$().game.abilityPrice(e),whyNot:e=>$().game.whyNot(e),hint:()=>$().game.suggestion(),perk:()=>$().game.perkOffer(),buyPerk:()=>{let e=$().game.buyPerk();return e&&Bh.jingle(!0),e},buy:e=>{let t=$().game.buyAbility(e);return t&&Bh.pop(),t}});function v_(){o_.hideResult(),s_.hide(),zh.gameplayStop(),Dg(0,!1,_d(Od),v_),zh.gameplayStart()}zh.setHooks({onAdStart:()=>{Bh.setAdMuted(!0),kg.down=!1,jg.clear()},onAdEnd:()=>Bh.setAdMuted(!1)});var y_=document.createElement(`div`);y_.className=`corner`,y_.innerHTML=`<button class="icon-btn" data-menu aria-label="Гнездо">☰</button><button class="icon-btn" data-mute aria-label="Звук"></button>`,ag.append(y_),y_.addEventListener(`pointerdown`,e=>e.stopPropagation());var b_=y_.querySelector(`[data-mute]`),x_=()=>b_.textContent=Bh.isMuted?`🔇`:`🔊`;x_(),b_.addEventListener(`click`,()=>{Bh.unlock(),Bh.setMuted(!Bh.isMuted),ng.data.muted=Bh.isMuted,ng.save(),x_()}),y_.querySelector(`[data-menu]`).addEventListener(`click`,()=>T_());var S_=0,C_=-1;async function w_(e,t=!1){o_.hideResult(),s_.hide(),zh.gameplayStop(),S_>0&&C_!==0&&await zh.commercialBreak(),Dg(e,t),S_++,C_=e,zh.gameplayStart()}function T_(){zh.gameplayStop(),o_.hideResult(),kg.down=!1,s_.show()}function E_(){let{game:e}=$();__.setVisible(e.phase===`playing`),__.update(),a_.setAbilities([...Ld.filter(t=>t.kind===`active`&&t.id!==`ram`&&e.owned[t.id]).map(t=>({id:t.id,icon:t.icon,ready:e.abilityReady(t.id),key:t.key}))]);for(let t of e.newMilestones.splice(0))o_.flash(`🏆 ${t.text}! +${t.reward*10} 🧬`),Bh.jingle(!0)}var D_=0;function O_(e){let t=e.human,n=pg.outfit(t.kind,t.id);vg.add(e.x,e.z,t.heading,n),hg.burst(e.x,.6,e.z,[n.top,n.top,n.bottom]),fg?.gulp(e.x,.4,e.z),D_=Math.max(D_,.5)}function k_(e){let t=0;for(let n of e.fx)n.type===`gnaw`?(hg.morsel(n.bx,n.by,n.bz,n.x,n.y,n.z,n.color),t++<2&&Bh.crunch(),Math.random()<.15&&fg?.gulp(n.x,n.y,n.z)):n.type===`gnawed`&&n.index<0?(hg.chips(n.x,n.y,n.z,n.color,3),t++<3&&Bh.crunch(),D_=Math.max(D_,.25)):n.type===`gnawed`?(hg.burst(n.x,n.y+.3,n.z,[n.color,n.color,7035464],14,.7),Bh.pop()):n.type===`spend`?(hg.burst(n.x,n.y,n.z,[10289018,7002202,12865628],20,.8),fg?.gulp(n.x,n.y,n.z),D_=Math.max(D_,.4)):n.type===`vacuum`?(hg.burst(n.x,n.y,n.z,[13154559,16777215],12,.5,!1),Bh.dash()):n.type===`fizz`&&hg.chips(n.x,n.y,n.z,Math.random()<.5?10288986:n.color,2)}function A_(){let e=$().game;for(let t of e.events)t.kind===`human`?(Bh.pop(),Bh.gulp()):t.kind===`food`&&Bh.squelch();for(let t of e.fx)t.type===`shot`?Bh.shot():t.type===`door`?Bh.door():t.type===`alert`&&Bh.scream(.9+Math.random()*.3)}var j_=new K;function M_(){let e=sg.getBoundingClientRect();for(let t of $().game.events)j_.set(t.x,t.y+.6,t.z).project(dg),a_.pop(e.left+(j_.x+1)/2*e.width,e.top+(1-j_.y)/2*e.height,`+${t.worms}`,t.kind===`human`)}var N_=``,P_=-1,F_=0;function I_(e,t){if((P_<0||e<P_)&&(P_=e),F_-=t,F_>0||e-P_<1)return;F_=.6;let n=$().swarm.centroid,r=sg.getBoundingClientRect();j_.set(n[0],n[1]+.9,n[2]).project(dg),a_.pop(r.left+(j_.x+1)/2*r.width,r.top+(1-j_.y)/2*r.height,`+${Math.round(e-P_)} 🧬`,!1),P_=e}var L_=0;function R_(e){let t=$(),{game:n,swarm:r,def:i}=t,a={eaten:n.stats.humansEaten,escaped:n.stats.humansEscaped,humansLeft:i.infest?-1:n.humansLeft,food:i.infest||i.goal.type===`district`?n.stats.foodEaten:n.food.length-n.foodLeft,foodTotal:i.infest?-1:n.food.length,overflow:n.stats.overflow,objects:n.edibles.filter(e=>e.gone).length,objectsTotal:i.goal.type===`district`?n.edibles.length:-1},o=Object.values(a).join(`,`);o!==N_&&(N_=o,a_.updateGame(a)),a_.setWorms(r.count);let s=i.goal.type===`district`,c=s?n.nextMilestone():null;a_.setGrowth(s?n.totalWorms:r.count,-1,-1,0,s?n.dna:-1,0,c?c.def.text:``,c?c.progress:0),s&&I_(n.dnaTotal,e);let l,u;if(i.sandbox)l=`Тестовый стенд`,u=0,c_.sync();else if(i.goal.type===`district`)l=`Район съеден ${Math.min(100,Math.floor(n.districtShare/i.goal.share*100))}%`,u=n.districtShare/i.goal.share,xg.update(n),E_(),L_-=e,n.lockedHint&&L_<=0&&(L_=3,o_.flash(`Не по зубам: нужны 🦷 Челюсти ${n.lockedHint.level} (сейчас ${n.owned.jaws??0}) — качай внизу`));else if(i.goal.type===`infest`){let e=t.director;l=`Заражение ${Math.min(100,Math.floor(n.stats.score/i.goal.count*100))}%${e.stage?` · 🚨`+`★`.repeat(e.stage)+`☆`.repeat(Xh-e.stage):``}`,u=n.stats.score/i.goal.count;for(let t of e.news.splice(0))o_.flash(t)}else i.goal.type===`eat`?(l=`Съешь людей: ${n.stats.humansEaten}/${i.goal.count}`,u=n.stats.humansEaten/i.goal.count):(l=i.exit?.kind===`vent`?`Доберись до вентиляции`:`Доберись до слива`,u=n.exitFill);if(o_.update(e,l,u,n.elapsed),V_(),n.outcome&&!t.resultShown){t.resultShown=!0;let e=n.outcome;zh.gameplayStop(),Bh.jingle(e.result===`won`),e.result===`won`&&ng.recordWin(i.id,e.stars.filter(Boolean).length,e.reward),setTimeout(()=>{if($().game!==n)return;let r=!!i.infest||i.goal.type===`district`,a=i.goal.type===`district`?e.result===`won`&&(t.districtIndex??0)+1<f_.length:!r&&t.index+1<wd.length,o=e.result===`lost`&&e.reason===`Рой погиб`&&!t.revived&&zh.adsAvailable;o_.showResult(i,e,a,{onRetry:t.restart,onNext:i.goal.type===`district`&&e.result===`won`?()=>g_(Math.min(f_.length-1,(t.districtIndex??0)+1)):r?t.restart:()=>void w_(a?t.index+1:0),onNest:T_,onDouble:zh.adsAvailable?async()=>{let t=await zh.rewardedBreak();return t&&(ng.data.biomass+=e.reward,ng.save()),t}:void 0,onRevive:o?async()=>await zh.rewardedBreak()&&t.game.revive(t.startCount)?(t.revived=!0,t.resultShown=!1,zh.gameplayStart(),!0):!1:void 0})},e.result===`won`?1200:700)}}function z_(e,t){for(let n of e.edibles)if(!(n.gone||e.lockOf(n))&&Math.hypot(n.def.base[0]-t[0],n.def.base[2]-t[2])<7)return!0;return!1}var B_=new K;function V_(){let{def:e,game:t,swarm:n}=$(),r=e.exit?e.exit.pos:null;if(e.goal.type===`district`&&!z_(t,n.centroid)){let e=1/0,i=n.centroid;for(let n of t.edibles){if(n.gone||t.lockOf(n))continue;let a=Math.hypot(n.def.base[0]-i[0],n.def.base[2]-i[2]);a<e&&(e=a,r=[n.def.base[0],n.hull[3],n.def.base[2]])}}if(!r||t.phase!==`playing`){o_.pointArrow(!1);return}B_.set(r[0],r[1],r[2]).project(dg);let i=B_.z>1;if(!i&&Math.abs(B_.x)<.9&&Math.abs(B_.y)<.85){o_.pointArrow(!1);return}let a=sg.getBoundingClientRect(),o=i?-B_.x:B_.x,s=i?-B_.y:B_.y,c=Math.atan2(s,o);o=Math.cos(c)*.78,s=Math.sin(c)*.62;let l=a.left+(o+1)/2*a.width,u=a.top+(1-s)/2*a.height;o_.pointArrow(!0,l,u,Math.atan2(-s,o))}var H_=qh.has(`showcase`);Dg(tg??ng.nextLevel(rg.map(e=>e.id))),H_?Kh(()=>import(`./Showcase-BR2j3XB3.js`).then(e=>e.runShowcase({start:()=>Dg(0,!1,_d(Ed)),get swarm(){return $().swarm},get game(){return $().game},renderer:og,camera:dg,render:()=>og.render(cg,dg),resize:i_,setCamera:e=>{e_=e,n_=0},onStep:e=>{t_=e},app:ag})),[],import.meta.url):zh.init().then(()=>{zh.loadingFinished(),Jh?d_():qh.has(`sandbox`)?l_():qh.has(`infest`)?v_():qh.has(`district`)||tg===null&&ng.isNewPlayer?g_():tg===null?T_():(S_=1,C_=$().index,zh.gameplayStart())});var U_=!1;document.addEventListener(`visibilitychange`,()=>{U_=document.hidden,document.hidden?zh.gameplayStop():!s_.visible&&$().game.phase===`playing`&&zh.gameplayStart()});var W_=0,G_=performance.now(),K_=G_,q_=0,J_=0,Y_=0,X_=0,Z_=0,Q_=0,$_=0;og.setAnimationLoop(e=>{let t=performance.now(),n=Math.min((e-G_)/1e3,.1);G_=e;let r=$(),{swarm:i,game:a}=r,o=zh.adActive||s_.visible||U_;!o&&!t_&&Yg(n),W_+=o?0:n;let s=0,c=performance.now();for(;W_>=Zh&&s<Qh;){t_?.(Zh),a.step(Zh);for(let e of a.events)e.human&&O_(e);k_(a),M_(),A_(),hg.push(a.fx),i.step(Zh),W_-=Zh,s++}let l=i.centroid[0],u=i.centroid[2],d=Math.hypot(l-Q_,u-$_)/Math.max(n,.001);Q_=l,$_=u;let f=(a.level.meta.hazards??[]).some((e,t)=>e.kind===`electric`&&a.hazardActive(t)&&Math.abs(l-e.c[0])<e.h[0]+2&&Math.abs(u-e.c[1])<e.h[1]+2);Bh.update(o?0:i.count,o?0:d,!o&&a.humans.some(e=>e.firing),o?0:+!!f),s===Qh&&(W_=0);let p=performance.now()-c;fg.update(i,W_/Zh),fg.tick(n),vg.update(n),bg.update(a.level,a.edibles,n),ev(r),pg.update(a.humans,n),mg.update(a.food,n),yg.update(a.crumbs),hg.update(n),gg.update(a.doors),_g.update(n,e=>a.hazardActive(e)),a_.setDash(1-Math.max(0,i.dashCooldown)/i.dashCooldownMax),a_.setDashLabel(r.def.goal.type===`district`?`Таран`:`Рывок`),r.def.goal.type!==`district`&&(a_.setAbilities([]),__.setVisible(!1)),Sg.update(n),Cg.update(a.litter,n),r.exitView?.update(n,a.phase===`won`?1:a.exitFill),r_(n),R_(n),og.render(cg,dg),q_++,J_+=p,Z_+=s,p>Y_&&(Y_=p),X_+=performance.now()-t,u_?.frame(n*1e3,p,n),e-K_>=500&&(a_.update({fps:q_*1e3/(e-K_),physMs:J_/q_,physMaxMs:Y_,frameMs:X_/q_,worms:i.count,points:i.count*10,calls:og.info.render.calls,steps:Z_}),K_=e,q_=0,J_=0,Y_=0,X_=0,Z_=0)}),Object.defineProperties(window,{swarm:{get:()=>$().swarm,configurable:!0},game:{get:()=>$().game,configurable:!0}});function ev(e){e.humansVersion!==e.game.humansVersion&&(e.humansVersion=e.game.humansVersion,pg.rebuild(e.game.humans))}function tv(e,t){let n=$();for(let r=0;r<Math.round(e/Zh);r++){t?n.swarm.setTarget(t[0],t[1],t[2],0,1,0):t_||Yg(Zh),t_?.(Zh),n.game.step(Zh);for(let e of n.game.events)e.human&&O_(e);k_(n.game),hg.push(n.game.fx),n.swarm.step(Zh),hg.update(Zh),vg.update(Zh),bg.update(n.game.level,n.game.edibles,Zh),Sg.update(Zh),Cg.update(n.game.litter,Zh),fg.tick(Zh),ev(n),pg.update(n.game.humans,Zh),r_(Zh)}fg.update(n.swarm,1),mg.update(n.game.food,0),yg.update(n.game.crumbs),gg.update(n.game.doors),_g.update(0,e=>n.game.hazardActive(e)),n.exitView?.update(0,n.game.exitFill),R_(0),og.render(cg,dg)}Object.assign(window,{camera:dg,startLevelAt:Dg,playLevel:w_,openNest:T_,advance:tv,progress:ng,poki:zh,lockView:xg,setZoom:e=>$g=e});function nv(e){e.traverse(e=>{if(e instanceof Y){e.geometry.dispose();let t=e.material;t.map?.dispose(),t.dispose()}})}function rv(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(0,0,0,0.9)`),n.addColorStop(.5,`rgba(0,0,0,0.45)`),n.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),new Xi(e)}function iv(e,t,n,r){let i=e===null?t:parseInt(e,10);return Number.isFinite(i)?Math.max(n,Math.min(r,i)):t}