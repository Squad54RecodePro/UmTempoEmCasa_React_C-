using System.ComponentModel.DataAnnotations;

namespace UmTempoEmCasaReactC.Model
{
    public class Anuncio
    {
        public int Id { get; set; }

        public List<Reserva>? Reservas { get; set; }


        [Display(Name = "CEP do Imovel")]
        public int ImovelForeignKey { get; set; }
        public Imovel? Imovel { get; set; }
        public DateTime inicio { get; set; }

        [Required(ErrorMessage = "Informe o valor do Anuncio")]
        [Display(Name = "Valor")]
        public float valor { get; set; }
        public string Nome { get; set; }
    }
}
