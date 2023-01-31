$(document).ready(function() {
    let table = document.getElementById("starWarsTable");
    let btn = document.getElementById("getPlanets");
    let url = "https://swapi.dev/api/planets/?page=1";
    let result = document.getElementById("result");

    function getPlanets(url) {
        btn.addEventListener("click", function() {
            $.ajax({
                url: `${url}`,
                success: function(response) {
                    console.log("Success");
                    console.log(response);
                },
                error: function(error) {
                    console.log(error);
                }
            });
        });
    };
    function printPlanets(url) {
        btn.addEventListener("click", function() {
          $.ajax({
            url: `${url}`,
            success: function(response) {
                let nextBtn = document.createElement("button");
                nextBtn.innerHTML = "Next 10";
                result.appendChild(nextBtn);
                table.innerHTML += `
                <tr>
                <th>Planet Name</th>
                <th>Population</th>
                <th>Climate</th>
                <th>Gravity</th>
                </tr>
                `
                for(let planet of response.results) {
                    table.innerHTML += `
                    <tr>
                    <th>${planet.name}</th>
                    <th>${planet.population}</th>
                    <th>${planet.climate}</th>
                    <th>${planet.gravity}</th>
                    </tr>
                    `
                    }
                    nextBtn.addEventListener("click", function() {
                        table.innerHTML = "";
                        $.ajax({
                            url: "https://swapi.dev/api/planets/?page=2",
                            success: function(response) {
                                console.log(response);
                                table.innerHTML += `
                                <tr>
                                <th>Planet Name</th>
                                <th>Population</th>
                                <th>Climate</th>
                                <th>Gravity</th>
                                </tr>
                                `
                                for(let planet of response.results) {
                                    table.innerHTML += `
                                    <tr>
                                    <th>${planet.name}</th>
                                    <th>${planet.population}</th>
                                    <th>${planet.climate}</th>
                                    <th>${planet.gravity}</th>
                                    </tr>
                                    `
                                }
                                nextBtn.innerHTML = "Previous 10";
                                nextBtn.addEventListener("click", function() {
                                    $.ajax({
                                        url: `${url}`,
                                        success: function(response) {
                                            table.innerHTML = "";
                                            console.log(response);
                                            table.innerHTML += `
                                            <tr>
                                            <th>Planet Name</th>
                                            <th>Population</th>
                                            <th>Climate</th>
                                            <th>Gravity</th>
                                            <tr>
                                            `
                                            for(let planet of response.results) {
                                                table.innerHTML += `
                                                <tr>
                                                <th>${planet.name}</th>
                                                <th>${planet.population}</th>
                                                <th>${planet.climate}</th>
                                                <th>${planet.gravity}</th>
                                                </tr>
                                                `
                                                nextBtn.innerHTML = "Next 10";
                                            }
                                        }
                                    })
                                })
                            }
                        });
                    });
                },
                error: function(error) {
                    console.log(error);
                }
            });
        });
    };
    getPlanets(url);
    printPlanets(url);
});