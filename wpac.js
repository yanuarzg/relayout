  wpac_init = window.wpac_init || [];
  wpac_init.push({
    widget: &#39;Rating&#39;,
    id: 31267,
    el: &#39;wpac-rating&#39;,
    html: &#39;{{=it.rating}} {{=it.stars}} {{?it.count&gt;0}}{{?}}&#39;
  });
  (function() {
    if (&#39;WIDGETPACK_LOADED&#39; in window) return;
    WIDGETPACK_LOADED = true;
    var mc = document.createElement(&#39;script&#39;);
    mc.type = &#39;text/javascript&#39;;
    mc.async = true;
    mc.src = &#39;//embed.widgetpack.com/widget.js&#39;;
    var s = document.getElementsByTagName(&#39;script&#39;)[0]; s.parentNode.insertBefore(mc, s.nextSibling);
  })();
