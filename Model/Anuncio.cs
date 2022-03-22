using System.ComponentModel.DataAnnotations;

namespace UmTempoEmCasaReactC.Model
{
    public class Anuncio
    {
        public int Id { get; set; }

        public DateTime inicio { get; set; }

        [Required(ErrorMessage = "Informe o valor do Anuncio")]
        [Display(Name = "Valor")]
        public float valor { get; set; }
        public string Nome { get; set; }
    }
}
