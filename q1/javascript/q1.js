document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.q1-container');
    var clickCount = 0;

    container.addEventListener('click', function() {
        clickCount++;
        
        if (clickCount === 1) {
            container.style.backgroundImage = 'url("image/role.png")';
        } else if (clickCount === 2) {
            window.location.href = 'index.html';
        }
    });
});
