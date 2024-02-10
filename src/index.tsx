import { createRoot } from 'react-dom/client';
import { App } from '@/components/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const root = document.getElementById('root');

const container = createRoot(root);

const LazyAbout = lazy(
  () => import(/* webpackPrefetch: true */ './components/About')
);
const LazyShop = lazy(
  () => import(/* webpackPrefetch: true */ './components/Shop')
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: (
          <Suspense fallback={<div>loading about</div>}>
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: '/shop',
        element: (
          <Suspense fallback={<div>loading about</div>}>
            <LazyShop />
          </Suspense>
        ),
      },
    ],
  },
]);

container.render(<RouterProvider router={router} />);
