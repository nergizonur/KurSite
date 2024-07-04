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
        public ActionResult Index()
        {
            

            return View(Informations.getForexList());

        }
    }
}