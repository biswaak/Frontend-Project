import axios from "axios";
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";

/**Here We can get product's item's Details - mean Product's Id, title, price, descripton, category, images, rating,rate,count etc. */
export function FashionShopProdutDetails()
{
    const[product, setProduct] = useState([]);
    let params = useParams();

    useEffect(()=>{
        //let id = parseInt(params.id);
        axios.get(`http://localhost:8080/getproducts/${params.id}`)
        .then(response=>{
            setProduct(response.data);
        })
        .catch(error => {
            console.error("Error fetching product details:", error);
        });
    },[params.id]);
    return(
        <div>
            <h2>Product Details {params.id}</h2>
            {
                product.length > 0 && (
            <dl>
                <dt>id</dt>
                <dd>{product[0].id}</dd>
                <dt>Title</dt>
                <dd>{product[0].title}</dd>
                <dt>Price</dt>
                <dd>{product[0].price}</dd>
                <dt>Description</dt>
                <dd>{product[0].description}</dd>
                <dt>Preview</dt>
                <dd>
                    <img src={product[0].image} width="100" height="100"/>
                </dd>
                <dt>Rating</dt>
                <dd><span className="bi bi-star-fill">{product[0].rating.rate} </span></dd>
            </dl>
                )}

            <br />

            <div>
                {
                    product.length > 0 && (
                        <Link to={"/products/" + product[0].category}>Back to products</Link>
                    )

                }
            </div>
        </div>
    )
}