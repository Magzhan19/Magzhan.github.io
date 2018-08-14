//alert("Hello");
//confirm("Hi");

/*var person;

if(confirm("Are you sure?")) {
   person =	prompt();
	alert("Hello " + person);
}
else {alert("Person not sure");}*/
/*
var arr = new Array("string", 1.23, 7, false);
//document.write(arr[0] + "<br>" + arr[1] + "<br>" + arr[2] + "<br>" + arr[3]);

for(i = 0; i<arr.length; i++){
	document.write(arr[i] + i + "<br>");
}

arr = new Array();
for(i = 0; i<10; i++){
	arr[i] = i * 3;
	document.write(arr[i] + "<br>");
}


var sum = 0;
for(i = 0; i<arr.length; i++){
	sum +=arr[i];
}
document.write("middle sum = " + sum/arr.length);
*/

var arr_1 = new Array();
var arr_2 = new Array();
var arr_3 = new Array();

for(var i = 0; i < 5; i++) arr_1[i] = i;
for(var i = 0; i < 10; i++) arr_2[i] = i;
for(var i = 0; i < 15; i++) arr_3[i] = i;

var arr = new Array(arr_1, arr_2, arr_3);



//document.write("<br>");

for(var x = 0; x < arr.length; x++){
	for(var j = 0; j < arr[x].length; j++){
		document.write(arr[x][j] + " ");
	}
	document.write("<br>");
}

  var arr = new Array(1,2,3,4,5,6);
for(var x = 0; x <arr.length; x++){
	document.write(arr[x]);
}

document.write("<br>");
document.write("<br>");

function print (text) {
	document.write(text);
}

print("hello");
print("<br>");
print("world");
print("<br>");
 

 var sum;
function d(text) {
	document.write(text);
}



function count(x, y) {
  sum = x + y;
}

count(5,6);
d(sum);
 
 print("<br>");
/**
var name = prompt();
if(name == "Magzhan") {document.write("Hi boss");}
else { document.write("Hello person " + name);}
**/

var y = 3;
do{
  document.write("Цикл сработал один раз" + "<br>");
  y++;
}
while (y<6);
/**
function buttonClick(knopka) {
	alert("You click button " + "type = " + " " + knopka.type + " " + "name = " + knopka.name + "value = " + knopka.value);
}


function inlinePage () {
	alert("Страница загрузилась");
}

  var i = 0;
function counter(element) {
	
	i++;
  element.innerHTML = "На этот текст было наведено " + i + " раз";
}
**/

function valid(form) {
	var fail = false;
	var name = form.name.value;
	var email = form.email.value;
	var password = form.password.value;
	var RePassword = form.RePassword.value;
	var state = form.state.value;
 
 if(name == "" || name == " ") fail = "Вы не ввели свое имя";
 else if(email== "") 
 	fail = "Вы не ввели email";
 else if(password == "") 
 	fail = "Вы не ввели пароль";
 else if(password !== RePassword) 
 	fail = "Пароли не совпадают";
 else if(state == "") 
 	fail = "Укажите пол";
  if(fail) 
  	alert(fail);
  	
  	else 
  		window.location = "http:google.com";
}





