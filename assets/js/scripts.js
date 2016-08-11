

	var slideLeft = new Menu({
	  wrapper: '#o-wrapper',
	  type: 'slide-left',
	  menuOpenerClass: '.c-button',
	  maskId: '#c-mask'
	});


	var slideLeftBtn = document.querySelector('#c-button--slide-left');

	slideLeftBtn.addEventListener('click', function(e) {
	  e.preventDefault;
	  slideLeft.open();
	});

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


	  $(document).ready(function(){
	    $('.classloader.').click(function(){
	        $('#contenthere').load('/includes/about-info.html');
	    });
	});
