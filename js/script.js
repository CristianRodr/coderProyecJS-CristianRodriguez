let ropa;
let operacion;
let contador = 0;

function seleccion() {
  alert('Seleccione y escribe marca de ropa a comprar ✍️(◔◡◔)');
  ropa = prompt('|⌜ Armani ⌟|⌜ Adidas ⌟|⌜ Guess ⌟|⌜ Nike ⌟|').toLowerCase();
  ingresoVentas(ropa);
}

seleccion();
ingresoVentas(ropa);

function ingresoVentas(ropa) {
  switch (ropa) {
    case 'armani':
      alert(
        '( •̀ .̫ •́ )✧ Escriba los valores de 👉 a, 👉 b 👉 c → de su producto a elegir'
      );
      let colecionUno = prompt(
        '◢◤ A. Camisa de Algodon ◢◤ B. Pantalones Informales ◢◤ C. Camisa Jersey ◢◤'
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
      alert(
        '( •̀ .̫ •́ )✧ Escriba los valores de 👉 a, 👉 b 👉 c → de su producto a elegir'
      );
      let colecionDos = prompt(
        '◢◤ A. Playera Manchester ◢◤ B. Hoodie Terrex ◢◤ C. Shorts Deportivos ◢◤'
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
      alert(
        '( •̀ .̫ •́ )✧ Escriba los valores 👉 a, 👉 b 👉 c → de su producto a elegir'
      );
      let colecionTres = prompt(
        '◢◤ A. Playera Manga ◢◤ B. Bata Kimono ◢◤ C. Jeans ◢◤'
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
      alert(
        '( •̀ .̫ •́ )✧ Escriba los valores de 👉 a, 👉 b 👉 c → de su producto a elegir'
      );
      let colecionCuatro = prompt(
        '◤ A. Playera Manga ◢◤ B. Bata Kimono ◢◤ C. Jeans Pasarela ◢'
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
  alert('precio prenda 💲 ' + colecion);
  const confirmacion = confirm('Desea comprar la prenda 🤤');
  if (confirmacion === true) {
    alert('Gracias por la compra (￣y▽￣)╭ Ohohoho.....');
  }
  agregarVenta(colecion);
}

function agregarVenta(venta) {
  contador += venta;
  suma(contador);
  const confirmacion = confirm('Desea comprar mas productos ヾ(⌐■_■)ノ♪');
  if (confirmacion === true) {
    seleccion();
  } else if (confirmacion === false) {
    alert('Gracias ヾ(￣▽￣) Bye~Bye~');
    Esc;
  }
}

function suma(venta) {
  alert('Total en canasta 💲 ' + venta);
}

ingresoVentas(ropa);
