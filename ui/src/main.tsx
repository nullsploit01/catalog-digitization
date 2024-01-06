import App from 'src/App.tsx'
import 'src/index.css'
import { ProductContextProvider } from 'src/providers/product-provider/index.tsx'

import { Fragment } from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Fragment>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </Fragment>
)
