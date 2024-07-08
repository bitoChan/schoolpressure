document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('#myButton');
    const hintImage = document.querySelector('#hint');
    let isRecording = false;
    let recognizer;
  
    button.addEventListener('click', function () {
      if (isRecording) {
        stopRecognition();
        button.style.backgroundColor = '';
        button.textContent = '錄音';
      } else {
        startRecognition();
        button.style.backgroundColor = 'red';
        button.textContent = '停止錄音';
      }
      isRecording = !isRecording;
    });
  
    function startRecognition() {
      const speechConfig = SpeechSDK.SpeechConfig.fromSubscription('988faed0edd24ceaa51e1fc2b706cae0', 'japanwest');
      speechConfig.speechRecognitionLanguage = "zh-HK";
  
      const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
      recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);
  
      recognizer.startContinuousRecognitionAsync();
  
      recognizer.recognized = (s, e) => {
        if (e.result.reason === SpeechSDK.ResultReason.RecognizedSpeech) {
          const transcript = e.result.text;
          console.log(transcript);
  
          if (transcript.includes('唔開心')) {
            hintImage.setAttribute('src', '3d-model/hints/hint2.png');
          } else if (transcript.includes('秘密')) {
            hintImage.setAttribute('src', '3d-model/hints/hint3.png');
            playAudio('sound/voice1.wav');
          } else if (transcript.includes('放心')) {
            hintImage.setAttribute('src', '3d-model/hints/hint4.png');
          } else if (transcript.includes('感受')) {
            hintImage.setAttribute('src', '3d-model/hints/hint5.png');
            playAudio('sound/voice2.wav');
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
  
    function stopRecognition() {
      if (recognizer) {
        recognizer.stopContinuousRecognitionAsync();
        recognizer = null;
      }
    }
  
    function playAudio(fileName) {
      const audio = new Audio(fileName);
      audio.play();
    }
  });
  