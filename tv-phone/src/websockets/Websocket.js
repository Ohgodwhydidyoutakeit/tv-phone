
import * as signalR from '@microsoft/signalr'
export class WebsocketMicrosoft {

    _connection

    constructor() {
        this._connection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Debug)
            .withUrl("http://192.168.0.227:3000/hub", {
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets
            })
            .build();

        this._connection.start()
            .then((data) => {
                console.log(data);
            }).catch(console.error);

        // this._connection.on("messageReceived", (message) => {
        //     console.log("Recived")
        // });
    }


    // startConnection() {


    // }


    send(x, y) {
        this._connection.send("newMessage", x, y)
            .then(console.log).catch(console.error);
    }


}


