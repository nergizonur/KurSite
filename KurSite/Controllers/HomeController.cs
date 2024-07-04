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

namespace KurSite.Controllers
{
    public class HomeController : Controller
    {
        Informations Informations = new Informations();

        // GET: Home

        [HttpGet]
        public ActionResult Index()
        {
            ViewBag.code = "";

            return View(Informations.getForexList());

        }

        [HttpPost]
        public ActionResult Index(string code)
        {
            ViewBag.code = code.ToUpper();

            return View(Informations.getForexList());

        }
    }
}