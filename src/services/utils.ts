import { CUNG_CHUC, DIA_CHI, THIEN_CAN, VONG_TRANG_SINH } from './constain.ts';
import { AmDuongNamNu, StarEnum, Cuc, DiaChi, LunarDate, NguHanh, ThienCan, Star} from '../types/tuvi.ts';
import { TuTru } from '../types/tuvi.ts';


export function getAmDuongNamNu(isMale: boolean, canNam: number): number {
    if (isMale && canNam % 2 === 0) return AmDuongNamNu.DuongNam;
    if (isMale && canNam % 2 === 1) return AmDuongNamNu.AmNam;
    if (!isMale && canNam % 2 === 0) return AmDuongNamNu.DuongNu;
    if (!isMale && canNam % 2 === 1) return AmDuongNamNu.AmNu;
    throw new Error("Invalid input parameters");
}

export function anCanCung(year: number) {
    let canCung: number[] = new Array(12);
    for (let i = 0; i < 12; i++) {
        var thang = (i + 11) % 12;
        if (thang === 0) thang = 12;
        canCung[i] = (year * 12 + thang + 3) % 10;
    }
    return canCung;
}
export function getChiGio(hour: number): number {
    /**
     * Converts a given hour (in 24-hour format) to the corresponding Can Chi hour.
     *
     * @param hour - The hour in 24-hour format (0 to 23).
     * @returns index of Dia Chi
     */
    if (hour < 0 || hour >= 24) {
        throw new Error("Hour must be between 0 and 23.");
    }

    // Array of 12 Chi

    // Calculate the index of the Can Chi hour
    return Math.floor((hour + 1) / 2) % 12;

}


function getCanChiNam(year: number) {
    var can = (year + 6) % 10;
    var chi = (year + 8) % 12;
    return [can, chi];
}

function getCanChiThang(year: number, month: number) {
    var can = (year * 12 + month + 3) % 10;
    var chi = (month + 1) % 12;
    return [can, chi];
}

function getCanChiNgay(jd: number) {
    var can = (jd + 9) % 10;
    var chi = (jd + 1) % 12;
    return [can, chi];
}
function getCanChiGio(jd: number, chiGio: number) {
    var canDauNgay = (Math.floor(jd - 1) * 2) % 10;
    var can = (canDauNgay + chiGio) % 10;
    return [can, chiGio];
}

export function getTuTru(lunarTK: LunarDate, chiGio: number): TuTru {
    var [canNam, chiNam] = getCanChiNam(lunarTK.year);
    var [canThang, chiThang] = getCanChiThang(lunarTK.year, lunarTK.month);
    var [canNgay, chiNgay] = getCanChiNgay(lunarTK.jd);
    var [canGio, chiGio] = getCanChiGio(lunarTK.jd, chiGio);
    return {
        canGio,
        chiGio,
        canNgay,
        chiNgay,
        canThang,
        chiThang,
        canNam,
        chiNam
    };
}


export function anCungMenh(month: number, hour: number) {
    return (month - hour + 12 + 1) % 12;
}

/*

    return arr: về cung chức nằm ở vị trí nào theo địa chi. 

    Ví dụ arr[0]: Cung Tý sẽ tương ứng 2: cung chức là Phúc Đức

*/
export function anCungChuc(viTriMenh: number) {
    var viTriCung: number[] = []
    for (var i = 0; i < 12; i++) {
        viTriCung.push((viTriMenh + i) % 12);
    }

    var diachi = new Array(12);
    for (let i = 0; i < 12; i++) {
        diachi[viTriCung[i]] = i
    }

    return diachi;
}

export function anCungThan(month: number, hour: number) {
    return (month + hour) % 12;
}

