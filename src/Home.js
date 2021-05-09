import React, {useState, useEffect } from 'react';
import './Home.css';
import Product from './Product';
import { db } from './firebase';

function Home() {
    const [products, setProducts] = useState ([])

    const getProducts = () => {
        db.collection('products').onSnapshot((snapshot)=>{
            let tempProducts=[]
            
            tempProducts = snapshot.docs.map((doc)=> (
                {
                  id: doc.id,
                  product: doc.data()  
                }
            ));
            setProducts(tempProducts);
        })
    }
        useEffect(()=>{
            console.log("call product");
        getProducts()
        }, [])
   

    return (
        <div className="home__container">
            <div className="home__banner">
            </div>
            <div className="home__content">
            {
                products.map((data)=>(
                 <Product
                 name={data.product.name}
                 price={data.product.price}
                 rating={data.product.rating}
                 image={data.product.image}
                 id={data.id}
                 />
                ))
            }
           
            </div>
        </div>
    )
}

export default Home


