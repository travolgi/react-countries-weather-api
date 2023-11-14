import styled from 'styled-components';
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
	const [scrollPosition, setSrollPosition] = useState(0),
			[showGoTop, setShowGoTop] = useState('');

	const handleVisibleBtn = () => {
		const position = window.pageYOffset;
		setSrollPosition(position);
		scrollPosition > 200 ? setShowGoTop('visible') : setShowGoTop('');
	}
	useEffect(() => window.addEventListener('scroll', handleVisibleBtn));

   const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

	return(
      <GoTop className={showGoTop}  onClick={scrollTop}>
         <svg width="20" viewBox="0 0 320 450"><path d="M168.5 164.2l148 146.8c4.7 4.7 4.7 12.3 0 17l-19.8 19.8c-4.7 4.7-12.3 4.7-17 0L160 229.3 40.3 347.8c-4.7 4.7-12.3 4.7-17 0L3.5 328c-4.7-4.7-4.7-12.3 0-17l148-146.8c4.7-4.7 12.3-4.7 17 0z"></path></svg>
      </GoTop>
   );
}

const GoTop = styled.div`
	visibility: hidden;
	opacity: .8;
	width: auto;
	position: fixed;
	right: 2.8rem;
	bottom: 7rem;
	z-index: 96;
	padding: .15rem .5rem;
	background-color: var(--text);
	fill: var(--ele);
	border-radius: 2rem;
	cursor: pointer;
	transition: 1s ease-in-out;
   @media (max-width: 460px) {
		bottom: 2.8rem;
	}
`;