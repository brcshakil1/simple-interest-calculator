function compute() {
    const principal  = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const interest = principal * years * rate / 100;
    const amount = parseInt(principal) + parseInt(interest);
    const result = document.getElementById("result");

    const year = new Date().getFullYear() + parseInt(years);
    if(principal <= 0) {
        alert("Please enter a positive number");
        document.getElementById('principal').focus();
    }
    else {
        result.innerHTML = "If you deposit $" + principal + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of $" + amount + ",\<br\>in the year " + year + "\<br\>";
    }
    
}

function updateRate() {
    const rateval = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText = rateval;
}
        