export function timCucMenh(viTriMenh: number, canNam: number): Cuc {
    const CUC_MAP = {
        [`${DiaChi.Ty},${DiaChi.Suu}`]: {
            [`${ThienCan.Giap},${ThienCan.Ky}`]: { ten: "Thuỷ Nhị cục", so: 2, nguHanh: NguHanh.Thuy },
            [`${ThienCan.At},${ThienCan.Canh}`]: { ten: "Hỏa Lục cục", so: 6, nguHanh: NguHanh.Hoa },
            [`${ThienCan.Binh},${ThienCan.Tan}`]: { ten: "Thổ Ngũ cục", so: 5, nguHanh: NguHanh.Tho },
            [`${ThienCan.Dinh},${ThienCan.Nham}`]: { ten: "Mộc Tam cục", so: 3, nguHanh: NguHanh.Moc },
            [`${ThienCan.Mau},${ThienCan.Quy}`]: { ten: "Kim Tứ cục", so: 4, nguHanh: NguHanh.Kim }
        },
        [`${DiaChi.Dan},${DiaChi.Mao},${DiaChi.Tuat},${DiaChi.Hoi}`]: {
            [`${ThienCan.Giap},${ThienCan.Ky}`]: { ten: "Hỏa Lục cục", so: 6, nguHanh: NguHanh.Hoa },
            [`${ThienCan.At},${ThienCan.Canh}`]: { ten: "Thổ Ngũ cục", so: 5, nguHanh: NguHanh.Tho },
            [`${ThienCan.Binh},${ThienCan.Tan}`]: { ten: "Mộc Tam cục", so: 3, nguHanh: NguHanh.Moc },
            [`${ThienCan.Dinh},${ThienCan.Nham}`]: { ten: "Kim Tứ cục", so: 4, nguHanh: NguHanh.Kim },
            [`${ThienCan.Mau},${ThienCan.Quy}`]: { ten: "Thuỷ Nhị cục", so: 2, nguHanh: NguHanh.Thuy }
        },
        [`${DiaChi.Thin},${DiaChi.Ti}`]: {
            [`${ThienCan.Mau},${ThienCan.Quy}`]: { ten: "Thổ Ngũ cục", so: 5, nguHanh: NguHanh.Tho },
            [`${ThienCan.Giap},${ThienCan.Ky}`]: { ten: "Mộc Tam cục", so: 3, nguHanh: NguHanh.Moc },
            [`${ThienCan.At},${ThienCan.Canh}`]: { ten: "Kim Tứ cục", so: 4, nguHanh: NguHanh.Kim },
            [`${ThienCan.Binh},${ThienCan.Tan}`]: { ten: "Thuỷ Nhị cục", so: 2, nguHanh: NguHanh.Thuy },
            [`${ThienCan.Dinh},${ThienCan.Nham}`]: { ten: "Hỏa Lục cục", so: 6, nguHanh: NguHanh.Hoa }
        },
        [`${DiaChi.Ngo},${DiaChi.Mui}`]: {
            [`${ThienCan.Giap},${ThienCan.Ky}`]: { ten: "Thổ Ngũ cục", so: 5, nguHanh: NguHanh.Tho },
            [`${ThienCan.At},${ThienCan.Canh}`]: { ten: "Mộc Tam cục", so: 3, nguHanh: NguHanh.Moc },
            [`${ThienCan.Binh},${ThienCan.Tan}`]: { ten: "Kim Tứ cục", so: 4, nguHanh: NguHanh.Kim },
            [`${ThienCan.Dinh},${ThienCan.Nham}`]: { ten: "Thuỷ Nhị cục", so: 2, nguHanh: NguHanh.Thuy },
            [`${ThienCan.Mau},${ThienCan.Quy}`]: { ten: "Hỏa Lục cục", so: 6, nguHanh: NguHanh.Hoa }
        },
        [`${DiaChi.Than},${DiaChi.Dau}`]: {
            [`${ThienCan.Mau},${ThienCan.Quy}`]: { ten: "Mộc Tam cục", so: 3, nguHanh: NguHanh.Moc },
            [`${ThienCan.Giap},${ThienCan.Ky}`]: { ten: "Kim Tứ cục", so: 4, nguHanh: NguHanh.Kim },
            [`${ThienCan.At},${ThienCan.Canh}`]: { ten: "Thuỷ Nhị cục", so: 2, nguHanh: NguHanh.Thuy },
            [`${ThienCan.Binh},${ThienCan.Tan}`]: { ten: "Hỏa Lục cục", so: 6, nguHanh: NguHanh.Hoa },
            [`${ThienCan.Dinh},${ThienCan.Nham}`]: { ten: "Thổ Ngũ cục", so: 5, nguHanh: NguHanh.Tho }
        }
    };

    // Find matching viTriMenh group
    const viTriGroup = Object.keys(CUC_MAP).find(key =>
        key.split(',').map(Number).includes(viTriMenh)
    );

    if (!viTriGroup) {
        throw new Error(`Invalid viTriMenh: ${viTriMenh}`);
    }

    // Find matching canNam group
    const canGroup = Object.keys(CUC_MAP[viTriGroup]).find(key =>
        key.split(',').map(Number).includes(canNam)
    );

    if (!canGroup) {
        throw new Error(`Invalid canNam: ${canNam}`);
    }

    return CUC_MAP[viTriGroup][canGroup];
}


