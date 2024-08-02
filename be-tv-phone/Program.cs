using SignalRWebpack.Hubs;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSignalR();


builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy",
    builder => builder
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials()
        .SetIsOriginAllowed((host) => true)); // Możesz to zmienić, aby zezwalać tylko na określone pochodzenie
});

var app = builder.Build();


app.UseDefaultFiles();
app.UseStaticFiles();
app.UseCors("CorsPolicy");

app.MapGet("/", () => "Hello World!");
app.MapHub<MouseHub>("/mouseHub");

app.Run();

