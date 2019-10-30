/*Global variable for all page to display the product menu bar item*/
var myProduct = new Array("Baby's Hulk Costume", "Girl's Gamora Costume", "Boy's Iron Man Costume",
							  "Woman's Black Widow Costume","Man's Thanos Costume","Baby's Yoda Costume",
							  "Girl's Princess Leia Costume","Boy's Jedi Costume","Man's Darth Vader Costume",
							  "Woman's Rey Costume","Baby's kevin Minion Costume","Woman's Minion Costume",
							  "Boy's Dracula Minion Costume","Man's Jerry Minion Costume",
							  "Girl's Fun Minion Costume");

/*Pass the rent duration to enquiry page if user select a duration*/
function rent_duration()
{
	return document.getElementById("duration").value;
}

/*Store to storage of product information and rent duration and pass to enquiry page if user press the button of rent*/
function rent(product)
{
	if (typeof(Storage) !== "undefined") {
	  // Store
	  localStorage.setItem("product", product);
	  localStorage.setItem("rent_duration", document.getElementById("duration").value);
	}
	else {
		alert('not ok');
	}
	window.location.href = "enquiry.html";
}

/*preload the select option list of product list and state list*/
function preload_enquiry()
{	
	// Get dropdown element from DOM
	var Pro_dropdown = document.getElementById("product");
	// Loop through the array
	for (var i = 0; i < myProduct.length; ++i) {
		// Append the element to the end of Array list
		Pro_dropdown[Pro_dropdown.length] = new Option(myProduct[i], myProduct[i]);
	}
	
	var myState = new Array("Johor Bahru","Kedah","Kelantan","Malacca","Negeri Sembilan",
							"Pahang","Penang","Perak","Perlis","Sabah","Sarawak","Selangor","Terengganu",
							"Kuala Lumpur","Labuan","Putrajaya");
	// Get dropdown element from DOM
	var S_dropdown = document.getElementById("state");
	// Loop through the array
	for (var i = 0; i < myState.length; ++i) {
		// Append the element to the end of Array list
		S_dropdown[S_dropdown.length] = new Option(myState[i], myState[i]);
	}
	
	/*Get the information from local storage*/
	var product = localStorage.getItem("product");
	var duration = localStorage.getItem("rent_duration");
	localStorage.removeItem('product');
	localStorage.removeItem('rent_duration');
	localStorage.clear()
	/*set the value of select option and rental duration and subject*/
	getSelectedValue(myProduct[product], product, duration);
}

/*set the product list item to the navigation bar dropdown list*/
function onload_menubar_product()
{
	var dropdown_item = document.createElement("div");
	dropdown_item.className = "dropdown";
	
	var dropdown_button = document.createElement("button");
	dropdown_button.className = "dropbtn";
	var node = document.createTextNode("Product");
	dropdown_button.appendChild(node);
	
	var dropdown_content = document.createElement("div");
	dropdown_content.className = "dropdown-content";
	
	myProduct.forEach(function(product, index){ 
        var dropdown_link = document.createElement("a");
		dropdown_link.setAttribute('href','product'+(index+1)+'.html');
		var node = document.createTextNode(product);
		dropdown_link.appendChild(node);
		
		dropdown_content.appendChild(dropdown_link);
    }); 
	
	dropdown_item.appendChild(dropdown_button);
	dropdown_item.appendChild(dropdown_content);
	document.getElementsByClassName("navbar")[0].appendChild(dropdown_item);
	
	navigation_highlight();
}

/*set the rental duration field and subject field once the product option is selected*/
function getSelectedValue(product_desc = null, product = null, duration = null)
{
	
	if(product_desc == null) var selectedItem = document.getElementById("product").value; //Get Value from product page
	else var selectedItem = product_desc; //Get Value from dropdown element

	//Put the value get from dropdown element into the textbox
	if(product_desc != null)
	{
		document.getElementById("rentdura").value = duration;
		document.getElementById("product").selectedIndex = parseInt(product)+1;
		var inputtext = document.getElementById("subject");
		inputtext.value = "Enquiry on " +selectedItem;
	}
	else
	{
		if(document.getElementById("product").selectedIndex !=0)
		{
			var inputtext = document.getElementById("subject");
			inputtext.value = "RE: Enquiry on " +selectedItem;
		}
		else
		{
			var inputtext = document.getElementById("subject");
			inputtext.value = "";
		}
		
	}

}

