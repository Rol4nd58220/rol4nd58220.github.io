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

    var progressLoading = function() {
        currentPercent++;
        updateLoadingText(currentPercent);

        if (currentPercent === loadingSteps[currentStep]) {
            if (currentStep < loadingSteps.length - 1) {
                currentStep++;
                setTimeout(progressLoading, 1000); // Pause for 1 second at key percentages
            } else {
                clearInterval(loadingInterval);
                loadingText.style.display = 'none';
                launchButton.style.display = 'block';
            }
        } else {
            setTimeout(progressLoading, 50); // Continue loading
        }
    };

    // Start the loading process
    progressLoading();
    
    launchButton.addEventListener('click', function() {
        document.getElementById('loading-screen').style.display = 'none';
        // Initialize your 3D scene or other scripts here
    });
});
