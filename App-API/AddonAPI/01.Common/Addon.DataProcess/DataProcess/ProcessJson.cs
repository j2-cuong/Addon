using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Addon.DataProcess.DataProcess
{
    public class ProcessJson
    {
        public JObject ReplaceJson(JObject json)
        {
            foreach (var property in json.Properties().ToList())
            {
                if (property.Value.Type == JTokenType.Null)
                {
                    property.Remove();
                }
            }
            return json;
        }
    }
}
