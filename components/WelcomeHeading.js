import { motion } from 'framer-motion';

import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import Typed from 'react-typed';

const Description = () => (
	<Typography style={{marginTop: '5vh'}} variant='body1'>
		My name is Đorđe and I am a full-stack developer from Novi Sad, Serbia.
		<Typography style={{marginTop: '5vh'}} variant='body1'>
			I take a special approach to the development that involves minimalism with the emphasis on stability, peformance and scability.
		</Typography>
	</Typography>
);

const WelcomeTypography = styled(Typography)(({ theme }) => ({
	padding: theme.spacing(2),
	paddingTop: '20vh',
}));

const MainHeading = () => {

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<WelcomeTypography
				align='center' variant={matches ? 'h2' : 'h4'}>
			<Typed
				strings={['Welcome.']}
				typeSpeed={0}
			/>
			<Description />
		</WelcomeTypography>
	);

}

export default MainHeading;
