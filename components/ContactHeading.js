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

const ContactItem = (props) => (
	<Grid item xs={12} md={4}>
		<Link href={props.href}>
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
		<Grid container xs
				justify='center'>
			<Grid item container
					spacing={1}
					xs={12} md={10}
					style={{ marginTop: '5vh' }}>
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
			</Grid>
		</Grid>
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
			Say Hello.
			<Typography style={{marginTop: '5vh'}} variant='body1'>
				Feel free to contact me via:
			</Typography>
			<Contacts />
		</ContactTypography>
	);

}

export default ContactHeading;
