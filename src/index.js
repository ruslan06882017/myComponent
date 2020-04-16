let btn = document.getElementById("add-task");
let table = document.getElementById("action-plan-table");

let actionPlan = document.getElementById("actionPlan").value;
let assignedTo = document.getElementById("assignedTo");
let selectedOption = assignedTo.options[assignedTo.selectedIndex].value;
let deadline = document.getElementById("deadline").value;

/* console.log('---VALUES---');
console.log(actionPlan, selectedOption, deadline); */

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    console.log(actionPlan.value);

    let tr = document.createElement("tr");

    let tdId = document.createElement("td");
    tdId.appendChild(document.createTextNode("1"));
    tr.appendChild(tdId);

    let tdActionPlan = document.createElement("td");
    tdActionPlan.appendChild(document.createTextNode(actionPlan));
    tr.appendChild(tdActionPlan);

    let tdAssignedTo = document.createElement("td");
    tdAssignedTo.appendChild(document.createTextNode(selectedOption));
    tr.appendChild(tdAssignedTo);

    let tdDeadline = document.createElement("td");
    tdDeadline.appendChild(document.createTextNode(deadline));
    tr.appendChild(tdDeadline);

    let tdAction = document.createElement("td");
    let removeAction = document.createElement("a");
    removeAction.innerHTML = '<i class="fa fa-remove" style="font-size:24px"></i>';

    tdAction.appendChild(removeAction);
    tr.appendChild(tdAction);

    table.appendChild(tr);

});

document.addEventListener("click", function(e){
    //console.log(`Clicked on ${e.target.tagName}`);
})