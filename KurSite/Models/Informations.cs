using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml;

namespace KurSite.Models
{
    public class Informations
    {
        public string[] codes = {
            "USD",
            "AUD",
            "DKK",
            "EUR",
            "GBP",
            "CHF",
            "SEK",
            "CAD",
            "KWD",
            "NOK",
            "SAR",
            "JPY",
            "BGN",
            "RON",
            "RUB",
            "IRR",
            "CNY",
            "PKR",
            "QAR",
            "KRW",
            "AZN",
            "AED",

        };

        
        public List<Kur> getForexList()
        {
            List<Kur> forexList = new List<Kur>();
            string link = "https://www.tcmb.gov.tr/kurlar/today.xml";
            var xmlDocument = new XmlDocument();
            xmlDocument.Load(link);
            foreach (var code in codes) 
            {
                Kur forex = new Kur();
                forex.ForexCode = code;
                forex.ForexName= xmlDocument.SelectSingleNode($"Tarih_Date/Currency[@Kod=\"{code}\"]/Isim").InnerXml;
                forex.ForexBuying= xmlDocument.SelectSingleNode($"Tarih_Date/Currency[@Kod=\"{code}\"]/ForexBuying").InnerXml;
                forex.ForexSelling = xmlDocument.SelectSingleNode($"Tarih_Date/Currency[@Kod=\"{code}\"]/ForexSelling").InnerXml;
                forexList.Add(forex);
            }
            return forexList;
        }
    }
}