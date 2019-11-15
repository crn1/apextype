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
			<title>&#127801; apextype</title>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta charSet='utf-8' />
			<link href="https://fonts.googleapis.com/css?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
		</Head>
		<MuiThemeProvider theme={theme}>
			{ props.children }	
		</MuiThemeProvider>
		<style jsx global>{`
			html, body, #__next {
				margin: 0;
				width: 100%;
				height: 100%;
				-webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
				font-family: "Share Tech Mono";
			}
		`}
		</style>
	</>
);

export default Layout;
