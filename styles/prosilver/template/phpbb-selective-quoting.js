(function(w, d) {
    var clickHandler, editorDiv, msgText, qButtons, len;

    editorDiv = d.getElementById('qr_postform');
    
    clickHandler = function(event) {
        if (w.getSelection) {
            var selObj, postBody;

            selObj = w.getSelection()

            if (selObj && selObj != '') {
                event.preventDefault();

                postBody = event.target.parentNode.parentNode.parentNode.parentNode;
                messageid = postBody.querySelector('.unread').href.match(/\bp=(\d+)\b/)[1];
                author = postBody.querySelector('.username');
                username = author.innerHTML;
                userid = author.href.match(/u=(\d+)/)[1];

                q = '[quote="' + username + '"' + ' user_id=' + userid + ' post_id=' + messageid + ']' + selObj + '[/quote]';

                msgText.value = msgText.value + q + "\r\n";
                msgText.focus();
                previewButton = document.getElementById('qr_full_editor');
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
