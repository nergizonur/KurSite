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

namespace KurSite.Controllers
{
    public class HomeController : Controller
    {
        ForexServices forexService = new ForexServices();

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
    }
}