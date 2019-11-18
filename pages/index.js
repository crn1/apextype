import { useEffect } from 'react';

import { useViewportScroll, useTransform, motion } from 'framer-motion'

import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import blue from '@material-ui/core/colors/blue'
import purple from '@material-ui/core/colors/purple'
import red from '@material-ui/core/colors/red'

import MainHeading from '../components/MainHeading'
import WelcomeHeading from '../components/WelcomeHeading'
import ContactHeading from '../components/ContactHeading'
import Layout from '../components/Layout'
import Slide from '../components/Slide'

const Container = styled(Box)({
	height: '230vh',
	background: `linear-gradient(45deg, ${red[400]}, ${purple[400]}, ${blue[500]})`,
})

export default () => {

	const { scrollYProgress } = useViewportScroll();
	const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
	const titleScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);
	const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -200]);

	const welcomeOpacity = useTransform(scrollYProgress,
		[0.3, 0.35, 0.65, 0.70],
		[0, 1, 1, 0]
	);
	const welcomeScale = useTransform(scrollYProgress,
		[0.3, 0.35, 0.65, 0.70],
		[2, 1, 1, 0]
	);
	const welcomeY = useTransform(scrollYProgress,
		[0.3, 0.35, 0.65, 0.70],
		[200, 0, 0, -200]
	);

	const contactOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
	const contactScale = useTransform(scrollYProgress, [0.7, 0.9], [2, 1]);
	const contactY = useTransform(scrollYProgress, [0.7, 0.9], [200, 0]);

	return (
		<Layout>
			<Container>
				<Slide
					style={{
						opacity: titleOpacity,
						scale: titleScale,
						y: titleY,
					}}
				>
					<MainHeading />
				</Slide>
				<Slide
					style={{
						opacity: welcomeOpacity,
						scale: welcomeScale,
						y: welcomeY,
					}}
				>
					<WelcomeHeading />
				</Slide>
				<Slide
					style={{
						opacity: contactOpacity,
						scale: contactScale,
						y: contactY,
					}}
				>
					<ContactHeading />
				</Slide>
			</Container>
		</Layout>
	);

}
