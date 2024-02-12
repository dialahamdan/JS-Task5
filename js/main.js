let addProduct = document.querySelector(".add-product");
addProduct.onsubmit = addPro;

function addPro(e) {
  e.preventDefault();
  
  
  let inputValue = document.querySelector(".inputValue").value;

 
  let result = `
   <div class="test">
     <input type="checkbox" class="myCheckbox">
     <p class="inputName"><span>${inputValue}</span></p>
   </div>
  `;
  
 
  document.querySelector(".inputValueName").insertAdjacentHTML('beforeend', result);
  
  
  document.querySelector(".inputValue").value = "";
  
 
  let checkboxes = document.querySelectorAll(".myCheckbox");
  
 
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function () {
      let span = checkbox.closest(".test").querySelector("span");
      if (checkbox.checked) {
        span.classList.add("lineText");
      } else {
        span.classList.remove("lineText");
      }
    });
  });
}