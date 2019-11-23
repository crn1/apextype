import { useTheme } from '@material-ui/core/styles'
import Typed from 'react-typed'
import { motion } from 'framer-motion'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Typography from '@material-ui/core/Typography'

const MainLogo = () => {
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('md'))
	
	return (
		<motion.div
			style={{ paddingDown: theme.spacing(12) }}
			initial={{ opacity: 0, y: 300, scale: 0.1, }}
			animate={{ opacity: 1, y: 0, scale: 1, }}
			transition={{ duration: 0.3 }}
		>
			<Typography
					align='center' variant={matches ? 'h1' : 'h3'}>
				<Typed
					strings={['apextype']}
					typeSpeed={60}
					startDelay={1250}
				/>
			</Typography>
		</motion.div>
	);
}

export default MainLogo
