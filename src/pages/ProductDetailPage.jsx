import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { useCart } from "../context/CartContext"

const ProductDetailPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { addToCart } = useCart()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        )

        setProduct(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProduct()
  }, [id])

  if (!product) {
      return (
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-6">
      Loading...
    </div>
      )
  }

return (
  <div className="max-w-5xl mx-auto px-6 pt-32 pb-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-lg shadow-sm">
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-80 h-80 object-contain"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold">
          {product.title}
        </h1>

        <p className="text-red-500 text-3xl font-bold mt-6">
          NT$ {product.price}
        </p>

        <p className="mt-6 text-gray-600 leading-7">
          {product.description}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-8 w-full bg-red-500 text-white py-3 hover:bg-red-600"
        >
          加入購物車
        </button>
      </div>
    </div>
  </div>
)
}

export default ProductDetailPage