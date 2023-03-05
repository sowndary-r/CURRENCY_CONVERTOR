let btn=document.getElementById('btn');
let select=document.querySelectorAll('.currency');
console.log(select);
let input=document.getElementById('input');
let result=document.getElementById('result');
fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>displaydropdown(res));

function displaydropdown(res)
{
    let val=Object.entries(res);
    for(let i=0;i<val.length;i++)
    {
        let opt=`<option value=${val[i][0]}>${val[i][0]}</option>`;
         select[0].innerHTML +=  opt;
         select[1].innerHTML +=  opt;
    }
}
btn.addEventListener('click',()=>{
    let curr1=select[0].value;
    let curr2=select[1].value;
    let inpval = input.value;
    if(curr1===curr2)
    alert('Please select different currencies');
    else
    convert(curr1,curr2,inpval);
})

function convert(curr1,curr2,inputVal){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
      document.getElementById('result').value = Object.values(data.rates)[0]
    });}
