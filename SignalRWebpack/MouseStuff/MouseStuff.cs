

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
    [DllImport("user32.dll")]
    public static extern bool SetCursorPos(int x, int y);

    [DllImport("user32.dll")]
    public static extern bool GetCursorPos(out POINT lpPoint);

    public static Point GetCursorPosition()
    {
        POINT lpPoint;
        GetCursorPos(out lpPoint);
        // NOTE: If you need error handling
        // bool success = GetCursorPos(out lpPoint);
        // if (!success)

        return lpPoint;
    }

}














