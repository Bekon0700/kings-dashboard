import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './components/layout/Main';
import Dashboard from './pages/dashboard_page/Dashboard';
import Products from './pages/product_page/Products'
import Customers from './pages/customer_page/Customers'
import Order from './pages/oder_page/Order'
import Sales from './pages/sales_page/Sales'
import ThemeProvider from './context/ThemeProvider';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Main />,
        children: [
          {
            path: '/',
            element: <Dashboard />
          },
          {
            path: 'dashboard',
            loader: async () => {
              return fetch('sales_data/products.json')
            },
            element: <Dashboard />
          },
          {
            path: 'products',
            loader: async () => {
              return fetch('sales_data/products.json')
            },
            element: <Products />
          },
          {
            path: 'customers',
            loader: async () => {
              return fetch('sales_data/customers.json')
            },
            element: <Customers />
          },
          {
            path: 'orders',
            loader: async () => {
              return fetch('sales_data/orders.json')
            },
            element: <Order />
          },
          {
            path: 'Sales',
            loader: async () => {
              return fetch('sales_data/sales.json')
            },
            element: <Sales />
          },
        ]
      }
    ]
  )
  return (
    <div>
      <ThemeProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
