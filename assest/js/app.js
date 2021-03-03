let form = document.querySelector("#form")
let serch = document.querySelector("#serch")
let search = document.querySelector("#srch")
let out_put = document.querySelector(".it-con")

 form.addEventListener("submit",function(e){
    e.preventDefault() 

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search.value}`)
    .then( get_json => get_json.json() )
    .then( data => {
        if(data.meals){
           var out = ''
            data.meals.forEach( ml => {
                out += `
                    <div id="single-cart" >
                        <div id="tittle" >
                            <h2>${ml.strMeal}</h2>    
                        </div>
                        <div id="image" >
                            <img src="${ml.strMealThumb}" alt="recipe image" />
                        </div>
                    </div>
                `
                out_put.innerHTML = out
            });
        }
        else{
            alert("no recipe found !! :( ")
        }
    })
 })
