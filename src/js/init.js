window.onload=function() {

	var ANIMATION_SPEED = 400;
	var activeItemIndex = 0;
	var activeMenuItemIndex = 3;
	var isAnimating = false;

	const LEFT = 0;
	const RIGHT = 1;
	const UP = 0;
	const DOWN = 1;

	var scope = {};

	var data = [	
	{
		name: "USER SETTINGS",
		items: [
			{
				name: "Star Wars: Rogue One",
				boxArtUrl: "img/box_SW.png",
				logoUrl: "img/logo_SW.png",
				backgroundUrl: "img/background_SW.png"
			},
			{
				name: "Wonder Woman",
				boxArtUrl: "img/box_WW.png",
				logoUrl: "img/logo_WW.png",
				backgroundUrl: "img/background_WW.png"
			},
			{
				name: "Date Night",
				boxArtUrl: "img/box_DN.png",
				logoUrl: "img/logo_DN.png",
				backgroundUrl: "img/background_DN.jpg"
			},
			{
				name: "Tron",
				boxArtUrl: "img/box_TR.png",
				logoUrl: "img/logo_TR.png",
				backgroundUrl: "img/background_TR.jpg"
			},
			{
				name: "Despicable Me 2",
				boxArtUrl: "img/box_DM.png",
				logoUrl: "img/logo_DM.png",
				backgroundUrl: "img/background_DM.png"
			}
		]
	},
	{
		name: "PURCHASED",
		items: [
			{
				name: "La La Land",
				boxArtUrl: "img/box_LA.png",
				logoUrl: "img/logo_LA.png",
				backgroundUrl: "img/background_LA.jpg"
			},
			{
				name: "Passengers",
				boxArtUrl: "img/box_PA.png",
				logoUrl: "img/logo_PA.png",
				backgroundUrl: "img/background_PA.jpg"
			},
			{
				name: "Fast & The Furious 8",
				boxArtUrl: "img/box_FF.png",
				logoUrl: "img/logo_FF.png",
				backgroundUrl: "img/background_FF.jpg"
			},
			{
				name: "Kong of Skull Island",
				boxArtUrl: "img/box_KO.png",
				logoUrl: "img/logo_KO.png",
				backgroundUrl: "img/background_KO.jpg"
			},
			{
				name: "Fantastic Beasts",
				boxArtUrl: "img/box_FB.png",
				logoUrl: "img/logo_FB.png",
				backgroundUrl: "img/background_FB.png"
			}
		]
	},
	{
		name: "JUST OPENED",
		items: [
			{
				name: "Star Wars: Rogue One",
				boxArtUrl: "img/box_SW.png",
				logoUrl: "img/logo_SW.png",
				backgroundUrl: "img/background_SW.png"
			},
			{
				name: "Wonder Woman",
				boxArtUrl: "img/box_WW.png",
				logoUrl: "img/logo_WW.png",
				backgroundUrl: "img/background_WW.png"
			},
			{
				name: "Date Night",
				boxArtUrl: "img/box_DN.png",
				logoUrl: "img/logo_DN.png",
				backgroundUrl: "img/background_DN.jpg"
			},
			{
				name: "Tron",
				boxArtUrl: "img/box_TR.png",
				logoUrl: "img/logo_TR.png",
				backgroundUrl: "img/background_TR.jpg"
			},
			{
				name: "Despicable Me 2",
				boxArtUrl: "img/box_DM.png",
				logoUrl: "img/logo_DM.png",
				backgroundUrl: "img/background_DM.png"
			}
		]
	},
	{
		name: "IN THEATERS",
		items: [
			{
				name: "La La Land",
				boxArtUrl: "img/box_LA.png",
				logoUrl: "img/logo_LA.png",
				backgroundUrl: "img/background_LA.jpg"
			},
			{
				name: "Passengers",
				boxArtUrl: "img/box_PA.png",
				logoUrl: "img/logo_PA.png",
				backgroundUrl: "img/background_PA.jpg"
			},
			{
				name: "Fast & The Furious 8",
				boxArtUrl: "img/box_FF.png",
				logoUrl: "img/logo_FF.png",
				backgroundUrl: "img/background_FF.jpg"
			},
			{
				name: "Kong of Skull Island",
				boxArtUrl: "img/box_KO.png",
				logoUrl: "img/logo_KO.png",
				backgroundUrl: "img/background_KO.jpg"
			},
			{
				name: "Fantastic Beasts",
				boxArtUrl: "img/box_FB.png",
				logoUrl: "img/logo_FB.png",
				backgroundUrl: "img/background_FB.png"
			}
		]
	},
	{
		name: "COMING SOON",
		items: [
			{
				name: "Star Wars: Rogue One",
				boxArtUrl: "img/box_SW.png",
				logoUrl: "img/logo_SW.png",
				backgroundUrl: "img/background_SW.png"
			},
			{
				name: "Wonder Woman",
				boxArtUrl: "img/box_WW.png",
				logoUrl: "img/logo_WW.png",
				backgroundUrl: "img/background_WW.png"
			},
			{
				name: "Date Night",
				boxArtUrl: "img/box_DN.png",
				logoUrl: "img/logo_DN.png",
				backgroundUrl: "img/background_DN.jpg"
			},
			{
				name: "Tron",
				boxArtUrl: "img/box_TR.png",
				logoUrl: "img/logo_TR.png",
				backgroundUrl: "img/background_TR.jpg"
			},
			{
				name: "Despicable Me 2",
				boxArtUrl: "img/box_DM.png",
				logoUrl: "img/logo_DM.png",
				backgroundUrl: "img/background_DM.png"
			}
		]
	}
	]

	scope.items = data;

	scope.activeList = scope.items[activeMenuItemIndex-1];

	rivets.bind($('#container'), {
		scope: scope
	});

	var containerLeftEl = $(".item-container-left");
	var containerRightEl = $(".item-container-right");
	var activeEl = $(".active .logo");
	var backgroundEl = $(".background");
	var previousBackgroundEl = $(".previous-background");
	var menuItemsEl = $(".menu-container");

	$(document).keydown(function(e) {
		switch(e.keyCode) {
	        case 37: // left
	        move(LEFT);
	        break;

	        case 38: // up
	        switchSwimLane(UP);
	        break;

	      	case 39: // right
	        move(RIGHT);
	        break;

	      	case 40: // down
	        switchSwimLane(DOWN);
	        break;

	        default: return; // exit this handler for other keys
	    }
	    e.preventDefault();
	});

	function initCarousel () {
		scope.activeItem = scope.activeList.items[0];
		scope.previousItem = scope.activeItem;
		console.log(scope.activeItem.name);
		// var lastItem = scope.activeList.items.pop();
		// scope.activeList.items.unshift(lastItem);
		backgroundEl.css({'background-image': 'url('+ scope.activeItem.backgroundUrl +')'});
		activeEl.css({'background-image': 'url('+ scope.activeItem.logoUrl +')'});
		animateActiveMenuItem();
	};

	initCarousel();

	function animateActive(dir) {
		isAnimating = true;
		
		previousBackgroundEl.css({'background-image': 'url('+ scope.previousItem.backgroundUrl +')'});

		backgroundEl.hide(0, function () {
			backgroundEl.css({'background-image': 'url('+ scope.activeItem.backgroundUrl +')'});
			backgroundEl.fadeIn(400);
		});

		if (dir == LEFT || dir == RIGHT) {
			var xDir = (dir == LEFT) ? "+=200px" : "-=200px";
			activeEl.animate( { opacity: "0", marginLeft: xDir }, { queue: false, duration: 250 }).fadeOut(250, function () {
				activeEl.css({'background-image': 'url('+ scope.activeItem.logoUrl +')', marginLeft: "auto"}); 		
				activeEl.animate( { opacity: "1"}, { queue: false, duration: ANIMATION_SPEED }).fadeIn(150)
			});
		} else {
			activeEl.css({'background-image': 'url('+ scope.activeItem.logoUrl +')', margin: "0 auto"}); 		
		}
	}

	function move(dir) {
		if (isAnimating) {
			return;
		}

		scope.previousItem = scope.activeItem;

		if (dir == LEFT) {

			scope.activeItem = scope.activeList.items[scope.activeList.items.length-1];

			containerLeftEl.animate({
				left: '+=200px'
			}, ANIMATION_SPEED);

			containerRightEl.animate({
				right: '-=200px'
			}, ANIMATION_SPEED);

			$(".item", ".item-container-right").first().animate({
				opacity: '1'
			}, ANIMATION_SPEED);

			$(".item", ".item-container-left").last().fadeOut(ANIMATION_SPEED, function () {
				var lastItem = scope.activeList.items.pop();
				scope.activeList.items.unshift(lastItem);
				containerLeftEl.css({left: "-=200px"});
				containerRightEl.css({right: "+=200px"});
				isAnimating = false;
				$(".item", ".item-container-right").first().css({"opacity": 0});
			});
		}
		else {		

			scope.activeItem = scope.activeList.items[1];

			var rightItemEl = $(".item", ".item-container-right").first().next();

			containerRightEl.animate({
				right: '+=200px'
			}, ANIMATION_SPEED, function () {
				containerRightEl.css({right: "-=200px"});
				var first = scope.activeList.items.shift();
				scope.activeList.items.push(first);
				isAnimating = false;
			});

			rightItemEl.animate({
				opacity: 0
			}, ANIMATION_SPEED, function (){
				rightItemEl.css({opacity: 1});
			});
			
			containerLeftEl.animate({
				left: '-=200px'
			}, ANIMATION_SPEED, function (){
				containerLeftEl.css({left: "+=200px"});
			});

			$(".item-hidden-left", ".item-container-left").animate({
				opacity: '1'
			}, ANIMATION_SPEED, function (){ 
				$(".item-hidden-left", ".item-container-left").css({"opacity": 0});
			});

		}
		animateActive(dir);
		console.log(scope.activeItem.name);
		console.log(scope.activeList.items);

	}

	function switchSwimLane(dir) {

		if (isAnimating) {
			return;
		}

		scope.previousItem = scope.activeItem;

		if (dir == UP) {
			if (activeMenuItemIndex - 1 > 0) {
				animateSwimLaneChangeElement(containerLeftEl, UP);
				animateSwimLaneChangeElement(containerRightEl, UP);
				animateSwimLaneChangeElement($(".active"), UP);
				animateActiveMenuItem(UP);

				setTimeout( function () {
					scope.activeList = scope.items[activeMenuItemIndex-1];
					console.log(scope.activeList.items);
					scope.activeItem = scope.activeList.items[0];
					// scope.activeItem = scope.activeList.items[scope.activeList.items.length-1];
					// var lastItem = scope.activeList.items.pop();
					// scope.activeList.items.unshift(lastItem);
					animateActive();
				}, 200);
			}
		}
		else {
			if (activeMenuItemIndex + 1 <= scope.items.length) {
				animateSwimLaneChangeElement(containerLeftEl, DOWN);
				animateSwimLaneChangeElement(containerRightEl, DOWN);
				animateSwimLaneChangeElement($(".active"), DOWN);
				animateActiveMenuItem(DOWN);

				setTimeout( function () {
					scope.activeList = scope.items[activeMenuItemIndex-1];
					console.log(scope.activeList.items);
					scope.activeItem = scope.activeList.items[0];					
					// scope.activeItem = scope.activeList.items[scope.activeList.items.length-1];
					// var lastItem = scope.activeList.items.pop();
					// scope.activeList.items.unshift(lastItem);
					animateActive();
				}, 200);
			}
		}
	}

	function animateSwimLaneChangeElement(el, dir) {

		var yDir = (dir == UP) ? "53%" : "47%";
		el.animate({
			top: yDir,
			opacity: 0
		}, 200,
			function () {
				el.animate({
					top: "50%",
					opacity: 1
			}, 200, function () {
				isAnimating = false;
			});
		});
	};

	function animateActiveMenuItem(dir) {

		if (dir == UP) {
			activeMenuItemIndex--;
			menuItemsEl.animate({marginTop: "+=30px"}, ANIMATION_SPEED)
		}
		else if (dir == DOWN) {
			activeMenuItemIndex++;
			menuItemsEl.animate({marginTop: "-=30px"}, ANIMATION_SPEED)
		}

		$("li", menuItemsEl).each(function () {
			$(this).removeClass("prev");
			$(this).removeClass("selected");
			$(this).removeClass("next");
		})

		$("li:nth-child(" + (activeMenuItemIndex -1) + ")", menuItemsEl).addClass("prev");
		$("li:nth-child(" + (activeMenuItemIndex) + ")", menuItemsEl).addClass("selected");
		$("li:nth-child(" + (activeMenuItemIndex +1) + ")", menuItemsEl).addClass("next");
	}
};