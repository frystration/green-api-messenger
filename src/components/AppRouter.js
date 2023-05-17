import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes} from "../routes";
import {FORM_ROUTE} from "../utils/consts";

const AppRouter = () => {
    return (
            <Routes>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>}/>
                )}
                <Route path='*' element={<Navigate to={FORM_ROUTE}/>}/>
            </Routes>
        )
};

export default AppRouter;