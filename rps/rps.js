function intMain(d,s)
{
// rps script begins
var usr, comp, compChoice; // variables declared
usr = prompt("Enter your choice of weapon"); // usr choice called
usr=usr.toLowerCase(); //bought to lowercase
comp=Math.random().toString().slice(10) % 3; //comp random binary number algo
compChoice=["rock", "paper", "scissor"]; //comp choices array

(function(){
var x=d.createElement("div");x.id="slcts";
x.appendChild(d.createTextNode("User selection: "+usr+" Computer selection: "+compChoice[comp]));
d.getElementById(s).appendChild(x); 
var y=d.createElement("div"); y.id="rslt";
d.getElementById(s).appendChild(y);
}()); // selection element and result element created and both selections outputted

function battle(u,c,r)
{
if(u===c) r.innerHTML="Its a tie!";
else if(u === "rock" && c === "scissor") r.innerHTML=" User Wins ";
else if(u === "scissor" && c === "paper") r.innerHTML=" User Wins ";
else if(u === "paper" && c === "rock") r.innerHTML=" User Wins ";
else r.innerHTML=" Computer Wins";
return "game over ";
}
battle(usr, compChoice[comp], document.getElementById("rslt"));
}
