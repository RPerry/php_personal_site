<template>
  <div class="triviaContainer">
    <h2>Trivia</h2>
    <section class="para">
      <h4>A fun fact about me is that I LOVE trivia and my favorite show is Jeopardy.</h4>
      <h4>Using the Open Trivia API, I've gathered some trivia questions to test your knowledge!</h4>
    </section>
    <h3 id="triviaHeader">Trivia Questions</h3>
    <section class="allTriviaQ">
      
    </section>
    <button id="button" v-on:click="this.answerClick">Show Answers</button>
    <section id="answers" v-show="show"></section>
  </div>
</template>

<script>

export default {

  mounted() {
    const allTrivia = document.getElementsByClassName("allTriviaQ")[0];
    allTrivia.innerHTML = "";
    this.triviaApiCall("https://opentdb.com/api.php?amount=3");
  },
  name: "questions",
  data() {
    return {
      show: false,
      answers: [],
      answerString: ""
    };
  },

  methods: {
  // sending get request to external api
  triviaApiCall: async function getDegrees(url) {
    await fetch(url, {
        method: 'GET'
    })
    .then((response) => this.check(response))
    .then((data) => this.addQuestion(data))
    .catch(e => {
        console.log(e);
    });
  },
  
  check: function checkStatus(getResponse) {
    if (getResponse.status != 200) {
        throw new this.statusCode(getResponse.status);
    } else {
        return getResponse.json()
    }
  },
  
  statusCode: function statusCodeException(code) {
    let message = `Sorry, there seems to be an error loading the trivia. Status code: ${code}`;
    console.log(message);
    return message;
  },

  // iterating through JSON  object and creating a div element for each trivia question and adding it the DOM
  addQuestion: function addQuestionToPage(data) {

    for (let i= 0; i<= data.results.length; i++) {
      const questionSection = document.createElement("div");
      questionSection.className = "questionItem";
      
      let triviaInfo = {};

      for (const [key, value] of Object.entries(data.results[i])) {
        triviaInfo[key] = value;
      }

      const sectionContents = 
      `
      <h3 class="category">${triviaInfo.category}</h3>
      <p class="question">${triviaInfo.question}</p>
      `;

      questionSection.innerHTML = sectionContents;
      const allTrivia = document.getElementsByClassName("allTriviaQ")[0];
      allTrivia.appendChild(questionSection);
      this.answers.push(triviaInfo.correct_answer);
      let num = i + 1
      this.answerString +="     " + num + ". " + triviaInfo.correct_answer
    }
  },

// if answer button is clicked, the answers to the trivia questions will show or be hidden again
  answerClick: function() {
    this.show = !this.show;

    document.getElementById("answers").innerHTML = this.answerString;
    if (this.show) {
      document.getElementById("button").innerHTML = "Hide Answers";
    } else {
      document.getElementById("button").innerHTML = "Show Answers";
    }
  }

}};

</script>

<style>
.triviaContainer{
  display: grid;
    grid-template-columns: .5fr 1fr .5fr;
    grid-template-rows: .25 .5fr .25fr 1fr .30fr 1fr;
    gap: 5px 5px;
    grid-auto-flow: row;  
}

h2{
  grid-row: 1 / 2 ;
  grid-column: 2 / 3;
  margin-top: 8%;
}

.para {
  grid-row: 2 / 3 ;
  grid-column: 2 / 3;
  padding-top: 10px;
  padding-bottom: 7px;
}

#triviaHeader {
  grid-row: 3 / 4 ;
  grid-column: 2 / 3;
  text-decoration: underline 2px black;
}

.allTriviaQ {
  grid-row: 4 / 5 ;
  grid-column: 2 / 3;
  padding-top: 7px;
}

#button {
  grid-row: 5 / 6 ;
  grid-column: 2 / 3;
  margin-left:30%;
  margin-right:30%;
  margin-top: 5%;
  margin-bottom: 5%;
  border: none;
  /* color: black; */
  font-weight: bold;
  padding: 15px 10px;
  background-color: lightblue;
  cursor: pointer;
  color: black;
  font-size: 100%;
}

#answers{
  white-space: pre;
  grid-row: 6 / 7 ;
  grid-column: 2 / 3;
}

#answers, .questionItem {
  font-weight: bold;
}

.questionItem {
  border-bottom: 1px solid black;
}
 
@media screen and (max-width: 800px) {
  #answers{
    max-width: 90%;
     overflow-wrap: break-word;
  }
}
  
</style>

