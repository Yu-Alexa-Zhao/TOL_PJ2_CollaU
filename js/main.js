
// drag and drop
function drag(event) {
	// Add the target element's id to the data transfer object
	event.dataTransfer.setData('text/plain', event.target.id);
	// console.log(event.target.id)

}

function dragover(event) {
	event.preventDefault();
	// event.dataTransfer.dropEffect = 'move';
}

function drop(event) {
	event.preventDefault();
	var data = event.dataTransfer.getData('text/plain');
	event.target.appendChild(document.getElementById(data));
	// console.log(data)
}


function change_to_pre_assess(){
	var intro = document.getElementById('intro');
	intro.style.display = 'none';

	var pre_assess = document.getElementById('pre_assess');
	pre_assess.style.display = 'block';

	var control_btn = document.getElementById('control_button_cont');
	control_btn.innerHTML = "<button onclick='change_to_first_quiz()' class='main-btn'><span>Next</span></button>";

	var progress = document.getElementById('top_bar_progress');
	progress.style.display = 'block';

	var top_bar_title = document.getElementById('top_bar_title');
	top_bar_title.style.display = 'none';

	var control = document.getElementById('control');
	control.style.position = 'relative';



	//scroll to the top

	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;
}

function change_to_first_quiz(){
	var pre_assess = document.getElementById('pre_assess');
	pre_assess.remove();

	var first_quiz = document.getElementById('first_quiz');
	first_quiz.style.display = 'block';

	var control_btn = document.getElementById('control_button_cont');
	control_btn.innerHTML = "<button onclick='check_first_quiz_answer()' class='main-btn'><span>Next</span></button>";

	var progress = document.getElementById('top_bar_progress');
	progress.value = '18';

	//scroll to the top

	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;

 	var control = document.getElementById('control');
	control.style.position = 'absolute';
}

function check_first_quiz_answer(){
	var choice_A = document.getElementById('first_quiz_A');
	var fb = document.getElementById('fb');
	var control = document.getElementById('control');

	if (choice_A.classList.contains('selected_choice')) {
		fb.innerHTML = "<p>That's what we thought! Watch the video to learn more.</p>"

	} else {
		fb.innerHTML = "<p>Not quite right. Watch the video to learn more.</p>"
	};

	control.classList.add('control_feedback')

	var control_btn = document.getElementById('control_button_cont');
	control_btn.innerHTML = "<button onclick='change_to_first_video()' class='main-btn'><span>Next</span></button>";
}

function change_to_first_video() {
	//remove the entire first quiz div to avoid repetition in id
	var first_quiz = document.getElementById('first_quiz');
	first_quiz.remove();

	var first_video = document.getElementById('first_video');
	first_video.style.display = 'block';

	var control_btn = document.getElementById('control_button_cont');
	control_btn.innerHTML = "<button onclick='change_to_first_quiz_retest()' class='main-btn'><span>Next</span></button>";

	var fb = document.getElementById('fb');
	fb.innerHTML = "";

	var control = document.getElementById('control');
	control.classList.remove('control_feedback');

	var progress = document.getElementById('top_bar_progress');
	progress.value = '26';

	//scroll to the top

	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;
}

function change_to_first_quiz_retest(){
	var first_video = document.getElementById('first_video');
	first_video.remove();

	var first_quiz_retest = document.getElementById('first_quiz_retest');
	first_quiz_retest.style.display = 'block';

	var control_btn = document.getElementById('control_button_cont');
	control_btn.innerHTML = "<button onclick='check_first_quiz_retest_answer()' class='main-btn'><span>Next</span></button>";
	
	var progress = document.getElementById('top_bar_progress');
	progress.value = '34';

	//scroll to the top

	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;

 	stopVideo();
}


