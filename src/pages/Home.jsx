import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export const Home = () => {
  return (
    <>
    <Navbar />
    <main className="d-flex justify-content-center align-items-center vh-100">
        <h1>Home</h1>
    </main>
    <Footer />
    </>
  )
}
