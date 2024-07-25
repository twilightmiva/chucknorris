const randomJoke=document.querySelector(".random-joke");
console.log(randomJoke)
const type=document.querySelector(".type")
console.log(type)
const typeJoke=document.querySelector(".typeJoke")
console.log(typeJoke)
function fetchRandomJoke(){
    const url="https://api.chucknorris.io/jokes/random";
    console.log(url);
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        randomJoke.textContent=data.value
    })
    
}
fetchRandomJoke()









function fetchCategory(){
    const urlCategory="https://api.chucknorris.io/jokes/categories";
    console.log(urlCategory);
    fetch(urlCategory)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        data.map((category)=>{
const list=document.createElement("li");
list.classList.add("categoryItem")
console.log()
list.textContent=category
type.append(list)


        })
    })
}
fetchCategory()

type.addEventListener("click",function(e){

    if(e.target.classList.contains("categoryItem")){
        fetchCategoryJoke(e.target.textContent)
    }
})



function fetchCategoryJoke(jokeCategory){
    const url=`https://api.chucknorris.io/jokes/random?category=${jokeCategory}`;
    console.log(url);
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
typeJoke.textContent=data.value        
    })
    

}
