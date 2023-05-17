import React, {useEffect, useState} from 'react';
import {Button, Container, Grid, TextField} from "@mui/material";
import axios from "axios";
import {useSelector} from "react-redux";

import Message from "./Message";


const Chat = () => {
        let isComponentUnmounted = false;

        const idInstance = useSelector((state) => state.chatReducer.id)
        const apiTokenInstance = useSelector((state) => state.chatReducer.token)
        const number = useSelector((state) => state.chatReducer.number)

        const [value, setValue] = useState("")
        const [messages, setMessages] = useState([])

        const sendMessage = async () => {
            try {
                const {idMessage} = await axios.post(`https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
                    chatId: `${number.replace(/[\(\)\s+]/g, "")}@c.us`,
                    message: value
                })
                const message = {
                    body: {
                        idMessage: idMessage,
                        senderData: {
                            senderName: null
                        },
                        messageData: {
                            textMessageData: {
                                textMessage: value
                            }
                        }
                    }
                }

                setMessages([...messages, message])
                setValue("")
            } catch (err) {
                console.log(err);
            }
        }

        const subscribe = async () => {
            if (idInstance && apiTokenInstance && !isComponentUnmounted) {
                try {
                    const {data} = await axios.get(`https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`)
                    if (data !== null) {
                        await axios.delete(`https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${data.receiptId}`)
                        setMessages(prev => [...prev, data])
                    }
                    await subscribe()
                } catch (err) {
                    setTimeout(() => {
                        subscribe()
                    }, 500)
                }
            }
        }

        useEffect(() => {
            subscribe()

            return () => {
                isComponentUnmounted = true; // Установка флага размонтирования компонента
            }
        }, []);


        return (
            <Container>
                <Grid
                    alignItems={"center"}
                    container
                    style={{height: window.innerHeight - 50}}
                    justifyContent={"center"}
                >
                    <div
                        style={{width: "80%", height: "70vh", border: "1px solid gray", overflowY: "auto"}}
                    >
                        {messages.map((mes, index) => {
                            const message = mes.body.messageData.textMessageData.textMessage
                            const senderName = mes.body.senderData.senderName

                            return <Message
                                key={index}
                                message={message}
                                senderName={senderName}
                            />
                        })}
                    </div>
                    <Grid container
                          direction={"column"}
                          alignItems={"flex-end"}
                          style={{width: "80%"}}
                    >
                        <TextField
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            fullWidth
                            variant={"outlined"}
                        />
                        <Button onClick={sendMessage} variant={"outlined"}
                                style={{backgroundColor: '#18e7d8', color: "#5a6c67"}}
                        >
                            Отправить
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        );
    }
;

export default Chat;
