'use strict';

const encuesta = {
  pregunta: '¿Cuál es su marca de ropa favorita?',
  opciones: [
    '0: otras',
    '1: Mango',
    '2: Zara',
    '3: Levis',
    '4: Tommy Hilfiger',
  ],

  respuestas: new Array(5).fill(0),
  //obtener respuesta
  registrarNuevaRespuesta() {
    const registrar = Number(
      prompt(`❤ ${this.pregunta}\n\n${this.opciones.join('\n')}
        \n(Escriba el numero de opcion)`)
    );

    typeof registrar === `number` &&
      registrar < this.respuestas.length &&
      this.respuestas[registrar]++;

    return this.respuestas;
  },
};

const captureOn = function () {
  const confirmacion = confirm(
    `🤖 Encuesta de tu ropa favorita\n\n${encuesta.opciones.join(
      '\n'
    )}\n\n(Participas) 📝`
  );

  if (confirmacion === true) {
    const memory = encuesta.registrarNuevaRespuesta();
    const a = [];
    encuesta.opciones.map((element, index, array) => {
      const recibirConteo = `${element.padEnd(30, ' -')} ${memory[index]}`;
      a.push(recibirConteo);
    });
    alert(`📊 Conteo de votos:\n\n${a.join('\n')}`);
    console.log(a);
    llamada();
  } else if (confirmacion === false) {
    alert('Gracias ヾ(￣▽￣) Bye~Bye~');
    Esc;
  }
};

const llamada = function () {
  captureOn();
  const memory = encuesta.registrarNuevaRespuesta();
  console.log(memory);
};

captureOn();
