const htmlElement = document.querySelector("html");

const toggleButton = document.querySelector("#toggle");
    
toggleButton.addEventListener("click", () =>{
	htmlElement.classList.toggle('dark');
})

const svgContainer = document.querySelector('#svg-container');
const moon = document.querySelector('#moon');
const sun = document.querySelector('#sun');

svgContainer.addEventListener('click', () => {
    moon.classList.toggle('hidden');
    sun.classList.toggle('hidden');
});