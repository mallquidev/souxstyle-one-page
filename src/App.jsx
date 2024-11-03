import Header from '../src/layouts/header/Header'
import Nosotros from '../src/layouts/section/Nosotros'
import Categoria from '../src/layouts/section/Categoria'
import Producto from './layouts/section/Producto'
function App() {
  return (
    <div>
      <Header/>
      <Nosotros/>
      <Categoria/>
      <Producto/>
    </div>
  )
}

export default App