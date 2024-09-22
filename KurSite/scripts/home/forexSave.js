$(function () {


    function getForexCount() {
        var savedForex = JSON.parse(localStorage.getItem("savedForex"));
        let count = Object.keys(savedForex).length;
        console.log(count);
        return count;
    }

    savedForexListUpdate("update");

    $("#forexSaveButton").click(function () {
        if (getForexCount() < 10) {
            var firstForex = $("#firstForexSelected option:selected").text();
            var secondForex = $("#secondForexSelected option:selected").text();

            var savedForex = JSON.parse(localStorage.getItem("savedForex"));
            if (savedForex == null) {
                savedForex = {};
            }
            savedForex[firstForex] = secondForex;
            localStorage.setItem("savedForex", JSON.stringify(savedForex));
            savedForexListUpdate("update");
        }
        else {
            alert("En Fazla 10 Adet Döviz Kaydedebilirsiniz!");
        }
       
    });


});

function savedForexListDelete(key) {
    var savedForex = JSON.parse(localStorage.getItem("savedForex"));
    delete savedForex[key];
    localStorage.setItem("savedForex", JSON.stringify(savedForex));
    savedForexListUpdate("delete");
}

function savedForexListUpdate(selection) {
    if (selection == "update") {
        $("#savedForexList").html("");
        var savedForex = JSON.parse(localStorage.getItem("savedForex"));
        if (savedForex != null) {
            for (let key in savedForex) {
                var oldListHtml = $("#savedForexList").html();
                var html = `
            <li class="list-group-item list-group-item-action rounded-3 py-2 mb-4 shadow-sm">
                        <div class="row align-items-center">
                            <div class="col-4">
                                ${key}
                            </div>
                            <div class="col-4">
                                ${savedForex[key]}
                            </div>
                            <div class="col-2">
                                <button class="btn btn-danger" onclick="savedForexListDelete('${key}')"><i class="fa-solid fa-trash"></i></button>
                            </div>
                            <div class="col-2">
                                <button class="btn btn-primary"><i class="fa-solid fa-pencil"></i></button>
                            </div>

                        </div>
                    </li>

            `;
                $("#savedForexList").html(oldListHtml + html);
            }
        }
    }
    else if (selection == "delete") {
        var savedForex = JSON.parse(localStorage.getItem("savedForex"));
        $("#savedForexList").html("");
        if (savedForex != null) {
            for (let key in savedForex) {
                var oldListHtml = $("#savedForexList").html();
                var html = `
            <li class="list-group-item list-group-item-action rounded-3 py-2 mb-4 shadow-sm">
                        <div class="row align-items-center">
                            <div class="col-4">
                                ${key}
                            </div>
                            <div class="col-4">
                                ${savedForex[key]}
                            </div>
                            <div class="col-2">
                                <button class="btn btn-danger" onclick="savedForexListDelete('${key}')"><i class="fa-solid fa-trash"></i></button>
                            </div>
                            <div class="col-2">
                                <button class="btn btn-primary"><i class="fa-solid fa-pencil"></i></button>
                            </div>

                        </div>
                    </li>

            `;
                $("#savedForexList").html(html+oldListHtml);
            }
        }
    }
   
}