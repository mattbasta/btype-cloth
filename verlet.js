window.verlet = 
(function(module) {
var heap = new ArrayBuffer(134217728);
this.Math.imul = this.Math.imul || function imul(a, b) {return (a | 0) * (b | 0) | 0;};
this.Math.fround = this.Math.fround || function fround(x) {var f32 = new Float32Array(1);return f32[0] = x, f32[0];};
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
var $vd = 0;
var $Cd = 6;
var $Id = 0;
var $Gd = 0;
var $Fd = 0.0;
var $3e = foreign.Datenowunix;
var $9e = stdlib.Math.cos;
var $_e = stdlib.Math.sin;
var $ff = stdlib.Math.sqrt;
var $sd = 0;
var $td = 0;
var $ud = 0;
var $Ed = 65;
var $wd = 0;
var $xd = 0;
var $yd = 0;
var $zd = 0;
var $Ad = 0;
var $Bd = 0;
var $Dd = 30;
var $Pd = 0;
var memheap = new stdlib.Uint8Array(heap);
var sfloatheap = new stdlib.Float32Array(heap);
var floatheap = new stdlib.Float64Array(heap);
var ptrheap = new stdlib.Uint32Array(heap);
function $Nb($Ob) {
    $Ob = +$Ob;
    var $Jc = 0.0;
    $Jc = +$_e(+$Ob);
    return +$Jc;
}
function $2b($3b) {
    $3b = +$3b;
    var $Qc = 0.0;
    $Qc = +$ff(+$3b);
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
    $Za = $3e() | 0;
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
    $Ic = +$9e(+$Mb);
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
    ptrheap[$_c + 19 >> 2] = gcref($Wc(gcref(calloc(24) | 0) | 0, +$ad, +$bd) | 0) | 0;
    ptrheap[$_c + 51 >> 2] = gcref($Wc(gcref(calloc(24) | 0) | 0, 0.0, 0.0) | 0) | 0;
    ptrheap[$_c + 35 >> 2] = gcref(ptrheap[$_c + 19 >> 2] | 0) | 0;
    floatheap[$_c + 11 >> 3] = +$cd;
    memheap[$_c + 8 >> 0] = $dd | 0;
    return $_c | 0;
}
function $fd($md, $nd, $od, $pd, $qd, $rd) {
    $md = $md | 0;
    $nd = $nd | 0;
    $od = $od | 0;
    $pd = +$pd;
    $qd = +$qd;
    $rd = +$rd;
    ptrheap[$md + 32 >> 2] = gcref($nd | 0) | 0;
    ptrheap[$md + 91 >> 2] = gcref($od | 0) | 0;
    floatheap[$md + 8 >> 3] = +$pd;
    floatheap[$md + 16 >> 3] = +$qd;
    floatheap[$md + 24 >> 3] = +$rd;
    return $md | 0;
}
function $Od() {
    var $Ze = 0;
    var $ue = 0.016;
    var $ve = 0;
    var $we = 0;
    var $xe = 0;
    $ve = ($K() | 0) - ($Id | 0) | 0;
    for ($we = 0; ($we | 0) < 5 | 0; $we = ($we | 0) + 1 | 0) {
        for ($xe = 0; ($xe | 0) < ($wd | 0) | 0; $xe = ($xe | 0) + 1 | 0) {
            $Ze = memheap[(ptrheap[(ptrheap[$xd + ($xe * 142 | 0) + 16 >> 2] | 0) + 32 >> 2] | 0) + 10 >> 0] | 0;
            if (!($Ze | 0)) {
                $Ze = memheap[(ptrheap[(ptrheap[$xd + ($xe * 142 | 0) + 16 >> 2] | 0) + 91 >> 2] | 0) + 10 >> 0] | 0;
            }
            if ($Ze) {
                continue;
            }
            $Yd(ptrheap[$xd + ($xe * 142 | 0) + 16 >> 2] | 0);
        }
    }
    for ($xe = 0; ($xe | 0) < ($ud | 0) | 0; $xe = ($xe | 0) + 1 | 0) {
        if ($Gd) {
            $Ud(ptrheap[$vd + ($xe * 59 | 0) + 16 >> 2] | 0, +(+(+(+(+$Lb(+(+floatheap[(ptrheap[(ptrheap[$vd + ($xe * 59 | 0) + 16 >> 2] | 0) + 19 >> 2] | 0) + 8 >> 3] / 30.0)) + 1.0) * 200.0) + +(+(+floatheap[(ptrheap[(ptrheap[$vd + ($xe * 59 | 0) + 16 >> 2] | 0) + 19 >> 2] | 0) + 16 >> 3] / 700.0) * 600.0)) * +(+(+$Nb(+($ve | 0)) * 0.5) + 1.0)), 0.0);
        }
        $Rd(ptrheap[$vd + ($xe * 59 | 0) + 16 >> 2] | 0, +$ue);
    }
}
function $Qd() {
    var $0e = 0;
    var $ye = 1;
    var $ze = 0;
    for ($ze = 0; ($ze | 0) < ($wd | 0) | 0; $ze = ($ze | 0) + 1 | 0) {
        $0e = memheap[(ptrheap[(ptrheap[$xd + ($ze * 142 | 0) + 16 >> 2] | 0) + 32 >> 2] | 0) + 10 >> 0] | 0;
        if (!($0e | 0)) {
            $0e = memheap[(ptrheap[(ptrheap[$xd + ($ze * 142 | 0) + 16 >> 2] | 0) + 91 >> 2] | 0) + 10 >> 0] | 0;
        }
        if ($0e) {
            continue;
        }
        sfloatheap[$Pd + ($ye * 4 | 0) + 16 >> 2] = fround(+floatheap[(ptrheap[(ptrheap[(ptrheap[$xd + ($ze * 142 | 0) + 16 >> 2] | 0) + 32 >> 2] | 0) + 19 >> 2] | 0) + 8 >> 3]);
        $ye = ($ye | 0) + 1 | 0;
        sfloatheap[$Pd + ($ye * 4 | 0) + 16 >> 2] = fround(+floatheap[(ptrheap[(ptrheap[(ptrheap[$xd + ($ze * 142 | 0) + 16 >> 2] | 0) + 32 >> 2] | 0) + 19 >> 2] | 0) + 16 >> 3]);
        $ye = ($ye | 0) + 1 | 0;
        sfloatheap[$Pd + ($ye * 4 | 0) + 16 >> 2] = fround(+floatheap[(ptrheap[(ptrheap[(ptrheap[$xd + ($ze * 142 | 0) + 16 >> 2] | 0) + 91 >> 2] | 0) + 19 >> 2] | 0) + 8 >> 3]);
        $ye = ($ye | 0) + 1 | 0;
        sfloatheap[$Pd + ($ye * 4 | 0) + 16 >> 2] = fround(+floatheap[(ptrheap[(ptrheap[(ptrheap[$xd + ($ze * 142 | 0) + 16 >> 2] | 0) + 91 >> 2] | 0) + 19 >> 2] | 0) + 16 >> 3]);
        $ye = ($ye | 0) + 1 | 0;
    }
    sfloatheap[$Pd + (0 * 4 | 0) + 16 >> 2] = fround(fround($ye | 0) - fround(1.0));
    return $Pd | 0;
}
function $Rd($Sd, $Td) {
    $Sd = $Sd | 0;
    $Td = +$Td;
    var $Be = 0.0;
    var $Ae = 0.0;
    var $Ce = 0.0;
    var $De = 0.0;
    var $Ee = 0.0;
    var $Fe = 0.0;
    $Ae = +(+$Td * +$Td);
    if (($Ad | 0) != 0 | 0) {
        $Be = +$4b(+(+floatheap[(ptrheap[$Sd + 19 >> 2] | 0) + 8 >> 3] - +floatheap[$yd + 8 >> 3]), +(+floatheap[(ptrheap[$Sd + 19 >> 2] | 0) + 16 >> 3] - +floatheap[$yd + 16 >> 3]));
        if (($Ad | 0) == 1 | 0) {
            if (+$Be < +($Dd | 0) | 0) {
                floatheap[(ptrheap[$Sd + 35 >> 2] | 0) + 8 >> 3] = +(+floatheap[(ptrheap[$Sd + 19 >> 2] | 0) + 8 >> 3] - +$qc(+(+(+floatheap[$yd + 8 >> 3] - +floatheap[$zd + 8 >> 3]) * 1.8), +-30.0, 30.0));
                floatheap[(ptrheap[$Sd + 35 >> 2] | 0) + 16 >> 3] = +(+floatheap[(ptrheap[$Sd + 19 >> 2] | 0) + 16 >> 3] - +$qc(+(+(+floatheap[$yd + 16 >> 3] - +floatheap[$zd + 16 >> 3]) * 1.8), +-30.0, 30.0));
            }
        } else {
            if (+$Be < +($Cd | 0) | 0) {
                memheap[$Sd + 10 >> 0] = 1;
            }
        }
    }
    if (!(memheap[$Sd + 9 >> 0] | 0)) {
        $Ud($Sd | 0, 0.0, +(+floatheap[$Sd + 11 >> 3] * +$Fd));
    }
    $Ce = +floatheap[(ptrheap[$Sd + 19 >> 2] | 0) + 8 >> 3];
    $De = +floatheap[(ptrheap[$Sd + 19 >> 2] | 0) + 16 >> 3];
    $Ee = +floatheap[(ptrheap[$Sd + 35 >> 2] | 0) + 8 >> 3];
    $Fe = +floatheap[(ptrheap[$Sd + 35 >> 2] | 0) + 16 >> 3];
    if (!(memheap[$Sd + 8 >> 0] | 0)) {
        ptrheap[$Sd + 35 >> 2] = gcref(ptrheap[$Sd + 19 >> 2] | 0) | 0;
        floatheap[(ptrheap[$Sd + 19 >> 2] | 0) + 8 >> 3] = +(+(+$Ce + +(+(+$Ce - +$Ee) * 0.9)) + +(+floatheap[(ptrheap[$Sd + 51 >> 2] | 0) + 8 >> 3] * +$Ae));
        floatheap[(ptrheap[$Sd + 19 >> 2] | 0) + 16 >> 3] = +(+(+$De + +(+(+$De - +$Fe) * 0.9)) + +(+floatheap[(ptrheap[$Sd + 51 >> 2] | 0) + 16 >> 3] * +$Ae));
    }
    floatheap[(ptrheap[$Sd + 51 >> 2] | 0) + 8 >> 3] = 0.0;
    floatheap[(ptrheap[$Sd + 51 >> 2] | 0) + 16 >> 3] = 0.0;
}
function $Ud($Vd, $Wd, $Xd) {
    $Vd = $Vd | 0;
    $Wd = +$Wd;
    $Xd = +$Xd;
    floatheap[(ptrheap[$Vd + 51 >> 2] | 0) + 8 >> 3] = +(+floatheap[(ptrheap[$Vd + 51 >> 2] | 0) + 8 >> 3] + +(+$Wd / +floatheap[$Vd + 11 >> 3]));
    floatheap[(ptrheap[$Vd + 51 >> 2] | 0) + 16 >> 3] = +(+floatheap[(ptrheap[$Vd + 51 >> 2] | 0) + 16 >> 3] + +(+$Xd / +floatheap[$Vd + 11 >> 3]));
}
function $Yd($Zd) {
    $Zd = $Zd | 0;
    var $Ge = 0;
    var $He = 0;
    var $Ie = 0.0;
    var $Je = 0.0;
    var $Ke = 0.0;
    var $Le = 0.0;
    $Ge = ptrheap[$Zd + 32 >> 2] | 0;
    $He = ptrheap[$Zd + 91 >> 2] | 0;
    $Ie = +(+floatheap[(ptrheap[$Ge + 19 >> 2] | 0) + 8 >> 3] - +floatheap[(ptrheap[$He + 19 >> 2] | 0) + 8 >> 3]);
    $Je = +(+floatheap[(ptrheap[$Ge + 19 >> 2] | 0) + 16 >> 3] - +floatheap[(ptrheap[$He + 19 >> 2] | 0) + 16 >> 3]);
    $Ke = +$4b(+$Ie, +$Je);
    if (+$Ke > +floatheap[$Zd + 24 >> 3] | 0) {
        $0d($Zd | 0);
    }
    $Le = +(+(+floatheap[$Zd + 8 >> 3] / +$Ke) - 1.0);
    if (!(memheap[$Ge + 8 >> 0] | 0)) {
        floatheap[(ptrheap[$Ge + 19 >> 2] | 0) + 8 >> 3] = +(+floatheap[(ptrheap[$Ge + 19 >> 2] | 0) + 8 >> 3] + +(+(+$Ie * +$Le) * 0.5));
        floatheap[(ptrheap[$Ge + 19 >> 2] | 0) + 16 >> 3] = +(+floatheap[(ptrheap[$Ge + 19 >> 2] | 0) + 16 >> 3] + +(+(+$Je * +$Le) * 0.5));
    }
    if (!(memheap[$He + 8 >> 0] | 0)) {
        floatheap[(ptrheap[$He + 19 >> 2] | 0) + 8 >> 3] = +(+floatheap[(ptrheap[$He + 19 >> 2] | 0) + 8 >> 3] - +(+(+$Ie * +$Le) * 0.5));
        floatheap[(ptrheap[$He + 19 >> 2] | 0) + 16 >> 3] = +(+floatheap[(ptrheap[$He + 19 >> 2] | 0) + 16 >> 3] - +(+(+$Je * +$Le) * 0.5));
    }
    gcderef($Ge);
    gcderef($He);
}
function $0d($1d) {
    $1d = $1d | 0;
    memheap[(ptrheap[$1d + 32 >> 2] | 0) + 10 >> 0] = 1;
    memheap[(ptrheap[$1d + 91 >> 2] | 0) + 10 >> 0] = 1;
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
    $sd = ($3d | 0) + 8 | 0;
    $td = ($3d | 0) / 2 | 0;
    $Oe = +(700.0 / +(($sd | 0) - 1 | 0));
    $Pe = (($Bd | 0) / 2 | 0) - ((imul($sd, ~~$Oe | 0) | 0) / 2 | 0) | 0;
    for ($Se = 0; ($Se | 0) < ($td | 0) | 0; $Se = ($Se | 0) + 1 | 0) {
        for ($Re = 0; ($Re | 0) < ($sd | 0) | 0; $Re = ($Re | 0) + 1 | 0) {
            $Ue = gcref($4c(gcref(calloc(67) | 0) | 0, +(+($Pe | 0) + +(+($Re | 0) * +$Oe)), +(+($Qe | 0) + +(+($Se | 0) * +$Oe)), 1.0, ($Se | 0) == 0 | 0) | 0) | 0;
            $Te = (imul($Se, $sd) | 0) + ($Re | 0) | 0;
            ptrheap[$vd + ($Te * 59 | 0) + 16 >> 2] = gcref($Ue | 0) | 0;
            $Ve = +($Ed | 0);
            if (($td | 0) > 70 | 0) {
                $1e = (($Se | 0) % 2 | 0) != 0 | 0;
                if ($1e) {
                    $1e = (($Re | 0) % 2 | 0) != 0 | 0;
                }
                if ($1e) {
                    memheap[(ptrheap[$vd + ($Te * 59 | 0) + 16 >> 2] | 0) + 9 >> 0] = 1;
                }
                if (($Se | 0) < 10 | 0) {
                    $Ve = 80.0;
                }
            }
            if (($Re | 0) > 0 | 0) {
                ptrheap[$xd + ($Me * 142 | 0) + 16 >> 2] = gcref($fd(gcref(calloc(150) | 0) | 0, ptrheap[$vd + (($Te | 0) - 1 | 0 * 59 | 0) + 16 >> 2] | 0, ptrheap[$vd + ($Te * 59 | 0) + 16 >> 2] | 0, +$Oe, 1.0, +$Ve) | 0) | 0;
                $Me = ($Me | 0) + 1 | 0;
            }
            if (($Se | 0) > 0 | 0) {
                ptrheap[$xd + ($Me * 142 | 0) + 16 >> 2] = gcref($fd(gcref(calloc(150) | 0) | 0, ptrheap[$vd + ((imul(($Se | 0) - 1 | 0, $sd) | 0) + ($Re | 0) | 0 * 59 | 0) + 16 >> 2] | 0, ptrheap[$vd + ($Te * 59 | 0) + 16 >> 2] | 0, +$Oe, 1.0, +$Ve) | 0) | 0;
                $Me = ($Me | 0) + 1 | 0;
            }
        }
    }
    $wd = $Me | 0;
    $ud = imul($sd, $td) | 0;
    gcderef($Ue);
}
function $4d() {
    return $sd | 0;
}
function $5d() {
    return $td | 0;
}
function $6d($7d) {
    $7d = +$7d;
    $Fd = +$7d;
}
function $8d($9d) {
    $9d = $9d | 0;
    $Gd = $9d | 0;
}
function $_d($ae, $be) {
    $ae = +$ae;
    $be = +$be;
    floatheap[$yd + 8 >> 3] = +$ae;
    floatheap[$yd + 16 >> 3] = +$be;
}
function $ce($de) {
    $de = $de | 0;
    $Ad = $de | 0;
}
function $ee() {
    return $Ad | 0;
}
function $fe($ge, $he, $ie) {
    $ge = +$ge;
    $he = +$he;
    $ie = $ie | 0;
    $zd = gcref($yd | 0) | 0;
    floatheap[$yd + 8 >> 3] = +$ge;
    floatheap[$yd + 16 >> 3] = +$he;
}
function $je($ke) {
    $ke = $ke | 0;
    $Bd = $ke | 0;
    $Id = $K() | 0;
}
function $2e() {
    $vd = gcref(gcref(calloc(500000 + 16 | 0) | 0) | 0) | 0;
    $xd = gcref(gcref(calloc(500000 + 16 | 0) | 0) | 0) | 0;
    $yd = gcref($Wc(gcref(calloc(24) | 0) | 0, 0.0, 0.0) | 0) | 0;
    $zd = gcref($Wc(gcref(calloc(24) | 0) | 0, 0.0, 0.0) | 0) | 0;
    $Pd = gcref(gcref(calloc(2000000 + 16 | 0) | 0) | 0) | 0;
}
function $init() {
    $2e();
}
return {
    malloc: malloc,
    free: free,
    calloc: calloc,
    update: $Od,
    renderLines: $Qd,
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
