import Head from 'next/head'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import createPalette from '@material-ui/core/styles/createPalette'
import createTypography from '@material-ui/core/styles/createTypography'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createMuiTheme({
  typography: createTypography(createPalette({}), {
    fontFamily: '"Share Tech Mono"'
  }),
})

const Layout = props => (
	<html lang='en'>
		<Head>
			<title>apextype | Creating Software for the Magnificent</title>
			<link rel='shortcut icon' type='image/ico' href='/public/favicon.ico' />

			<meta name='viewport' content='minimum-scale=1, width=device-width, initial-scale=1, shrink-to-fit=no' />
			<meta name='description' content='My name is Đorđe and I am a full-stack developer from Novi Sad, Serbia. I take a special approach to the development that involves minimalism with emphasis on stability, peformance and scability.' />
			<meta name='keywords' content='fullstack developer novi sad, web developer serbia, next.js, flask, react.js, web design, landing page, page animations, framer motion developer' />
			<meta name='author' content='Dorde G.' />
			<meta charSet='utf-8' />

			<link href='https://fonts.googleapis.com/css?family=Share+Tech+Mono&display=swap' rel='stylesheet' />
		</Head>
		<body>
			<CssBaseline />
			<MuiThemeProvider theme={theme}>
				{ props.children }	
			</MuiThemeProvider>
		</body>
	</html>
)

export default Layout
