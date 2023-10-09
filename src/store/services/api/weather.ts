import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { WeatherAPIResponse, WeatherData } from "../../../types";

type LatLon = {
  lat: number;
  lon: number;
};

console.log(process.env.REACT_APP_PROMETHEUS_API_KEY);

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  }),
  endpoints: (builder) => ({
    getWeatherDataByLocation: builder.query<WeatherData, LatLon>({
      query: ({ lat, lon }) =>
        `weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_PROMETHEUS_API_KEY}&units=metric`,
      transformResponse: (response: WeatherAPIResponse) => {
        return {
          ...response,
          main: {
            ...response.main,
            feelsLike: response.main.feels_like,
            tempMin: response.main.temp_min,
            tempMax: response.main.temp_max,
          },
        };
      },
    }),
  }),
});

export const { useGetWeatherDataByLocationQuery } = weatherApi;
