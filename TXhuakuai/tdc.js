function tea_encrypt(encrypt_data) {
    // let Key1 = [1730687534 + 2302746, 1432701801, 1431585092, 1431454779 + 1250068];
    var Key = [1732990280, 1432701801, 1431585092, 1432704847];   // 秘钥固定？
    var x = encrypt_data[0];
    var y = encrypt_data[1];
    var sum = 0;
    var delta = 0x9E3779B9;
    for (var i = 0; i < 32; i++) {
        x += (((y << 4) ^ (y >>> 5)) + y) ^ (sum + Key[sum & 3]);
        sum += delta;
        y += (((x << 4) ^ (x >>> 5)) + x) ^ (sum + Key[(sum >> 11) & 3]);
    }
    let result = "";
    for (let x_y of [x, y]) {
        let array_4 = []
        for (let i of [0, 8, 16, 24]) {
            array_4.push(x_y >> i & 255)
        }
        result += String.fromCharCode.apply(this, array_4)
    }
    return result
}

function section_str_encode(section_str) {
    return section_str.charCodeAt(0) | section_str.charCodeAt(1) << 8 | section_str.charCodeAt(2) << 16 | section_str.charCodeAt(3) << 24
}

function encrypt(encrypt_str, _str_pad = true) {
    let btoa_str = "";
    let encrypt_array = [];
    if (_str_pad) {
        let _str_pad_length = 24 - encrypt_str.length % 24;
        for (let i = 0; i < _str_pad_length; i++) {
            encrypt_str += " "
        }
    }
    for (let i = 0; i < encrypt_str.length; i += 8) {
        let encrypt_str_section_1 = encrypt_str.slice(i, i + 4);
        let encrypt_str_section_2 = encrypt_str.slice(i + 4, i + 8);
        encrypt_array.push([section_str_encode(encrypt_str_section_1), section_str_encode(encrypt_str_section_2)])
    }
    for (let i = 0; i < encrypt_array.length; i++) {
        btoa_str += tea_encrypt(encrypt_array[i]);
    }
    return btoa(btoa_str)
}


// 浏览器指纹
let encrypt_str_1 = '{"cd":["+08","https://t.captcha.qq.com/template/drag_ele.html?rand=1519713624347","ANGLE (NVIDIA, NVIDIA Quadro P400 Direct3D11 vs_5_0 ps_5_0, D3D11)",0,1080,"iframe",2,"98k",[],1670467552,"https://xui.ptlogin2.qq.com/cgi-bin/xlogin?rand=1512991986334",1,1023,24,"GgoAAAANSUhEUgAAASwAAACWn7gsdfsFSfegdfeSDWwwriPeJDADJ8P4nxW8gAAAABJRU5ErkJggg==","UTF-8",1724514466,1670467552,1003,"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",2,"",0,0,1.5850000381469727,1920,["zh-CN"],"127.0.0.1",'
// 轨迹,此处省略一百个数组
let encrypt_str_2 = '[[19,227,56362],[4,-2,10],[1,-1,8],[2,0,8],[3,0,8],[3,-1,11],[1,1,12]]'
// 固定
let encrypt_str_4 = '"sd":{"od":"C","ft":"qf_7P___H"}}'

console.log(encrypt(encrypt_str_1));
console.log(encrypt(encrypt_str_2));
console.log(encrypt(encrypt_str_4, false));
