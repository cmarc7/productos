import Productos from './componentes/Productos';
import './App.css';

function App() {
  return (
    <>
      <header>
        <div className='container'>
          <nav>
            <img src='Donut.png' className='navbar-brand___logo' />
            <a href='mailto:costantinimarcelo314@gmail.com'>Trabajá en MarcDonuts</a>
            <a href='index.html'>Productos</a>
            <a href='https://marcdonuts.netlify.app/marcdonuts'>Sobre Nosotros</a>
            <a href='https://marcdonuts.netlify.app/'>Inicio</a>
          </nav>
        </div>
      </header>
    
      <h1>Productos</h1>
      <div className='flex-container'>
        <Productos
          url='Oreo-Cake'
          nombre='Oreo'
          precio='420'/>
        <Productos
          url='representacion-3d-dona-chocolate_250435-1211'
          nombre='Chocolate'
          precio='600'/>
        <Productos
          url='giant-donut'
          nombre='Rosa'
          precio='450'/>
      </div>

      <form>
        <input type='hidden' name='data' className='key-data' />
      </form>
    </>
  );
}

export default App;
