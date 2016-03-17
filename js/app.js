$(document ).ready(function(){

	//Nav link smooth scrolling

	$('.nav-link').on('click', function(event){
		var hashtag = $(this).attr('href');
		smoothScroll(hashtag);
		event.preventDefault();
	});

	var smoothScroll = function(target){
		var position = $(target).offset().top - $('.topnav').height();
		if (target=='#about') {
			position = 0;
		}
		$('html, body').animate({
			scrollTop: position
		}, 800);
	};

	//Align the photo height with the contact contents
	$('.contact .leftdiv').height($('.contact .rightdiv').outerHeight());
	$(window).resize(function() {
		$('.contact .leftdiv').height($('.contact .rightdiv').outerHeight());
	});

	//Click on project to open details modal
	$('.projects-list li').on('click', function(){
		var index = $(this).index();
		//show project modal
		$('.projects-modal').show(0, function(){
			$('.projects-modal').addClass('show');
			$('.project-detail-list').show(0, function(){
				$('.project-detail').eq(index).show(0, function(){
					window.setTimeout(function(){
						$('.project-detail').eq(index).find('.leftdiv, .rightdiv').addClass('show');
						$('html, body').addClass('modal-open');
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
		$('html, body').removeClass('modal-open');
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

	// //iOS Overlay Scroll Bug fixing
	// document.ontouchmove = function ( event ) {

 //        var isTouchMoveAllowed = true, target = event.target;

 //        while ( target !== null ) {
 //            if ( target.classList && target.classList.contains( 'modal-open' ) ) {
 //                isTouchMoveAllowed = false;
 //                break;
 //            }
 //            target = target.parentNode;
 //        }

 //        if ( !isTouchMoveAllowed ) {
 //            event.preventDefault();
 //        }

 //    };

 //    function removeIOSRubberEffect( element ) {

 //        element.addEventListener( "touchstart", function () {

 //            var top = element.scrollTop, totalScroll = element.scrollHeight, currentScroll = top + element.offsetHeight;

 //            if ( top === 0 ) {
 //                element.scrollTop = 1;
 //            } else if ( currentScroll === totalScroll ) {
 //                element.scrollTop = top - 1;
 //            }

 //        } );

 //    }

 //    removeIOSRubberEffect( document.querySelector( ".mobile-scrollable" ) );
});