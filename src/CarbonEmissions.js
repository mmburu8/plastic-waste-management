import React from "react";
import "./CarbonEmissions.css";
import {Sankey, Tooltip} from "recharts";
import SankeyChart from "./SankeyCharts";
import PlasticCO2Table from "./PlasticCO2Table";

const data = {
  nodes : [
    {name: "Plastic Bottles"},
    {name: "Plastic Dishes"},
    {name: "Plastic Cups"},
    {name: "Bottle Caps"},
    {name: "Food Wrappers"},
    {name: "Plastic Straws"},
    {name: "Polyethylene Terephthalate"},
    {name: "Polypropylene"},
    {name: "Polystyrene"},
    {name: "Polyethylene"}
  ],
    links : [
      {source: 0, target: 6, value: 1553},
      {source: 1, target: 7, value: 1234},
      {source: 2, target: 7, value: 944},
      {source: 3, target: 9, value: 614},
      {source: 4, target: 7, value: 514},
      {source: 5, target: 8, value: 127},
    ]
}
const CarbonEmissions = () => {
    return(
        <div className="full-container">
        <div className="header-container">
            <h2>BEYOND THE BIN</h2>
            <h3>DISPOSAL AND RECYCLING OF PLASTIC WASTE</h3>
        </div>
        <div className="text-container">
          <div className="text-box-carbon">
            <h2>Only 8%of all plastic waste collected is recycled.</h2>
            <h2>Plastic Waste is disposed through </h2>
            <h2>landfilling and incineration</h2>
          </div>
          <div className="text-box-carbon">
            <h2>Landfilling is the most common method</h2>
            <h2>of plastic waste disposal</h2>
            <h2>The largest is in Dandora</h2>
          </div>
          <div className="text-box-carbon">
            <h2>Incineration is practised in</h2>
            <h2>industrial and open-air burning.</h2>
            <h2>It reduces volume of plastic waste by 90%</h2>
          </div>  
        </div>
        <div className="sankey-container">
          <div className="sankey-box">
            <h2>Plastic Waste and Their Chemical Composition</h2>
            <SankeyChart/>
          </div>
          <div className="plastic-table-container">
          <h2>CO₂ Emissions per kg of Plastic Waste</h2>
          <PlasticCO2Table/>
        </div>
        </div>
        <div className="conclusions-container">
        <h2> Landfilling doesn't emit large amounts of CO₂ immediately during waste disposal.</h2>
        <h2>However, plastic waste decomposes over a long period of time leading to prolonged CO₂emissions.</h2>
        <br/>
        <h2>Incineration results in immediate production of large quantities of CO₂ and other toxic pollutants.</h2>
        <br/>
        <h2>Some of the recycled plastics are melted into pellets that can be reused in manufacturing</h2>
        <h2>while other plastics are turned into lower quality products such as roof tiles, buckets and basins.</h2>
        </div>
    </div>
    );
};

export default CarbonEmissions;