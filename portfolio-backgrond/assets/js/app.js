/**
 * app.js
 * Microsoft Edge Year in Review - Intro Page
 * Parallax scene matching Microsoft's exact implementation
 */

document.addEventListener('DOMContentLoaded', () => {
    const floatingImages = document.querySelectorAll('.float-img');
    const startBtn = document.getElementById('start-btn');
    const introCard = document.querySelector('.intro-card');

    // Target and current mouse positions for smooth lerping
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        // Calculate offset from center of screen
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Offset from center (-1 to 1 range, then multiply for pixel movement)
        targetX = (e.clientX - centerX) / centerX;
        targetY = (e.clientY - centerY) / centerY;
    });

    // Animation loop with smooth interpolation
    function animateParallax() {
        // Smooth lerp factor (lower = smoother but slower)
        const lerpFactor = 0.05;

        // Interpolate towards target
        currentX += (targetX - currentX) * lerpFactor;
        currentY += (targetY - currentY) * lerpFactor;

        // Apply transform to each image with different depths
        floatingImages.forEach((img, index) => {
            // Create depth layers - outer images move more
            const layerDepth = getDepthForIndex(index);

            // Calculate movement (Microsoft uses about 20-40px max movement)
            const moveX = currentX * 35 * layerDepth;
            const moveY = currentY * 25 * layerDepth;

            // Apply smooth transform
            img.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        requestAnimationFrame(animateParallax);
    }

    // Assign depth based on image position (edge images move more)
    function getDepthForIndex(index) {
        // Depth values matching Microsoft's layered approach
        const depths = [0.6, 0.8, 0.9, 1.0, 0.85, 0.7, 0.95, 1.1, 0.75, 0.9];
        return depths[index] || 0.8;
    }

    // Start the animation loop
    animateParallax();

    // Reset on mouse leave
    document.addEventListener('mouseleave', () => {
        targetX = 0;
        targetY = 0;
    });

    // Start button click
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            console.log('Starting Year in Review...');
            // Add your navigation logic here
        });
    }

    console.log('Parallax intro loaded');
});
