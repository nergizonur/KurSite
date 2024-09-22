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
            List<Kur> forexList = forexService.getForexList();
            ViewBag.firstForex = "ABD DOLARI";
            ViewBag.secondForex = "TÜRK LİRASI";
            ViewBag.number = 1;
            double value = 0;
            foreach (var item in forexList)
            {
                if (item.ForexName == "ABD DOLARI")
                {
                    value = Convert.ToDouble(item.ForexBuying);
                }
            }
            ViewBag.exchangeValue = value;
            return View(forexService.getForexList());
        }

        [HttpPost]
        public ActionResult Index(string code)
        {
            List<Kur> forexList = forexService.getForexList();
            ViewBag.firstForex = "ABD DOLARI";
            ViewBag.number = 1;
            ViewBag.secondForex = "TÜRK LİRASI";
            double value = 0;
            foreach (var item in forexList)
            {
                if (item.ForexName == "ABD DOLARI")
                {
                    value = Convert.ToDouble(item.ForexBuying);
                }
            }
            ViewBag.exchangeValue = value;
            return View("Index", forexList);
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
            ViewBag.firstForex = "ABD DOLARI";
            ViewBag.secondForex = "TÜRK LİRASI";
            ViewBag.number = 1;
            double value = 0;
            foreach (var item in forexList)
            {
                if(item.ForexName== "ABD DOLARI")
                {
                    value = Convert.ToDouble(item.ForexBuying);
                }
            }
            ViewBag.exchangeValue = value;
            return View("Index",forexList);

        }



        [HttpPost]
        public ActionResult Exchange(string firstForexSelect,string secondForexSelect,int? number)
        {
            if (number == null)
            {
                number = 1;
            }
            double firstForexValue=0, secondForexValue=0;
            List<Kur> forexList = forexService.getForexList();
            foreach (var item in forexList)
            {
                if(item.ForexName== firstForexSelect)
                {
                    firstForexValue = Convert.ToDouble(item.ForexBuying);
                }
                else if(item.ForexName == secondForexSelect)
                {
                    secondForexValue = Convert.ToDouble(item.ForexBuying);
                }
            }
            ViewBag.firstForex = firstForexSelect;

            ViewBag.secondForex = secondForexSelect;
            double value = firstForexValue / secondForexValue;
            ViewBag.exchangeValue = value*number;
            ViewBag.number = number;
            return View("Index",forexList);

        }
    }
}