import "./App.css";
import { Cung } from "./components/Cung.tsx";


let data = {
  "thien_ban": {
      "dia_chi": "1",
      "thien_can": "1",
      "cung_chuc": "4",
      "nam": 2025,
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
}

function App() {

  return (
    <div className="container">
      <Cung data={data} name={'ti'}/>
      <div className="ngo">ngo</div>
      <div className="mui">mui</div>
      <div className="than">than</div>
      <div className="thin">thin</div>
      <div className="center">center</div>
      <div className="dau">dau</div>
      <div className="mao">mao</div>
      <div className="tuat">tuat</div>
      <div className="dan">dan</div>
      <div className="suu">suu</div>
      <div className="ty">ty</div>
      <div className="hoi">hoi</div>
    </div>
  );
}

export default App;
