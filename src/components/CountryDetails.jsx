import styled from "styled-components";
import { Link } from "react-router-dom";
import useFetch from '../hooks/useFetch';

export default function CountryDetails({data, API_URL}) {
   const joinObjData = objData => {
      let str = [];
      if(objData) objData.forEach(obj => str.push(obj.name));
      return str.join(', ');
   };
   const langs = joinObjData(data.languages),
         currencies = joinObjData(data.currencies),
         borderList =  data.borders?.map(border => border).join();

   const [dataBorder, errorBorder, isLoadingBorder] = useFetch(`${API_URL}alpha?codes=${borderList}`);

   return(
      <>
         <img src={data.flag} alt={data.name + ' Flag'} />

         <div>
            <h1 style={{fontSize: '2rem'}}>{data.name}</h1>
            <DivUlInfo>
               <ul>
                  <li><strong>Native Name:</strong> {data.nativeName}</li>
                  <li><strong>Population:</strong> {data.population.toLocaleString()}</li>
                  <li><strong>Region:</strong> {data.region}</li>
                  <li><strong>Sub Region:</strong> {data.subregion}</li>
                  <li><strong>Capital:</strong> {data.capital !== undefined ? data.capital : 'No Capital'}</li>
               </ul>

               <ul>
                  <li><strong>Top Level Domain:</strong> {data.topLevelDomain[0] !== "" ? data.topLevelDomain : 'None'}</li>
                  <li><strong>Currencies:</strong> {currencies !== '' ? currencies : 'No Currencies'}</li> 
                  <li><strong>Languages:</strong> {langs}</li>
               </ul>
            </DivUlInfo>
            
            <DivBorders>
               <p><strong>Border Countries:</strong></p>
               <ul>
                  {isLoadingBorder ?
                     <li>Loading...</li>
                     : errorBorder ?
                     <NoBorderLi>No Countries</NoBorderLi>
                        :
                        dataBorder.map(country => 
                           <li key={country.alpha3Code}>
                              <Link to={`/${country.alpha3Code}`}>{country.name}</Link>
                           </li>
                        )
                  }
               </ul>
            </DivBorders>
         </div>
      </>
   );
}

const DivUlInfo = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 3rem;
   margin-top: 1.5rem;
   margin-bottom: 2rem;
   @media (max-width: 800px) {
      flex-direction: column;
      margin-bottom: 0;
   }
   ul {
      width: 50%;
      @media (max-width: 460px) {
         width: 100%;
      }
      li {
         padding-bottom: .8rem;
      }
   }
`;
const DivBorders = styled.div`
   > * {
      display: inline-block;
      @media (max-width: 460px) {
         display: block;
      }
   }
   ul {
      display: inline-flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: .8rem;
      max-width: calc(100% - 10rem);
      padding-left: .8rem;
      @media (max-width: 460px) {
         max-width: 100%;
         padding-left: 0;
         margin-top: 1rem;
      }
   }
   li {
      padding: .5rem 1.5rem;
      background-color: var(--ele);
      border-radius: .3rem;
      box-shadow: 0 0 .3rem var(--shadow);
   }
`;
const NoBorderLi = styled.li`
   padding-inline: 0 !important;
   background: transparent !important;
   box-shadow: none !important;
`;