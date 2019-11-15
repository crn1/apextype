import { motion } from 'framer-motion';

import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import Typed from 'react-typed';

const Container = styled(Box)({
	margin: 0,
	position: 'fixed',
	top: '30%',
	left: '50%',
	transform: 'translate(-50%, -30%)',
	width: '100%',
});

const RoseLogo = styled(Box)(({ theme }) => ({
	marginRight: theme.spacing(2),	
	display: 'inline',
}));

const TitleDescription = () => {
	const theme = useTheme();

	return (
		<motion.div
			style={{opacity: 0}}
		>
			<Typography style={{marginTop: theme.spacing(8)}} variant='body1'>
				<Typed
					strings={['“The happiest moment I felt; is that moment when I realized my ability to create.”']}
					typeSpeed={10}
					showCursor={false}
				/>
			</Typography>
		</motion.div>
	);
} 

const MainHeading = () => {

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<Container>
			<Typography
					align='center' variant={matches ? 'h1' : 'h3'}>
				<motion.div
					initial={{ opacity: 0, y: 150, }}
					animate={{ opacity: 1, y: 0, }}
					transition={{ duration: 0.3 }}
				>
					<RoseLogo>&#127801;</RoseLogo> 
					<Typed
						strings={['apextype']}
						typeSpeed={70}
					/>
					<TitleDescription />
				</motion.div>
			</Typography>
		</Container>
	);

}

export default MainHeading;
