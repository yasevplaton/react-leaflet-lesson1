import React from "react";

class SelectComponent extends React.Component {
  render() {
    return (
      <div className="selectBlock">
        <select id="maps">
          <option value="map1">map1</option>
          <option value="map2">map2</option>
          <option value="map3">map3</option>
          <option value="map4">map4</option>
        </select>
      </div>
    );
  }
}

export default SelectComponent;
