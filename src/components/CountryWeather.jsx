import styled from 'styled-components';
import LoadSpinner from './LoadSpinner';
import useFetch from '../hooks/useFetch';
import { TemperatureIcon, HumidityIcon, CloudIcon, WindIcon, RainIcon, SnowIcon } from './weatherIcon';

export default function CountryWeather({ latCountry, lonCountry }) {
   const URL_WEATHER = `https://api.openweathermap.org/data/2.5/weather?lat=${latCountry}&lon=${lonCountry}&units=metric&appid=655762fc6b5bd4634633c8c020a64e82`;
   const [data, error, isLoading] = useFetch(URL_WEATHER);

   return(
      <>
         {isLoading ?
            <LoadSpinner />
            : error || data.status === 404 ?
               <h2>Ops! Something wrong with Weather data.</h2>
               :
               <div>
                  <h2>Weather {data.name}</h2>
                  <Table>
                     <Tablecaption>
                        <div>
                           <h3>{data.weather && data.weather[0].main}</h3>
                           <em>{data.weather && data.weather[0].description}</em>
                        </div>
                        <img
                           src={`http://openweathermap.org/img/wn/${data.weather && data.weather[0].icon}@2x.png`}
                           alt={data.name+' weather'}
                        />
                     </Tablecaption>
                     <tbody>
                        <tr>
                           <td>Temperature:</td>
                           <td><TemperatureIcon /> {data.main && data.main.temp} °C</td>
                        </tr>
                        <tr>
                           <td>Humidity:</td>
                           <td><HumidityIcon /> {data.main && data.main.humidity}%</td>
                        </tr>
                        <tr>
                           <td>Cloudiness:</td>
                           <td><CloudIcon /> {data.clouds && data.clouds.all}%</td>
                        </tr>
                        <tr>
                           <td>Wind speed:</td>
                           <td><WindIcon /> {data.wind && data.wind.speed} m/s</td>
                        </tr>

                        {data.rain && data.rain['1h'] &&
                        <tr>
                           <td>Rain:</td>
                           <td><RainIcon /> {data.rain['1h']} mm</td> 
                        </tr>
                        }
                        {data.snow && data.snow['1h'] &&
                        <tr>
                           <td>Snow:</td>
                           <td><SnowIcon /> {data.snow['1h']} mm</td>
                        </tr>
                        }
                     </tbody>
                  </Table>
               </div>
         }
      </>
   );
}

const Table = styled.table`
   width: 100%;
   td {
      padding-block: .5rem;
      border-bottom: .1rem solid var(--ele)
   }
   td:first-child {
      font-weight: 700;
   }
   td:last-child {
      display: flex;
      align-items: center;
      gap: 1rem;
   }
`;
const Tablecaption = styled.caption`
   display: flex;
   justify-content: start;
   align-items: center;
   gap: 1rem;
   text-align: left;
   img {
      width: 7rem;
   }
`;