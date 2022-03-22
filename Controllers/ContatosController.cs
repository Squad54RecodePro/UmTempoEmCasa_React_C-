#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UmTempoEmCasaReactC.Context;
using UmTempoEmCasaReactC.Model;
using UmTempoEmCasaReactC.Service;

namespace UmTempoEmCasaReactC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContatosController : ControllerBase
    {
        private IContatoService _contatoService;

        public ContatosController(IContatoService contatoService)
        {
            _contatoService = contatoService;
        }
        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Contato>>> GetContatos()
        {
            try
            {
                var contatos = await _contatoService.GetContatos();
                return Ok(contatos);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao Obter Refugiados");
            }
        }
        [HttpGet("ContatosPorNome")]
        public async Task<ActionResult<IAsyncEnumerable<Contato>>>
            GetContatosByName([FromQuery] string nome)
        {
            try
            {
                var contato = await _contatoService.GetContatosByNome(nome);
                if (contato == null)
                    return NotFound($"Não existem refugiados com o nome: {nome} ");

                return Ok(contato);
            }
            catch
            {
                return BadRequest("Requisição Inválida");
            }

        }
        [HttpGet("{id:int}", Name = "GetContato")]
        public async Task<ActionResult<Contato>> GetContato(int id)
        {
            try
            {
                var contato = await _contatoService.GetContato(id);
                if (contato == null)
                    return NotFound($"Não existe refugiado com o id: {id} ");
                else
                    return Ok(contato);
            }
            catch
            {
                return BadRequest("Requisição Inválida");
            }
        }
        [HttpPost]
        public async Task<ActionResult> Create(Contato contato)
        {

            try
            {
                await _contatoService.CreateContato(contato);
                return CreatedAtRoute(nameof(GetContato), new { id = contato.Id }, contato);

            }
            catch
            {
                return BadRequest("Requisição Inválida");
            }
        }

        // PUT: api/Refugiados/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> EditContato(int id, [FromBody] Contato contato)
        {
            if (id != contato.Id)
            {
                return BadRequest();
            }

            try
            {
                if (contato.Id == id)
                {
                    await _contatoService.UpdateContato(contato);
                    return NoContent();
                }
                else
                {
                    return BadRequest("Dados inconsistentes");
                }
            }
            catch
            {
                return BadRequest("Requisição inválida");
            }
        }

        // DELETE: api/Refugiados/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContato(int id)
        {
            try
            {

                var contato = await _contatoService.GetContato(id);
                if (contato != null)
                {
                    await _contatoService.DeleteContato(contato);
                    return Ok($"Contato de id= {id}, foi excluido com êxito");

                }
                else
                {
                    return NotFound($"Contato com o id= {id}, não foi localizado");
                }
            }
            catch
            {
                return BadRequest("Requisição inválida");
            }
        }
    }
}
