import { StarEnum, NguHanh, ThienCan } from "../types/tuvi.ts";

const THIEN_CAN = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];

const DIA_CHI = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tị", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

const NGU_HANH = {
    4: "Kim",
    1: "Thuỷ",
    3: "Mộc",
    2: "Hỏa",
    5: "Thổ"
}
const CUNG_CHUC = ["Mệnh", "Phụ Mẫu", "Phúc Đức", "Điền Trạch", "Quan Lộc", "Nô Bộc", "Thiên Di", "Tật Ách", "Tài Bạch", "Tử Tức", "Phu Thê", "Huynh Đệ"];

const NAP_AM = [
    [ // Giáp (0)
        { name: "Giáp Tý", nap_am: "Hải Trung Kim", ngu_hanh: NguHanh.Kim },
        null,
        { name: "Giáp Dần", nap_am: "Đại Khe Thủy", ngu_hanh: NguHanh.Thuy },
        null,
        { name: "Giáp Thìn", nap_am: "Phú Đăng Hỏa", ngu_hanh: NguHanh.Hoa },
        null,
        { name: "Giáp Ngọ", nap_am: "Sa Trung Kim", ngu_hanh: NguHanh.Kim },
        null,
        { name: "Giáp Thân", nap_am: "Tuyền Trung Thủy", ngu_hanh: NguHanh.Thuy },
        null,
        { name: "Giáp Tuất", nap_am: "Sơn Đầu Hỏa", ngu_hanh: NguHanh.Hoa },
        null
    ],
    [ // Ất (1)
        null,
        { name: "Ất Sửu", nap_am: "Hải Trung Kim", ngu_hanh: NguHanh.Kim },
        null,
        { name: "Ất Mão", nap_am: "Ðại Khe Thủy", ngu_hanh: NguHanh.Thuy },
        null,
        { name: "Ất Tị", nap_am: "Phú Đăng Hỏa", ngu_hanh: NguHanh.Hoa },
        null,
        { name: "Ất Mùi", nap_am: "Sa Trung Kim", ngu_hanh: NguHanh.Kim },
        null,
        { name: "Ất Dậu", nap_am: "Tuyền Trung Thủy", ngu_hanh: NguHanh.Thuy },
        null,
        { name: "Ất Hợi", nap_am: "Sơn Đầu Hỏa", ngu_hanh: NguHanh.Hoa }
    ],
    [ // Bính (2)
        { name: "Bính Tý", nap_am: "Giảm Hạ Thủy", ngu_hanh: NguHanh.Thuy },
        null,
        { name: "Bính Dần", nap_am: "Lư Trung Hỏa", ngu_hanh: NguHanh.Hoa },
        null,
        { name: "Bính Thìn", nap_am: "Sa Trung Thổ", ngu_hanh: NguHanh.Tho },
        null,
        { name: "Bính Ngọ", nap_am: "Thiên Hà Thủy", ngu_hanh: NguHanh.Thuy },
        null,
        { name: "Bính Thân", nap_am: "Sơn Hạ Hỏa", ngu_hanh: NguHanh.Hoa },
        null,
        { name: "Bính Tuất", nap_am: "Ốc Thượng Thổ", ngu_hanh: NguHanh.Tho },
        null
    ],
    [ // Đinh (3)
        null,
        { name: "Đinh Sửu", nap_am: "Giảm Hạ Thủy", ngu_hanh: NguHanh.Thuy },
        null,
        { name: "Đinh Mão", nap_am: "Lư Trung Hỏa", ngu_hanh: NguHanh.Hoa },
        null,
        { name: "Đinh Tị", nap_am: "Sa Trung Thổ", ngu_hanh: NguHanh.Tho },
        null,
        { name: "Đinh Mùi", nap_am: "Thiên Hà Thủy", ngu_hanh: NguHanh.Thuy },
        null,
        { name: "Đinh Dậu", nap_am: "Sơn Hạ Hỏa", ngu_hanh: NguHanh.Hoa },
        null,
        { name: "Đinh Hợi", nap_am: "Ốc Thượng Thổ", ngu_hanh: NguHanh.Tho }
    ],
    [ // Mậu (4)
        { name: "Mậu Tý", nap_am: "Thích Lịch Hỏa", ngu_hanh: NguHanh.Hoa },
        null,
        { name: "Mậu Dần", nap_am: "Thành Đầu Thổ", ngu_hanh: NguHanh.Tho },
        null,
        { name: "Mậu Thìn", nap_am: "Đại Lâm Mộc", ngu_hanh: NguHanh.Moc },
        null,
        { name: "Mậu Ngọ", nap_am: "Thiên Thượng Hỏa", ngu_hanh: NguHanh.Hoa },
        null,
        { name: "Mậu Thân", nap_am: "Đại Trạch Thổ", ngu_hanh: NguHanh.Tho },
        null,
        { name: "Mậu Tuất", nap_am: "Bình Địa Mộc", ngu_hanh: NguHanh.Moc },
        null
    ],
    [ // Kỷ (5)
        null,
        { name: "Kỷ Sửu", nap_am: "Thích Lịch Hỏa", ngu_hanh: NguHanh.Hoa },
        null,
        { name: "Kỷ Mão", nap_am: "Thành Đầu Thổ", ngu_hanh: NguHanh.Tho },
        null,
        { name: "Kỷ Tị", nap_am: "Đại Lâm Mộc", ngu_hanh: NguHanh.Moc },
        null,
        { name: "Kỷ Mùi", nap_am: "Thiên Thượng Hỏa", ngu_hanh: NguHanh.Hoa },
        null,
        { name: "Kỷ Dậu", nap_am: "Đại Trạch Thổ", ngu_hanh: NguHanh.Tho },
        null,
        { name: "Kỷ Hợi", nap_am: "Bình Địa Mộc", ngu_hanh: NguHanh.Moc }
    ],
    [ // Canh (6)
        { name: "Canh Tý", nap_am: "Bích Thượng Thổ", ngu_hanh: NguHanh.Tho },
        null,
        { name: "Canh Dần", nap_am: "Tùng Bách Mộc", ngu_hanh: NguHanh.Moc },
        null,
        { name: "Canh Thìn", nap_am: "Bạch Lạp Kim", ngu_hanh: NguHanh.Kim },
        null,
        { name: "Canh Ngọ", nap_am: "Lộ Bàng Thổ", ngu_hanh: NguHanh.Tho },
        null,
        { name: "Canh Thân", nap_am: "Thạch Lựu Mộc", ngu_hanh: NguHanh.Moc },
        null,
        { name: "Canh Tuất", nap_am: "Thoa Xuyến Kim", ngu_hanh: NguHanh.Kim },
        null
    ],
    [ // Tân (7)
        null,
        { name: "Tân Sửu", nap_am: "Bích Thượng Thổ", ngu_hanh: NguHanh.Tho },
        null,
        { name: "Tân Mão", nap_am: "Tùng Bách Mộc", ngu_hanh: NguHanh.Moc },
        null,
        { name: "Tân Tị", nap_am: "Bạch Lạp Kim", ngu_hanh: NguHanh.Kim },
        null,
        { name: "Tân Mùi", nap_am: "Lộ Bàng Thổ", ngu_hanh: NguHanh.Tho },
        null,
        { name: "Tân Dậu", nap_am: "Thạch Lựu Mộc", ngu_hanh: NguHanh.Moc },
        null,
        { name: "Tân Hợi", nap_am: "Thoa Xuyến Kim", ngu_hanh: NguHanh.Kim }
    ],
    [ // Nhâm (8)
        { name: "Nhâm Tý", nap_am: "Tang Đố Mộc", ngu_hanh: NguHanh.Moc },
        null,
        { name: "Nhâm Dần", nap_am: "Kim Bạch Kim", ngu_hanh: NguHanh.Kim },
        null,
        { name: "Nhâm Thìn", nap_am: "Trường Lưu Thủy", ngu_hanh: NguHanh.Thuy },
        null,
        { name: "Nhâm Ngọ", nap_am: "Dương Liễu Mộc", ngu_hanh: NguHanh.Moc },
        null,
        { name: "Nhâm Thân", nap_am: "Kiếm Phong Kim", ngu_hanh: NguHanh.Kim },
        null,
        { name: "Nhâm Tuất", nap_am: "Đại Hải Thủy", ngu_hanh: NguHanh.Thuy },
        null
    ],
    [ // Quý (9)
        null,
        { name: "Quý Sửu", nap_am: "Tang Đố Mộc", ngu_hanh: NguHanh.Moc },
        null,
        { name: "Quý Mão", nap_am: "Kim Bạch Kim", ngu_hanh: NguHanh.Kim },
        null,
        { name: "Quý Tị", nap_am: "Trường Lưu Thủy", ngu_hanh: NguHanh.Thuy },
        null,
        { name: "Quý Mùi", nap_am: "Dương Liễu Mộc", ngu_hanh: NguHanh.Moc },
        null,
        { name: "Quý Dậu", nap_am: "Kiếm Phong Kim", ngu_hanh: NguHanh.Kim },
        null,
        { name: "Quý Hợi", nap_am: "Đại Hải Thủy", ngu_hanh: NguHanh.Thuy }
    ]
];


