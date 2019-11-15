import { useViewportScroll, useTransform,  motion } from 'framer-motion'
import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import blue from '@material-ui/core/colors/blue'
import purple from '@material-ui/core/colors/purple'

import MainHeading from '../components/MainHeading'
import Layout from '../components/Layout'

const Container = styled(Box)({
	height: '200vh',
	width: '100wh',
	background: `linear-gradient(180deg, ${purple[600]}, ${blue[300]})`,
})

export default () => {

	const { scrollYProgress } = useViewportScroll();
	const scale = useTransform(scrollYProgress, [0,1], [0.2, 2]);

	return (
		<Layout>
			<Container>
				<MainHeading />
			</Container>
		</Layout>
	);

}
