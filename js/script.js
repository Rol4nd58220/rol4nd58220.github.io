document.addEventListener('DOMContentLoaded', function() {
    var loadingText = document.getElementById('loading-text');
    var launchButton = document.getElementById('launch-button');
    var loadingSteps = [50, 75, 93, 100]; // Loading steps
    var currentStep = 0;

    var loadingInterval = setInterval(function() {
        if (currentStep < loadingSteps.length) {
            loadingText.textContent = loadingSteps[currentStep] + '%';
            currentStep++;
        } else {
            clearInterval(loadingInterval);
            loadingText.style.display = 'none';
            launchButton.style.display = 'block';
        }
    }, 1000); // Adjust time for each step

    launchButton.addEventListener('click', function() {
        document.getElementById('loading-screen').style.display = 'none';
        // Initialize your 3D scene or other scripts here
    });
});