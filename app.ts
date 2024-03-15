
// Import the styles.css file
import './styles.css';

// Function to display a loading page
function showLoadingPage() {
    // Code to display the loading page graphic
    const loadingGraphic = document.createElement('div');
    loadingGraphic.innerText = 'Click to continue';
    loadingGraphic.style.width = '200px';
    loadingGraphic.style.height = '200px';
    loadingGraphic.style.backgroundColor = 'gray';
    loadingGraphic.style.color = 'white';
    loadingGraphic.style.display = 'flex';
    loadingGraphic.style.justifyContent = 'center';
    loadingGraphic.style.alignItems = 'center';
    loadingGraphic.style.cursor = 'pointer';
    document.body.appendChild(loadingGraphic);

    // Event listener to handle click event
    loadingGraphic.addEventListener('click', () => {
        // Code to show the new state for the page
        console.log('New state for the page');
        // Remove the loading graphic from the page
        loadingGraphic.remove();
    });
}

// Call the function to show the loading page
showLoadingPage();

// Your code goes here
console.log('Hello, world!');
