using System;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace QuickStart.Standard
{
    public class LocalMethods
    {
        public async Task<object> fooSubmit(dynamic input)
        {
            //return AppDomain.CurrentDomain.BaseDirectory;
            return " You pressed Submit";
        }

        public async Task<object> fooClickhere(dynamic input)
        {
            return "You pressed Click here";
        }


    }
}
