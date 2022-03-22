
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace UmTempoEmCasaReactC.Model
{
    public class Reserva
    {
        public int Id { get; set; }

        public int RefugiadoForeignKey { get; set; }
        public Refugiado? Refugiados { get; set; }

        [Display(Name = "Nome do Anúncio")]
        public int AnuncioForeignKey { get; set; }
        public Anuncio? Anuncios { get; set; }

        [Required(ErrorMessage = "Insira um nome para o anuncio")]

        public string Nome { get; set; }

        [Required(ErrorMessage = "Defina a Data de Inicio da Reserva")]
        [Display(Name = "Data de Inicio")]

        public DateTime DateInicio { get; set; }

        [Required(ErrorMessage = "Defina a Data de Termino da Reserva")]
        [Display(Name = "Data de Encerramento")]
        
        public DateTime DataFim { get; set; }
    }
}
