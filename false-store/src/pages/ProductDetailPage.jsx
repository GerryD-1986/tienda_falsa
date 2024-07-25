import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api";
import { toast } from "sonner";

export default function ProductDetailPage(){
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        //fetch product by id
        getProduct(id)
        .then(producto => setProduct(producto))
        .catch((error) =>{
          toast.error("Error al cargar el producto");
          console.error("[getProduct]", error);
        });
    }, [id]);

    return (
        <main>
            <img src={product.thumbnail} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </main>

    );
}