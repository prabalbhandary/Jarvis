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
  speak("I'm your Virtual Assistant, JARVIS sir. How may I help you sir?");
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
    message.includes("hola jarvis") ||
    message.includes("hey") ||
    message.includes("hi") ||
    message.includes("hello") ||
    message.includes("hola")
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
    message.includes("calculator")
  ) {
    window.open("Calculator:///");
    const finalText = "Opening Calculator sir";
    speak(finalText);
  } else if (
    message.includes("shutdown") ||
    message.includes("please shut down yourself")
  ) {
    const finalText = "Goodbye Sir. Have a nice day sir";
    speak(finalText);
  } else if (
    message.includes("open hdhub") ||
    message.includes("hdhub open") ||
    message.includes("hdhub") ||
    message.includes("hd")
  ) {
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
  } else if (
    message.includes("open chat") ||
    message.includes("chat open") ||
    message.includes("chat")
  ) {
    window.open("https://chat.openai.com/", "_blank");
    const finalText = "Opening chat GPT sir...";
    speak(finalText);
  } else if (
    message.includes("open message") ||
    message.includes("message open") ||
    message.includes("message")
  ) {
    window.open("https://www.messenger.com", "_blank");
    const finalText = "Opening Facebook Messenger Sir...";
    speak(finalText);
  } else if (
    message.includes("who created you") ||
    message.includes("who invented you")
  ) {
    const finalText = "I was created by Prabal Bhandary sir.....";
    speak(finalText);
  } else if (
    message.includes("open maps") ||
    message.includes("maps open") ||
    message.includes("maps")
  ) {
    window.open("https://www.google.com/maps/", "_blank");
    const finalText = "Opening Google Maps sir...";
    speak(finalText);
  } else if (
    message.includes("my home") ||
    message.includes("home") ||
    message.includes("mero ghar") ||
    message.includes("ghar")
  ) {
    window.open(
      "https://www.google.com/maps/place/Bhadrabas,+44600/@27.7384559,85.412296,15z/data=!3m1!4b1!4m6!3m5!1s0x39eb1b4447a7a573:0xc15e0af90d111b51!8m2!3d27.7366495!4d85.4233708!16s%2Fm%2F04jm3rq?entry=ttu",
      "_blank"
    );
    const finalText = "Opening your home in Google Maps sir...";
    speak(finalText);
  } else if (
    message.includes("open code") ||
    message.includes("code open") ||
    message.includes("vs code") ||
    message.includes("code")
  ) {
    window.open("https://www.vscode.dev/", "_blank");
    const finalText = "Opening Visual Studio Code in web sir...";
    speak(finalText);
  } else if (
    message.includes("play some music") ||
    message.includes("play music") ||
    message.includes("play") ||
    message.includes("music")
  ) {
    window.open("https://www.youtube.com/watch?v=iZCGIoReI2k", "_blank");
    const finalText = "Playing Songs sir....";
    speak(finalText);
  } else if (
    message.includes("open class") ||
    message.includes("class open") ||
    message.includes("class")
  ) {
    window.open("https://meet.google.com/pbd-agts-ojz", "_blank");
    const finalText = "Opening Your Google Class sir...";
    speak(finalText);
  } else if (
    message.includes("open schoolworkspro") ||
    message.includes("schoolworkspro open") ||
    message.includes("schoolworkspro") ||
    message.includes("school")
  ) {
    window.open("https://schoolworkspro.com/", "_blank");
    const finalText = "Opening School Works Pro sir...";
    speak(finalText);
  }
  else if(message.includes("open twitter")|| message.includes("twitter open")|| message.includes("twitter") || message.includes("x")){
    window.open("https://x.com/", "_blank")
    const finalText = "Opening Twitter Sir..."
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
