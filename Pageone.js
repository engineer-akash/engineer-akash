// JavaScript code 

function search_animals() { 
	let input = document.getElementById('searchBar').value 
	input=input.toLowerCase(); 
	let x = document.getElementsByClassName('animals'); 

	for (i = 0; i < x.length; i++) { 
		if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
	} 
} 
