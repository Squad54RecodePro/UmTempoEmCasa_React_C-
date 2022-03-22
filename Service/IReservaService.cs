using UmTempoEmCasaReactC.Model;

namespace UmTempoEmCasaReactC.Service
{
    public interface IReservaService
    {
        Task<IEnumerable<Reserva>> GetReservas();
        Task<Reserva> GetReserva(int id);
        Task<IEnumerable<Reserva>> GetReservasByNome(string nome);
        Task CreateReserva(Reserva reserva);
        Task UpdateReserva(Reserva reserva);
        Task DeleteReserva(Reserva reserva);
    }
}