function check_first_quiz_retest_answer() {
	var choice_A = document.getElementById('first_quiz_A');
	var fb = document.getElementById('fb');
	var control = document.getElementById('control');

	if (choice_A.classList.contains('selected_choice')) {
		fb.innerHTML = "<p>That's what we thought! An evaporator absorbs heat from surrounding air to cool down the room.</p>"

	} else {
		fb.innerHTML = "<p>Not quite right. An evaporator absorbs heat from surrounding air to cool down the room.</p>"
	};

	control.classList.add('control_feedback')

	var control_btn = document.getElementById('control_button_cont');
	control_btn.innerHTML = "<button onclick='change_to_second_quiz()' class='main-btn'><span>Next</span></button>";

}

function change_to_second_quiz() {
	var first_quiz_retest = document.getElementById('first_quiz_retest');
	// first_quiz_retest.style.display = 'none';
	first_quiz_retest.remove();

	var second_quiz = document.getElementById('second_quiz');
	second_quiz.style.display = 'block';

	var control_btn = document.getElementById('control_button_cont');
	control_btn.innerHTML = "<button onclick='check_second_quiz_answer()' class='main-btn'><span>Next</span></button>";

	var fb = document.getElementById('fb');
	fb.innerHTML = "";

	var control = document.getElementById('control');
	control.classList.remove('control_feedback');

	var progress = document.getElementById('top_bar_progress');
	progress.value = '42';

	//scroll to the top

	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;
}

function check_second_quiz_answer(){
	var choice_D = document.getElementById('first_quiz_D');
	var fb = document.getElementById('fb');
	var control = document.getElementById('control');

	if (choice_D.classList.contains('selected_choice')) {
		fb.innerHTML = "<p>That's what we thought! Watch the video to learn more.</p>"

	} else {
		fb.innerHTML = "<p>Not quite right. Watch the video to learn more.</p>"
	};

	control.classList.add('control_feedback')

	var control_btn = document.getElementById('control_button_cont');
	control_btn.innerHTML = "<button onclick='change_to_second_video()' class='main-btn'><span>Next</span></button>";


}

function change_to_second_video() {

	var second_quiz = document.getElementById('second_quiz');
	second_quiz.remove();

	var second_video = document.getElementById('second_video');
	second_video.style.display = 'block';

	var control_btn = document.getElementById('control_button_cont');
	control_btn.innerHTML = "<button onclick='change_to_second_quiz_retest()' class='main-btn'><span>Next</span></button>";

	var fb = document.getElementById('fb');
	fb.innerHTML = "";

	var control = document.getElementById('control');
	control.classList.remove('control_feedback');

	var progress = document.getElementById('top_bar_progress');
	progress.value = '50';

	//scroll to the top

	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;

}

function change_to_second_quiz_retest(){
	var second_video = document.getElementById('second_video');
	second_video.remove();

	var second_quiz_retest = document.getElementById('second_quiz_retest');
	second_quiz_retest.style.display = 'block';

	var control_btn = document.getElementById('control_button_cont');
	control_btn.innerHTML = "<button onclick='check_second_quiz_retest_answer()' class='main-btn'><span>Next</span></button>";
	
	var progress = document.getElementById('top_bar_progress');
	progress.value = '54';

	//scroll to the top

	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;
}

function check_second_quiz_retest_answer() {
	var choice_D = document.getElementById('first_quiz_D');
	var fb = document.getElementById('fb');
	var control = document.getElementById('control');

	if (choice_D.classList.contains('selected_choice')) {
		fb.innerHTML = "<p>That's what we thought! Temperature is directly proportional to pressure when the condition (i.e., volumn and number of molecules) are constant.</p>"

	} else {
		fb.innerHTML = "<p>Not quite right. Temperature is directly proportional to pressure when the condition (i.e., volumn and number of molecules) are constant.</p>"
	};

	control.classList.add('control_feedback')

	var control_btn = document.getElementById('control_button_cont');
	control_btn.innerHTML = "<button onclick='change_to_guided_discovery()' class='main-btn'><span>Next</span></button>";
}

