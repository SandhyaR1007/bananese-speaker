const serverURL = "https://api.funtranslations.com/translate/minion.json";
let originalText = document.querySelector("#user-input");
let translatedText = document.querySelector("#translated-output");
let convertBtn = document.querySelector("#btn-translate");

const translate = (text) => {
  console.log(text);
  if (text !== "") {
    fetch(`${serverURL}?text=${text}`)
      .then((res) => res.json())
      .then((val) => {
        console.log(val);
        translatedText.innerText = val.contents.translated;
      });
  } else {
    alert("Please enter some text");
  }
};
convertBtn.addEventListener("click", () => {
  translate(originalText.value);
});
