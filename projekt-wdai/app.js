const sections = document.querySelectorAll('.section');
const divButtons = document.querySelectorAll('.controls');
const divButton = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){

    for (let i = 0; i < divButton.length; i++){
        divButton[i].addEventListener('click', function (){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className =  currentBtn[0].className.replace('active-btn','');
            this.classList.add('active-btn'); // wazna spacja
        })
    }

    allSections.addEventListener('click',(e)=>{
        const id = e.target.dataset.id;
        if (id){
            //usuwanie active z przyciskow
            divButton.forEach((btn)=>{
                btn.classList.remove('active');
            })
            //e.target.classList.add('active');
            //
            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id)
            element.classList.add('active');

        }
    })


}

PageTransitions();