function anTuvi(day: number, cuc: Cuc) {
    let B = day % cuc.so === 0 ? 0 : cuc.so - (day % cuc.so);
    let A = (day + B) / cuc.so;
    let C = B % 2 === 1 ? A - B : A + B;

    return (C + 13) % 12;
}

function anThienPhu(viTriTuVi: number) {
    return (viTriTuVi - (viTriTuVi - 2) * 2 + 12) % 12;
}

export function anChinhtinh(day: number, cuc: Cuc) {
    let viTriChinhTinh: Star[][] = Array.from({ length: 12 }, () => []);

    // an chom tu vi
    const viTriTuvi = anTuvi(day, cuc);
    viTriChinhTinh[viTriTuvi].push({ name: StarEnum.Tuvi, nguHanh: NguHanh.Tho });
    viTriChinhTinh[(viTriTuvi + 4) % 12].push({ name: StarEnum.LiemTrinh, nguHanh: NguHanh.Hoa });
    viTriChinhTinh[(viTriTuvi + 8) % 12].push({ name: StarEnum.VuKhuc, nguHanh: NguHanh.Kim });
    viTriChinhTinh[(viTriTuvi + 11) % 12].push({ name: StarEnum.ThienCo, nguHanh: NguHanh.Moc });
    viTriChinhTinh[(viTriTuvi + 9) % 12].push({ name: StarEnum.ThaiDuong, nguHanh: NguHanh.Hoa });
    viTriChinhTinh[(viTriTuvi + 7) % 12].push({ name: StarEnum.ThienDong, nguHanh: NguHanh.Thuy });

    // an chom thien phu
    const viTriThienPhu = anThienPhu(viTriTuvi);
    viTriChinhTinh[viTriThienPhu].push({ name: StarEnum.ThienPhu, nguHanh: NguHanh.Tho });
    viTriChinhTinh[(viTriThienPhu + 1) % 12].push({ name: StarEnum.ThaiAm, nguHanh: NguHanh.Thuy });
    viTriChinhTinh[(viTriThienPhu + 2) % 12].push({ name: StarEnum.ThamLang, nguHanh: NguHanh.Thuy });
    viTriChinhTinh[(viTriThienPhu + 3) % 12].push({ name: StarEnum.CuMon, nguHanh: NguHanh.Thuy });
    viTriChinhTinh[(viTriThienPhu + 4) % 12].push({ name: StarEnum.ThienTuong, nguHanh: NguHanh.Thuy });
    viTriChinhTinh[(viTriThienPhu + 5) % 12].push({ name: StarEnum.ThienLuong, nguHanh: NguHanh.Tho });
    viTriChinhTinh[(viTriThienPhu + 6) % 12].push({ name: StarEnum.ThatSat, nguHanh: NguHanh.Kim });
    viTriChinhTinh[(viTriThienPhu + 10) % 12].push({ name: StarEnum.PhaQuan, nguHanh: NguHanh.Thuy });

    return viTriChinhTinh;
}


