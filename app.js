const searchButton = () =>{
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    const inputError = document.getElementById('input-error');
    console.log(inputText);

    if(inputText === "number" || inputText ==""){
        inputError.innerText = "Please Give a Food Name";
       
    }
    inputField.value = '';
   
}