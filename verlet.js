window.verlet =
(function(module) {
var heap = new ArrayBuffer(134217728);
this.Math.imul = this.Math.imul || function imul(a, b) {return (a | 0) * (b | 0) | 0;};
var f32_ = new Float32Array(1);
this.Math.fround = this.Math.fround || function fround(x) {return f32[0] = x, f32[0];};
var ret = module(this, {"Datenowunix":function() {return (new Date()).getTime() / 1000 | 0;},"Datenowunix":function() {return (new Date()).getTime() / 1000 | 0;}}, heap);
if (ret.$init) {ret.$init();}
return {
$internal:{heap:heap, malloc: ret.malloc, free: ret.free, calloc: ret.calloc},
update: ret.update,
renderLines: ret.renderLines,
constructMesh: ret.constructMesh,
getClothW: ret.getClothW,
getClothH: ret.getClothH,
setGravity: ret.setGravity,
setWind: ret.setWind,
setMouse: ret.setMouse,
setMouseButton: ret.setMouseButton,
getMouseButton: ret.getMouseButton,
mouseMove: ret.mouseMove,
main: ret.main,
$init: ret.$init
};
})(function module_(stdlib, foreign, heap) {
    "use asm";
    var imul = stdlib.Math.imul;
    var fround = stdlib.Math.fround;
var $yd = 0;
var $Fd = 6;
var $Kd = 0;
var $Jd = 0;
var $Id = 0.0;
var $4e = foreign.Datenowunix;
var $_e = stdlib.Math.cos;
var $af = stdlib.Math.sin;
var $gf = stdlib.Math.sqrt;
var $vd = 0;
var $wd = 0;
var $xd = 0;
var $Hd = 65.0;
var $zd = 0;
var $Ad = 0;
var $Bd = 0;
var $Cd = 0;
var $Dd = 0;
var $Ed = 0;
var $Gd = 30.0;
var $Rd = 0;
var memheap = new stdlib.Uint8Array(heap);
var sfloatheap = new stdlib.Float32Array(heap);
var floatheap = new stdlib.Float64Array(heap);
var ptrheap = new stdlib.Uint32Array(heap);
function $Nb($Ob) {
    $Ob = +$Ob;
    var $Jc = 0.0;
    $Jc = +$af(+$Ob);
    return +$Jc;
}
function $2b($3b) {
    $3b = +$3b;
    var $Qc = 0.0;
    $Qc = +$gf(+$3b);
    return +$Qc;
}
function $4b($5b, $6b) {
    $5b = +$5b;
    $6b = +$6b;
    var $Rc = 0.0;
    $Rc = +$2b(+(+(+$5b * +$5b) + +(+$6b * +$6b)));
    return +$Rc;
}
function $qc($rc, $sc, $tc) {
    $rc = +$rc;
    $sc = +$sc;
    $tc = +$tc;
    if (+$rc < +$sc | 0) {
        return +$sc;
    }
    if (+$rc > +$tc | 0) {
        return +$tc;
    }
    return +$rc;
}
function gcderef(ptr) {
    ptr = ptr | 0;
    var newRC = 0;
    if ((ptr | 0) == 0) {
        return;
    }
    newRC = (ptrheap[ptr + 4 >> 2] | 0) - 1 | 0;
    if ((newRC | 0) == 0) {
        free(newRC);
        return;
    }
    ptrheap[ptr + 4 >> 2] = newRC;
}
function gcref(ptr) {
    ptr = ptr | 0;
    if ((ptr | 0) == 0) {
        return 0;
    }
    ptrheap[ptr + 4 >> 2] = (ptrheap[ptr + 4 >> 2] | 0) + 1 | 0;
    return ptr | 0;
}
function $K() {
    var $Za = 0;
    $Za = $4e() | 0;
    return $Za | 0;
}
function malloc(bytes) {
    bytes = bytes | 0;
    var prevPtr = 0;
    var currentPtr = 0;
    var currentSize = 0;
    var currentSizeMinus = 0;
    if ((bytes | 0) > 67108864) {
        return 0;
    }
    if ((bytes | 0) == 0) {
        return 0;
    }
    if (((bytes | 0) % 8 | 0) != 0) {
        bytes = bytes + 8 - ((bytes | 0) % 8 | 0) | 0;
    }
    if ((ptrheap[4 >> 2] | 0) == 0) {
        ptrheap[0 >> 2] = 8;
        ptrheap[4 >> 2] = 1;
        ptrheap[8 >> 2] = 67108864 - 16 | 0;
    }
    if ((ptrheap[0 >> 2] | 0) == 0) {
        return 0;
    }
    currentPtr = ptrheap[0 >> 2] | 0;
    for (;; currentPtr = ptrheap[prevPtr >> 2] | 0) {
        currentSize = ptrheap[currentPtr >> 2] | 0;
        if ((currentSize | 0) < (bytes | 0)) {
            prevPtr = currentPtr + 4 | 0;
            if ((ptrheap[currentPtr + 4 >> 2] | 0) == 0) {
                return 0;
            }
            break;
            continue;
        }
        if ((currentSize | 0) == (bytes | 0)) {
            ptrheap[prevPtr >> 2] = ptrheap[currentPtr + 4 >> 2] | 0;
            return currentPtr + 8 | 0;
        }
        if ((currentSize - 16 | 0) > (bytes | 0)) {
            ptrheap[prevPtr >> 2] = currentPtr + bytes + 8 | 0;
            ptrheap[currentPtr >> 2] = bytes | 0;
            ptrheap[currentPtr + bytes + 8 >> 2] = currentSize - bytes - 16 | 0;
            ptrheap[currentPtr + bytes + 12 >> 2] = ptrheap[currentPtr + 4 >> 2] | 0;
            return currentPtr + 8 | 0;
        }
        ptrheap[prevPtr >> 2] = ptrheap[currentPtr + 4 >> 2] | 0;
        return currentPtr + 8 | 0;
    }
    return 0;
}
function calloc(bytes) {
    bytes = bytes | 0;
    var ptr = 0;
    var iter = 0;
    var destination = 0;
    ptr = malloc(bytes) | 0;
    if ((ptr | 0) == 0) {
        return 0;
    }
    iter = ptr | 0;
    destination = ptr + bytes | 0;
    for (; (iter | 0) < (destination | 0); iter = iter + 1 | 0) {
        memheap[iter] = 0;
    }
    return ptr | 0;
}
function free(pointer) {
    pointer = pointer | 0;
    var prevPtr = 0;
    var nextPtr = 0;
    var temp = 0;
    if ((pointer | 0) == 0) {
        return;
    }
    pointer = pointer - 8 | 0;
    nextPtr = ptrheap[0] | 0;
    while ((nextPtr | 0) != 0) {
        if ((nextPtr | 0) <= (pointer | 0)) {
            prevPtr = nextPtr + 4 | 0;
            nextPtr = ptrheap[nextPtr + 4 >> 2] | 0;
            continue;
        }
        ptrheap[prevPtr >> 2] = pointer | 0;
        ptrheap[pointer + 4 >> 2] = nextPtr | 0;
        if ((prevPtr | 0) != 0) {
            if (((prevPtr | 0) + (ptrheap[prevPtr - 4 >> 2] | 0) + 4 | 0) == (pointer | 0)) {
                ptrheap[prevPtr - 4 >> 2] = (ptrheap[prevPtr - 4 >> 2] | 0) + (ptrheap[pointer >> 2] | 0) + 8 | 0;
                pointer = prevPtr - 4 | 0;
            }
        }
        if ((nextPtr | 0) == ((pointer | 0) + (ptrheap[pointer >> 2] | 0) + 8 | 0)) {
            ptrheap[pointer >> 2] = (ptrheap[pointer >> 2] | 0) + (ptrheap[nextPtr >> 2] | 0) + 8 | 0;
            ptrheap[pointer + 4 >> 2] = ptrheap[nextPtr + 4 >> 2] | 0;
        }
        return;
    }
    if ((prevPtr | 0) != 0) {
        if (((ptrheap[prevPtr - 4 >> 2] | 0) + (prevPtr | 0) - 4 | 0) == (pointer | 0)) {
            ptrheap[prevPtr >> 2] = 0;
            ptrheap[prevPtr - 4 >> 2] = (ptrheap[prevPtr - 4 >> 2] | 0) + (ptrheap[pointer >> 2] | 0) + 8 | 0;
            return;
        }
    }
    ptrheap[prevPtr >> 2] = pointer | 0;
    ptrheap[pointer + 4 >> 2] = 0;
}
function $Lb($Mb) {
    $Mb = +$Mb;
    var $Ic = 0.0;
    $Ic = +$_e(+$Mb);
    return +$Ic;
}
function $Wc($0c, $1c, $2c) {
    $0c = $0c | 0;
    $1c = +$1c;
    $2c = +$2c;
    floatheap[$0c + 8 >> 3] = +$1c;
    floatheap[$0c + 16 >> 3] = +$2c;
    return $0c | 0;
}
function $4c($_c, $ad, $bd, $cd, $dd) {
    $_c = $_c | 0;
    $ad = +$ad;
    $bd = +$bd;
    $cd = +$cd;
    $dd = $dd | 0;
    ptrheap[$_c + 16 >> 2] = gcref($Wc(gcref(calloc(24) | 0) | 0, +$ad, +$bd) | 0) | 0;
    ptrheap[$_c + 24 >> 2] = gcref($Wc(gcref(calloc(24) | 0) | 0, 0.0, 0.0) | 0) | 0;
    ptrheap[$_c + 20 >> 2] = gcref(ptrheap[$_c + 16 >> 2] | 0) | 0;
    floatheap[$_c + 8 >> 3] = +$cd;
    memheap[$_c + 28 >> 0] = $dd | 0;
    return $_c | 0;
}
function $hd($pd, $qd, $rd, $sd, $td, $ud) {
    $pd = $pd | 0;
    $qd = $qd | 0;
    $rd = $rd | 0;
    $sd = +$sd;
    $td = +$td;
    $ud = +$ud;
    ptrheap[$pd + 32 >> 2] = gcref($qd | 0) | 0;
    ptrheap[$pd + 36 >> 2] = gcref($rd | 0) | 0;
    floatheap[$pd + 8 >> 3] = +$sd;
    floatheap[$pd + 16 >> 3] = +$td;
    floatheap[$pd + 24 >> 3] = +$ud;
    return $pd | 0;
}
function $fd($od) {
    $od = $od | 0;
    memheap[(ptrheap[$od + 32 >> 2] | 0) + 30 >> 0] = 1;
    memheap[(ptrheap[$od + 36 >> 2] | 0) + 30 >> 0] = 1;
}
function $Qd() {
    var $Ze = 0;
    var $ue = 0.016;
    var $ve = 0;
    var $we = 0;
    for ($ve = 0; ($ve | 0) < 5 | 0; $ve = ($ve | 0) + 1 | 0) {
        for ($we = 0; ($we | 0) < ($zd | 0) | 0; $we = ($we | 0) + 1 | 0) {
            $Ze = memheap[(ptrheap[(ptrheap[$Ad + ($we * 4 | 0) + 16 >> 2] | 0) + 32 >> 2] | 0) + 30 >> 0] | 0;
            if (!($Ze | 0)) {
                $Ze = memheap[(ptrheap[(ptrheap[$Ad + ($we * 4 | 0) + 16 >> 2] | 0) + 36 >> 2] | 0) + 30 >> 0] | 0;
            }
            if ($Ze) {
                continue;
            }
            $0d(ptrheap[$Ad + ($we * 4 | 0) + 16 >> 2] | 0);
        }
    }
    for ($we = 0; ($we | 0) < ($xd | 0) | 0; $we = ($we | 0) + 1 | 0) {
        $Td(ptrheap[$yd + ($we * 4 | 0) + 16 >> 2] | 0, +$ue);
    }
    if ($Jd) {
        var $xe = 0;
        $xe = ($K() | 0) - ($Kd | 0) | 0;
        for ($we = 0; ($we | 0) < ($xd | 0) | 0; $we = ($we | 0) + 1 | 0) {
            $Wd(ptrheap[$yd + ($we * 4 | 0) + 16 >> 2] | 0, +(+(+(+(+$Lb(+(+floatheap[(ptrheap[(ptrheap[$yd + ($we * 4 | 0) + 16 >> 2] | 0) + 16 >> 2] | 0) + 8 >> 3] / 30.0)) + 1.0) * 200.0) + +(+(+floatheap[(ptrheap[(ptrheap[$yd + ($we * 4 | 0) + 16 >> 2] | 0) + 16 >> 2] | 0) + 16 >> 3] / 700.0) * 600.0)) * +(+(+$Nb(+($xe | 0)) * 0.5) + 1.0)), 0.0);
        }
    }
}
function $Sd() {
    var $0e = 0;
    var $ye = 1;
    var $ze = 0;
    for ($ze = 0; ($ze | 0) < ($zd | 0) | 0; $ze = ($ze | 0) + 1 | 0) {
        $0e = memheap[(ptrheap[(ptrheap[$Ad + ($ze * 4 | 0) + 16 >> 2] | 0) + 32 >> 2] | 0) + 30 >> 0] | 0;
        if (!($0e | 0)) {
            $0e = memheap[(ptrheap[(ptrheap[$Ad + ($ze * 4 | 0) + 16 >> 2] | 0) + 36 >> 2] | 0) + 30 >> 0] | 0;
        }
        if ($0e) {
            continue;
        }
        sfloatheap[$Rd + ($ye * 4 | 0) + 16 >> 2] = fround(+floatheap[(ptrheap[(ptrheap[(ptrheap[$Ad + ($ze * 4 | 0) + 16 >> 2] | 0) + 32 >> 2] | 0) + 16 >> 2] | 0) + 8 >> 3]);
        $ye = ($ye | 0) + 1 | 0;
        sfloatheap[$Rd + ($ye * 4 | 0) + 16 >> 2] = fround(+floatheap[(ptrheap[(ptrheap[(ptrheap[$Ad + ($ze * 4 | 0) + 16 >> 2] | 0) + 32 >> 2] | 0) + 16 >> 2] | 0) + 16 >> 3]);
        $ye = ($ye | 0) + 1 | 0;
        sfloatheap[$Rd + ($ye * 4 | 0) + 16 >> 2] = fround(+floatheap[(ptrheap[(ptrheap[(ptrheap[$Ad + ($ze * 4 | 0) + 16 >> 2] | 0) + 36 >> 2] | 0) + 16 >> 2] | 0) + 8 >> 3]);
        $ye = ($ye | 0) + 1 | 0;
        sfloatheap[$Rd + ($ye * 4 | 0) + 16 >> 2] = fround(+floatheap[(ptrheap[(ptrheap[(ptrheap[$Ad + ($ze * 4 | 0) + 16 >> 2] | 0) + 36 >> 2] | 0) + 16 >> 2] | 0) + 16 >> 3]);
        $ye = ($ye | 0) + 1 | 0;
    }
    sfloatheap[$Rd + (0 * 4 | 0) + 16 >> 2] = fround(fround($ye | 0) - fround(1.0));
    return $Rd | 0;
}
function $Td($Ud, $Vd) {
    $Ud = $Ud | 0;
    $Vd = +$Vd;
    var $De = 0.0;
    var $Ae = 0.0;
    var $Be = 0.0;
    var $Ce = 0.0;
    var $Ee = 0.0;
    var $Fe = 0.0;
    if (memheap[$Ud + 28 >> 0] | 0) {
        return;
    }
    $Ae = +(+$Vd * +$Vd);
    $Be = +floatheap[(ptrheap[$Ud + 16 >> 2] | 0) + 8 >> 3];
    $Ce = +floatheap[(ptrheap[$Ud + 16 >> 2] | 0) + 16 >> 3];
    if (($Dd | 0) != 0 | 0) {
        $De = +$4b(+(+$Be - +floatheap[$Bd + 8 >> 3]), +(+$Ce - +floatheap[$Bd + 16 >> 3]));
        if (($Dd | 0) == 1 | 0) {
            if (+$De < +$Gd | 0) {
                floatheap[(ptrheap[$Ud + 20 >> 2] | 0) + 8 >> 3] = +(+$Be - +$qc(+(+(+floatheap[$Bd + 8 >> 3] - +floatheap[$Cd + 8 >> 3]) * 1.8), -30.0, 30.0));
                floatheap[(ptrheap[$Ud + 20 >> 2] | 0) + 16 >> 3] = +(+$Ce - +$qc(+(+(+floatheap[$Bd + 16 >> 3] - +floatheap[$Cd + 16 >> 3]) * 1.8), -30.0, 30.0));
            }
        } else {
            if (+$De < +($Fd | 0) | 0) {
                memheap[$Ud + 30 >> 0] = 1;
            }
        }
    }
    if (!(memheap[$Ud + 29 >> 0] | 0)) {
        $Wd($Ud | 0, 0.0, +(+floatheap[$Ud + 8 >> 3] * +$Id));
    }
    $Ee = +floatheap[(ptrheap[$Ud + 20 >> 2] | 0) + 8 >> 3];
    $Fe = +floatheap[(ptrheap[$Ud + 20 >> 2] | 0) + 16 >> 3];
    floatheap[(ptrheap[$Ud + 20 >> 2] | 0) + 8 >> 3] = +$Be;
    floatheap[(ptrheap[$Ud + 20 >> 2] | 0) + 16 >> 3] = +$Ce;
    floatheap[(ptrheap[$Ud + 16 >> 2] | 0) + 8 >> 3] = +(+(+$Be + +(+(+$Be - +$Ee) * 0.9)) + +(+floatheap[(ptrheap[$Ud + 24 >> 2] | 0) + 8 >> 3] * +$Ae));
    floatheap[(ptrheap[$Ud + 16 >> 2] | 0) + 16 >> 3] = +(+(+$Ce + +(+(+$Ce - +$Fe) * 0.9)) + +(+floatheap[(ptrheap[$Ud + 24 >> 2] | 0) + 16 >> 3] * +$Ae));
    floatheap[(ptrheap[$Ud + 24 >> 2] | 0) + 8 >> 3] = 0.0;
    floatheap[(ptrheap[$Ud + 24 >> 2] | 0) + 16 >> 3] = 0.0;
}
function $Wd($Xd, $Yd, $Zd) {
    $Xd = $Xd | 0;
    $Yd = +$Yd;
    $Zd = +$Zd;
    floatheap[(ptrheap[$Xd + 24 >> 2] | 0) + 8 >> 3] = +(+floatheap[(ptrheap[$Xd + 24 >> 2] | 0) + 8 >> 3] + +(+$Yd / +floatheap[$Xd + 8 >> 3]));
    floatheap[(ptrheap[$Xd + 24 >> 2] | 0) + 16 >> 3] = +(+floatheap[(ptrheap[$Xd + 24 >> 2] | 0) + 16 >> 3] + +(+$Zd / +floatheap[$Xd + 8 >> 3]));
}
function $0d($1d) {
    $1d = $1d | 0;
    var $Ge = 0;
    var $He = 0;
    var $Ie = 0.0;
    var $Je = 0.0;
    var $Ke = 0.0;
    var $Le = 0.0;
    $Ge = ptrheap[$1d + 32 >> 2] | 0;
    $He = ptrheap[$1d + 36 >> 2] | 0;
    $Ie = +(+floatheap[(ptrheap[$Ge + 16 >> 2] | 0) + 8 >> 3] - +floatheap[(ptrheap[$He + 16 >> 2] | 0) + 8 >> 3]);
    $Je = +(+floatheap[(ptrheap[$Ge + 16 >> 2] | 0) + 16 >> 3] - +floatheap[(ptrheap[$He + 16 >> 2] | 0) + 16 >> 3]);
    $Ke = +$4b(+$Ie, +$Je);
    if (+$Ke > +floatheap[$1d + 24 >> 3] | 0) {
        $fd($1d | 0);
    }
    $Le = +(+(+floatheap[$1d + 8 >> 3] / +$Ke) - 1.0);
    if (!(memheap[$Ge + 28 >> 0] | 0)) {
        floatheap[(ptrheap[$Ge + 16 >> 2] | 0) + 8 >> 3] = +(+floatheap[(ptrheap[$Ge + 16 >> 2] | 0) + 8 >> 3] + +(+(+$Ie * +$Le) * 0.5));
        floatheap[(ptrheap[$Ge + 16 >> 2] | 0) + 16 >> 3] = +(+floatheap[(ptrheap[$Ge + 16 >> 2] | 0) + 16 >> 3] + +(+(+$Je * +$Le) * 0.5));
    }
    if (!(memheap[$He + 28 >> 0] | 0)) {
        floatheap[(ptrheap[$He + 16 >> 2] | 0) + 8 >> 3] = +(+floatheap[(ptrheap[$He + 16 >> 2] | 0) + 8 >> 3] - +(+(+$Ie * +$Le) * 0.5));
        floatheap[(ptrheap[$He + 16 >> 2] | 0) + 16 >> 3] = +(+floatheap[(ptrheap[$He + 16 >> 2] | 0) + 16 >> 3] - +(+(+$Je * +$Le) * 0.5));
    }
    gcderef($Ge);
    gcderef($He);
}
function $2d($3d) {
    $3d = $3d | 0;
    var $1e = 0;
    var $Me = 0;
    var $Ne = 0;
    var $Oe = 0.0;
    var $Pe = 0;
    var $Qe = 0;
    var $Re = 0;
    var $Se = 0;
    var $Te = 0;
    var $Ue = 0;
    var $Ve = 0.0;
    $vd = ($3d | 0) + 8 | 0;
    $wd = ($3d | 0) / 2 | 0;
    $Oe = +(700.0 / +(($vd | 0) - 1 | 0));
    $Pe = (($Ed | 0) / 2 | 0) - ((imul($vd, ~~$Oe | 0) | 0) / 2 | 0) | 0;
    for ($Se = 0; ($Se | 0) < ($wd | 0) | 0; $Se = ($Se | 0) + 1 | 0) {
        for ($Re = 0; ($Re | 0) < ($vd | 0) | 0; $Re = ($Re | 0) + 1 | 0) {
            $Ue = gcref($4c(gcref(calloc(67) | 0) | 0, +(+($Pe | 0) + +(+($Re | 0) * +$Oe)), +(+($Qe | 0) + +(+($Se | 0) * +$Oe)), 1.0, ($Se | 0) == 0 | 0) | 0) | 0;
            $Te = (imul($Se, $vd) | 0) + ($Re | 0) | 0;
            ptrheap[$yd + ($Te * 4 | 0) + 16 >> 2] = gcref($Ue | 0) | 0;
            $Ve = +$Hd;
            if (($wd | 0) > 70 | 0) {
                $1e = (($Se | 0) % 2 | 0) != 0 | 0;
                if ($1e) {
                    $1e = (($Re | 0) % 2 | 0) != 0 | 0;
                }
                if ($1e) {
                    memheap[(ptrheap[$yd + ($Te * 4 | 0) + 16 >> 2] | 0) + 29 >> 0] = 1;
                }
                if (($Se | 0) < 10 | 0) {
                    $Ve = 80.0;
                }
            }
            if (($Re | 0) > 0 | 0) {
                ptrheap[$Ad + ($Me * 4 | 0) + 16 >> 2] = gcref($hd(gcref(calloc(150) | 0) | 0, ptrheap[$yd + ((($Te | 0) - 1 | 0) * 4 | 0) + 16 >> 2] | 0, ptrheap[$yd + ($Te * 4 | 0) + 16 >> 2] | 0, +$Oe, 1.0, +$Ve) | 0) | 0;
                $Me = ($Me | 0) + 1 | 0;
            }
            if (($Se | 0) > 0 | 0) {
                ptrheap[$Ad + ($Me * 4 | 0) + 16 >> 2] = gcref($hd(gcref(calloc(150) | 0) | 0, ptrheap[$yd + (((imul(($Se | 0) - 1 | 0, $vd) | 0) + ($Re | 0) | 0) * 4 | 0) + 16 >> 2] | 0, ptrheap[$yd + ($Te * 4 | 0) + 16 >> 2] | 0, +$Oe, 1.0, +$Ve) | 0) | 0;
                $Me = ($Me | 0) + 1 | 0;
            }
        }
    }
    $zd = $Me | 0;
    $xd = imul($vd, $wd) | 0;
    gcderef($Ue);
}
function $4d() {
    return $vd | 0;
}
function $5d() {
    return $wd | 0;
}
function $6d($7d) {
    $7d = +$7d;
    $Id = +$7d;
}
function $8d($9d) {
    $9d = $9d | 0;
    $Jd = $9d | 0;
}
function $_d($ae, $be) {
    $ae = +$ae;
    $be = +$be;
    floatheap[$Bd + 8 >> 3] = +$ae;
    floatheap[$Bd + 16 >> 3] = +$be;
}
function $ce($de) {
    $de = $de | 0;
    $Dd = $de | 0;
}
function $ee() {
    return $Dd | 0;
}
function $fe($ge, $he, $ie) {
    $ge = +$ge;
    $he = +$he;
    $ie = $ie | 0;
    floatheap[$Cd + 8 >> 3] = +floatheap[$Bd + 8 >> 3];
    floatheap[$Cd + 16 >> 3] = +floatheap[$Bd + 16 >> 3];
    floatheap[$Bd + 8 >> 3] = +$ge;
    floatheap[$Bd + 16 >> 3] = +$he;
}
function $je($ke) {
    $ke = $ke | 0;
    $Ed = $ke | 0;
    $Kd = $K() | 0;
}
function $2e() {
    $yd = gcref(gcref(calloc(((500000 | 0) * 4 | 0) + 16 | 0) | 0) | 0) | 0;
    $Ad = gcref(gcref(calloc(((500000 | 0) * 4 | 0) + 16 | 0) | 0) | 0) | 0;
    $Bd = gcref($Wc(gcref(calloc(24) | 0) | 0, 0.0, 0.0) | 0) | 0;
    $Cd = gcref($Wc(gcref(calloc(24) | 0) | 0, 0.0, 0.0) | 0) | 0;
    $Rd = gcref(gcref(calloc(((2000000 | 0) * 4 | 0) + 16 | 0) | 0) | 0) | 0;
}
function $init() {
    $2e();
}
return {
    malloc: malloc,
    free: free,
    calloc: calloc,
    update: $Qd,
    renderLines: $Sd,
    constructMesh: $2d,
    getClothW: $4d,
    getClothH: $5d,
    setGravity: $6d,
    setWind: $8d,
    setMouse: $_d,
    setMouseButton: $ce,
    getMouseButton: $ee,
    mouseMove: $fe,
    main: $je,
    $init: $init
};
})