export function anVongThaiTue(chiNam: number) {
    let viTriVongThaiTue: Star[] = new Array(12);
    viTriVongThaiTue[(chiNam + 0) % 12] = { name: StarEnum.ThaiTue, nguHanh: NguHanh.Moc };
    viTriVongThaiTue[(chiNam + 1) % 12] = { name: StarEnum.ThieuDuong, nguHanh: NguHanh.Hoa };
    viTriVongThaiTue[(chiNam + 2) % 12] = { name: StarEnum.TangMon, nguHanh: NguHanh.Moc };
    viTriVongThaiTue[(chiNam + 3) % 12] = { name: StarEnum.ThieuAm, nguHanh: NguHanh.Thuy };
    viTriVongThaiTue[(chiNam + 4) % 12] = { name: StarEnum.ThaiTueQuanPhu, nguHanh: NguHanh.Hoa };
    viTriVongThaiTue[(chiNam + 5) % 12] = { name: StarEnum.TuPhu, nguHanh: NguHanh.Hoa };
    viTriVongThaiTue[(chiNam + 6) % 12] = { name: StarEnum.TuePha, nguHanh: NguHanh.Hoa };
    viTriVongThaiTue[(chiNam + 7) % 12] = { name: StarEnum.LongDuc, nguHanh: NguHanh.Hoa };
    viTriVongThaiTue[(chiNam + 8) % 12] = { name: StarEnum.BachHo, nguHanh: NguHanh.Kim };
    viTriVongThaiTue[(chiNam + 9) % 12] = { name: StarEnum.PhucDuc, nguHanh: NguHanh.Tho };
    viTriVongThaiTue[(chiNam + 10) % 12] = { name: StarEnum.DieuKhach, nguHanh: NguHanh.Hoa };
    viTriVongThaiTue[(chiNam + 11) % 12] = { name: StarEnum.TrucPhu, nguHanh: NguHanh.Hoa };

    return viTriVongThaiTue;
}

function getViTriLocTon(canNam: number) {
    var viTriLocTon;
    if (canNam === ThienCan.Giap) viTriLocTon = DiaChi.Dan;
    if (canNam === ThienCan.At) viTriLocTon = DiaChi.Mao;
    if (canNam === ThienCan.Binh) viTriLocTon = DiaChi.Ti;
    if (canNam === ThienCan.Dinh) viTriLocTon = DiaChi.Ngo;
    if (canNam === ThienCan.Mau) viTriLocTon = DiaChi.Ti;
    if (canNam === ThienCan.Ky) viTriLocTon = DiaChi.Ngo;
    if (canNam === ThienCan.Canh) viTriLocTon = DiaChi.Than;
    if (canNam === ThienCan.Tan) viTriLocTon = DiaChi.Dau;
    if (canNam === ThienCan.Nham) viTriLocTon = DiaChi.Hoi;
    if (canNam === ThienCan.Quy) viTriLocTon = DiaChi.Ty;
    return viTriLocTon;
}



export function anVongLocTon(canNam: number) {
    var viTriLocTon = getViTriLocTon(canNam);
    let viTriVongLocTon: Star[] = new Array(12);
    viTriVongLocTon[(viTriLocTon + 0) % 12] = { name: StarEnum.LocTon, nguHanh: NguHanh.Tho };
    viTriVongLocTon[(viTriLocTon + 1) % 12] = { name: StarEnum.LucSy, nguHanh: NguHanh.Kim };
    viTriVongLocTon[(viTriLocTon + 2) % 12] = { name: StarEnum.ThanhLong, nguHanh: NguHanh.Moc };
    viTriVongLocTon[(viTriLocTon + 3) % 12] = { name: StarEnum.TieuHao, nguHanh: NguHanh.Hoa };
    viTriVongLocTon[(viTriLocTon + 4) % 12] = { name: StarEnum.TuongQuan, nguHanh: NguHanh.Moc };
    viTriVongLocTon[(viTriLocTon + 5) % 12] = { name: StarEnum.TauThu, nguHanh: NguHanh.Hoa };
    viTriVongLocTon[(viTriLocTon + 6) % 12] = { name: StarEnum.PhiLiem, nguHanh: NguHanh.Hoa };
    viTriVongLocTon[(viTriLocTon + 7) % 12] = { name: StarEnum.HyThan, nguHanh: NguHanh.Hoa };
    viTriVongLocTon[(viTriLocTon + 8) % 12] = { name: StarEnum.BenhPhu, nguHanh: NguHanh.Thuy };
    viTriVongLocTon[(viTriLocTon + 9) % 12] = { name: StarEnum.DaiHao, nguHanh: NguHanh.Hoa };
    viTriVongLocTon[(viTriLocTon + 10) % 12] = { name: StarEnum.PhucBinh, nguHanh: NguHanh.Hoa };
    viTriVongLocTon[(viTriLocTon + 11) % 12] = { name: StarEnum.LocTonQuanPhu, nguHanh: NguHanh.Hoa };

    return viTriVongLocTon;
}

