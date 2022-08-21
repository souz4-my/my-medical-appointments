import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		fonts: {
			primary: string
			emphasis: string
		}
		colors: {
      background: {
        primary: string
				secondary: string
			}
			text: {
        primary: string
				secondary: string
        emphasis: string
			}
		}
	}
}