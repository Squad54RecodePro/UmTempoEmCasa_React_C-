using UmTempoEmCasaReactC.Model;

namespace UmTempoEmCasaReactC.Service
{
    public interface IAnfitriaoService
    {
        Task<IEnumerable<Anfitriao>> GetAnfitrioes();
        Task<Anfitriao> GetAnfitriao(int id);
        Task<IEnumerable<Anfitriao>> GetAnfitrioesByNome(string nome);
        Task CreateAnfitriao(Anfitriao anfitriao);
        Task UpdateAnfitriao(Anfitriao anfitriao);
        Task DeleteAnfitriao(Anfitriao anfitriao);
    }
}
