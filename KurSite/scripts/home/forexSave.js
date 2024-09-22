$(function () {


  

    function savedForexListUpdate() {
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
                                <button class="btn btn-danger" onclick=" savedForexDelete('${key}')"><i class="fa-solid fa-trash"></i></button>
                            </div>
                            <div class="col-2">
                                <button class="btn btn-primary"><i class="fa-solid fa-pencil"></i></button>
                            </div>

                        </div>
                    </li>

            `;
                $("#savedForexList").html(oldListHtml+html);
            }
        }
    }

    savedForexListUpdate();

    $("#forexSaveButton").click(function () {
        var firstForex = $("#firstForexSelected option:selected").text();
        var secondForex = $("#secondForexSelected option:selected").text();

        var savedForex = JSON.parse(localStorage.getItem("savedForex"));
        if (savedForex == null) {
            savedForex = {};
        }
        savedForex[firstForex] = secondForex;
        localStorage.setItem("savedForex", JSON.stringify(savedForex));
        savedForexListUpdate();
    });

    function savedForexDelete(key) {
        console.log(key);
        var savedForex = JSON.parse(localStorage.getItem("savedForex"));
        alert(key);
        delete savedForex[key];
        localStorage.setItem("savedForex", JSON.stringify(savedForex));
        savedForexListUpdate();
    }
})