function change_to_guided_discovery() {
	var second_quiz_retest = document.getElementById('second_quiz_retest');
	// first_quiz_retest.style.display = 'none';
	second_quiz_retest.remove();

	var gd = document.getElementById('guided_discovery');
	gd.style.display = 'block';

	var progress = document.getElementById('top_bar_progress');
	progress.value = '58';

	var control_btn = document.getElementById('control_button_cont');
	control_btn.innerHTML = "<button onclick='change_to_guided_discovery_fb()' class='main-btn'><span>Next</span></button>";

	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;

 	var fb = document.getElementById('fb');
	fb.innerHTML = "";

	var control = document.getElementById('control');
	control.classList.remove('control_feedback');

}

function change_to_guided_discovery_fb() {
	var gd = document.getElementById('guided_discovery');
	gd.style.display = 'none';

	var gd_fb = document.getElementById('guided_discovery_fb');
	gd_fb.style.display = 'block';

	var control_btn = document.getElementById('control_button_cont');
	control_btn.innerHTML = "<button onclick='change_to_third_quiz()' class='main-btn'><span>Next</span></button>";

	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;
}


function change_to_third_quiz() {
	var guided_discovery_fb = document.getElementById('guided_discovery_fb');
	// first_quiz_retest.style.display = 'none';
	guided_discovery_fb.style.display = 'none';

	var third_quiz = document.getElementById('third_quiz');
	third_quiz.style.display = 'block';

	var control_btn = document.getElementById('control_button_cont');
	control_btn.innerHTML = "<button onclick='check_third_quiz_answer()' class='main-btn'><span>Next</span></button>";


	var progress = document.getElementById('top_bar_progress');
	progress.value = '66';

	//scroll to the top

	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;
}

function check_third_quiz_answer(){
	var choice_B = document.getElementById('first_quiz_B');
	var fb = document.getElementById('fb');
	var control = document.getElementById('control');

	if (choice_B.classList.contains('selected_choice')) {
		fb.innerHTML = "<p>That's what we thought! Watch the video to learn more.</p>"

	} else {
		fb.innerHTML = "<p>Not quite right. Watch the video to learn more.</p>"
	};

	control.classList.add('control_feedback')

	var control_btn = document.getElementById('control_button_cont');
	control_btn.innerHTML = "<button onclick='change_to_third_video()' class='main-btn'><span>Next</span></button>";


}

function change_to_third_video() {

	var third_quiz = document.getElementById('third_quiz');
	third_quiz.remove();

	var third_video = document.getElementById('third_video');
	third_video.style.display = 'block';

	var control_btn = document.getElementById('control_button_cont');
	control_btn.innerHTML = "<button onclick='change_to_third_quiz_retest()' class='main-btn'><span>Next</span></button>";

	var fb = document.getElementById('fb');
	fb.innerHTML = "";

	var control = document.getElementById('control');
	control.classList.remove('control_feedback');

	var progress = document.getElementById('top_bar_progress');
	progress.value = '74';

	//scroll to the top

	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;

}

function change_to_third_quiz_retest(){
	var third_video = document.getElementById('third_video');
	third_video.remove();

	var third_quiz_retest = document.getElementById('third_quiz_retest');
	third_quiz_retest.style.display = 'block';

	var control_btn = document.getElementById('control_button_cont');
	control_btn.innerHTML = "<button onclick='check_third_quiz_retest_answer()' class='main-btn'><span>Next</span></button>";
	
	var progress = document.getElementById('top_bar_progress');
	progress.value = '82';

	//scroll to the top

	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;
}

