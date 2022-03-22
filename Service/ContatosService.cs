using Microsoft.EntityFrameworkCore;
using UmTempoEmCasaReactC.Context;
using UmTempoEmCasaReactC.Model;

namespace UmTempoEmCasaReactC.Service
{
    public class ContatosService : IContatoService
    {
        private readonly MVCContext _context;
        public ContatosService(MVCContext context)
        {
            _context = context;
        }

        public async Task CreateContato(Contato contato)
        {
            _context.Contatos.Add(contato);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteContato(Contato contato)
        {
            _context.Contatos.Remove(contato);
            await _context.SaveChangesAsync();
        }

        public async Task<Contato> GetContato(int id)
        {
            var contato = await _context.Contatos.FindAsync(id);
            return contato;
        }

        public async Task<IEnumerable<Contato>> GetContatos()
        {
            try
            {
                return await _context.Contatos.ToListAsync();
            }
            catch
            {
                throw;
            }
        }

        public async Task<IEnumerable<Contato>> GetContatosByNome(string nome)
        {
            IEnumerable<Contato> contatos;
            if (!string.IsNullOrWhiteSpace(nome))
            {
                contatos = await _context.Contatos.Where(n => n.Nome.Contains(nome)).ToListAsync();
            }
            else
            {
                contatos = await GetContatos();
            }
            return contatos;
        }

        public async Task UpdateContato(Contato contato)
        {
            _context.Entry(contato).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
