import styled from "styled-components";

export default function ErrorMessage({ resetQuery, setApiParam }) {
   const handleGoHome = e => {
      resetQuery();
      setApiParam(e.target.value);
   }
   return(
      <DivError>
         <ImgError src="space.svg" alt="Something wrong" />
         <div>
            <h1>Ops! Something wrong</h1>
            <p>Brace youserf till I get the error fixed.<br />You may also refresh the page or try again later.</p>
            <GoHomeButton onClick={handleGoHome} value="all">Go Home</GoHomeButton>
         </div>
      </DivError>
   );
}

const ImgError = styled.img`
   width: clamp(25vw,22rem,80vw);
`;
const DivError = styled.div`
   padding-top: 2.5rem;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   column-gap: 6rem;
   row-gap: 2rem;
   div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1.5rem;
      text-align: center;
   }
`;
const GoHomeButton = styled.button`
   cursor: pointer;
   padding: .8rem 3rem;
	border-radius: .3rem;
   font-size: 1.1rem;
   background-color: var(--ele);
   color: var(--txt);
	box-shadow: 0 0 .3rem var(--shadow);
`;