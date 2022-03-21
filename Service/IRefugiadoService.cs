using UmTempoEmCasaReactC.Model;

namespace UmTempoEmCasaReactC.Service
{
    public interface IRefugiadoService
    {
        Task<IEnumerable<Refugiado>> GetRefugiados();
        Task<Refugiado> GetRefugiado(int id);
        Task<IEnumerable<Refugiado>> GetRefugiadosByNome(string nome);
        Task CreateRefugiado(Refugiado refugiado);
        Task UpdateRefugiado(Refugiado refugiado);
        Task DeleteRefugiado(Refugiado refugiado);
    }
}
