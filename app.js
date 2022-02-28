

const foodSearch= () =>{

    // console.log(hellow);
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    const inputError = document.getElementById('input-error');
    console.log(inputText);

    if(inputText === "number" || inputText ==""){
        inputError.innerText = "Please Give a Food Name";
        inputField.value = '';
        inputField.textContent ='';
       
    }else if( inputText <=0){
        inputError.innerText = "Please Give a Food Name";
        inputField.value = '';
        inputField.textContent ='';
       
    }else{
        // inputError.innerText ='';
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
        .then(res => res.json())
        .then(data => displayFood(data.meals));
       
        inputError.innerText = "";
    }
    
}


const displayFood = meals => {
    const searchResult = document.getElementById('cards-container');
    searchResult.textContent = '';
    for( const meal of meals){
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`<div class="card mb-5">
         <img src="${meal.strMealThumb}" class="card-img-top h-25" alt="...">
         <div class="card-body">
           <h5 class="cards-title">${meal.strMeal}</h5>
           <p class="cards-text text-secondary">${meal.strInstructions.slice(0,150)}</p>
           <div class="cards-footer">
               <button class="buy-now">Buy Now</button>
               <button class="detail" onclick = "cardDetails('${meal.idMeal}')">Details</button>
           </div>
         </div>
       </div>`
         searchResult.appendChild(div);

        }
    
}


const cardDetails = (idDetails) =>{

    const url =  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idDetails}`
    fetch (url)
    .then(res => res.json())
    .then(data => showIdMealDetails(data.meals[0]))
  }
  
  const showIdMealDetails = meal =>{
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent ='';
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML =`<div class="card-info mb-5 mx-auto">
            <div class="mx-auto">
            <img src="${meal.strMealThumb}" class=" detail-img" alt="...">
           </div>
         <div class="card-body">
           <h5 class="cards-title">${meal.strMeal}</h5>
           <p class="cards-text">${meal.strInstructions.slice(0,150)}</p>
           <div class="cards-footer">
               <button class="buy-now">Order Now</button>
               
           </div>
         </div>
       </div>`
     mealDetails.appendChild(div);
  }