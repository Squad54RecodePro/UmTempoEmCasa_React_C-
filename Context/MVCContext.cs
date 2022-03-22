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

        public DbSet<Refugiado> refugiados { get; set; }

       
        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            

            modelBuilder.Entity<Refugiado>()
                .HasNoKey();
              





        }
    }
}
