import React from 'react'
import {Products} from '../data'
import { useSelector,useDispatch } from 'react-redux'
import {addTocart,selectCartitems} from '../redux/cartSlice'
import { ToastContainer, toast ,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const dispatch = useDispatch()
  const cartitem = useSelector(selectCartitems)
  console.log('Cart items =',cartitem);
  const handleAddtocart = (item) =>{
    toast.success('item added to cart!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
    dispatch(addTocart(item))
  }
  return (
    <>
    <div>
    <ToastContainer

/>
    </div>
    <div className="container">
      <div className="row">
        {
          Products.map((item)=>(
            <div key={item.id} className="container col-md-4 my-5">
               <div class="card bg-dark" style={{width:'16rem'}}>
                <div className='p-3 d-flex justify-content-center align-items-center'> 
                  <img src={item.imgSrc}  className="card-img-top" alt="..." style={{width:'200px',height:'200px' ,borderRadius:'10px'}}/>
                </div>
                 <div className="card-body text-light text-center">
                  <h5 className="card-title">{item.title}</h5>
                   <p className="card-text">{item.description}</p>
                   <button className="btn btn-primary mx-3">₹ {item.price}</button>
                   <button className="btn btn-warning" onClick={()=>handleAddtocart(item)}>Add to cart</button>
                
               </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Product