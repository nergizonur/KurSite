using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Web;

namespace KurSite.Helpers
{
    public class DateConverter
    {
        public string getDay(string date)
        {
            string day = "";
            int lenght = date.Length;
             day=date.Substring(lenght-2, 2);
            return day;
        }

        public string getMonth(string date)
        {
            string month = "";
            int lenght = date.Length;
            month = date.Substring(lenght -5 , 2);
            return month;
        }

        public string getYear(string date)
        {
            string year = "";
            int lenght = date.Length;
            year = date.Substring(lenght - 10, 4);
            return year;
        }
    }
}