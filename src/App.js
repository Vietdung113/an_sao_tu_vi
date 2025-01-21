import "./App.css";
import { Cung } from "./components/Cung.tsx";
import TimeSelector from "./components/TimeSelector.tsx";
import { ansao } from "./services/ansao.ts";
import { useState, useRef } from "react";
import html2canvas from 'html2canvas';
import { DiaChi } from "./types/tuvi.ts";

function App() {
  const now = new Date();
  const [gender, setGender] = useState("nam"); // nam/nu for gender
  const [data, setData] = useState(() => {
    return ansao(
      now.getHours(),
      now.getDate(),
      now.getMonth() + 1, // getMonth() returns 0-11
      now.getFullYear(),
      7, // GMT+7
      gender === "nam", // true for nam, false for nu
      now.getFullYear() // namXem defaults to current year
    );
  });

  const [selectedTime, setSelectedTime] = useState({
    hour: now.getHours(),
    day: now.getDate(),
    month: now.getMonth() + 1,
    year: now.getFullYear(),
    gmt: 7,
    namXem: now.getFullYear()
  });

  const handleGenderChange = (e) => {
    const newGender = e.target.value;
    setGender(newGender);
    const newData = ansao(
      selectedTime.hour,
      selectedTime.day,
      selectedTime.month,
      selectedTime.year,
      selectedTime.gmt,
      newGender === "nam",
      selectedTime.namXem
    );
    setData(newData);
  };

  const handleTimeChange = (timeData) => {
    setSelectedTime(timeData);
    const { hour, day, month, year, gmt, namXem } = timeData;
    const newData = ansao(hour, day, month, year, gmt, gender === "nam", namXem);
    setData(newData);
  };

  
  const containerRef = useRef(null);

  const handleDownload = () => {
    if (containerRef.current) {
      html2canvas(containerRef.current).then(canvas => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'tuvi-chart.png';
        link.click();
      });
    }
  };

  return (
    <div className="app-wrapper">
      <div className="controls">
        <TimeSelector onChange={handleTimeChange} />
        <div className="gender-selector">
          <label>
            <input
              type="radio"
              name="gender"
              value="nam"
              checked={gender === "nam"}
              onChange={handleGenderChange}
            />
            Nam
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="nu"
              checked={gender === "nu"}
              onChange={handleGenderChange}
            />
            Nữ
          </label>
        </div>
        <button 
          onClick={handleDownload}
          className="download-button"
        >
          Download Image
        </button>
      </div>
      <div className="container" ref={containerRef}>
        <div className="ti"><Cung data={data} name={DiaChi.Ti}/></div>
        <div className="ngo"><Cung data={data} name={DiaChi.Ngo}/></div>
        <div className="mui"><Cung data={data} name={DiaChi.Mui}/></div>
        <div className="than"><Cung data={data} name={DiaChi.Than}/></div>
        <div className="thin"><Cung data={data} name={DiaChi.Thin}/></div>
        {/* <div className="center"><Cung data={data} name={'center'}/></div> */}
        <div className="dau"><Cung data={data} name={DiaChi.Dau}/></div>
        <div className="mao"><Cung data={data} name={DiaChi.Mao}/></div>
        <div className="tuat"><Cung data={data} name={DiaChi.Tuat}/></div>
        <div className="dan"><Cung data={data} name={DiaChi.Dan}/></div>
        <div className="suu"><Cung data={data} name={DiaChi.Suu}/></div>
        <div className="ty"><Cung data={data} name={DiaChi.Ty}/></div>
        <div className="hoi"><Cung data={data} name={DiaChi.Hoi}/></div>
      </div>
    </div>
  );
}

export default App;
