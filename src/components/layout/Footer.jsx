import Container from "../common/Container"
import {
  FaFacebook,
  FaInstagram,
  FaLine,
  FaLinkedin,
  FaCreditCard,
  FaTruck,
  FaQrcode,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div>
            <h3 className="font-bold text-gray-900 mb-4 tracking-wide">客服中心</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-red-600 cursor-pointer transition-colors">幫助中心</li>
              <li className="hover:text-red-600 cursor-pointer transition-colors">付款方式</li>
              <li className="hover:text-red-600 cursor-pointer transition-colors">退貨退款</li>
              <li className="hover:text-red-600 cursor-pointer transition-colors">物流方式</li>
              <li className="hover:text-red-600 cursor-pointer transition-colors">聯絡客服</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4 tracking-wide">關於我們</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-red-600 cursor-pointer transition-colors">關於 Fake Store</li>
              <li className="hover:text-red-600 cursor-pointer transition-colors">加入我們</li>
              <li className="hover:text-red-600 cursor-pointer transition-colors">隱私權政策</li>
              <li className="hover:text-red-600 cursor-pointer transition-colors">賣家中心</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4 tracking-wide">付款與物流</h3>
            <div className="flex flex-wrap gap-2 text-2xl">
              <FaCreditCard />
              <FaTruck />
              <FaCreditCard />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4 tracking-wide">關注我們</h3>
            <ul className="space-y-3 text-sm">
              <li className="
                flex items-center gap-2 hover:text-red-600 cursor-pointer">
                    <FaFacebook className="text-lg" />
                    Facebook
                </li>
              <li className="
                flex items-center gap-2 hover:text-red-600 cursor-pointer">
                    <FaInstagram className="text-lg" />
                    Instagram
                </li>
              <li className="
                flex items-center gap-2 hover:text-red-600 cursor-pointer">
                    <FaLine className="text-lg" />
                    Line
                </li>
              <li className="
                flex items-center gap-2 hover:text-red-600 cursor-pointer">
                    <FaLinkedin className="text-lg" />
                    Linkedin
                </li>
                </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4 tracking-wide">下載 Fake Store</h3>
            <div className="flex items-center gap-3">
              <div className="w-24 h-24 bg-white border flex items-center justify-center text-4xl">
                <FaQrcode />
              </div>

              <div className="space-y-2 text-xs">
                <div className="bg-white border px-3 py-2">App Store</div>
                <div className="bg-white border px-3 py-2">Google Play</div>
              </div>
            </div>
          </div>
        </div>

    <div className="mt-10 pt-6 border-t border-gray-300 text-sm text-gray-500">
    <p>© 2026 Fake Store. 版權所有。</p>
    <p className="mt-2">
    台灣｜新加坡｜日本｜韓國｜美國
    </p>
</div>
      </Container>
    </footer>
  )
}

export default Footer