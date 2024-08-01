//Navbar menu on reducing screen size - menu bars
let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}

//Scroll to the  selected section
const gotoTarget = ()=>{
    tar = document.getElementById("targetpage");
    tar.scrollIntoView({behavior: 'smooth'});
}
const gotoThings = ()=>{
    things = document.getElementById("todopage");
    things.scrollIntoView({behavior: 'smooth'});
}
const gotoForm = ()=>{
    form = document.getElementById("formpages");
    form.scrollIntoView({behavior: 'smooth'});
}
const gotoHome = ()=>{
    home = document.getElementById("home");
    home.scrollIntoView({behavior: 'smooth'});
}
//sign-up button
let signUpBtn =document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');
signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight ='0';
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Lost Password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform ='translateX(35px)';
});
signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight ='60px';
    title.innerHTML = 'Sign Up';
    text.innerHTML = 'Password Suggestions';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform ='translateX(0)';
});
 
