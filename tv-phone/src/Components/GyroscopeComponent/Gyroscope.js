import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Gyroscope } from 'expo-sensors';
import { WebsocketMicrosoft } from '../../websockets/Websocket'
import { Joystick } from 'react-joystick-component';

const websocket = new WebsocketMicrosoft();


export default function GyroscopeComponent() {

    const [{ x, y, z }, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const [subscription, setSubscription] = useState(null);
    const _slow = () => Gyroscope.setUpdateInterval(1000);
    const _fast = () => Gyroscope.setUpdateInterval(16);

    const setupCurrentPosition = (gyroscopeData) => {
        setData({
            x: x + gyroscopeData.x,
            y: y + gyroscopeData.y,
            z: z + gyroscopeData.z,
        })
    }

    const _subscribe = () => {
        _slow();
        setSubscription(
            Gyroscope.addListener(gyroscopeData => {
                setupCurrentPosition(gyroscopeData)
            })
        );
    };

    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };


    _createWebsocket = () => {

    }
    _sendMessage = () => {

        websocket.send(x, y)
    }
    // why this function is called 2 times? lol
    useEffect(() => {
        _subscribe();
        _createWebsocket();
        return () => _unsubscribe();
    }, []);

    handleMove = (data) => {
        console.log(data)
    }

    handleStop = () => {
        console.log
    }
    return (
        <View style={styles.container}>
            <View>
                <Text>
                    Connection
                </Text>
                <Joystick size={100} sticky={true} baseColor="red" stickColor="blue" move={handleMove()} stop={handleStop()}></Joystick>

                {/* <Button onPress={_sendMessage} title='SEND'></Button> */}
            </View>
            {/* <Text style={styles.text}>Gyroscope:</Text>
            <Text style={styles.text}>x: {x}</Text>
            <Text style={styles.text}>y: {y}</Text>
            <Text style={styles.text}>z: {z}</Text> */}
            {/* <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
                    <Text>{subscription ? 'On' : 'Off'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
                    <Text>Slow</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={_fast} style={styles.button}>
                    <Text>Fast</Text>
                </TouchableOpacity>
            </View> */}
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        paddingTop: 50,
    },
    text: {
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        marginTop: 15,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 10,
    },
    middleButton: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#ccc',
    },
});