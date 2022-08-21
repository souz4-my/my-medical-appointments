import { createGlobalStyle } from 'styled-components'

import EastmanAlternateBold from 'assets/fonts/EastmanAlternate/Bold.otf'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'EastmanAlternateBold';
    src: url(${EastmanAlternateBold}) format('opentype');
  }

	*, :after, :before {
		font-family: ${({ theme }) => theme.fonts.primary};
		color: ${({ theme }) => theme.colors.text.primary};
		box-sizing: border-box;
		padding: 0rem;
		margin: 0rem;
	}

	html, body, #root {
		height: 100vh;
		width: 100vw;
	}

	button, input, select, textarea {
		background: none;
		outline: none;
		border: none;
	}
  
	button, label {
		cursor: pointer;
	}
`