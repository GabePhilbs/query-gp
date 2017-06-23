

// var div = document.querySelector('div');
// var a = document.querySelector('a');


//not working
// a.name = 'new link';
// a.target = '_blank'


// var newLi = document.createElement('li');

// newLi.innerHTML = 'item4';

//find my unordered list
// var list = document.querySelector('ul');

// console.log(list);

//console.log(newLi);
//add my new <li> element to the li

// list.appendChild(newLi);



// creating var lis
var list = document.querySelector('ul');

//test list
//console.log(list);



//function for removing items
function freshList(list){ 
	list.innerHTML = '';
};


//clearing list freshList
// freshList(list);
// console.log(list);


//adding items - the array
newItems =[];
//console.log(newItems);

//turning array elements into li

function updateList(newItems){
	newItems.forEach(function(itemText){ 
		var newLi = document.createElement('li');
		newLi.innerHTML= itemText;
		//adds the class item to each li, so I can give them and eventListner later
		newLi.classList.add('item');
		list.appendChild(newLi);
	});

}

	 
//function for the submit button
function submit(){
	//test if functio is being called
	//console.log('submited');

	//the function pushes an array nstead of an element. This might be useful if 
	// later on I decide to implement a multiple input option
	// to prevent the array from carrying on the ipnuts from each submission,
	// the array mus be cleared
	newItems=[];

	//adds input to the array newItems
	newItems.push(document.getElementById("newItemInput").value);

	//insert the items from the array newItems in the list
	updateList(newItems);
	//clers out the input field
	newItemInput.value='';

	//refresh the list of items
	var items = document.getElementsByClassName('item');

	Array.from(items).forEach(function(element){

		element.addEventListener('click', itemClicked)
	})
	//test items
	//console.log(items);

	//what is in the list now?
	//console.log(list);

}



//test function submit
// submit();

//creating var for button and adding eventListener
var submitButton = document.getElementById('submitItem');
submitButton.addEventListener('click', submit);



//eliminates all the items that have the doomed class
function removeElementsByClass(className){
				var elements = document.getElementsByClassName('doomed');
				while(elements.length > 0){
				elements[0].parentNode.removeChild(elements[0]);
				}
			}




//creates function for removing items
		function eliminate(){
			//test eliminate
			//console.log(target);

			//removes this item
			//target.remove();
			//itemClickControl = itemClickControl * (-1);

			// var a = this.parentElement;
			// a.remove();


			

			removeElementsByClass();


		}








// controls what function the button will have
//var itemClickControl = 1;

//just declaring this variables here so it can be accessed by both of the buttons functions
var deleteTimeout = null;
var target = '';

//The function for when an item is clicked:
function itemClicked (){
	var intext = target.innerText;


	//updates this var so it now means this ispecific item
	target = this;

	if(target.classList.contains('doomed')){


		//test if logical test is working
		console.log('boolean true ');


		// //figuring out the name of the timeout for this specific li
		// var targetText = target.innerText;
		// var constString = 'deleteTimeout';
		// //var targetDel = target.innerText + 'deleteTimeout';
		// var targetDel =  targetText.concat(constString);

		//checking if the string is right
		//console.log(targetDe);


		target.classList.remove('doomed');

		window.clearTimeout(deleteTimeout);

		//var p = document.getElementById('a')
		target.style.textDecoration = 'none';
		

		


	} else{
		//test if logical test is working
		console.log('boolean false ');

		//test if click is being noticed
		//console.log('item was clicked');

		//discover what does 'this' refer to
		//console.log(this);

		//test using 'this' as reference
		//this.innerText = 'chupa cabra';

		// strikes text
		this.innerHTML = this.innerText.strike();
		

		//test if remove works
		//this.remove();


		// test eliminate function
		//eliminate();


		//set delete timeout
		window.deleteTimeout = setTimeout(eliminate, 3000);

		 // * * * * apparentlty js does not accept multiple instances of timeout, so i had to use a loop
		 // in the eliminate function, instead of creating unique timeouts for each crosed item

		// //giving this timeout a specific name
		// var targetText = target.innerText;
		// var constString = 'deleteTimeout';
		// var targetDel =  targetText.concat(constString);

		//giving ti a class to indicte it is in time out
		 target.classList.add('doomed');

		 //console.log(targetDel);
		 //targetDel = setTimeout(eliminate, 3000);

		 //to see if the naming works
		 //console.log(targetDel);


	}


	//itemClickControl = itemClickControl * (-1);


}










