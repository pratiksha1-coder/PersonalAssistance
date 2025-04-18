let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning ")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon ")
    }
    else {
        speak("Good Evening ")
    }
}
//window.addEventListener('load',()=>{
   // wishMe()
//})
let speechRecognition= window.speechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex =event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    console.log(event)
    takeCommand(transcript.toLowerCase())

}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
   

})
function takeCommand(message){
    btn.style.display="flex"
     

    if(message.includes("hello")){
        speak("hello i am Nova  ,what can i help you?")
    }
    else  if(message.includes("hello")){
        speak("hello i am Nova,what can i help you?")
    }
    else  if(message.includes("are you mad")){
        speak("i am not mad,you mad")
    }
    else  if(message.includes("are you eat the food")){
        speak("no i don't eat the food,because i am not human")
    }

    else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by Muskan")

    }else if(message.includes("open you tube")){
        speak("opening you tube....")
        window.open("https://www.youtube.com/","blank")
    }
    else if(message.includes("open google")){
        speak("opening google....")
        window.open("https://www.google.com/","blank")
    }
    else if(message.includes("open facebook")){
            speak("opening facebook....")
            window.open("https://www.facebook.com/","blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram....")
        window.open("https://www.instagram.com/","blank")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else{
        let finalText="this is what i found on internet regarding"+message.replace("Nova","")||message.replace("Nova","")
        speak(finalText)
        window.open('https://www.google.com/search?q=${message.replace("Nova","")}',"blank")
    }

}
