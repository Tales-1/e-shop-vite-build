function timeLeft(){
    let thisMonth = new Date().getMonth();
    let tomorrow = new Date().getDate()+1;
    let deadline = new Date(2022, thisMonth, tomorrow,0,0).getTime();
    let currentTime = new Date().getTime();
    let remainder = deadline - currentTime;
    return remainder
}

export default timeLeft