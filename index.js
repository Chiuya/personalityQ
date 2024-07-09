// Select all elements with the class '.fade-in'
let fadeIns = document.querySelectorAll('.fade-in');

// Create Intersection Observer for each element
fadeIns.forEach(element => {
  let observer = new IntersectionObserver((entries, observer) => {
    // Loop through entries
    entries.forEach((entry) => {
      // Check to see if element is visible
      if (entry.isIntersecting) {
        // Fade in element when it is visible
        entry.target.classList.add('in-view');
        // Stop observing the element
        observer.unobserve(entry.target);
      }
    });
  });

  // Observe the current element
  observer.observe(element);
});

function start() {
  theme = "forest";
  questionCounter = 0;
  document.location.href = "pages/questions.html"
}

//TODO: add alert that tells you copied link
function shareQuiz() {
  navigator.clipboard.writeText("https://chiuya.github.io/personalityQ/")
}

//TODO: idk
function shareResults() {
  document.location.href = "https://chiuya.github.io/projectsSite/"
}