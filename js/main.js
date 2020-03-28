

function to_topic(){
	var name_enter = document.getElementById('name_enter');
	name_enter.style.display = 'none';

	var learn_topic = document.getElementById('learn_topic');
	learn_topic.style.display = 'block';

	//scroll to the top

	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;
}

function change_to_first_video() {
	//remove the entire first quiz div to avoid repetition in id
	var learn_topic = document.getElementById('learn_topic');
	learn_topic.style.display = 'none';

	var first_video = document.getElementById('first_video');
	first_video.style.display = 'block';

	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;
}

function change_to_first_quiz(){
	var first_video = document.getElementById('first_video');
	first_video.style.display = 'none';

	var first_quiz = document.getElementById('first_quiz');
	first_quiz.style.display = 'block';

	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;

}


function change_to_team_assign(){
	var first_quiz = document.getElementById('first_quiz');
	first_quiz.style.display = 'none';

	var team_assign = document.getElementById('team_assign');
	team_assign.style.display = 'block';

	var userInput = document.getElementById('name_input').value;
	document.getElementById('myName').innerHTML = userInput


	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;

}

function change_to_first_doc(){
	var team_assign = document.getElementById('team_assign');
	team_assign.style.display = 'none';

	var dis_1 = document.getElementById('dis_1');
	dis_1.style.display = 'block';


	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;

 	startTimer1();
}

function change_to_second_doc(){
	var dis_1 = document.getElementById('dis_1');
	dis_1.style.display = 'none';

	var dis_2 = document.getElementById('dis_2');
	dis_2.style.display = 'block';


	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;

 	startTimer2();
}

function change_to_third_doc(){
	var dis_2 = document.getElementById('dis_2');
	dis_2.style.display = 'none';

	var dis_3 = document.getElementById('dis_3');
	dis_3.style.display = 'block';


	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;

 	startTimer3();
}

function change_to_post_test(){
	var dis_3 = document.getElementById('dis_3');
	dis_3.style.display = 'none';

	var post_assess = document.getElementById('post_assess');
	post_assess.style.display = 'block';

}

function change_to_final_score() {
	var post_assess = document.getElementById('post_assess');
	post_assess.style.display = 'none';

	var final_score = document.getElementById('final_score');
	final_score.style.display = 'block';

	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;
}

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


//Timer
document.getElementById('timer1').innerHTML =
  005 + ':' + 00;

document.getElementById('timer2').innerHTML =
  005 + ':' + 00;

document.getElementById('timer3').innerHTML =
  005 + ':' + 00;

function startTimer1() {
  var presentTime = document.getElementById('timer1').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  
  document.getElementById('timer1').innerHTML =
    m + ":" + s;

  setTimeout(startTimer1, 1000);
}

function startTimer2() {
  var presentTime = document.getElementById('timer2').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  
  document.getElementById('timer2').innerHTML =
    m + ":" + s;

  setTimeout(startTimer2, 1000);
}

function startTimer3() {
  var presentTime = document.getElementById('timer3').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  
  document.getElementById('timer3').innerHTML =
    m + ":" + s;

  setTimeout(startTimer3, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

