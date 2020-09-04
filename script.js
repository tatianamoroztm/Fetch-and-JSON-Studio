window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(response=>response.json())
    .then(data=>displayAstronauts(data));
});
function displayAstronauts(data){
    let output = "";
    output +="<p> Number of results: " + data.length+"</p>";

    for (let i = 0; i< data.length; i++){
        output +="<div class = 'astronaut'>";
        output +="<div class = 'bio'>";
        output +="<h3>"+ data[i].firstName+" "+ data[i].lastName+"</h3>";
        output +="<ul>";
        output +="<li> Hours in space: "+data[i].hoursInSpace+"</li>";
        if (data[i].active){
            output +="<li style = 'color: green'> Active: "+data[i].active+"</li>";
        }
        else {
            output +="<li> Active: "+data[i].active+"</li>";
        }
        
        output +="<li> Skills: ";
        for (let j = 0; j<data[i].skills.length - 1; j++){
            output += data[i].skills[j]+", ";
        }
        output += data[i].skills[data[i].skills.length-1];
        output +="</li>";
        output +="</ul>";
        output +="</div>";
        output +="<img class = 'avatar' src = '"+data[i].picture+"'>";
        output +="</div>";
    }
    document.getElementById("container").innerHTML= output;
}