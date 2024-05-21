// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// Ambil semua gambar di dalam galeri
const galleryImages = document.querySelectorAll('.gallery-images img');

// Tambahkan event listener untuk setiap gambar
galleryImages.forEach(img => {
  // Tambahkan event listener untuk event mouseenter (saat kursor masuk)
  img.addEventListener('mouseenter', () => {
    // Ubah properti transform untuk memperbesar gambar
    img.style.transform = 'scale(1.1)';
    // Tambahkan transisi agar animasi lebih halus
    img.style.transition = 'transform 0.3s ease-in-out';
  });

  // Tambahkan event listener untuk event mouseleave (saat kursor keluar)
  img.addEventListener('mouseleave', () => {
    // Kembalikan properti transform ke nilai awal
    img.style.transform = 'scale(1)';
  });
});


// Ambil elemen gambar
const floatingImage = document.getElementById('floating-image');

// Definisikan fungsi untuk mengatur animasi melayang
function floatAnimation() {
  // Atur posisi awal
  floatingImage.style.position = 'relative';
  let distance = 20; // Jarak melayang (dalam px)
  let duration = 2000; // Durasi animasi (dalam ms)
  
  // Buat interval untuk animasi
  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    let progress = timestamp - start;
    let translateY = Math.sin(progress / duration * Math.PI * 2) * distance;
    floatingImage.style.transform = `translateY(${translateY}px)`;
    if (progress < duration) {
      window.requestAnimationFrame(step);
    } else {
      start = null;
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}

// Panggil fungsi animasi saat halaman dimuat
window.addEventListener('load', floatAnimation);

function animateCircles() {
  const homeSection = document.getElementById('home'); // Assuming you have a div with id 'home' for the home section
  const canvas = document.createElement('canvas');
  homeSection.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  // Set canvas size to cover the home section
  canvas.width = homeSection.offsetWidth;
  canvas.height = homeSection.offsetHeight;

  // Position the canvas to cover the entire home section
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.zIndex = '-1'; // Ensure it's behind other content

  const circles = [];

  // Create circles
  for (let i = 0; i < 50; i++) {
    circles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 20 + 10,
      vx: Math.random() * 2 - 1,
      vy: Math.random() * 2 - 1,
      color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    circles.forEach(circle => {
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
      ctx.fillStyle = circle.color;
      ctx.fill();
      
      // Update circle position
      circle.x += circle.vx;
      circle.y += circle.vy;

      // Bounce off the edges of the canvas
      if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
        circle.vx *= -1;
      }
      if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
        circle.vy *= -1;
      }
    });

    requestAnimationFrame(draw);
  }

  draw();
}

animateCircles();
