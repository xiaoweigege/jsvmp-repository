# -*- coding: utf-8 -*-
import json
import re
import execjs
import requests

from loguru import logger

with open("./eval_init_list.js", "r", encoding="utf-8")as f:
    ctx = execjs.compile(f.read())


def get_final_list(_list):
    result_array = []
    _index = 0
    while _index < 8:
        head_list = result_array[(_index - 1) * 8:_index * 8]
        for i in range(8):
            aa = (_index * 8 + i) % 8
            bb = (_index * 8 + i) // 8
            list_index = aa * 8 + bb
            if _index == 0:
                result_array.append(_list[list_index])
            else:
                if i == 0:
                    result_array.append((head_list[0] + head_list[1]) // 2 + _list[list_index])
                elif i == 7:
                    result_array.append((head_list[6] + head_list[7]) // 2 + _list[list_index])
                else:
                    result_array.append((head_list[i - 1] + head_list[i] + head_list[i + 1]) // 3 + _list[list_index])
        _index += 1
    return result_array


def final_list_offset(_list):
    result = ""
    aa = []
    for i in range(64):
        list_index = i % 8 * 8 + i // 8
        aa.append(_list[list_index])
        result += chr(_list[list_index])
    logger.info(f"final_list --> {aa}")
    return result


def decode(encode_str):
    def n(e):
        f = []
        t = len(e)
        for u in range(t):
            w = ord(e[u])
            if (w >> 7) & 255 == 0:
                f.append(e[u])
            else:
                if (w >> 5) & 255 == 6:
                    u += 1
                    b = ord(e[u]) & 63
                    a = (w & 31) << 6
                    f.append(chr(a | b))
                else:
                    if ((w >> 4) & 255) == 14:
                        u += 1
                        b = ord(e[++u])
                        u += 1
                        d = ord(e[++u])
                        a = ((w << 4) | ((b >> 2) & 15) & 255) << 8
                        c = ((b & 3) << 6) | (d & 63)
                        f.append(chr(a | c))
        return f

    def _reduce(offset_list):
        result_list = []

        for _str in offset_list:
            if not result_list or len(result_list[-1]) == 5:
                result_list.append([])
            result_list[-1].append(ord(_str) - 1)

        return result_list

    k = list("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
    _l = 0
    m = []
    while _l < len(encode_str):
        try:
            s = k.index(encode_str[_l])
            r = k.index(encode_str[_l + 1])
            q = k.index(encode_str[_l + 2])
            o = k.index(encode_str[_l + 3])
            i = (s << 2) | (r >> 4)
            h = ((r & 15) << 4) | (q >> 2)
            g = ((q & 3) << 6) | o
            m.append(chr(i))
            if q != 64:
                m.append(chr(h))
            if o != 64:
                m.append(chr(g))
            _l += 4
        except Exception as e:
            break
    return _reduce(n("".join(m)))


def get_testab(res_dict):
    logger.info(f"b_d --> {res_dict}")
    b = decode(res_dict["b"])
    init_list = ctx.call("Antares", b, res_dict["d"])
    logger.info(f"init_list --> {init_list}")
    final_list = get_final_list(init_list)
    result = final_list_offset(final_list)
    logger.info(f"result --> {result}")
    return result


def get_res_dict():
    url = "https://m.ctrip.com/restapi/soa2/21881/json/getHotelScript"
    headers = {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
    }
    res = requests.get(url, headers=headers)
    return json.loads(re.search("\(\)\(window,(.*?)\);}\)\(\);", res.json().get("Response")).group(1))


if __name__ == '__main__':
    res_dict = get_res_dict()
    get_testab(res_dict)
