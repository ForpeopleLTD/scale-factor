$(document).ready(function(){
    


    $('#calculator').submit(function(e){
        
        e.preventDefault();
        
        var output      = $('#output input').val(), 
            input       = $('#input input').val(), 
            resolution;
        
        
        if ($('#resolution input').val()){
            resolution = $('#resolution input').val();
        } else {
            resolution = 0.3533;
        }
        
        
        result = parseFloat(output / (input * resolution)).toFixed(2);
        
        $('#result span').html(result);
        
        
    });
    
    
    
});