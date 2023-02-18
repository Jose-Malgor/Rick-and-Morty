
export default function validation(userData){
    const errors ={};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPass = /^(?=.*[0-9])(?!.* ).{6,10}$/
   
    if (!regexEmail.test(userData.username)) {
        errors.username = 'Debe ser un correo electrónico';
      }

      if (!userData.username) {
        errors.username = 'Se requiere un nombre de usuario';
      }

      if (userData.username.length > 35) {
        errors.username = 'El nombre de usuario debe tener menos de 35 caracteres';
      }

      if (!regexPass.test(userData.password)) {
        errors.password = 'La contraseña tiene que tener una longitud entre 6 y 10 caracteres y debe contener al menos un número';
      }
      return errors;
}
