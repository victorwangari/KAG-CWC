import App from "./App";
import About from "./components/about/about";
import Events from "./components/events/events";

const routes = [
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/events",
        element: <Events/>
    }


]

export default routes;