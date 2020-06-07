$( document ).ready(function() {
    $("#get_2005").addClass("music-year-bold");

    $("#get_2008").on("click", function(){
        $("#get_2005").removeClass("music-year-bold");
        $("#get_2008").addClass("music-year-bold");
    });
});


