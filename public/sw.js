if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const d=e=>a(e,n),r={module:{uri:n},exports:t,require:d};s[n]=Promise.all(c.map((e=>r[e]||d(e)))).then((e=>(i(...e),t)))}}define(["./workbox-80ca14c3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"42b047d87d47a88c706af3d83eb4121d"},{url:"/_next/static/CpmcY47sk_bHQsxuxdBSl/_buildManifest.js",revision:"74ee1ff34f6d02763878780365a1af8a"},{url:"/_next/static/CpmcY47sk_bHQsxuxdBSl/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/239-cc88e768fa049fcd.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/334-f8daac0d6876ad42.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/372-4c98fef544f3d453.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/439-08a957b210169435.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/465-e933308b2a4fb14d.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/477-958883f7096e9478.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/494-4c4fb4452d1d0d2d.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/503-8679e789bafd09de.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/5150e096-5d90bd899d5a60cb.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/558-c62ab268663e6c84.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/576-2fd5f05af90222db.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/585-c19077c644ede053.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/637-7a9323d27050b459.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/669-135907ac0fe60b17.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/674-6153a768faeb7c80.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/718-84f389dfcd7612f6.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/763-816982d04e7c1062.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/7ee2d3a7-d3b259cd40973994.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/894-93afa68b03ffa772.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/906-ab401f7f13a2abd2.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/973-871047440cc4dba3.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/app/about/page-96f3bbb97963d558.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/app/blogs/page-b6c5ab7b680e2ca4.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/app/contact/page-94d86eaecd7f741b.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/app/layout-6b319f546e2c0159.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/app/page-5db3cbcfb2aed306.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/app/services/page-ec2ebcb4e18e8077.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/d3a2d874-d95931d1f3120f8c.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/de4c4141-51dceb0db09ce6cb.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/framework-09499f5b1d8163e5.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/main-07d7f0e69cda673a.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/main-app-c914053871ad9a40.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/pages/40444-2da1ed2329813dde.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/pages/_app-30b5684fb72e6f89.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/pages/_error-c8bf4bc1a7874b38.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/pages/blogs/%5Bid%5D-2d03e91e41d133c6.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/pages/blogs/modify/%5Bid%5D-e386d5310ae05918.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/pages/blogs/publish-7ae6f5d214427443.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/pages/courses-f6f2787cde92e489.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/pages/courses/%5Bid%5D-65eaac14db36f63e.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/pages/docs-d0a81ee223b03975.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/pages/docs/%5Bid%5D-a36ea9ae78102509.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/pages/portfolio-0825be654568aaf3.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/pages/search-9c54b12da9fd5b7c.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/pages/tools-b946f37a4aceb279.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-b89e52cb2e8247b2.js",revision:"CpmcY47sk_bHQsxuxdBSl"},{url:"/_next/static/css/109f9dce4fcf9ef6.css",revision:"109f9dce4fcf9ef6"},{url:"/_next/static/css/2aa3edc7d25827dc.css",revision:"2aa3edc7d25827dc"},{url:"/_next/static/css/2ae02acea5f48476.css",revision:"2ae02acea5f48476"},{url:"/_next/static/css/4b3ad3903962c4fa.css",revision:"4b3ad3903962c4fa"},{url:"/_next/static/css/9e49e987ef36de8c.css",revision:"9e49e987ef36de8c"},{url:"/_next/static/css/cfe3274639924175.css",revision:"cfe3274639924175"},{url:"/_next/static/css/d1922161147220cd.css",revision:"d1922161147220cd"},{url:"/_next/static/css/d4a2101e32889261.css",revision:"d4a2101e32889261"},{url:"/_next/static/media/angular.d848aaec.svg",revision:"97a53cbfcdfd5b5d04540aafbb9c7d43"},{url:"/_next/static/media/ant-design.e83191e4.svg",revision:"f96f7694d449ce420ac40081f1a25e28"},{url:"/_next/static/media/arco-design.cd8b55e3.png",revision:"026cbd6b7a9bb736d1f250d058619003"},{url:"/_next/static/media/fluent-design.d32d1147.jpg",revision:"c3c139c1f2eeec81bd0f13ea89a0c51d"},{url:"/_next/static/media/material-design.289ad101.png",revision:"b84ecd55dacf438be1b44c21b2aae4f7"},{url:"/_next/static/media/nest.js.76342a08.svg",revision:"943e52fd41e1fe2cd44ce8af53be7672"},{url:"/_next/static/media/next.js.3f9181a3.png",revision:"30ca0bf83ce1907a388e089e10d6da2b"},{url:"/_next/static/media/nuxt.js.8259cac5.svg",revision:"b0f8a98a7817e0b9dd6f80d055954bd8"},{url:"/_next/static/media/semi-design.f1faf5ad.png",revision:"3fab72e546efa6190909bbcaef34fcd2"},{url:"/_next/static/media/undraw_analytics_re_dkf8.50fa4f36.svg",revision:"aa54051987a4b220c6bde1b4df9ae269"},{url:"/_next/static/media/undraw_blog_post_re_fy5x.3cda16ea.svg",revision:"8741bc19bffccd597675291604c6e5d8"},{url:"/_next/static/media/undraw_contact_us_re_4qqt.4595ae9e.svg",revision:"0de10159413020111aac331bf7d7b599"},{url:"/_next/static/media/undraw_design_components_9vy6.c001a2e5.svg",revision:"bf2671750b1a44bf2ed669080f777653"},{url:"/_next/static/media/undraw_designer_re_5v95.65929b98.svg",revision:"deeeebb24da5e6ef81f322c62a0db960"},{url:"/_next/static/media/undraw_dev_productivity_re_fylf.cc791672.svg",revision:"0878026a9df8fb02d4a1aadc56edd602"},{url:"/_next/static/media/undraw_developer_activity_re_39tg.6e5e4455.svg",revision:"2aef87a4360db3f79669bfe9b12c166e"},{url:"/_next/static/media/undraw_empty_re_opql.c91519ba.svg",revision:"790973daeab4962c1624daab921e4dc0"},{url:"/_next/static/media/undraw_engineering_team_a7n2.c981b1c3.svg",revision:"ab255385e052458656712776fd7e3553"},{url:"/_next/static/media/undraw_maintenance_re_59vn.d6d0d183.svg",revision:"66b95d74c1fd5bb9a022c18f7bb92203"},{url:"/_next/static/media/undraw_next_js_-8-g5m.7d2e18ea.svg",revision:"1c8ab4bc263bbc9b107566beb3a90594"},{url:"/_next/static/media/undraw_nuxt_js_0fq9.fe528a07.svg",revision:"4dad7b2e98e785105ff597593cfb466c"},{url:"/_next/static/media/undraw_page_not_found_re_e9o6.4bd2f713.svg",revision:"f56ce81b2cad51feb7c8b1478d10e0cb"},{url:"/_next/static/media/undraw_proud_coder_re_exuy.979c0549.svg",revision:"264cddb56283816b70aec97c201a5786"},{url:"/_next/static/media/undraw_qa_engineers_dg-5-p.2a5b3be6.svg",revision:"97c82272b08ca93eb29107eda2dc6d1f"},{url:"/_next/static/media/undraw_react_y-7-wq.1ac05cd7.svg",revision:"50e0c9e7cfc74ca75adb53293eba002f"},{url:"/_next/static/media/undraw_services_re_hu5n.de083392.svg",revision:"8349626784bca50e3f9c06dedbaabd56"},{url:"/_next/static/media/undraw_software_engineer_re_tnjc.c251f4ed.svg",revision:"d471b92c41a37420f0433ef2a14f3618"},{url:"/_next/static/media/undraw_solution_mindset_re_57bf.1d3b96b8.svg",revision:"f221bd37f3f733ba2eeed9310082d5c1"},{url:"/_next/static/media/undraw_team_collaboration_re_ow29.5c81ef87.svg",revision:"4fff1cca67abb75938728db1340cf4ef"},{url:"/_next/static/media/undraw_teamwork_hpdk.ae05862c.svg",revision:"c80651496911d46cbb4634aa62af5566"},{url:"/_next/static/media/undraw_under_construction_-46-pa.78f7b58c.svg",revision:"54135d55a98cb3a77a8f8b52fcdbee1b"},{url:"/_next/static/media/vue.4cf53b88.png",revision:"cf23526f451784ff137f161b8fe18d5a"},{url:"/ads.txt",revision:"70ee876b2bb58899fb5634ad5a59e031"},{url:"/codelabs/first-flutter-app.md",revision:"d13057c3dcd446ea5b9837206b9797f9"},{url:"/favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"/favicon.png",revision:"dccf457c989915e9396922c0b11c4c83"},{url:"/googlec9753c531853faac.html",revision:"be33d1fbbf6462ba068c3d19b35ffc57"},{url:"/logo192.png",revision:"f4cab382093036c7c8ef08f9576ff03f"},{url:"/logo512.png",revision:"31a2ca9435c87bde268f416380b047a6"},{url:"/manifest.json",revision:"c8cb63aa2ec35a2cf541679070f33663"},{url:"/robots.txt",revision:"4a70bbd1367866872375843d7c0f3975"},{url:"/sitemap-0.xml",revision:"2039eeabebda05ec288abab6633004a7"},{url:"/sitemap.xml",revision:"79602c8545597111a0d4f22a291db832"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
