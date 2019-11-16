import { motion } from 'framer-motion';

import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import Typed from 'react-typed';

const RoseLogo = styled(Box)(({ theme }) => ({
	marginRight: theme.spacing(2),	
	display: 'inline',
}));

const Quote = () => {
	const theme = useTheme();

	return (
		<Typography style={{marginTop: theme.spacing(8)}} variant='body1'>
			<Typed
				strings={['“The happiest moment I felt; is that moment when I realized my ability to <b>create</b>.”']}
				typeSpeed={3}
				showCursor={false}
				startDelay={2500}
			/>
		</Typography>
	);
} 

const ScrollDown = () => {
	const theme = useTheme();

	return (
		<Typography style={{marginTop: theme.spacing(32)}} variant='body1'>
			<Typed
				strings={['SCROLL DOWN &#8897;']}
				typeSpeed={10}
				showCursor={false}
				startDelay={3300}
			/>
		</Typography>
	);
} 

const TitleTypography = styled(Typography)(({ theme }) => ({
	padding: theme.spacing(2),
	paddingTop: theme.spacing(24),
}));

const MainHeading = () => {

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<TitleTypography
				align='center' variant={matches ? 'h1' : 'h3'}>
			<motion.div
				initial={{ opacity: 0, y: 300, scale: 0.2, }}
				animate={{ opacity: 1, y: 0, scale: 1, }}
				transition={{ duration: 0.3 }}
			>
				<RoseLogo>&#127801;</RoseLogo> 
				<Typed
					strings={['apextype']}
					typeSpeed={60}
					startDelay={1250}
				/>
				<Quote />
				<ScrollDown />
			</motion.div>
		</TitleTypography>
	);

}

export default MainHeading;
