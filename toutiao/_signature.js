function get_last_two_str(data_str) {
    let start_num = 0;
    for (let char of data_str) {
        let charCode = char.charCodeAt();
        start_num *= 65599;
        start_num += charCode;
        start_num >>>= 0;
    }
    start_num = parseInt(start_num).toString(16);
    return start_num.substr(6, 2);
}

function get_offset_num(strs, offset_num) {
    for (let _index = 0; _index < strs.length; _index++) {
        offset_num ^= strs.charCodeAt(_index)
        offset_num *= 65599
        offset_num >>>= 0
    }
    return offset_num
}

function get_head_str(head_str_array) {
    let str = "";
    for (let num = 0; num < head_str_array.length; num++) {
        if (num === head_str_array.length - 1) {
            let a = head_str_array[num],
                b = a & 63;
            if (b < 26) {
                b += 65;
            } else if (b < 52) {
                b += 71;
            } else if (b < 62) {
                b -= 4;
            } else {
                b -= 17;
            }
            str += String.fromCharCode(b)
        } else {
            let offset_num = 24;
            while (offset_num >= 0) {
                let a = head_str_array[num] >> offset_num,
                    b = a & 63;
                if (b < 26) {
                    b += 65;
                } else if (b < 52) {
                    b += 71;
                } else if (b < 62) {
                    b -= 4;
                } else {
                    b -= 17;
                }
                str += String.fromCharCode(b)
                offset_num -= 6
            }
        }
    }
    return str
}

function get_end_str(end_str_array) {
    let str = "";
    for (let num = 0; num < end_str_array.length; num++) {
        let offset_num = 24;
        while (offset_num >= 0) {
            let a = end_str_array[num] >> offset_num,
                b = a & 63;
            if (b < 26) {
                b += 65;
            } else if (b < 52) {
                b += 71;
            } else if (b < 62) {
                b -= 4;
            } else {
                b -= 17;
            }
            str += String.fromCharCode(b)
            offset_num -= 6
        }
    }
    return str
}

function get_head_array(head_num) {
    let num_4 = -1 ^ head_num,
        num_1 = head_num >> 2,
        num_2_1 = head_num << 28,
        num_2 = num_2_1 | 515,
        num_3_1 = num_4 >>> 6,
        num_3 = -1073741824 | num_3_1;
    return [num_1, num_2, num_3, num_4]
}

function get_head_num(href) {
    let timestamp = (new Date().getTime() / 1000) >>> 0 + "",
    //     let timestamp = "1662971138",
        offset_num = 0,
        href_ = href.substring(7);
    for (let time_href_index = 0, time_href = [timestamp, href_]; time_href_index < time_href.length; time_href_index++) {
        offset_num = get_offset_num(time_href[time_href_index], offset_num)
    }
    offset_num %= 65521
    let final_end_array_num = offset_num
    offset_num *= 65521
    offset_num = timestamp ^ offset_num
    offset_num >>>= 0
    offset_num = offset_num.toString(2);
    if (offset_num.length < 32) {
        let _index = 32 - offset_num.length;
        let str_0 = "";
        while (_index > 0) {
            str_0 += "0"
            _index--
        }
        offset_num = str_0 + offset_num
        offset_num = "10000000110000" + offset_num
    }
    return [parseInt(offset_num, 2), final_end_array_num]
}

function get_end_array(head_num, end_num) {
    let num_1 = end_num >> 2,
        num_2_1 = 557344 ^ head_num,
        num_2_2 = end_num << 28,
        num_2_3 = num_2_1 >>> 4,
        num_2 = num_2_2 | num_2_3;
    return [num_1, num_2]
}

function get_end_num(head_num, user_agent, url_params) {
    let offset_num = get_offset_num(head_num.toString(), 0),
        user_agent_num = (get_offset_num(user_agent, offset_num) % 65521) << 16,
        url_params_num = get_offset_num(url_params, offset_num) % 65521;
    return user_agent_num | url_params_num
}

function init_url_params(url_params) {
    let a = url_params.split("?")[1],
        b = a.split("&"),
        c = {};
    for (const bKey in b) {
        let data_array = b[bKey].split("=");
        c[data_array[0]] = data_array[1]
    }
    let data_keys = Object.keys(c).sort(),
        final_str = "";
    for (let data_index in data_keys) {
        final_str += data_keys[data_index] + "=" + c[data_keys[data_index]] + "&"
    }
    let d = url_params.replace(/(http:\/\/|https:\/\/|\/\/)?[^\/]*/, ""),
        e = d.indexOf("?"),
        pathname = d.substr(0, e);
    final_str += "pathname=" + pathname + "&tt_webid=&uuid="
    return final_str
}

function get_signature(href, user_agent, url) {
    let head_final_num = get_head_num(href),
        head_num = head_final_num[0],
        final_end_array_num = head_final_num[1],
        head_str_array = get_head_array(head_num),
        end_num = get_end_num(head_num, user_agent, init_url_params(url)),
        end_str_array = get_end_array(head_num, end_num),
        head_str = get_head_str(head_str_array),
        end_str = get_end_str(end_str_array.concat(final_end_array_num)),
        data_str = "_02B4Z6wo00f01" + head_str + end_str,
        last_two_str = get_last_two_str(data_str);
    return data_str + last_two_str
}


let href = "https://www.toutiao.com/";
let url = 'https://www.toutiao.com/api/pc/list/feed?channel_id=0&max_behot_time=1663125446&category=pc_profile_recommend&aid=24&app_name=toutiao_web'
let user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36";
console.log(get_signature(href, user_agent, url));
