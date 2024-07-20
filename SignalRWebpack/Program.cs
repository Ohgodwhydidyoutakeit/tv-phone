using SignalRWebpack.Hubs;




var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSignalR();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        builder =>
        {
            builder.WithOrigins("*")
                .AllowAnyHeader()
                .WithMethods("GET", "POST")
                .AllowCredentials();
        });
});
var app = builder.Build();





app.UseDefaultFiles();
app.UseStaticFiles();

app.MapGet("/", () => "Hello World!");
app.MapHub<ChatHub>("/hub");

app.Run();
