import React from "react";
import classes from "./connections.module.css";

const Connections = () => {
  return (
    <section id={classes.menu}>
      <div className={classes.menuitem}>
        <label for="cars" className={classes.label}>
          InstrumnetFamily:
        </label>
        <select name="cars" className={classes.cars}>
          <option value="volvo">NetworkAnalyzer</option>
          <option value="saab">SpectrumAnalyzer</option>
          <option value="mercedes">Osciloscopes</option>
        </select>
      </div>
      <div className={classes.menuitem}>
        <label for="cars" className={classes.label}>
          InstrumentModel:
        </label>
        <select name="cars" className={classes.cars}>
          <option value="volvo">N5181A</option>
          <option value="saab">N5182B</option>
          <option value="mercedes">N5183B</option>
          <option value="audi">E4438C</option>
        </select>
      </div>
      <div className={classes.menuitem}>
        <label for="cars" className={classes.label}>
          FirmwareVersion:
        </label>
        <select name="cars" className={classes.cars}>
          <option value="volvo">E5.18.58.18</option>
          <option value="saab">E6.18.58.18</option>
        </select>
      </div>
      <form className={classes.formcontrol}>
        <label for="cars" className={classes.label}>
          VisaAddress:
        </label>
        <input type="text" value="MyVisaAlias" className={classes.visa} />
        <button className={classes.menubtn} type="submit">
          Connect
        </button>
      </form>
    </section>
  );
};

export default Connections;
