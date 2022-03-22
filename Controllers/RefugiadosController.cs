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
    public class RefugiadosController : ControllerBase
    {
        private IRefugiadoService _refugiadoService;

        public RefugiadosController(IRefugiadoService refugiadoService)
        {
            _refugiadoService = refugiadoService;
        }
        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Refugiado>>> GetRefugiados()
        {
            try
            {
                var refugiados = await _refugiadoService.GetRefugiados();
                return Ok(refugiados);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao Obter Refugiados");
            }
        }
        [HttpGet("RefugiadoPorNome")]
        public async Task<ActionResult<IAsyncEnumerable<Refugiado>>>
            GetRefugiadosByName([FromQuery] string nome)
        {
            try
            {
                var refugiados = await _refugiadoService.GetRefugiadosByNome(nome);
                if (refugiados == null)
                    return NotFound($"Não existem alunos com o nome: {nome} ");

                return Ok(refugiados);
            }
            catch
            {
                return BadRequest("Requisição Invalida");
            }

        }
        [HttpGet("{id:int}", Name = "GetRefugiado")]
        public async Task<ActionResult<Refugiado>> GetRefugiado(int id)
        {
            try
            {
                var refugiado = await _refugiadoService.GetRefugiado(id);
                if (refugiado == null)
                    return NotFound($"Não existe aluno com o id: {id} ");
                else
                    return Ok(refugiado);
            }
            catch
            {
                return BadRequest("Requisição Invalida");
            }
        }
        [HttpPost]
        public async Task<ActionResult> Create(Refugiado refugiado)
        {

            try
            {
                await _refugiadoService.CreateRefugiado(refugiado);
                return CreatedAtRoute(nameof(GetRefugiado), new { id = refugiado.Id }, refugiado);

            }
            catch
            {
                return BadRequest("Requisição Invalida");
            }
        }


        // PUT: api/Refugiados/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> EditRefugiado(int id,[FromBody] Refugiado refugiado)
        {
            if (id != refugiado.Id)
            {
                return BadRequest();
            }

           

            try
            {
               if(refugiado.Id==id)
                {
                    await _refugiadoService.UpdateRefugiado(refugiado);
                    return NoContent();
                }
               else
                {
                    return BadRequest("Dados inconsistentes");
                }
            }
            catch
            {
                return BadRequest("Requisição invalida");
            }

           
        }

        

        // DELETE: api/Refugiados/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRefugiado(int id)
        {
            try 
            {

                var refugiado = await _refugiadoService.GetRefugiado(id);
                if (refugiado != null)
                {
                    await _refugiadoService.DeleteRefugiado(refugiado);
                    return Ok($"Refugiado de id= {id}, foi excluido com êxito");

                }
                else
                {
                    return NotFound($"Refugiado com o id= {id}, não foi localizado");
                }
            } 
            catch 
            {
                return BadRequest("Requisição invalida");
            }

            
            
        }

       
    }
}
