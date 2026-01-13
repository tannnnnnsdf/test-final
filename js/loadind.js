window.addEventListener('load', function() {
      setTimeout(function() {
        var loadingScreen = document.getElementById('loading-screen');
        var mainContent = document.getElementById('main-content');
        
        loadingScreen.classList.add('fade-out');
        
        setTimeout(function() {
          loadingScreen.style.display = 'none';
          mainContent.classList.add('show');
          document.body.style.overflow = 'auto';
        }, 1000);
      }, 3000); // Show loading for 3 seconds
    });
