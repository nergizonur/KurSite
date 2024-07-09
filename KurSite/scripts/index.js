
new gridjs.Grid({
    sort: true,
    search: true,
    pagination: true,
    columns: ['Doviz Kodu', 'Doviz Cinsi', 'Doviz Alis', "Doviz Satis"],
    server: {
        url: 'https://gridjs.io/sitemap.xml',
        handle: (res) => {
            return res.text().then(str => (new window.DOMParser()).parseFromString(str, "text/xml"));
        },
        then: data => {
            return Array.from(data.querySelectorAll('url'))
                .map(row => [
                    row.querySelector('changefreq').innerHTML,
                    row.querySelector('loc').innerHTML,
                    row.querySelector('priority').innerHTML,
                ]);
        }
    }
}).render(document.getElementById("wrapper"));