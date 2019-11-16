import { useViewportScroll, useTransform, motion } from 'framer-motion'
import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import blue from '@material-ui/core/colors/blue'
import purple from '@material-ui/core/colors/purple'
import { useEffect } from 'react';

import MainHeading from '../components/MainHeading'
import ContactHeading from '../components/ContactHeading'
import Layout from '../components/Layout'

const Container = styled(Box)({
	height: '150vh',
	background: `linear-gradient(70deg, ${purple[500]}, ${blue[500]})`,
})

const Slide = styled(motion.div)({
	position: 'fixed',
	width: '100vw',
})

export default () => {

	const { scrollYProgress } = useViewportScroll();
	const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
	const titleScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);
	const titleY = useTransform(scrollYProgress, [0, 0.8], [0, -200]);

	const contactOpacity = useTransform(scrollYProgress, [0.2, 1], [0, 1]);
	const contactScale = useTransform(scrollYProgress, [0.2, 1], [2, 1]);
	const contactY = useTransform(scrollYProgress, [0.2, 1], [200, 0]);

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
