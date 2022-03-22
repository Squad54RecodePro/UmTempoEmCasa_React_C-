using Microsoft.EntityFrameworkCore;
using UmTempoEmCasaReactC.Context;
using UmTempoEmCasaReactC.Model;

namespace UmTempoEmCasaReactC.Service
{
    public class OngsService : IOngService
    {
        private readonly MVCContext _context;
        public OngsService(MVCContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Ong>> GetOngs()
        {
            try
            {
                return await _context.Ongs.ToListAsync();
            }
            catch
            {
                throw;
            }
        }
        public async Task<IEnumerable<Ong>> GetOngsByNome(string nome)
        {
            IEnumerable<Ong> ongs;
            if (!string.IsNullOrWhiteSpace(nome))
            {
                ongs = await _context.Ongs.Where(n => n.Nome.Contains(nome)).ToListAsync();
            }
            else
            {
                ongs = await GetOngs();
            }
            return ongs;
        }
        public  async Task<Ong> GetOng(int id)
        {
            var ong = await _context.Ongs.FindAsync(id);
            return ong;
        }
        public async Task CreateOng(Ong ong)
        {
            _context.Ongs.Add(ong);
            await _context.SaveChangesAsync(); 
        }
                      
        public async Task UpdateOng(Ong ong)
        {
            _context.Entry(ong).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteOng(Ong ong)
        {
            _context.Ongs.Remove(ong);
            await _context.SaveChangesAsync();
        } 
    }
}
