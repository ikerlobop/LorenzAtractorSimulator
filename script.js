const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Parámetros del modelo
const r = 28, s = 10, b = 8 / 3;
const dt = 0.01;
const numSteps = 10000;

// Valores iniciales centrados
let x = 1, y = 1, z = 1;

// Ajustes para la visualización

//Valor de Escala
const scale = 6;
const offsetX = canvas.width / 2;
const offsetY = canvas.height / 1.7;

// Iniciar la animación
let step = 0;
function animate() {
    if (step < numSteps) {
        
        // Cálculo siguiente posición usando método de Euler
        const dx = s * (y - x) * dt;
        const dy = (x * (r - z) - y) * dt;
        const dz = (x * y - b * z) * dt;
        x += dx;
        y += dy;
        z += dz;

        // Dibujar la partícula en la posición actual
        const px = offsetX + scale * x;
        const py = offsetY - scale * z;

        ctx.fillStyle = 'rgba(0, 150, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(px, py, 0.5, 0, Math.PI * 2);
        ctx.fill();

        step++;
        requestAnimationFrame(animate);
    }
}

ctx.clearRect(0, 0, canvas.width, canvas.height);
animate();