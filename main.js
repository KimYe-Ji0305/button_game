let num1 = document.getElementById('1')
let num2 = document.getElementById('2')
let num3 = document.getElementById('3')

window.addEventListener('keydown',(e)=>{
    if (e.key == '1' || e.key== '2' || e.key=='3'){
    const div = document.getElementById(e.key)
    div.classList.add('pressed')
}
    // if (e.key==1){
    //     num1.classList.toggle('pressed')
    // }else if (e.key==2){
    //     num2.classList.toggle('pressed')
    // }else if (e.key==3){
    //     num3.classList.toggle('pressed')
    // }
})
window.addEventListener('keyup',(e)=>{  //e : 이벤트객체
    if (e.key == '1' || e.key== '2' || e.key=='3'){
    const div = document.getElementById(e.key)
    div.classList.remove('pressed')
    }
})