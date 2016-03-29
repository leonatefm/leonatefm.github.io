$(document ).ready(function(){

	//Nav link smooth scrolling

	$('.nav-link').on('click', function(event){
		var hashtag = $(this).attr('href');
		smoothScroll(hashtag);
		event.preventDefault();
	});

	var smoothScroll = function(target){
		var position = $(target).offset().top - $('.topnav').height();
		if (target=='#home') {
			position = 0;
		}
		$('html, body').animate({
			scrollTop: position
		}, 800);
	};

	//Align the photo height with the about contents
	$('.about .leftdiv').height($('.about .rightdiv').outerHeight());
	$(window).resize(function() {
		$('.about .leftdiv').height($('.about .rightdiv').outerHeight());
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

		//send GA event tracking
		var project = $(this).attr('data-project');
		ga('send', {
		  hitType: 'event',
		  eventCategory: 'Projects',
		  eventAction: 'click',
		  eventLabel: project
		});
	});

	//Define Modal Dismiss Function
	var dismissModal = function (){
		$('.project-detail .leftdiv, .project-detail .rightdiv').removeClass('show');
		window.setTimeout(function(){
			$('.projects-modal').removeClass('show');
			//return the scroll bar to the top everytime dismissing a modal
			$('.project-detail .leftdiv').scrollTop(0);
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

	//Mobile Device Optimization 
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	if (isMobile) {
		//Avoid screen jumping by replace vh height with static height (100% of device height)
		$('#home').height(window.screen.height);
	}

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


 	//Infinite Loop Svg Animation
	var loopwidth = 110;
	var loopheight = 50;
	var points = [
		[26, 4],
		[loopwidth-26, loopheight-4],
		[loopwidth-26, 4],
		[26, loopheight-4],
	];

	//leftloop animation
	var leftloop_svg = d3.select(".left-loop").append("svg")
		.attr("width", loopwidth)
		.attr("height", loopheight);

	var leftloop_path = leftloop_svg.append("path")
		.data([points])
		.attr("d", d3.svg.line()
		.tension(0) // Catmull–Rom
		.interpolate("cardinal-closed"));

	leftloop_svg.selectAll(".point")
		.data(points)
		// .enter().append("circle")
		//   .attr("r", 4)
		.attr("transform", function(d) { return "translate(" + d + ")"; });

	var leftloop_circle = leftloop_svg.append("circle")
		.attr("r", 3)
		.attr("transform", "translate(" + points[0] + ")");

	leftloop_transition();

	function leftloop_transition() {
		leftloop_circle.transition()
		.duration(4000)
		.ease('linear')
		.attrTween("transform", translateAlong(leftloop_path.node()))
		.each("end", leftloop_transition);
	}

	//rightloop animation
	var rightloop_svg = d3.select(".right-loop").append("svg")
		.attr("width", loopwidth)
		.attr("height", loopheight);

	var rightloop_path = rightloop_svg.append("path")
		.data([points])
		.attr("d", d3.svg.line()
		.tension(0) // Catmull–Rom
		.interpolate("cardinal-closed"));

	rightloop_svg.selectAll(".point")
		.data(points)
		// .enter().append("circle")
		//   .attr("r", 4)
		.attr("transform", function(d) { return "translate(" + d + ")"; });

	var rightloop_circle = rightloop_svg.append("circle")
		.attr("r", 3)
		.attr("transform", "translate(" + points[0] + ")");

	rightloop_transition();

	function rightloop_transition() {
		rightloop_circle.transition()
		.duration(4000)
		.ease('linear')
		.attrTween("transform", translateAlong(rightloop_path.node()))
		.each("end", rightloop_transition);
	}

	// Returns an attrTween for translating along the specified path element.
	function translateAlong(path) {
		var l = path.getTotalLength();
		return function(d, i, a) {
			return function(t) {
				var p = path.getPointAtLength(t * l);
				return "translate(" + p.x + "," + p.y + ")";
			};
		};
	}

});