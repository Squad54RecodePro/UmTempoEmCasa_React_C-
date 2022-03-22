using Microsoft.EntityFrameworkCore;
using UmTempoEmCasaReactC.Context;
using UmTempoEmCasaReactC.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<MVCContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("ConexaoBanco"));
});
builder.Services.AddScoped<IRefugiadoService, RefugiadosService>();
builder.Services.AddScoped<IAnuncioService, AnunciosService>();
builder.Services.AddScoped<IImovelService, ImoveisService>();
builder.Services.AddScoped<IReservaService, ReservasService>();
builder.Services.AddScoped<IOngService, OngsService>();
builder.Services.AddScoped<IContatoService, ContatosService>();
builder.Services.AddScoped<IAnfitriaoService, AnfitrioesService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
