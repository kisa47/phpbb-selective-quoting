# phpBB Selective Quoting
Selective Quoting mod for phpBB 3.0.12 (Prosilver theme).

## Modification

### Modify viewtopic_body.html file
/styles/prosilver/template/viewtopic_body.html
Insert below code:
```javascript
<script type="text/javascript">
//<![CDATA[
(function(){var e,b,d,c,a;b=document.getElementById("qr_editor_div");e=function(g){if(window.getSelection){var h,f;h=window.getSelection();if(h&&h!=""){g.preventDefault();f=g.target.parentNode.parentNode.parentNode,author=f.querySelectorAll(".author a")[1].innerHTML,q='[quote="'+author+'"]'+h+"[/quote]";b.style.display="block";d.value=d.value+q+"\r\n";d.focus()}}};if(b){d=b.querySelector('textarea[name="message"]');c=document.querySelectorAll('a[href*="posting.php?mode=quote"]');a=c.length;while(a--){c[a].addEventListener("click",e)}}})();
//]]>
</script>
```
before:
<!-- INCLUDE overall_footer.html -->

###Delete
/cache/tpl_prosilver_viewtopic_body.html.php

## Usage:
Just select text and press quote button.
If you do not select any text, default action will be triggered.

## Required phpBB settings:
Quick reply must be enabled.