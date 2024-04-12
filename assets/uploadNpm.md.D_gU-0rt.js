import{_ as a,c as s,o as e,a2 as t}from"./chunks/framework.mHHrDb8M.js";const p="/assets/start.iCkyZL-Z.jpg",o="/assets/end.DiCsmURs.jpg",i="/assets/log.viWRN5Vr.jpg",b=JSON.parse('{"title":"简介","description":"","frontmatter":{},"headers":[],"relativePath":"uploadNpm.md","filePath":"uploadNpm.md"}'),l={name:"uploadNpm.md"},n=t(`<h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><p>uploadnpm 是一个Node.js创建的自动批量上传包到npm私服的工具</p><h2 id="产生背景" tabindex="-1">产生背景 <a class="header-anchor" href="#产生背景" aria-label="Permalink to &quot;产生背景&quot;">​</a></h2><p>在使用 Verdaccio 构建了本地私有npm仓库之后，就需要上传npm包。前端工程的node_modules下有着大量的npm包，手动在包下执行npm publish 这种方式比较费时费力，当包中依赖别的包时，更需要将依赖包也上传，动辄几十上百个包。此时uploadnpm工具应运而生，解放前端攻城狮娇嫩的双手，实现一键上传。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm set registry http://localhost:4873/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install --global uploadnpm</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>在前端工程的根目录【node_modules同级目录】下执行</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upload_npm</span></span></code></pre></div><p><img src="`+p+'" alt="执行过程1"><img src="'+o+'" alt="执行过程2"></p><p>执行完之后会在工程根目录下生成log文件，可以查看发布成功的npm包</p><p><img src="'+i+'" alt="log"></p><h2 id="源码解读" tabindex="-1">源码解读 <a class="header-anchor" href="#源码解读" aria-label="Permalink to &quot;源码解读&quot;">​</a></h2><p> <a href="./uploadCode.html">uploadnpm</a></p>',14),d=[n];function r(h,c,m,u,_,g){return e(),s("div",null,d)}const f=a(l,[["render",r]]);export{b as __pageData,f as default};