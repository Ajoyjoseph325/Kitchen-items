let kitchenInput=document.getElementById("kitchen-input");
let addBtn=document.getElementById("add-btn");
let kitchenItemList=document.getElementById("kitchen-item-list");
function addKitchenItems()
{
let kitchenInputData = kitchenInput.value;


let li=document.createElement('li');
li.innerText=kitchenInputData;
kitchenItemList.appendChild(li);
kitchenInput.value="";
kitchenInput.focus();

let trashBtn=document.createElement("i");
let editBtn=document.createElement("i");
editBtn.classList.add("fas","fa-edit");
trashBtn.classList.add("fas","fa-trash");
li.appendChild(editBtn); 
li.appendChild(trashBtn);
  

}


function delitem(event){
    console.log(event);
    if(event.target.classList[1]==='fa-trash'){
        let item=event.target.parentElement;
        item.remove();
    }
    if(event.target.classList[1]==='fa-edit'){
        let item=event.target.parentElement;
         kitchenInput.value=`${item.innerText}.`;
         item.remove();
        




    }

    
}


addBtn.addEventListener('click',addKitchenItems);
kitchenItemList.addEventListener('click',delitem);

