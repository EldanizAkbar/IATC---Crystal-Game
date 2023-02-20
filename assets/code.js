var randomNumber = function () {
  return Math.round(Math.random() * 50 + 50);
};
const button = document.querySelectorAll(".btn");

for (var i of button) {
  i.dataset.value = Math.round(Math.random() * 19 + 1);
}

let score = 0;
let wins = 0;
let losses = 0;

$("#ai_score").text(randomNumber);
$("#your_score").text(score);
$("#wins").text(wins);
$("#losses").text(losses);

$(".btn").on("click", function () {
  score += Number(this.dataset.value);

  $("#your_score").text(score);

  if (Number($("#ai_score").text()) === Number($("#your_score").text())) {
    alert("CONGRATULATIONS,  You WON !!!!!!");
    wins++;
    $("#ai_score").text(randomNumber);
    score = 0;
    $("#your_score").text(score);
  } else if (Number($("#ai_score").text()) < Number($("#your_score").text())) {
    alert("UNFORTUNATELY, You LOST !!!!!!");
    losses++;
    $("#ai_score").text(Math.round(Math.random() * 50 + 50));
    score = 0;
    $("#your_score").text(score);
  }

  $("#wins").text(wins);
  $("#losses").text(losses);
});
