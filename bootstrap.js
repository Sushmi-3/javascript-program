let form=document.getElementById("formSubmission");

let table=document.getElementById('data');
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  submit();
})


const submit=()=>{
  let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gen").value;
    let phonenumber= document.getElementById("pwd").value;
    let email = document.getElementById("email").value;

    if(!name||!age||!gen||!pwd||!email){
        alert("Please fill all the boxes");
        return;
    }
}


  let newArray = [name,age,gen,pwd,email];
  newArray.forEach((item)=>{
  var li = document.createElement("li");
  var text = document.createTextNode(item);
  li.appendChild(text);
  table.appendChild(li);
  })
  form.reset(); 



