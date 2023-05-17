import {CHAT_ROUTE, FORM_ROUTE} from "./utils/consts";
import Form from "./components/Form";
import Chat from "./components/Chat";

export const publicRoutes = [
    {
        path: FORM_ROUTE,
        Component: Form
    },
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]