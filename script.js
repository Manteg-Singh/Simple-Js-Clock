let ans
let time
let mydate
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    ans = new Date();
    time = ans.getHours() + ":" + ans.getMinutes() + ":" + ans.getSeconds();
    mydate = ans.toLocaleDateString(undefined, options);
    document.getElementById('time').innerHTML= time + "<br> on " + mydate;
}, 1000);