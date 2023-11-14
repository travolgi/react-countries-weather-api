import styled from "styled-components";

export default function CountryMaps({ lat, lon }) {
   return (
      <IframeMaps
         src={`https://www.google.com/maps?q=${lat},${lon}&z=5&ie=UTF8&iwloc=&output=embed`}
         frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
      />
   );
}

const IframeMaps = styled.iframe`
   width: 100%;
   aspect-ratio: 3 / 2;
   transition: 2s ease-in-out;
   @media (max-width: 460px) {
      aspect-ratio: 1;
   }
`;