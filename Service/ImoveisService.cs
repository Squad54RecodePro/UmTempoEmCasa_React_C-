using Microsoft.EntityFrameworkCore;
using UmTempoEmCasaReactC.Context;
using UmTempoEmCasaReactC.Model;

namespace UmTempoEmCasaReactC.Service
{
    public class ImoveisService : IImovelService
    {
        private readonly MVCContext _context;
        public ImoveisService(MVCContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Imovel>> GetImoveis()
        {
            try
            {
                return await _context.Imoveis.ToListAsync();
            }
            catch
            {
                throw;
            }
        }
        public async Task<IEnumerable<Imovel>> GetImoveisByNome(string endereco)
        {
            IEnumerable<Imovel> imoveis;
            if (!string.IsNullOrWhiteSpace(endereco))
            {
                imoveis = await _context.Imoveis.Where(n => n.Endereco.Contains(endereco)).ToListAsync();
            }
            else
            {
                imoveis = await GetImoveis();
            }
            return imoveis;
        }
        public  async Task<Imovel> GetImovel(int id)
        {
            var imovel = await _context.Imoveis.FindAsync(id);
            return imovel;
        }
        public async Task CreateImovel(Imovel imovel)
        {
            _context.Imoveis.Add(imovel);
            await _context.SaveChangesAsync(); 
        }
                      
        public async Task UpdateImovel(Imovel imovel)
        {
            _context.Entry(imovel).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteImovel(Imovel imovel)
        {
            _context.Imoveis.Remove(imovel);
            await _context.SaveChangesAsync();
        }

    }
}
