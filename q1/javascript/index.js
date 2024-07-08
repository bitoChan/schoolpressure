document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('#myButton');
    const hintImage = document.querySelector('#hint');
    
    // Add click event to the button
    button.addEventListener('click', function () {
      button.style.backgroundColor = 'red';
      startRecognition();
    });
  
    function startRecognition() {
      const speechConfig = SpeechSDK.SpeechConfig.fromSubscription('988faed0edd24ceaa51e1fc2b706cae0', 'japanwest');
      speechConfig.speechRecognitionLanguage = "zh-HK";
  
      const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
      const recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);
  
      recognizer.startContinuousRecognitionAsync();
  
      setTimeout(() => {
        recognizer.stopContinuousRecognitionAsync(
          () => { console.log("Recognition stopped."); },
          err => { console.error("Error stopping recognition: ", err); }
        );
      }, 3000);
  
      recognizer.recognized = (s, e) => {
        if (e.result.reason === SpeechSDK.ResultReason.RecognizedSpeech) {
          const transcript = e.result.text;
          console.log(transcript);
          
          if (transcript.includes('唔開心')) {
            hintImage.setAttribute('src', 'hint2.png');
          } else if (transcript.includes('秘密')) {
            hintImage.setAttribute('src', 'hint3.png');
            playAudio('voice1.wav');
          } else if (transcript.includes('放心')) {
            hintImage.setAttribute('src', 'hint4.png');
          } else if (transcript.includes('感受')) {
            hintImage.setAttribute('src', 'hint5.png');
            playAudio('voice2.wav');
          } else if (transcript.includes('不如')) {
            window.location.href = 'q2.html';
          }
        } else if (e.result.reason === SpeechSDK.ResultReason.NoMatch) {
          console.log("No speech recognized.");
        }
      };
  
      recognizer.canceled = (s, e) => {
        console.error(`Recognition canceled: ${e.reason}, ${e.errorDetails}`);
        recognizer.stopContinuousRecognitionAsync();
      };
  
      recognizer.sessionStopped = (s, e) => {
        console.log("Session stopped.");
        recognizer.stopContinuousRecognitionAsync();
      };
    }
  
    function playAudio(fileName) {
      const audio = new Audio(fileName);
      audio.play();
    }
  });
  