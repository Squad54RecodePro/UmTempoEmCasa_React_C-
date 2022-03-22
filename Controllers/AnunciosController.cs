using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UmTempoEmCasaReactC.Model;
using UmTempoEmCasaReactC.Service;

namespace UmTempoEmCasaReactC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnunciosController : ControllerBase
    {
        private IAnuncioService _anuncioService;

        public AnunciosController(IAnuncioService anuncioService)
        {
            _anuncioService = anuncioService;
        }
        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Anuncio>>> GetAnuncios()
        {
            try
            {
                var anuncios = await _anuncioService.GetAnuncios();
                return Ok(anuncios);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao Obter Anúncios");
            }
        }
        [HttpGet("AnuncioPorNome")]
        public async Task<ActionResult<IAsyncEnumerable<Anuncio>>>
            GetAnunciosByName([FromQuery] string nome)
        {
            try
            {
                var anuncios = await _anuncioService.GetAnunciosByNome(nome);
                if (anuncios == null)
                    return NotFound($"Não existem anúncios com o nome: {nome} ");

                return Ok(anuncios);
            }
            catch
            {
                return BadRequest("Requisição Invalida");
            }

        }
        [HttpGet("{id:int}", Name = "GetAnuncio")]
        public async Task<ActionResult<Anuncio>> GetAnuncio(int id)
        {
            try
            {
                var anuncio = await _anuncioService.GetAnuncio(id);
                if (anuncio == null)
                    return NotFound($"Não existe anúncio com o id: {id} ");
                else
                    return Ok(anuncio);
            }
            catch
            {
                return BadRequest("Requisição Inválida");
            }
        }
        [HttpPost]
        public async Task<ActionResult> Create(Anuncio anuncio)
        {
            try
            {
                await _anuncioService.CreateAnuncio(anuncio);
                return CreatedAtRoute(nameof(GetAnuncio), new { id = anuncio.Id }, anuncio);

            }
            catch
            {
                return BadRequest("Requisição Inválida");
            }
        }

        // PUT: api/Anuncios/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> EditAnuncio(int id, [FromBody] Anuncio anuncio)
        {
            if (id != anuncio.Id)
            {
                return BadRequest();
            }

            try
            {
                if (anuncio.Id == id)
                {
                    await _anuncioService.UpdateAnuncio(anuncio);
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

        // DELETE: api/Anuncios/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAnuncio(int id)
        {
            try
            {

                var anuncio = await _anuncioService.GetAnuncio(id);
                if (anuncio != null)
                {
                    await _anuncioService.DeleteAnuncio(anuncio);
                    return Ok($"Anúncio de id= {id}, foi excluido com êxito");

                }
                else
                {
                    return NotFound($"Aúncio com o id= {id}, não foi localizado");
                }
            }
            catch
            {
                return BadRequest("Anúncio inválido");
            }
        }
    }
}
