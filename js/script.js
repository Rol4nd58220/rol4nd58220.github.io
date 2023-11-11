document.addEventListener('DOMContentLoaded', function() {
    var loadingText = document.getElementById('loading-text');
    var launchButton = document.getElementById('launch-button');
    var percent = 50;

    var loadingInterval = setInterval(function() {
        percent += 1;
        loadingText.textContent = percent + '%';

        if (percent >= 100) {
            clearInterval(loadingInterval);
            loadingText.style.display = 'none';
            launchButton.style.display = 'block';
        }
    }, 50); // Adjust time for simulation of loading

    launchButton.addEventListener('click', function() {
        document.getElementById('loading-screen').style.display = 'none';
        // Initialize your 3D scene or other scripts here
    });
});