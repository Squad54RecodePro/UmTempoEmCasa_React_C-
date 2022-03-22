using Microsoft.EntityFrameworkCore;
using UmTempoEmCasaReactC.Context;
using UmTempoEmCasaReactC.Model;

namespace UmTempoEmCasaReactC.Service
{
    public class AnfitrioesService
    {
        private readonly MVCContext _context;
        public AnfitrioesService(MVCContext context)
        {
            _context = context;
        }

        public async Task CreateAnfitriao(Anfitriao anfitriao)
        {
            _context.Anfitrioes.Add(anfitriao);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAnfitriao(Anfitriao anfitriao)
        {
            _context.Anfitrioes.Remove(anfitriao);
            await _context.SaveChangesAsync();
        }

        public async Task<Anfitriao> GetAnfitriao(int id)
        {
            var anfitriao = await _context.Anfitrioes.FindAsync(id);
            return anfitriao;
        }

        public async Task<IEnumerable<Anfitriao>> GetAnfitrioes()
        {
            try
            {
                return await _context.Anfitrioes.ToListAsync();
            }
            catch
            {
                throw;
            }
        }

        public async Task<IEnumerable<Anfitriao>> GeAnfitrioesByNome(string nome)
        {
            IEnumerable<Anfitriao> anfitrioes;
            if (!string.IsNullOrWhiteSpace(nome))
            {
                anfitrioes = await _context.Anfitrioes.Where(n => n.Nome.Contains(nome)).ToListAsync();
            }
            else
            {
                anfitrioes = await GetAnfitrioes();
            }
            return anfitrioes;
        }

        public async Task UpdateAnfitriao(Anfitriao anfitriao)
        {
            _context.Entry(anfitriao).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
