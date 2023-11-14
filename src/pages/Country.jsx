import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LoadSpinner from '../components/LoadSpinner';
import BtnBack from '../components/BtnBack';
import ErrorMessage from '../components/ErrorMessage';
import CountryDetails from '../components/CountryDetails';
import CountryWeather from '../components/CountryWeather';
import CountryMaps from '../components/CountryMaps';


export default function Country({ API_URL }) {
   const { code } = useParams(),
         [data, error, isLoading] = useFetch(`${API_URL}alpha/${code}`);
   
   let latCountry, lonCountry;   
   if(data.latlng !== undefined) {
      latCountry = data.latlng[0];
      lonCountry = data.latlng[1];
   }

   return(
      <>
         <BtnBack />

         {isLoading ?
            <LoadSpinner />
            : error ?
            <ErrorMessage />
               :
               <section>
                  <CountryDetails data={data} API_URL={API_URL} />
                  <CountryWeather
                     latCountry={latCountry}
                     lonCountry={lonCountry}
                  />
                  <CountryMaps
                     lat={latCountry}
                     lon={lonCountry}
                  />
               </section>
         }
      </>
   );
}