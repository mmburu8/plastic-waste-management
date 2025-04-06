
previous pie text code:
<text
      key={index}
      x={200 + (80 + 10 ) * 
      Math.cos((angles[index].startAngle + angles[index].endAngle) / 2 * Math.PI / 180)}
      y={200 + (80 + 10 ) * 
        Math.sin((angles[index].startAngle + angles[index].endAngle) / 2 * Math.PI / 180)}
        textAnchor="middle"
        fill="#ff00ff">
          {entry.name}<br/>{entry.value}
        </text>)}

VERSION 2 OF TEXT CODE:
<div
      key={index}
      style={{
        position: 'absolute',
        left: 200 + (80 + 10 ) * 
      Math.cos((angles[index].startAngle + angles[index].endAngle) / 2 * Math.PI / 180),
        right: 200 + (80 + 10 ) * 
        Math.sin((angles[index].startAngle + angles[index].endAngle) / 2 * Math.PI / 180),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color:"#ff00ff"}}>
          <span>{entry.name}</span>
          <span>{entry.value}</span>
          </div>

Donutplot Version 1:
const totalValue = doughnutMonth.reduce((acc, current) => acc + current.value, 0);

let startAngle = 0;
const angles = [];
doughnutMonth.forEach((entry) => {
  const endAngle = startAngle + (entry.value / totalValue) * 360;
  angles.push({startAngle, endAngle});
  startAngle = endAngle;
})

// Add startAngle and endAngle to doughnut plot
doughnutMonth.forEach((entry, index) => {
  entry.startAngle = angles[index].startAngle;
  entry.endAngle = angles[index].endAngle;
})

<PieChart width={400} height={400}>
      <Pie data={doughnutMonth} cx={200} cy={200}
      innerRadius={60} outerRadius={80} 
      labelLine={false}/>
      {/*{doughnutMonth.map((entry, index) => (
      <Sector key={index} cx={200} cy={200} 
      innerRadius={70} outerRadius={80} 
      startAngle={entry.startAngle} 
      endAngle={entry.endAngle} fill={entry.fill} />))}*/}
      {doughnutMonth.map((entry, index) =>
      <text
      key={index}
      x={200 + (80 + 10 ) * 
      Math.cos((angles[index].startAngle + angles[index].endAngle) / 2 * Math.PI / 180 + Math.PI / 4)}
      y={200 + (80 + 10 ) * 
        Math.sin((angles[index].startAngle + angles[index].endAngle) / 2 * Math.PI / 180 + Math.PI / 4)}
        textAnchor="middle"
        fill="#ff00ff">
          {entry.name} Value: {entry.value}
        </text>)}
    </PieChart>