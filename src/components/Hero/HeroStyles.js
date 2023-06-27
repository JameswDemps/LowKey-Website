import styled from 'styled-components';
import { Row, Section } from '../../globalStyles';
import { orange } from '../../Colors';

export const HeroSection = styled(Section)`
	transform: translate3d(0, 0, 0); /* enable hardware acceleration on mobile so that background-size: cover works */
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)),
		url('/images/Texture_background.jpg');
	height: 100vh;
	background-position: center;
	background-size: cover;
	/* min-height: 100%; to fix background size in mobile view */
	background-attachment: fixed;
	display: flex;
	padding: 100px 0;

	@media screen and (max-width: 768px) {
		padding-top: 120px;
	}
`;

export const ButtonContainer = styled(Row)`
	justify-content: center;
	flex-flow: wrap;

	button {
		background-color: #1b16008c;
		margin: 0 0.3rem;
	}
	button:nth-child(1) {
		border: 2px solid ${orange};

		&:hover {
			border: 2px solid transparent;
		}
	}

	button:nth-child(2) {
		padding: 8px 32px;

		display: flex;
		align-items: center;

		&:hover {
			background-color: transparent;
			color: ${orange};
		}
		> svg {
			margin-right: 0.4rem;
		}
	}
`;
