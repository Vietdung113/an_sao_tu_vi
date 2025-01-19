import { CUNG_CHUC, DIA_CHI, THIEN_CAN } from './constain.ts';
import { ChinhTinh, Cuc, DiaChi, LunarDate, NguHanh, ThienCan } from '../types/tuvi.ts';
import { TuTru } from '../types/tuvi.ts';

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
    return (month - hour + 12) % 12;
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
    return (viTriTuVi  - (viTriTuVi - 2) * 2  + 12) % 12;
}

export function anChinhtinh(day: number, cuc: Cuc) {
    let viTriChinhTinh: ChinhTinh[][] = Array.from({ length: 12 }, () => []);

    // an chom tu vi
    const viTriTuvi = anTuvi(day, cuc);
    viTriChinhTinh[viTriTuvi].push(ChinhTinh.Tuvi);
    viTriChinhTinh[(viTriTuvi + 4) % 12].push(ChinhTinh.LiemTrinh);
    viTriChinhTinh[(viTriTuvi + 8) % 12].push(ChinhTinh.VuKhuc);
    viTriChinhTinh[(viTriTuvi + 11) % 12].push(ChinhTinh.ThienCo);
    viTriChinhTinh[(viTriTuvi + 9) % 12].push(ChinhTinh.ThaiDuong);
    viTriChinhTinh[(viTriTuvi + 7) % 12].push(ChinhTinh.ThienDong);
    
    // an chom thien phu
    const viTriThienPhu = anThienPhu(viTriTuvi);
    viTriChinhTinh[viTriThienPhu].push(ChinhTinh.ThienPhu);
    viTriChinhTinh[(viTriThienPhu + 1) % 12].push(ChinhTinh.ThaiAm);
    viTriChinhTinh[(viTriThienPhu + 2) % 12].push(ChinhTinh.ThamLang);
    viTriChinhTinh[(viTriThienPhu + 3) % 12].push(ChinhTinh.CuMon);
    viTriChinhTinh[(viTriThienPhu + 4) % 12].push(ChinhTinh.ThienTuong);
    viTriChinhTinh[(viTriThienPhu + 5) % 12].push(ChinhTinh.ThienLuong);
    viTriChinhTinh[(viTriThienPhu + 6) % 12].push(ChinhTinh.ThatSat);
    viTriChinhTinh[(viTriThienPhu + 10) % 12].push(ChinhTinh.PhaQuan);

    return viTriChinhTinh;
}
