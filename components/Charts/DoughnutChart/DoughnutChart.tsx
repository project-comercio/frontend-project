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
  Title,
  BarElement,
} from "chart.js";
import { Chart, Doughnut } from "react-chartjs-2";
import { DoughnutProps } from "@/types/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const DoughnutChart = ({ chartData }: DoughnutProps) => {
  return (
    <Doughnut className="w-[250px] h-[250px] doughnut-chart" data={chartData} />
  );
};

export default DoughnutChart;
