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

/* D. GLOWING CARD - ACTUALIZADO PARA PC Y MÓVIL */
document.querySelectorAll('.glowing-card').forEach(card => {
    
    const handleMove = (e) => {
        // Detecta si es dedo o ratón
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const rect = card.getBoundingClientRect();
        const x = clientX - rect.left; 
        
        // Calculamos la rotación
        const rotateY = Math.max(0, (x / rect.width) * 16);
        
        card.style.transition = 'none';
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(${rotateY}deg)`;
    };

    const handleReset = () => {
        card.style.transition = 'transform 1s ease-out'; 
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    };

    // Eventos para PC
    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', handleReset);

    // Eventos para Móvil
    card.addEventListener('touchmove', (e) => {
        handleMove(e);
        if (e.cancelable) e.preventDefault(); 
    }, { passive: false });

    card.addEventListener('touchend', handleReset);
});