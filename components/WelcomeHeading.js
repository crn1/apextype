import { motion } from 'framer-motion'

import { useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const WelcomeHeading = () => {

	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('md'))

	return (
		<Grid container justify='center'>
			<Grid container item
					spacing={4}
					justify='center'
					xs={12} md={6} xl={4}>

				<Grid item xs={12}>
					<Typography align='center' component='h1' variant={matches ? 'h2' : 'h4'}>
						Welcome
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<Typography align='center'>
						My name is Đorđe and I am a full-stack developer from Novi Sad, Serbia.
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<Typography align='center'>
						I take a special approach to the development that involves minimalism with the emphasis on stability, peformance and scalability.
					</Typography>
				</Grid>

			</Grid>
		</Grid>
	);

}

export default WelcomeHeading
