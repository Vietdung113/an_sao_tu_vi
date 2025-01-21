import React from "react";
import { STARS, CUNG_CHUC, DIA_CHI, NAP_AM, THIEN_CAN, VONG_TRANG_SINH, BANG_TU_HOA, NGU_HANH_DISPLAY } from "../services/constain.ts";
import { NguHanh, StarEnum, TuTru } from "../types/tuvi.ts";
import { MAU_NGU_HANH } from "../types/mapping.js";
type Star = {
  name: string;
  nguHanh: number;
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    minHeight: "150px",
    padding: "8px",
    position: "relative" as const
  },
  napAmContainer: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "4px",
    marginBottom: "8px",
    alignItems: "flex-start"
  },
  napAm: {
    fontSize: "50%"
  },
  cungChuc: {
    position: "absolute" as const,
    top: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "100%",
    color: "black",
    padding: "4px"
  },
  chinhTinh: {
    position: "absolute" as const,
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    fontSize: "140%",
    gap: "2px"
  },
  trangSinh: {
    position: "absolute" as const,
    bottom: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    fontSize: "70%",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "2px"
  },
  rightStars: {
    position: "absolute" as const,
    top: "40%",
    right: "0%",
    fontSize: "75%",
    padding: "4px"
  },
  middleStars: {
    position: "absolute" as const,
    bottom: "15%",
    right: "50%",
    fontSize: "75%",
    padding: "4px"
  },
  leftStars: {
    position: "absolute" as const,
    top: "60%",
    right: "80%",
    fontSize: "75%",
    padding: "4px"
  },
  star: {
    whiteSpace: "nowrap" as const,
    fontSize: "90%"
  }
};

function getNguHanhStyle(ngu_hanh: number): React.CSSProperties {
  return {
    backgroundColor: NGU_HANH_DISPLAY[ngu_hanh].color,
    color: 'black',
    padding: '0 4px',
    borderRadius: '4px'
  };
}

function getTuHoaStars(tuTru: TuTru, chinhTinh: Star[], lucCat: Star[]): { leftStars: Star[], middleStars: Star[], rightStars: Star[] } {
  const leftStars: Star[] = [];
  const middleStars: Star[] = [];
  const rightStars: Star[] = [];
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

function getAdditionalStars(vongThaiTue: Star, vongLocTon: Star, vongTuongtinh: Star, lucSat: Star[], lucCat: Star[]): { leftStars: Star[], middleStars: Star[], rightStars: Star[] } {
  const leftStars: Star[] = [];
  const middleStars: Star[] = [];
  const rightStars: Star[] = [];

  // cac vong
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
  // sat tinh
  lucSat.forEach(sat => {
    middleStars.push({
      name: STARS[sat.name],
      nguHanh: sat.nguHanh
    });
  });

  // cat tinh
  lucCat.forEach(cat => {
    leftStars.push({
      name: STARS[cat.name],
      nguHanh: cat.nguHanh
    });
  });

  return { leftStars, middleStars, rightStars };
}


function getPhiHoa(phiHoa: any): Star[] {
  var res: Star[] = [];
  for (let i= 0 ; i< 4; i++) {
    var s = `${STARS[phiHoa[i]["hoa"]]} ---> ${DIA_CHI[phiHoa[i]["phiHoaToiCung"]]}`;
    res.push({
      name: s,
      nguHanh: phiHoa[i]["nguHanh"]
    })
  }
  return res;
}


function getNguHanhColor(ngu_hanh: number): string {
  return MAU_NGU_HANH[ngu_hanh];
}

type CSSProperties = React.CSSProperties;

function StarList({ stars, style }: { stars: Star[], style: CSSProperties }) {
  return (
    <div style={style}>
      {stars.map((tinh) => (
        <div
          key={tinh.name}
          style={{
            ...styles.star,
            color: getNguHanhColor(tinh.nguHanh)
          }}
        >
          {tinh.name}
        </div>
      ))}
    </div>
  );
}

function extractCungData(data: any, name: string) {
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

export function Cung({ data, name }) {
  const {
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
  } = extractCungData(data, name);

  const tuHoaStars = getTuHoaStars(tuTru, chinhTinh, lucCat);
  const additionalStars = getAdditionalStars(vongThaiTue, vongLocTon, vongTuongtinh, lucSat, lucCat);
  const phiHoaStars = getPhiHoa(phiHoa);

  const leftStars = [...tuHoaStars.leftStars, ...additionalStars.leftStars];
  const middleStars = [...tuHoaStars.middleStars, ...additionalStars.middleStars];
  const rightStars = [...tuHoaStars.rightStars, ...additionalStars.rightStars, ...phiHoaStars];

  return (
    <div className={name} style={styles.container}>
      <div style={styles.napAmContainer}>
        {/* Ngu hanh nap am */}
        <div
          style={{
            ...styles.napAm,
            ...getNguHanhStyle(ngu_hanh_nap_am.ngu_hanh)
          }}
        >
          {THIEN_CAN[canCung[name]] + " " + DIA_CHI[name]} {" - "} {ngu_hanh_nap_am.nap_am}
        </div>
        {/* Dai Van */}
        <div
          style={{
            ...styles.napAm,
            ...getNguHanhStyle(ngu_hanh_nap_am_dai_van.ngu_hanh)
          }}
        >
          {ngu_hanh_nap_am_dai_van.name + " - " + ngu_hanh_nap_am_dai_van.nap_am}
        </div>
        {/* Tieu Van */}
        <div
          style={{
            ...styles.napAm,
            ...getNguHanhStyle(ngu_hanh_nap_am_tieu_van.ngu_hanh)
          }}
        > 
          {ngu_hanh_nap_am_tieu_van.name + " - " + ngu_hanh_nap_am_tieu_van.nap_am}
          </div>

      </div>
      {/* Content area */}
      <div>
        {/* Cung Chuc */}
        <div style={styles.cungChuc}>
          {CUNG_CHUC[cungChuc]}
        </div>

        {/* Chinh Tinh */}
        <StarList 
          stars={chinhTinh.map(tinh => ({
            name: STARS[tinh.name],
            nguHanh: tinh.nguHanh
          }))} 
          style={styles.chinhTinh} 
        />

        {/* Vong Trang Sinh */}
        <div style={styles.trangSinh}>
          {VONG_TRANG_SINH[vongTrangSinh]}
        </div>
      </div>

      <StarList stars={rightStars} style={styles.rightStars} />
      <StarList stars={middleStars} style={styles.middleStars} />
      <StarList stars={leftStars} style={styles.leftStars} />
    </div>
  );
}
