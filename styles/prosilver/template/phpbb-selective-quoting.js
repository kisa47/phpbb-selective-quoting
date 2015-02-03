(function(w, d) {
    var clickHandler, editorDiv, msgText, qButtons, len;

    editorDiv = d.getElementById('qr_editor_div');

    clickHandler = function(event) {
        if (w.getSelection) {
            var selObj, postBody;

            selObj = w.getSelection()

            if (selObj && selObj != '') {
                event.preventDefault();

                postBody = event.target.parentNode.parentNode.parentNode;
                author = postBody.querySelectorAll('.author a')[1].innerHTML;
                q = '[quote="' + author + '"]' + selObj + '[/quote]';

                editorDiv.style.display = 'block';

                msgText.value = msgText.value + q + "\r\n";
                msgText.focus();
            }
        }
    };

    if (editorDiv) {
        msgText = editorDiv.querySelector('textarea[name="message"]');
        qButtons = d.querySelectorAll('a[href*="posting.php?mode=quote"]');
        len = qButtons.length;

        while (len--) {
            qButtons[len].addEventListener('click', clickHandler);
        }
    }
})(window, document);
