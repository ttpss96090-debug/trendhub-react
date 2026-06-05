import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

const Navbar = () => {
  const { cartItems } = useCart()

  return (
    <nav>
      <Link to="/">首頁</Link>

      <Link to="/products">商品</Link>

      <Link to="/cart">
        購物車 ({cartItems.length})
      </Link>
    </nav>
  )
}

export default Navbar