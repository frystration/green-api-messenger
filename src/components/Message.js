import React from 'react';
import {Paper, Typography} from "@mui/material";

const Message = (props) => {
    const {senderName, message} = props;

    return (
        <div>
            {senderName ? (
                    <Paper
                        style={{
                            marginBottom: '10px',
                            padding: '10px',
                            marginTop: '10px',
                            marginLeft: '5px',
                            display: 'flex',
                            alignItems: 'center',
                            maxWidth: '60%',
                            alignSelf: 'flex-start',
                            borderRadius: '20px 20px 20px 5px',
                            backgroundColor: '#f1f1f1',
                            width: "fit-content",
                        }}
                        elevation={2}
                    >
                        <Typography
                            style={{
                                fontWeight: 'bold',
                                paddingRight: "10px"
                            }}
                        >{senderName}:
                        </Typography>
                        <Typography
                        >
                            {message}
                        </Typography>
                    </Paper>
                ) :
                (
                    <Paper
                        style={{
                            marginBottom: '10px',
                            padding: '10px',
                            marginTop: '5px',
                            display: 'flex',
                            alignItems: 'center',
                            maxWidth: '60%',
                            alignSelf: 'flex-end',
                            borderRadius: '20px 20px 5px 20px',
                            marginLeft: 'auto',
                            marginRight: ' 5px',
                            width: "fit-content",
                            backgroundColor: '#18e7d8',
                            color: "#5a6c67"
                        }}
                        elevation={2}
                    >
                        <Typography
                        >
                            {message}
                        </Typography>
                    </Paper>)}
        </div>
    );
};

export default Message;