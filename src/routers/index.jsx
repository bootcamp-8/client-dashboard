import { Routes, Route } from "react-router-dom";
import PublicRouter from './public-router';
import Home from "../pages/home"
import ServicesCard from "../component/service-card";


export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<PublicRouter />} >
                <Route path="/home" element={<Home />} />
                <Route path="/services" element={<ServicesCard />} />
            </Route>
        </Routes>
    )
}