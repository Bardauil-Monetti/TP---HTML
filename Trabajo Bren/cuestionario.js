// Respuestas correctas
const respuestasCorrectas = {
  q1: "c",  q2: "d",  q3: "b",  q4: "b",  q5: "d",
  q6: "d",  q7: "b",  q8: "c",  q9: "a",  q10: "c",
  q11: "c", q12: "a", q13: "c", q14: "d", q15: "c",
  q16: "a", q17: "d", q18: "b", q19: "b", q20: "c"
};

// Guardar respuestas del usuario
const respuestasUsuario = {};

// Alertas al seleccionar
for (let i = 1; i <= 20; i++) {
  const nombre = "q" + i;
  document.querySelectorAll(`input[name="${nombre}"]`).forEach(input => {
    input.addEventListener('change', function () {
      if (this.value === respuestasCorrectas[nombre]) {
        respuestasUsuario[nombre] = true;
        alert(`✅ Pregunta ${i}: ¡Correcto!`);
      } else {
        respuestasUsuario[nombre] = false;
        alert(`❌ Pregunta ${i}: Incorrecto.`);
      }
    });
  });
}

// Validar y corregir al enviar
document.getElementById('form-cuestionario').addEventListener('submit', function(event) {
  event.preventDefault();

  const preguntasSinResponder = [];

  for (let i = 1; i <= 20; i++) {
    const nombre = "q" + i;
    const seleccionada = document.querySelector(`input[name="${nombre}"]:checked`);
    if (!seleccionada) {
      preguntasSinResponder.push(i);
    }
  }

  if (preguntasSinResponder.length > 0) {
    alert(`⚠ Te faltan ${preguntasSinResponder.length} pregunta(s) por responder: ${preguntasSinResponder.join(", ")}`);
    return;
  }

  const puntaje = Object.values(respuestasUsuario).filter(v => v === true).length;
  alert(`🎉 Tu puntaje final es: ${puntaje} de 20`);
  const resultado = document.getElementById('resultado');
  if (resultado) {
    resultado.textContent = `🎉 Tu puntaje final es: ${puntaje} de 20`;
  }
});