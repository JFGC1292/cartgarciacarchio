import Swal from "sweetalert2"

export const validateData = (values) => {

    if (values.name.length < 4) {
        Swal.fire({
            icon: 'error',
            title: 'Nombre inválido'
        })
        return false
    }

    if (values.surname.length < 4) {
        Swal.fire({
            icon: 'error',
            title: 'Apellido inválido'
        })
        return false
    }

    if (values.email.length < 7) {
        Swal.fire({
            icon: 'error',
            title: 'Email inválido'
        })
        return false
    }

    if (values.emailConfirm !== values.email) {
        Swal.fire({
            icon: 'error',
            title: 'Los emails no coinciden'
        })
        return false
    }

    return true
}