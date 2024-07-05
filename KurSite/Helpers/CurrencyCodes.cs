using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KurSite.Helpers
{
    public class CurrencyCodes
    {
        private string[] codes = {
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
        public string[] getCodes() { return codes; }
    }
}