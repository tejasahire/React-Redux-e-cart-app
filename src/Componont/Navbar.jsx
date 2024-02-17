import React from 'react'
import { useSelector} from 'react-redux'
import {selectCartitems,selectCarttotalprice} from '../redux/cartSlice'
import { Link } from 'react-router-dom'


const Navbar = () => {
  // const dispatch = useDispatch()
  const cartitem = useSelector(selectCartitems)
  const totalPrice = useSelector(selectCarttotalprice)
  return (
    <>
    <div className="nav_bar sticky-top">
      <Link to={'/'} style={{color:'white',textDecoration:'none'}} className="left"><h3>Redux-Toolkit</h3></Link>
      <div className="middle">
          <button className="btn btn-warning"><h6>Cart item Total price = {totalPrice}₹</h6></button >
        </div>
      <Link to={'/cart'} className="right">
      <button type="button" className="btn btn-primary position-relative">
      <span class="material-symbols-outlined">
shopping_cart
</span>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      {cartitem.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
      </Link >
    </div>
    </>
  )
}

export default Navbar