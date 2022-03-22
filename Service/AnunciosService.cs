using Microsoft.EntityFrameworkCore;
using UmTempoEmCasaReactC.Context;
using UmTempoEmCasaReactC.Model;

namespace UmTempoEmCasaReactC.Service
{
    public class AnunciosService : IAnuncioService
    {
        private readonly MVCContext _context;
        public AnunciosService(MVCContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Anuncio>> GetAnuncios()
        {
            try
            {
                return await _context.Anuncios.ToListAsync();
            }
            catch
            {
                throw;
            }
        }
        public async Task<IEnumerable<Anuncio>> GetAnunciosByNome(string nome)
        {
            IEnumerable<Anuncio> anuncios;
            if (!string.IsNullOrWhiteSpace(nome))
            {
                anuncios = await _context.Anuncios.Where(n => n.Nome.Contains(nome)).ToListAsync();
            }
            else
            {
                anuncios = await GetAnuncios();
            }
            return anuncios;
        }
        public async Task<Anuncio> GetAnuncio(int id)
        {
            var anuncio = await _context.Anuncios.FindAsync(id);
            return anuncio;
        }
        public async Task CreateAnuncio(Anuncio anuncio)
        {
            _context.Anuncios.Add(anuncio);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateAnuncio(Anuncio anuncio)
        {
            _context.Entry(anuncio).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
        public async Task DeleteAnuncio(Anuncio anuncio)
        {
            _context.Anuncios.Remove(anuncio);
            await _context.SaveChangesAsync();
        }
    }
}
