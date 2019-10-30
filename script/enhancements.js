var slideIndex;
function a()
{

	// Get the modal
	var modal = document.getElementById("myModal");

	// Get the image and insert it inside the modal
	var img = document.getElementById("myImg");
	var modalImg = document.getElementById("img01");

	modal.style.display = "block";
	modalImg.src = img.src;

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	}
}

/*set the navigation tab or item highlighted if the stay on proper page*/
function navigation_highlight()
{
	var cur_page =document.querySelector("div[class='navbar']").querySelector("a[href='"+window.location.href.substring(window.location.href.lastIndexOf('/') + 1)+"']");
	if(cur_page)
	{
		var cur_tab = cur_page.parentElement.parentElement;
		if(cur_tab.className == '')
		{
			cur_page.classList.add("current_tab");
		}
		else
		{
			cur_page.classList.add("current_page");
			cur_tab.classList.add("current_tab");
		}
	}
	
}

/*Display the popup after submission of form and submit*/
function form_submission()
{
	if (confirm("Are you sure all the information filled are correct?"))
	{
	  	alert("Success");
		document.getElementById('enquiry').submit();
	} 
	else
	{
		alert("Please refill the incorrect field part");
	}
}

function start_slideshow()
{
	slideIndex = 0;
	showSlides();
}

//Display the image of the slideshow
function showSlides() 
{
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
