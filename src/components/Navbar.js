import React from 'react';
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {NavLink, useLocation} from "react-router-dom";
import {FORM_ROUTE} from "../utils/consts";
import {useSelector} from "react-redux";

const Navbar = () => {
    const number = useSelector((state) => state.chatReducer.number)
    let location = useLocation();

    let form = true;
    form = location.pathname === '/form';

    return (
        <AppBar color={"secondary"} position="static" style={{backgroundColor: '#18e7d8', color: '#5a6c67'}}>
            <Toolbar variant={"dense"}>
                {   !form &&
                    <div>chat: {number}</div>
                }
                <Grid container justifyContent={"flex-end"}>
                    {!form &&
                        <NavLink to={FORM_ROUTE}>
                            <Button variant={"outlined"} style={{backgroundColor: '#E6E6FA', color: '#5a6c67'}}>
                                Вернуться к форме
                            </Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;