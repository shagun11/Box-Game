$('li').click(function () {
    var randomNumber = Math.floor((Math.random() * 100) + 1),
        index = $(this).index() + 1,
        text;

    if (index == randomNumber) {
        text = 'Congratulations, you have won $100';
        createModal(text);
        $("li").off("click"); // prevent user from further clicking

    } else {
        text = 'Sorry! You have to Try again';
        createModal(text);
        $("li").off("click");
    }

    // It creates the modal and fills it with the text parameter passed
    function createModal(text) {
        $("#modal-content").text(text);
        $("#modal-content").toggleClass("active");
    }

    //  Hides the modal after clicking on it         
    $("#modal-content").click(function (event) {
        $(this).hide();
    });

});
