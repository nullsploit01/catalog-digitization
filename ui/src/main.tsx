import 'src/index.css'
import { ProductContextProvider } from 'src/providers/product-provider/index.tsx'

import { Fragment, lazy } from 'react'
import ReactDOM from 'react-dom/client'

const App = lazy(() => import('src/App.tsx'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Fragment>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </Fragment>
)
