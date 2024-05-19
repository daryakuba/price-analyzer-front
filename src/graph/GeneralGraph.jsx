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

export default function PriceGraph({ url, pricesClass, namesClass, label }) {
  const [dataChart, setDataChart] = useState({
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      let html = await response.text();

      let parser = new DOMParser();
      let doc = parser.parseFromString(html, "text/html");

      let prices = Array.from(doc.querySelectorAll(pricesClass)).map((p) =>
        p.innerText.trim()
      );
      let names = Array.from(doc.querySelectorAll(namesClass)).map((p) =>
        p.innerText.trim()
      );

      if (label === "Хлеб Перекресток") {
        let prices1 = [];

        for (let i = 0; i < prices.length; i++) {
          prices1.push(prices[i].match(/(\d+)/)[0]);
        }

        prices = prices1;
      }

      prices.sort((a, b) => a - b);

      console.log(prices);
      console.log(names);
      setDataChart({
        labels: names,
        datasets: [
          {
            data: prices,
            label: label,
            borderColor: "rgb(36,36,36)",
            backgroundColor: "rgb(251,206,177,0.3)",
          },
        ],
      });
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container">
      <Line data={dataChart} />
    </div>
  );
}
