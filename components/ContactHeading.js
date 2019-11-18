import { motion } from 'framer-motion';

import { styled, makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import EmailIcon from '@material-ui/icons/Email';

import Typed from 'react-typed';

const Contacts = () => {

	const useStyles = makeStyles(theme => ({
		icon: {
			width: 32,
			height: 32,
			marginRight: theme.spacing(2),
		},
	}));

	const classes = useStyles();

	return (
		<Typography style={{marginTop: '5vh'}} variant='body1'>
			Feel free to contact me via:
			<Grid item container spacing={1} xs style={{ marginTop: '5vh' }}>
				<Grid item xs={12} md={4}>
					<Link href='mailto:gluvajic@aol.com'>
						<Button fullWidth size='large'>
							<EmailIcon className={classes.icon} />
							Email
						</Button>
					</Link>
				</Grid>
				<Grid item xs={12} md={4}>
					<Link href='https://www.linkedin.com/in/sigma-dorde'>
						<Button fullWidth size='large'>
							<img className={classes.icon} src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" />
							LinkedIn
						</Button>
					</Link>
				</Grid>
				<Grid item xs={12} md={4}>
					<Link href='https://github.com/crn1'>
						<Button fullWidth size='large'>
							<img className={classes.icon} src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" />
							GitHub
						</Button>
					</Link>
				</Grid>
			</Grid>
		</Typography>
	);
};

const ContactTypography = styled(Typography)(({ theme }) => ({
	padding: theme.spacing(2),
	paddingTop: '20vh',
}));

const ContactHeading = () => {

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<ContactTypography
				align='center' variant={matches ? 'h2' : 'h4'}>
			<Typed
				strings={['Say Hello.']}
				typeSpeed={0}
			/>
			<Contacts />
		</ContactTypography>
	);

}

export default ContactHeading;
