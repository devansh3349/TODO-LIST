let btn1 = document.querySelector("#btn1");

let input = document.querySelector("input");

let list = document.querySelector("ul");

btn1.addEventListener("click",function(){

    let btn2 = document.createElement("button");
    btn2.classList.add("btn");
    btn2.innerText="Delete";

    btn2.addEventListener("click",function(){
        task.remove();
        console.log("Task successfully deleted!");
    })

    let task = document.createElement("li");
    let valv = input.value;
    if(valv.length !=0){
    task.innerText = valv;
    list.appendChild(task);
    task.append("   ");
    task.append(btn2);
    console.log("task successfully added!");
    console.log(`${input.value}`);
    }
    else{
        alert("task not mentioned!");
    }
    input.value = "";
    
})
