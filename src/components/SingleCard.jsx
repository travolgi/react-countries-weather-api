import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LoadSpinner from './LoadSpinner';
import ErrorMessage from './ErrorMessage';

export default function SingleCard({ API_URL, resetQuery, setApiParam }) {
   const [data, error, isLoading] = useFetch(API_URL);
   return(
      <>
         {isLoading ?
            <LoadSpinner />
            : error ?
            <ErrorMessage resetQuery={resetQuery} setApiParam={setApiParam} />
               :
               <>
                  {data.map(country =>
                     <DivCard key={country.alpha3Code}>
                        <Link to={`/${country.alpha3Code}`}>
                           <img src={country.flag} alt={country.name + ' Flag'} />
                        </Link>
                        <div>
                           <Link to={`/${country.alpha3Code}`}>
                              <h2>{country.name}</h2>
                           </Link>
                           <ul>
                              <li><strong>Population:</strong> {country.population.toLocaleString()}</li>
                              <li><strong>Region:</strong> {country.region}</li>
                              <li><strong>Capital:</strong> {country.capital !== undefined ? country.capital : 'No Capital'}</li>
                           </ul>
                        </div>
                     </DivCard>)
                  }
               </>
         }
      </>
   );
}

const DivCard = styled.div`
   max-width: 32rem;
   border-radius: .5rem;
   background-color: var(--ele);
	box-shadow: 0 0 .2rem var(--shadow);
   overflow: hidden;
   transition: .4s ease-out;
   &:hover {
      transform: scale(1.1);
   }
   img {
      aspect-ratio: 3.3 / 2;
      object-fit: cover;
   }
   div {
      padding: 1.5rem;
      padding-bottom: 2rem;
   }
   h2 {
      font-size: 1.35rem;
      margin-bottom: .8rem;
   }
`;