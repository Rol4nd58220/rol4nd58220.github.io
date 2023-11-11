// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    var loadingText = document.getElementById('loading-text');
    var launchButton = document.getElementById('launch-button');
    var loadingSteps = [50, 75, 93, 100];
    var currentStepIndex = 0;

    var updateLoadingText = function(percent) {
        loadingText.textContent = percent + '% Loading...';
    };

    var progressLoading = function() {
        var currentPercent = loadingSteps[currentStepIndex];

        updateLoadingText(currentPercent);

        if (currentStepIndex < loadingSteps.length - 1) {
            currentStepIndex++;
            // Delay between steps
            setTimeout(progressLoading, 1000); // 1 second between each step
        } else {
            loadingText.style.display = 'none';
            launchButton.style.display = 'block';
        }
    };

    // Start the loading process
    progressLoading();
    
    launchButton.addEventListener('click', function() {
        document.getElementById('loading-screen').style.display = 'none';
        // Initialize your 3D scene or other scripts here
    });
});
