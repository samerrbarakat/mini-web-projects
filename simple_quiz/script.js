        const questions = [
          {
            question: "In JavaScript, what does document.querySelector('#myId') return?",
            answers: [
              { text: "An array of all elements matching the selector", correct: false },
              { text: "The first element that matches the CSS selector '#myId'", correct: true },
              { text: "A NodeList of elements with id 'myId'", correct: false },
              { text: "Null if any element has that id", correct: false }
            ]
          },
          {
            question: "How does document.getElementById('myId') differ from querySelector('#myId')?",
            answers: [
              { text: "getElementById requires a CSS selector", correct: false },
              { text: "querySelector returns a NodeList, getElementById returns a string", correct: false },
              { text: "getElementById returns the element directly by its id without needing a '#'", correct: true },
              { text: "querySelector can only select by id, not by class", correct: false }
            ]
          },
          {
            question: "What is the difference between element.innerHTML and element.outerHTML?",
            answers: [
              { text: "innerHTML includes the element’s own opening and closing tags", correct: false },
              { text: "outerHTML returns only the text nodes inside the element", correct: false },
              { text: "innerHTML returns the content inside the tags; outerHTML returns the element including its own tags", correct: true },
              { text: "outerHTML returns the element’s children as an array", correct: false }
            ]
          },
          {
            question: "When you call localStorage.setItem('data', someValue) multiple times with the same key 'data', what happens?",
            answers: [
              { text: "Each call appends the new value to the old one", correct: false },
              { text: "The previous value under 'data' is overwritten by the new value", correct: true },
              { text: "A warning is thrown in the console", correct: false },
              { text: "A new unique key is created each time", correct: false }
            ]
          },
          {
            question: "Given <button data-user-id=\"42\"></button>, how do you access that value via JavaScript?",
            answers: [
              { text: "button.dataset.userId", correct: true },
              { text: "button.getAttribute('user-id')", correct: false },
              { text: "button.userId", correct: false },
              { text: "button.data['user-id']", correct: false }
            ]
          },
          {
            question: "What does the CSS rule padding: 40px 30px 70px; translate to?",
            answers: [
              { text: "Top 40px, Right 30px, Bottom 70px, Left 30px", correct: true },
              { text: "Top 40px, Right 30px, Bottom 70px, Left 40px", correct: false },
              { text: "All sides have 40px, except bottom 70px", correct: false },
              { text: "Top and bottom 40px, left and right 30px, bottom overridden to 70px", correct: false }
            ]
          },
          {
            question: "In Flexbox, what does flex: 1 shorthand mean?",
            answers: [
              { text: "flex-grow: 1, flex-shrink: 1, flex-basis: 0%", correct: true },
              { text: "flex-grow: 0, flex-shrink: 1, flex-basis: 0%", correct: false },
              { text: "flex: 1px height", correct: false },
              { text: "Only flex-grow: 1 and no other properties", correct: false }
            ]
          },
          {
            question: "What does ul li::before { content: '' } accomplish in CSS?",
            answers: [
              { text: "Inserts an empty pseudo-element before each li’s content", correct: true },
              { text: "Removes default bullets from the ul", correct: false },
              { text: "Replaces every <li> tag with an empty string", correct: false },
              { text: "Applies styling to the parent ul instead", correct: false }
            ]
          },
          {
            question: "Why must ul li have position: relative if ul li::before uses position: absolute with top and left?",
            answers: [
              { text: "To allow the pseudo-element to position itself relative to the li itself", correct: true },
              { text: "Because absolute positioning only works inside <ul> tags", correct: false },
              { text: "Relative positioning is required for all pseudo-elements", correct: false },
              { text: "It has no effect—absolute would still reference the viewport", correct: false }
            ]
          },
          {
            question: "In CSS, if you set width: 90%; max-width: 600px; on a container, what happens when the viewport is 1000px wide?",
            answers: [
              { text: "The container becomes 900px wide", correct: false },
              { text: "The container’s width is capped at 600px", correct: true },
              { text: "The container remains at 1000px", correct: false },
              { text: "The container collapses to 0px", correct: false }
            ]
          },
          {
            question: "Which CSS rule combination centers a block-level element horizontally?",
            answers: [
              { text: "display: inline; margin: 0 auto;", correct: false },
              { text: "display: block; width: 300px; margin: 0 auto;", correct: true },
              { text: "display: flex; justify-content: center;", correct: false },
              { text: "display: block; float: center;", correct: false }
            ]
          },
          {
            question: "In an HTML document, what is wrong with <link rel=\"stylesheet\" src=\"style.css\">?",
            answers: [
              { text: "The 'rel' attribute is invalid for CSS", correct: false },
              { text: "It should use href=\"style.css\" instead of src", correct: true },
              { text: "You must place it inside the body, not the head", correct: false },
              { text: "The file extension must be .scss, not .css", correct: false }
            ]
          },
          {
            question: "Why is document.addEventListener('keydown', ...) preferred over nextButton.addEventListener('keypress', ...) when detecting the Enter key in the quiz?",
            answers: [
              { text: "Because keypress doesn’t capture Enter on buttons unless focused, and keypress is deprecated", correct: true },
              { text: "Because keydown only fires once per key press while keypress fires continuously", correct: false },
              { text: "Because keypress only works on input fields", correct: false },
              { text: "Because keydown is a CSS event, not JavaScript", correct: false }
            ]
          },
          {
            question: "What does button.disabled = true; do in the quiz application?",
            answers: [
              { text: "Permanently removes the button from the DOM", correct: false },
              { text: "Disables further clicking on that button", correct: true },
              { text: "Makes the button invisible", correct: false },
              { text: "Changes the button’s text to 'Disabled'", correct: false }
            ]
          },
          {
            question: "If you write ul { list-style: none; }, what happens to the list items?",
            answers: [
              { text: "All bullets or default markers on <li> elements are removed", correct: true },
              { text: "The list becomes unordered", correct: false },
              { text: "You must use images for bullets afterward", correct: false },
              { text: "It only affects ordered lists with numbers", correct: false }
            ]
          },
          {
            question: "What effect does box-sizing: border-box; have on element sizing?",
            answers: [
              { text: "It makes padding and border count inside the specified width/height", correct: true },
              { text: "It doubles the width and height automatically", correct: false },
              { text: "It disables margins on the element", correct: false },
              { text: "It converts padding into margin", correct: false }
            ]
          },
          {
            question: "Which CSS function is used to create a diagonal two-color gradient like in the to-do app’s background?",
            answers: [
              { text: "linear-gradient(135deg, color1, color2)", correct: true },
              { text: "radial-gradient(color1, color2)", correct: false },
              { text: "gradient-diagonal(color1, color2)", correct: false },
              { text: "box-gradient(45deg, color1, color2)", correct: false }
            ]
          },
          {
            question: "In JavaScript, what does document.createElement('button') accomplish?",
            answers: [
              { text: "It selects an existing <button> in the DOM", correct: false },
              { text: "It creates a new <button> element node that isn’t yet in the DOM", correct: true },
              { text: "It immediately appends a new button to the document body", correct: false },
              { text: "It returns a string '<button></button>'", correct: false }
            ]
          },
          {
            question: "After creating a button with document.createElement('button'), how do you add it into the page?",
            answers: [
              { text: "Use appendChild() on a parent container", correct: true },
              { text: "Use innerText = button on the parent", correct: false },
              { text: "Use document.write(button)", correct: false },
              { text: "Use button.insertAfter()", correct: false }
            ]
          },
          {
            question: "In the quiz code, what does button.classList.add('btn') do?",
            answers: [
              { text: "Adds a CSS class named 'btn' to the button for styling", correct: true },
              { text: "Removes any existing classes and sets it to 'btn'", correct: false },
              { text: "Changes the button’s tag to <btn>", correct: false },
              { text: "Converts the button into a boolean value", correct: false }
            ]
          },
          {
            question: "What does resetState() (formerly reserState()) do before showing the next question?",
            answers: [
              { text: "It hides the Next button and removes all existing answer buttons", correct: true },
              { text: "It resets the user’s browser to default settings", correct: false },
              { text: "It reloads the entire page", correct: false },
              { text: "It logs the user out of the quiz app", correct: false }
            ]
          },
          {
            question: "Why do we check if (button.dataset.correct === 'true') when showing answers?",
            answers: [
              { text: "To identify which answer button was marked correct in HTML", correct: true },
              { text: "Because dataset.correct always returns a boolean", correct: false },
              { text: "To disable only the correct button", correct: false },
              { text: "To change the button tag to <correct>", correct: false }
            ]
          },
          {
            question: "In CSS, what does display: block; enable that display: inline; does not?",
            answers: [
              { text: "Block elements can take width, and margin: 0 auto; can horizontally center them", correct: true },
              { text: "Inline elements cannot have any padding", correct: false },
              { text: "Block elements disappear from flow", correct: false },
              { text: "Inline elements ignore all CSS rules", correct: false }
            ]
          },
          {
            question: "What is the purpose of button.addEventListener('click', selectAnswer) in the quiz?",
            answers: [
              { text: "It attaches the selectAnswer function to run when the button is clicked", correct: true },
              { text: "It changes the button’s tag to <selectAnswer>", correct: false },
              { text: "It hides the button immediately", correct: false },
              { text: "It removes the button from the DOM", correct: false }
            ]
          },
          {
            question: "Which CSS selector targets an element by its id?",
            answers: [
              { text: ".myId", correct: false },
              { text: "myId", correct: false },
              { text: "#[id=\"myId\"]", correct: false },
              { text: "#myId", correct: true }
            ]
          },
          {
            question: "If you want to restore saved quiz state on reload with localStorage.getItem('data'), where do you assign it?",
            answers: [
              { text: "To document.body.innerHTML", correct: false },
              { text: "To listContainer.innerHTML or the element’s innerHTML you saved", correct: true },
              { text: "To localStorage.setItem()", correct: false },
              { text: "To window.location", correct: false }
            ]
          }
        ];



