import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CitiesProvider } from './CONTEXTS/CitiesContext';
import { AuthProvider } from './CONTEXTS/FakeAuthContext';
import ProtectedRoute from './PAGES/ProtectedRoute';
import { lazy, Suspense } from 'react';

import CityList from './COMPONENTS/CityList';
import CountryList from './COMPONENTS/CountryList';
import City from './COMPONENTS/City';
import Form from './COMPONENTS/Form';
import SpinnerFullPage from './COMPONENTS/SpinnerFullPage';

const Homepage = lazy(() => import('./PAGES/Homepage'));
const Product = lazy(() => import('./PAGES/Product'));
const Pricing = lazy(() => import('./PAGES/Pricing'));
const PageNotFound = lazy(() => import('./PAGES/PageNotFound'));
const AppLayout = lazy(() => import('./PAGES/AppLayout'));
const Login = lazy(() => import('./PAGES/Login'));

function App() {
  return (
    <div>
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                {/* Default page  */}
                <Route index element={<Homepage />} />
                <Route path='product' element={<Product />} />
                <Route path='pricing' element={<Pricing />} />
                <Route path='login' element={<Login />} />
                <Route
                  path='app'
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  {/* Default */}
                  <Route index element={<Navigate replace to='cities' />} />
                  <Route path='cities' element={<CityList />} />
                  <Route path='cities/:id' element={<City />} />

                  <Route path='countries' element={<CountryList />} />
                  <Route path='form' element={<Form />} />
                </Route>
                <Route path='*' element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
