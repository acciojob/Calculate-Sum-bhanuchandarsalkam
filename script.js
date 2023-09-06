//your JS code here. If required.
function get(){
	const n1=document.getElementById("n1").value;
	const n2=document.getElementById("n2").value;
	const a=parseInt(n1);
	const b=parseInt(n2);
		document.getElementById("Sum").innerText=a+b;
		//document.getElementById("sum").innerText="";
}
const sum=document.getElementById("sum_btn");
sum.addEventListener("click",get);