import{h as n}from"./1f529ce5.js";import"./daaff894.js";import"./8d89c6df.js";let a,s,t=n=>n;const p=document,o=[{key:"HtmlStory0",story:()=>n(a||(a=t`<iframe
  width="100%"
  height="500"
  src="https://www.youtube.com/embed/fI9dEy9JzFM"
  frameborder="0"
  allow="autoplay; encrypted-media"
  allowfullscreen
></iframe>`)),code:'<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>iframe</span>\n  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span>\n  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span>\n  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.youtube.com/embed/fI9dEy9JzFM<span class="token punctuation">"</span></span>\n  <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>\n  <span class="token attr-name">allow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>autoplay; encrypted-media<span class="token punctuation">"</span></span>\n  <span class="token attr-name">allowfullscreen</span>\n<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>iframe</span><span class="token punctuation">></span></span>\n</code></pre>'},{key:"Simple",story:()=>n(s||(s=t`
    <holochain-playground-provider
      .numberOfSimulatedConductors=${0}
      @ready=${0}
    >
      <holochain-playground-source-chain
        style="height: 800px; width: 100%"
      ></holochain-playground-source-chain>
    </holochain-playground-provider>
  `),1,(n=>{const a=n.detail.conductors[0],s=a.cells[0].id;a.callZomeFn({cellId:s,zome:"sample",fnName:"create_entry",payload:{content:{myman:"mygirl"},entry_type:"haha"},cap:null})})),code:'<pre class="language-js"><code class="language-js"><span class="token keyword module">export</span> <span class="token keyword">const</span> <span class="token function-variable function"><span class="token maybe-class-name">Simple</span></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> html<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token html language-html">\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>holochain-playground-provider</span>\n      <span class="token attr-name">.numberOfSimulatedConductors</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span></span>\n      <span class="token attr-name">@ready</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> conductor <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token property-access">detail</span><span class="token punctuation">.</span><span class="token property-access">conductors</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">const</span> cellId <span class="token operator">=</span> conductor<span class="token punctuation">.</span><span class="token property-access">cells</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token property-access">id</span><span class="token punctuation">;</span>\n        conductor<span class="token punctuation">.</span><span class="token method function property-access">callZomeFn</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          cellId<span class="token punctuation">,</span>\n          zome<span class="token punctuation">:</span> <span class="token string">"sample"</span><span class="token punctuation">,</span>\n          fnName<span class="token punctuation">:</span> <span class="token string">"create_entry"</span><span class="token punctuation">,</span>\n          payload<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            content<span class="token punctuation">:</span> <span class="token punctuation">{</span> myman<span class="token punctuation">:</span> <span class="token string">"mygirl"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            entry_type<span class="token punctuation">:</span> <span class="token string">"haha"</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          cap<span class="token punctuation">:</span> <span class="token keyword null nil">null</span><span class="token punctuation">,</span>\n        <span class="token interpolation-punctuation punctuation">}</span></span>);</span>\n      <span class="token attr-name">}}</span>\n    <span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>holochain-playground-source-chain</span><span class="token style-attr language-css"><span class="token attr-name">\n        <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">800</span><span class="token unit">px</span><span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token unit">%</span></span><span class="token punctuation">"</span></span>\n      <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>holochain-playground-source-chain</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>holochain-playground-provider</span><span class="token punctuation">></span></span>\n  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>'}];for(const n of o){const a=p.querySelector(`[mdjs-story-name="${n.key}"]`);a.codeHasHtml=!0,a.story=n.story,a.code=n.code}customElements.get("mdjs-preview")||import("./43dcff14.js"),customElements.get("mdjs-story")||import("./a8803edd.js");