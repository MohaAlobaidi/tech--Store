import React from 'react'
import {FaTrash,FaChevronCircleUp,FaChevronCircleDown} from 'react-icons/fa'

export default function CartItem({ CartItem,increment,decrement,removeItem}) {
const {id,title ,price,count,image,total} = CartItem
    return (
        <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
            {/* image */}
            <div className="col-10 x-auto col-lg-2 pb-2">
                <img src={image} width="60" className="img-fluid" alt="product"/>
            </div>
            {/* end image */}

              {/* title */}
              <div className="col-10 x-auto col-lg-2 pb-2">
                 <span className="d-lg-none">product :</span>{title}
            </div>
            {/* end title */}

               {/* price */}
               <div className="col-10 x-auto col-lg-2 pb-2">
                 <span className="d-lg-none">price :</span>${price}
            </div>
            {/* end price */}

            {/* count control */}
            <div className="col-10 x-auto col-lg-2 my-2 my-lg--0">
                <div className="d-flex justify-content-center">
                  
               <FaChevronCircleDown className="text-primary cart-icon" onClick={()=>decrement(id)}/>

                    <span className="text-title text-muted mx-3">{count}</span>

              <FaChevronCircleUp className="text-primary cart-icon" onClick={()=>increment(id)}/>
                </div>
            </div>
            {/* end count control */}



            {/* remove Item */}
            <div className="col-10 x-auto col-lg-2">
                <FaTrash className="text-danger cart-icon" onClick={()=>removeItem(id)}/>
            </div>
            {/* end remove Item */}

            {/* item total */}
                <div className="col-10 x-auto col-lg-2">
                    <strong className="text-muted">item total : ${total}</strong>
                </div>
            {/* end item total */}


        </div>
    )
}
