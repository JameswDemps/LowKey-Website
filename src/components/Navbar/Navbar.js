import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { animateScroll as scroll } from 'react-scroll';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavItem,
	NavItemBtn,
	NavLinks,
	NavBtnLink,
} from './NavbarStyles';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
	const [show, setShow] = useState(false);
	const [background, setBackground] = useState(false);
	const [homeIcon, setHomeIcon] = useState(true);
	let history = useHistory();

	const closeMobileMenu = () => {
		if (history.location.pathname !== '/') {
			history.replace('/');
		}
		setShow(false);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 80) {
				setBackground(true);
				setHomeIcon(false);
				return;
			}
			setBackground(false);
			setHomeIcon(true);
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const data = ['About', 'Gigs', 'Contact Us'];

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav background={background}>
				<NavbarContainer>
					<NavLogo to="/" onClick={scroll.scrollToTop}>
						<NavIcon src="./images/Logo_Draft_White_Transparent.png" alt="" />
					</NavLogo>
					<MobileIcon onClick={() => setShow(!show)}>
						{show ? <FaTimes /> : <FaBars />}
					</MobileIcon>

					<NavMenu onClick={() => setShow(!show)} show={show}>
						{data.map((navItem, index) => (
							<NavItem key={index}>
								<NavLinks
									spy={true}
									duration={500}
									smooth={true}
									exact="true"
									offset={-80}
									to={navItem.toLowerCase()}
									onClick={closeMobileMenu}
								>
									{navItem}
								</NavLinks>
							</NavItem>
						))}
					<NavItemBtn>
						{/* <NavIcon src="./images/Logo_Draft_White_Transparent.png" alt="" /> */}
					</NavItemBtn>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;
