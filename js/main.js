$(document).ready(function(){
    $('#calculator').submit(function(e){
        e.preventDefault();
        var output      = $('#output').val(), 
            input       = $('#input').val(), 
            resolution;
        if ($('#resolution').val()){
            resolution = $('#resolution').val();
        } else {
            resolution = 0.3533;
        }
        result = parseFloat((output / (input * resolution)) * 100).toFixed(2);
        $('#result').html(result);
    });
    
    $('input').on('hange keydown paste input', function(){
        
        
        
        var inputWidth;
        var characterWidth = 20;
        
        if ($(this).val().length > 0){
            inputWidth = parseInt($(this).val().length * characterWidth);
            $(this).width(inputWidth);
        } else {
            $(this).attr('style', '');
        }
        
        
        
    });
});