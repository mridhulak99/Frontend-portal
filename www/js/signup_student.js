$(document).ready(function () {

    $('#signuppage').validate({
        rules: {
            username: {
                required: true,
                minlength: 5
            },
            password: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email: true
            },
            password1: {
                required: true,
                minlength: 5
            },
            college: {
                required: true,
                minlength: 5
            }
        }
    });

});