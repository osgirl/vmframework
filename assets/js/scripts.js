	var slideRight = new Menu({
	    wrapper: '#o-wrapper',
	    type: 'slide-right',
	    menuOpenerClass: '.c-button',
	    maskId: '#c-mask'
	  });
	  var slideRightBtn = document.querySelector('#c-button--slide-right');
	  
	  slideRightBtn.addEventListener('click', function(e) {
	    e.preventDefault;
	    slideRight.open();
	  });


	  var slideRightCSS = new Menu({
	    wrapper: '#o-wrapper',
	    type: 'slide-right',
	    menuOpenerClass: '.c-button',
	    maskId: '#c-mask'
	  });
	  var slideRightCSSBtn = document.querySelector('#c-button--slide-right-css');
	  
	  slideRightCSSBtn.addEventListener('click', function(e) {
	    e.preventDefault;
	    slideRight.open();
	  });




