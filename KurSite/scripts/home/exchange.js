$(function () {



    $("#exchangeButton").click(function () {
        var firstForex = $("#firstForexSelected option:selected").text();
        var secondForex = $("#secondForexSelected option:selected").text();

        var firstForexValue = $("#firstForexSelected").val();
        var secondForexValue = $("#secondForexSelected").val();
        var number = $("#number").val();
        var value = (firstForexValue / secondForexValue)*number;

        $("#firstForex").text(firstForex)  ;
        $("#secondForex").text(secondForex)  ;
        $("#forexValue").text(value.toFixed(4));
        $("#numberText").text(number);


    })
});