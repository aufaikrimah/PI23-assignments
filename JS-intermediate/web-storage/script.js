document.addEventListener('DOMContentLoaded', function() {
    const dataForm = document.getElementById('dataForm');
    const dataInput = document.getElementById('dataInput');
    const dataList = document.getElementById('dataList');
  
    displayDataFromLocalStorage();
  
    dataForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      addDataToLocalStorage(dataInput.value);
      displayDataFromLocalStorage();
      dataInput.value = '';
    });
  
    function addDataToLocalStorage(data) {
      let existingData = JSON.parse(localStorage.getItem('myData')) || [];
      existingData.push(data);
      localStorage.setItem('myData', JSON.stringify(existingData));
    }
  
    function displayDataFromLocalStorage() {
      dataList.innerHTML = '';
  
      let existingData = JSON.parse(localStorage.getItem('myData')) || [];
  
      existingData.forEach(function(data) {
        const listItem = document.createElement('li');
        listItem.textContent = data;
        dataList.appendChild(listItem);
      });
    }
  });






  