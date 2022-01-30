var SpeechRecognition = window.webkitSpeechRecognition;
var recog = new SpeechRecognition();
function start() {
  document.getElementById("output").innerHTML = "";
  recog.start();
}
recog.onresult = function run(event) {
  console.log(event);
  var result = event.results[0][0].transcript;
  document.getElementById("output").innerHTML = result;
};
