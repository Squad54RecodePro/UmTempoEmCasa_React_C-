
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace UmTempoEmCasaReactC.Model
{
    public class Refugiado
    {
        public int Id { get; set; }
                      
        [MaxLength(50, ErrorMessage = "Quantidade de carateres maior que o permitido")]
        [MinLength(2, ErrorMessage = "Esse Nome é muito curto, verifique e tente novamente")]
        [Required]
        public string Nome { get; set; }

        
        [Display(Name = "Data de Nascimento")]
        [DataType(DataType.Date)]
        public DateTime Nascimento { get; set; }

        [Required]
        [MaxLength(11, ErrorMessage = "Quantidade de carateres maior que o permitido")]
        [MinLength(11, ErrorMessage = "Esse número de CPF é muito curto, verifique e tente novamente")]
        public string CPF { get; set; }

        [Required]
        [MaxLength(11, ErrorMessage = "Preencha apenas o DDD e o número de telefone")]
        [MinLength(10, ErrorMessage = "Confira o número informado, faltam números")]
        public string Telefone { get; set; }

        [Required]
        [MaxLength(50, ErrorMessage = "Máximo de caracteres excedido")]
        [EmailAddress(ErrorMessage ="Insira um E-mail válido!")]
        public string Email { get; set; }

        [Required]
        [Display(Name = "Nacionalidade")]
        private string Nacionalidade { get; set; }

        [Required]
        [MaxLength(100, ErrorMessage = "Quantidade de caracteres excedida")]
        [MinLength(5, ErrorMessage = "Confira o endereço informado")]
        public string Endereco { get; set; }

        [Required]
        [MaxLength(10, ErrorMessage = "Quantidade de caracteres excedida")]
        [MinLength(8, ErrorMessage = "Confira o CEP informado, quantidade de números menor que 8")]
        public string CEP { get; set; }

        
        [MaxLength(15, ErrorMessage = "Senha muito Longa, escolha outra senha")]
        [MinLength(6, ErrorMessage = "Senha muito curta, use mais de 6 caracteres")]
        public string Senha { get; set; }




    }






}
