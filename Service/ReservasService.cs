using Microsoft.EntityFrameworkCore;
using UmTempoEmCasaReactC.Context;
using UmTempoEmCasaReactC.Model;

namespace UmTempoEmCasaReactC.Service
{
    public class ReservasService : IReservaService
    {
        private readonly MVCContext _context;
        public ReservasService(MVCContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Reserva>> GetReservas()
        {
            try
            {
                return await _context.Reservas.ToListAsync();
            }
            catch
            {
                throw;
            }

        }
        public async Task<IEnumerable<Reserva>> GetReservasByNome(string nome)
        {
            IEnumerable<Reserva> reservas;
            if (!string.IsNullOrWhiteSpace(nome))
            {
                reservas = await _context.Reservas.Where(n => n.Nome.Contains(nome)).ToListAsync();
            }
            else
            {
                reservas = await GetReservas();
            }
            return reservas;
        }
        public  async Task<Reserva> GetReserva(int id)
        {
            var reserva = await _context.Reservas.FindAsync(id);
            return reserva;
        }
        public async Task CreateReserva(Reserva reserva)
        {
            _context.Reservas.Add(reserva);
            await _context.SaveChangesAsync(); 
        }
                      
        public async Task UpdateReserva(Reserva reserva)
        {
            _context.Entry(reserva).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteReserva(Reserva reserva)
        {
            _context.Reservas.Remove(reserva);
            await _context.SaveChangesAsync();
        } 
    }
}
