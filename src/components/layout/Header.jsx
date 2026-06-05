import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import Container from "../common/Container"
import { useCart } from "../../context/CartContext"

const Header = () => {
     const { cartItems } = useCart()
  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
      ">
      {/* Top Bar */}
      <div
        className="
          bg-red-800
          text-white
          text-sm
        "
      >
        <Container>
          <div
            className="
              h-[40px]

              flex
              justify-between
              items-center
            "
          >

            {/* Left */}
            <div className="flex gap-4">
              <span>賣家中心</span>
              <span>開始隨拍即賣囉!</span>
              <span>下載</span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
              <span>追蹤我們</span>

              <FaFacebook className="cursor-pointer" />

              <FaInstagram className="cursor-pointer" />
            </div>

          </div>
        </Container>
      </div>

      {/* Main Header */}
<div className="h-[70px] bg-red-700 text-white">
  <Container>
    <div className="h-[70px] flex items-center gap-12">
      <Link to="/" className="text-3xl font-bold">
        Fake Store
      </Link>

      <div className="flex flex-1">
        <input
        type="text"
        placeholder="搜尋商品"
        className="
                flex-1
                bg-white
                text-black

                px-4
                py-2

                rounded-l-md
                outline-none
                "
/>

        <button
          className="
            bg-gray-900
            px-6
            rounded-r-md
            hover:bg-gray-800
            transition-colors
          "
        >
          搜尋
        </button>
      </div>

      <nav className="flex gap-6">
        <Link to="/" className="hover:text-gray-200 transition-colors">
          首頁
        </Link>

        <Link to="/products" className="hover:text-gray-200 transition-colors">
          商品
        </Link>

        <Link to="/cart" className="hover:text-gray-200 transition-colors">
          購物車 ({cartItems.length})
        </Link>
      </nav>
    </div>
  </Container>
</div>
    </header>
  )
}

export default Header