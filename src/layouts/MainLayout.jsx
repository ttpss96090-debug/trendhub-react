import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="pt-[70px]">
        {children}
      </main>

      <Footer />
    </>
  )
}

export default MainLayout