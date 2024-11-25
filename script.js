document.getElementById("mybutton").addEventListener
("click", szamol);

document.getElementById("myform").addEventListener
("submit",function(e) {
			let usernev = document.getElementById('nev').value;
			if (usernev == '') {
				alert('Kérjük, adja meg a nevét!');
				e.preventDefault();
			}
	
}
);

		function szamol() {
			let tipusido = 0;
			let extra1 = 0;
			let extra2 = 0;
			let extra3 = 0;
			if (document.getElementById('felhokarc').checked) {
				tipusido = 30;
			}
			if (document.getElementById('tarsas').checked) {
				tipusido = 20;
			}
			if (document.getElementById('csaladi').checked) {
				tipusido = 15;
			}

			if (document.getElementById('medence').checked) {
				extra1 = tipusido * 0.05;
			}
			if (document.getElementById('uvegfalak').checked) {
				extra2 = tipusido * 0.1;
			}
			if (document.getElementById('napelem').checked) {
				extra3 = tipusido * 0.15;
			}

			document.getElementById('ido').value = tipusido + extra1 + extra2 + extra3;
		}







