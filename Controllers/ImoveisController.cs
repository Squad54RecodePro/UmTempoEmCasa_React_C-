using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UmTempoEmCasaReactC.Model;
using UmTempoEmCasaReactC.Service;

namespace UmTempoEmCasaReactC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImoveisController : ControllerBase
    {
        private IImovelService _imovelService;

        public ImoveisController(IImovelService imovelService)
        {
            _imovelService = imovelService;
        }
        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Imovel>>> GetImoveis()
        {
            try
            {
                var imoveis = await _imovelService.GetImoveis();
                return Ok(imoveis);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao Obter Imóveis");
            }
        }
        [HttpGet("ImovelPorNome")]
        public async Task<ActionResult<IAsyncEnumerable<Imovel>>>
            GetImoveisByName([FromQuery] string nome)
        {
            try
            {
                var imoveis = await _imovelService.GetImoveisByNome(nome);
                if (imoveis == null)
                    return NotFound($"Não existem imóveis com o nome: {nome} ");

                return Ok(imoveis);
            }
            catch
            {
                return BadRequest("Requisição Inválida");
            }

        }
        [HttpGet("{id:int}", Name = "GetImovel")]
        public async Task<ActionResult<Imovel>> GetImovel(int id)
        {
            try
            {
                var imovel = await _imovelService.GetImovel(id);
                if (imovel == null)
                    return NotFound($"Não existe imóvel com o id: {id} ");
                else
                    return Ok(imovel);
            }
            catch
            {
                return BadRequest("Requisição Inválida");
            }
        }
        [HttpPost]
        public async Task<ActionResult> Create(Imovel imovel)
        {

            try
            {
                await _imovelService.CreateImovel(imovel);
                return CreatedAtRoute(nameof(GetImovel), new { id = imovel.Id }, imovel);

            }
            catch
            {
                return BadRequest("Requisição Inválida");
            }
        }

        // PUT: api/Imoveis/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> EditImovel(int id, [FromBody] Imovel imovel)
        {
            if (id != imovel.Id)
            {
                return BadRequest();
            }

            try
            {
                if (imovel.Id == id)
                {
                    await _imovelService.UpdateImovel(imovel);
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

        // DELETE: api/Imoveis/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteImovel(int id)
        {
            try
            {

                var imovel = await _imovelService.GetImovel(id);
                if (imovel != null)
                {
                    await _imovelService.DeleteImovel(imovel);
                    return Ok($"Imóvel de id= {id}, foi excluido com êxito");

                }
                else
                {
                    return NotFound($"Imóvel com o id= {id}, não foi localizado");
                }
            }
            catch
            {
                return BadRequest("Requisição inválida");
            }
        }
    }
}
