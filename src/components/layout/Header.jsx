import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import Container from "../common/Container"
import { useCart } from "../../context/CartContext"
import { useSearch } from "../../context/SearchContext"
import { useAuth } from "../../context/AuthContext"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase/firebase"

const Header = () => {
     const { cartItems } = useCart()
     const cartTotalQuantity = cartItems.reduce(
            (sum, item) => sum + item.quantity,
                0
                )
     const { searchKeyword, setSearchKeyword } = useSearch()
     const { currentUser } = useAuth()
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
            <div className="hidden md:flex gap-4">
              <span>賣家中心</span>
              <span>開始隨拍即賣囉!</span>
              <span>下載</span>
            </div>

            {/* Right */}
            <div className="hidden md:flex items-center gap-3">
              <span>追蹤我們</span>

              <FaFacebook className="cursor-pointer" />

              <FaInstagram className="cursor-pointer" />
            </div>

          </div>
        </Container>
      </div>

      {/* Main Header */}
<div className="bg-red-700 text-white">
  <Container>
    <div className="py-3 flex flex-col gap-3 md:h-[70px] md:flex-row md:items-center md:gap-12">
      <Link to="/" className="text-2xl md:text-3xl font-bold">
        TrendHub
      </Link>

      <div className="flex w-full md:flex-1">
            <input
                type="text"
                placeholder="搜尋商品"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
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

      <nav className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
        <Link to="/" className="hover:text-gray-200 transition-colors">
          首頁
        </Link>

        <Link to="/products" className="hover:text-gray-200 transition-colors">
          商品
        </Link>

        <Link to="/cart" className="hover:text-gray-200 transition-colors">
          購物車 ({cartTotalQuantity})
        </Link>
        {currentUser ? (
  <>
        <span className="text-gray-100">
       {currentUser.email.split("@")[0]}
            </span>

        <button
            onClick={() => signOut(auth)}
        className="hover:text-gray-200 transition-colors"
        >
             登出
        </button>
    </>
    ) : (
  <>
        <Link
            to="/login"
        className="hover:text-gray-200 transition-colors"
        >
        登入
        </Link>

        <Link
        to="/register"
        className="hover:text-gray-200 transition-colors"
        >
        註冊
        </Link>
    </>
    )}
      </nav>
    </div>
  </Container>
</div>
    </header>
  )
}

export default Header