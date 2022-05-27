/**
 * jumlahkan semua angka dan string yang menjadi parameter
 */

function sum(...param) {
	var num = 0;
	for(let i = 0; i < param.length; i++){
		if(param[i].length > 1){
			for(let j = 0; j < param[i].length; j++){
				num = num + Number(param[i][j]);
			}
		}
		else num = num + Number(param[i]);
	}
	return num;
}

/**
 * contoh
 * sum(1,2,'3','4')
 * 10
 */

console.log(sum(3, 6, "3", "2", 5, 7));
console.log(sum("5", 5, "2", 2));
console.log(sum("123123123"));
