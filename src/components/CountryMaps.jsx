import styled from "styled-components";

export default function CountryMaps({ latlng }) {

   return (
      <IframeMaps
         src={`https://www.google.com/maps?q=${latlng[0]},${latlng[1]}&z=5&ie=UTF8&iwloc=&output=embed`}
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