const questionElement = document.getElementById("question") ; 
const answerButtons= document.getElementById("answer-buttons") ;
const nextButton = document.getElementById("next-btn") ; 
let currentQuestionIndex = 0 ; 
let score  = 0 ; 

function startQuiz(){ 
    currentQuestionIndex = 0 ; 
    score =0 ; 
    nextButton.innerHTML="Next" ; 
    showQuestion(); 
}
function showQuestion(){ 
    reserState() ; 
    let currentQuestion = questions[currentQuestionIndex] ; 
    let questionNo = currentQuestionIndex +1 ; 
    questionElement.innerHTML = questionNo +". " +currentQuestion.question ; 
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button") ; 
        button.innerHTML= answer.text ; 
        button.classList.add("btn"); /*add class attribute to the tag*/ 
        answerButtons.appendChild(button) ; 
        if (answer.correct){
            button.dataset.correct = answer.correct ; 
        }
        button.addEventListener("click",selectAnswer) ; 
    });
}
function reserState(){
    nextButton.style.display ="none"; 
    while(answerButtons.firstChild) { 
        answerButtons.removeChild(answerButtons.firstChild); 

    }
}
function selectAnswer(e){
    const selectedBtn = e.target ; 
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct"); 
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect") ; 
    }
    /*Display the correct one  */
    Array.from(answerButtons.children).forEach(button =>{
        if (button.dataset.correct === "true"){
            button.classList.add("correct") ;
        }
        button.disabled = true; /* You cannot click on it anymore*/
    }) ; 
    nextButton.style.display = "block"; 
}
function handleNextButton(){
    currentQuestionIndex++ ; 
    if (currentQuestionIndex<questions.length){
        showQuestion() ; 
    }
    else { 
        showScore() ; 
    }
}
function showScore(){ 
    reserState(); 
    questionElement.innerHTML = `You have scored ${score} out of ${questions.length}` ; 
    nextButton.innerHTML = "Restart Quiz"; 
    nextButton.style.display= "block"; 
}
nextButton.addEventListener("click",()=>{
    if (currentQuestionIndex<questions.length){
        handleNextButton() ; 
    }
    else{ 
        startQuiz() ; 
    }
}) ; 
document.addEventListener("keypress",(e)=>{
    if (e.key==="Enter"){
        if (currentQuestionIndex<questions.length){
            handleNextButton() ; 
        }
        else{ 
            startQuiz() ; 
        }
    }
}) ; 

startQuiz() ; 
