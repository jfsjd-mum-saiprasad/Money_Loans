
          function myFunction() 
{
            let x = document.getElementById("age").value;
        if(x < 18){
          console.log("Application Failed Because of Cibil score")
        } else{
          console.log("Loan Request Sent Sucsesfully")
        } 
        Name.value=" ";
        Pan.value=" ";
        age.value=" ";
        number.value=" ";
}  


function displayValues() {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var pancard = document.getElementById("pancard").value;
    var mobile = document.getElementById("mobile").value;
    
    var source = "<p>Hi {{name}}</p><p> your Age {{age}}</p><p>and PAN Card {{pancard}}</p><p>Mobile Number {{mobile}} Our Team is Validating Your Details and We will get back to you, Thank You</p>";
    var template = Handlebars.compile(source);
    var context = {name: name, age: age, pancard: pancard, mobile: mobile};
    var html = template(context);
    document.getElementById("display-values").innerHTML = html;
}