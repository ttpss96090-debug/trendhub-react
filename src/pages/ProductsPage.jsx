import ProductCard from "../components/common/ProductCard"
import { useEffect, useState } from "react"
import axios from "axios"
import { useSearch } from "../context/SearchContext"

const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortType, setSortType] = useState("")
  const { searchKeyword } = useSearch()
  const filteredProducts = products.filter((product) => {
  const matchSearch = product.title
    .toLowerCase()
    .includes(searchKeyword.toLowerCase())

  const matchCategory =
    selectedCategory === "all" ||
    product.category === selectedCategory

  return matchSearch && matchCategory
})

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === "price-low-high") {
    return a.price - b.price
  }

  if (sortType === "price-high-low") {
    return b.price - a.price
  }

  return 0
})

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products")
        setProducts(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <section className="bg-gray-100 pt-36 md:pt-28 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white border-b-4 border-red-500 mb-4">
          <h2 className="text-red-500 text-xl font-bold text-center py-4">
            每日新發現
          </h2>
        </div>
    <div className="flex gap-3 mb-4 overflow-x-auto pb-2">
   
   <button onClick={() => setSelectedCategory("all")}
        className={
        selectedCategory === "all"
        ? "px-2 py-3 bg-red-500 text-white border"
        : "px-2 py-3 bg-white border whitespace-nowrap"
        }
    >
        全部
      </button>

    <button onClick={() => setSelectedCategory("electronics")} className="px-2 py-3 bg-white border whitespace-nowrap">
      電子產品
      </button>

    <button onClick={() => setSelectedCategory("jewelery")} className="px-2 py-3 bg-white border whitespace-nowrap">
      珠寶
      </button>

    <button onClick={() => setSelectedCategory("men's clothing")} className="px-2 py-3 bg-white border whitespace-nowrap">
      男裝
      </button>

    <button onClick={() => setSelectedCategory("women's clothing")} className="px-2 py-3  bg-white border whitespace-nowrap">
      女裝
      </button>
</div>

  <div className="mb-4 flex justify-end">
    <select
      value={sortType}
      onChange={(e) => setSortType(e.target.value)}
      className="w-full sm:w-auto border px-4 py-2 bg-white"
    >
      <option value="">預設排序</option>
      <option value="price-low-high">價格低到高</option>
      <option value="price-high-low">價格高到低</option>
    </select>
  </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {sortedProducts.length === 0 ? (
          <p className="col-span-full text-center py-10 text-gray-500">
          找不到相關商品
          </p>
) : 
          
          (sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
       ) }
        </div>
      </div>
    </section>
  )
}

export default ProductsPage