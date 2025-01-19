import { NguHanh } from "../types/tuvi.ts";

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


export const CHINH_TINH = [
    "Tử Vi",
    "Thiên Cơ",
    "Thái Dương",
    "Vũ Khúc",
    "Thiên Đồng",
    "Liêm Trinh",
    "Thiên Phủ",
    "Thái Âm",
    "Tham Lang",
    "Cư Môn",
    "Thiên Tướng",
    "Thiên Lương",
    "Thất Sát",
    "Phá Quân",
]

export const TIET_KHI = [
    "Xuân Phân", "Thanh Minh", "Cốc Vũ",
    "Lập Hạ", "Tiểu Mãn", "Mang Chủng", "Hạ Chí", "Tiểu Thử", "Đại Thử",
    "Lập Thu", "Xử Thử", "Bạch Lộ", "Thu Phân", "Hàn Lộ", "Sương Giáng",
    "Lập Đông", "Tiểu Tuyết", "Đại Tuyết", "Đông Chí", "Tiểu Hàn", "Đại Hàn",
    "Lập Xuân", "Vũ Thủy", "Kinh Trập"]


export const VONG_THAI_TUE = [
    "Thái Tuế",
    "Thiếu Dương",
    "Tang Môn",
    "Thiếu Âm",
    "Quan Phù",
    "Tử Phù",
    "Tuế Phá", 
    "Long Đức",
    "Bạch Hổ",
    "Phúc Đức",
    "Điếu Khách", 
    "Trực Phù"
]

export const VONG_LOC_TON = [
    "Lộc Tồn",
    "Lực Sỹ",
    "Thanh Long",
    "Tiểu Hao",
    "Tướng Quân",
    "Tấu Thư", 
    "Phi Liêm",
    "Hỷ Thần",
    "Bệnh Phù",
    "Đại Hao",
    "Phục Binh",
    "Quan Phù"
]

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

export const CAT_TINH = [
    "Văn Xương",
    "Văn Khúc",
    "Tả Phù",
    "Hữu Bật",
    "Thiên Khôi", 
    "Thiên Việt",
    "Long Trì",
    "Phượng Các",
    "Tam Thai", 
    "Bát Toạ"
]

export const SAT_TINH = [
    "Hoả Tinh", 
    "Linh Tinh",
    "Địa Không",
    "Địa Kiếp",
    "Kình Dương",
    "Đà La",
    "Thiên Khốc",
    "Thiên Hư"
]
export { THIEN_CAN, DIA_CHI, NGU_HANH, NAP_AM, CUNG_CHUC };
