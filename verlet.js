window.verlet = 
(function(module) {
var heap = new ArrayBuffer(134217728);
this.Math.imul = this.Math.imul || function imul(a, b) {return (a | 0) * (b | 0) | 0;};
var f32_ = new Float32Array(1);
this.Math.fround = this.Math.fround || function fround(x) {return f32[0] = x, f32[0];};
var ret = module(this, {"Performancenow":(function() {return performance.now.bind(performance) || function() {return (new Date()).getTime();};}()),"Datenowunix":function() {return (new Date()).getTime() / 1000 | 0;},"Datenowunix":function() {return (new Date()).getTime() / 1000 | 0;}}, heap);
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
var $Nc = 65.0;
var $od = 0;
var $rd = 0;
var $qd = 0;
var $pd = 0;
var $pe = foreign.Performancenow;
var $De = stdlib.Math.sqrt;
var $Jc = 0;
var $Kc = 0;
var $Lc = 6.0;
var $Mc = 30.0;
var $nd = 0;
var $Oc = 0.0;
var $Pc = 0;
var $Qc = 0.0;
var $Wc = 0;
var $Xc = 0;
var $md = 0;
var $td = 0;
var memheap = new stdlib.Uint8Array(heap);
var sfloatheap = new stdlib.Float32Array(heap);
var floatheap = new stdlib.Float64Array(heap);
var ptrheap = new stdlib.Uint32Array(heap);
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
function gcref(ptr) {
    ptr = ptr | 0;
    if ((ptr | 0) == 0) {
        return 0;
    }
    ptrheap[ptr + 4 >> 2] = (ptrheap[ptr + 4 >> 2] | 0) + 1 | 0;
    return ptr | 0;
}
function $K() {
    var $Ma = 0.0;
    $Ma = +$pe();
    return +$Ma;
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
function $Qb($Rb) {
    $Rb = +$Rb;
    var $Ec = 0.0;
    $Ec = +$De(+$Rb);
    return +$Ec;
}
function $Sb($Tb, $Ub) {
    $Tb = +$Tb;
    $Ub = +$Ub;
    var $Fc = 0.0;
    $Fc = +$Qb(+(+(+$Tb * +$Tb) + +(+$Ub * +$Ub)));
    return +$Fc;
}
function $ec($fc, $gc, $hc) {
    $fc = +$fc;
    $gc = +$gc;
    $hc = +$hc;
    if (+$fc < +$gc | 0) {
        return +$gc;
    }
    if (+$fc > +$hc | 0) {
        return +$hc;
    }
    return +$fc;
}
function $Sc($Tc, $Uc, $Vc) {
    $Tc = $Tc | 0;
    $Uc = +$Uc;
    $Vc = +$Vc;
    floatheap[$Tc + 8 >> 3] = +$Uc;
    floatheap[$Tc + 16 >> 3] = +$Vc;
    return $Tc | 0;
}
function $6c($7c, $8c, $9c, $_c, $ad) {
    $7c = $7c | 0;
    $8c = +$8c;
    $9c = +$9c;
    $_c = +$_c;
    $ad = $ad | 0;
    ptrheap[$7c + 16 >> 2] = gcref($Sc(gcref(calloc(24) | 0) | 0, +$8c, +$9c) | 0) | 0;
    ptrheap[$7c + 24 >> 2] = gcref($Sc(gcref(calloc(24) | 0) | 0, 0.0, 0.0) | 0) | 0;
    ptrheap[$7c + 20 >> 2] = gcref(ptrheap[$7c + 16 >> 2] | 0) | 0;
    floatheap[$7c + 8 >> 3] = +$_c;
    memheap[$7c + 28 >> 0] = $ad | 0;
    return $7c | 0;
}
function $Zc($0c, $1c) {
    $0c = $0c | 0;
    $1c = +$1c;
    var $Sd = 0.0;
    var $Pd = 0.0;
    var $Qd = 0.0;
    var $Rd = 0.0;
    var $Td = 0.0;
    var $Ud = 0.0;
    var $Vd = 0.0;
    var $Wd = 0.0;
    $Pd = +(+$1c * +$1c);
    $Qd = +floatheap[(ptrheap[$0c + 16 >> 2] | 0) + 8 >> 3];
    $Rd = +floatheap[(ptrheap[$0c + 16 >> 2] | 0) + 16 >> 3];
    if (memheap[$0c + 28 >> 0] | 0) {
        return;
    }
    if (($Jc | 0) != 0 | 0) {
        $Sd = +$Sb(+(+$Qd - +floatheap[$Wc + 8 >> 3]), +(+$Rd - +floatheap[$Wc + 16 >> 3]));
        if (($Jc | 0) == 1 | 0) {
            if (+$Sd < +$Mc | 0) {
                floatheap[(ptrheap[$0c + 20 >> 2] | 0) + 8 >> 3] = +(+$Qd - +$ec(+(+(+floatheap[$Wc + 8 >> 3] - +floatheap[$Xc + 8 >> 3]) * 1.8), -30.0, 30.0));
                floatheap[(ptrheap[$0c + 20 >> 2] | 0) + 16 >> 3] = +(+$Rd - +$ec(+(+(+floatheap[$Wc + 16 >> 3] - +floatheap[$Xc + 16 >> 3]) * 1.8), -30.0, 30.0));
            }
        } else {
            if (+$Sd < +$Lc | 0) {
                memheap[$0c + 30 >> 0] = 1;
            }
        }
    }
    if (!(memheap[$0c + 29 >> 0] | 0)) {
        $2c($0c | 0, 0.0, +(+floatheap[$0c + 8 >> 3] * +$Oc));
    }
    $Td = +floatheap[(ptrheap[$0c + 20 >> 2] | 0) + 8 >> 3];
    $Ud = +floatheap[(ptrheap[$0c + 20 >> 2] | 0) + 16 >> 3];
    floatheap[(ptrheap[$0c + 20 >> 2] | 0) + 8 >> 3] = +$Qd;
    floatheap[(ptrheap[$0c + 20 >> 2] | 0) + 16 >> 3] = +$Rd;
    $Vd = +(+(+$Qd - +$Td) * 1.5);
    $Wd = +(+(+$Rd - +$Ud) * 1.5);
    floatheap[(ptrheap[$0c + 16 >> 2] | 0) + 8 >> 3] = +(+(+$Qd + +$Vd) + +(+floatheap[(ptrheap[$0c + 24 >> 2] | 0) + 8 >> 3] * +$Pd));
    floatheap[(ptrheap[$0c + 16 >> 2] | 0) + 16 >> 3] = +(+(+$Rd + +$Wd) + +(+floatheap[(ptrheap[$0c + 24 >> 2] | 0) + 16 >> 3] * +$Pd));
    floatheap[(ptrheap[$0c + 24 >> 2] | 0) + 8 >> 3] = 0.0;
    floatheap[(ptrheap[$0c + 24 >> 2] | 0) + 16 >> 3] = 0.0;
}
function $2c($3c, $4c, $5c) {
    $3c = $3c | 0;
    $4c = +$4c;
    $5c = +$5c;
    var $Xd = 0;
    $Xd = ptrheap[$3c + 24 >> 2] | 0;
    floatheap[$Xd + 8 >> 3] = +(+floatheap[$Xd + 8 >> 3] + +(+$4c / +floatheap[$3c + 8 >> 3]));
    floatheap[$Xd + 16 >> 3] = +(+floatheap[$Xd + 16 >> 3] + +(+$5c / +floatheap[$3c + 8 >> 3]));
    gcderef($Xd);
}
function $gd($hd, $id, $jd, $kd, $ld) {
    $hd = $hd | 0;
    $id = $id | 0;
    $jd = $jd | 0;
    $kd = +$kd;
    $ld = +$ld;
    ptrheap[$hd + 24 >> 2] = gcref($id | 0) | 0;
    ptrheap[$hd + 28 >> 2] = gcref($jd | 0) | 0;
    floatheap[$hd + 8 >> 3] = +$kd;
    floatheap[$hd + 16 >> 3] = +$ld;
    return $hd | 0;
}
function $cd($dd) {
    $dd = $dd | 0;
    memheap[(ptrheap[$dd + 24 >> 2] | 0) + 30 >> 0] = 1;
    memheap[(ptrheap[$dd + 28 >> 2] | 0) + 30 >> 0] = 1;
}
function $ed($fd) {
    $fd = $fd | 0;
    var $Yd = 0;
    var $Zd = 0;
    var $0d = 0.0;
    var $1d = 0.0;
    var $2d = 0.0;
    var $3d = 0.0;
    $Yd = ptrheap[$fd + 24 >> 2] | 0;
    $Zd = ptrheap[$fd + 28 >> 2] | 0;
    $0d = +(+floatheap[(ptrheap[$Yd + 16 >> 2] | 0) + 8 >> 3] - +floatheap[(ptrheap[$Zd + 16 >> 2] | 0) + 8 >> 3]);
    $1d = +(+floatheap[(ptrheap[$Yd + 16 >> 2] | 0) + 16 >> 3] - +floatheap[(ptrheap[$Zd + 16 >> 2] | 0) + 16 >> 3]);
    $2d = +$Sb(+$0d, +$1d);
    if (+$2d > +floatheap[$fd + 16 >> 3] | 0) {
        $cd($fd | 0);
    }
    $3d = +(+(+floatheap[$fd + 8 >> 3] - +$2d) / +$2d);
    if (!(memheap[$Yd + 28 >> 0] | 0)) {
        floatheap[(ptrheap[$Yd + 16 >> 2] | 0) + 8 >> 3] = +(+floatheap[(ptrheap[$Yd + 16 >> 2] | 0) + 8 >> 3] + +(+(+$0d * +$3d) * 0.5));
        floatheap[(ptrheap[$Yd + 16 >> 2] | 0) + 16 >> 3] = +(+floatheap[(ptrheap[$Yd + 16 >> 2] | 0) + 16 >> 3] + +(+(+$1d * +$3d) * 0.5));
    }
    if (!(memheap[$Zd + 28 >> 0] | 0)) {
        floatheap[(ptrheap[$Zd + 16 >> 2] | 0) + 8 >> 3] = +(+floatheap[(ptrheap[$Zd + 16 >> 2] | 0) + 8 >> 3] - +(+(+$0d * +$3d) * 0.5));
        floatheap[(ptrheap[$Zd + 16 >> 2] | 0) + 16 >> 3] = +(+floatheap[(ptrheap[$Zd + 16 >> 2] | 0) + 16 >> 3] - +(+(+$1d * +$3d) * 0.5));
    }
    gcderef($Yd);
    gcderef($Zd);
}
function $sd() {
    var $ie = 0;
    var $4d = 0.016;
    var $5d = 0;
    var $6d = 0;
    for ($5d = 0; ($5d | 0) < 5 | 0; $5d = ($5d | 0) + 1 | 0) {
        for ($6d = 0; ($6d | 0) < ($qd | 0) | 0; $6d = ($6d | 0) + 1 | 0) {
            $ie = memheap[(ptrheap[(ptrheap[$rd + ($6d * 4 | 0) + 16 >> 2] | 0) + 24 >> 2] | 0) + 30 >> 0] | 0;
            if (!($ie | 0)) {
                $ie = memheap[(ptrheap[(ptrheap[$rd + ($6d * 4 | 0) + 16 >> 2] | 0) + 28 >> 2] | 0) + 30 >> 0] | 0;
            }
            if ($ie) {
                continue;
            }
            $ed(ptrheap[$rd + ($6d * 4 | 0) + 16 >> 2] | 0);
        }
    }
    for ($6d = 0; ($6d | 0) < ($od | 0) | 0; $6d = ($6d | 0) + 1 | 0) {
        $Zc(ptrheap[$pd + ($6d * 4 | 0) + 16 >> 2] | 0, +$4d);
    }
}
function $ud() {
    var $je = 0;
    var $7d = 1;
    var $8d = 0;
    for ($8d = 0; ($8d | 0) < ($qd | 0) | 0; $8d = ($8d | 0) + 1 | 0) {
        $je = memheap[(ptrheap[(ptrheap[$rd + ($8d * 4 | 0) + 16 >> 2] | 0) + 24 >> 2] | 0) + 30 >> 0] | 0;
        if (!($je | 0)) {
            $je = memheap[(ptrheap[(ptrheap[$rd + ($8d * 4 | 0) + 16 >> 2] | 0) + 28 >> 2] | 0) + 30 >> 0] | 0;
        }
        if ($je) {
            continue;
        }
        sfloatheap[$td + ($7d * 4 | 0) + 16 >> 2] = fround(+floatheap[(ptrheap[(ptrheap[(ptrheap[$rd + ($8d * 4 | 0) + 16 >> 2] | 0) + 24 >> 2] | 0) + 16 >> 2] | 0) + 8 >> 3]);
        $7d = ($7d | 0) + 1 | 0;
        sfloatheap[$td + ($7d * 4 | 0) + 16 >> 2] = fround(+floatheap[(ptrheap[(ptrheap[(ptrheap[$rd + ($8d * 4 | 0) + 16 >> 2] | 0) + 24 >> 2] | 0) + 16 >> 2] | 0) + 16 >> 3]);
        $7d = ($7d | 0) + 1 | 0;
        sfloatheap[$td + ($7d * 4 | 0) + 16 >> 2] = fround(+floatheap[(ptrheap[(ptrheap[(ptrheap[$rd + ($8d * 4 | 0) + 16 >> 2] | 0) + 28 >> 2] | 0) + 16 >> 2] | 0) + 8 >> 3]);
        $7d = ($7d | 0) + 1 | 0;
        sfloatheap[$td + ($7d * 4 | 0) + 16 >> 2] = fround(+floatheap[(ptrheap[(ptrheap[(ptrheap[$rd + ($8d * 4 | 0) + 16 >> 2] | 0) + 28 >> 2] | 0) + 16 >> 2] | 0) + 16 >> 3]);
        $7d = ($7d | 0) + 1 | 0;
    }
    sfloatheap[$td + (0 * 4 | 0) + 16 >> 2] = fround(fround($7d | 0) - fround(1.0));
    return $td | 0;
}
function $vd($wd) {
    $wd = $wd | 0;
    var $ke = 0;
    var $9d = 0;
    var $_d = 0;
    var $ae = 0.0;
    var $be = 0;
    var $ce = 0;
    var $de = 0;
    var $ee = 0;
    var $fe = 0;
    var $ge = 0;
    var $he = 0.0;
    $md = ($wd | 0) + 8 | 0;
    $nd = ($wd | 0) / 2 | 0;
    $ae = +(700.0 / +(($md | 0) - 1 | 0));
    $be = (($Kc | 0) / 2 | 0) - ((imul($md, ~~$ae | 0) | 0) / 2 | 0) | 0;
    for ($ee = 0; ($ee | 0) < ($nd | 0) | 0; $ee = ($ee | 0) + 1 | 0) {
        for ($de = 0; ($de | 0) < ($md | 0) | 0; $de = ($de | 0) + 1 | 0) {
            $ge = gcref($6c(gcref(calloc(67) | 0) | 0, +(+($be | 0) + +(+($de | 0) * +$ae)), +(+($ce | 0) + +(+($ee | 0) * +$ae)), 1.0, ($ee | 0) == 0 | 0) | 0) | 0;
            $fe = (imul($ee, $md) | 0) + ($de | 0) | 0;
            ptrheap[$pd + ($fe * 4 | 0) + 16 >> 2] = gcref($ge | 0) | 0;
            $he = +$Nc;
            if (($nd | 0) > 70 | 0) {
                $ke = (($ee | 0) % 2 | 0) != 0 | 0;
                if ($ke) {
                    $ke = (($de | 0) % 2 | 0) != 0 | 0;
                }
                if ($ke) {
                    memheap[(ptrheap[$pd + ($fe * 4 | 0) + 16 >> 2] | 0) + 29 >> 0] = 1;
                }
                if (($ee | 0) < 10 | 0) {
                    $he = 80.0;
                }
            }
            if (($de | 0) > 0 | 0) {
                ptrheap[$rd + ($9d * 4 | 0) + 16 >> 2] = gcref($gd(gcref(calloc(142) | 0) | 0, ptrheap[$pd + ((($fe | 0) - 1 | 0) * 4 | 0) + 16 >> 2] | 0, ptrheap[$pd + ($fe * 4 | 0) + 16 >> 2] | 0, +$ae, +$he) | 0) | 0;
                $9d = ($9d | 0) + 1 | 0;
            }
            if (($ee | 0) > 0 | 0) {
                ptrheap[$rd + ($9d * 4 | 0) + 16 >> 2] = gcref($gd(gcref(calloc(142) | 0) | 0, ptrheap[$pd + (((imul(($ee | 0) - 1 | 0, $md) | 0) + ($de | 0) | 0) * 4 | 0) + 16 >> 2] | 0, ptrheap[$pd + ($fe * 4 | 0) + 16 >> 2] | 0, +$ae, +$he) | 0) | 0;
                $9d = ($9d | 0) + 1 | 0;
            }
        }
    }
    $qd = $9d | 0;
    $od = imul($md, $nd) | 0;
    gcderef($ge);
}
function $xd() {
    return $md | 0;
}
function $yd() {
    return $nd | 0;
}
function $zd($Ad) {
    $Ad = +$Ad;
    $Oc = +$Ad;
}
function $Bd($Cd) {
    $Cd = $Cd | 0;
    $Pc = $Cd | 0;
}
function $Dd($Ed, $Fd) {
    $Ed = +$Ed;
    $Fd = +$Fd;
    floatheap[$Wc + 8 >> 3] = +$Ed;
    floatheap[$Wc + 16 >> 3] = +$Fd;
}
function $Gd($Hd) {
    $Hd = $Hd | 0;
    $Jc = $Hd | 0;
}
function $Id() {
    return $Jc | 0;
}
function $Jd($Kd, $Ld, $Md) {
    $Kd = +$Kd;
    $Ld = +$Ld;
    $Md = $Md | 0;
    floatheap[$Xc + 8 >> 3] = +floatheap[$Wc + 8 >> 3];
    floatheap[$Xc + 16 >> 3] = +floatheap[$Wc + 16 >> 3];
    floatheap[$Wc + 8 >> 3] = +$Kd;
    floatheap[$Wc + 16 >> 3] = +$Ld;
}
function $Nd($Od) {
    $Od = $Od | 0;
    $Kc = $Od | 0;
    $Qc = +$K();
}
function $le() {
    $Wc = gcref($Sc(gcref(calloc(24) | 0) | 0, 0.0, 0.0) | 0) | 0;
    $Xc = gcref($Sc(gcref(calloc(24) | 0) | 0, 0.0, 0.0) | 0) | 0;
    $pd = gcref(gcref(calloc(((500000 | 0) * 4 | 0) + 16 | 0) | 0) | 0) | 0;
    $rd = gcref(gcref(calloc(((500000 | 0) * 4 | 0) + 16 | 0) | 0) | 0) | 0;
    $td = gcref(gcref(calloc(((2000000 | 0) * 4 | 0) + 16 | 0) | 0) | 0) | 0;
}
function $init() {
    $le();
}
return {
    malloc: malloc,
    free: free,
    calloc: calloc,
    update: $sd,
    renderLines: $ud,
    constructMesh: $vd,
    getClothW: $xd,
    getClothH: $yd,
    setGravity: $zd,
    setWind: $Bd,
    setMouse: $Dd,
    setMouseButton: $Gd,
    getMouseButton: $Id,
    mouseMove: $Jd,
    main: $Nd,
    $init: $init
};
})
