document.addEventListener('DOMContentLoaded', function () {
  var audio = new Audio('sound/crying.mp3');
  var q1Container = document.querySelector('.q1-container');
  var clickCount = 0;

  q1Container.addEventListener('click', function () {
    clickCount++;
    if (clickCount === 1) {
      audio.play();
      q1Container.style.backgroundImage = 'url("image/role.png")';
    } else if (clickCount === 2) {
      q1Container.style.display = 'none';
      loadAFRameScripts();
    }
  });

  function loadAFRameScripts() {
    var aframeScript = document.createElement('script');
    aframeScript.src = 'https://aframe.io/releases/1.0.4/aframe.min.js';
    aframeScript.onload = function() {
      var eventSetScript = document.createElement('script');
      eventSetScript.src = 'https://unpkg.com/aframe-event-set-component/dist/aframe-event-set-component.min.js';
      eventSetScript.onload = showScene;
      document.head.appendChild(eventSetScript);
    };
    document.head.appendChild(aframeScript);
  }

  function showScene() {
    var scene = document.querySelector('a-scene');
    if (scene) {
      scene.setAttribute('visible', 'true');
    }
  }
});
