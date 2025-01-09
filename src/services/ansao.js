const calendar = require("@nghiavuive/lunar_date_vi");

// Function to process time data and return formatted data for Cung component
export function ansao(hour, day, month, year, gmt) {
  // Get lunar date
  const dl = new calendar.SolarDate({
    day: day,
    month: month,
    year: year,
    gmt: gmt,
    hour: hour
  })
  const al = calendar.LunarDate.fromSolarDate(dl);
  const lunarDate = al.getDayName()
  const lunarMonth = al.getMonthName()
  const lunarYear = al.getYearName()
  const lunarHour = al.getHourName()
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
