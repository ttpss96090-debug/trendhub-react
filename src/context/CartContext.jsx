import { createContext, useContext, useState , useEffect} from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems")
    return savedCart ? JSON.parse(savedCart) :[]
  } )

  useEffect(() => {
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
  } , [cartItems])


  const addToCart = (product) => {
    setCartItems([...cartItems, product])
    console.log("加入購物車：", product)
  }
  const removeFromCart = (id) => {
  setCartItems(
    cartItems.filter(item => item.id !== id)
  )
}


  return (
    <CartContext.Provider value={{ cartItems, addToCart,removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}