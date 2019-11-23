import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'

import Typed from 'react-typed'

const MainHeading = () => {

	const theme = useTheme()

	return (
	<Grid container justify='center'>
		<Grid container item
				spacing={4}
				xs={12} md={6} xl={4}>

				<Grid item xs={12}>
					<Typography align='center'>
						<Typed
							strings={['“The happiest moment I felt; is that moment when I realized my ability to <b>create</b>.”']}
							typeSpeed={3}
							showCursor={false}
							startDelay={2500}
						/>
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<Typography align='center' style={{paddingTop: theme.spacing(8)}}>
						<Typed
							strings={['SCROLL DOWN']}
							typeSpeed={10}
							showCursor={false}
							startDelay={3500}
						/>
					</Typography>
				</Grid>

		</Grid>
	</Grid>
	)
}

export default MainHeading
