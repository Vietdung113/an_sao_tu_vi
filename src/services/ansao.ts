import { convertSolar2Lunar, getLunarDateTK } from "./calender.ts";
import { DIA_CHI, THIEN_CAN, CUNG_CHUC, CHINH_TINH, VONG_THAI_TUE, VONG_LOC_TON, VONG_TRANG_SINH } from "./constain.ts";
import { anChinhtinh, anCungChuc, anCungMenh, anCungThan, anCatTinh, anSatTinh, anVongLocTon, anVongThaiTue, anVongTrangSinh, getAmDuongNamNu, getChiGio, getTuTru, timCucMenh } from "./utils.ts";

// Function to process time data and return formatted data for Cung component
export function ansao(hour, day, month, year, timeZone) {
  // Get lunar date
  day = 11
  month = 3
  year = 1996
  timeZone = 7
  hour = 8
  var isMale = true;

  var chiGio = getChiGio(hour);
  const lunarDate = convertSolar2Lunar(day, month, year, timeZone);
  const lunarDateTK = getLunarDateTK(lunarDate);
  const tuTru = getTuTru(lunarDateTK, chiGio);

  const am_duong_nam_nu = getAmDuongNamNu(isMale, tuTru.canNam);
  const viTriMenh = anCungMenh(lunarDate.month, chiGio);
  const viTriCung = anCungChuc(viTriMenh);

  const viTriCungThan = anCungThan(lunarDate.month, chiGio);

  const cucMenh = timCucMenh(viTriMenh, tuTru.canNam);
  const chinhTinh = anChinhtinh(lunarDate.day, cucMenh);

  // an thai tue
  const vongThaiTue = anVongThaiTue(tuTru.chiNam);

  // an loc ton
  const vongLocTon = anVongLocTon(tuTru.canNam);
  // An trang sinh
  const vongTrangSinh = anVongTrangSinh(cucMenh, am_duong_nam_nu);

  // an luc sat tinh
  const lucSat = anSatTinh(tuTru.canNam, tuTru.chiNam, tuTru.chiGio);

  // an cat tinh
  const lucCat = anCatTinh(tuTru, lunarDate);


  // This is a sample implementation - replace with actual logic
  return {
    "thien_ban": {
      "dia_chi": "1",
      "thien_can": "1",
      "cung_chuc": "4",
      "nam": year,
      "tuoi_dai_van": 15,
      "chinh_tinh": ["Liêm Trinh", "Tham Lang"],
      "tu_hoa": ["Hóa Lộc"],
      "cat_tinh": [],
      "sat_tinh": [],
      "vong_ts": "Trường sinh"
    },
    "luu_nien": {
      "thien_can": "ti",
      "dia_chi": "ky",
      "cung_chuc": "phụ",
      "tu_hoa": ["Hóa Lộc"],
      "cat_tinh": [],
      "sat_tinh": [],
    }
  };
}
