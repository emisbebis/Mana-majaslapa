const choices = ["akmens", "papīrs", "šķēres"];
const buttons = document.querySelectorAll(".choice");
const playerChoiceText = document.getElementById("Tava izvēle");
const computerChoiceText = document.getElementById("Datora izvēle");
const winnerText = document.getElementById("Uzvarētājs");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);

    // Update the UI
    playerChoiceText.textContent = `Tava izvēle: ${capitalize(playerChoice)}`;
    computerChoiceText.textContent = `Datora izvēle: ${capitalize(computerChoice)}`;
    winnerText.textContent = `Rezultāts: ${winner}`;
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) {
    return "Neizšķirts!";
  }

  if (
    (player === "akmens" && computer === "šķēres") ||
    (player === "papīrs" && computer === "akmens") ||
    (player === "šķēres" && computer === "papīrs")
  ) {
    return "Tu uzvari!";
  } else {
    return "Tu zaudēji!";
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}