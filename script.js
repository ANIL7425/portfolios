const skil_tag=document.getElementById("skil");
const edu_tag=document.getElementById("detail");
const exp=document.getElementById("Experience");
const btn=document.getElementsByClassName('hamburg');
skil_tag.addEventListener("click",()=>
{
    const infor=document.querySelector(".infor");
    infor.innerHTML=`<h1>promblem solving</hi>
    <h1>web development</h1><p>HTML,CSS,TAILWIND CSS,Javascript</p>`
})

edu_tag.addEventListener("click",()=>
    {
        const infor=document.querySelector(".infor");
        infor.innerHTML=`<div><h1>current:</h1><p>Currenty pursuing Btech 3rd year<p>
        <h1>2022</h1><p>Sri chaitanya junior college,bowrampet,hyderabad<p>
        <h1>2020:</h1><p>Rainbow English Medium high School,siricilla.<p>
       `
    });


    exp.addEventListener("click",()=>
        {
            const infor=document.querySelector(".infor");
            infor.innerHTML=` <h1>Fresher</h1><p>I AM READY TO WORK</P><img src=./readywork.webp/>`
        });

function hamburg()
{
    const navbar=document.getElementById("drop");
    navbar.style.transform="translateY(0px)";


}




    