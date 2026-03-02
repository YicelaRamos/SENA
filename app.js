const form = document.getElementById('contacto');
const submitBtn = document.getElementById('submitBtn');

function validate(){
  let ok = true;
  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const errNombre = document.getElementById('err-nombre');
  const errEmail = document.getElementById('err-email');

  errNombre.textContent = '';
  errEmail.textContent = '';
  nombre.classList.remove('is-error');
  email.classList.remove('is-error');

  if (!nombre.value.trim() || nombre.value.trim().length < 3) {
    errNombre.textContent = 'El nombre debe tener al menos 3 caracteres.';
    nombre.classList.add('is-error');
    ok = false;
  }
  /* Agregar  telefono y boton enviar */
 const telefono = document.getElementById("telefono");
const botonEnviar = document.getElementById("enviar");

telefono.addEventListener("input", () => {
  const valor = telefono.value;

  // solo  se ingresa numeros con digitos de mas o igual a 7 hasta 10
  const telefonoValido = /^[0-9]{7,10}$/.test(valor);

  if (!telefonoValido) {
    telefono.classList.add("is-error");
    botonEnviar.disabled = true;
  } else {
    telefono.classList.remove("is-error");
    botonEnviar.disabled = false;
  }
});

  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(email.value)) {
    errEmail.textContent = 'Introduce un email válido.';
    email.classList.add('is-error');
    ok = false;
  }
  submitBtn.disabled = !ok;
  return ok;
}

form.addEventListener('input', validate);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validate()) {
    alert('¡Formulario enviado!');
    form.reset();
    validate();
  }
});
