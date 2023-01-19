let titleElem = document.querySelector("#title");
let priorityElem = document.querySelector("#priority")
let colorElem = document.querySelector("#color");
let descriptionElem = document.querySelector("#desc");
let createBtn = document.querySelector("#createBtn");
let showBtn = document.querySelector("#showBtn");
let result = document.querySelector("#result");
let reminders = [];

function Reminder(title, priority, color, description) {
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description = description;
};

createBtn.addEventListener("click", function() {
    reminders.push(new Reminder(titleElem.value, priorityElem.value, colorElem.value, descriptionElem.value));
    console.log(reminders);
});

showBtn.addEventListener("click", function() {
    let table = document.createElement("table");
    let headerRow = document.createElement("tr");
    let titleHeader = document.createElement("th");
    titleHeader.innerHTML = "Title";
    let priorityHeader = document.createElement("th");
    priorityHeader.innerHTML = "Priority";
    let descriptionHeader = document.createElement("th");
    descriptionHeader.innerHTML = "Description";
    headerRow.appendChild(titleHeader);
    headerRow.appendChild(priorityHeader);
    headerRow.appendChild(descriptionHeader);
    table.appendChild(headerRow);

    for (const reminder of reminders) {
            let row = document.createElement("tr");
            let title = document.createElement("td");
            title.innerHTML = reminder.title;
            title.style.color = reminder.color;
            let priority = document.createElement("td");
            priority.innerHTML = reminder.priority;
            let description = document.createElement("td");
            description.innerHTML = reminder.description;
            row.appendChild(title);
            row.appendChild(priority);
            row.appendChild(description);
            table.appendChild(row);
          };
          document.body.appendChild(table);
  });
