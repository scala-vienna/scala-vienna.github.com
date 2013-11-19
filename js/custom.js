/* Countdown */

$(function(){
	launchTime = new Date("December 17, 2013 20:00");
	launchTime.setDate(launchTime.getDate());
	$("#countdown").countdown({until: launchTime, format: "dHMS"});
});