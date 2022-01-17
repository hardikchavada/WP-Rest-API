let restbtn = document.getElementById("rest-btn");
let mydiv = document.getElementById("rest-div");

const fetchapi = ()=>{
    let url = "https://appsbizzhost.com.au/quality1/wp-json/wp/v2/posts";
    let mydiv = document.getElementById("rest-div");
    let divdata = '';
            fetch(url)
            .then(function (response) {
                return response.json();
            }).
            then(function(data) {
                console.log(data);
                for(i=0; i < data.length; i++){
                    divdata += `<a href="${data[i].link}">` ;
                    divdata += `<h2> ${data[i].title.rendered} </h2>`;
                    divdata += `</a>`;
                }
                mydiv.innerHTML = divdata;
                
            });
}