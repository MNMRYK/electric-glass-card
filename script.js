// 1. Inicializar el fondo de red (Net)
VANTA.NET({
  el: "#animated-bg", // El ID de tu div
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x3fb8af,     // Color de las líneas
  backgroundColor: 0x111111 // Color del fondo
})

// 2. SEGUNDO: La Línea de Tiempo (Timeline)
const tl = gsap.timeline();

tl.from(".titulo", { 
    duration: 1.5, 
    y: -50, 
    opacity: 0, 
    ease: "back.out(1.7)" 
})
.from("p", { 
    duration: 1, 
    opacity: 0, 
    y: 20 
}, "-=0.5"); // Este "-=0.5" hace que empiece un poco antes de que termine el anterior

anime({
  targets: '.titulo',
  scale: [1, 1.1], // De tamaño normal a un poquito más grande
  duration: 1000,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

/* D. GLOWING CARD */

document.querySelectorAll('.glowing-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Posición X del ratón en la card
        
        // 1. Eliminamos el eje X (arriba/abajo)
        const rotateX = 0; 
        
        // 2. Limitamos la rotación solo a la derecha (eje Y)
        // Usamos Math.max para que el valor sea siempre positivo (0 a 15 grados)
        const rotateY = Math.max(0, (x / rect.width) * 16);
        
        // Aplicamos la rotación
        card.style.transition = 'none';
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        
    });

    // Resetear al salir el ratón
    card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 2s ease-out'; 
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    });
});