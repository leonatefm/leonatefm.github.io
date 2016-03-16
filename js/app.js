$(document ).ready(function(){

	//Align the photo height with the contact contents
	$('.contact .leftdiv').height($('.contact .rightdiv').outerHeight());
	$(window).resize(function() {
		$('.contact .leftdiv').height($('.contact .rightdiv').outerHeight());
	});

	//Click on project to open details modal
	$('.projects-list li').on('click', function(){
		var index = $(this).index();
		//show project modal
		$('body').addClass('modal-open');
		$('.projects-modal').show(0, function(){
			$('.projects-modal').addClass('show');
			$('.project-detail-list').show(0, function(){
				$('.project-detail').eq(index).show(0, function(){
					window.setTimeout(function(){
						$('.project-detail').eq(index).find('.leftdiv, .rightdiv').addClass('show');
					}, 500);
				});
			})
		});
	});

	//Define Modal Dismiss Function
	var dismissModal = function (){
		$('.project-detail .leftdiv, .project-detail .rightdiv').removeClass('show');
		window.setTimeout(function(){
			$('.projects-modal').removeClass('show');
		}, 600);
		window.setTimeout(function(){
			$('.project-detail, .project-detail-list, .projects-modal').hide();
		}, 900);
		$('body').removeClass('modal-open');
	};

	//Click close icon to dismiss modal
	$('.close-modal').on('click', function(){
		dismissModal();
	});
	//Use Escape key to dismiss modal
	$(window).keyup(function(evt) {
		switch( evt.keyCode ) {
			case 27:			
				dismissModal();
		};
	});
});