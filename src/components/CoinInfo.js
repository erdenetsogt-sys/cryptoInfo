import React, { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";
import { chartDays } from "../config/data";
import { SelectButton } from "../components/SelectButton";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { CryptoState } from "../CryptoContext";
import { Chart, registerables } from "chart.js";
import { darkTheme } from "../assets/theme";
import { ThemeProvider, makeStyles, CircularProgress } from "@material-ui/core";

Chart.register(...registerables);
export const CoinInfo = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const { currency, symbol } = CryptoState();
  const [days, setDays] = useState(1);

  const fetchHistoricalData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setHistoricData(data.prices);
  };
  useEffect(() => {
    fetchHistoricalData();
  }, [currency, days]);

  const useStyles = makeStyles((theme) => ({
    container: {
      width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
      },
    },
  }));
  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        {!historicData ? (
          <CircularProgress
            style={{ color: "#B384FF" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),
                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `価値 ( 過去 ${days}間日 ) in ${currency}`,
                    borderColor: "#B384FF",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => setDays(day.value)}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};
