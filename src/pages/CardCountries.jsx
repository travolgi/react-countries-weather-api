import styled from 'styled-components';
import React, { useState } from 'react';
import InputSearch from '../components/InputSearch';
import FilterBy from '../components/FilterBy';
import SingleCard from '../components/SingleCard';


export default function CardCountries({ API_URL }) {
   const [query, setQuery] = useState(''),
         [apiParam, setApiParam] = useState('all');

   const handleQuery = e => setQuery(e.target.value.trim()),
         resetQuery = () => {
            setQuery('');
            setApiParam('all');
         }
   const handleRunQuery = e => {
      let newQuery = e.target.value.toLowerCase();
      if(e.key === 'Enter' && newQuery.trim().length < 3) {
			alert('Enter at least 3 characters.')
		}
		if(e.key === 'Enter' && newQuery.trim().length >= 3) {
         setApiParam(`name/${newQuery}`);
		}
   }
   const handleFilterBy = e => {      
      let region = e.target.value.toLowerCase();
      if(region !== 'all') {
         setApiParam(`region/${region}`);
      } else {
         setApiParam('all');
      }
   }

   return(
      <>
         <section>
				<InputSearch 
               query={query}
               handleQuery={handleQuery}
               handleRunQuery={handleRunQuery}
               handleResetQuery={resetQuery}
            />
				<FilterBy handleFilterBy={handleFilterBy} />
			</section>
         
			<CardSection>
            <SingleCard
               API_URL={`${API_URL}${apiParam}`}
               resetQuery={resetQuery}
               setApiParam={setApiParam}
            />
			</CardSection>
      </>
   );
}

const CardSection = styled.section`
   grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr)) !important;
   @media (max-width: 460px) {
      padding-inline: 1.8rem;
   }
`;