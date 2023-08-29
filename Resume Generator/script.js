function addNewWorkField() {
    // console.log("addNewWorkField");

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");


    let weOb=document.getElementById("we");
   

  let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode , weAddButtonOb);
   
};

function addQualiFeild(){

    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

   
    let aqOb=document.getElementById("me");
   

  let weAddButtonOb=document.getElementById("aqAddBuutton");

    aqOb.insertBefore(newNode , weAddButtonOb);
   

};
//generating cv
function generateCv() {
// console.log("working");
  let nameFieldOb = document.getElementById("nameField").value;

  let nameT1 = document.getElementById("nameT");

  nameT1.innerHTML = nameFieldOb;

  //direct
  document.getElementById("nameT2").innerHTML = nameFieldOb;

  //contact
  document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

  //ADDRESS
  document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

  document.getElementById("fbT").innerHTML=document.getElementById("facebookField").value;

  document.getElementById("instaT").innerHTML=document.getElementById("instagramField").value;

  document.getElementById("linkT").innerHTML=document.getElementById("linkedinField").value;

  //Objective
  document.getElementById("objT").innerHTML=document.getElementById("objectiveField").value;

  //work
  let wex= document.getElementsByClassName("weField");

  let str="";

  for(let e of wex)
  {
    str=str + `<li> ${e.value} </li>`;
  }

  document.getElementById("workT").innerHTML= str;

// Academic Qualification

let aqs= document.getElementsByClassName("eqField");

let str1= "";

for(let e of aqs)
{
  str1 =str1 + `<li> ${e.value} </li>`;
}

document.getElementById("AqT").innerHTML= str1;

//code for setting image
let file= document.getElementById("imgField").files[0];

console.log(file);

let reader= new FileReader();

reader.readAsDataURL(file);


//set the image to templet
reader.onloadend= function () {

  document.getElementById("imgT").src=reader.result;
};

document.getElementById("cv-form").style.display="none";
document.getElementById("cv-template").style.display="block";

};
//print cv
function printCv() {
  window.print();
};