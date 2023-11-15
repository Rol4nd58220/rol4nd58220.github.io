// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    var loadingText = document.getElementById('loading-text');
    var launchButton = document.getElementById('launch-button');
    var loadingGif = document.querySelector('.loading-gif'); // Reference to the GIF
    var homeSection = document.getElementById('home-section'); // Reference to the home section
    var loadingSteps = [50, 75, 93, 100];
    var currentStepIndex = 0;

    var updateLoadingText = function(percent) {
        loadingText.textContent = percent + '% Loading...';
    };

    // Start with the first step (50%)
    updateLoadingText(loadingSteps[currentStepIndex]);

    var progressLoading = function() {
        if (currentStepIndex < loadingSteps.length - 1) {
            currentStepIndex++;
            updateLoadingText(loadingSteps[currentStepIndex]);
            setTimeout(progressLoading, 300); // Adjust timing as needed
        } else {
            // Handle the final step
            updateLoadingText(loadingSteps[currentStepIndex]);
            setTimeout(function() {
                loadingText.style.display = 'none';
                launchButton.style.display = 'block';
                loadingGif.style.display = 'block'; // Show the GIF with the button
            }, 500); // Adjust timing as needed
        }
    };

    // Progress to the next step after an initial delay
    setTimeout(progressLoading, 500);

    launchButton.addEventListener('click', function() {
        document.getElementById('loading-screen').style.display = 'none';
        homeSection.style.display = 'block'; // Show the home section
        // Initialize your 3D scene or other scripts here
    });
});