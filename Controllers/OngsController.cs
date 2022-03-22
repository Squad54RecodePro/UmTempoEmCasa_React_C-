using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UmTempoEmCasaReactC.Model;
using UmTempoEmCasaReactC.Service;

namespace UmTempoEmCasaReactC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OngsController : ControllerBase
    {
        private IOngService _ongService;

        public OngsController(IOngService ongService)
        {
            _ongService = ongService;
        }
        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Ong>>> GetOngs()
        {
            try
            {
                var ongs = await _ongService.GetOngs();
                return Ok(ongs);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao Obter Ongs");
            }
        }
        [HttpGet("OngPorNome")]
        public async Task<ActionResult<IAsyncEnumerable<Ong>>>
            GetOngsByName([FromQuery] string nome)
        {
            try
            {
                var ongs = await _ongService.GetOngsByNome(nome);
                if (ongs == null)
                    return NotFound($"Não existem ongs com o nome: {nome} ");

                return Ok(ongs);
            }
            catch
            {
                return BadRequest("Requisição Inválida");
            }

        }
        [HttpGet("{id:int}", Name = "GetOng")]
        public async Task<ActionResult<Ong>> GetOng(int id)
        {
            try
            {
                var ong = await _ongService.GetOng(id);
                if (ong == null)
                    return NotFound($"Não existe ong com o id: {id} ");
                else
                    return Ok(ong);
            }
            catch
            {
                return BadRequest("Requisição Inválida");
            }
        }
        [HttpPost]
        public async Task<ActionResult> Create(Ong ong)
        {

            try
            {
                await _ongService.CreateOng(ong);
                return CreatedAtRoute(nameof(GetOng), new { id = ong.Id }, ong);

            }
            catch
            {
                return BadRequest("Requisição Inválida");
            }
        }

        // PUT: api/Ongs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> EditOng(int id, [FromBody] Ong ong)
        {
            if (id != ong.Id)
            {
                return BadRequest();
            }

            try
            {
                if (ong.Id == id)
                {
                    await _ongService.UpdateOng(ong);
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

        // DELETE: api/Ongs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOng(int id)
        {
            try
            {

                var ong = await _ongService.GetOng(id);
                if (ong != null)
                {
                    await _ongService.DeleteOng(ong);
                    return Ok($"Ong de id= {id}, foi excluido com êxito");

                }
                else
                {
                    return NotFound($"Ong com o id= {id}, não foi localizada");
                }
            }
            catch
            {
                return BadRequest("Requisição inválida");
            }
        }
    }
}