function downloadJSAtOnload() {
var element = document.createElement(&quot;script&quot;);
element.src = &quot;https://cdn.rawgit.com/hindishareblog/hs/5f322529e53d62e34a08b4535c7beb4dd057b9cb/html5.js&quot;;
document.body.appendChild(element);
}
if (window.addEventListener)
window.addEventListener(&quot;load&quot;, downloadJSAtOnload, false);
else if (window.attachEvent)
window.attachEvent(&quot;onload&quot;, downloadJSAtOnload);
else window.onload = downloadJSAtOnload;
