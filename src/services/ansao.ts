import { convertSolar2Lunar, getLunarDateTK } from "./calender.ts";
import { DIA_CHI, THIEN_CAN } from "./constain.ts";
// import { DIA_CHI, THIEN_CAN, CUNG_CHUC, STARS, VONG_TRANG_SINH } from "./constain.ts";
import { anChinhtinh, anCungChuc, anCungMenh, anCungThan, anCatTinh, anSatTinh, anVongLocTon, anVongThaiTue, anVongTrangSinh, getAmDuongNamNu, getChiGio, getTuTru, timCucMenh, anCanCung, tinhDaiVan, tinhCanTieuVan } from "./utils.ts";

// Function to process time data and return formatted data for Cung component
export function ansao(hour, day, month, year, timeZone, isMale, namXemHan = new Date().getFullYear()) {

  var chiGio = getChiGio(hour);
  const lunarDate = convertSolar2Lunar(day, month, year, timeZone);
  const lunarDateTK = getLunarDateTK(lunarDate);
  const tuTru = getTuTru(lunarDateTK, chiGio);

  const canCung = anCanCung(lunarDate.year)

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

  // an Dai Van
  const daiVan = tinhDaiVan(lunarDate, namXemHan)

  var canTieuVan = tinhCanTieuVan(namXemHan)

  // This is a sample implementation - replace with actual logic
  return {
    "canCung": canCung,
    "viTriCung": viTriCung,
    "viTriCungThan": viTriCungThan,
    "chinhTinh": chinhTinh,
    "vongThaiTue": vongThaiTue,
    "vongLocTon": vongLocTon,
    "vongTrangSinh": vongTrangSinh,
    "lucSat": lucSat,
    "lucCat": lucCat,
    "tuTru": tuTru,
    "lunarDate": lunarDate,
    "daivan": daiVan,
    "canTieuVan": canTieuVan
  };
}
