import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles} from 'twin.macro'
import 'tailwindcss/tailwind.css'

const CustomStyles = createGlobalStyle`
  *, *::before, *::after {
    ${tw`
      m-0
      p-0
      box-border
      outline-none
    `}
  }

  body {
    ${tw`
      bg-gradient-to-r from-blue-400 to-green-500
      h-screen
      w-screen
      text-gray-900
      antialiased
      font-normal
      font-sans
    `}
  }
`

// const CssStyles = createGlobalStyle`
//     :root {
//     --color-background: ${props => props.theme.colors.background};
//     --color-text: ${props => props.theme.colors.text};
//     --color-primary: ${props => props.theme.colors.primary};
//   }
// `

const GlobalStyles = () => (
  <>
    {/* <CssStyles /> */}
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
