$(function () {
    $("#colorChangeButton").click(function () {
        var colorValue = $("#color").val();
        $("td").css("color", colorValue);
    });




    $("#fontSizeChangeButton").click(
        function () {
            var fontSize = $("#fontSize").val();
            if (fontSize < 12 || fontSize > 30) {
                alert("Lutfen 12 ile 30 arasinda bir deger giriniz!")
            }
            else {
                var fontSizeValue = fontSize + "px";
                $("td").css("fontSize", fontSizeValue);
            }
            
        });
    $("body").on("load", function () {
        
        $.ajax({
            type: "GET",
            url: "https://www.tcmb.gov.tr/kurlar/202310/04102023.xml",
            dataType: "xml",
            success: function (xml) {
                debugger;
                // XML i�indeki kitaplar� i�le
                $(xml).find('Currency').each(function () {
                    var baslik = $(this).find('Isim').text();
                    var yazar = $(this).find('ForexBuying').text();
                    console.log("Ba�l�k: " + ba�l�k + ", Yazaar: " + yazar);
                });
            },
            error: function () {
                console.log("XML dosyas� i�lenirken bir hata olu�tu.");
            }
        });
    });
    
    
});