export const STARS = {
    // Chính tinh
    [StarEnum.Tuvi]: "Tử Vi",
    [StarEnum.ThienCo]: "Thiên Cơ",
    [StarEnum.ThaiDuong]: "Thái Dương",
    [StarEnum.VuKhuc]: "Vũ Khúc",
    [StarEnum.ThienDong]: "Thiên Đồng",
    [StarEnum.LiemTrinh]: "Liêm Trinh",
    [StarEnum.ThienPhu]: "Thiên Phủ",
    [StarEnum.ThaiAm]: "Thái Âm",
    [StarEnum.ThamLang]: "Tham Lang",
    [StarEnum.CuMon]: "Cư Môn",
    [StarEnum.ThienTuong]: "Thiên Tướng",
    [StarEnum.ThienLuong]: "Thiên Lương",
    [StarEnum.ThatSat]: "Thất Sát",
    [StarEnum.PhaQuan]: "Phá Quân",
    // Cát tinh
    [StarEnum.VanXuong]: "Văn Xương",
    [StarEnum.VanKhuc]: "Văn Khúc",
    [StarEnum.TaPhu]: "Tả Phù",
    [StarEnum.HuuBat]: "Hữu Bật",
    [StarEnum.ThienKhoi]: "Thiên Khôi",
    [StarEnum.ThienViet]: "Thiên Việt",
    [StarEnum.LongTri]: "Long Trì",
    [StarEnum.PhuongCac]: "Phượng Các",
    [StarEnum.TamThai]: "Tam Thai",
    [StarEnum.BatToa]: "Bát Tọa",
    // Sát tinh
    [StarEnum.HoaTinh]: "Hỏa Tinh",
    [StarEnum.LinhTinh]: "Linh Tinh",
    [StarEnum.DiaKhong]: "Địa Không",
    [StarEnum.DiaKiep]: "Địa Kiếp",
    [StarEnum.KinhDuong]: "Kình Dương",
    [StarEnum.DaLa]: "Đà La",
    [StarEnum.ThienKhoc]: "Thiên Khốc",
    [StarEnum.ThienHu]: "Thiên Hư",
    // Vòng Thái Tuế
    [StarEnum.ThaiTue]: "Thái Tuế",
    [StarEnum.ThieuDuong]: "Thiếu Dương",
    [StarEnum.TangMon]: "Tang Môn",
    [StarEnum.ThieuAm]: "Thiếu Âm",
    [StarEnum.ThaiTueQuanPhu]: "Quan Phù",
    [StarEnum.TuPhu]: "Tử Phù",
    [StarEnum.TuePha]: "Tuế Phá",
    [StarEnum.LongDuc]: "Long Đức",
    [StarEnum.BachHo]: "Bạch Hổ",
    [StarEnum.PhucDuc]: "Phúc Đức",
    [StarEnum.DieuKhach]: "Điếu Khách",
    [StarEnum.TrucPhu]: "Trực Phù",
    // Vòng Lộc Tồn
    [StarEnum.LocTon]: "Lộc Tồn",
    [StarEnum.LucSy]: "Lực Sỹ",
    [StarEnum.ThanhLong]: "Thanh Long",
    [StarEnum.TieuHao]: "Tiểu Hao",
    [StarEnum.TuongQuan]: "Tướng Quân",
    [StarEnum.TauThu]: "Tấu Thư",
    [StarEnum.PhiLiem]: "Phi Liêm",
    [StarEnum.HyThan]: "Hỷ Thần",
    [StarEnum.BenhPhu]: "Bệnh Phù",
    [StarEnum.DaiHao]: "Đại Hao",
    [StarEnum.PhucBinh]: "Phục Binh",
    [StarEnum.LocTonQuanPhu]: "Quan Phủ",
    // Vòng Trường Sinh
    [StarEnum.TruongSinh]: "Trường Sinh",
    [StarEnum.MocDuc]: "Mộc Dục",
    [StarEnum.QuanDoi]: "Quan Đới",
    [StarEnum.LamQuan]: "Lâm Quan",
    [StarEnum.DeVuong]: "Đế Vượng",
    [StarEnum.Suy]: "Suy",
    [StarEnum.Benh]: "Bệnh",
    [StarEnum.Tu]: "Tử",
    [StarEnum.Mo]: "Mộ",
    [StarEnum.Tuyet]: "Tuyệt",
    [StarEnum.Thai]: "Thai",
    [StarEnum.Duong]: "Dưỡng",
    // Tứ Hoá
    [StarEnum.HoaLoc]: "Hoá Lộc",
    [StarEnum.HoaQuyen]: "Hoá Quyền",
    [StarEnum.HoaKhoa]: "Hoá Khoa",
    [StarEnum.HoaKy]: "Hoá Kỵ",

    // Vòng Tướng Tinh
    [StarEnum.TuongTinh]: "Tướng Tinh",
    [StarEnum.PhanAn]: "Phan An",
    [StarEnum.TueDich]: "Tuế Dịch",
    [StarEnum.TucThan]: "Tức Thần",
    [StarEnum.HoaCai]: "Hoa Cái",
    [StarEnum.KiepSat]: "Kiếp Sát",
    [StarEnum.TaiSat]: "Tai Sát",
    [StarEnum.ThienSat]: "Thiên Sát",
    [StarEnum.ChiBoi]: "Chí Bối",
    [StarEnum.HamTri]: "Hàm Trì",
    [StarEnum.NguyetSat]: "Nguyệt Sát",
    [StarEnum.VongThan]: "Vong Thần",

};

