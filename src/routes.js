import App from "./App";
import About from "./components/about/about";
import Events from "./components/events/events";
import HiredProducts from "./components/hired-products /hired-products";
import Children from "./components/ministry/children";
import Teen from "./components/ministry/teen";
import Youth from "./components/ministry/youths";
import Women from "./components/ministry/women";
import Men from "./components/ministry/men";

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
    {
        path: "/children",
        element: <Children/>
    },
    {
        path: "/teen",
        element: <Teen/>
    },
    {
        path: "/youths",
        element: <Youth/>
    },
    {
        path: "/women",
        element: <Women/>
    },
    {
        path: "/men",
        element: <Men/>
    },
    // Add more paths as needed...
    // Add more routes as needed...
    // Add more paths as needed...
    // Add more routes as needed...
    


]

export default routes;