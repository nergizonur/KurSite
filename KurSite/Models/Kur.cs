using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Serialization;


namespace KurSite.Models
{
    [XmlRoot("Kur")]
    public class Kur
    {
        [XmlElement("ForexCode")]
        public string ForexCode { get; set; }

        [XmlElement("Name")]
        public string Name { get; set; }

        [XmlElement("ForexBuying")]
        public string  ForexBuying{ get; set; }

        [XmlElement("ForexSelling")]
        public string ForexSelling { get; set; }




    }
}