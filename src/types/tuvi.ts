// Basic lunar date interface
interface ILunarDate {
    day: number;      // Day
    month: number;      // Month
    year: number;      // Year
    leapYear: number;    // Is Leap Year
    jd: number;     // Julian Day
}

// Lunar date class
export class LunarDate implements ILunarDate {
    day: number;
    month: number;
    year: number;
    leapYear: number;
    jd: number;

    constructor(day: number, month: number, year: number, leapYear: number, jd: number) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.leapYear = leapYear;
        this.jd = jd;
    }
}

// Ngũ Hành type
export enum NguHanh {
    Kim = 4,
    Thuy = 1,
    Moc = 3,
    Hoa = 2,
    Tho = 5
}

// Thiên Can type
export enum ThienCan {
    Giap = 0,
    At = 1,
    Binh = 2,
    Dinh = 3,
    Mau = 4,
    Ky = 5,
    Canh = 6,
    Tan = 7,
    Nham = 8,
    Quy = 9
}

// Địa Chi type
export enum DiaChi {
    Ty = 0,
    Suu = 1,
    Dan = 2,
    Mao = 3,
    Thin = 4,
    Ti = 5,
    Ngo = 6,
    Mui = 7,
    Than = 8,
    Dau = 9,
    Tuat = 10,
    Hoi = 11
}

// Nạp Âm interface
export interface INapAm {
    name: string;       // Tên nạp âm (e.g., "Hải Trung Kim")
    ngu_hanh: NguHanh; // Ngũ hành của nạp âm
}

// Cung interface
export interface ICung {
    name: string;           // Tên cung
    vi_tri: number;         // Vị trí (1-12)
    am_duong: boolean;      // true = Dương, false = Âm
    ngu_hanh: NguHanh;     // Ngũ hành của cung
    sao: Array<ISao>;      // Các sao trong cung
}

// Sao interface
export interface ISao {
    name: string;           // Tên sao
    ngu_hanh: NguHanh;     // Ngũ hành của sao
    am_duong: boolean;      // true = Dương, false = Âm
    strength?: number;      // Độ mạnh của sao (optional)
}

// Can Chi combination interface
export interface ICanChi {
    thien_can: ThienCan;
    dia_chi: DiaChi;
    nap_am: INapAm;
}

export interface TuTru {
    canGio: number,
    chiGio: number,
    canNgay: number,
    chiNgay: number,
    canThang: number,
    chiThang: number,
    canNam: number,
    chiNam: number
}

export interface Cuc {
    ten: string,
    nguHanh: number;
    so: number;
}


// Tiet Khi
export enum TietKhi {
    XuanPhan = 0,
    ThanhMinh = 1,
    CocVu = 2,
    LapHa = 3,
    TieuMan = 4,
    MangChung = 5,
    HaChi = 6,
    TieuThu = 7,
    DaiThu = 8,
    LapThu = 9,
    XuThu = 10,
    BachLo = 11,
    ThuPhan = 12,
    HanLo = 13,
    SuongGiang = 14,
    LapDong = 15,
    TieuTuyet = 16,
    DaiTuyet = 17,
    DongChi = 18,
    TieuHan = 19,
    DaiHan = 20,
    LapXuan = 21,
    VuThuy = 22,
    KinhTrap = 23,
}


export enum ViTriCung {
    Menh = 0,
    PhuMau = 1,
    PhucDuc = 2,
    DienTrach = 3,
    QuanLoc = 4,
    NoBoc = 5,
    ThienDi = 6,
    TatAch = 7,
    TaiBach = 8,
    TuTuc = 9,
    PhuThe = 10,
    HuynhDe = 11
}

export enum ChinhTinh {
    Tuvi = 0,
    ThienCo = 1,
    ThaiDuong = 2,
    VuKhuc = 3,
    ThienDong = 4,
    LiemTrinh = 5,
    ThienPhu = 6,
    ThaiAm = 7,
    ThamLang = 8,
    CuMon = 9,
    ThienTuong = 10,
    ThienLuong = 11,
    ThatSat = 12,
    PhaQuan = 13,
}