import { useCart } from "../context/CartContext"

const CartPage = () => {
  const { cartItems , removeFromCart } = useCart()

  const totalPrice = cartItems.reduce(
  (sum, item) => sum + item.price,
  0
)

  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-6">
      <h1 className="text-2xl font-bold mb-6">
        購物車
      </h1>

      {cartItems.length === 0 ? (
        <p>購物車是空的</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 border-b py-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-contain"
            />

              <div className="flex-1">
                <h3>{item.title}</h3>

                <p className="text-red-500">
                    NT$ {item.price}
                  </p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 text-sm text-red-500 hover:underline"
                  >
                    刪除商品
                  </button>
                </div>
          </div>
        ))
      )}
            <div className="mt-8 flex justify-end">
              <div className="text-right">
                <p className="text-gray-500">
                  商品數量：{cartItems.length}
                  </p>

              <h2 className="text-3xl font-bold text-red-500">
                總計 NT$ {totalPrice.toFixed(2)}
                </h2>
                </div>
          </div>
    </div>
  )
}

export default CartPage