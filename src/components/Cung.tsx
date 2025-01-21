import React from "react";
import { STARS, CUNG_CHUC, DIA_CHI, THIEN_CAN, VONG_TRANG_SINH } from "../services/constain.ts";
import { styles } from "../styles/cungStyles.ts";
import {
  getNguHanhStyle,
  getTuHoaStars,
  getAdditionalStars,
  getPhiHoa,
  getNguHanhColor,
  extractCungData
} from "../utils/cungHelpers.ts";

type CSSProperties = React.CSSProperties;

interface DisplayStar {
  name: string;
  nguHanh: number;
}

function StarList({ stars, style }: { stars: DisplayStar[], style: CSSProperties }) {
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

export function Cung({ data, name }: { data: any, name: string }) {
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
  const phiHoaStars = getPhiHoa(phiHoa, data["viTriCung"], Number(name));

  const leftStars: DisplayStar[] = [...tuHoaStars.leftStars, ...additionalStars.leftStars];
  const middleStars: DisplayStar[] = [...tuHoaStars.middleStars, ...additionalStars.middleStars];
  const rightStars: DisplayStar[] = [...tuHoaStars.rightStars, ...additionalStars.rightStars, ...phiHoaStars];

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
