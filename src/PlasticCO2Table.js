import React from "react";
import "./PlasticCO2Table.css";

const plasticData = [
    {chemical: "Polyethylene Terephthalate", landfilling: 0.03,
        incineration: 2.6, recycling: 1.8
    },
    {chemical: "Polypropylene", landfilling: 0.002,
        incineration: 2.8, recycling: 1.7
    },
    {chemical: "Polystyrene", landfilling: 0.0196,
        incineration: 3.1, recycling: 2.0
    },
    {chemical: "Polyethylene", landfilling: 0.0222,
        incineration: 2.8, recycling: 1.4
    }
]

export default function PlasticCO2Table () {
    return (
        <div className="plastic-table-container">
            <table className="plastic-table">
                <thead>
                    <tr>
                        <th rowSpan="2">Plastic Waste Chemicals</th>
                        <th colSpan="2">CO₂ per kg produced</th>
                        <th rowSpan="2">CO₂ per kg saved(Recycled)</th>
                    </tr>
                    <tr>
                        <th>Landfilling</th>
                        <th>Incineration</th>
                    </tr>
                </thead>
                <tbody>
                    {plasticData.map((item,index) => (
                        <tr key={index}>
                            <td>{item.chemical}</td>
                            <td>{item.landfilling}</td>
                            <td>{item.incineration}</td>
                            <td>{item.recycling}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}