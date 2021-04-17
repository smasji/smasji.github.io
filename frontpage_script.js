const number_of_rows = 17;
const number_of_colums = 45;
const line_one = "Hi,"
const text = ["Hi,","I am", "Rutger", "van Rijswijck"];
const space_left = 1;
const space_top = 4;
const animation_increment = 150; //In milliseconds
const animation_duration = 1; //In seconds
const animation_chars = "zxcvbnmasdfghjklqwertyuiop"
const number_of_ani_chars = "10"
const binary_change_time = "1000" //in milliseconds
const text_color = "#00bfff"

// all html is loaded
document.addEventListener('DOMContentLoaded', () => {

	function char_change(i, cell) {
		setTimeout(() => {
			cell.innerHTML =  animation_chars[Math.round(Math.random()*(animation_chars.length-1))];
		}, animation_duration/number_of_ani_chars*1000*(i+1));
	};

	function animate(cell, duration, line_number, letter_number) {
		setTimeout(() => {
			cell.style.animation = `animation ${animation_duration*2}s forwards`;
			for (i = 0; i < number_of_ani_chars; i++) {
				char_change(i, cell);
			}
			setTimeout(() => {
				cell.innerHTML = text[line_number][letter_number];
				cell.addEventListener("mouseover", event => {
					cell.style.animation = "text_hover_animation .5s forwards";
					setTimeout(() => {
						cell.style.animation = null;
						cell.style.color = text_color;
					}, 510);
				});
			}, animation_duration*1000);

		}, duration);
	};



	// create all rows with id's of "r-{n}"
	for (i = 0; i < number_of_rows; i++) {
		document.querySelector(".grid-container").innerHTML += `<div class="row" id="r-${i}"></div>`
	}
// create all cells with id's of "c-{n}_r-{n}" and with a 0 or 1
	document.querySelectorAll(".row").forEach(row  => {
		for (i = 0; i < number_of_colums; i++) {
			const random0R1 = Math.round(Math.random());
		  	row.innerHTML += `<div class="cell" id="c-${i}_${row.id}">${random0R1}</div>`
		}
	});



// replacing the correct cells with the text
		let text_cell_count = 0;
		for (i = 0; i < text.length; i++) {
				for (a = 0; a < text[i].length; a++) {
					const cell = document.getElementById(`c-${a + space_left}_r-${i + space_top}`);
					if (text[i][a] == " "){
						continue;
					};
					cell.classList.remove('cell');
					cell.classList.add('text_cell');

					text_cell_count++;
					animate(cell, text_cell_count*animation_increment, i, a);
				};

		}

		document.querySelectorAll(".cell").forEach(cell => {
			cell.addEventListener("mouseover", event => {
				cell.style.animation = "binary_hover_animation 1s forwards";
				setTimeout(() => {
					cell.style.animation = null;
				}, 1010);
			});
		});



})
