import { LunarDate, TietKhi } from "../types/tuvi.ts";
import { TIET_KHI } from "./constain.ts";


function jdFromDate(dd: number, mm: number, yy: number) {

    var a = Math.floor((14 - mm) / 12);
    var y = yy + 4800 - a;
    var m = mm + 12 * a - 3;
    var jd = dd + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
    if (jd < 2299161) {
        jd = dd + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - 32083;
    }
    return jd;
}

function jdToDate(jd: number): [number, number, number] {
    if (jd > 2299160) {
        var a = jd + 32044;
        var b = Math.floor((4 * a + 3) / 146097);
        var c = a - Math.floor((b * 146097) / 4);
    } else {
        var b = 0;
        var c = jd + 32082;
    }
    var d = Math.floor((4 * c + 3) / 1461);
    var e = c - Math.floor((1461 * d) / 4);
    var m = Math.floor((5 * e + 2) / 153);
    var day = e - Math.floor((153 * m + 2) / 5) + 1;
    var month = m + 3 - 12 * Math.floor(m / 10);
    var year = b * 100 + d - 4800 + Math.floor(m / 10);
    return [day, month, year];
}

function getNewMoonDay(k, timeZone) {
    var T = k / 1236.85; // Time in Julian centuries from 1900 January 0.5
    var T2 = T * T;
    var T3 = T2 * T;
    var dr = Math.PI / 180;
    var Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3;
    Jd1 = Jd1 + 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr); // Mean new moon
    var M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3; // Sun's mean anomaly
    var Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3; // Moon's mean anomaly
    var F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3; // Moon's argument of latitude
    var C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr) + 0.0021 * Math.sin(2 * dr * M);
    C1 = C1 - 0.4068 * Math.sin(Mpr * dr) + 0.0161 * Math.sin(dr * 2 * Mpr);
    C1 = C1 - 0.0004 * Math.sin(dr * 3 * Mpr);
    C1 = C1 + 0.0104 * Math.sin(dr * 2 * F) - 0.0051 * Math.sin(dr * (M + Mpr));
    C1 = C1 - 0.0074 * Math.sin(dr * (M - Mpr)) + 0.0004 * Math.sin(dr * (2 * F + M));
    C1 = C1 - 0.0004 * Math.sin(dr * (2 * F - M)) - 0.0006 * Math.sin(dr * (2 * F + Mpr));
    C1 = C1 + 0.0010 * Math.sin(dr * (2 * F - Mpr)) + 0.0005 * Math.sin(dr * (2 * Mpr + M));
    var deltat = 0;
    if (T < -11) {
        deltat = 0.001 + 0.000839 * T + 0.0002261 * T2 - 0.00000845 * T3 - 0.000000081 * T * T3;
    } else {
        deltat = -0.000278 + 0.000265 * T + 0.000262 * T2;
    }
    var JdNew = Jd1 + C1 - deltat;
    return Math.floor(JdNew + 0.5 + timeZone / 24);
}

