import { STARS, CUNG_CHUC, BANG_TU_HOA, NAP_AM, NGU_HANH_DISPLAY } from "../services/constain.ts";
import { NguHanh, StarEnum, TuTru, Star } from "../types/tuvi.ts";
import { MAU_NGU_HANH } from "../types/mapping";

interface DisplayStar {
  name: string;
  nguHanh: number;
}

export function getNguHanhStyle(ngu_hanh: number): React.CSSProperties {
  return {
    backgroundColor: NGU_HANH_DISPLAY[ngu_hanh].color,
    color: 'black',
    padding: '0 4px',
    borderRadius: '4px'
  };
}

export function getTuHoaStars(tuTru: TuTru, chinhTinh: Star[], lucCat: Star[]): { leftStars: DisplayStar[], middleStars: DisplayStar[], rightStars: DisplayStar[] } {
  const leftStars: DisplayStar[] = [];
  const middleStars: DisplayStar[] = [];
  const rightStars: DisplayStar[] = [];
  const saoHoa = chinhTinh.concat(lucCat);

  saoHoa.forEach(sao => {
    const hoa = BANG_TU_HOA[tuTru.canNam][sao.name];
    switch (hoa) {
      case StarEnum.HoaKy:
        middleStars.push({ name: STARS[StarEnum.HoaKy], nguHanh: NguHanh.Thuy });
        break;
      case StarEnum.HoaKhoa:
        leftStars.push({ name: STARS[StarEnum.HoaKhoa], nguHanh: NguHanh.Moc });
        break;
      case StarEnum.HoaQuyen:
        leftStars.push({ name: STARS[StarEnum.HoaQuyen], nguHanh: NguHanh.Hoa });
        break;
      case StarEnum.HoaLoc:
        leftStars.push({ name: STARS[StarEnum.HoaLoc], nguHanh: NguHanh.Kim });
        break;
    }
  });

  return { leftStars, middleStars, rightStars };
}

export function getAdditionalStars(vongThaiTue: Star, vongLocTon: Star, vongTuongtinh: Star, lucSat: Star[], lucCat: Star[]): { leftStars: DisplayStar[], middleStars: DisplayStar[], rightStars: DisplayStar[] } {
  const leftStars: DisplayStar[] = [];
  const middleStars: DisplayStar[] = [];
  const rightStars: DisplayStar[] = [];

  rightStars.push({
    name: STARS[vongThaiTue.name],
    nguHanh: vongThaiTue.nguHanh
  });
  rightStars.push({
    name: STARS[vongLocTon.name],
    nguHanh: vongLocTon.nguHanh
  });
  rightStars.push({
    name: STARS[vongTuongtinh.name],
    nguHanh: vongTuongtinh.nguHanh
  });

  lucSat.forEach(sat => {
    middleStars.push({
      name: STARS[sat.name],
      nguHanh: sat.nguHanh
    });
  });

  lucCat.forEach(cat => {
    leftStars.push({
      name: STARS[cat.name],
      nguHanh: cat.nguHanh
    });
  });

  return { leftStars, middleStars, rightStars };
}

export function getPhiHoa(phiHoa: any, cungChuc: []): DisplayStar[] {
  var res: DisplayStar[] = [];
  for (let i = 0; i < 4; i++) {
    var diachi = phiHoa[i]["phiHoaToiCung"];
    var tenHoa = STARS[phiHoa[i]["hoa"]];
    console.log(tenHoa);
    var hoa = tenHoa.split(" ").pop();
    var s = `${hoa} -> ${CUNG_CHUC[cungChuc[diachi]]}`;
    res.push({
      name: s,
      nguHanh: phiHoa[i]["nguHanh"]
    })
  }
  return res;
}

export function getNguHanhColor(ngu_hanh: number): string {
  return MAU_NGU_HANH[ngu_hanh];
}

export function extractCungData(data: any, name: string) {
  const tuTru: TuTru = data["tuTru"];
  const canCung = data["canCung"];
  const cungChuc = data["viTriCung"][name];
  const chinhTinh = data["chinhTinh"][name];
  const vongThaiTue = data["vongThaiTue"][name];
  const vongLocTon = data["vongLocTon"][name];
  const vongTrangSinh = data["vongTrangSinh"][name];
  const lucSat = data["lucSat"][name];
  const lucCat = data["lucCat"][name];
  const ngu_hanh_nap_am = NAP_AM[canCung[name]][name];
  const daiVan = data["daivan"];
  const canTieuVan = data["canTieuVan"][name];
  const vongTuongtinh = data["vongTuongTinh"][name];
  const phiHoa = data["phiHoa"][name];

  if (ngu_hanh_nap_am === null) {
    throw new Error("Ngu hanh nap am is null");
  }

  const canDaiVan = (canCung[name] + 2 * daiVan) % 10;
  const ngu_hanh_nap_am_dai_van = NAP_AM[canDaiVan][name];
  const ngu_hanh_nap_am_tieu_van = NAP_AM[canTieuVan][name];

  return {
    tuTru,
    canCung,
    cungChuc,
    chinhTinh,
    vongThaiTue,
    vongLocTon,
    vongTrangSinh,
    lucSat,
    lucCat,
    ngu_hanh_nap_am,
    ngu_hanh_nap_am_dai_van,
    ngu_hanh_nap_am_tieu_van,
    vongTuongtinh,
    phiHoa
  };
}

export type { DisplayStar };
