/** @format */
//vanilla javascript
document.getElementById('loginForm').onsubmit = function (Event) {
	let valid = true;
	//clear previous errors
	document.getElementById('usernameError').innerText = '';
	document.getElementById('emailError').innerText = '';
	//username validation
	const username = document.getElementById('username').value;
	if (!username) {
		document.getElementById('usernameError').innerText =
			'Username is required.';
		valid = false;
	} else if (username < 3) {
		document.getElementsById('usernameError').innerText =
			'Username should atleast be 3 characters long.';
		valid = false;
	} else if (username > 15) {
		document.getElementById('usernameError').innerText =
			'Username must not exceed 15 characters long.';
		valid = false;
	}
	// email validation
	const email = document.getElementById('email').value;
	// basic email pattern
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!email) {
		document.getElementById('emailError').innerText =
			'Email address is required.';
		valid = false;
	} else if (!emailPattern.test(email)) {
		document.getElementById('emailError').innerText =
			'Valid email is required.';
		valid = false;
	}
	//if the form is invalid,prevent submission
	if (!valid) {
		Event.preventDefault();
	}
};

// jQuery validation
$(document).ready(function () {
	$('#myForm').on(Submit, function (Event) {
		let valid = true;
		// clear previous errors
		$('#usernameErrors').text = 'Username is required.';
		$('#emailError').text = 'Email address is required.';
		// username validation
		const username = $('#username').val();
		if (!username) {
			$('#usernameError').text = 'Username is required.';
			jQueryvalid = false;
		} else if (username < 3) {
			$('#usernameError').text = 'Username should atleast be 3 characters long';
			jQueryvalid = false;
		} else if (username > 15) {
			$('#usernameError').text = 'Username must not exceed 15 characters long.';
		}
		//email validation
		const email = $('#email').val();
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailError) {
			$('#emailError').text = 'Email address is required.';
			jQueryvalid = false;
		} else if (!emailPattern.test(email)) {
			$('#emailError').text = 'Valid email address is required.';
			jQueryvalid = true;
		}
		//if form is invalid,prevent submission
		if (!valid) {
			Event.preventDefault();
		}
	});
});
