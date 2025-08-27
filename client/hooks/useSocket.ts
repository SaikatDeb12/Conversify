import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import dotenv from "dotenv";
dotenv.config();

const socket = io(process.env.HOST as string);

export const useSocket = () => {
    const user = useAppSelector((state) => state.user.user);
    // const [socketConnected, setSocketConnected] = useState(false);
    const [messages, setMessages] = useState<Array<any>>([]);
    useEffect(() => {
        // socket.on("connection", () => setSocketConnected(true));
        socket.emit("setup", user);
        // return () => {
        //   socket.disconnect();
        // };
    }, []);

    useEffect(() => {
        socket.on("message recieved", (newMessage: any) => {
            console.log("New Message ", newMessage);
            setMessages([...messages, newMessage]);
        });
    });

    return { socket, messages, setMessages };
};
