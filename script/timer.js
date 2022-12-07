
const end = new Date();
const sec = 1000;
const min = sec * 60;
const hour = min * 60;
const day = hour * 24;

let timer;

const timerHandler = () =>{
    const now = new Date()
    const toEnd = end.setHours(23,59,59,0) - now;
    if(toEnd < 0){
        clearInterval(timer);
        return;
    }
    const dayToEnd = Math.floor(toEnd / day)
    const hoursToEnd = Math.floor((toEnd % day)/ hour)
    const minToEnd = Math.floor((toEnd % hour)/ min)
    const secToEnd = Math.floor((toEnd % min)/ sec)

    document.querySelector(".time__day").innerHTML = `<label>${dayToEnd}</label> DNI.`
    document.querySelector(".time__hours").innerHTML = `<label>${hoursToEnd}</label> Godz.`
    document.querySelector(".time__min").innerHTML = `<label>${minToEnd}</label> MIN.`
    document.querySelector(".time__sec").innerHTML = `<label>${secToEnd}</label> sek.`

}
timer = setInterval(timerHandler,1000)


document.querySelectorAll(".heart").forEach(element => {
    element.addEventListener("click", ()=>{
        element.classList.toggle("heart--active")
    })
})


const validatePhoneNumber = (input_str) =>{
    // const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const re = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
    return re.test(input_str);
  }
  const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };


  