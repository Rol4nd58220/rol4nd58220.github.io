// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    var loadingText = document.getElementById('loading-text');
    var launchButton = document.getElementById('launch-button');
    var loadingSteps = [50, 75, 93, 100];
    var currentStep = 0;
    var currentPercent = 0;

    var loadingInterval = setInterval(function() {
        // If the current percentage is less than the next major step
        if (currentPercent < loadingSteps[currentStep]) {
            currentPercent++;
            loadingText.textContent = currentPercent + '%';
        } else {
            // Move to the next major step
            if (currentStep < loadingSteps.length - 1) {
                currentStep++;
            } else {
                // Loading is complete
                clearInterval(loadingInterval);
                loadingText.style.display = 'none';
                launchButton.style.display = 'block';
            }
        }
    }, 30); // Adjust time for the illusion of loading

    launchButton.addEventListener('click', function() {
        document.getElementById('loading-screen').style.display = 'none';
        // Initialize your 3D scene or other scripts here
    });
});