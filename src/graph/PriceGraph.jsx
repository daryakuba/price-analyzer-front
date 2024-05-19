import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "График цен",
    },
  },
};

export default function PriceGraph({ item_id, item_name }) {
  const [dataChart, setDataChart] = useState({
    datasets: [],
  });

  const url =
    "https://priceanalyzerback.railway.internal:8080/base/getByProduct/" +
    item_id;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();

      let data_times = data.map((d) => d["time"]);
      let data_prices = data.map((d) => d["price"]);

      let times = [];
      let prices = [];
      for (let i = 0; i < data_times.length; i++) {
        times.push(data_times[i].toString().split("T")[0]);
      }
      for (let i = 0; i < data_prices.length; i++) {
        prices.push(data_prices[i]);
      }
      setDataChart({
        labels: times,
        datasets: [
          {
            label: item_name,
            data: prices,
            borderColor: "rgb(36,36,36)",
            backgroundColor: "rgb(251,206,177,0.3)",
          },
        ],
      });
      //console.log("set");
    };
    fetchData();
  }, []);
  //console.log(dataChart);
  return (
    <div className="container">
      <Line data={dataChart} />
    </div>
  );
}
