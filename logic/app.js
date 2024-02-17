const btn = document.querySelector(".input");
const content = document.querySelector(".content");

function speak(text) {
  const text_speak = new SpeechSynthesisUtterance(text);

  text_speak.rate = 1;
  text_speak.volume = 100;
  text_speak.pitch = 1;

  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  var day = new Date();
  var hour = day.getHours();

  if (hour >= 0 && hour < 12) {
    speak("Good Morning Sir...");
  } else if (hour >= 12 && hour < 17) {
    speak("Good Afternoon Sir...");
  } else if (hour >= 17 && hour < 19) {
    speak("Good Evenining Sir...");
  } else {
    speak("Good night Sir");
  }
}

window.addEventListener("load", () => {
  speak("Initializing JARVIS sir..");
  speak("Checking your system sir...");
  speak("Please wait till I connected to your system sir...");
  speak("I am online now sir...");
  wishMe();
  speak("I'm your Virtual Assistant. How may I help you sir?");
});

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  const currentIndex = event.resultIndex;
  const transcript = event.results[currentIndex][0].transcript;
  content.textContent = transcript;
  takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  content.textContent = "Listening....";
  recognition.start();
});

function takeCommand(message) {
  if (
    message.includes("hey jarvis") ||
    message.includes("hello jarvis") ||
    message.includes("hi jarvis") ||
    message.includes("hola jarvis")
  ) {
    speak("Hello Sir, How May I Help You?");
  } else if (message.includes("how are you")) {
    speak("I am good sir. How about you sir?");
  } else if (
    message.includes("open google") ||
    message.includes("google open") ||
    message.includes("google")
  ) {
    window.open("https://google.com", "_blank");
    speak("Opening Google sir...");
  } else if (
    message.includes("open youtube") ||
    message.includes("youtube open") ||
    message.includes("youtube")
  ) {
    window.open("https://youtube.com", "_blank");
    speak("Opening Youtube sir...");
  } else if (
    message.includes("open facebook") ||
    message.includes("facebook open") ||
    message.includes("facebook")
  ) {
    window.open("https://facebook.com", "_blank");
    speak("Opening Facebook sir...");
  } else if (
    message.includes("open gmail") ||
    message.includes("gmail open") ||
    message.includes("gmail")
  ) {
    window.open("https://www.gmail.com", "_blank");
    speak("Opening Gmail sir....");
  } else if (
    message.includes("what is") ||
    message.includes("who is") ||
    message.includes("what are") ||
    message.includes("why is")
  ) {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText =
      "This is what i found on internet regarding " + message + "sir";
    speak(finalText);
  } else if (message.includes("wikipedia")) {
    window.open(
      `https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`,
      "_blank"
    );
    const finalText =
      "This is what i found on wikipedia regarding " + message + "sir";
    speak(finalText);
  } else if (message.includes("time")) {
    const time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    const finalText = time;
    speak(finalText + "sir");
  } else if (message.includes("date")) {
    const date = new Date().toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const finalText = date;
    speak(finalText + "sir");
  } else if (
    message.includes("open calculator") ||
    message.includes("calculator open") ||
    message.includes("Calculator")
  ) {
    window.open("Calculator:///");
    const finalText = "Opening Calculator sir";
    speak(finalText);
  } else if (
    message.includes("shutdown yourself") ||
    message.includes("please shut down yourself")
  ) {
    const finalText = "Goodbye Sir. Have a nice day sir";
    speak(finalText);
  } else if (message.includes("hd hub")) {
    window.open("https://hdhub4u.re/", "_blank");
    const finalText = "Opening Hd hub sir...";
    speak(finalText);
  } else if (message.includes("github")) {
    window.open("https://www.github.com", "_blank");
    const finalText = "Opening Github sir...";
    speak(finalText);
  } else if (message.includes("profile")) {
    window.open("https://github.com/prabalbhandary", "_blank");
    const finalText = "Opening Your GitHub Profile sir...";
    speak(finalText);
  } else if (message.includes("repo")) {
    window.open("https://github.com/prabalbhandary/blog", "_blank");
    const finalText =
      "Opening your blog repository on your git hub profile sir...";
    speak(finalText);
  } else if (message.includes("cricket today")) {
    const finalText = "Nepal won by nine wickets against the Netherlands sir";
    speak(finalText);
  } else if (
    message.includes("open linkedin") ||
    message.includes("linkedin open") ||
    message.includes("linkedin")
  ) {
    window.open("https://www.linkedin.com/", "_blank");
    const finalText = "Opening Linkedin sir...";
    speak(finalText);
  } else if (message.includes("i am fine jarvis")) {
    const finalText = "That's Great to hear sir";
    speak(finalText);
  } else if (
    message.includes("how can you help me jarvis") ||
    message.includes("how can you help")
  ) {
    const finalText = "i can help you with your system sir.....";
    speak(finalText);
  } else if (
    message.includes("open chess") ||
    message.includes("chess open") ||
    message.includes("chess")
  ) {
    window.open("https://www.chess.com", "_blank");
    const finalText = "Opening chess game sir...";
    speak(finalText);
  } else if (
    message.includes("open insta") ||
    message.includes("open instagram") ||
    message.includes("insta open") ||
    message.includes("instagram open") ||
    message.includes("insta") ||
    message.includes("instagram")
  ) {
    window.open("https://www.instagram.com", "_blank");
    const finalText = "Opening Instagram Sir...";
    speak(finalText);
  }
  else if(message.includes("open chat") || message.includes("chat open") || message.includes("chat")){
    window.open("https://chat.openai.com/", "_blank")
    const finalText = "Opening chat GPT sir..."
    speak(finalText)
  }
   else {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText =
      "I found some information for " + message + " on google sir";
    speak(finalText);
  }
}
