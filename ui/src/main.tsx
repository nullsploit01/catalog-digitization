import { AxiosInterceptor } from 'src/clients/axios'
import CustomBackdrop from 'src/components/atoms/backdrop'
import 'src/index.css'
import { NotificationContextProvider } from 'src/providers/notification-provider'
import { ProductContextProvider } from 'src/providers/product-provider/index.tsx'

import { Fragment, lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'

const App = lazy(() => import('src/App.tsx'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Fragment>
    <Suspense fallback={<CustomBackdrop open />}>
      <NotificationContextProvider>
        <AxiosInterceptor>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </AxiosInterceptor>
      </NotificationContextProvider>
    </Suspense>
  </Fragment>
)
