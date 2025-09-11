let box = document.querySelector(".box");
let btn = document.querySelector("button");



const speakfunc = (input) =>{
 let speakinput = new SpeechSynthesisUtterance(input);
//  speakinput.rate = 1;for speed fast or slow
//  speakinput.pitch = 1; for voice hard and soft
// speakinput.volume = 1; 
speakinput.lang = 'en-us'
 window.speechSynthesis.speak(speakinput);
}

window.onload = () =>{
    // speakfunc("code with shivam");
    greetingfunc();
}


const greetingfunc = () => {
    let date = new Date();
    let hour = date.getHours();

    if(hour>=0  && hour < 12){
        speakfunc("good morning sir, how can i help you !");
        }
    else if(hour>=12 && hour < 16){
        speakfunc("good afternoon sir, how can i help you !");
        }
    else{
        speakfunc("good evening sir, how can i help you !");
        }

}

const startvoiceinput = () => {
    if ('webkitSpeechRecognition' in window) {
        let recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';

        recognition.onresult = (e) => {
            let spokentext = e.results[0][0].transcript;
            handlecommands(spokentext.toLowerCase());
            box.classList.remove("btn-box");
            btn.innerHTML = `<i class="fa-solid fa-microphone-lines-slash"></i>`;
        };

        recognition.start();
    } else {
        alert("Your browser does not support voice input!");
    }
}









btn.onclick =() =>{
    // box.classlist.add("btn-box");
    btn.innerhtml = `<i class="fa-solid fa-microphone-lines"></i>`
    startvoiceinput();
}

const handlecommands = (command) => {
    console.log("Captured command:", command);

    if (command.includes("who are you") || command.includes("hello") || command.includes("hii")) {
        speakfunc("Hello sir, i am chitthee you virtual assistant ,developed by shivam!");
    }
    else if (
        (command.includes("just for code") && command.includes("channel")) ||
        command.includes("open just for code") ||
        command.includes("just for code youtube")
    ) {
        speakfunc("Opening... Just For Code YouTube channel");
        window.location.href = "https://www.justforcode.in"; // or actual YouTube link
    }
    else if (
        (command.includes("youtube") && command.includes("you")) ||
        command.includes("open youtube") ||
        command.includes("youtube")
    ) {
        speakfunc("Opening... youtube");
        window.location.href = ("https://www.youtube.com/");
    }
    else if (
        (command.includes("khatola ") && command.includes("khatola song")) ||
        command.includes("khatola 2") ||
        command.includes("masoom sharma youtube ")
    ) {
        speakfunc("Opening... ");
        window.location.href = ("https://www.youtube.com/watch?v=obgMGM6I2rE");
    }
    else {
        speakfunc(`This is what I found on the internet regarding ${command}`);
        window.open(`https://www.google.com/search?q=${(command)}`);
    }
}










