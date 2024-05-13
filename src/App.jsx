import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
// import { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import SamplesPage from './pages/SamplesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <MainLayout /> }>
      <Route index element={ <HomePage /> } />
      <Route path='/samples' element={ <SamplesPage /> } />
      <Route path='/about' element={ <AboutPage /> } />
      <Route path='/contact' element={ <ContactPage /> } />
      <Route path='*' element={ <NotFoundPage /> } />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App