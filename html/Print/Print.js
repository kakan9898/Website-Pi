$(document).ready(function(){

    function updateFromFile(){
        $.get('../Print.md', function(data) {
            $("p").text(data)

            $("html, body").animate({
                scrollTop: $(document).height()
            }, 1);
        }, "text");
    }

    updateFromFile()



    var millisecondsToWait = 1500;
    setTimeout(function() {
    // Whatever you want to do after the wait
        updateFromFile()
    }, millisecondsToWait);


});
