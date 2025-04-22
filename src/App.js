import React from 'react';
import {BrowserRouter, Route, Routes, Link, useNavigate} from "react-router-dom";
import {BarChart, Bar,LineChart, Line, XAxis, YAxis, 
  CartesianGrid, Tooltip, PieChart, Pie, Sector, Legend} from 'recharts';
import "./App.css";
import CarbonEmissions from "./CarbonEmissions";

// main data file
const data = [
  {
    weeks: "Wk 1", month: "Jan", mon_wk: 3, amount: 250
  },
  {
    weeks: "Wk 2", month: "Jan", mon_wk: 4, amount: 320
  },
  {
    weeks: "Wk 3", month: "Feb", mon_wk: 1, amount: 400
  },
  {
    weeks: "Wk 4", month: "Feb", mon_wk: 2, amount: 410
  },
  {
    weeks: "Wk 5", month: "Feb", mon_wk: 3, amount: 380
  },
  {
    weeks: "Wk 6", month: "Feb", mon_wk: 4, amount: 360
  },
  {
    weeks: "Wk 7", month: "Mar", mon_wk: 1, amount: 500
  },
  {
    weeks: "Wk 8", month: "Mar", mon_wk: 2, amount: 520
  },
  {
    weeks: "Wk 9", month: "Mar", mon_wk: 3, amount: 453
  },
  {
    weeks: "Wk 10", month: "Mar", mon_wk: 4, amount: 431
  },
  {
    weeks: "Wk 11", month: "Apr", mon_wk: 1, amount: 446
  },
  {
    weeks: "Wk 12", month: "Apr", mon_wk: 2, amount: 518
  }
]

// percentage data
const percent_bottle = [
  {"items": "Plastic Bottles", "percent": 31.14},
  {"items": "Plastic Dishes", "percent": 24.78},
  {"items": "Plastic Cups", "percent": 18.92},
  {"items": "Bottle Caps", "percent": 12.32},
  {"items": "Food Wrappers", "percent": 10.30},
  {"items": "Plastic Straws", "percent": 2.54},
]

// const for texts
const total_plastic = data.reduce((acc, current) => acc + current.amount, 0);
const formattedPlastic = total_plastic.toLocaleString();

// data for doughnut plot
const summaryMonth = data.reduce((acc, current) => {
  const month = current.month;
  if (!acc[month]) {
    acc[month] = 0;
  }
  acc[month] += current.amount;
  return acc;
}, {});

const coluers = ["#e74c3c", "#f1c407", "#2ecc71", "#9b59b6"];

const doughnutMonth = Object.keys(summaryMonth).map((month, index) => {
  console.log(coluers[index % coluers.length])
  return {
  name: month,
  value: summaryMonth[month],
  fill: coluers[index % coluers.length] || "#cccccc"
}
})

console.log(doughnutMonth);


const LineChartComponent = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/carbon-emissions");
  }

  return (
    <div className="background-container">
      <h2 className="header-text">PLASTIC WASTE MANAGEMENT IN JKUAT</h2>
      <div className="line-chart-container">
        <div className="text-container">
          <div className="text-box">
            <h2>During the 12 weeks project period,</h2>
            <h3>a total of {formattedPlastic} kg of plastic waste</h3>
            <h2>was collected within the JKUAT premise</h2>
          </div>
          <div className="text-box">
            <h2>Plastic Waste constituted to</h2>
            <h3>20% of waste generated</h3>
            <h2>daily in Kenya</h2>
          </div>
          <div className="text-box">
            <h2>Kenya's daily plastic consumption</h2>
            <h2>is estimated to be</h2>
            <h3>0.03 kg per person</h3>
          </div>        
          </div>       
      <LineChart width={1000} height={400} data={data}
    margin={{top: 65, right:30, left:275, bottom:5}}>
      <CartesianGrid strokeDasharray="3 3" vertical={false}/>
      <XAxis dataKey="weeks"/>
      <YAxis/>
      <Tooltip/>     
      <Line type="monotone" dataKey="amount" stroke="#27AE60" strokeWidth={2} activeDot={{r:12}}/>
      <text x={695} y={40} fontSize={29} fill="#F1C407" fontFamily="Sen" textAnchor='middle'>WEEKLY PLASTIC WASTE COLLECTED</text>
      <text x={490} y={90} fontFamily="Prata">The drastic rise in Week 7 and 8</text>
      <text x={490} y={108} fontFamily="Prata">is due to the start of rainy season</text>
    </LineChart>
    <div style={{display: "flex", alignItems: "center"}}>
    <PieChart width={750} height={500} margin={{left:160}} fontFamily="Prata">
      <Pie data={doughnutMonth} dataKey='value'
      outerRadius={170} innerRadius={110}
      fill={doughnutMonth.fill}
      labelLine={false}
      label={({name, value}) => `${name}: ${value}`}/>
      <text x={454} y={250} fontFamily="Sen" fontSize={19} textAnchor="middle">Monthly Count of</text>
      <text x={457} y={270} fontFamily="Sen" fontSize={19} textAnchor="middle">Plastic Waste Collected</text>
{/*{({name, value}) => `${name}: ${value}`}*/}
      <Tooltip/>
    </PieChart>
    <div className='text-doughnut' style={{marginLeft: 40}}>
      <h3 class="no-margin">The rise in collection in March is due to</h3>
      <h3 class="no-margin">the accumulation of plastic waste in drainage systems</h3>
      <br/>
      <br/>
      <h3 class="no-margin">Plastic waste causes blockage that could</h3>
      <h3 class="no-margin">induce flooding in JKUAT and surrounding areas</h3>
    </div>
    </div>
    <BarChart width={1200} height={350} data={percent_bottle} 
    layout="horizontal" margin={{left:290, top: 50, bottom: 25}}>

      <CartesianGrid strokeDasharray="3 3" vertical={false}/>
      <XAxis dataKey="items"/>
      <YAxis/>
      <Tooltip/>
      <Bar dataKey="percent" fill="#f4d037" />
      <text x={715} y={19} fontSize={29} fill="#27ae60" fontFamily="Sen" textAnchor='middle'>PERCENTAGE OF PLASTIC MATERIALS COLLECTED</text>
      <text x={650} y={78} fontFamily="Prata">How often do you safely dispose</text>
      <text x={650} y={102} fontFamily="Prata">plastic materials you use daily?</text>
    </BarChart>
    <div class="full-width-box">
      <span className="left-text">Discover how plastic waste is managed and recycled</span>
      <a href="/carbon-emissions" className="right-button" onClick={handleClick}>
      Click to learn more...</a>
    </div>
    </div>
    </div>
  )
}

function PlasticWaste () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LineChartComponent/>}/>
        <Route path="/carbon-emissions" element={<CarbonEmissions/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default PlasticWaste;