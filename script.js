// script.js

const seatMapContainer = document.getElementById("seatMapContainer");
const selectedSeatsList = document.getElementById("selectedSeats");
const bookButton = document.getElementById("bookButton");
const totalPriceDisplay = document.getElementById("totalPrice");
const scrollToTopButton = document.getElementById("scrollToTop");

document.getElementById("scrollToSeats").addEventListener("click", function () {
  document
    .getElementById("seatMapContainer")
    .scrollIntoView({ behavior: "smooth" });
});

// Show scroll-to-top button when user scrolls down
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Scroll to top when button is clicked
scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Create seat map
function createSeatMap(rows, cols) {
  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= cols; col++) {
      const seat = document.createElement("div");
      seat.classList.add("seat");
      seat.innerHTML = `<i class="fas fa-chair"></i> ${String.fromCharCode(
        64 + row
      )}${col}`;
      seatMapContainer.appendChild(seat);
    }
  }
}

// Initialize seat map
createSeatMap(8, 10);

// Seat selection
seatMapContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("seat")) {
    e.target.classList.toggle("selected");
    updateSelectedSeats();
  }
});

// Update selected seats and total price
function updateSelectedSeats() {
  const selectedSeats = document.querySelectorAll(".seat.selected");
  const totalPrice = selectedSeats.length * 10; // Assuming each seat costs $10
  selectedSeatsList.innerHTML = "";
  selectedSeats.forEach((seat) => {
    const li = document.createElement("li");
    li.textContent = seat.textContent;
    selectedSeatsList.appendChild(li);
  });
  totalPriceDisplay.textContent = `$${totalPrice}`;
}

// Book button click event
bookButton.addEventListener("click", () => {
  alert("Booking confirmed for selected seats!");
});
