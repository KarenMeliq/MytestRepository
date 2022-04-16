

let users = [

    {
        name:"Arman Avetisyan",
        country:"Armenia",
        age:25,
        gender:"male",
    },
    {
        name:"John Smith",
        country:"USA",
        age:33,
        gender:"male",
    },

    {
        name:"Julie",
        country:"USA",
        age:24,
        gender:"female",
    },

    {
        name:"Natasha Antonovna",
        country:"Russia",
        age:45,
        gender:"female",
    },
];

let usersBox = document.querySelector("#users_box");
let searchButton = document.querySelector("#search-button");
let searchText = document.querySelector("#search-text");
let filtersNav = document.querySelector("#filters_nav");
let filtersUpdateBtn = document.querySelector("#update-filters");


filtersUpdateBtn.addEventListener("click", function(){

    let currentCountry = document.querySelector("#country_filter").value.toLocaleLowerCase();
    let currentGender = document.querySelector("#gender_filter").value.toLocaleLowerCase();
    let filteredUsers = users.filter(function(user){
        return (user.country.toLocaleLowerCase().includes(currentCountry) && 
                user.gender.toLocaleLowerCase().includes(currentGender) &&
                user.name.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase())
             );
    });

    usersBox.innerHTML = "";

    for(user of filteredUsers)
    {

    let userElement = document.createElement("DIV");
    userElement.classList.add("user_item");
    userElement.innerHTML = `
    <h2> ${user.name} </h2>
    <p>"Country": ${user.country} </p>
    <p>"Age": ${user.age} </p>
    <p>"Gender": ${user.gender} </p>
    `;

    usersBox.appendChild(userElement);


    }

});

searchButton.addEventListener("click", function(){

    let filteredUsers = users.filter(function(user){

        return (user.name.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase()) ||
                user.country.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase()) 
                
        );
    });

    usersBox.innerHTML = "";

    for(user of filteredUsers)
    {

    let userElement = document.createElement("DIV");
    userElement.classList.add("user_item");
    userElement.innerHTML = `
    <h2> ${user.name} </h2>
    <p>"Country": ${user.country} </p>
    <p>"Age": ${user.age} </p>
    <p>"Gender": ${user.gender} </p>
    `;

    usersBox.appendChild(userElement);


    }
});




    filtersNav.addEventListener("click",function(){
        let filtersBox = document.querySelector("#filters");
            if (filtersBox.style.display === ""  || filtersBox.style.display === "none") {

                filtersBox.style.display = "block"
                
            }else{
                filtersBox.style.display = "none";
            }
            
        
        
    });





    
//some test 








