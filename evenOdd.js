function display(){
    let num  = document.querySelector('input');
    let val = num.value;
    if(val % 2 == 0){
        document.querySelector('p').textContent = "even";
    }else {
         document.querySelector('p').textContent = "odd";
    }
}