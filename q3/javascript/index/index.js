document.addEventListener('DOMContentLoaded', function () {
    var audio = new Audio('sound/Menubgm.mp3');
    var playButton = document.querySelector('.home-soundplayer');
    var isPlaying = false;
  
    document.querySelector('.home-button').addEventListener('click', function () {
      audio.play();
      this.style.display = 'none';
    });
  
    var button1 = document.querySelector('.home-button1');
    var button2 = document.querySelector('.home-button2');
    var button3 = document.querySelector('.home-button3');
  
    button1.addEventListener('mouseover', function () {
      button1.style.transform = 'scale(1.25)';
    });
    button1.addEventListener('mouseout', function () {
      button1.style.transform = 'scale(1)';
    });
    button1.addEventListener('click', function () {
      window.location.href = 'q1.html';
    });
  
    button2.addEventListener('mouseover', function () {
      button2.style.transform = 'scale(1.25)';
    });
    button2.addEventListener('mouseout', function () {
      button2.style.transform = 'scale(1)';
    });
    button2.addEventListener('click', function () {
      window.location.href = 'q2.html';
    });
  
    button3.addEventListener('mouseover', function () {
      button3.style.transform = 'scale(1.25)';
    });
    button3.addEventListener('mouseout', function () {
      button3.style.transform = 'scale(1)';
    });
    button3.addEventListener('click', function () {
      window.location.href = 'q3.html';
    });
  
    playButton.addEventListener('click', function () {
      if (isPlaying) {
        audio.play();
        playButton.src = 'media/menu/playbutton.png';
      } else {
        audio.pause();
        playButton.src = 'media/menu/mutebutton.png';
      }
      isPlaying = !isPlaying;
    });
  });
  