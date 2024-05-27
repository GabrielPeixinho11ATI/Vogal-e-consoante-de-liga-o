// Lista de perguntas e respostas
const questions = [
  {
    question: "Qual é a vogal de ligação em 'girassol'?",
    options: ["i", "a", "o", "e"],
    correctAnswer: 0
  },
  {
    question: "Qual é a consoante de ligação em 'avózinha'?",
    options: ["z", "h", "n", "s"],
    correctAnswer: 2
  },
  {
    question: "Qual é a vogal de ligação em 'desenvolvimento'?",
    options: ["a", "e", "i", "o"],
    correctAnswer: 2
  }
];

let currentQuestionIndex = 0;
let score = 0;

// Função para exibir a próxima pergunta
function displayQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question").textContent = question.question;
  const options = document.querySelectorAll(".option");
  options.forEach((option, index) => {
    option.textContent = question.options[index];
  });
}

// Função para verificar a resposta do jogador
function checkAnswer(selectedIndex) {
  const question = questions[currentQuestionIndex];
  if (selectedIndex === question.correctAnswer) {
    score++;
    document.getElementById("scoreValue").textContent = score;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    alert("Fim do Jogo! Sua pontuação final é: " + score);
    // Você pode adicionar mais lógica aqui, como reiniciar o jogo.
  }
}

// Chamar a função displayQuestion quando a página é carregada
window.onload = displayQuestion;
