module.exports = (Franz, options) => {

    function getMessages() {
        var reply  = 0;
        $('.list_item_talk .new_chat_count').each(function () {
            reply += parseInt($(this).text());
        });

        Franz.setBadge(reply);
     }

     Franz.loop(getMessages);
}
