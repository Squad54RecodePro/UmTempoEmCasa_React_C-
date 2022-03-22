using UmTempoEmCasaReactC.Model;

namespace UmTempoEmCasaReactC.Service
{
    public interface IImovelService
    {
        Task<IEnumerable<Imovel>> GetImoveis();
        Task<Imovel> GetImovel(int id);
        Task<IEnumerable<Imovel>> GetImoveisByNome(string nome);
        Task CreateImovel(Imovel imovel);
        Task UpdateImovel(Imovel imovel);
        Task DeleteImovel(Imovel imovel);
       
    }
}
