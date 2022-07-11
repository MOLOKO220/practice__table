import { createSlice } from "@reduxjs/toolkit";

// достаем данные из Storage
let localStorageData = localStorage.getItem("storeData");
let initialState;
if (localStorageData !== null) {
  initialState = JSON.parse(localStorageData);
} else {
  initialState = {
    data: {
      Kyivska: {
        G: {
          2017: {
            XX: {
              value: 150000,
              dateRelease: "2017-12-31",
            },
            YY: {
              value: 100000,
              dateRelease: "2017-12-31",
            },
            ZZ: {
              value: 77,
              dateRelease: "2017-12-31",
            },
          },
          2018: {
            XX: {
              value: 160000,
              dateRelease: "2018-12-31",
            },
            YY: {
              value: 110000,
              dateRelease: "2018-12-31",
            },
            ZZ: {
              value: 72,
              dateRelease: "2018-12-31",
            },
          },
          2019: {
            XX: {
              value: 130000,
              dateRelease: "2019-12-31",
            },
            YY: {
              value: 85000,
              dateRelease: "2019-12-31",
            },
            ZZ: {
              value: 72,
              dateRelease: "2019-12-31",
            },
          },
        },
      },
      Odeska: {
        G: {
          2017: {
            XX: {
              value: 10000,
              dateRelease: "2017-12-31",
            },
            YY: {
              value: 5000,
              dateRelease: "2017-12-31",
            },
            ZZ: {
              value: 45,
              dateRelease: "2017-12-31",
            },
          },
          2019: {
            XX: {
              value: 15000,
              dateRelease: "2019-12-01",
            },
            YY: {
              value: 0,
              dateRelease: "2022-02-18",
            },
            ZZ: {
              value: 0,
              dateRelease: "2022-02-18",
            },
          },
        },
      },
      Lvivska: {
        G: {
          2017: {
            XX: {
              value: 640000,
              dateRelease: "2017-12-31",
            },
            YY: {
              value: 510000,
              dateRelease: "2017-08-01",
            },
            ZZ: {
              value: 67,
              dateRelease: "2017-08-01",
            },
          },
          2018: {
            XX: {
              value: 740000,
              dateRelease: "2018-12-31",
            },
            YY: {
              value: 530000,
              dateRelease: "2018-08-01",
            },
            ZZ: {
              value: 61,
              dateRelease: "2018-08-01",
            },
          },
        },
      },
    },
  };
}

const mainReducer = createSlice({
  name: "Slice",
  initialState,
  reducers: {
    setDate(state, action) {
      // проверка, если это первые данные в этой ячейки, создать массив "popupTeble", если такой массив есть .push(новые данные)
      if (
        state.data[action.payload.route.citi].G[action.payload.route.year][
          action.payload.route.quarter
        ].popupTeble === undefined
      ) {
        state.data[action.payload.route.citi].G[action.payload.route.year][
          action.payload.route.quarter
        ].popupTeble = [action.payload.newData];
      } else {
        state.data[action.payload.route.citi].G[action.payload.route.year][
          action.payload.route.quarter
        ].popupTeble.push(action.payload.newData);
      }
      // сохраняем данные в Storage
      localStorage.setItem("storeData", JSON.stringify(state));
    },
  },
});

export const { setDate } = mainReducer.actions;

export default mainReducer.reducer;
