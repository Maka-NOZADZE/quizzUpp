const quizData = [
  {
    question: "quelle age a Jean?",
    a: "10",
    b: "16",
    c: "27",
    d: "82",
    correct: "c",
  },
  {
    question: "quelle est la capitale de L'Italie?",
    a: "Paris",
    b: "Budapest",
    c: "Riga",
    d: "Rome",
    correct: "d",
  },
  {
    question: "Qui est premier president de USA ?",
    a: "Nixon",
    b: "Washington",
    c: "Clinton",
    d: "Kennedy",
    correct: "a",
  },
  {
    question: "Combien de mettre est la Tour Eiffel ?",
    a: "115m",
    b: "678m",
    c: "330m",
    d: "38m",
    correct: "c",
  },
];

const btn = document.getElementById("submitBtn");
const question = document.getElementById("question");
const atext = document.getElementById("a_text");
const btext = document.getElementById("b_text");
const ctext = document.getElementById("c_text");
const dtext = document.getElementById("d_text");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  question.innerText = currentQuizData.question;
  atext.innerText = currentQuizData.a;
  btext.innerText = currentQuizData.b;
  ctext.innerText = currentQuizData.c;
  dtext.innerText = currentQuizData.d;
}

btn.addEventListener("click", () => {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    alert("you finished !");
  }
});
