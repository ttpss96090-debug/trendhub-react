import { useCart } from "../context/CartContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CheckoutPage = () => {
  const { cartItems ,clearCart } = useCart()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  })

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

      const handleChange = (e) => {
        setFormData({
        ...formData,
         [e.target.name]: e.target.value,
        })
      }

      const handleSubmit = (e) => {
      e.preventDefault()
      if (cartItems.length === 0) {
      alert("購物車是空的")
      return
    }

      if (
      !formData.name ||
      !formData.phone ||
      !formData.address
    ) {
      alert("請填寫完整資料")
      return
  }

    console.log("訂單資料：", formData)
    console.log("購物車：", cartItems)

    clearCart()
    navigate("/order-success")
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-40 md:pt-32 pb-10">
      <h1 className="text-2xl font-bold mb-6">結帳頁</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="bg-white border p-4 sm:p-6">
          <h2 className="text-xl font-bold mb-4">收件資料</h2>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="收件人姓名"
            className="w-full border px-4 py-2 mb-4"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="手機號碼"
            className="w-full border px-4 py-2 mb-4"
          />

          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="收件地址"
            className="w-full border px-4 py-2 mb-4"
          />

          <button className="w-full bg-red-500 text-white py-3 hover:bg-red-600">
            送出訂單
          </button>
        </form>

        <div className="bg-white border p-4 sm:p-6">
          <h2 className="text-xl font-bold mb-4">訂單摘要</h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border-b py-3"
            >
              <p>{item.title}</p>

              <p className="text-sm text-gray-500">
                數量：{item.quantity}
            </p>

              <p className="text-red-500">
              NT$ {(item.price * item.quantity).toFixed(2)}
          </p>
      </div>
))}

          <p className="mt-4 text-gray-500">
            商品數量：{totalQuantity}
          </p>

          <p className="text-red-500 text-xl sm:text-2xl font-bold mt-4">
            總計 NT$ {totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage