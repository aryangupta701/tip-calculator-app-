const resetbutton = document.getElementById('Reset-button')
const bill=document.getElementById('bill-input')
const percentagebutton=document.getElementsByClassName('percentage-button')
var billvalue
var tippercentage,tipamount,person=1
const tipperson=document.getElementById('tip-person')
const totalperson=document.getElementById('Total-person')
const NumberOfPeople=document.getElementById('number-persons')

resetbutton.addEventListener('click',()=>{
    tippercentage=null
    tipamount=null
    person=1
    bill.value=''
    NumberOfPeople.value=''
    tipperson.innerText='00'
    totalperson.innerText='00'
})

bill.addEventListener('keyup',(event)=>{
billvalue=event.target.value
tipamount=parseInt(tippercentage)*parseInt(billvalue)/100
tipperson.innerText=(tipamount/person).toFixed(2)
totalperson.innerText=((tipamount+parseInt(billvalue))/person).toFixed(2)
})
for(let i=0;i<5;i++)
percentagebutton[i].addEventListener('click',()=>{
    tippercentage=percentagebutton[i].innerText
    tipamount=parseInt(tippercentage)*parseInt(billvalue)/100
    tipperson.innerText=(tipamount/person).toFixed(2)
    totalperson.innerText=((tipamount+parseInt(billvalue))/person).toFixed(2)
    
})
percentagebutton[5].addEventListener('click',()=>{

})

NumberOfPeople.addEventListener('keyup',(event)=>{
    person=parseInt(event.target.value)
    tipperson.innerText=(tipamount/person).toFixed(2)
    totalperson.innerText=((tipamount+parseInt(billvalue))/person).toFixed(2)
})
