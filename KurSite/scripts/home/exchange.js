$(function () {



    $("#exchangeButton").click(function () {
        var firstForex = $("#firstForexSelect").val();
        var secondForex = $("#secondForexSelect").val();
        $("#firstForex").text(firstForex)  ;
        $("#secondForex").text(secondForex)  ;



    })
});