
new gridjs.Grid({
    sort: true,
    search: true,
    pagination: true,
    columns: ["Bolge", 'Periyot' , "Sehir", "Durum", "Maksimum Sicaklik"],
    server: {
        url: 'https://www.mgm.gov.tr/FTPDATA/analiz/sonSOA.xml',
        handle: (res) => {
            return res.text().then(str => (new window.DOMParser()).parseFromString(str, "text/xml"));
        },
        then: data => {
            return Array.from(data.querySelectorAll('sehirler'))
                .map(row => [
                    row.querySelector('Bolge').innerHTML,
                    row.querySelector('Peryot').innerHTML,
                    row.querySelector('ili').innerHTML,
                    row.querySelector('Durum').innerHTML,
                    row.querySelector('Mak').innerHTML,
                ]);
        }
    }
}).render(document.getElementById("wrapper"));