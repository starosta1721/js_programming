function max(arr) {
	var arrMax, temp = arr[0];
	for (i = 0; i < arr.length; i++) {
		if (arr[i] > temp) {
			arrMax = arr[i];
			temp = arr[i];
		} else {
			arrMax = temp;
			temp = arr[i];
		};

	};
	console.log(arrMax);
};

max([234, 0, 123, 456, -3, -100, 1234]);
