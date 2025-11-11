// Ejemplo de cómo consumir las preguntas
async function cargarPreguntas() {
  const token = localStorage.getItem("token");
  const res = await fetch("https://tu-backend.onrender.com/api/quiz", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const preguntas = await res.json();
  // :bombilla: Mostrar las preguntas en la consola
  console.log("Preguntas cargadas:", preguntas);
  // Aquí podrías renderizarlas dinámicamente en tu HTML
}