import '../stylesheets/main.scss';

// PORTFOLIO FILTERING ----------------------------------------
const allProjects = document.getElementsByClassName('project');
window.onload = displayActiveProjects();

// Set up event listeners for filter buttons
const filterButtons = document.getElementsByClassName('filter');
Array.from(filterButtons).forEach( button => {
  let category = button.getAttribute('id');
  button.addEventListener('click', toggleFilter);
});

function displayActiveProjects() {
  let activeFilters = document.querySelectorAll('.filter.active');
  resetDisplay();
  Array.from(activeFilters).forEach( filter => {
    let category = filter.getAttribute('id');
    let activeProjects = document.querySelectorAll(`article.${category}`);
    Array.from(activeProjects).forEach( project => {
      project.style.display = 'flex';
    })
  })
}

function resetDisplay() {
  Array.from(allProjects).forEach( project => {
    project.style.display = 'none';
  });
}

function toggleFilter(){
  if (this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
      this.classList.add('active');
    }
  displayActiveProjects();
}
