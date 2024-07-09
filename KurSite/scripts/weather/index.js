
new gridjs.Grid({

    sort: true,
    search: {
        Enabled: true,
        placeholder: 'Aramak terimini girin...' 
    },
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
    },
    language: {
        'search': {
            'placeholder': 'Aramak için yazýn...' // Arama yer tutucusunu özelleþtirme
        },
        'pagination': {
            'previous': 'Onceki',
            'next': 'Sonraki',
            'showing': 'Gosteriliyor',
            'results': () => 'sonuc'
        }
    }

}).render(document.getElementById("wrapper"));

document.querySelector('.gridjs-search-input').placeholder = 'Arama terimini giriniz...';
