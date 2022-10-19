// Tomo los elementos del HTML
const inputEmail = document.getElementById('email');
const inputAsunto = document.getElementById('asunto');
const inputMensaje = document.getElementById('mensaje');
const formulario = document.getElementById('enviar-mail');
const btnReset = document.getElementById('resetBtn');
const alerta = document.createElement('p');
const spinner = document.getElementById('spinner');

// Declaro event listeners
document.addEventListener('DOMContentLoaded', () => {

    // Reset form
    btnReset.addEventListener('click', () => {

        reiniciarForm();
        
    })
    
    // Valido si el mail es correcto
    inputEmail.addEventListener('blur', () => {

 
        if(validarMail()){

            inputEmail.style.border = 'solid 3px green';

        }else{

            inputEmail.style.border = 'solid 3px red';
        }

    });

    // Valido si el asunto es correcto
    inputAsunto.addEventListener('blur', () => {


        if(validarAsunto()){

            inputAsunto.style.border = 'solid 3px green';


        }else{

            inputAsunto.style.border = 'solid 3px red';
        }

    })

    // Valido si el mensaje es correcto
    inputMensaje.addEventListener('blur', () => {

        if(validarMensaje()){

            inputMensaje.style.border = 'solid 3px green';


        }else{

            inputMensaje.style.border = 'solid 3px red';
        }

    })

    // Valido los tres campos y si son correctos habilito el boton Enviar
    formulario.addEventListener('mouseover', () => {

        if(validarMail() && validarAsunto() && validarMensaje()){
            document.getElementById('enviar').classList.remove('cursor-not-allowed', 'opacity-50');
            document.getElementById('enviar').disabled  = false;
        } else{
            document.getElementById('enviar').classList.add('cursor-not-allowed', 'opacity-50');
            document.getElementById('enviar').disabled  = true;
        }
    })

    // Event listener para el spinner
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        spinner.classList.remove('hidden');
        spinner.classList.add('flex');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            reiniciarForm();

            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-600', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mail enviado correctamente';
            
            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);
        }, 3000);

    })
})

function validarMail() {
    let email = inputEmail.value;
    
    if(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(email)){

        return true;

    } else{

        return false;
    }
}

function validarAsunto(){
    let asunto = inputAsunto.value;

        if(asunto.length >= 1){

            return true;
        } else {

            return false;
        }
}

function validarMensaje(){
    let mensaje = inputMensaje.value;

        if(mensaje.length >= 1){

            return true;
        } else {

            return false;
        }
}

function reiniciarForm() {
    inputEmail.value = '';
    inputEmail.style.border = 'solid 3px red';
    inputAsunto.value = '';
    inputAsunto.style.border = 'solid 3px red';
    inputMensaje.value = '';
    inputMensaje.style.border = 'solid 3px red';
}