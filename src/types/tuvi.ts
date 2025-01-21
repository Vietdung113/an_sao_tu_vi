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
// Am Duong Nam Nu
export enum AmDuongNamNu {
    DuongNam = 0,
    AmNam = 1,
    DuongNu = 2,
    AmNu = 3
}

// Ngũ Hành type
export enum NguHanh {
    Kim = 4,
    Thuy = 1,
    Moc = 3,
    Hoa = 2,
    Tho = 5,
    Khong = 0
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

export enum StarType {
    ChinhTinh = "ChinhTinh",
    CatTinh = "CatTinh",
    TrungTinh = "TrungTinh"
}

export enum StarEnum {
    // Chính tinh
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
    // Cát tinh
    VanXuong = 14,
    VanKhuc = 15,
    TaPhu = 16,
    HuuBat = 17,
    ThienKhoi = 18,
    ThienViet = 19,
    LongTri = 20,
    PhuongCac = 21,
    TamThai = 22,
    BatToa = 23,
    // Sát tinh
    HoaTinh = 24,
    LinhTinh = 25,
    DiaKhong = 26,
    DiaKiep = 27,
    KinhDuong = 28,
    DaLa = 29,
    ThienKhoc = 30,
    ThienHu = 31,
    // Vòng Thái Tuế
    ThaiTue = 32,
    ThieuDuong = 33,
    TangMon = 34,
    ThieuAm = 35,
    ThaiTueQuanPhu = 36,
    TuPhu = 37,
    TuePha = 38,
    LongDuc = 39,
    BachHo = 40,
    PhucDuc = 41,
    DieuKhach = 42,
    TrucPhu = 43,
    // Vòng Lộc Tồn
    LocTon = 44,
    LucSy = 45,
    ThanhLong = 46,
    TieuHao = 47,
    TuongQuan = 48,
    TauThu = 49,
    PhiLiem = 50,
    HyThan = 51,
    BenhPhu = 52,
    DaiHao = 53,
    PhucBinh = 54,
    LocTonQuanPhu = 55,
    // Vòng Trường Sinh
    TruongSinh = 56,
    MocDuc = 57,
    QuanDoi = 58,
    LamQuan = 59,
    DeVuong = 60,
    Suy = 61,
    Benh = 62,
    Tu = 63,
    Mo = 64,
    Tuyet = 65,
    Thai = 66,
    Duong = 67,

    // Tứ Hoá
    HoaKy = 68,
    HoaQuyen = 69,
    HoaKhoa = 70,
    HoaLoc = 71,

    // vong Tuong Tinh

    TuongTinh = 72,
    PhanAn = 73,
    TueDich = 74,
    TucThan = 75,
    HoaCai = 76,
    KiepSat = 77,
    TaiSat = 78,
    ThienSat = 79,
    ChiBoi = 80,
    HamTri = 81,
    NguyetSat = 82,
    VongThan = 83,
}

export interface Star {
    name: StarEnum;
    nguHanh: number;
}


