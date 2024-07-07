$(function () {
    $("#colorChangeButton").click(function () {
        var colorValue = $("#color").val();
        $("td").css("color", colorValue);
    });

    $("#fontSizeChangeButton").click(
        function () {
            var fontSize = $("#fontSize").val();
            if (fontSize < 12 || fontSize > 31) {
                alert("Lutfen 12 ile 30 arasinda bir deger giriniz!")
            }
            else {
                var fontSizeValue = fontSize + "px";
                $("td").css("fontSize", fontSizeValue);
            }
            
    });
    
});
