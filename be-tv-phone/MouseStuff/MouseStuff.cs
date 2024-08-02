

using System.Windows;
using System.Drawing;
using System.Runtime.InteropServices;
namespace SignalRWebpack.MouseStuff;

[StructLayout(LayoutKind.Sequential)]
public struct POINT
{
    public int X;
    public int Y;

    public static implicit operator Point(POINT point)
    {
        return new Point(point.X, point.Y);
    }
}
public static class MouseStuffClass
{

    private const uint MOUSEEVENTF_LEFTDOWN = 0x0002;
    private const uint MOUSEEVENTF_LEFTUP = 0x0004;

    [DllImport("user32.dll")]
    public static extern bool SetCursorPos(int x, int y);

    [DllImport("user32.dll")]
    public static extern bool GetCursorPos(out POINT lpPoint);

    public static Point GetCursorPosition()
    {
        POINT lpPoint;
        GetCursorPos(out lpPoint);
        return lpPoint;
    }

    [DllImport("user32.dll", SetLastError = true)]
    static extern void mouse_event(uint dwFlags, uint dx, uint dy, uint dwData, int dwExtraInfo);

    public static void Click()
    {
        // Get the current cursor position
        Point currentPos = GetCursorPosition();

        // Simulate the mouse down and up event
        mouse_event(MOUSEEVENTF_LEFTDOWN, (uint)currentPos.X, (uint)currentPos.Y, 0, 0);
        mouse_event(MOUSEEVENTF_LEFTUP, (uint)currentPos.X, (uint)currentPos.Y, 0, 0);
    }
}














