$(document).ready(function(){
    // Event is input change
    $('input').on('change keydown paste input', function(){
        // setup variables
        var inputWidth,
            characterWidth = 20,
            output      = $('#output').val(), 
            input       = $('#input').val(), 
            resolution;
        
        // Change input size depending on the amount of characters inside the input field
        // If input field is empty, default to 2 characters
        if ($(this).val().length > 0){
            inputWidth = parseInt($(this).val().length * characterWidth);
            $(this).width(inputWidth);
        } else {
            $(this).attr('style', '');
        }
        // Show resolution only if the #input and #output input fields are not empty
        if ($('#output').val() && $('#input').val()){
            // If no specific resolution is entered, use default.
            if ($('#resolution').val()){
                resolution = $('#resolution').val();
            } else {
                resolution = 0.3533;
            }
            //Display the resolution information
            result = parseFloat((output / (input * resolution)) * 100).toFixed(2);
            $('.results').css('opacity', 1);
            $('#result').html(result);
        }
    });
});