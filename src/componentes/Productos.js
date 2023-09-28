import '../style-sheets/Productos.css';

function Productos ({ url, nombre, precio }) {
  return (
    <div className='item flex-item'>
      <img className={`${nombre}-img`} src={require(`../media/${url}.png`)}/>
      <h2>{nombre}</h2>
      <p>Precio: ${precio}</p>
      <input type='submit' name='data' value='COMPRAR' className='send-button'/>
    </div>
  );
}

export default Productos;