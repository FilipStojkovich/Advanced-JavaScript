$(document).ready(function() {
    let clickBtn = document.getElementById("clickBtn");
    let result = document.getElementById("personName");
    let printStats = document.getElementById("printStats");

    clickBtn.addEventListener("click", function() {
        $.ajax({
            url: "https://swapi.dev/api/people/1",
            success: function(response) {
                console.log("Success!");
                console.log(response);
                result.innerHTML = "";
                result.innerHTML = (`${response.name}`);
                printStats.innerHTML += `
                <tr>
                <th>Height</th>
                <th>Weight</th>
                <th>Hair Color</th>
                <th>Eye Color</th>
                </tr>
                <tr>
                <td>${response.height}</td>
                <td>${response.mass}</td>
                <td>${response.hair_color}</td>
                <td>${response.eye_color}</td>
                </tr>`;
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});