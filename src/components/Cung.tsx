import React from "react";

import { MAPPING, MAU_NGU_HANH } from "../types/mapping";

function lay_mau_ngu_hanh(ngu_hanh: number) {
  return MAU_NGU_HANH[ngu_hanh];
}

export function Cung({ data, name }) {
  const thien_can = data["thien_ban"]["thien_can"];
  const dia_chi = data["thien_ban"]["dia_chi"];
  const cung_chuc = data["thien_ban"]["cung_chuc"];
  const chinh_tinh = data["thien_ban"]["chinh_tinh"];
  const tuoi_dai_van = data["thien_ban"]["tuoi_dai_van"];

  let mau_ngu_hanh = lay_mau_ngu_hanh(
    MAPPING["ngu_hanh_nap_am"][thien_can][dia_chi]["ngu_hanh"]
  );
  return (
    <div className={name}>
      {/* ngu hanh nap am  */}
      <div
        style={{
          color: mau_ngu_hanh,
          fontSize: "100%",
          justifyContent: "left",
          display: "flex",
          padding: "10px"
        }}
      >
        {" "}
        {MAPPING["thien_can"][thien_can]} {MAPPING["dia_chi"][dia_chi]}
        {" - "}
        {MAPPING["ngu_hanh_nap_am"][thien_can][dia_chi]["ten"]}
        <div style={{ flex: 1 }}></div>
        {/* tuoi dai van */}
        <span style={{ color: "black" }}>{tuoi_dai_van}</span>
      </div>

      <span
        style={{
          color: "black",
          textAlign: "center",
          fontSize: "120%",
        }}
      >
        {MAPPING["cung_chuc"][cung_chuc]}
      </span>

      <div style={{ position: "relative", height: "60px", margin: 0, padding: 0 }}>
        {chinh_tinh.map((tinh, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: i * 30,
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "150%",
              color: lay_mau_ngu_hanh(MAPPING["chinh_tinh"][tinh]),
              whiteSpace: "nowrap"
            }}
          >
            {tinh}
          </div>
        ))}
      </div>
      {/* an tuan triet */}
      <div
        style={{
          position: "absolute",
          top: -10,
          alignSelf: "center",
          textAlign: "center",
          backgroundColor: "red",
        }}
      >
        abc123
      </div>
    </div>
  );
}
