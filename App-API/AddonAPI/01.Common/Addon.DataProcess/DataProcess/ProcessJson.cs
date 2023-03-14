using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Data;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Addon.DataProcess.DataProcess
{
    public class ProcessJson
    {
        public static JObject ConvertListToJson<T>(List<T> list)
        {
            string jsonString = JsonConvert.SerializeObject(list);
            JArray jsonArray = JArray.Parse(jsonString);

            JObject obj = new JObject();
            obj["data"] = jsonArray;

            return obj;
        }
        public static DataTable ConvertListToDataTable<T>(List<T> list)
        {
            DataTable table = new DataTable();

            // Get all the properties of T
            System.Reflection.PropertyInfo[] properties = typeof(T).GetProperties();

            // Create columns for the DataTable based on the properties of T
            foreach (System.Reflection.PropertyInfo property in properties)
            {
                table.Columns.Add(property.Name, property.PropertyType);
            }

            // Add rows to the DataTable based on the objects in the list
            foreach (T obj in list)
            {
                DataRow row = table.NewRow();

                foreach (System.Reflection.PropertyInfo property in properties)
                {
                    row[property.Name] = property.GetValue(obj, null);
                }

                table.Rows.Add(row);
            }

            return table;
        }
    }
}
