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

        public DbSet<Anuncio> anuncios { get; set; }

        public DbSet<Anfitriao> anfitrioes { get; set; }

        public DbSet<Imovel> imoveis { get; set; }

        public DbSet<Refugiado> refugiados { get; set; }

        public DbSet<Ongs> ongs { get; set; }

        public DbSet<Reserva> reservas { get; set; }

        public DbSet<Contato> contatos { get; set; }

        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Anuncio>()
                .HasOne(p => p.Imovel)
                .WithMany()
                .HasForeignKey(p => p.ImovelForeignKey);

            modelBuilder.Entity<Imovel>()
                .HasOne(p => p.Anfitrioes)
                .WithMany(b => b.Imovel)
                .HasForeignKey(p => p.AnfitriaoForeignKey);

            modelBuilder.Entity<Reserva>()
                .HasOne(p => p.Anuncios)
                .WithMany(b => b.Reservas)
                .HasForeignKey(p => p.AnuncioForeignKey);

            modelBuilder.Entity<Reserva>()
                .HasOne(p => p.Refugiados)
                .WithMany(b => b.Reservas)
                .HasForeignKey(p => p.RefugiadoForeignKey);

            modelBuilder.Entity<Refugiado>()
                .HasNoKey();
              





        }
    }
}
