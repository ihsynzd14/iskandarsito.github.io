$(document).ready(function(){
    $('#purpose').on('change', function() {
      if ( this.value == '1')
      //.....................^.......
      {
                         $("#yousef").hide();
                      $("#babakar").hide();
                    $("#claire").hide();   
                  $("#fabienne").hide();
                $("#anne").hide();
              $("#juliette").hide();
            $("#dumont").hide();
          $("#hubert").hide();
        $("#assane").show();
      }
      else  if ( this.value == '2'){
        $("#yousef").hide();
        $("#babakar").hide();
        $("#claire").hide();   
        $("#fabienne").hide();
        $("#anne").hide();
        $("#juliette").hide();
        $("#dumont").hide();
        $("#hubert").show();
        $("#assane").hide();
        
      }

      else  if ( this.value == '3')      {  
        $("#yousef").hide();
        $("#babakar").hide();
        $("#claire").hide();   
        $("#fabienne").hide();
        $("#anne").hide();
        $("#juliette").hide();
        $("#dumont").show();
        $("#hubert").hide();
        $("#assane").hide();
        
      }

      else  if ( this.value == '4')      {  
        $("#yousef").hide();
        $("#babakar").hide();
        $("#claire").hide();   
        $("#fabienne").hide();
        $("#anne").hide();
        $("#juliette").show();
        $("#dumont").hide();
        $("#hubert").hide();
        $("#assane").hide();
        
      }

      else  if ( this.value == '5')      {  
        $("#yousef").hide();
        $("#babakar").hide();
        $("#claire").hide();   
        $("#fabienne").hide();
        $("#anne").show();
        $("#juliette").hide();
        $("#dumont").hide();
        $("#hubert").hide();
        $("#assane").hide();
        
      }

      else  if ( this.value == '6')      {  
        $("#yousef").hide();
        $("#babakar").hide();
        $("#claire").hide();   
        $("#fabienne").show();
        $("#anne").hide();
        $("#juliette").hide();
        $("#dumont").hide();
        $("#hubert").hide();
        $("#assane").hide();
        
      }

      else  if ( this.value == '7')      {  
        $("#yousef").hide();
        $("#babakar").hide();
        $("#claire").show();   
        $("#fabienne").hide();
        $("#anne").hide();
        $("#juliette").hide();
        $("#dumont").hide();
        $("#hubert").hide();
        $("#assane").hide();
        
      }

      else  if ( this.value == '8')      {  
        $("#yousef").hide();
        $("#babakar").show();
        $("#claire").hide();   
        $("#fabienne").hide();
        $("#anne").hide();
        $("#juliette").hide();
        $("#dumont").hide();
        $("#hubert").hide();
        $("#assane").hide();
        
      }

      else  if ( this.value == '9')      {  
        $("#yousef").show();
        $("#babakar").hide();
        $("#claire").hide();   
        $("#fabienne").hide();
        $("#anne").hide();
        $("#juliette").hide();
        $("#dumont").hide();
        $("#hubert").hide();
        $("#assane").hide();
        
      }

       else  
      {
        $("#yousef").hide();
        $("#babakar").hide();
        $("#claire").hide();   
        $("#fabienne").hide();
        $("#anne").hide();
        $("#juliette").hide();
        $("#dumont").hide();
        $("#hubert").hide();
        $("#assane").hide();
      }
    });
});