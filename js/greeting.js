const loginForm=document.querySelector("#login-form");
const loginInput=loginForm.querySelector("input");
const loginButton=loginForm.querySelector("button");
const greetingH1=document.querySelector("#greeting");

function onclickLoginBtn(event){
	event.preventDefault();
	const username=loginInput.value;
	localStorage.setItem("username",username);
	loginInput.value="";
	loginForm.classList.add("hidden");
	greetingH1.classList.remove("hidden");
	greetingH1.innerText=`Hello ${username}`;
}

if(localStorage.getItem("username")===null)
{
	loginForm.classList.remove("hidden");
	loginForm.addEventListener("submit",onclickLoginBtn);
}
else
{
	const localSavedUsername=localStorage.getItem("username");
	loginForm.classList.add("hidden");
	greetingH1.innerText=`안녕하세요, ${localSavedUsername}`;
	greetingH1.classList.remove("hidden");
	
}

