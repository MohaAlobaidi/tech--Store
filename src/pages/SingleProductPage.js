import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import singleProductBcg from './../images/singleProductBcg.jpeg'
import {ProductConsumer} from '../context'
export default function SingleProductPage() {
    return (
        <>
   <Hero img={singleProductBcg} title="single product"/>
   <ProductConsumer>
     {value =>{
       const {singleProduct,loading,addToCart} = value;
       if(loading){
         console.log('loading single product')
         return <h1>loading single product</h1>
       }

       const {company, title, price, description,image,id} = singleProduct
      
      return <section className="py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                      {/* becase loccal data not from server طريقة غريبة */}
                      <img src={`../${image}`} alt="SingleProduct" className="img-fluid" />
                    </div>

                    <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <h5 className="text-title mb-4">model : {title}</h5>
                      <h5 className="text-capitalize text-muted my-4">company : {company}</h5>
                      <h5 className="text-main text-capitalize mb-4">price : ${price}</h5>
                      <p className="text-capitalize text-title">
                        some info about product :
                      </p>
                      <p>{description}</p>
                    
                      <button type="button"
                              className="main-link"
                               style={{margin:".75rem"}} 
                               onClick={()=> addToCart(id)}
                               >
                                  add to cart
                      </button>

                      <Link to='/products'className="main-link">back to products</Link>
                    </div>

                  </div>
                </div>
             </section>
     }}
   </ProductConsumer>
        </>
    )
}