import { motion } from 'framer-motion';

import { styled, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Typed from 'react-typed';

const Quote = () => (
	<Typography style={{marginTop: '10vh'}} variant='body1'>
		<Typed
			strings={['“The happiest moment I felt; is that moment when I realized my ability to <b>create</b>.”']}
			typeSpeed={3}
			showCursor={false}
			startDelay={2500}
		/>
	</Typography>
);

const ScrollDown = () => (
	<Typography style={{ marginTop: '20vh', }} variant='body1'>
		<Typed
			strings={['SCROLL DOWN &#8897;']}
			typeSpeed={10}
			showCursor={false}
			startDelay={3300}
		/>
	</Typography>
);

const MainTypography = styled(Typography)(({ theme }) => ({
	padding: theme.spacing(2),
	paddingTop: '20vh',
}));

const MainHeading = () => {

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('md'));

	return (
		<MainTypography
				align='center' variant={matches ? 'h1' : 'h3'}>
			<motion.div
				initial={{ opacity: 0, y: 300, scale: 0.2, }}
				animate={{ opacity: 1, y: 0, scale: 1, }}
				transition={{ duration: 0.3 }}
			>
				<Box style={{display: 'fixed'}}>&#127801;</Box>
				<Typed
					strings={['apextype']}
					typeSpeed={60}
					startDelay={1250}
				/>
				<Quote />
				<ScrollDown />
			</motion.div>
		</MainTypography>
	);

}

export default MainHeading;
