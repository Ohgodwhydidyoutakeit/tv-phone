using System.Drawing;
using Microsoft.AspNetCore.SignalR;
using SignalRWebpack.MouseStuff;
namespace SignalRWebpack.Hubs;

public class MouseHub : Hub
{
    public async Task ChangePosition(float x, float y)
    {

        Point position = MouseStuffClass.GetCursorPosition();

        var newPosX = position.X + (int)Math.Round(x);
        var newPosY = position.Y + (int)Math.Round(y);
        Thread.Sleep(2);
        MouseStuffClass.SetCursorPos(newPosX, newPosY);

        Console.WriteLine("new position x: {0}, y : {1}, at time {2}", newPosX, newPosY, System.DateTimeOffset.Now.ToString("MM/dd/yyyy hh:mm:ss.fff tt"));

    }

    public async Task Click()
    {
        // Console.WriteLine("Clicked");
        MouseStuffClass.Click();
    }
}
