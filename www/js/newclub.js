$(document).ready(function () {

    $('#newclubform').validate({
        rules: {
            clubname: {
                required: true,
                minlength: 5
            },
            teamno: {
                required: true,
                min: 1,
                number: true
            },
            proof: {
                required: true
            }
        }
    });

});