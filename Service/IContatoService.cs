using UmTempoEmCasaReactC.Model;

namespace UmTempoEmCasaReactC.Service
{
    public interface IContatoService
    {
        Task<IEnumerable<Contato>> GetContatos();
        Task<Contato> GetContato(int id);
        Task<IEnumerable<Contato>> GetContatosByNome(string nome);
        Task CreateContato(Contato contato);
        Task UpdateContato(Contato contato);
        Task DeleteContato(Contato contato);
    }
}
