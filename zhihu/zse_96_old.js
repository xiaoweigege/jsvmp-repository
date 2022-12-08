let init_str = "RuPtXwxpThIZ0qyz_9fYLCOV8B1mMGKs7UnFHgN3iDaWAJE-Qrk2ecSo6bjd4vl5"
function encode(ar) {
    let b = ar[1] << 8,
        c = ar[0] | b,
        d = ar[2] << 16,
        e = c | d,
        result_array = [],
        x6 = 6;
    result_array.push(e & 63);
    while (result_array.length < 4){
        let a = e >>> x6;
        result_array.push(a & 63);
        x6 += 6;
    }
    return result_array
}

function get_x96(md5_str){
    let _md5_str = md5_str + "\u0000";
    let array1 = [],
        result_array = [],
        result = "";
    for (let i = md5_str.length; i >= 0; i--) {
        let charcode = _md5_str.charCodeAt(i);
        if (i % 4 === 0){
            charcode ^= 42
        }
        array1.push(charcode)
    }
    for (let j = 0; j <= array1.length; j++) {
        if (j % 3 === 0 && j !== 0){
            let ar = array1.slice(j-3, j);
            result_array = result_array.concat(encode(ar))
        }
    }
    for (let index = 0; index < result_array.length; index++) {
        result += init_str.charAt(result_array[index])
    }
    return result
}

console.log(get_x96("aaaa996c55cf64c7dd6414484df2c210"));
console.log("aRY0kHH0N9Np6_tqm_FqHbeqF9tpNqOqs0Nqb098UwSf");