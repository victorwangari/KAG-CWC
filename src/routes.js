import App from "./App";
import About from "./components/about/about";
import Events from "./components/events/events";
import HiredProducts from "./components/hired-products /hired-products";

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
    },
    {
        path: "/hired-products",
        element: <HiredProducts/>
    },
    // Add more routes as needed...
    


]

export default routes;