export function anVongTrangSinh(cuc: Cuc, am_duong_nam_nu: number) {
    var viTriTrangSinh;
    if (cuc.nguHanh === NguHanh.Thuy) viTriTrangSinh = DiaChi.Than;
    if (cuc.nguHanh === NguHanh.Moc) viTriTrangSinh = DiaChi.Hoi;
    if (cuc.nguHanh === NguHanh.Kim) viTriTrangSinh = DiaChi.Ti;
    if (cuc.nguHanh === NguHanh.Hoa) viTriTrangSinh = DiaChi.Dan;
    if (cuc.nguHanh === NguHanh.Tho) viTriTrangSinh = DiaChi.Than;

    var viTriVongTruongSinh;
    if (am_duong_nam_nu === AmDuongNamNu.DuongNam || am_duong_nam_nu === AmDuongNamNu.AmNu) {
        viTriVongTruongSinh = Array.from({ length: 12 }, (_, i) => (viTriTrangSinh + i) % 12);
    } else {
        viTriVongTruongSinh = Array.from({ length: 12 }, (_, i) => (viTriTrangSinh - i + 12) % 12);
    }
    const diaChi = Array.from({ length: 12 }, (_, i) => viTriVongTruongSinh.indexOf(i));

    return diaChi;

}


export function anSatTinh(canNam: number, chiNam: number, chiGio: number) {
    // an Kinh Da
    let viTriSatTinh: Star[][] = Array.from({ length: 12 }, () => []);
    const viTriLocTon = getViTriLocTon(canNam);
    console.log("viTriLocTon", viTriLocTon);
    viTriSatTinh[(viTriLocTon + 1) % 12].push({ name: StarEnum.KinhDuong, nguHanh: NguHanh.Kim });
    viTriSatTinh[(viTriLocTon + 11) % 12].push({ name: StarEnum.DaLa, nguHanh: NguHanh.Kim });

    // an Khong Kiep
    viTriSatTinh[(11 + chiGio) % 12].push({ name: StarEnum.DiaKiep, nguHanh: NguHanh.Hoa });
    viTriSatTinh[(11 - chiGio + 12) % 12].push({ name: StarEnum.DiaKhong, nguHanh: NguHanh.Hoa });

    // An Hoa Tinh, Linh Tinh
    var viTriBatDauHoaTinh;
    var viTriBatDauLinhTinh;
    if ([DiaChi.Dan, DiaChi.Ngo, DiaChi.Tuat].includes(chiNam)) {
        viTriBatDauHoaTinh = DiaChi.Suu;
        viTriBatDauLinhTinh = DiaChi.Mao;
    }
    if ([DiaChi.Than, DiaChi.Ty, DiaChi.Thin].includes(chiNam)) {
        viTriBatDauHoaTinh = DiaChi.Dan;
        viTriBatDauLinhTinh = DiaChi.Tuat;
    }
    if ([DiaChi.Ti, DiaChi.Dau, DiaChi.Suu].includes(chiNam)) {
        viTriBatDauHoaTinh = DiaChi.Mao;
        viTriBatDauLinhTinh = DiaChi.Tuat;
    }
    if ([DiaChi.Hoi, DiaChi.Mui, DiaChi.Mao].includes(chiNam)) {
        viTriBatDauHoaTinh = DiaChi.Dan;
        viTriBatDauLinhTinh = DiaChi.Tuat;
    }
    viTriSatTinh[(viTriBatDauHoaTinh + chiGio) % 12].push({ name: StarEnum.HoaTinh, nguHanh: NguHanh.Hoa });
    viTriSatTinh[(viTriBatDauLinhTinh + chiGio) % 12].push({ name: StarEnum.LinhTinh, nguHanh: NguHanh.Hoa });

    return viTriSatTinh;
}

