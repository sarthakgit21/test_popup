// Function to show a popup
function showPopup(message) {
  alert(message);
}

// Function to show a popup when the website is loaded
function onPageLoad() {
  showPopup("Welcome to the website!");
}

// Function to check if the user has scrolled to the bottom of the page
function checkScrollPosition() {
  // Get the total scrollable height
  // console.log("scrooled");
  const scrollableHeight = document.documentElement.scrollHeight - 10;
  // Get the current scroll position
  const currentScrollPosition = window.scrollY + window.innerHeight;
  console.log(scrollableHeight, currentScrollPosition);
  // If the current scroll position is at the bottom of the page, show the popup
  if (currentScrollPosition >= scrollableHeight) {
    showPopup("You have reached the end of the page!");
  }
}

// Add an event listener for the page load event
window.onload = onPageLoad;

// Add an event listener for the scroll event
window.addEventListener("scroll", checkScrollPosition);
