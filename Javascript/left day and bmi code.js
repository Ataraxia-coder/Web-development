function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    
    var left_year = 80 - age
    var left_month = left_year *12
    var left_weeks = left_year * 52
    var left_days = left_year *365
    console.log('you have ' + left_days );
    
    
    
/*************Don't change the code below**********/
}
lifeInWeeks(30)

function bmiCalculator(weight, height){
    var bmi_value = weight / Math.pow(height,2);
    return Math.round(bmi_value);
}


bmiCalculator(82, 1.76)



