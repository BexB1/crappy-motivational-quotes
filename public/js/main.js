var piano = new Audio();
piano.src = "/piano.mp3";
piano.play();
piano.loop = true;

var quotesArray = ["If at first you don't succeed, sky diving is not for you.", "Plan for tomorrow, live for today, and blame yesterday on the booze.", "You are unique. Nothing can replace you. Unless, of course, you are a twin. Then one of you has to go.", "Listen to your heart. When you hear it stop beating, seek medical attention.", "Be yourself. Everyone else is a moron.", "I always wanted to be somebody, but now I realise that I should have been more specific.", "Before criticising someone, walk a mile in their shoes. Then when you criticise them, you'll be a mile away and you'll have their shoes.", "If 'plan A' didn't work, stay cool; there's 25 more letters. Unless you're Cambodian. In which case, you have way more chances to suck.", "There is no 'I' in team. However, there is an 'M' and an 'E'.", ];

var quotePicker = Math.floor(Math.random() * quotesArray.length);

$('#theQuotesBox').html(quotesArray[quotePicker]);

$('#newQuote').on("click", function() {
  var quotePicker = Math.floor(Math.random() * quotesArray.length);
  $('#theQuotesBox').html(quotesArray[quotePicker]);
})