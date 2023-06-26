import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Column, MainHeading, Row, TextWrapper } from '../../globalStyles';
import { BiPlayCircle } from 'react-icons/bi';
import { HeroSection, ButtonContainer } from './HeroStyles';
import {
	Img,
} from '../Content/ContentStyles';
import { useAnimation } from 'framer-motion';

const Hero = () => {
	// const initial = { opacity: 0, y: 30 };
	const animation = useAnimation();

	return (
		<HeroSection id="hero">
			<Row justify="center" align="normal" height="100%" padding="2rem">
				<Column align="center" mb="10%">
					{/* <MainHeading>We Are</MainHeading> */}
					<Img
						transition={{ delay: 1, duration: 0.6 }}
						animate={animation}
						alt=""
						src={'./images/Logo_Draft_White_Transparent.png'}
					/>
					<TextWrapper
						color="white"
						size="clamp(1rem,3vw,1.3rem)"
						margin="0 0 2rem"
						lineHeight="1.1rem"
						maxWidth="480px"
						align="center"
					>
						Discover, stream and share a constantly expanding mix of music from emerging
						and major artists around the world
					</TextWrapper>
					<ButtonContainer>
						<Link to={'/contact-us'}>
							<Button big fontBig>
								Book Now
							</Button>
						</Link>
						{/* <Button big fontBig>
							<BiPlayCircle size="2.3rem" /> Download
						</Button> */}
					</ButtonContainer>
				</Column>
			</Row>
		</HeroSection>
	);
};

export default Hero;
