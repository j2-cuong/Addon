using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Nodes;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Addon.DataProcess.DataProcess
{
    public class ProcessJson
    {
        public JArray ReplaceJson(JArray arr)
        {
            JArray dataArray = JArray.Parse(arr.ToString());
            dataArray = new JArray(dataArray.Where(x => x.Type != JTokenType.Null));
            return dataArray;
        }
    }
}
