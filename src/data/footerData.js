import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaTiktok } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
		link: 'https://www.facebook.com/lowkeyvocals',
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
		link: 'https://www.instagram.com/lowkey.vocals/',
	},
	// {
	// 	name: 'YouTube',
	// 	icon: iconStyle(FaYoutube),
	// 	link: '/',
	// },
	// {
	// 	name: 'Twitter',
	// 	icon: iconStyle(FaTwitter),
	// 	link: '/',
	// },
	// {
	// 	name: 'LinkedIn',
	// 	icon: iconStyle(FaLinkedin),
	// 	link: '/',
	// },
	{
		name: 'Tiktok',
		icon: iconStyle(FaTiktok),
		link: 'https://www.tiktok.com/@lowkey.vocals',
	},
];

export const footerData = [
	{
		title: 'Main',
		links: ['Blog', 'FAQs', 'Support', 'About us'],
	},
	{
		title: 'Product',
		links: ['Login', 'Personal', 'Business', 'Team'],
	},
	{
		title: 'Press',
		links: ['Logos', 'Events', 'Stories', 'Office'],
	},
	{
		title: 'Legal',
		links: ['GDPR', 'Privacy Policy', 'Terms of Service', 'Disclaimer'],
	},
];
