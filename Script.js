let bill=document.getElementById('bill')
const tipButtons=document.querySelectorAll(".tipButton")
let customTip=document.getElementById('customTip')
let amountDigit=document.getElementById('amountDigit')
let totalPeople=document.getElementById('totalPeople')
let perPeople=document.getElementById('perPeople')
const reset=document.getElementById('reset')
let totalAmount=0;
let billAmount=0;
 for(let tipButton of tipButtons){
    tipButton.addEventListener('click',(e)=>{
        billAmount = parseFloat(bill.value);
        let tipPercentage = parseFloat(e.target.innerHTML);

        switch(tipPercentage){
            case 5: totalAmount = billAmount + billAmount * (0.05);
            console.log(totalAmount);
            break;
            case 10: totalAmount=billAmount+billAmount*(0.10)
            console.log(totalAmount);
            break;
            case 15: totalAmount=billAmount+billAmount*(0.15)
            console.log(totalAmount);
            break;
            case 20: totalAmount=billAmount+billAmount*(0.2)
            console.log(totalAmount);
            break;
            case 50: totalAmount=billAmount+billAmount*(0.5)
            console.log(totalAmount);
            break;
        }

        amountDigit.innerHTML=totalAmount
    })
 }

function handleCustomTip(custom){
    billAmount = parseFloat(bill.value);
    totalAmount=billAmount+billAmount*(custom/100)
    amountDigit.innerHTML=`$${totalAmount}`
}

function handlePeople(people){
    if(people=='' || people==0){
        document.getElementById('peopleText').innerHTML='There must be minimun 1 person'
        perPeople.innerHTML="Invalid people"
    }else{
        perPeople.innerHTML=`$${totalAmount/people}`
    }
    
}

reset.addEventListener('click',()=>{
    bill.value=""
    customTip.value=""
    totalPeople.value=""
    perPeople.innerHTML="$0.00"
    amountDigit.innerHTML="$0.00"
})