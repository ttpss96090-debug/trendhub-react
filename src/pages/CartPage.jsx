import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"

const CartPage = () => {
  const { cartItems , removeFromCart ,increaseQuantity,decreaseQuantity} = useCart()

  const totalPrice = cartItems.reduce(
  (sum, item) => sum + item.price* item.quantity,
  0
)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-6">
      <h1 className="text-2xl font-bold mb-6">
        購物車
      </h1>

      {cartItems.length === 0 ? (
        <p>購物車是空的</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row gap-4 border-b py-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 sm:w-24 sm:h-24 object-contain mx-auto sm:mx-0"
            />

              <div className="flex-1 text-center sm:text-left">
                <h3>{item.title}</h3>

                     <div className="flex items-center justify-center sm:justify-start gap-3 mt-2">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className=" px-3 py-1"
              >
                -
              </button>

                  <span>{item.quantity}</span>

              <button
              onClick={() => increaseQuantity(item.id)}
                className=" px-3 py-1"
                >
                  +
              </button>
            </div>

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
           <div className="mt-8 flex justify-center sm:justify-end">
              <div className="text-center sm:text-right w-full sm:w-auto">
                <p className="text-gray-500">
                  商品數量：{cartItems.reduce((sum,item) => sum+item.quantity,0)}
                  </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-red-500">
                  總計 NT$ {totalPrice.toFixed(2)}
                </h2>
                <Link
                  to="/checkout"
                    className="
                                inline-block
                                mt-4
                                bg-red-500
                                text-white
                                px-6
                                py-3
                                rounded
                                hover:bg-red-600
                                w-full 
                                sm:w-auto 
                                text-center
                              "
                            >
                          前往結帳
                    </Link>
                </div>
          </div>
    </div>
  )
}

export default CartPage