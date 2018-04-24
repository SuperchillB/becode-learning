let inputs = $('input');
let hasRedBorder = false;

// WHEN YOU SUBMIT FORM
$('#send').on('click', function(e) {
	for(let i = 0, length1 = inputs.length; i < length1; i++){
		// NOTHING HAPPENS IF EMPTY FIELDS
		if (inputs[i].value.length < 5) {
			alert('Make sure all fields correctly filled in');
			e.preventDefault();
			return false;
		}
		// CAN'T SUBMIT IF PASSWORDS NOT MATCHING + RED BORDER
		if ($('#mdp').val() !== $('#mdp-confirm').val()) {
			hasRedBorder = true;
			// alert('no matching passwords');
			$('#mdp, #mdp-confirm').addClass('redBorder');
			$('#passConfirmHelp').addClass('corrector').text("Passwords don't match!");
			e.preventDefault();
			return false;
		}
		// NOTHING HAPPENS IF INCORRECT FIELDS (RED BORDER)
		if (inputs[i].classList.contains('redBorder')) {
			// alert('incorrect input(s)');
			e.preventDefault();
			return false;
		}
	}
})

// REMOVES RED BORDER ON PASSWORD INPUT FIELDS ON FOCUS
$('#mdp, #mdp-confirm').on('focus', function(){
	if (hasRedBorder == true) {
		$(this).removeClass('redBorder');
	}
})


// PSEUDO VALIDATION, HELPER & CORRECTOR
$('#pseudo').on('blur', function(){
	if ($('#pseudo').val().length >= 5 && $('#pseudo').val().length <= 12 && $('#pseudo').val() != "") {
		$(this).addClass('greenBg');
		$('#pseudoHelp').removeClass('corrector').text('');
	} else if ($('#pseudo').val().length < 5 || $('#pseudo').val().length > 12) {
		$(this).addClass('redBorder');
		$('#pseudoHelp').removeClass('corrector').text('');
	}
	if ($('#pseudo').val() == "") {
		$(this).removeClass('redBorder');
	}
	$('#pseudoHelp').removeClass('helper').text('');
})
$('#pseudo').on('focus', function() {
	$('#pseudoHelp').removeClass('corrector').text('');
	if ($('#pseudo').val().length >= 5 && $('#pseudo').val().length <= 12) {
		$(this).removeClass('greenBg');
	}
	if ($('#pseudo').val().length < 5 || $('#pseudo').val().length > 12) {
		$('#pseudoHelp').addClass('corrector').text('Login should contain min 5 characters and max 12 characters');
	}
	// HELPER:
	if ($('#pseudo').val() == "") {
		$('#pseudoHelp').removeClass('corrector').text('');
		$('#pseudoHelp').addClass('helper').text('Login should contain min 5 characters and max 12 characters');
	}
})
$('#pseudo').on('input', function() {
	$('#pseudoHelp').removeClass('helper').text('');
	if ($('#pseudo').val().length >= 5 && $('#pseudo').val().length <= 12) {
		$(this).removeClass('redBorder');
		$('#pseudoHelp').removeClass('corrector').text('');
	} else if ($('#pseudo').val().length < 5 || $('#pseudo').val().length > 12) {
		$('#pseudoHelp').removeClass('corrector').text('');
	}
})



// PASSWORD VALIDATION, HELPER & CORRECTOR
let passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/;
$('#mdp').on('blur', function(){
	if (passReg.test($('#mdp').val()) == true) {
		$(this).addClass('greenBg');
		$('#passHelp').removeClass('corrector').text('');
	} else if (passReg.test($('#mdp').val()) == false && $('#mdp').val() != "") {
		$(this).addClass('redBorder');
		$('#passHelp').removeClass('corrector').text('');
	}
	if ($('#mdp').val() == "") {
		$('#passHelp').removeClass('corrector').text('');
		$(this).removeClass('redBorder');
	}
	$('#passHelp').removeClass('helper').text('');
})
$('#mdp').on('focus', function() {
	if (passReg.test($('#mdp').val()) == true) {
		$(this).removeClass('greenBg');
	}
	if (passReg.test($('#mdp').val()) == false && $('#mdp').val() != "") {
		$('#passHelp').addClass('corrector').text('Between 6 and 12 characters with at least 1 uppercase, 1 lowercase and 1 number');
	}
	// HELPER:
	if ($('#mdp').val() == "") {
		$('#passHelp').addClass('helper').text('Between 6 and 12 characters with at least 1 uppercase, 1 lowercase and 1 number');
	}
})
$('#mdp').on('input', function() {
	if (passReg.test($('#mdp').val()) == true) {
		$(this).removeClass('redBorder');
		$('#passHelp').removeClass('corrector').text('');
		$('#passHelp').removeClass('helper').text('')
	}
})
$('#mdp-confirm').on('blur', function(){
	if ($('#mdp-confirm').val() != $('#mdp').val() && $('#mdp-confirm').val() != "") {
		$(this).addClass('redBorder');
		$(this).removeClass('greenBg');
		$('#passConfirmHelp').addClass('corrector').text("Passwords don't match!");
	} else if ($('#mdp-confirm').val() == $('#mdp').val()) {
		$(this).removeClass('redBorder');
		$(this).addClass('greenBg');
	}
	if ($('#mdp-confirm').val() == "") {
		$(this).removeClass('greenBg');
	}
})
$('#mdp-confirm').on('focus', function(){
	$('#passConfirmHelp').removeClass('corrector').text("");
})


// EMAIL VALIDATION, HELPER & CORRECTOR
let emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
// let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
// let emailReg = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i
$('#email').on('blur', function(){
	if (emailReg.test($('#email').val()) == true) {
		$(this).addClass('greenBg');
	} else if (emailReg.test($('#email').val()) == false && $('#email').val() != "") {
		$(this).addClass('redBorder');
		$('#emailHelp').addClass('corrector').text("Incorrect email");
	}
	if ($('#email').val() == "") {
		$(this).removeClass('redBorder');
	}
})
$('#email').on('focus', function() {
	if (emailReg.test($('#email').val()) == true) {
		$(this).removeClass('greenBg');
	} else if (emailReg.test($('#email').val()) == false) {
		$('#emailHelp').removeClass('corrector').text("");
	}
})
$('#email').on('input', function() {
	if (emailReg.test($('#email').val()) == true) {
		$(this).removeClass('redBorder');
	}
})