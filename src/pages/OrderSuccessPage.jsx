import { Link } from "react-router-dom"


const OrderSuccessPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-10 text-center">
      <h1 className="text-3xl font-bold text-red-500 mb-4">
        訂單建立成功
      </h1>

      <p className="text-gray-600 mb-8">
        感謝您的購買，我們會盡快為您出貨。
      </p>

      <Link
        to="/"
        className="inline-block bg-red-500 text-white px-6 py-3 hover:bg-red-600"
      >
        返回首頁
      </Link>
    </div>
  )
}

export default OrderSuccessPage