import { useViewportScroll, useTransform, useSpring, motion } from 'framer-motion'
import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import blue from '@material-ui/core/colors/blue'
import purple from '@material-ui/core/colors/purple'
import { useEffect } from 'react';

import MainHeading from '../components/MainHeading'
import Layout from '../components/Layout'

const Container = styled(Box)({
	height: '200vh',
	background: `linear-gradient(70deg, ${purple[500]}, ${blue[500]})`,
})

const Slide = styled(motion.div)({
	position: 'fixed',
	width: '100vw',
})

export default () => {

	const { scrollYProgress } = useViewportScroll();
	const yRange = useTransform(scrollYProgress, [0, 1], [1, 2]);

	return (
		<Layout>
			<Container>
				<Slide
					style={{scale: yRange}}
				>
					<MainHeading />
				</Slide>
			</Container>
		</Layout>
	);

}
