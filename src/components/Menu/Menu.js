import React from "react";
import "./menu.css";

const Menu = () => {
  return (
    <section id="menu">
      <div className="menu-item">
        <label for="cars" className="label">
          InstrumnetFamily:
        </label>
        <select name="cars" id="cars">
          <option value="volvo">NetworkAnalyzer</option>
          <option value="saab">SpectrumAnalyzer</option>
          <option value="mercedes">Osciloscopes</option>
        </select>
      </div>
      <div className="menu-item">
        <label for="cars" className="label">
          InstrumentModel:
        </label>
        <select name="cars" id="cars">
          <option value="volvo">N5181A</option>
          <option value="saab">N5182B</option>
          <option value="mercedes">N5183B</option>
          <option value="audi">E4438C</option>
        </select>
      </div>
      <div className="menu-item">
        <label for="cars" className="label">
          FirmwareVersion:
        </label>
        <select name="cars" id="cars">
          <option value="volvo">E5.18.58.18</option>
          <option value="saab">E6.18.58.18</option>
        </select>
      </div>
      <form className="form-control">
        <label for="cars" className="label">
          VisaAddress:
        </label>
        <input type="text" value="MyVisaAlias" className="visa" />
        <button className="menu-btn" type="submit">
          Connect
        </button>
      </form>
    </section>
  );
};

export default Menu;
