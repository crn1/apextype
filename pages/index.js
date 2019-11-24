import { useEffect } from 'react'

import { useViewportScroll, useTransform, motion } from 'framer-motion'

import { styled, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Box from '@material-ui/core/Box'
import blue from '@material-ui/core/colors/blue'
import purple from '@material-ui/core/colors/purple'
import red from '@material-ui/core/colors/red'

import yellow from '@material-ui/core/colors/yellow'
import orange from '@material-ui/core/colors/orange'
import amber from '@material-ui/core/colors/amber'

import MainHeading from '../components/MainHeading'
import MainLogo from '../components/MainLogo'
import WelcomeHeading from '../components/WelcomeHeading'
import ContactHeading from '../components/ContactHeading'
import Layout from '../components/Layout'
import Slide from '../components/Slide'

const Container = styled(motion.div)({
	height: '400vh',
	background: `linear-gradient(45deg, ${yellow[500]}, ${amber[200]}, ${orange[500]})`,
})

export default () => {

	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('md'))

	const { scrollYProgress } = useViewportScroll()

	const logoY = useTransform(scrollYProgress,
		[0, 0.20],
		[matches ? theme.spacing(24) : theme.spacing(10), theme.spacing(2)]
	)

	const mainOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
	const mainScale = useTransform(scrollYProgress, [0.2, 0.20001], [1, 0])

	const welcomeOpacity = useTransform(scrollYProgress,
		[0.2, 0.4, 0.6, 0.7],
		[0, 1, 1, 0]
	)
	const welcomeScale = useTransform(scrollYProgress, [0.2, 0.20001, 0.7, 0.70001], [0, 1, 1, 0])

	const contactOpacity = useTransform(scrollYProgress, [0.7, 0.95], [0, 1])
	const contactScale = useTransform(scrollYProgress, [0.7, 0.70001], [0, 1])

	return (
		<Layout>
			<Container
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
				<Slide
						style={{
							y: logoY,
						}}>
					<MainLogo />
				</Slide>
				<Slide
						style={{
							opacity: mainOpacity, 
							scale: mainScale,
							y: matches ? theme.spacing(48) : theme.spacing(27),
						}}>
					<MainHeading />
				</Slide>
				<Slide
						style={{
							opacity: welcomeOpacity, 
							scale: welcomeScale,
							y: matches ? theme.spacing(36) : theme.spacing(20),
						}}>
					<WelcomeHeading />
				</Slide>
				<Slide
						style={{
							opacity: contactOpacity, 
							scale: contactScale,
							y: matches ? theme.spacing(36) : theme.spacing(20),
						}}>
					<ContactHeading />
				</Slide>
			</Container>
		</Layout>
	)
}
