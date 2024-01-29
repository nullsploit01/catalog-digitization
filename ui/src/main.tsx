import { AxiosInterceptor } from 'src/clients/axios'
import 'src/index.css'
import { NotificationContextProvider } from 'src/providers/notification-provider'
import { ProductContextProvider } from 'src/providers/product-provider/index.tsx'

import { Fragment, lazy } from 'react'
import ReactDOM from 'react-dom/client'

const App = lazy(() => import('src/App.tsx'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Fragment>
    <NotificationContextProvider>
      <AxiosInterceptor>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </AxiosInterceptor>
    </NotificationContextProvider>
  </Fragment>
)
