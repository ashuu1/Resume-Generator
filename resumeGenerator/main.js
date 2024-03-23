
function skillField(){
    let newNode=document.createElement('input')
    newNode.classList.add('form-control')
    newNode.classList.add("mt-2")
    newNode.setAttribute('placeholder', "Enter here")

    let skOb=document.getElementById('sk')
    let skAddButtonOb=document.getElementById('skAddButton')

    skOb.insertBefore(newNode, skAddButtonOb)
}

function addNewWEField(){

    let newNode=document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add("weField")
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3)
    newNode.setAttribute("placeholder","Enter here")


    let weOb=document.getElementById("we")
    let weAddButtonOb=document.getElementById("weAddButton")

    weOb.insertBefore(newNode, weAddButtonOb)
}


function addNewAQFIeld(){

    let newNode=document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add("aqField")
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3)
    newNode.setAttribute("placeholder","Enter here")


    let aqOb=document.getElementById("aq")
    let aqAddButtonOb=document.getElementById("aqAddButton")

    aqOb.insertBefore(newNode, aqAddButtonOb)
}


// Generating cv

function generateCV(){
//    console.log("generating cv")
     document.getElementById("nameT1").innerHTML = document.getElementById("nameField").value;
    

    document.getElementById("nameT2").innerHTML = document.getElementById("JobField").value;

    // email
    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;
    
    // Setting contact Value
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    // Address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;


     //links

     document.getElementById("instaT").innerHTML = document.getElementById("InstaField").value;

     document.getElementById("gitT").innerHTML = document.getElementById("gitField").value;

     document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

     // objective
     document.getElementById("objT").innerHTML = document.getElementById("ObjectiveField").value;


    // Skills
   
//    let sks=document.getElementsByClassName("SKfield")  
//     let str2=''
//     for(let e of sks){
//        str2=str2 +`<li> ${e.value} </li>` ;       
//     }
    
//     document.getElementById("SKT").innerHTML = str2 ;
  
    //  we
    let wes=document.getElementsByClassName("weField");

    // creted variable for different li in wes
    let str=''

    // e is scoped variable so ti will used in this loop only
    for(let e of wes)
    {
        str=str+`<li> ${e.value} </li>` ;
    }

    document.getElementById('weT').innerHTML = str ;

    //aq

    let aqs=document.getElementsByClassName('aqField');

    let str1=''

    for(let e of aqs){
        str1+= `<li> ${e.value} </li>`;
    }

    document.getElementById('aqT').innerHTML = str1 ;

    // Code for setting image
    let file=document.getElementById('imgfilled').files[0]
    // console.log(file);

    let reader=new FileReader()
    
    reader.readAsDataURL(file);

    console.log(reader.result);

    // set the image to template.
    // first it will read the file then it will call this function
    reader.onloadend = function(){
        
        document.getElementById('imgTemplate').src = reader.result;
    }

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
}

// print

function printCV() {
    window.print();
}