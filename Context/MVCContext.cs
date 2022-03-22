using Microsoft.EntityFrameworkCore;
using UmTempoEmCasaReactC.Model;

namespace UmTempoEmCasaReactC.Context
{
    public class MVCContext : DbContext
    {
        public MVCContext(DbContextOptions<MVCContext> options)
            : base(options)
        {
        }
                

        public DbSet<Refugiado> Refugiados { get; set; }

        
        public DbSet<Contato> Contatos { get; set; }

        

        
    }
}
