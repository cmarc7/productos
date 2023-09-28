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
            <a>Sobre Nosotros</a>
            <a>Inicio</a>
          </nav>
        </div>
      </header>
    
      <h1>Productos</h1>
      <div className='flex-container'>

      </div>

      <form>
        <input type='hidden' name='data' className='key-data' />
      </form>
    </>
  );
}

export default App;
