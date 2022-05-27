/**
 * disediakan array yang menunujukkan harga stock/saham dalam beberapa hari [array]
 * carilah maksimal keuntungan yang mungkin didapat
 * keuntungan = jual - beli
 * anda hanya bisa sell setelah anda buy
 * untung selalu dimulai dari 0
 */

function maxUntung(prices) {
  var untung = 0, terbesar = 0;
  for(let i = 0; i < prices.length; i++){
    for(let j = i + 1; j < prices.length; j++){
      untung = prices[j] - prices[i];
      if(untung > terbesar) terbesar = untung;
    }
  }
  return terbesar;
}

/**
 * contoh
 * maxUntung([1,2,3,4])
 * 3
 * penjelasan:
 * buy di hari 1 (index 0) dan sell di hari terakhir (index 3)
 */
console.log(maxUntung([1, 2, 3, 4, 5, 3]));
console.log(maxUntung([4, 7, 2, 3, 9, 3]));
console.log(maxUntung([9, 7, 6, 4, 2, 1]));
