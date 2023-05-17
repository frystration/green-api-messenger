import React, {useState} from 'react';
import {Box, Button, Container, Grid, TextField} from "@mui/material";
import {CHAT_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {chatSlice} from "../store/reducers/ChatSLice";

const Form = () => {
    const dispatch = useDispatch()
    const {setChat} = chatSlice.actions

    const idInstance = useSelector((state) => state.chatReducer.id)
    const apiTokenInstance = useSelector((state) => state.chatReducer.token)
    const chatNumber = useSelector((state) => state.chatReducer.number)

    const [id, setId] = useState(idInstance)
    const [token, setToken] = useState(apiTokenInstance)
    const [number, setNumber] = useState(chatNumber)

    const login = () => {
        dispatch(setChat({
            id,
            token,
            number
        }))
    }

    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justifyContent={"center"}
            >
                <Grid style={{width: 400, backgroundColor: '#E6E6FA'}}
                      container
                      alignItems={"center"}
                      direction={"column"}
                >
                    <Box p={5}>
                        <TextField
                            required
                            label="idInstance"
                            fullWidth
                            value={id}
                            margin="normal"
                            onChange={e => setId(e.target.value)}
                        />
                        <TextField
                            required
                            label="apiTokenInstance"
                            fullWidth
                            value={token}
                            margin="normal"
                            onChange={e => setToken(e.target.value)}
                        />
                        <TextField
                            required
                            label="номер телефона получателя"
                            fullWidth
                            value={number}
                            margin="normal"
                            onChange={e => setNumber(e.target.value)}
                        />
                        <NavLink to={CHAT_ROUTE}>
                            <Button fullWidth onClick={login} variant={"outlined"}
                                    style={{backgroundColor: '#18e7d8', color: "#5a6c67"}}
                            >
                                Перейти в чат
                            </Button>
                        </NavLink>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Form;

