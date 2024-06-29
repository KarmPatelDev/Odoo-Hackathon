import {Routes,Route} from "react-router-dom";
import { Cart } from "./Cart";
import { Furniture } from "./Furniture";
import { Home } from "./Home";
import { NotFound } from "./NotFoundPage";
import { PrivateRoute } from "./PrivateRoute";
export const Allroutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/furniture" element={<Furniture/>}/>
            <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/>
            <Route path= "*" element={<NotFound/>}  />
        </Routes>
    )
}