using AutoMapper;
using AutoMapper.EquivalencyExpression;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Addon.Core.Utils
{
    public class AutoMapperConfig
    {
        private static IMapper GetMapper<TSource, TDestination>()
        {
            var config = new MapperConfiguration(cfg => {
                cfg.AddCollectionMappers();
               // cfg.ValidateInlineMaps = false;
                cfg.AllowNullCollections = true;
                cfg.AllowNullDestinationValues = true;
                cfg.CreateMap<TSource, TDestination>(MemberList.None);
            });

            IMapper mapper = new Mapper(config);
            return mapper;
        }
        public static TDestination AutoMap<TSource, TDestination>(TSource source)
        {
            var mapper = GetMapper<TSource, TDestination>();
            TDestination dest = mapper.Map<TDestination>(source);
            return dest;
        }
        public static List<TDestination> AutoMap<TSource, TDestination>(List<TSource> source)
        {
            var mapper = GetMapper<TSource, TDestination>();
            List<TDestination> dest = mapper.Map<List<TDestination>>(source);
            return dest;
        }
    }
}
