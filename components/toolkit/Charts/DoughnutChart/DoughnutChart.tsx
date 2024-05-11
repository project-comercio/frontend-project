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
import type { DoughnutProps } from "@/types/index";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const DoughnutChart = ({ chartData, className }: DoughnutProps) => {
  return (
    <Doughnut className={`doughnut-chart ${className}`} data={chartData} />
  );
};

export default DoughnutChart;
