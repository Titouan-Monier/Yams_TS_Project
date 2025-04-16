// app/screens/online-game.screen.js

import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { SocketContext } from '../contexts/socket.context';
import OnlineGameController from "../controllers/online-game.controller";
export default function OnlineGameScreen({ navigation }) {

    const socket = useContext(SocketContext);

    useEffect(() => {
        console.log('[emit][queue.join]:', socket.id);
        socket.emit("queue.join");
        setInQueue(false);
        setInGame(false);

        socket.on('queue.added', (data) => {
            console.log('[listen][queue.added]:', data);
            setInQueue(data['inQueue']);
            setInGame(data['inGame']);
        });

        socket.on('game.start', (data) => {
            console.log('[listen][game.start]:', data);
            setInQueue(data['inQueue']);
            setInGame(data['inGame']);
            setIdOpponent(data['idOpponent']);
        });

        socket.on('queue.left', (data) => {
            console.log('[listen][queue.left]:', data);
            setInQueue(data['inQueue']);
            setInGame(data['inGame']);
            navigation.navigate('HomeScreen');
        });

    }, []);

    return (
        <View style={styles.container}>
            <Text>Online Game Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }
});
