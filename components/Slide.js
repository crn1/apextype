import { styled } from '@material-ui/core/styles'
import { motion } from 'framer-motion'
import Grid from '@material-ui/core/Grid'

const GridWrapper = (props) => (
	<Grid container style={{ position: 'fixed' }} justify='center'>
		<Grid item xs={12} sm={10} md={6} lg={5}>
			{ props.children }
		</Grid>
	</Grid>
)

const StyledMotionDiv = styled(motion.div)({
	position: 'fixed',
	width: '100vw',
})

const Slide = props => (
	<StyledMotionDiv {...props}>
		<GridWrapper>
			{ props.children }
		</GridWrapper>
	</StyledMotionDiv>
)

export default Slide;
