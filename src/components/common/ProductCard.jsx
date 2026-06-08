import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
    const {addToCart} = useCart()

  return (
    <div className="bg-white border border-gray-200 hover:border-red-500 hover:-translate-y-1 transition cursor-pointer">
    <Link to={`/products/${product.id}`}>
    <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full aspect-square object-cover"
        />

        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1">
          熱銷
        </span>
      </div>

      <div className="p-3">
        <h3 className="text-sm line-clamp-2 min-h-[40px]">
          {product.title}
        </h3>

        <div className="mt-3 flex items-end justify-between">
          <p className="text-red-500 font-bold">
            NT$ {product.price}
          </p>

          <p className="text-xs text-gray-500">
            已售出 {product.sold || 120}
          </p>
        </div>
    </div>
    </Link>
        <button
            onClick={() =>addToCart(product)}
            className="mt-3 w-full bg-red-500 text-white py-2 hover:bg-red-600"
            >
                加入購物車

            </button>
      </div>
  )
}

export default ProductCard