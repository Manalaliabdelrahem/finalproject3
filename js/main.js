let input =document.getElementById('inbutdata') ;
let button =document.getElementById('addbtn') ;
let div =document.getElementById('alltasks') ;
let noTask =document.getElementById('notasks') ;

let addNewtask =()=>{

   let data = input.value;

if(data.trim() =='' || (data.length <3) || (data.length >20)){
    alert('please Enter valied data')

}else{
    div.innerHTML += `<div class="no">${data}
    <button class="btn">Delet</button>
    </div>`

    noTask.classList.add('none')
    input.value =''
}

//    let newDiv = document.createElement("div");
//    newDiv.classList.add('no');
//    newDiv.classList.add('card');
//    newDiv.append(data);
//    alltasks.append(newDiv);


}


button.addEventListener('click' ,addNewtask );

document.addEventListener('click' , (e)=>{

    if(e.target.classList.contains('btn')){
        e.target.parentElement.remove();
    }
});
