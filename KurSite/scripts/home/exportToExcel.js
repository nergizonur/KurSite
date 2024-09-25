function downloadToExcel() {
    var table = document.getElementById("forexTable");
    var workbook = XLSX.utils.table_to_book(table, { sheet: "Sayfa1" });
    XLSX.writeFile(workbook, "tablo.xlsx");
}

function savedForexDownloadToExcel() {
    var table = document.getElementById("savedForexTable");
    var workbook = XLSX.utils.table_to_book(table, { sheet: "Sayfa1" });
    XLSX.writeFile(workbook, "savedForex.xlsx");
}