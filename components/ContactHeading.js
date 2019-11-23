import { motion } from 'framer-motion';

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import EmailIcon from '@material-ui/icons/Email';

const ContactItem = (props) => (
	<Grid item xs={12} md={4}>
		<Link underline='none' href={props.href}>
			<Button fullWidth size='large'>
				{ props.icon }
				{ props.text }
			</Button>
		</Link>
	</Grid>
) 

const Contacts = () => {

	const useStyles = makeStyles(theme => ({
		icon: {
			width: 32,
			height: 32,
			paddingRight: theme.spacing(2),
		},
	}));

	const classes = useStyles();

	return (
			<>
				<ContactItem
					href='mailto:gluvajic@aol.com'
					icon={<EmailIcon className={classes.icon} />}
					text='Email'
				/>
				<ContactItem
					href='https://www.linkedin.com/in/sigma-dorde'
					icon={<img
						className={classes.icon}
						src='https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg'
					/>}
					text='LinkedIn'
				/>
				<ContactItem
					href='https://github.com/crn1'
					icon={<img
						className={classes.icon}
						src='https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg'
					/>}
					text='GitHub'
				/>
			</>
	);
};

const ContactHeading = () => {

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('md'));

	return (
		<Grid container justify='center'>
			<Grid container item
					spacing={4}
					justify='center'
					xs={12} md={6} xl={4}>

				<Grid item xs={12}>
					<Typography align='center' component='h2' variant={matches ? 'h2' : 'h4'}>
						Say Hello
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<Typography align='center'>
						Feel free to contact me via:
					</Typography>
				</Grid>

				<Grid container item xs={12}>
					<Contacts />
				</Grid>

			</Grid>
		</Grid>
	);
}

export default ContactHeading;
