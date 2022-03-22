using UmTempoEmCasaReactC.Model;

namespace UmTempoEmCasaReactC.Service
{
    public interface IOngService
    {
        Task<IEnumerable<Ong>> GetOngs();
        Task<Ong> GetOng(int id);
        Task<IEnumerable<Ong>> GetOngsByNome(string nome);
        Task CreateOng(Ong ong);
        Task UpdateOng(Ong ong);
        Task DeleteOng(Ong ong);
    }
}
