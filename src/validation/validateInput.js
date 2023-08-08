const validateInput = (data) => {
    const errors = {}
    const { name,email,password,confirm_password } = data
    if (!name) {
        errors.name = 'Name is required'
    }
    if (!email) {
        errors.email = 'Email is required'
    }
    if (!email) {
        errors.email = 'Email is required'
    }
    if (!password) {
        errors.password = 'Password is required'
    } 
    if (!(password === confirm_password)) {
        errors.confirm_password = 'Password does not match!'
    }

    if (!confirm_password) {
        errors.confirm_password = 'Confirm password is required'
    }  
    
   
    return {
        isInvalid: Object.keys(errors).length > 0,
        errors:errors,
    }
}
export default validateInput;