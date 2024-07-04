document.addEventListener('DOMContentLoaded', function () {
  var audio = new Audio('sound/Gamebgm.mp3');
  var q1Container = document.querySelector('.q1-container');
  var isRuleShown = false;
  var clickCount = 0;

  q1Container.addEventListener('click', function () {
    clickCount++;
    if (clickCount === 1) {
      audio.play();
      q1Container.style.backgroundImage = 'url("image/role.png")';
    } else if (clickCount === 2) {
      q1Container.style.display = 'none';
      showScene();
    }
  });

  function showScene() {
    var scene = document.querySelector('a-scene');
    if (scene) {
      scene.setAttribute('visible', 'true');
    }
  }
});