function check_third_quiz_retest_answer() {
	var choice_B = document.getElementById('first_quiz_B');
	var fb = document.getElementById('fb');
	var control = document.getElementById('control');

	if (choice_B.classList.contains('selected_choice')) {
		fb.innerHTML = "<p>That's what we thought! Our answer is: the compressor changes the temperature and pressure of the refrigerant, making it very hot and of high pressure.</p>"

	} else {
		fb.innerHTML = "<p>Not quite right. Our answer is: the compressor changes the temperature and pressure of the refrigerant, making it very hot and of high pressure.</p>"
	};

	control.classList.add('control_feedback')

	var control_btn = document.getElementById('control_button_cont');
	control_btn.innerHTML = "<button onclick='change_to_post_test()' class='main-btn'><span>Next</span></button>";
}



function change_to_post_test() {
	var third_quiz_retest = document.getElementById('third_quiz_retest');
	third_quiz_retest.style.display = 'none';

	var post_assess = document.getElementById('post_assess');
	post_assess.style.display = 'block';

	var control_btn = document.getElementById('control_button_cont');
	control_btn.innerHTML = "<button onclick='check_post_test_answer()' class='main-btn'><span>Check</span></button>";

	var fb = document.getElementById('fb');
	fb.innerHTML = "";

	var control = document.getElementById('control');
	control.classList.remove('control_feedback');

	var progress = document.getElementById('top_bar_progress');
	progress.value = '90';

	//scroll to the top

	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;

 	var control = document.getElementById('control');
	control.style.position = 'relative';
}


function check_post_test_answer(){

	var control_btn = document.getElementById('control_button_cont');
	control_btn.innerHTML = "<button class='main-btn'><span>Yeah</span></button>";

	var fb = document.getElementById('fb');
	fb.innerHTML = "<p>Cold gas refrigerant travels through the compressor and becomes hot gas. It travels through the condenser and becomes hot liquid.</p>"

	var control = document.getElementById('control');
	control.classList.add('control_feedback');

	var progress = document.getElementById('top_bar_progress');
	progress.value = '100';

	//scroll to the top

	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;

 	var control = document.getElementById('control');
	control.style.position = 'absolute';
}

// Select and unselect multiple choices

function choose_A_as_answer() {
	var selected = document.getElementById('first_quiz_A');
	//selected.className += " selected_choice"
	selected.classList.toggle('selected_choice');

	var quiz_B = document.getElementById('first_quiz_B');
	var quiz_C = document.getElementById('first_quiz_C');
	var quiz_D = document.getElementById('first_quiz_D');

	quiz_B.classList.remove('selected_choice');
	quiz_C.classList.remove('selected_choice');
	quiz_D.classList.remove('selected_choice');
}

//multiple choice

function choose_B_as_answer() {
	var selected = document.getElementById('first_quiz_B');
	//selected.className += " selected_choice"
	selected.classList.toggle('selected_choice');

	var quiz_A = document.getElementById('first_quiz_A');
	var quiz_C = document.getElementById('first_quiz_C');
	var quiz_D = document.getElementById('first_quiz_D');

	quiz_A.classList.remove('selected_choice');
	quiz_C.classList.remove('selected_choice');
	quiz_D.classList.remove('selected_choice');
}

function choose_C_as_answer() {
	var selected = document.getElementById('first_quiz_C');
	//selected.className += " selected_choice"
	selected.classList.toggle('selected_choice');

	var quiz_A = document.getElementById('first_quiz_A');
	var quiz_B = document.getElementById('first_quiz_B');
	var quiz_D = document.getElementById('first_quiz_D');

	quiz_A.classList.remove('selected_choice');
	quiz_B.classList.remove('selected_choice');
	quiz_D.classList.remove('selected_choice');
}

function choose_D_as_answer() {
	var selected = document.getElementById('first_quiz_D');
	//selected.className += " selected_choice"
	selected.classList.toggle('selected_choice');

	var quiz_A = document.getElementById('first_quiz_A');
	var quiz_B = document.getElementById('first_quiz_B');
	var quiz_C = document.getElementById('first_quiz_C');

	quiz_A.classList.remove('selected_choice');
	quiz_B.classList.remove('selected_choice');
	quiz_C.classList.remove('selected_choice');
}

