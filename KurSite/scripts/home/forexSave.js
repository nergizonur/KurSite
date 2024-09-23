﻿$(function () {


    function getForexCount() {
        var savedForex = JSON.parse(localStorage.getItem("savedForex"));
        if (!savedForex == null) {
            return 0;
        }
        let count = Object.keys(savedForex).length;
        return count;
    }

    savedForexListUpdate("update");

    $("#forexSaveButton").click(function () {
        if (getForexCount() < 10) {
            var forex = $("#forexSaveSelect option:selected").text();
            var value = $("#forexSaveSelect option:selected").val();

            var savedForex = JSON.parse(localStorage.getItem("savedForex"));
            if (savedForex == null) {
                savedForex = {};
            }
            savedForex[forex] = value;
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
                            <div class="col-8">
                                ${key}
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
        $("#savedForexRows").html("");
        var savedForex2 = JSON.parse(localStorage.getItem("savedForex"));
        if (savedForex2 != null) {
            for (let key in savedForex) {
                var oldListHtml = $("#savedForexRows").html();
                var html = `
            <tr>
                                    <td>
                                        ${key}
                                    </td>
                                    <td>
                                        ${savedForex2[key]}
                                    </td>
                                    <td>
                                        Çevirililen Kur Adeti
                                    </td>
                                    <td>
                                        Çevirililen Kur
                                    </td>
                                    <td>
                                        Değer
                                    </td>
                                </tr>

            `;
                $("#savedForexRows").html(oldListHtml + html);
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
                            <div class="col-8">
                                ${key}
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

        $("#savedForexRows").html("");
        var savedForex2 = JSON.parse(localStorage.getItem("savedForex"));
        if (savedForex2 != null) {
            for (let key in savedForex) {
                var oldListHtml = $("#savedForexRows").html();
                var html = `
            <tr>
                                    <td>
                                        ${key}
                                    </td>
                                    <td>
                                        ${savedForex2[key]}
                                    </td>
                                    <td>
                                        Çevirililen Kur Adeti
                                    </td>
                                    <td>
                                        Çevirililen Kur
                                    </td>
                                    <td>
                                        Değer
                                    </td>
                                </tr>

            `;
                $("#savedForexRows").html(oldListHtml + html);
            }
        }
    }
   
}