import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import TradionalwayApp from './TradtionalWay/App'
import BootstapApp from './Bootstap/App'
import { ThemeProvider } from './TradtionalWay/ThemeProvider'
import App from './MaterailUI/App'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ThemeProvider>  --- tradional way*/}
      {/* <BootstapApp --- bootstrap way /> */}
    {/* <TradionalwayApp  --- tradional way /> */}
    {/* </ThemeProvider>  --- tradional way */}


    <App />
  </StrictMode>,
)
