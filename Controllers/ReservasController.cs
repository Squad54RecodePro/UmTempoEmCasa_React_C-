using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UmTempoEmCasaReactC.Model;
using UmTempoEmCasaReactC.Service;

namespace UmTempoEmCasaReactC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservasController : ControllerBase
    {
        private IReservaService _reservaService;

        public ReservasController(IReservaService reservaService)
        {
            _reservaService = reservaService;
        }
        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Reserva>>> GetReservas()
        {
            try
            {
                var reservas = await _reservaService.GetReservas();
                return Ok(reservas);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao Obter Reservas");
            }
        }
        [HttpGet("ReservaPorNome")]
        public async Task<ActionResult<IAsyncEnumerable<Reserva>>>
            GetReservasByName([FromQuery] string nome)
        {
            try
            {
                var reservas = await _reservaService.GetReservasByNome(nome);
                if (reservas == null)
                    return NotFound($"Não existem reservas com o nome: {nome} ");

                return Ok(reservas);
            }
            catch
            {
                return BadRequest("Requisição Inválida");
            }

        }
        [HttpGet("{id:int}", Name = "GetReserva")]
        public async Task<ActionResult<Reserva>> GetReserva(int id)
        {
            try
            {
                var reserva = await _reservaService.GetReserva(id);
                if (reserva == null)
                    return NotFound($"Não existe reserva com o id: {id} ");
                else
                    return Ok(reserva);
            }
            catch
            {
                return BadRequest("Requisição Inválida");
            }
        }
        [HttpPost]
        public async Task<ActionResult> Create(Reserva reserva)
        {

            try
            {
                await _reservaService.CreateReserva(reserva);
                return CreatedAtRoute(nameof(GetReserva), new { id = reserva.Id }, reserva);

            }
            catch
            {
                return BadRequest("Requisição Inválida");
            }
        }

        // PUT: api/Reservas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> EditReserva(int id, [FromBody] Reserva reserva)
        {
            if (id != reserva.Id)
            {
                return BadRequest();
            }

            try
            {
                if (reserva.Id == id)
                {
                    await _reservaService.UpdateReserva(reserva);
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

        // DELETE: api/Reservas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReserva(int id)
        {
            try
            {

                var reserva = await _reservaService.GetReserva(id);
                if (reserva != null)
                {
                    await _reservaService.DeleteReserva(reserva);
                    return Ok($"Reserva de id= {id}, foi excluido com êxito");

                }
                else
                {
                    return NotFound($"Reserva com o id= {id}, não foi localizado");
                }
            }
            catch
            {
                return BadRequest("Requisição inválida");
            }
        }
    }
}