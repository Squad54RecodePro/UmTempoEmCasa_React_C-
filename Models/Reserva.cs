﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UmTempoEmCasa.Models
{
    public class Reserva
    {


        public int ReservaID { get; set; }


        public int RefugiadoForeignKey { get; set; }
        public Refugiado? Refugiados { get; set; }

        [Display(Name = "Nome do Anúncio")]
        public int AnuncioForeignKey { get; set; }
        public Anuncio? Anuncios { get; set; }

        [Required(ErrorMessage ="Insira um nome para o anuncio")]
        public string Nome { get; set; }


        [Required(ErrorMessage = "Defina a Data de Inicio da Reserva")]
        [Display(Name = "Data de Inicio")]
        public DateTime DateInicio { get; set; }

        [Required(ErrorMessage = "Defina a Data de Termino da Reserva")]
        [Display(Name = "Data de Encerramento")]
        public DateTime DataFim { get; set; }


    }
}
