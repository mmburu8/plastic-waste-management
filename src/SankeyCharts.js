import React from "react";
import {Chart} from "react-google-charts";
import "./SankeyChart.css";

const SankeyChart = () => {
    const data = [
        ["From", "To", "Weight"],
        ["Plastic Bottles", "Polyethylene Terephthalate", 1553],
        ["Plastic Dishes", "Polypropylene", 1234],
        ["Plastic Cups", "Polypropylene", 944],
        ["Bottle Caps", 'Polyethylene', 614],
        ["Food Wrappers", "Polypropylene", 514],
        ["Plastic Straws", "Polystyrene", 127],
    ]

const options = {wdith:"100%", height:"100%", fontName: "Prata",
    sankey: {node: {
        colors: ["#9b59b6", "f4d037", "#2980b9", "#52b3b0"],
        label: {fontSize: 15, color: '#000', fontName: "Prata"},},
        link: {colorMode: "gradient", colors: ["#9b59b6", "f4d037", "#2980b9", "#52b3b0"]} 
    }};

return (
    <Chart chartType="Sankey" width="100%" height="100%" data={data} options={options}/>
)

}

export default SankeyChart;