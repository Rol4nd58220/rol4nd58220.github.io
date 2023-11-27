// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    var loadingText = document.getElementById('loading-text');
    var launchButton = document.getElementById('launch-button');
    var loadingGif = document.querySelector('.loading-gif');
    var homeSection = document.getElementById('home-section');
    var dynamicText = document.getElementById('dynamic-text'); // Ensure this ID is assigned to your <p> element
    var loadingSteps = [50, 75, 93, 100];
    var currentStepIndex = 0;
    var phrases = ["Developer", "3D Artist", "Frontend Developer", "Artist"];
    var phraseIndex = 0;
    var deleting = false;
    var textIndex = 0;

    var updateLoadingText = function(percent) {
        loadingText.textContent = percent + '% Loading...';
    };

    var progressLoading = function() {
        if (currentStepIndex < loadingSteps.length - 1) {
            currentStepIndex++;
            updateLoadingText(loadingSteps[currentStepIndex]);
            setTimeout(progressLoading, 300);
        } else {
            updateLoadingText(loadingSteps[currentStepIndex]);
            setTimeout(function() {
                loadingText.style.display = 'none';
                launchButton.style.display = 'block';
                loadingGif.style.display = 'block';
            }, 500);
        }
    };

    setTimeout(progressLoading, 500);

    function typewriterEffect() {
        var currentPhrase = phrases[phraseIndex];
        if (!deleting) {
            dynamicText.textContent = currentPhrase.slice(0, textIndex + 1);
            textIndex++;
            if (textIndex === currentPhrase.length) {
                setTimeout(() => { deleting = true; }, 1000);
            }
        } else {
            dynamicText.textContent = currentPhrase.slice(0, textIndex - 1);
            textIndex--;
            if (textIndex === 0) {
                deleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
        }
        setTimeout(typewriterEffect, deleting ? 100 : 150);
    }

    launchButton.addEventListener('click', function() {
        document.getElementById('loading-screen').style.display = 'none';
        homeSection.style.display = 'block';
        typewriterEffect(); // Start the typewriter effect
    });
});
