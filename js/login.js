
// valida que el usuario tenga un @ 
function validarUser() {
  console.log("ingreso a validarUser")
  
  //obtendo lo que ingreso el usuario en el input luego lo pongo en la variable user
  let user=document.getElementById("user").value 
  console.log(`user= ${user}`)

  // console.log(user.includes("@"))
  user.includes("")

  if (!user.includes("@")) {
      // console.log("El usuario debe contener un @")
      document.getElementById("mensaje").innerHTML="El usuario debe contener un @"
      //document.getElementById("mensaje").className="mensaje-login"
  } else {
      document.getElementById("mensaje").innerHTML=""
      document.getElementById("mensaje").className=""
  }

}


function validarPass() {
  let pass=document.getElementById("pass").value

  let regExpMin=new RegExp("(?=.*[a-z])")
  let regExpMay=new RegExp("(?=.*[A-Z])")
  let regExpCantChar=new RegExp(".{8,}")
  
  if (!regExpMin.test(pass)) {
      document.getElementById("mensaje").innerHTML="La contraseña debe tener minúsculas"
      //document.getElementById("mensaje").className="mensaje-login"        
      
  } else if (!regExpMay.test(pass)) {
      document.getElementById("mensaje").innerHTML="La contraseña debe tener mayúsculas"
      //document.getElementById("mensaje").className="mensaje-login"        
          
  } else if (!regExpCantChar.test(pass)) {
      document.getElementById("mensaje").innerHTML="La contraseña debe tener más de 8 caracteres"
      document.getElementById("mensaje").className="mensaje-login"        
  } else {
      document.getElementById("mensaje").innerHTML=""
      //document.getElementById("mensaje").className=""        
      
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

