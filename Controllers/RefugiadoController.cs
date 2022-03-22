using Microsoft.AspNetCore.Mvc;
using UmTempoEmCasaReactC.Model;
using UmTempoEmCasaReactC.Service;

namespace UmTempoEmCasaReactC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RefugiadoController : ControllerBase
    {
        private IRefugiadoService _refugiadoService;

        public RefugiadoController(IRefugiadoService refugiadoService)
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
                {
                    return NotFound($"Não existe aluno com o id: {id} ");
                }
                    
                return Ok(refugiado);
            }
            catch
            {
                return BadRequest("Requisição Invalida");
            }
        }
        [HttpPost("AdicionarRefugiado")]
        public async Task<ActionResult> Create( Refugiado refugiado)
        {

            try
            {
                await _refugiadoService.CreateRefugiado(refugiado);
                return CreatedAtRoute(nameof(GetRefugiado), new {id = refugiado.RefugiadoID},refugiado);
                
            }
            catch
            {
                return BadRequest("Requisição Invalida");
            }
        }

        
    }
}
