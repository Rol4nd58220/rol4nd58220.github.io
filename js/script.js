// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    var loadingText = document.getElementById('loading-text');
    var launchButton = document.getElementById('launch-button');
    var loadingSteps = [50, 75, 93, 100];
    var currentStep = 0;
    var currentPercent = 0;

    var updateLoadingText = function(percent) {
        loadingText.textContent = percent + '% Loading...';
    };

    var loadingInterval = setInterval(function() {
        if (currentPercent < loadingSteps[currentStep]) {
            currentPercent++;
            updateLoadingText(currentPercent);
        } else {
            if (currentStep < loadingSteps.length - 1) {
                currentStep++;
            } else {
                clearInterval(loadingInterval);
                loadingText.style.display = 'none';
                launchButton.style.display = 'block';
            }
        }
    }, 50); // Adjust for a smoother progression

    launchButton.addEventListener('click', function() {
        document.getElementById('loading-screen').style.display = 'none';
        // Initialize your 3D scene or other scripts here
    });
});
