using UmTempoEmCasaReactC.Model;

namespace UmTempoEmCasaReactC.Service
{
    public interface IImovelService
    {
        Task<IEnumerable<Refugiado>> GetImoveis();
        Task<Refugiado> GetImovel(int id);
        Task<IEnumerable<Refugiado>> GetImoveisByNome(string nome);
        Task CreateImovel(Refugiado refugiado);
        Task UpdateImovel(Refugiado refugiado);
        Task DeleteImovel(Refugiado refugiado);
        Task CreateImovel(Imovel imovel);
        Task UpdateImovel(Imovel imovel);
    }
}
