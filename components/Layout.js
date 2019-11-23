import Head from 'next/head';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import createTypography from '@material-ui/core/styles/createTypography';

const theme = createMuiTheme({
  typography: createTypography(createPalette({}), {
    fontFamily: '"Share Tech Mono"'
  }),
});

const Layout = props => (
	<>
		<Head>
			<title>&#9650; apextype</title>
			<meta name='viewport' content='minimum-scale=1, width=device-width, initial-scale=1, shrink-to-fit=no' />
			<meta charSet='utf-8' />
			<link href="https://fonts.googleapis.com/css?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
		</Head>
		<body>
			<MuiThemeProvider theme={theme}>
				{ props.children }	
			</MuiThemeProvider>
		</body>
		<style jsx>{`
			body {
				margin: 0;
			}
		`}
		</style>
	</>
);

export default Layout;
