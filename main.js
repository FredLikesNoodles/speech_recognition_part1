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
  speak();
};

Webcam.set({
  width: 300,
  height: 300,
  image_format: "png",
  png_quality: 90,
});
var webcam_output = document.getElementById("webcam_output");
Webcam.attach("#webcam_output");
function speak() {
  var s = webkit.speechSynthesis;
  var output = document.getElementById("output").value;
  var u = new SpeechSynthesisUtterance(output);
  s.speak(u);
}
