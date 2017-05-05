//Check current month with user given month 
function Check(Equal_to, Eq_Value_and_Type)
{
	
	var inMonth 	= document.getElementById('date').value;
	var result_one 	= document.getElementById('result_one'); 
	var result_two	= document.getElementById('result_two'); 
	
		
	//Preparing month
	var curDate		= new Date();
	var curMonth 	= curDate.getMonth() + 1;
	
	
	//Using ==
	if(inMonth == curMonth && Equal_to)
	{
		result_one.innerHTML = "Awesome, the month is correct!"
	}
	else if(inMonth != curMonth && Equal_to)
	{
		result_one.innerHTML = "The month is incorrect, but you can try again!"
	}
	//Using === (shouldn`t work because "inMonth === curMonth"  are not the same type!)
	else if(inMonth === curMonth && Eq_Value_and_Type)
	{
		result_two.innerHTML = "Awesome, the month is correct!"
	}
	else
	{
		result_two.innerHTML = "The month is incorrect! Please visit the wiki for more information."
	}
	
	
}

