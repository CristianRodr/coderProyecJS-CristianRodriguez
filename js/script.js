let ropa;
let operacion;

function seleccion() {
  alert('Seleccione marca de ropa');
  ropa = prompt('| Armani | Adidas | Guess | Nike |').toLowerCase();
  ingresoVentas(ropa);
}

seleccion();
ingresoVentas(ropa);

function ingresoVentas(ropa) {
  switch (ropa) {
    case 'armani':
      alert('Ingrese los valores de a, b y c de su producto a elegir');
      let colecionUno = prompt(
        '◾ A Camisa de Algodon ◾ B Pantalones Informales ◾ C Camisa Jersey'
      ).toLowerCase();
      if (colecionUno === 'a') {
        colecionUno = 40;
        calculador(colecionUno);
      } else if (colecionUno === 'b') {
        colecionUno = 50;
        calculador(colecionUno);
      } else if (colecionUno === 'c') {
        colecionUno = 60;
        calculador(colecionUno);
      } else {
        alert('Opcion Incorrecta');
      }
      break;
    case 'adidas':
      alert('Ingrese los valores de a, b y c de su producto a elegir');
      let colecionDos = prompt(
        '◾ A Playera Manchester ◾ B Hoodie Terrex ◾ C Shorts Deportivos'
      ).toLowerCase();
      if (colecionDos === 'a') {
        colecionDos = 60;
        calculador(colecionDos);
      } else if (colecionDos === 'b') {
        colecionDos = 30;
        calculador(colecionDos);
      } else if (colecionDos === 'c') {
        colecionDos = 10;
      } else {
        alert('Opcion Incorrecta');
      }
      break;
    case 'guess':
      alert('Ingrese los valores de a, b y c de su producto a elegir');
      let colecionTres = prompt(
        '◾ A Playera Manga ◾ B Bata Kimono ◾ C Jeans Pasarela'
      ).toLowerCase();
      if (colecionTres === 'a') {
        colecionTres = 90;
        calculador(colecionTres);
      } else if (colecionTres === 'b') {
        colecionTres = 55;
        calculador(colecionTres);
      } else if (colecionTres === 'c') {
        colecionTres = 61;
        calculador(colecionTres);
      } else {
        alert('Opcion Incorrecta');
      }
      break;
    case 'nike':
      alert('Ingrese los valores de a, b y c de su producto a elegir');
      let colecionCuatro = prompt(
          '◾ A Playera Manga ◾ B Bata Kimono ◾ C Jeans Pasarela'
      ).toLowerCase();
      if (colecionCuatro === 'a') {
        colecionCuatro = 22;
        calculador(colecionCuatro);
      } else if (colecionCuatro === 'b') {
        colecionCuatro = 30;
        calculador(colecionCuatro);
      } else if (colecionCuatro === 'c') {
        colecionCuatro = 53;
        calculador(colecionCuatro);
      } else {
        alert('Opcion Incorrecta');
      }
      break;
    default:
      console.log('Marca no viable');
  }
}

function calculador(colecion) {
  alert('precio prenda: ' + colecion);
  const confirmacion = confirm('Desea comprar la prenda');
  if (confirmacion === true) {
    alert('Gracias por la compra');
  }
  agregarVenta(colecion);
}

function agregarVenta(venta) {
  //console.log(venta);
  suma(venta);
  const confirmacion = confirm('Desea comprar mas productos');
  if (confirmacion === true) {
    seleccion();
  } else  {
    alert('Gracias 👌');
  }
}

function suma(venta) {

}




ingresoVentas(ropa);
