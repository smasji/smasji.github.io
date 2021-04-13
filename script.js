//DOM is loaded function
document.addEventListener('DOMContentLoaded', function() {




});




function logScroll(){
	// const scrollPerc = parseInt((window.scrollY+window.innerHeight)/document.body.offsetHeight*100)
	const offsetMax = document.body.offsetHeight-window.innerHeight;
	const scrollPerc = 100 - parseInt((offsetMax-window.scrollY)/offsetMax*100)
	console.log(`${scrollPerc}%`)

	if (scrollPerc >= 0 & scrollPerc < 38) {
		document.querySelectorAll('.taskbar-buttons > button').forEach(button => {
			button.className= "taskbar-button";
		})
		document.querySelector('#about-me-button').className = "taskbar-button active";

	}else if (scrollPerc >= 38 & scrollPerc < 60) {
		document.querySelectorAll('.taskbar-buttons > button').forEach(button => {
			button.className= "taskbar-button";
		})
		document.querySelector('#second-button').className = "taskbar-button active";

	}else if (scrollPerc >= 60 & scrollPerc < 85) {
		document.querySelectorAll('.taskbar-buttons > button').forEach(button => {
			button.className= "taskbar-button";
		})
		document.querySelector('#third-button').className = "taskbar-button active";

	}


}
