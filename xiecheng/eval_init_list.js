let window = global;
window.self = window;
let _human_c142c = 1
    , _human_ec0be = 0
    , _human_eb499 = true
    , _human_45a2 = false;

function Antares(_human_76c3, _human_3e64_d, _human_07b6) {
    var _human_a29e7 = []
        , _human_637d2 = {}
        , _human_998a9 = {
        _human_b8a40: window
    }
        , _human_d7172 = {};
    var _human_bac1 = function (_human_595d, _human_64d93, _human_40db, _human_756) {
        return {
            _human_326a3: _human_595d,
            _human_6b78d: _human_64d93,
            _human_9b136: _human_40db,
            _human_78ea: _human_756
        };
    };
    var _human_4623d = function (_human_756) {
        return _human_756._human_78ea ? _human_756._human_6b78d[_human_756._human_9b136] : _human_756._human_326a3;
    };
    var _human_d9a993 = function (_human_a3808, _human_a2068) {
        return _human_a2068.hasOwnProperty(_human_a3808) ? _human_eb499 : _human_45a2;
    };
    var _human_d9a992 = function (_human_a3808, _human_a2068) {
        if (_human_d9a993(_human_a3808, _human_a2068)) {
            return _human_bac1(_human_ec0be, _human_a2068, _human_a3808, _human_c142c);
        }
        var _human_cb453;
        if (_human_a2068._human_7e481) {
            _human_cb453 = _human_d9a992(_human_a3808, _human_a2068._human_7e481);
            if (_human_cb453) {
                return _human_cb453;
            }
        }
        if (_human_a2068._human_aca9b) {
            _human_cb453 = _human_d9a992(_human_a3808, _human_a2068._human_aca9b);
            if (_human_cb453) {
                return _human_cb453;
            }
        }
        return _human_45a2;
    };
    var _human_d9a99 = function (_human_a3808) {
        var _human_cb453 = _human_d9a992(_human_a3808, _human_637d2);
        if (_human_cb453) {
            return _human_cb453;
        }
        return _human_bac1(_human_ec0be, _human_637d2, _human_a3808, _human_c142c);
    };
    var _human_94496 = [];
    var _human_90033 = [
        null, function _human_e71ba(_human_40db) {
            return _human_94496[_human_40db];
        }
        , null
        , function (_human_40db) {
            return _human_d9a99(_human_40db);
        }
        , function (_human_40db) {
            return _human_bac1(_human_ec0be, window, _human_3e64_d[_human_40db], _human_c142c);
        }
        , null
        , function (_human_40db) {
            return _human_bac1(_human_ec0be, _human_3e64_d, _human_40db, _human_c142c);
        }
        , null
        , null
    ];

    var _human_baad8 = function (_human_e3dbc, _human_40db) {
        return _human_90033[_human_e3dbc] ? _human_90033[_human_e3dbc](_human_40db) : _human_bac1(_human_ec0be, _human_ec0be, _human_ec0be, _human_ec0be);
    };
    var _human_949ca = function (_human_595d, _human_64d93, _human_40db, _human_756) {
        _human_94496[_human_ec0be] = _human_bac1(_human_595d, _human_64d93, _human_40db, _human_756)
    };
    var _human_5cb55 = function (_human_c8c43) {
        var _human_09073 = _human_ec0be;
        while (_human_09073 < _human_c8c43.length) {
            var _human_2b4e = _human_c8c43[_human_09073];
            var _human_967a = _human_8e5ec[_human_2b4e[_human_ec0be]];

            _human_09073 = _human_967a(_human_2b4e[1], _human_2b4e[2], _human_2b4e[3], _human_2b4e[4], _human_09073, _human_76c3, _human_c8c43);
        }
    };
    var _human_8e5ec = [
        function (p0, p1, p2, p3, p4, p5, p6) {
            var _human_8d7dc = _human_4623d(_human_baad8(p0, p1));
            let res = _human_a29e7.splice(_human_a29e7.length - _human_8d7dc, _human_8d7dc).map(_human_4623d);
            _human_949ca(res, _human_07b6, _human_07b6, 0);
            return ++p4;
        }
        , function (p0, p1, p2, p3, p4, p5, p6) {
            _human_637d2 = (_human_637d2._human_aca9b) ? _human_637d2._human_aca9b : _human_637d2;
            return ++p4;
        }
        , function (p0, p1, p2, p3, p4, p5, p6) {
            _human_94496[0] = _human_a29e7[_human_a29e7.length - 1];
            return ++p4;
        }
        , function (p0, p1, p2, p3, p4, p5, p6) {
            var argc = _human_4623d(_human_baad8(p0, p1));
            if (_human_a29e7.length < argc) {
                return ++p4;
            }
            var args = _human_a29e7.splice(_human_a29e7.length - argc, argc).map(_human_4623d);
            var ref = _human_a29e7.pop();
            var func = _human_4623d(ref);
            args.unshift(null);
            let result = new (Function.prototype.bind.apply(func, args));
            _human_949ca(result, _human_07b6, _human_07b6, 0);
            return ++p4;
        }
        , function (p0, p1, p2, p3, p4, p5, p6) {
            return ++p4;
        }
        , null
        , null
        , null
        , null
        , null
        , null
        , null
        , null
        , null
        , function (p0, p1, p2, p3, p4, p5, p6) {
            let aaa = _human_4623d(_human_baad8(p0, p1));
            _human_949ca(aaa, _human_07b6, _human_07b6, 0);
            return ++p4;
        }
        , function (p0, p1, p2, p3, p4, p5, p6) {
            let h1 = _human_4623d(_human_baad8(p0, p1))
                , h2 = _human_4623d(_human_baad8(p2, p3));
            _human_949ca(h1 & h2, _human_07b6, _human_07b6, 0);
            return ++p4;
        }
        , function (p0, p1, p2, p3, p4, p5, p6) {
            var argc = _human_4623d(_human_baad8(p0, p1));
            if (_human_a29e7.length < argc) {
                return ++p4;
            }
            var args = _human_a29e7.splice(_human_a29e7.length - argc, argc).map(_human_4623d);
            var ref = _human_a29e7.pop();
            var func = _human_4623d(ref);
            let result = func.apply(typeof ref._human_6b78d == "undefined" ? window : ref._human_6b78d, args);
            _human_949ca(result, _human_07b6, _human_07b6, 0);
            return ++p4;
        }
        , function (p0, p1, p2, p3, p4, p5, p6) {
            _human_637d2 = {
                _human_aca9b: _human_637d2,
                _human_7e481: _human_998a9._human_7e481
            };
            return ++p4;
        }
        , function (p0, p1, p2, p3, p4, p5, p6) {
            var a = _human_4623d(_human_baad8(p0, p1));
            var b = _human_4623d(_human_baad8(p2, p3));
            var c = _human_76c3.slice(a, b + 1);
            var d = _human_637d2;
            _human_949ca(function () {
                _human_998a9 = {
                    _human_b8a40: this || window,
                    _human_9a1e6: _human_998a9,
                    _human_91189: arguments,
                    _human_7e481: d
                };
                _human_5cb55(c);
                _human_998a9 = _human_998a9._human_9a1e6;
                return _human_4623d(_human_94496[0]);
            }, _human_07b6, _human_07b6, 0);
            return ++p4;
        }
        , null
        , function (p0, p1, p2, p3, p4, p5, p6) {
            let h1 = _human_4623d(_human_baad8(p0, p1))
                , h2 = _human_4623d(_human_baad8(p2, p3));
            _human_949ca(h1 == h2, _human_07b6, _human_07b6, 0);
            return ++p4;
        }
        , function (p0, p1, p2, p3, p4, p5, p6) {
            return (!_human_4623d(_human_94496[0])) ? _human_4623d(_human_baad8(p0, p1)) : ++p4;
        }
        , null
        , null
        , null
        , function (p0, p1, p2, p3, p4, p5, p6) {
            var name = _human_4623d(_human_baad8(p0, p1));
            _human_d7172[name] = {};
            return ++p4;
        }
        , null
        , function (p0, p1, p2, p3, p4, p5, p6) {
            let h1 = _human_4623d(_human_baad8(p0, p1))
                , h2 = _human_4623d(_human_baad8(p2, p3));
            _human_949ca(h1 * h2, _human_07b6, _human_07b6, 0);
            return ++p4;
        }
        , function (p0, p1, p2, p3, p4, p5, p6) {
            let h1 = _human_4623d(_human_baad8(p0, p1))
                , h2 = _human_4623d(_human_baad8(p2, p3));
            _human_949ca(h1 < h2, _human_07b6, _human_07b6, 0);
            return ++p4;
        }
        , function (p0, p1, p2, p3, p4, p5, p6) {
            return ++p4;
        }
        , function (p0, p1, p2, p3, p4, p5, p6) {
            _human_949ca(!_human_4623d(_human_baad8(p0, p1)), _human_07b6, _human_07b6, 0);
            return ++p4;
        }
        , null
        , null
        , null
        , function (p0, p1, p2, p3, p4, p5, p6) {
            _human_94496[3] = _human_bac1(_human_a29e7.length, 0, 0, 0);
            return ++p4;
        }
        , null
        , function (p0, p1, p2, p3, p4, p5, p6) {
            _human_94496[1] = _human_a29e7.pop();
            return ++p4;
        }
        , function (p0, p1, p2, p3, p4, p5, p6) {
            _human_a29e7.push(_human_94496[0]);
            return ++p4;
        }
        , function (p0, p1, p2, p3, p4, p5, p6) {
            return ++p4;
        }
        , function (p0, p1, p2, p3, p4, p5, p6) {
            try {
                var ref = _human_baad8(p0, p1);
                var val = _human_4623d(_human_baad8(p2, p3));
                _human_949ca(ref._human_6b78d[ref._human_9b136] = val, _human_07b6, _human_07b6, 0);
                return ++p4;
            } catch (e) {
                // 提前结束循环
                return 500;
            }

        }
        , function (p0, p1, p2, p3, p4, p5, p6) {
            return _human_4623d(_human_baad8(p0, p1));
        }
        , null
        , null
        , null
        , null
        , function (p0, p1, p2, p3, p4, p5, p6) {
            return _human_4623d(_human_94496[0]) ? _human_4623d(_human_baad8(p0, p1)) : ++p4;
        }
        , null
        , function (p0, p1, p2, p3, p4, p5, p6) {
            _human_637d2[p1] = undefined;
            return ++p4;
        }
        , function (p0, p1, p2, p3, p4, p5, p6) {
            var ref = _human_baad8(p0, p1);
            var val = _human_4623d(_human_baad8(p0, p1));
            _human_949ca(val++, _human_07b6, _human_07b6, 0);
            ref._human_6b78d[ref._human_9b136] = val;
            return ++p4;
        }
        , null
        , function (p0, p1, p2, p3, p4, p5, p6) {
            let aa = _human_4623d(_human_baad8(p0, p1)),
                bb = -aa;
            _human_949ca(bb, _human_07b6, _human_07b6, 0);
            return ++p4;
        }
        , function (p0, p1, p2, p3, p4, p5, p6) {
            let h1 = _human_baad8(p0, p1),
                h2 = _human_4623d(_human_baad8(p2, p3));
            _human_949ca(0, _human_4623d(h1), h2, 1);
            return ++p4;
        }
        , function (p0, p1, p2, p3, p4, p5, p6) {
            let h1 = _human_4623d(_human_baad8(p0, p1))
                , h2 = _human_4623d(_human_baad8(p2, p3));
            _human_949ca(h1 + h2, _human_07b6, _human_07b6, 0);
            return ++p4;
        }
        , function (p0, p1, p2, p3, p4, p5, p6) {
            _human_637d2 = (_human_637d2._human_aca9b) ? _human_637d2._human_aca9b : _human_637d2;
        }
        , null
        , function (p0, p1, p2, p3, p4, p5, p6) {
            let h1 = _human_4623d(_human_baad8(p0, p1))
                , h2 = _human_4623d(_human_baad8(p2, p3));
            _human_949ca(h1 % h2, _human_07b6, _human_07b6, 0);
            return ++p4;
        }
        , null
        , null, function (p0, p1, p2, p3, p4, p5, p6) {
            let h1 = _human_4623d(_human_baad8(p0, p1))
                , h2 = _human_4623d(_human_baad8(p2, p3));
            _human_949ca(h1 / h2, _human_07b6, _human_07b6, 0);
            return ++p4;
        }
        , null
        , null
        , null
        , function (p0, p1, p2, p3, p4, p5, p6) {
            return ++p4;
        }
        , function (p0, p1, p2, p3, p4, p5, p6) {
            var name = _human_4623d(_human_baad8(p0, p1));
            let result = _human_d7172[name]
            _human_949ca(result, _human_07b6, _human_07b6, 0);
            return ++p4;
        }
    ];
    try {
        _human_5cb55(_human_76c3);
    } catch (e) {

        return _human_637d2._human_aca9b[70]
    }

}


