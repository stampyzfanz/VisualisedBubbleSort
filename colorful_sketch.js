let vals = [];

let i = 0;

function setup() {
	// createCanvas(600, 400);
	createCanvas(600, 400); // quicker

	for (let i = 0; i < width; i++) {
		let r = random(255);
		let g = random(255);
		let b = random(255);
		vals[i] = color(r, g, b);
	}

	// values = sort(vals);

	// for (let i = 0; i < vals.length; i++) {
	// 	for (let j = 0; j < vals.length-i-1; j++) {
	// 		if (vals[j+1] < vals[j]) {
	// 			swap(vals, j+1, j)
	// 		}
	// 	}
	// }
}



function draw() {
	background(0);

	for (let k = 0; k < vals.length; k++) {
		stroke(vals[k]);
		line(k, height, k, 0);
	}

	for (let j = 0; j < vals.length-i-1; j++) {
		if (hue(vals[j+1]) > hue(vals[j])) {
			swap(vals, j+1, j);
		}
	}

	if (i >= vals.length) {
		noLoop();
	}

	i++;
}



function swap(arr, a, b) {
	// good:
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;

	// bad lagecy:
		// // save v (vals)
		// let v1 = arr[i1];
		// let v2 = arr[i2];

		// //change vals
		// arr[i1] = v2;
		// arr[i2] = v1;
}
