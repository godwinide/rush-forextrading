$(function(){

	calc();

	$('#calc_plan').on('change', calc);
	$('#inv_amount').bind('change keyup', calc).on('keypress', isNumberKey);

});

function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if (charCode > 31 && (charCode < 45 || charCode > 57))
		return false;
	return true;
}

function calc() {

	var plan = $('#calc_plan').val();
	var amount = $('#inv_amount').val();
	var percent;

	switch (plan) {
		case '1':
			switch (true) {
				case (amount<10):
					percent = 0;
					break;
				case (amount>20000):
					percent = 0;
					break;
				case (amount<=20000):
					percent = 160;
					break;	

			   default:
					percent = 0;
			}
			break;
		case '2':
			switch (true) {
				case (amount<100):
					percent = 0;
					break;
				case (amount>20000):
					percent = 0;
					break;
				case (amount<=20000):
					percent = 150;
					break;	
					
				

	
					
			   default:
					percent = 0;
			}
			break;
		case '3':
			switch (true) {
				case (amount<300):
					percent = 0;
					break;
				case (amount>20000):
					percent = 0;
					break;
				case (amount<=20000):
					percent = 175;
					break;	
				
					
			   default:
					percent = 0;
			}
			break;
			
			case '4':
			switch (true) {
				case (amount<20):
					percent = 0;
					break;
				case (amount>20000):
					percent = 0;
					break;
				case (amount<=20000):
					percent = 250;
					break;	
					
			   default:
					percent = 0;
			}
			break;
			
			
			
			case '5':
			switch (true) {
				case (amount<500):
					percent = 0;
					break;
				case (amount>20000):
					percent = 0;
					break;
				case (amount<=20000):
					percent = 400;
					break;	
				
					
			   default:
					percent = 0;
			}
			break;
			
			
			case '6':
			switch (true) {
				case (amount<10):
					percent = 0;
					break;
				case (amount>20000):
					percent = 0;
					break;
				case (amount<=20000):
					percent = 102;
					break;	
				
					
			   default:
					percent = 0;
			}
			break;
			
			
			case '7':
			switch (true) {
				case (amount<50):
					percent = 0;
					break;
				case (amount>20000):
					percent = 0;
					break;
				case (amount<=20000):
					percent = 115;
					break;	
				
					
			   default:
					percent = 0;
			}
			break;
			
			
			case '8':
			switch (true) {
				case (amount<100):
					percent = 0;
					break;
				case (amount>20000):
					percent = 0;
					break;
				case (amount<=20000):
					percent = 140;
					break;	
				
					
			   default:
					percent = 0;
			}
			break;
			
			
			case '9':
			switch (true) {
				case (amount<200):
					percent = 0;
					break;
				case (amount>20000):
					percent = 0;
					break;
				case (amount<=20000):
					percent = 180;
					break;	
				
					
			   default:
					percent = 0;
			}
			break;
	}

$('#assign_per').text(percent+'%');
	var total = amount*percent/100;
	$('#total_return').text('$'+total.toFixed(2));
	
	if(total <= 0){
		$('#net_profit').text('0.00');
	}else{
		$('#net_profit').text('$'+(total-amount).toFixed(2));
	}
	
	
	

}