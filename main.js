let img = document.querySelectorAll('img');
img.forEach(e => {
    e.setAttribute("draggable", false)
})


// upload handle 
//target

let photoinput = document.querySelector('.photo');
let photoBtn = document.querySelector('.photo-btn');

let prescription = document.querySelector('.prescription');
let prescriptionBtn = document.querySelector('.prescription-btn');

photoBtn.onclick = () => {
    photoinput.click()
}
prescriptionBtn.onclick = () => {
    prescription.click()
}

//cancel or clear form
let cancelbtn = document.querySelector('.cancel');
let allInput = document.querySelectorAll('input[type="text"]');

cancelbtn.onclick = () => {
    allInput.forEach(e => {
        e.value = ""
    })
}

// reviews

let reviews = [
    {
        img: "./static/Female User1.jpg",
        CName: "Lara whitman",
        msg: "I was so impressed with the care I received from Dr. Smith. She was so knowledgeable and compassionate, and she really took the time to answer all of my questions. I would highly recommend her to anyone."

    },
    {
        img: "./static/Male User1.jpg",
        CName: "Mr. Bijay Agada",
        msg: "I was so sick, and I didn't know what to do. I went to the medical clinic, and they were able to see me right away. The doctor was very thorough, and she gave me the perfect medication. I was feeling better within a few days."
    },
    {
        img: "./static/Female User2.jpg",
        CName: "Jinnat Murshida Khanom",
        msg: "I had a terrible headache, and I didn't know what to do. I went to the medical clinic, and they were able to help me right away. The doctor gave me a prescription, and I was feeling better within a few hours."

    },
    {
        img: "./static/Male User2.jpg",
        CName: "Sri Himagshu Prakash Sarma",
        msg: "I was very anxious about going to the doctor, but I was so glad I did. The doctor was very understanding and patient, and she made me feel comfortable. I would definitely recommend her to others."
    },

]

//slide buttons
let prevBtn = document.querySelector('.previous')
let nextBtn = document.querySelector('.next')
let userImage = document.querySelector('.user-img')
let userName = document.querySelector('.user-name')
let userMessage = document.querySelector('.msg')

let count = 0;

prevBtn.addEventListener('click',e=>{
    count=count-1;
    if(count<=0){
        count=3;
    }

    userImage.src=reviews[count].img;
    userMessage.innerText=reviews[count].msg;
    userName.innerText=reviews[count].CName;
    console.log(count)
});



nextBtn.addEventListener('click',e=>{
    count=count+1;
    if(count>3){
        count=0;
    }
    userImage.src=reviews[count].img;
    userMessage.innerText=reviews[count].msg;
    userName.innerText=reviews[count].CName;
    console.log(count)
})


// open or close side menu 
let openMenuBtn = document.querySelector('.menu-mark');
let closeMenuBtn = document.querySelector('.close-mark');
let sideMenu = document.querySelector('.side-menu');
let links =  document.querySelectorAll('.links')

openMenuBtn.onclick=()=>{
    sideMenu.style.display='block'
}

closeMenuBtn.onclick=()=>{
    sideMenu.style.display='none'
}

links.forEach(e=>{
    e.onclick=()=>{
        sideMenu.style.display='none'      
    }
})


// register now

let regBtn = document.querySelector('.reg-now');
let closeReg = document.querySelector('.cross');
let regPage = document.querySelector('.register-page');

regBtn.onclick=()=>{
    regPage.style.display='flex'
}
closeReg.onclick=()=>{
    regPage.style.display='none'
}