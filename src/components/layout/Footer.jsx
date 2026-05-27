const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-8 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between">
          <div>
            <h2 className="text-3xl font-bold">Fake Store</h2>
            <p className="mt-4 text-gray-300">
              Your simple online store.
            </p>
          </div>

          <div className="space-y-2">
            <p>商品</p>
            <p>購物車</p>
            <p>聯絡我們</p>
          </div>
        </div>

        <p className="mt-8 pt-6 border-t border-gray-700 text-sm text-gray-300">
          © 2026 Fake Store
        </p>
      </div>
    </footer>
  )
}

export default Footer