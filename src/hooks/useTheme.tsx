import { NextPage } from "next"
import { createContext, useContext } from "react"
// import { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/global"

interface children {
  children: React.ReactNode
}

// interface themeContextProps {
//   theme: Theme
// }

const themeContext = createContext({})
export const useTheme = () => useContext(themeContext)

const ThemeContextProvider: NextPage<children> = ({ children }) => {
  return (
    <>
      {/* <ThemeProvider theme={}> */}
        {children}
        <GlobalStyles />
      {/* </ThemeProvider> */}
    </>
  )
}

export default ThemeContextProvider
