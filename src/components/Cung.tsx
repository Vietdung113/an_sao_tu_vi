import React from "react";
import { MAU_NGU_HANH } from "../types/mapping";
import { CAT_TINH, CHINH_TINH, CUNG_CHUC, DIA_CHI, NAP_AM, SAT_TINH, THIEN_CAN, VONG_LOC_TON, VONG_THAI_TUE, VONG_TRANG_SINH } from "../services/constain.ts";
import { TuTru } from "../types/tuvi.ts";

function getNguHanhColor(ngu_hanh: number) {
  return MAU_NGU_HANH[ngu_hanh];
}

export function Cung({ data, name }) {
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
  // console.log(lucCat)
  // for (let i = 0; i < lucSat.length; i++) {
  //   console.log(CAT_TINH[lucCat[i].name])
  // }
  return (
    <div 
      className={name}
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "150px",
        padding: "8px",
        position: "relative"
      }}
    >
      {/* Ngu hanh nap am */}
      <div
        style={{
          color: getNguHanhColor(ngu_hanh_nap_am.ngu_hanh),
          fontSize: "80%",
          display: "flex",
          alignItems: "center",
          padding: "4px",
          marginBottom: "8px"
        }} 
      >
        {THIEN_CAN[canCung[name]] + " " + DIA_CHI[name]} {" - "} {ngu_hanh_nap_am.nap_am}
      </div>

      {/* Content area */}
      <div>
        {/* Cung Chuc */}
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "75%",
            transform: "translateX(-50%)",
            fontSize: "100%",
            color: "black",
            padding: "4px"
          }}
        >
          {CUNG_CHUC[cungChuc]}
        </div>

        {/* Chinh Tinh */}
        <div 
          style={{ 
            position: "absolute",
            top: "25%",
            left: "75%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2px"
          }}
        >
          {chinhTinh.map((tinh, i) => (
            <div
              key={CHINH_TINH[tinh.name]}
              style={{
                fontSize: "90%",
                color: getNguHanhColor(tinh.nguHanh),
                whiteSpace: "nowrap"
              }}
            >
              {CHINH_TINH[tinh.name]}
            </div>
          ))}
        </div>

        {/* Vong Thai Tue */}
        <div
          style={{
            position: "absolute",
            bottom: "30%",
            right: "4px",
            fontSize: "75%",
            color: getNguHanhColor(vongThaiTue.nguHanh),
            padding: "4px"
          }}
        >
          {VONG_THAI_TUE[vongThaiTue.name]}
        </div>
        {/* Vong Loc Ton */}
        <div
          style={{
            position: "absolute",
            bottom: "40%",
            right: "4px",
            fontSize: "75%",
            color: getNguHanhColor(vongLocTon.nguHanh),
            padding: "4px"
          }}
        >
          {VONG_LOC_TON[vongLocTon.name]}
        </div>

        {/* Vong Trang Sinh */}
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "75%",
            transform: "translateX(-50%)",
            display: "flex",
            fontSize: "90%",
            flexDirection: "column",
            alignItems: "center",
            gap: "2px"
          }}
        >
          {VONG_TRANG_SINH[vongTrangSinh]}
          </div>
      </div>
      {/* Luc Sat */}
      <div 
          style={{ 
            position: "absolute",
            bottom: "15%",
            right: "4px",
            fontSize: "75%",
            padding: "4px"
          }}
        >
          {lucSat.map((tinh, i) => (
            <div
              key={SAT_TINH[tinh.name]}
              style={{
                color: getNguHanhColor(tinh.nguHanh),
                whiteSpace: "nowrap"
              }}
            >
              {SAT_TINH[tinh.name]}
            </div>
          ))}
      </div>
      {/* Luc Cat */}
      <div 
          style={{ 
            position: "absolute",
            bottom: "15%",
            left: "40%",
            fontSize: "75%",
            padding: "4px"
          }}
        >
          {lucCat.map((tinh, i) => (
            <div
              key={CAT_TINH[tinh.name]}
              style={{
                color: getNguHanhColor(tinh.nguHanh),
                whiteSpace: "nowrap"
              }}
            >
              {CAT_TINH[tinh.name]}
              </div> 
          ))}
          </div>
    </div>
  );
}
