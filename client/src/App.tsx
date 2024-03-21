import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Footer } from './components/footer/index'
import { Header } from './components/header/index'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App
