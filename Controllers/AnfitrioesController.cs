using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UmTempoEmCasaReactC.Context;
using UmTempoEmCasaReactC.Model;

namespace UmTempoEmCasaReactC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnfitrioesController : ControllerBase
    {
        private readonly MVCContext _context;

        public AnfitrioesController(MVCContext context)
        {
            _context = context;
        }

        // GET: api/Contatos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Anfitriao>>> GetAnfitrioes()
        {
            return await _context.Anfitrioes.ToListAsync();
        }

        // GET: api/Contatos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Anfitriao>> GetAnfitriao(int id)
        {
            var anfitriao = await _context.Anfitrioes.FindAsync(id);

            if (anfitriao == null)
            {
                return NotFound();
            }

            return anfitriao;
        }

        // PUT: api/Contatos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAnfitriao(int id, Anfitriao anfitriao)
        {
            if (id != anfitriao.Id)
            {
                return BadRequest();
            }

            _context.Entry(anfitriao).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AnfitriaoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Contatos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Anfitriao>> PostAnfitriao(Anfitriao anfitriao)
        {
            _context.Anfitrioes.Add(anfitriao);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAnfitriao", new { id = anfitriao.Id }, anfitriao);
        }

        // DELETE: api/Contatos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAnfitriao(int id)
        {
            var anfitriao = await _context.Anfitrioes.FindAsync(id);
            if (anfitriao == null)
            {
                return NotFound();
            }

            _context.Anfitrioes.Remove(anfitriao);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AnfitriaoExists(int id)
        {
            return _context.Anfitrioes.Any(e => e.Id == id);
        }
    }
}
