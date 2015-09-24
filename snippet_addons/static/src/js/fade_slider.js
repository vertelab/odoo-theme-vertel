
$( "#animation-box" ).click(function() {
	var container = $('#animation-box img');
	var anzahlBilder = container.length;
	var currentPic = 1;
	$('#animation-buttons').html("");
	for (var i=1;i<=anzahlBilder;i++) {
		if (i == currentPic) {
			$('#animation-box img').addClass('active');
		} else {
			$('#animation-box img').removeClass('active');
		}
		var currentHtml = $('#animation-buttons').html();
		$('#animation-buttons').html(currentHtml + "<a href='javascript:void(0);' onclick='showImage(" + (i - 1) + ");'" + activeClass + "></a>");
	}
});
//~ 
//~ 
//~ var currentPic = 1;
//~ var intervalId;
//~ 
//~ function iniAnimationsButtons() {
	//~ var container = $('#animation-box img');
	//~ var anzahlBilder = container.length;
	//~ $('#animation-buttons').html("");
	//~ for (var i=1;i<=anzahlBilder;i++) {
		//~ if (i == currentPic) {
			//~ var activeClass = " class='active'";
		//~ } else {
			//~ var activeClass = "";
		//~ }
		//~ var currentHtml = $('#animation-buttons').html();
		//~ $('#animation-buttons').html(currentHtml + "<a href='javascript:void(0);' onclick='showImage(" + (i - 1) + ");'" + activeClass + "></a>");
	//~ }
	//~ var currentHtml = $('#animation-buttons').html();
	//~ $('#animation-buttons').html(currentHtml + "<br style='clear: both;' />");
//~ }
//~ 
//~ function showImage(image) {
	//~ if (currentPic == (image + 1)) {
		//~ return false;
	//~ } else {
		//~ var container = $('#animation-box img');
		//~ var active = $('#animation-box img.active');
		//~ if (active.length == 0) {
			//~ active = $('#animation-box img:last');
		//~ }
		//~ active.addClass('last-active');
		//~ var next = $('#animation-box img:eq('+image+')');
		//~ next.css({opacity: 0.0}).addClass('active').animate({opacity: 1.0}, 500, function() {
			//~ active.removeClass('active last-active');
		//~ });
		//~ currentPic = image + 1;
		//~ iniAnimationsButtons();
		//~ clearInterval(intervalId);
	//~ }
//~ }
//~ 
//~ function startAnimation() {
	//~ var container = $('#animation-box img');
	//~ var anzahlBilder = container.length;
	//~ var active = $('#animation-box img.active');
	//~ if (active.length == 0) {
		//~ active = $('#animation-box img:last');
	//~ }
	//~ var next = active.next().length ? active.next() : $('#animation-box img:first');
	//~ active.addClass('last-active');
	//~ next.css({opacity: 0.0}).addClass('active').animate({opacity: 1.0}, 1000, function() {
		//~ active.removeClass('active last-active');
	//~ });
	//~ if ((currentPic + 1) > anzahlBilder) {
		//~ currentPic = 1;
	//~ } else {
		//~ currentPic = currentPic + 1;
	//~ }
	//~ iniAnimationsButtons();
//~ }
//~ $(document).ready( function() {
	//~ iniAnimationsButtons();
	//~ intervalId = setInterval("startAnimation()", 5000);
//~ });
