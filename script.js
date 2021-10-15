const resetbutton = document.getElementById('Reset-button')
const oldLi = document.getElementById('custom-button')
const newLi= document.createElement('li')
newLi.innerHTML='<input type="text" id="custom-input">'
const percentageList=document.getElementById('SelectPercentage')
const bill=document.getElementById('bill-input')
const percentagebutton=document.getElementsByClassName('percentage-button')
var billvalue
var tippercentage,tipamount,person=1
const tipperson=document.getElementById('tip-person')
const totalperson=document.getElementById('Total-person')
const NumberOfPeople=document.getElementById('number-persons')
const inputcustom=document.createElement('input')
resetbutton.addEventListener('click',()=>{
    tippercentage=null
    tipamount=null
    person=1
    bill.value=''
    NumberOfPeople.value=''
    tipperson.innerHTML='<i class="fas fa-dollar-sign"></i>00'
    totalperson.innerHTML='<i class="fas fa-dollar-sign"></i>00'
    newLi.parentElement.appendChild(oldLi)
    newLi.remove()

    })

bill.addEventListener('keyup',(event)=>{
billvalue=event.target.value
tipamount=parseInt(tippercentage)*parseInt(billvalue)/100
tipperson.innerHTML=`<i class="fas fa-dollar-sign"></i>${(tipamount/person).toFixed(2)}`
totalperson.innerHTML=`<i class="fas fa-dollar-sign"></i>${((tipamount+parseInt(billvalue))/person).toFixed(2)}`
})

for(let i=0;i<5;i++)
percentagebutton[i].addEventListener('click',()=>{
    tippercentage=percentagebutton[i].innerText
    tipamount=parseInt(tippercentage)*parseInt(billvalue)/100
tipperson.innerHTML=`<i class="fas fa-dollar-sign"></i>${(tipamount/person).toFixed(2)}`
totalperson.innerHTML=`<i class="fas fa-dollar-sign"></i>${((tipamount+parseInt(billvalue))/person).toFixed(2)}`
    
})
oldLi.addEventListener('click',()=>{
    oldLi.parentElement.appendChild(newLi)
    oldLi.remove()
    newLi.addEventListener('keyup',(event)=>{
        tippercentage=parseInt(event.target.value)
        tipamount=tippercentage*parseInt(billvalue)/100
        tipperson.innerHTML=`<i class="fas fa-dollar-sign"></i>${(tipamount/person).toFixed(2)}`
totalperson.innerHTML=`<i class="fas fa-dollar-sign"></i>${((tipamount+parseInt(billvalue))/person).toFixed(2)}`
    })
})


NumberOfPeople.addEventListener('keyup',(event)=>{
    person=parseInt(event.target.value)
    tipperson.innerHTML=`<i class="fas fa-dollar-sign"></i>${(tipamount/person).toFixed(2)}`
totalperson.innerHTML=`<i class="fas fa-dollar-sign"></i>${((tipamount+parseInt(billvalue))/person).toFixed(2)}`
})
