function validarFormulario() { 
    // Obtenemos los valores del formulario 
    const correoElectronico = document.querySelector("input[name='correo_electronico']").value;
     const contraseña = document.querySelector("input[name='contraseña']").value; 
     // Validamos el correo electrónico 
     const correoValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correoElectronico); 
     // Validamos la contraseña
      const contraseñaValida = contraseña === "76233374"; 
      // Si el correo electrónico y la contraseña son válidos 
      if (correoValido && contraseñaValida) { 
        return true; 
    } else {
         return false; 
        }
     }
     document.querySelector("form").addEventListener("submit",function(e) {
        e.preventDefault();
        const valido =validarFormulario();
        if (valido) {
            window.location.href="index.html";
        }else{
            alert("el correo electronico o la contraseña no son validos");
        }
     })
     function validarFormulario() { 
        // Obtenemos los valores del formulario 
        const correoElectronico = document.querySelector("input[name='correo_electronico']").value;
         const contraseña = document.querySelector("input[name='contraseña']").value; 
         // Validamos el correo electrónico 
         const correoValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correoElectronico); 
         // Validamos la contraseña
          const contraseñaValida = contraseña === "76233375"; 
          // Si el correo electrónico y la contraseña son válidos 
          if (correoValido && contraseñaValida) { 
            return true; 
        } else {
             return false; 
            }
         }
         document.querySelector("form").addEventListener("submit",function(e) {
            e.preventDefault();
            const valido =validarFormulario();
            if (valido) {
                window.location.href="PRINCIPAL.html";
            }else{
                alert("el correo electronico o la contraseña no son validos");
            }
         })