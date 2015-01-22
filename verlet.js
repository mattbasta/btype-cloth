window.verlet = 
(function(module) {
this.Math.imul = this.Math.imul || function(a, b) {return (a | 0) * (b | 0) | 0;};
var ret = module(this, {"Datenowunix":function() {return (new Date()).getTime() / 1000 | 0;},"Datenowunix":function() {return (new Date()).getTime() / 1000 | 0;}});
if (ret.$init) {ret.$init();delete ret.$init;}
return ret;
})(function(stdlib, foreign) {
var $yd = null;
var $Ed = 65;
var $sd = 0;
var $td = 0;
var $ud = 0;
var $vd = null;
var $wd = 0;
var $xd = null;
var imul = stdlib.Math.imul;
var $zd = null;
var $Ad = 0;
var $Bd = 0;
var $Cd = 6;
var $Dd = 30;
var $Fd = 0.0;
var $Gd = null;
var $Id = 0;
function $qc($rc, $sc, $tc) {
    if ($rc < $sc) {
        return $sc;
    }
    if ($rc > $tc) {
        return $tc;
    }
    return $rc;
}
function struct$$ed($nd, $od, $pd, $qd, $rd) {
    var $md = this;
    this.p1 = 0;
    this.p2 = 0;
    this.distRest = 0;
    this.stiffness = 0;
    this.tearness = 0;
    $md.p1 = $nd;
    $md.p2 = $od;
    $md.distRest = $pd;
    $md.stiffness = $qd;
    $md.tearness = $rd;
}
function struct$$Vc($1c, $2c) {
    var $0c = this;
    this.x = 0;
    this.y = 0;
    $0c.x = $1c;
    $0c.y = $2c;
}
function $K() {
    var $Za = 0;
    $Za = foreign.Datenowunix();
    return $Za;
}
function $Lb($Mb) {
    var $Ic = 0.0;
    $Ic = stdlib.Math.cos($Mb);
    return $Ic;
}
function struct$$3c($ad, $bd, $cd, $dd) {
    var $_c = this;
    this.pos = 0;
    this.lastPos = 0;
    this.mass = 0;
    this.acc = 0;
    this.pinned = 0;
    this.free = 0;
    this.markRemove = 0;
    $_c.pos = new struct$$Vc($ad, $bd);
    $_c.acc = new struct$$Vc(0.0, 0.0);
    $_c.lastPos = $_c.pos;
    $_c.mass = $cd;
    $_c.pinned = $dd;
}
function $Nb($Ob) {
    var $Jc = 0.0;
    $Jc = stdlib.Math.sin($Ob);
    return $Jc;
}
function $2b($3b) {
    var $Qc = 0.0;
    $Qc = stdlib.Math.sqrt($3b);
    return $Qc;
}
function $4b($5b, $6b) {
    var $Rc = 0.0;
    $Rc = $2b($5b * $5b + $6b * $6b);
    return $Rc;
}
function $Od() {
    var $Ze = 0;
    var $te = 0.016;
    var $ue = 0;
    var $ve = 0;
    var $we = 0;
    $ue = $K() - $Id;
    for ($ve = 0; $ve < 5; $ve = $ve + 1) {
        for ($we = 0; $we < $wd; $we = $we + 1) {
            $Ze = $xd[$we].p1.markRemove;
            if (!$Ze) {
                $Ze = $xd[$we].p2.markRemove;
            }
            if ($Ze) {
                continue;
            }
            $Xd($xd[$we]);
        }
    }
    for ($we = 0; $we < $ud; $we = $we + 1) {
        if ($Gd) {
            $Td($vd[$we], (($Lb($vd[$we].pos.x / 30.0) + 1.0) * 200.0 + $vd[$we].pos.y / 700.0 * 600.0) * ($Nb(+$ue) * 0.5 + 1.0), 0.0);
        }
        $Qd($vd[$we], $te);
    }
}
function $Pd() {
    var $0e = 0;
    var $xe = null;
    var $ye = 1;
    var $ze = 0;
    $xe = new Float64Array(2000000);
    for ($ze = 0; $ze < $wd; $ze = $ze + 1) {
        $0e = $xd[$ze].p1.markRemove;
        if (!$0e) {
            $0e = $xd[$ze].p2.markRemove;
        }
        if ($0e) {
            continue;
        }
        $xe[$ye] = $xd[$ze].p1.pos.x;
        $ye = $ye + 1;
        $xe[$ye] = $xd[$ze].p1.pos.y;
        $ye = $ye + 1;
        $xe[$ye] = $xd[$ze].p2.pos.x;
        $ye = $ye + 1;
        $xe[$ye] = $xd[$ze].p2.pos.y;
        $ye = $ye + 1;
    }
    $xe[0] = +$ye - 1.0;
    return $xe;
}
function $Qd($Rd, $Sd) {
    var $Be = 0.0;
    var $Ae = 0.0;
    var $Ce = 0.0;
    var $De = 0.0;
    var $Ee = 0.0;
    var $Fe = 0.0;
    $Ae = $Sd * $Sd;
    if ($Ad != 0) {
        $Be = $4b($Rd.pos.x - $yd.x, $Rd.pos.y - $yd.y);
        if ($Ad === 1) {
            if ($Be < +$Dd) {
                $Rd.lastPos.x = $Rd.pos.x - $qc(($yd.x - $zd.x) * 1.8, -30.0, 30.0);
                $Rd.lastPos.y = $Rd.pos.y - $qc(($yd.y - $zd.y) * 1.8, -30.0, 30.0);
            }
        } else {
            if ($Be < +$Cd) {
                $Rd.markRemove = true;
            }
        }
    }
    if (!$Rd.free) {
        $Td($Rd, 0.0, $Rd.mass * $Fd);
    }
    $Ce = $Rd.pos.x;
    $De = $Rd.pos.y;
    $Ee = $Rd.lastPos.x;
    $Fe = $Rd.lastPos.y;
    if (!$Rd.pinned) {
        $Rd.lastPos = $Rd.pos;
        $Rd.pos.x = $Ce + ($Ce - $Ee) * 0.9 + $Rd.acc.x * $Ae;
        $Rd.pos.y = $De + ($De - $Fe) * 0.9 + $Rd.acc.y * $Ae;
    }
    $Rd.acc.x = 0.0;
    $Rd.acc.y = 0.0;
}
function $Td($Ud, $Vd, $Wd) {
    $Ud.acc.x = $Ud.acc.x + $Vd / $Ud.mass;
    $Ud.acc.y = $Ud.acc.y + $Wd / $Ud.mass;
}
function $Xd($Yd) {
    var $Ge = null;
    var $He = null;
    var $Ie = 0.0;
    var $Je = 0.0;
    var $Ke = 0.0;
    var $Le = 0.0;
    $Ge = $Yd.p1;
    $He = $Yd.p2;
    $Ie = $Ge.pos.x - $He.pos.x;
    $Je = $Ge.pos.y - $He.pos.y;
    $Ke = $4b($Ie, $Je);
    if ($Ke > $Yd.tearness) {
        $Zd($Yd);
    }
    $Le = $Yd.distRest / $Ke - 1.0;
    if (!$Ge.pinned) {
        $Ge.pos.x = $Ge.pos.x + $Ie * $Le * 0.5;
        $Ge.pos.y = $Ge.pos.y + $Je * $Le * 0.5;
    }
    if (!$He.pinned) {
        $He.pos.x = $He.pos.x - $Ie * $Le * 0.5;
        $He.pos.y = $He.pos.y - $Je * $Le * 0.5;
    }
}
function $Zd($0d) {
    $0d.p1.markRemove = true;
    $0d.p2.markRemove = true;
}
function $1d($2d) {
    var $1e = 0;
    var $Me = 0;
    var $Ne = 0;
    var $Oe = 0.0;
    var $Pe = 0;
    var $Qe = 0;
    var $Re = 0;
    var $Se = 0;
    var $Te = 0;
    var $Ue = null;
    var $Ve = 0.0;
    $sd = $2d + 8;
    $td = $2d / 2 | 0;
    $Oe = 700.0 / +($sd - 1);
    $Pe = ($Bd / 2 | 0) - (imul($sd, $Oe | 0) / 2 | 0);
    for ($Se = 0; $Se < $td; $Se = $Se + 1) {
        for ($Re = 0; $Re < $sd; $Re = $Re + 1) {
            $Ue = new struct$$3c(+$Pe + +$Re * $Oe, +$Qe + +$Se * $Oe, 1.0, $Se === 0);
            $Te = imul($Se, $sd) + $Re;
            $vd[$Te] = $Ue;
            $Ve = +$Ed;
            if ($td > 70) {
                $1e = $Se % 2 != 0;
                if ($1e) {
                    $1e = $Re % 2 != 0;
                }
                if ($1e) {
                    $vd[$Te].free = true;
                }
                if ($Se < 10) {
                    $Ve = 80.0;
                }
            }
            if ($Re > 0) {
                $xd[$Me] = new struct$$ed($vd[$Te - 1], $vd[$Te], $Oe, 1.0, $Ve);
                $Me = $Me + 1;
            }
            if ($Se > 0) {
                $xd[$Me] = new struct$$ed($vd[imul($Se - 1, $sd) + $Re], $vd[$Te], $Oe, 1.0, $Ve);
                $Me = $Me + 1;
            }
        }
    }
    $wd = $Me;
    $ud = imul($sd, $td);
}
function $3d() {
    return $sd;
}
function $4d() {
    return $td;
}
function $5d($6d) {
    $Fd = $6d;
}
function $7d($8d) {
    $Gd = $8d;
}
function $9d($_d, $ae) {
    $yd.x = $_d;
    $yd.y = $ae;
}
function $be($ce) {
    $Ad = $ce;
}
function $de() {
    return $Ad;
}
function $ee($fe, $ge, $he) {
    $zd = $yd;
    $yd.x = $fe;
    $yd.y = $ge;
}
function $ie($je) {
    $Bd = $je;
    $Id = $K();
}
function $2e() {
    $vd = new Array(500000);
    $xd = new Array(500000);
    $yd = new struct$$Vc(0.0, 0.0);
    $zd = new struct$$Vc(0.0, 0.0);
}
function $init() {
    $2e();
}
return {
    update: $Od,
    renderLines: $Pd,
    constructMesh: $1d,
    getClothW: $3d,
    getClothH: $4d,
    setGravity: $5d,
    setWind: $7d,
    setMouse: $9d,
    setMouseButton: $be,
    getMouseButton: $de,
    mouseMove: $ee,
    main: $ie,
    $init: $init
};
})
