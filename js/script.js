document.addEventListener('DOMContentLoaded', function() {
    var loadingText = document.getElementById('loading-text');
    var percent = 0;

    var loadingInterval = setInterval(function() {
        percent += 1;
        loadingText.textContent = percent + '%';

        if (percent >= 100) {
            clearInterval(loadingInterval);
            loadingText.textContent = 'Launch';
            setTimeout(function() {
                document.getElementById('loading-screen').style.display = 'none';
                // Initialize your 3D scene or other scripts here
            }, 1000); // 1 second delay for 'Launch' message
        }
    }, 50); // Adjust time for simulation of loading
});