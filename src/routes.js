import App from "./App";
import About from "./components/about/about";

const routes = [
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/about",
        element: <About/>
    }

]

export default routes;