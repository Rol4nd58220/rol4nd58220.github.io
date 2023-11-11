// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    var loadingText = document.getElementById('loading-text');
    var launchButton = document.getElementById('launch-button');
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
            setTimeout(progressLoading, 1000); // 1 second between each step
        } else {
            // Handle the final step
            updateLoadingText(loadingSteps[currentStepIndex]);
            setTimeout(function() {
                loadingText.style.display = 'none';
                launchButton.style.display = 'block';
            }, 1000); // Wait for a moment before showing the button
        }
    };

    // Progress to the next step after an initial delay
    setTimeout(progressLoading, 1000);

    launchButton.addEventListener('click', function() {
        document.getElementById('loading-screen').style.display = 'none';
        // Initialize your 3D scene or other scripts here
    });
});
