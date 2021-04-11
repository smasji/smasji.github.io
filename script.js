//DOM is loaded function
document.addEventListener('DOMContentLoaded', function() {




});


//navbar scroll fix
function scrollLock(){
	document.querySelector('#navbar').style.top = `${window.scrollY}px`;
}
//nav nav-pills nav-fill
//nav justify-content-center
function logScroll(){
	const scrollPerc = parseInt(2*window.scrollY/document.body.offsetHeight*100+10)
	console.log(`${scrollPerc}%`)
	document.querySelector('.progress-bar').style.width = `${scrollPerc}%`;

	if (scrollPerc >= 0 & scrollPerc < 25) {
		document.querySelectorAll('.nav-link').forEach(p => {
			p.className= "nav-link";
		})
		document.querySelector('#Home-nav').className = "nav-link active";

	}else if (scrollPerc >= 25 & scrollPerc < 50) {
		document.querySelectorAll('.nav-link').forEach(p => {
			p.className= "nav-link";
		})
		document.querySelector('#Page1-nav').className = "nav-link active";

	}else if (scrollPerc >= 50 & scrollPerc < 75) {
		document.querySelectorAll('.nav-link').forEach(p => {
			p.className= "nav-link";
		})
		document.querySelector('#Link-nav').className = "nav-link active";

	}else if (scrollPerc >= 75) {
			document.querySelectorAll('.nav-link').forEach(p => {
				p.className= "nav-link";
			})
			document.querySelector('#Disabled-nav').className = "nav-link active";
		}


}
