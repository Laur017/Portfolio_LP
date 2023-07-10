import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Project5() {
		const options = {
			animationEnabled: true,
			exportEnabled: false,
			theme: "light2", //"light1", "dark1", "dark2"
			title:{
				text: "Spending - Last 7 days"
			},
			axisY: {
				includeZero: true
			},
			data: [{
				type: "column", 
                indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints: [
					{ label: 'mon', y: 17.45 },
					{ label: 'tue', y: 34.91 },
					{ label: 'wed', y: 52.36},
					{ label: 'thu', y: 31.07},
					{ label: 'fri', y: 23.39},
					{ label: 'sat', y: 43.28},
					{ label: 'sun', y: 25.48}

				]
			}]
		}
  return (
    <div className='pr5-main-div'>
        <div className="pr5-balance-div">
            <h6>My balance</h6>
            <h3>$921.48</h3>
        </div>
        <div className="pr5-card">
            {/* <h3>Spending - Last 7 days</h3> */}
            <CanvasJSChart options = {options} 
               
			/>
            <div className="pr5-card-month">
                <div className="pr5-left">
                    <h6>Total this month</h6>
                    <h2>$478.33</h2>
                </div>
                <div className="pr5-right">
                    <h6>+2.4%</h6>
                    <h6>from last month</h6>
                </div>
            </div>
        </div>
    </div>
  )
}
