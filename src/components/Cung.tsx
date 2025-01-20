import React from "react";
import { MAU_NGU_HANH } from "../types/mapping";
import { STARS, CUNG_CHUC, DIA_CHI, NAP_AM, THIEN_CAN, VONG_TRANG_SINH, BANG_TU_HOA } from "../services/constain.ts";
import { NguHanh, StarEnum, TuTru } from "../types/tuvi.ts";

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
  napAm: {
    fontSize: "80%",
    display: "flex",
    alignItems: "center",
    padding: "4px",
    marginBottom: "8px"
  },
  cungChuc: {
    position: "absolute" as const,
    top: "5%",
    left: "75%",
    transform: "translateX(-50%)",
    fontSize: "100%",
    color: "black",
    padding: "4px"
  },
  chinhTinh: {
    position: "absolute" as const,
    top: "25%",
    left: "75%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "2px"
  },
  trangSinh: {
    position: "absolute" as const,
    bottom: "5%",
    left: "75%",
    transform: "translateX(-50%)",
    display: "flex",
    fontSize: "90%",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "2px"
  },
  rightStars: {
    position: "absolute" as const,
    bottom: "15%",
    right: "4px",
    fontSize: "75%",
    padding: "4px"
  },
  leftStars: {
    position: "absolute" as const,
    top: "60%",
    left: "40%",
    fontSize: "75%",
    padding: "4px"
  },
  star: {
    whiteSpace: "nowrap" as const,
    fontSize: "90%"
  }
};

function getNguHanhColor(ngu_hanh: number) {
  return MAU_NGU_HANH[ngu_hanh];
}

function getTuHoaStars(tuTru: TuTru, chinhTinh: Star[], lucCat: Star[]): { leftStars: Star[], rightStars: Star[] } {
  const leftStars: Star[] = [];
  const rightStars: Star[] = [];
  const saoHoa = chinhTinh.concat(lucCat);

  saoHoa.forEach(sao => {
    const hoa = BANG_TU_HOA[tuTru.canNam][sao.name];
    switch (hoa) {
      case StarEnum.HoaKy:
        rightStars.push({ name: STARS[StarEnum.HoaKy], nguHanh: NguHanh.Thuy });
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

  return { leftStars, rightStars };
}

function getAdditionalStars(vongThaiTue: Star, vongLocTon: Star, lucSat: Star[], lucCat: Star[]): { leftStars: Star[], rightStars: Star[] } {
  const leftStars: Star[] = [];
  const rightStars: Star[] = [];

  // Add right stars
  rightStars.push({
    name: STARS[vongThaiTue.name],
    nguHanh: vongThaiTue.nguHanh
  });
  rightStars.push({
    name: STARS[vongLocTon.name],
    nguHanh: vongLocTon.nguHanh
  });
  lucSat.forEach(sat => {
    rightStars.push({
      name: STARS[sat.name],
      nguHanh: sat.nguHanh
    });
  });

  // Add left stars
  lucCat.forEach(cat => {
    leftStars.push({
      name: STARS[cat.name],
      nguHanh: cat.nguHanh
    });
  });

  return { leftStars, rightStars };
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

  if (ngu_hanh_nap_am === null) {
    throw new Error("Ngu hanh nap am is null");
  }

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
    ngu_hanh_nap_am
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
    ngu_hanh_nap_am
  } = extractCungData(data, name);

  const tuHoaStars = getTuHoaStars(tuTru, chinhTinh, lucCat);
  const additionalStars = getAdditionalStars(vongThaiTue, vongLocTon, lucSat, lucCat);

  const leftStars = [...tuHoaStars.leftStars, ...additionalStars.leftStars];
  const rightStars = [...tuHoaStars.rightStars, ...additionalStars.rightStars];

  return (
    <div className={name} style={styles.container}>
      {/* Ngu hanh nap am */}
      <div
        style={{
          ...styles.napAm,
          color: getNguHanhColor(ngu_hanh_nap_am.ngu_hanh)
        }}
      >
        {THIEN_CAN[canCung[name]] + " " + DIA_CHI[name]} {" - "} {ngu_hanh_nap_am.nap_am}
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
      <StarList stars={leftStars} style={styles.leftStars} />
    </div>
  );
}