function getSunLongitude(jdn, timeZone) {
    var T = (jdn - 2451545.5 - timeZone / 24) / 36525; // Time in Julian centuries from 2000-01-01 12:00:00 GMT
    var T2 = T * T;
    var dr = Math.PI / 180; // degree to radian
    var M = 357.52910 + 35999.05030 * T - 0.0001559 * T2 - 0.00000048 * T * T2; // mean anomaly, degree
    var L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T2; // mean longitude, degree
    var DL = (1.914602 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
    DL = DL + (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.000290 * Math.sin(dr * 3 * M);
    var L = L0 + DL; // true longitude, degree
    L = L * dr;
    L = L - Math.PI * 2 * (Math.floor(L / (Math.PI * 2))); // Normalize to (0, 2*PI)
    return Math.floor(L / Math.PI * 6);
}

function getLunarMonth11(yy, timeZone) {
    var off = jdFromDate(31, 12, yy) - 2415021;
    var k = Math.floor(off / 29.530588853);
    var nm = getNewMoonDay(k, timeZone);
    var sunLong = getSunLongitude(nm, timeZone); // sun longitude at local midnight
    if (sunLong >= 9) {
        nm = getNewMoonDay(k - 1, timeZone);
    }
    return nm;
}

function getLeapMonthOffset(a11, timeZone) {
    var k = Math.floor((a11 - 2415021.076998695) / 29.530588853 + 0.5);
    var last = 0;
    var i = 1; // We start with the month following lunar month 11
    var arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
    do {
        last = arc;
        i++;
        arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
    } while (arc != last && i < 14);
    return i - 1;
}

function convertSolar2Lunar(dd, mm, yy, timeZone) {
    var dayNumber = jdFromDate(dd, mm, yy);
    var k = Math.floor((dayNumber - 2415021.076998695) / 29.530588853);
    var monthStart = getNewMoonDay(k + 1, timeZone);
    if (monthStart > dayNumber) {
        monthStart = getNewMoonDay(k, timeZone);
    }
    var a11 = getLunarMonth11(yy, timeZone);
    var b11 = a11;
    if (a11 >= monthStart) {
        a11 = getLunarMonth11(yy - 1, timeZone);
    } else {
        b11 = getLunarMonth11(yy + 1, timeZone);
    }
    var lunarDay = dayNumber - monthStart + 1;
    var diff = Math.floor((monthStart - a11) / 29);
    var lunarLeap = 0;
    var lunarMonth = diff + 11;
    var lunarYear = yy;
    if (b11 - a11 > 365) {
        var leapMonthDiff = getLeapMonthOffset(a11, timeZone);
        if (diff >= leapMonthDiff) {
            lunarMonth = diff + 10;
            if (diff == leapMonthDiff) {
                lunarLeap = 1;
            }
        }
    }
    if (lunarMonth > 12) {
        lunarMonth = lunarMonth - 12;
    }
    if (lunarMonth >= 11 && diff < 4) {
        lunarYear = yy - 1;
    }
    return new LunarDate(lunarDay, lunarMonth, lunarYear, lunarLeap, dayNumber);
}



function convertLunar2Solar(lunarDay, lunarMonth, lunarYear, lunarLeap, timeZone) {
    if (lunarMonth < 11) {
        var a11 = getLunarMonth11(lunarYear - 1, timeZone);
        var b11 = getLunarMonth11(lunarYear, timeZone);
    } else {
        var a11 = getLunarMonth11(lunarYear, timeZone);
        var b11 = getLunarMonth11(lunarYear + 1, timeZone);
    }
    var k = Math.floor(0.5 + (a11 - 2415021.076998695) / 29.530588853);
    var off = lunarMonth - 11;
    if (off < 0) {
        off += 12;
    }
    if (b11 - a11 > 365) {
        var leapOff = getLeapMonthOffset(a11, timeZone);
        var leapMonth = leapOff - 2;
        if (leapMonth < 0) {
            leapMonth += 12;
        }
        if (lunarLeap != 0 && lunarMonth != leapMonth) {
            return [0, 0, 0];
        } else if (lunarLeap != 0 || off >= leapOff) {
            off += 1;
        }
    }
    var monthStart = getNewMoonDay(k + off, timeZone);
    return jdToDate(monthStart + lunarDay - 1);
}

export function getLunarDateTK(lunar: LunarDate, timeZone = 7): LunarDate {
    var sunDegree = getSunLongitude(lunar.jd, timeZone);
    var tiet_khi = getTietKhiFromDegree(sunDegree);
    var thangTK = monthByTK(tiet_khi);
    if (thangTK === 1 && tiet_khi === TietKhi.DaiHan) {
        lunar.year -= 1;
    } else if (thangTK === 12 && tiet_khi === TietKhi.LapXuan) {
        lunar.year += 1;
    }
   
    return {
        day: lunar.day,
        month: thangTK,
        year: lunar.year,
        leapYear: lunar.leapYear,
        jd: lunar.jd
    }
}


export function monthByTK(tiet_khi: number): number {

    return (Math.floor((tiet_khi + 3) / 2) % 12) + 1;
}
export function getTietKhiFromDegree(degree: number): number {
    // Normalize degree to 0-359 range
    degree = degree % 360;
    if (degree < 0) degree += 360;

    // Get TIET_KHI index (0-23)
    const index = Math.floor(degree / 15);

    return index
}
export { convertSolar2Lunar, convertLunar2Solar };