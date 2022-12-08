let CryptoJS = require("crypto-js");

function md5(strs) {
    return CryptoJS.MD5(strs).toString();
}

function final_encode(array_32) {
    let offset_str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let result = "";
    for (let i = 0; i <= 15; i += 3) {
        let a = array_32[i] >> 2,
            b_1 = array_32[i] & 3,
            b_2 = b_1 << 4,
            b_3 = array_32[i + 1] >> 4,
            b = b_3 | b_2,
            c_1 = array_32[i + 1] & 15,
            c_2 = c_1 << 2,
            c_3 = array_32[i + 2] >> 6,
            c = c_2 | c_3,
            d = array_32[i + 2] & 63;
        if (i === 15) {
            let a = array_32[i] >> 2,
                b_1 = array_32[i] & 3,
                b = b_1 << 4;
            result += offset_str[a] + offset_str[b]
        } else {
            result += offset_str[a] + offset_str[b] + offset_str[c] + offset_str[d]
        }

    }
    return result
}

function get_array_32(md5_offset_array) {
    let offset_array = [212, 45, 80, 68, 195, 163, 163, 203, 157, 220, 254, 91, 204, 79, 104, 6]
    let result_array = [];
    for (let i = 0; i < offset_array.length; i++) {
        let a = i * 2,
            b_1 = md5_offset_array[a] * 16,
            b_2 = b_1 + md5_offset_array[a + 1],
            b = b_2 ^ offset_array[i];
        result_array.push(b, b)
    }
    return result_array
}

function get_head_str(data_md5) {
    let head_array = [21, 4, 9, 26, 16, 20, 27, 30];
    let head_result = [];
    for (let i = 0; i < head_array.length; i++) {
        head_result.push(data_md5[head_array[i]])
    }
    return head_result.join("")
}

function get_end_str(data_md5) {
    let head_array = [18, 11, 3, 2, 1, 7, 6, 25];
    let head_result = [];
    for (let i = 0; i < head_array.length; i++) {
        head_result.push(data_md5[head_array[i]])
    }
    return head_result.join("")
}


function get_body_str(data_md5) {
    let offset_object = {
        "0": 0,
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "A": 10,
        "B": 11,
        "C": 12,
        "D": 13,
        "E": 14,
        "F": 15
    };
    let md5_offset_array = [];
    for (let i = 0; i < data_md5.length; i++) {
        md5_offset_array.push(offset_object[data_md5[i]])
    }
    let array_32 = get_array_32(md5_offset_array);
    return final_encode(array_32)


}


function get_sign(data) {
    let data_md5 = md5(data).toUpperCase();
    let head = get_head_str(data_md5);
    let body = get_body_str(data_md5);
    let end = get_end_str(data_md5)
    return `zzb${head}${body}${end}`.toLowerCase().replace(/[\/+]/g, "")
}

let data = '{"comm":{"cv":4747474,"ct":24,"format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"yqq.json","needNewCode":1,"uin":0,"g_tk_new_20200303":5381,"g_tk":5381},"req_1":{"module":"music.musichallSinger.SingerList","method":"GetSingerListIndex","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":240,"cur_page":4}}}';

console.log(get_sign(data));
console.log("zzbd2c3c8c8nzc4ohv1mprpzvrhobn5w28513edc")