export const TIET_KHI = [
    "Xuân Phân", "Thanh Minh", "Cốc Vũ",
    "Lập Hạ", "Tiểu Mãn", "Mang Chủng", "Hạ Chí", "Tiểu Thử", "Đại Thử",
    "Lập Thu", "Xử Thử", "Bạch Lộ", "Thu Phân", "Hàn Lộ", "Sương Giáng",
    "Lập Đông", "Tiểu Tuyết", "Đại Tuyết", "Đông Chí", "Tiểu Hàn", "Đại Hàn",
    "Lập Xuân", "Vũ Thủy", "Kinh Trập"]

export const VONG_TRANG_SINH = [
    "Trường Sinh",
    "Mộc Dục",
    "Quan Đới",
    "Lâm Quan",
    "Đế Vượng",
    "Suy",
    "Bệnh",
    "Tử",
    "Mộ",
    "Tuyệt",
    "Thai",
    "Dưỡng"
]

export const BANG_TU_HOA = {
    [ThienCan.Giap]: {
        [StarEnum.LiemTrinh]: StarEnum.HoaLoc,
        [StarEnum.PhaQuan]: StarEnum.HoaQuyen,
        [StarEnum.VuKhuc]: StarEnum.HoaKhoa,
        [StarEnum.ThaiDuong]: StarEnum.HoaKy,
    },
    [ThienCan.At]: {
        [StarEnum.ThienCo]: StarEnum.HoaLoc,
        [StarEnum.ThienLuong]: StarEnum.HoaQuyen,
        [StarEnum.Tuvi]: StarEnum.HoaKhoa,
        [StarEnum.ThaiAm]: StarEnum.HoaKy,
    },
    [ThienCan.Binh]: {
        [StarEnum.ThienDong]: StarEnum.HoaLoc,
        [StarEnum.ThienCo]: StarEnum.HoaQuyen,
        [StarEnum.VanXuong]: StarEnum.HoaKhoa,
        [StarEnum.LiemTrinh]: StarEnum.HoaKy,
    },
    [ThienCan.Dinh]: {
        [StarEnum.ThaiAm]: StarEnum.HoaLoc,
        [StarEnum.ThienDong]: StarEnum.HoaQuyen,
        [StarEnum.ThienCo]: StarEnum.HoaKhoa,
        [StarEnum.CuMon]: StarEnum.HoaKy,
    },
    [ThienCan.Mau]: {
        [StarEnum.ThamLang]: StarEnum.HoaLoc,
        [StarEnum.ThaiAm]: StarEnum.HoaQuyen,
        [StarEnum.HuuBat]: StarEnum.HoaKhoa,
        [StarEnum.ThienCo]: StarEnum.HoaKy,
    },
    [ThienCan.Ky]: {
        [StarEnum.VuKhuc]: StarEnum.HoaLoc,
        [StarEnum.ThamLang]: StarEnum.HoaQuyen,
        [StarEnum.ThienLuong]: StarEnum.HoaKhoa,
        [StarEnum.VanKhuc]: StarEnum.HoaKy,
    },
    [ThienCan.Canh]: {
        [StarEnum.ThaiDuong]: StarEnum.HoaLoc,
        [StarEnum.VuKhuc]: StarEnum.HoaQuyen,
        [StarEnum.ThaiAm]: StarEnum.HoaKhoa,
        [StarEnum.ThienDong]: StarEnum.HoaKy,
    },
    [ThienCan.Tan]: {
        [StarEnum.CuMon]: StarEnum.HoaLoc,
        [StarEnum.ThaiDuong]: StarEnum.HoaQuyen,
        [StarEnum.VanKhuc]: StarEnum.HoaKhoa,
        [StarEnum.VanXuong]: StarEnum.HoaKy,
    },
    [ThienCan.Nham]: {
        [StarEnum.ThienLuong]: StarEnum.HoaLoc,
        [StarEnum.Tuvi]: StarEnum.HoaQuyen,
        [StarEnum.TaPhu]: StarEnum.HoaKhoa,
        [StarEnum.VuKhuc]: StarEnum.HoaKy,
    },
    [ThienCan.Quy]: {
        [StarEnum.PhaQuan]: StarEnum.HoaLoc,
        [StarEnum.CuMon]: StarEnum.HoaQuyen,
        [StarEnum.ThaiAm]: StarEnum.HoaKhoa,
        [StarEnum.ThamLang]: StarEnum.HoaKy,
    }

};
// Mapping of Ngu Hanh to their display properties
export const NGU_HANH_DISPLAY = {
    [NguHanh.Kim]: { text: "Kim", color: "#E6E6FA" },  // Light purple for Metal
    [NguHanh.Thuy]: { text: "Thủy", color: "#E6F3FF" }, // Light blue for Water
    [NguHanh.Moc]: { text: "Mộc", color: "#E6FFE6" },  // Light green for Wood
    [NguHanh.Hoa]: { text: "Hỏa", color: "#FFE6E6" },  // Light red for Fire
    [NguHanh.Tho]: { text: "Thổ", color: "#FFE6CC" }   // Light orange for Earth
};

export { THIEN_CAN, DIA_CHI, NGU_HANH, NAP_AM, CUNG_CHUC };
