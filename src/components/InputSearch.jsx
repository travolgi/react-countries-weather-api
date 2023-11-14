import styled from 'styled-components';

export default function InputSearch ({ query, handleQuery, handleRunQuery, handleResetQuery }) {
   return(
      <FlexDiv>
         <SearchIcon />
         <Input
            type="search"
            name="searchFor"
            id="searchFor"
            value={query}
            onChange={handleQuery}
            onKeyPress={handleRunQuery}
            placeholder="Search for a country..."
            aria-label="search-country"
         />
         {query.length > 0 &&
            <button id="reset" onClick={handleResetQuery}>x</button>
         }
      </FlexDiv>
   );
}

const FlexDiv = styled.div`
   display: flex;
   align-content: center;
   align-items: center;
   svg {
      position: relative;
      inset: 0;
      left: 1.5rem;
      width: 1.2rem;
      height: 1.2rem;
      color: var(--text);
   }
   button#reset {
      color: var(--text);
      font-weight: 800;
      padding: .5rem;
      font-size: 1rem;
      margin-left: -2.2rem;
      cursor: pointer;
      &:hover {
         opacity: .6;
      }
   }
`;
const Input = styled.input`
   min-width: clamp(25rem, 30vw, 42vw);
   padding: 1rem;
   padding-left: 4.5rem;
   margin-left: -1.3rem;
	border-radius: .3rem;
   background-color:var(--ele);
   color: var(--text);
	box-shadow: 0 0 .2rem var(--shadow);
   @media (max-width: 460px) {
      min-width: 92vw;
      padding-left: 5rem;
   }
`;

const SearchIcon = () => {
   return(
      <svg viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
   );
}