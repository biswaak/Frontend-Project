/*in previous module we create the categories and show the categories in Dashboard
    1)electronics
    2)jewellery
    3)men's clothing
    4)women's clothing
*/
//In this we are goona make this categories clickable product.

import axios from "axios";
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";

export function FlashShopProducts()
{
    const[category, setCategory] = useState();
    const[products, setProducts] = useState([]);

    
    let params = useParams(); //it ll collect all route params

    useEffect(()=>{
        setCategory(params.category) //category- here param name which we mention in "FlashShopIndex" page

        axios.get("http://localhost:8080/getproducts")
        .then(res=>{
            setProducts(res.data);
        })
    })
    return(
        <div>
            <h2>{category} List</h2>
            <ol>
                {
                    //It ll gave us all cause use of map.
                    /*products.map(product=>
                        <li key={product.id}>{product.title}</li>
                        )*/
                    //but as we need details by section basics, so we have to use a filter-"Filter() method" with our Array-Products 

                    products.filter(item => item.category == category) //this filter ll get the only selected products.
                            .map(product=>
                        <li key={product.id}>
                            <img src={product.image} width="50" height="50" />
                            
                            <div className="text-warning bi bi-cart4 mb-3 mt-2">
                                <Link to={"/details/" + product.id}>{product.title}</Link>
                            </div>
                        </li>
                        )
                }
            </ol>

            <div>
                <Link to="/Dashboard">Back to Categories</Link>
            </div>
        </div>
    )
}