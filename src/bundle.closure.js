(function(){function k(a){return null!==a?a.h:0}function g(a,c,d,b){var e=k(a),f=k(b);return{left:a,key:c,value:d,right:b,h:e>=f?e+1|0:f+1|0}}function p(a,c,d,b){var e=null!==a?a.h:0,f=null!==b?b.h:0;if(e>(f+2|0)){e=a.left;f=a.key;var l=a.value;a=a.right;if(k(e)>=k(a))return g(e,f,l,g(a,c,d,b));var h=a.key,m=a.value,n=a.right;return g(g(e,f,l,a.left),h,m,g(n,c,d,b))}if(f>(e+2|0)){e=b.left;f=b.key;l=b.value;b=b.right;if(k(b)>=k(e))return g(g(a,c,d,e),f,l,b);h=e.key;m=e.value;n=e.right;return g(g(a,
c,d,e.left),h,m,g(n,f,l,b))}return{left:a,key:c,value:d,right:b,h:e>=f?e+1|0:f+1|0}}function h(a,c,d){if(null!==a){var b=a.key;if(c===b)return a=a.value===d?a:{left:a.left,key:a.key,value:d,right:a.right,h:a.h},a;var e=a.value;return c<b?p(h(a.left,c,d),b,e,a.right):p(a.left,b,e,h(a.right,c,d))}return{left:null,key:c,value:d,right:null,h:1}}console.time("buckle");(function(){for(var a=null,c=0;1E6>=c;++c)a=h(a,c,c);for(c=0;1E6>=c;++c){var d;b:for(d=a;;)if(null!==d){var b=d.key;if(c===b){d=1;break b}d=
c<b?d.left:d.right}else{d=0;break b}if(!d)throw Error('File "/Users/hongbozhang/git/bench/src/demo.ml", line 5, characters 34-41');}return 0})(0);console.timeEnd("buckle")})();