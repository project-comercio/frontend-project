import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { LineChartProps } from "@/types/types";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale
);

const LineChart = ({ chartData, chartOptions }: LineChartProps) => {
  return (
    <div className="max-w-[525px] min-h-[225px] h-full">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
