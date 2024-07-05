using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Threading.Tasks;
using System.Net.Http;
using System.Xml.Linq;
using System.Xml.Serialization;
using System.Security.Cryptography.X509Certificates;
using KurSite.Models;
using System.Xml;
using Microsoft.SqlServer.Server;
using KurSite.Services;
using KurSite.Helpers;

namespace KurSite.Controllers
{
    public class HomeController : Controller
    {
        ForexServices forexService = new ForexServices();
        DateConverter dateConverter = new DateConverter();

        // GET: Home

        [HttpGet]
        public ActionResult Index()
        {
            return View(forexService.getForexList());
        }

        [HttpPost]
        public ActionResult Index(string code)
        {
            return View(forexService.getForexList(code));
        }

        [HttpPost]
        public ActionResult SelectDate(string date)
        {
            CurrencyCodes currencyCode = new CurrencyCodes();
            List<Kur> forexList = new List<Kur>();
            string link = $"https://www.tcmb.gov.tr/kurlar/{dateConverter.getYear(date)}{dateConverter.getMonth(date)}/{dateConverter.getDay(date)}{dateConverter.getMonth(date)}{dateConverter.getYear(date)}.xml";
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

            return View("Index",forexList);

        }
    }
}