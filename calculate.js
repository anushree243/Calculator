let buttons = document.querySelectorAll(".button")
let str = ""
let specialBtns = document.querySelectorAll(".button-special")
function calculation(e) {
    const Btn = e.currentTarget
    if(str.length==1 && str.charAt(0)=='0') {
        str = Btn.innerHTML;
        const ipt = document.querySelector('input')
        ipt.value = str
    } else {
        str = str + Btn.innerHTML
        const ipt = document.querySelector('input')
        ipt.value = str
    }
}
let bEqual = document.querySelector('.button-equal')
bEqual.addEventListener('click', ()=> {
    if(str.charAt(str.length-1)=='/' || str.charAt(str.length-1)=='*' || str.charAt(str.length-1)=='+' || str.charAt(str.length-1)=='-' || str.charAt(str.length-1)=='%') {
        str = "Invalid";
        document.querySelector('input').value = str
    } else {
        str = eval(str);
        document.querySelector('input').value = str
    }
})
Array.from(buttons).forEach(button => {
    button.addEventListener('click', calculation)
})
Array.from(specialBtns).forEach(Btn => {
    Btn.addEventListener('click', (e)=>{
        if(str=='Invalid') {
            document.querySelector('input').value = "";
            str="";
        }
        else if(e.currentTarget.innerHTML == 'AC') {
            document.querySelector('input').value = "";
            str = ""
        } else if(e.currentTarget.innerHTML == 'C') {
            let newStr = "";
            for(let i=0; i<str.length-1; i++) {
                newStr+=str.charAt(i);
            }
            str = newStr
            document.querySelector('input').value = str;
        }  else if(e.currentTarget.innerHTML == '/') {
            const Btn = e.currentTarget
            str = str + Btn.innerHTML
            const ipt = document.querySelector('input')
            ipt.value = str
        }
    })
})