/*onload gunction for the enquiry page*/
function onload_enquiry()
{
	onload_menubar_product();
	preload_enquiry();
}


/*validate the form input and submit of the enquiry page once button clicked*/
function validateFunc(){
	var str="";
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var email = document.getElementById("eaddress").value;
	var phone = document.getElementById("pnum").value;
	var addr = document.getElementById("saddress").value;
	var city = document.getElementById("city").value;
	var state = document.getElementById("state").selectedIndex;
	var product = document.getElementById("product").selectedIndex;
	var postcode = document.getElementById("postcode").value;
	var rental = document.getElementById("rentdura").value;
	var subject = document.getElementById("subject").value;
	/*First & Last Name*/
	var letters = /^[A-Za-z ]+$/;
	
	/*Email*/
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
	
	/*phone*/
	var phoneno = /^\d{1,10}$/;
	
	if (!fname.match(letters) || fname.length > 25 || fname.trim().length == 0)
	{
		str += "Invalid Input of First Name \n";
		document.getElementById("fname").style.borderColor = "red";
	}
	else
	{
		document.getElementById("fname").style.borderColor = "green";
	}
	if (!lname.match(letters) || lname.length > 25 || lname.trim().length == 0)
	{
		str += "Invalid Input of Last Name \n";
		document.getElementById("lname").style.borderColor = "red";
	}
	else
	{
		document.getElementById("lname").style.borderColor = "green";
	}
	if (atpos < 1 || ( dotpos - atpos < 2 ))
	{
        str += "Invalid Input of Email \n";
		document.getElementById("eaddress").style.borderColor = "red";
    }
	else
	{
		document.getElementById("eaddress").style.borderColor = "green";
	}
	if (!phone.match(phoneno))
	{
		str += "Invalid Input of Phone Number \n";
		document.getElementById("pnum").style.borderColor = "red";
	}
	else
	{
		document.getElementById("pnum").style.borderColor = "green";
	}
	if (addr.length > 40 || addr.trim().length == 0)
	{
		str += "Invalid Input of Address \n";
		document.getElementById("saddress").style.borderColor = "red";
	}
	else
	{
		document.getElementById("saddress").style.borderColor = "green";
	}
	if (city.length > 20 || city.trim().length == 0)
	{
		str += "Invalid Input of City/Town \n";
		document.getElementById("city").style.borderColor = "red";
	}
	else
	{
		document.getElementById("city").style.borderColor = "green";
	}
	if (state == 0)
	{
		str += "Please select a state \n";
		document.getElementById("state").style.borderColor = "red";
	}
	else
	{
		document.getElementById("state").style.borderColor = "green";
	}
	if (product == 0)
	{
		str += "Please select a product \n";
		document.getElementById("product").style.borderColor = "red";
	}
	else
	{
		document.getElementById("product").style.borderColor = "green";
	}
	if(isNaN(postcode) || postcode.length > 5 || postcode.length < 5)
	{
		str += "Invalid Input of Postcode \n";
		document.getElementById("postcode").style.borderColor = "red";
	}
	else
	{
		document.getElementById("postcode").style.borderColor = "green";
	}
	if (isNaN(rental) || rental <= 0)
	{
		str += "Invalid Input of Rental \n";
		document.getElementById("rentdura").style.borderColor = "red";
	}
	else
	{
		document.getElementById("rentdura").style.borderColor = "green";
	}
	if (subject.trim().length == 0)
	{
		str += "Invalid Input of Subject \n";
		document.getElementById("subject").style.borderColor = "red";
	}
	else
	{
		document.getElementById("subject").style.borderColor = "green";
	}
	if(str!="")
	{
		alert(str);
	}
	else
	{
		form_submission();
	}
}

