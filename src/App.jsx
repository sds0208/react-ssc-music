import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Hero from './components/Hero'

// const router = createBrowserRouter();

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Home />
    </>
  )
}

export default App