import { Link } from "react-router-dom";
//import PageSection from "../components/PageSection";

export default function HomePage(){
    return(
        <div>
            <h1 className="text-4xl font-bold text-center">Home Page</h1>
            <p className="text-center">This is the home page</p>
            <div>
                <Link to href="/login">Login</Link>
                <Link to href="/productos">Productos</Link>
                <Link to href="/productos/producto123">Producto 123</Link>
            </div>
        </div>
    )
}