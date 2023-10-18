function validarUserEmail(type) {
  console.log("ingreso a validarUser")
  
  //obtendo lo que ingreso el usuario en el input luego lo pongo en la variable userEmail
  let userEmail 

  if (type == "user") {
    mensaje = "El usuario debe contener un @"
    userEmail = document.getElementById("user").value  
    if (!userEmail.includes("@")) {
      document.getElementById("mensaje").innerHTML= mensaje
      document.getElementById("mensaje").className="mensaje-login"
      document.getElementById("continueButton").disabled="disabled"
      document.getElementById("continueButton").className="btn-disabled"
    } else {
        document.getElementById("mensaje").innerHTML=""
        document.getElementById("mensaje").className=""
        document.getElementById("continueButton").disabled="disabled"
    }
  } else if (type == "email") {
    mensaje = "El email debe contener un @"
    userEmail = document.getElementById("email").value
    if (!userEmail.includes("@")) {
      document.getElementById("mensaje").innerHTML= mensaje
      document.getElementById("mensaje").className="mensaje-login"
      document.getElementById("form-btn").disabled="disabled"
      document.getElementById("form-btn").className="btn-disabled"
    } else {
      document.getElementById("mensaje").innerHTML=""
      document.getElementById("mensaje").className=""
      document.getElementById("form-btn").disabled=""
      document.getElementById("form-btn").className="form-btn-submit"
    }
  }
}


// valida que el usuario tenga un @ 
// function validarUser() {
//   console.log("ingreso a validarUser")
  
//   //obtendo lo que ingreso el usuario en el input luego lo pongo en la variable user
//   let user=document.getElementById("user").value 

//   if (!user.includes("@")) {
//       document.getElementById("mensaje").innerHTML="El usuario debe contener un @"
//       document.getElementById("mensaje").className="mensaje-login"
//       document.getElementById("continueButton").disabled="disabled"
//       document.getElementById("continueButton").className="btn-disabled"
//   } else {
//       document.getElementById("mensaje").innerHTML=""
//       document.getElementById("mensaje").className=""
//       document.getElementById("continueButton").disabled="disabled"
//   }
// }


function validarPass() {
  let pass=document.getElementById("pass").value

  let regExpMin=new RegExp("(?=.*[a-z])")
  let regExpMay=new RegExp("(?=.*[A-Z])")
  let regExpCantChar=new RegExp(".{8,}")
  
  if (!regExpMin.test(pass)) {
      document.getElementById("mensaje").innerHTML="La contraseña debe tener minúsculas"
      document.getElementById("mensaje").className="mensaje-login"        
      document.getElementById("continueButton").className="btn-disabled"
  } else if (!regExpMay.test(pass)) {
      document.getElementById("mensaje").innerHTML="La contraseña debe tener mayúsculas"
      document.getElementById("mensaje").className="mensaje-login" 
      document.getElementById("continueButton").disabled="disabled"        
      document.getElementById("continueButton").className="btn-disabled"
  } else if (!regExpCantChar.test(pass)) {
      document.getElementById("mensaje").innerHTML="La contraseña debe tener más de 8 caracteres"
      document.getElementById("mensaje").className="mensaje-login" 
      document.getElementById("continueButton").disabled="disabled"        
      document.getElementById("continueButton").className="btn-disabled"       
  } else {
      document.getElementById("mensaje").innerHTML=""
      document.getElementById("mensaje").className=""  
      document.getElementById("continueButton").disabled="" 
      document.getElementById("continueButton").className="login-in"         
  }
}


// Oculta o muetra la contraseña
function mostrarPass() {
  document.getElementById("pass").setAttribute("type","text")
  document.getElementById("icon-eye").setAttribute("src", "../img/icons/eye-solid.svg")
  document.getElementById("icon-eye").setAttribute("onclick","ocultarPass()")
}

function ocultarPass() {
  document.getElementById("pass").setAttribute("type","password")
  document.getElementById("icon-eye").setAttribute("src", "../img/icons/eye-slash-solid.svg")
  document.getElementById("icon-eye").setAttribute("onclick","mostrarPass()")
}

 // Redirigir a la página de error (message.html)
document.getElementById("continueButton").addEventListener("click", function() {
  window.location.href = "./message.html";
});






