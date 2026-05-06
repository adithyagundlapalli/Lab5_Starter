// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const voiceSelect = document.getElementById("voice-select");
  const textarea = document.getElementById("text-to-speak");
  const button = document.querySelector("button");
  const faceImg = document.querySelector("#explore img");

  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    // Clear existing options (keep the placeholder)
    voiceSelect.innerHTML =
      '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  // Voices load asynchronously in most browsers
  populateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }

  button.addEventListener("click", function () {
    const text = textarea.value;
    if (!text || voiceSelect.value === "select") return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[voiceSelect.value];

    utterance.onstart = function () {
      faceImg.src = "assets/images/smiling-open.png";
      faceImg.alt = "Smiling face open";
    };

    utterance.onend = function () {
      faceImg.src = "assets/images/smiling.png";
      faceImg.alt = "Smiling face";
    };

    synth.speak(utterance);
  });
}
