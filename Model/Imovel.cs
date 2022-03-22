
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace UmTempoEmCasaReactC.Model
{
    public class Imovel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Informe o Endereço do Imovel")]
        [MaxLength(50, ErrorMessage = "Maximo de caracteres excedido")]
        [MinLength(5, ErrorMessage = "Confira o endereço digitado, números de caracteres muito curto")]
        [Display(Name = "Endereço")]
        public string Endereco { get; set; }

        [Required(ErrorMessage = "Informe a Cidade do Imovel")]
        [MaxLength(50, ErrorMessage = "Maximo de caracteres excedido")]
        [MinLength(3, ErrorMessage = "Número de caracteres muito curto, verifique o nome da cidade")]
        public string Cidade { get; set; }

        [Required(ErrorMessage = "Informe o CEP da localização do Imovel")]
        [MaxLength(11, ErrorMessage = "Maximo de caracteres excedido")]
        [MinLength(8, ErrorMessage = "Confira o CEP digitado, número minimo não atingido")]
        [Display(Name = "Cep ( Código Postal )")]
        public string Cep { get; set; }
    }
}
