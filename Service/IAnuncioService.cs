using UmTempoEmCasaReactC.Model;

namespace UmTempoEmCasaReactC.Service
{
    public interface IAnuncioService
    {
        Task<IEnumerable<Anuncio>> GetAnuncios();
        Task<Anuncio> GetAnuncio(int id);
        Task<IEnumerable<Anuncio>> GetAnunciosByNome(string nome);
        Task CreateAnuncio(Anuncio anuncio);
        Task UpdateAnuncio(Anuncio anuncio);
        Task DeleteAnuncio(Anuncio anuncio);
    }
}
