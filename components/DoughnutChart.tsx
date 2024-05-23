"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {};

const DoughnutChart = (accounts: DoughnutChartProps) => {
	const data = {
		datasets: [
			{
				label: "Banks",
				data: [1250, 2500, 3750],
				backgroundColor: ["#0747b6", "#2265b8", "#2f91da"],
			},
		],
    labels:['Bank 1' , 'Bank 2 ' , 'Bank 3']
	};
	return <Doughnut className="sm:h-16 bg-black-2 rounded-full"  data={data} options={{
  cutout:'60%',
  plugins:{
    legend:{
      display:false
    }
  }
  }} />;
};

export default DoughnutChart;
