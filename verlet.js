window.verlet = 
(function(module) {
var heap = new ArrayBuffer(134217728);
this.Math.imul = this.Math.imul || function imul(a, b) {return (a | 0) * (b | 0) | 0;};
var f32_ = new Float32Array(1);
this.Math.fround = this.Math.fround || function fround(x) {return f32[0] = x, f32[0];};
var ret = module(this, {"Performancenow":(function() {return performance.now.bind(performance) || function() {return (new Date()).getTime();};}()),"Datenowunix":function() {return (new Date()).getTime() / 1000 | 0;},"Datenowunix":function() {return (new Date()).getTime() / 1000 | 0;},"Consolelog":console.log.bind(console),"Consolelog":console.log.bind(console)}, heap);
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
var $rd = 65.0;
var $3d = 0;
var $6d = 0;
var $5d = 0;
var $4d = 0;
var $4e = foreign.Performancenow;
var $jf = stdlib.Math.sqrt;
var $nd = 0;
var $od = 0;
var $pd = 6.0;
var $qd = 30.0;
var $2d = 0;
var $sd = 0.0;
var $td = 0;
var $ud = 0.0;
var $Ad = 0;
var $Bd = 0;
var $1d = 0;
var $8d = 0;
var memheap = new stdlib.Uint8Array(heap);
var sfloatheap = new stdlib.Float32Array(heap);
var floatheap = new stdlib.Float64Array(heap);
var ptrheap = new stdlib.Uint32Array(heap);
function calloc(bytes) {
    bytes = bytes | 0;
    var destination = 0;
    var iter = 0;
    var n = 0;
    var ptr = 0;
    ptr = malloc(bytes) | 0;
    if ((ptr | 0) == 0) {
        return 0;
    }
    if ((bytes | 0) < 8) {
        bytes = 8;
    }
    iter = ptr | 0;
    destination = ptr + bytes | 0;
    n = ((bytes | 0) + 7 | 0) / 8 | 0;
    switch ((bytes | 0) % 8 | 0) {
    case 0:
        memheap[iter] = 0;
        iter = iter + 1 | 0;
    case 7:
        memheap[iter] = 0;
        iter = iter + 1 | 0;
    case 6:
        memheap[iter] = 0;
        iter = iter + 1 | 0;
    case 5:
        memheap[iter] = 0;
        iter = iter + 1 | 0;
    case 4:
        memheap[iter] = 0;
        iter = iter + 1 | 0;
    case 3:
        memheap[iter] = 0;
        iter = iter + 1 | 0;
    case 2:
        memheap[iter] = 0;
        iter = iter + 1 | 0;
    case 1:
        memheap[iter] = 0;
        iter = iter + 1 | 0;
    }
    n = n - 1 | 0;
    while ((n | 0) > 0) {
        memheap[iter] = 0;
        iter = iter + 1 | 0;
        memheap[iter] = 0;
        iter = iter + 1 | 0;
        memheap[iter] = 0;
        iter = iter + 1 | 0;
        memheap[iter] = 0;
        iter = iter + 1 | 0;
        memheap[iter] = 0;
        iter = iter + 1 | 0;
        memheap[iter] = 0;
        iter = iter + 1 | 0;
        memheap[iter] = 0;
        iter = iter + 1 | 0;
        memheap[iter] = 0;
        iter = iter + 1 | 0;
        n = n - 1 | 0;
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
    $Ma = +$4e();
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
function $uc($vc) {
    $vc = +$vc;
    var $id = 0.0;
    $id = +$jf(+$vc);
    return +$id;
}
function $wc($xc, $yc) {
    $xc = +$xc;
    $yc = +$yc;
    var $jd = 0.0;
    $jd = +$uc(+(+(+$xc * +$xc) + +(+$yc * +$yc)));
    return +$jd;
}
function $Tc($Uc, $Vc, $Wc) {
    $Uc = +$Uc;
    $Vc = +$Vc;
    $Wc = +$Wc;
    if (+$Uc < +$Vc | 0) {
        return +$Vc;
    }
    if (+$Uc > +$Wc | 0) {
        return +$Wc;
    }
    return +$Uc;
}
function $wd($xd, $yd, $zd) {
    $xd = $xd | 0;
    $yd = +$yd;
    $zd = +$zd;
    floatheap[$xd + 8 >> 3] = +$yd;
    floatheap[$xd + 16 >> 3] = +$zd;
    return $xd | 0;
}
function $Kd($Ld, $Md, $Nd, $Od, $Pd) {
    $Ld = $Ld | 0;
    $Md = +$Md;
    $Nd = +$Nd;
    $Od = +$Od;
    $Pd = $Pd | 0;
    ptrheap[$Ld + 16 >> 2] = gcref($wd(gcref(calloc(24) | 0) | 0, +$Md, +$Nd) | 0) | 0;
    ptrheap[$Ld + 24 >> 2] = gcref($wd(gcref(calloc(24) | 0) | 0, 0.0, 0.0) | 0) | 0;
    ptrheap[$Ld + 20 >> 2] = gcref(ptrheap[$Ld + 16 >> 2] | 0) | 0;
    floatheap[$Ld + 8 >> 3] = +$Od;
    memheap[$Ld + 28 >> 0] = $Pd | 0;
    return $Ld | 0;
}
function $Dd($Ed, $Fd) {
    $Ed = $Ed | 0;
    $Fd = +$Fd;
    var $we = 0.0;
    var $te = 0.0;
    var $ue = 0.0;
    var $ve = 0.0;
    var $xe = 0.0;
    var $ye = 0.0;
    var $ze = 0.0;
    var $Ae = 0.0;
    $te = +(+$Fd * +$Fd);
    $ue = +floatheap[(ptrheap[$Ed + 16 >> 2] | 0) + 8 >> 3];
    $ve = +floatheap[(ptrheap[$Ed + 16 >> 2] | 0) + 16 >> 3];
    if (memheap[$Ed + 28 >> 0] | 0) {
        return;
    }
    if (($nd | 0) != 0 | 0) {
        $we = +$wc(+(+$ue - +floatheap[$Ad + 8 >> 3]), +(+$ve - +floatheap[$Ad + 16 >> 3]));
        if (($nd | 0) == 1 | 0) {
            if (+$we < +$qd | 0) {
                floatheap[(ptrheap[$Ed + 20 >> 2] | 0) + 8 >> 3] = +(+$ue - +$Tc(+(+(+floatheap[$Ad + 8 >> 3] - +floatheap[$Bd + 8 >> 3]) * 1.8), -30.0, 30.0));
                floatheap[(ptrheap[$Ed + 20 >> 2] | 0) + 16 >> 3] = +(+$ve - +$Tc(+(+(+floatheap[$Ad + 16 >> 3] - +floatheap[$Bd + 16 >> 3]) * 1.8), -30.0, 30.0));
            }
        } else {
            if (+$we < +$pd | 0) {
                memheap[$Ed + 30 >> 0] = 1;
            }
        }
    }
    if (!(memheap[$Ed + 29 >> 0] | 0)) {
        $Gd($Ed | 0, 0.0, +(+floatheap[$Ed + 8 >> 3] * +$sd));
    }
    $xe = +floatheap[(ptrheap[$Ed + 20 >> 2] | 0) + 8 >> 3];
    $ye = +floatheap[(ptrheap[$Ed + 20 >> 2] | 0) + 16 >> 3];
    floatheap[(ptrheap[$Ed + 20 >> 2] | 0) + 8 >> 3] = +$ue;
    floatheap[(ptrheap[$Ed + 20 >> 2] | 0) + 16 >> 3] = +$ve;
    $ze = +(+(+$ue - +$xe) * 0.9);
    $Ae = +(+(+$ve - +$ye) * 0.9);
    floatheap[(ptrheap[$Ed + 16 >> 2] | 0) + 8 >> 3] = +(+(+$ue + +$ze) + +(+floatheap[(ptrheap[$Ed + 24 >> 2] | 0) + 8 >> 3] * +$te));
    floatheap[(ptrheap[$Ed + 16 >> 2] | 0) + 16 >> 3] = +(+(+$ve + +$Ae) + +(+floatheap[(ptrheap[$Ed + 24 >> 2] | 0) + 16 >> 3] * +$te));
    floatheap[(ptrheap[$Ed + 24 >> 2] | 0) + 8 >> 3] = 0.0;
    floatheap[(ptrheap[$Ed + 24 >> 2] | 0) + 16 >> 3] = 0.0;
}
function $Gd($Hd, $Id, $Jd) {
    $Hd = $Hd | 0;
    $Id = +$Id;
    $Jd = +$Jd;
    var $Be = 0;
    $Be = ptrheap[$Hd + 24 >> 2] | 0;
    floatheap[$Be + 8 >> 3] = +(+floatheap[$Be + 8 >> 3] + +(+$Id / +floatheap[$Hd + 8 >> 3]));
    floatheap[$Be + 16 >> 3] = +(+floatheap[$Be + 16 >> 3] + +(+$Jd / +floatheap[$Hd + 8 >> 3]));
    gcderef($Be);
}
function $Vd($Wd, $Xd, $Yd, $Zd, $0d) {
    $Wd = $Wd | 0;
    $Xd = $Xd | 0;
    $Yd = $Yd | 0;
    $Zd = +$Zd;
    $0d = +$0d;
    ptrheap[$Wd + 24 >> 2] = gcref($Xd | 0) | 0;
    ptrheap[$Wd + 28 >> 2] = gcref($Yd | 0) | 0;
    floatheap[$Wd + 8 >> 3] = +$Zd;
    floatheap[$Wd + 16 >> 3] = +$0d;
    return $Wd | 0;
}
function $Rd($Sd) {
    $Sd = $Sd | 0;
    memheap[(ptrheap[$Sd + 24 >> 2] | 0) + 30 >> 0] = 1;
    memheap[(ptrheap[$Sd + 28 >> 2] | 0) + 30 >> 0] = 1;
}
function $Td($Ud) {
    $Ud = $Ud | 0;
    var $Ce = 0;
    var $De = 0;
    var $Ee = 0.0;
    var $Fe = 0.0;
    var $Ge = 0.0;
    var $He = 0.0;
    $Ce = ptrheap[$Ud + 24 >> 2] | 0;
    $De = ptrheap[$Ud + 28 >> 2] | 0;
    $Ee = +(+floatheap[(ptrheap[$Ce + 16 >> 2] | 0) + 8 >> 3] - +floatheap[(ptrheap[$De + 16 >> 2] | 0) + 8 >> 3]);
    $Fe = +(+floatheap[(ptrheap[$Ce + 16 >> 2] | 0) + 16 >> 3] - +floatheap[(ptrheap[$De + 16 >> 2] | 0) + 16 >> 3]);
    $Ge = +$wc(+$Ee, +$Fe);
    if (+$Ge > +floatheap[$Ud + 16 >> 3] | 0) {
        $Rd($Ud | 0);
    }
    $He = +(+(+floatheap[$Ud + 8 >> 3] - +$Ge) / +$Ge);
    if (!(memheap[$Ce + 28 >> 0] | 0)) {
        floatheap[(ptrheap[$Ce + 16 >> 2] | 0) + 8 >> 3] = +(+floatheap[(ptrheap[$Ce + 16 >> 2] | 0) + 8 >> 3] + +(+(+$Ee * +$He) * 0.5));
        floatheap[(ptrheap[$Ce + 16 >> 2] | 0) + 16 >> 3] = +(+floatheap[(ptrheap[$Ce + 16 >> 2] | 0) + 16 >> 3] + +(+(+$Fe * +$He) * 0.5));
    }
    if (!(memheap[$De + 28 >> 0] | 0)) {
        floatheap[(ptrheap[$De + 16 >> 2] | 0) + 8 >> 3] = +(+floatheap[(ptrheap[$De + 16 >> 2] | 0) + 8 >> 3] - +(+(+$Ee * +$He) * 0.5));
        floatheap[(ptrheap[$De + 16 >> 2] | 0) + 16 >> 3] = +(+floatheap[(ptrheap[$De + 16 >> 2] | 0) + 16 >> 3] - +(+(+$Fe * +$He) * 0.5));
    }
    gcderef($Ce);
    gcderef($De);
}
function $7d() {
    var $Xe = 0;
    var $Ie = 0.016;
    var $Je = 0;
    var $Ke = 0;
    for ($Je = 0; ($Je | 0) < 5 | 0; $Je = ($Je | 0) + 1 | 0) {
        for ($Ke = 0; ($Ke | 0) < ($5d | 0) | 0; $Ke = ($Ke | 0) + 1 | 0) {
            $Xe = memheap[(ptrheap[(ptrheap[$6d + ($Ke * 4 | 0) + 16 >> 2] | 0) + 24 >> 2] | 0) + 30 >> 0] | 0;
            if (!($Xe | 0)) {
                $Xe = memheap[(ptrheap[(ptrheap[$6d + ($Ke * 4 | 0) + 16 >> 2] | 0) + 28 >> 2] | 0) + 30 >> 0] | 0;
            }
            if ($Xe) {
                continue;
            }
            $Td(ptrheap[$6d + ($Ke * 4 | 0) + 16 >> 2] | 0);
        }
    }
    for ($Ke = 0; ($Ke | 0) < ($3d | 0) | 0; $Ke = ($Ke | 0) + 1 | 0) {
        $Dd(ptrheap[$4d + ($Ke * 4 | 0) + 16 >> 2] | 0, +$Ie);
    }
}
function $9d() {
    var $Ye = 0;
    var $Le = 1;
    var $Me = 0;
    for ($Me = 0; ($Me | 0) < ($5d | 0) | 0; $Me = ($Me | 0) + 1 | 0) {
        $Ye = memheap[(ptrheap[(ptrheap[$6d + ($Me * 4 | 0) + 16 >> 2] | 0) + 24 >> 2] | 0) + 30 >> 0] | 0;
        if (!($Ye | 0)) {
            $Ye = memheap[(ptrheap[(ptrheap[$6d + ($Me * 4 | 0) + 16 >> 2] | 0) + 28 >> 2] | 0) + 30 >> 0] | 0;
        }
        if ($Ye) {
            continue;
        }
        sfloatheap[$8d + ($Le * 4 | 0) + 16 >> 2] = fround(+floatheap[(ptrheap[(ptrheap[(ptrheap[$6d + ($Me * 4 | 0) + 16 >> 2] | 0) + 24 >> 2] | 0) + 16 >> 2] | 0) + 8 >> 3]);
        $Le = ($Le | 0) + 1 | 0;
        sfloatheap[$8d + ($Le * 4 | 0) + 16 >> 2] = fround(+floatheap[(ptrheap[(ptrheap[(ptrheap[$6d + ($Me * 4 | 0) + 16 >> 2] | 0) + 24 >> 2] | 0) + 16 >> 2] | 0) + 16 >> 3]);
        $Le = ($Le | 0) + 1 | 0;
        sfloatheap[$8d + ($Le * 4 | 0) + 16 >> 2] = fround(+floatheap[(ptrheap[(ptrheap[(ptrheap[$6d + ($Me * 4 | 0) + 16 >> 2] | 0) + 28 >> 2] | 0) + 16 >> 2] | 0) + 8 >> 3]);
        $Le = ($Le | 0) + 1 | 0;
        sfloatheap[$8d + ($Le * 4 | 0) + 16 >> 2] = fround(+floatheap[(ptrheap[(ptrheap[(ptrheap[$6d + ($Me * 4 | 0) + 16 >> 2] | 0) + 28 >> 2] | 0) + 16 >> 2] | 0) + 16 >> 3]);
        $Le = ($Le | 0) + 1 | 0;
    }
    sfloatheap[$8d + (0 * 4 | 0) + 16 >> 2] = fround(fround($Le | 0) - fround(1.0));
    return $8d | 0;
}
function $_d($ae) {
    $ae = $ae | 0;
    var $Ze = 0;
    var $Ne = 0;
    var $Oe = 0;
    var $Pe = 0.0;
    var $Qe = 0;
    var $Re = 0;
    var $Se = 0;
    var $Te = 0;
    var $Ue = 0;
    var $Ve = 0;
    var $We = 0.0;
    $1d = ($ae | 0) + 8 | 0;
    $2d = ($ae | 0) / 2 | 0;
    $Pe = +(700.0 / +(($1d | 0) - 1 | 0));
    $Qe = (($od | 0) / 2 | 0) - ((imul($1d, ~~$Pe | 0) | 0) / 2 | 0) | 0;
    for ($Te = 0; ($Te | 0) < ($2d | 0) | 0; $Te = ($Te | 0) + 1 | 0) {
        for ($Se = 0; ($Se | 0) < ($1d | 0) | 0; $Se = ($Se | 0) + 1 | 0) {
            $Ve = gcref($Kd(gcref(calloc(67) | 0) | 0, +(+($Qe | 0) + +(+($Se | 0) * +$Pe)), +(+($Re | 0) + +(+($Te | 0) * +$Pe)), 1.0, ($Te | 0) == 0 | 0) | 0) | 0;
            $Ue = (imul($Te, $1d) | 0) + ($Se | 0) | 0;
            ptrheap[$4d + ($Ue * 4 | 0) + 16 >> 2] = gcref($Ve | 0) | 0;
            $We = +$rd;
            if (($2d | 0) > 70 | 0) {
                $Ze = (($Te | 0) % 2 | 0) != 0 | 0;
                if ($Ze) {
                    $Ze = (($Se | 0) % 2 | 0) != 0 | 0;
                }
                if ($Ze) {
                    memheap[(ptrheap[$4d + ($Ue * 4 | 0) + 16 >> 2] | 0) + 29 >> 0] = 1;
                }
                if (($Te | 0) < 10 | 0) {
                    $We = 80.0;
                }
            }
            if (($Se | 0) > 0 | 0) {
                ptrheap[$6d + ($Ne * 4 | 0) + 16 >> 2] = gcref($Vd(gcref(calloc(142) | 0) | 0, ptrheap[$4d + ((($Ue | 0) - 1 | 0) * 4 | 0) + 16 >> 2] | 0, ptrheap[$4d + ($Ue * 4 | 0) + 16 >> 2] | 0, +$Pe, +$We) | 0) | 0;
                $Ne = ($Ne | 0) + 1 | 0;
            }
            if (($Te | 0) > 0 | 0) {
                ptrheap[$6d + ($Ne * 4 | 0) + 16 >> 2] = gcref($Vd(gcref(calloc(142) | 0) | 0, ptrheap[$4d + (((imul(($Te | 0) - 1 | 0, $1d) | 0) + ($Se | 0) | 0) * 4 | 0) + 16 >> 2] | 0, ptrheap[$4d + ($Ue * 4 | 0) + 16 >> 2] | 0, +$Pe, +$We) | 0) | 0;
                $Ne = ($Ne | 0) + 1 | 0;
            }
        }
    }
    $5d = $Ne | 0;
    $3d = imul($1d, $2d) | 0;
    gcderef($Ve);
}
function $be() {
    return $1d | 0;
}
function $ce() {
    return $2d | 0;
}
function $de($ee) {
    $ee = +$ee;
    $sd = +$ee;
}
function $fe($ge) {
    $ge = $ge | 0;
    $td = $ge | 0;
}
function $he($ie, $je) {
    $ie = +$ie;
    $je = +$je;
    floatheap[$Ad + 8 >> 3] = +$ie;
    floatheap[$Ad + 16 >> 3] = +$je;
}
function $ke($le) {
    $le = $le | 0;
    $nd = $le | 0;
}
function $me() {
    return $nd | 0;
}
function $ne($oe, $pe, $qe) {
    $oe = +$oe;
    $pe = +$pe;
    $qe = $qe | 0;
    floatheap[$Bd + 8 >> 3] = +floatheap[$Ad + 8 >> 3];
    floatheap[$Bd + 16 >> 3] = +floatheap[$Ad + 16 >> 3];
    floatheap[$Ad + 8 >> 3] = +$oe;
    floatheap[$Ad + 16 >> 3] = +$pe;
}
function $re($se) {
    $se = $se | 0;
    $od = $se | 0;
    $ud = +$K();
}
function $0e() {
    $Ad = gcref($wd(gcref(calloc(24) | 0) | 0, 0.0, 0.0) | 0) | 0;
    $Bd = gcref($wd(gcref(calloc(24) | 0) | 0, 0.0, 0.0) | 0) | 0;
    $4d = gcref(gcref(calloc(((500000 | 0) * 4 | 0) + 16 | 0) | 0) | 0) | 0;
    $6d = gcref(gcref(calloc(((500000 | 0) * 4 | 0) + 16 | 0) | 0) | 0) | 0;
    $8d = gcref(gcref(calloc(((2000000 | 0) * 4 | 0) + 16 | 0) | 0) | 0) | 0;
}
function $init() {
    $0e();
}
return {
    malloc: malloc,
    free: free,
    calloc: calloc,
    update: $7d,
    renderLines: $9d,
    constructMesh: $_d,
    getClothW: $be,
    getClothH: $ce,
    setGravity: $de,
    setWind: $fe,
    setMouse: $he,
    setMouseButton: $ke,
    getMouseButton: $me,
    mouseMove: $ne,
    main: $re,
    $init: $init
};
})
