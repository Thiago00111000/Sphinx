const inputElement = document.querySelector("#input");
const searchBtn = document.querySelector("#search");
const numberElement = document.querySelector("#Numero");



addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const Data =  inputElement.value;
        alert(Data);
        console.log(Data);  
    }
  })
  