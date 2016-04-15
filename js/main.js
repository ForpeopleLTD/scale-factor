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
        
        
        result = output / (input * resolution);
        
        $('#result span').html(result);
        
        
    });
    
    
    
});