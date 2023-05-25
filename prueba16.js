function corporalMass(height, weight, age, gender) {
    let imc = weight/ (height * height)  // Calculando el indice corporal de la persona
    switch (gender) {
        case 'Female':
            if (age >= 18 && age <= 24) {
                if (imc >= 18.5 && imc <= 23.9) {
                    console.log('Estas saludable y tu indice de masa corporal es', imc)
                }
                else {
                    console.log('No estas saludable y tu indice de masa corporal es', imc)
                }
            }
            if (age >= 25 && age <= 34) {
                if (imc >= 18.5 && imc <= 24.9) {
                    console.log('Estas saludable y tu indice de masa corporal es', imc)
                }
                else {
                    console.log('No estas saludable y tu indice de masa corporal es', imc)
                }
            }
            if (age >= 35 && age <= 55) {
                if (imc >= 18.5 && imc <= 25.9) {
                    console.log('Estas saludable y tu indice de masa corporal es', imc)
                }
                else {

                }
            }
        case 'Male':
            if (age >= 18 && age <= 24) {
                if (imc >= 18.5 && imc <= 24.9) {
                    console.log('Estas saludable y tu indice de masa corporal es', imc)
                }
                else {
                    console.log('No estas saludable y tu indice de masa corporal es', imc)
                }
            }
            if (age >= 25 && age <= 34) {
                if (imc >= 18.5 && imc <= 25.9) {
                    console.log('Estas saludable y tu indice de masa corporal es', imc)
                }
                else {
                    console.log('No estas saludable y tu indice de masa corporal es', imc)
                }
            }
            if (age >= 35 && age <= 55) {
                if (imc >= 18.5 && imc <= 26.9) {
                    console.log('Estas saludable y tu indice de masa corporal es', imc)
                }
                else {
                    console.log('No estas saludable y tu indice de masa corporal es', imc)
                }
            }

    }

}

/* let height1 = prompt('Cual es tu altura', '') // solicitando la informacion al usuario sobre su altura
let height = parseInt(height1) // convirtiendo la informacion del usuario de texto a numero sobre su altura
let weight1 = prompt('Cual es tu peso', '')// solicitando la informacion al usuario sobre su peso
let weight = parseInt(weight1) // convirtiendo la informacion del usuario de texto a numero sobre su peso
let age1 = prompt('Cual es tu edad', '')// solicitando la informacion al usuario sobre su edad
let age = parseInt(age1) // convirtiendo la informacion del usuario de texto a numero sobre su edad
let gender = prompt('Cual es tu genero', '')// solicitando la informacion al usuario sobre su genero */
corporalMass(1.70, 73, 32, 'Male')