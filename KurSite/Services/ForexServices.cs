using KurSite.Helpers;
using KurSite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml;

namespace KurSite.Services
{
    public class ForexServices
    {
        public List<Kur> getForexList(string filter = "")
        {
            CurrencyCodes currencyCode = new CurrencyCodes();
            List<Kur> forexList = new List<Kur>();
            string link = "https://www.tcmb.gov.tr/kurlar/today.xml";
            var xmlDocument = new XmlDocument();
            xmlDocument.Load(link);
            foreach (var code in currencyCode.getCodes())
            {
                Kur forex = new Kur();
                forex.ForexCode = code;
                forex.ForexName = xmlDocument.SelectSingleNode($"Tarih_Date/Currency[@Kod=\"{code}\"]/Isim").InnerXml;
                forex.ForexBuying = xmlDocument.SelectSingleNode($"Tarih_Date/Currency[@Kod=\"{code}\"]/ForexBuying").InnerXml;
                forex.ForexSelling = xmlDocument.SelectSingleNode($"Tarih_Date/Currency[@Kod=\"{code}\"]/ForexSelling").InnerXml;
                forexList.Add(forex);
            }
            if (string.IsNullOrEmpty(filter))
            {
                return forexList;
            }
            return forexList.Where(forex => forex.ForexCode.ToUpper().Contains(filter.ToUpper())).ToList();
        }
    }
}