export function anCatTinh(tuTru: TuTru, lunarDate: LunarDate) {

    let viTriCatTinh: Star[][] = Array.from({ length: 12 }, () => []);
    // an Ta Huu
    var viTriTaPhu = (4 + lunarDate.month - 1) % 12;
    var viTriHuuBat = (10 - lunarDate.month + 1 + 12) % 12;
    viTriCatTinh[viTriTaPhu].push({ name: StarEnum.TaPhu, nguHanh: NguHanh.Tho });
    viTriCatTinh[viTriHuuBat].push({ name: StarEnum.HuuBat, nguHanh: NguHanh.Thuy });

    // an xuong khuc
    viTriCatTinh[(10 - tuTru.chiGio) % 12].push({ name: StarEnum.VanXuong, nguHanh: NguHanh.Kim });
    viTriCatTinh[(4 + tuTru.chiGio) % 12].push({ name: StarEnum.VanKhuc, nguHanh: NguHanh.Thuy });

    // an Khoi Viet
    if ([ThienCan.Giap, ThienCan.Mau].includes(tuTru.canNam)) {
        viTriCatTinh[DiaChi.Suu].push({ name: StarEnum.ThienKhoi, nguHanh: NguHanh.Hoa });
        viTriCatTinh[DiaChi.Mui].push({ name: StarEnum.ThienViet, nguHanh: NguHanh.Hoa });
    }
    if ([ThienCan.At, ThienCan.Ky].includes(tuTru.canNam)) {
        viTriCatTinh[DiaChi.Suu].push({ name: StarEnum.ThienKhoi, nguHanh: NguHanh.Hoa });
        viTriCatTinh[DiaChi.Than].push({ name: StarEnum.ThienViet, nguHanh: NguHanh.Hoa });
    }
    if ([ThienCan.Canh, ThienCan.Tan].includes(tuTru.canNam)) {
        viTriCatTinh[DiaChi.Ngo].push({ name: StarEnum.ThienKhoi, nguHanh: NguHanh.Hoa });
        viTriCatTinh[DiaChi.Dan].push({ name: StarEnum.ThienViet, nguHanh: NguHanh.Hoa });
    }
    if ([ThienCan.Binh, ThienCan.Dinh].includes(tuTru.canNam)) {
        viTriCatTinh[DiaChi.Hoi].push({ name: StarEnum.ThienKhoi, nguHanh: NguHanh.Hoa });
        viTriCatTinh[DiaChi.Dau].push({ name: StarEnum.ThienViet, nguHanh: NguHanh.Hoa });
    }
    if ([ThienCan.Nham, ThienCan.Quy].includes(tuTru.canNam)) {
        viTriCatTinh[DiaChi.Mao].push({ name: StarEnum.ThienKhoi, nguHanh: NguHanh.Hoa });
        viTriCatTinh[DiaChi.Ti].push({ name: StarEnum.ThienViet, nguHanh: NguHanh.Hoa });
    }

    // // an Long Phuong
    // viTriCatTinh[(4 + tuTru.chiNam) % 12].push(CatTinhEnum.LongTri);
    // viTriCatTinh[(10 - tuTru.chiNam + 12) % 12].push(CatTinhEnum.PhuongCac);

    // // an tam thai, bat toa

    return viTriCatTinh;
}
