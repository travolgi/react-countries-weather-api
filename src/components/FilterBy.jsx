import styled from 'styled-components';

export default function FilterBy({ handleFilterBy }) {
   const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

   return(
      <SelectFilter id="filterBy" name="filterBy" onChange={handleFilterBy} aria-label="filter-by">
         <option value="none" defaultValue hidden>Filter by Region</option>
         <option value="all">All Region</option>
         {regions.map(region => (
            <option key={region} value={region}>{region}</option>
         ))}
      </SelectFilter>
   );
}

const SelectFilter = styled.select`
   min-width: 12rem;
   padding: 1rem;
	border-radius: .3rem;
   background-color:var(--ele);
   color: var(--text);
	box-shadow: 0 0 .2rem var(--shadow);
   cursor: pointer;
   @media (max-width: 460px) {
      min-width: 56vw;
   }
`;