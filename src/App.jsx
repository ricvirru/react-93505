import './App.css'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/Navbar/Navbar'

const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi tienda" />
    </>
  )
}

export default App
