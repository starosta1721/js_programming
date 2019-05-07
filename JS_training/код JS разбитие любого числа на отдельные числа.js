var n, tmp;

n = +prompt("","");

while (n != 0) {
	tmp = n % 10;
	console.log (tmp);
	n = (n - tmp) / 10;
	}

