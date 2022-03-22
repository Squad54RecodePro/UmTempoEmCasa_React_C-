﻿using Microsoft.EntityFrameworkCore;
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

        public DbSet<Anfitriao> Anfitrioes { get; set; }

        public DbSet<Anuncio> Anuncios { get; set; }

        public DbSet<Imovel> Imoveis { get; set; }

        public DbSet<Reserva> Reservas { get; set; }

        public DbSet<Ong> Ongs { get; set; }


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



        }
    }


}
