




using Microsoft.AspNetCore.SignalR;
using SignalRWebpack.MouseStuff;
namespace SignalRWebpack.Hubs;

public class ChatHub : Hub
{
    public async Task NewMessage(float x, float y)
    {


        Console.WriteLine((int)Math.Round(x));
        Console.WriteLine((int)Math.Round(y));

        var position = MouseStuffClass.GetCursorPosition();

        var newPosX = position.X + (int)Math.Round(x)*10;
        var newPosY = position.Y + (int)Math.Round(y)*10;

        MouseStuffClass.SetCursorPos(newPosX, newPosY);

        Console.WriteLine(newPosX);
        Console.WriteLine(newPosY);

        // Console.WriteLine(x.ToString(), y.ToString());
        // await Clients.All.SendAsync("messageReceived", message);

    }
}
