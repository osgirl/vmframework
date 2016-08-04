$(document).ready(function() {

	var slideLeft = new Menu({
	  wrapper: '#fw-wrapper',
	  type: 'slide-left',
	  menuOpenerClass: '.c-button',
	  maskId: '#c-mask'
	});

	var slideLeftBtn = document.querySelector('#c-button--slide-left');

	slideLeftBtn.addEventListener('click', function(e) {
	  e.preventDefault;
	  slideLeft.open();
	});

	var myQuotes = new Array();
		myQuotes[0] = "You can create a page with our framework";
		myQuotes[1] = "Another tip about what you can do in the framework";

	var myRandom = Math.floor(Math.random()*myQuotes.length);
	$('#fw-tip__inner').html(myQuotes[myRandom]);

});