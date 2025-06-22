const hamburger = document.getElementById('hamburger');
const popup = document.getElementById('popup');
const price = document.getElementById('price');
const buttons = document.querySelectorAll('.vehicle-btn');
const dots = document.querySelectorAll('.dot');
const sections = document.querySelectorAll('.section');
const exteriorLink = document.getElementById('exterior-link');

let currentVehicle = 'sedan';

const bookingLinks = {
  sedan: "https://cal.com/silverline-detaling/exterior-detail-sedan-mid-suv",
  large: "https://cal.com/silverline-detaling/exterior-detail-sedan-mid-suv-copy",
  oversized: "https://cal.com/silverline-detaling/exterior-detail-sedan-mid-suv-copy-copy"
};

const prices = {
  sedan: "$50",
  large: "$70",
  oversized: "$90"
};

// Toggle hamburger menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  popup.classList.toggle('show');
});

// Scroll to Services
function scrollToServices() {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}

// Vehicle button select
function selectVehicle(type) {
  currentVehicle = type;

  // Update button styles
  buttons.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.vehicle-btn[onclick*="${type}"]`).classList.add('active');

  // Animate price
  price.classList.remove('animate');
  void price.offsetWidth; // trigger reflow
  price.textContent = prices[type];
  price.classList.add('animate');
}

// Booking button behavior
function openBooking() {
  window.open(bookingLinks[currentVehicle], '_blank');
}

// Scroll dot tracking
window.addEventListener('scroll', () => {
  let current = 0;
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - window.innerHeight / 2) {
      current = index;
    }
  });

  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === current) {
      dot.classList.add('active');
    }
  });
});