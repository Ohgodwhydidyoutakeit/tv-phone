import { Provider } from "@angular/core";
import { WEBSOCKET_URL } from "../tokens/websocket-url.injection-token";



export const websocketProviders: Provider = {
    provide: WEBSOCKET_URL,
    useValue: 'http://192.168.1.100:3000/mouseHub'
}