$(document).ready(main);

var estado = true;

function main(){
	$('header').click(function(){
		$('nav').toggle();

		/*
		$('nav').toggle("slow", function() {
    		// Animation complete.
  		});
		
		$('nav').animate({
            height: 'toggle'
        });

		
		if(estado==true){
			$('nav').fadeIn( "slow", function() {
    			// Animation complete
  			});
  			estado = false;
		}else{
			$('nav').fadeOut( "slow", function() {
    			// Animation complete
  			});
  			estado = true;
		}
		*/
	});
};