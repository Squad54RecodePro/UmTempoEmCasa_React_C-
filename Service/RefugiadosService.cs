﻿using Microsoft.EntityFrameworkCore;
using UmTempoEmCasaReactC.Context;
using UmTempoEmCasaReactC.Model;

namespace UmTempoEmCasaReactC.Service
{
    public class RefugiadosService : IRefugiadoService
    {
        private readonly MVCContext _context;
        public RefugiadosService(MVCContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Refugiado>> GetRefugiados()
        {
            try
            {
                return await _context.Refugiados.ToListAsync();
            }
            catch
            {
                throw;
            }

        }
        public async Task<IEnumerable<Refugiado>> GetRefugiadosByNome(string nome)
        {
            IEnumerable<Refugiado> refugiados;
            if (!string.IsNullOrWhiteSpace(nome))
            {
                refugiados = await _context.Refugiados.Where(n => n.Nome.Contains(nome)).ToListAsync();
            }
            else
            {
                refugiados = await GetRefugiados();
            }
            return refugiados;
        }
        public  async Task<Refugiado> GetRefugiado(int id)
        {
            var refugiado = await _context.Refugiados.FindAsync(id);
            return refugiado;
        }
        public async Task CreateRefugiado(Refugiado refugiado)
        {
            _context.Refugiados.Add(refugiado);
            await _context.SaveChangesAsync(); 
        }
                      
        public async Task UpdateRefugiado(Refugiado refugiado)
        {
            _context.Entry(refugiado).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteRefugiado(Refugiado refugiado)
        {
            _context.Refugiados.Remove(refugiado);
            await _context.SaveChangesAsync();
        } 
    }
}
