import { createContext, useState } from 'react'
import { Appearance } from 'react-native'

export const themes = {
    light: {
        background: '#FFFFFF',
        text: '#000000',
        button: '#007AFF',
        border: '#E5E5E5',
    },
    dark: {
        background: '#000000',
        text: '#FFFFFF',
        button: '#0A84FF',
        border: '#333333',
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {
    const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme() || 'light')

    const theme = colorScheme === 'dark' ? themes.dark : themes.light

    return (
        <ThemeContext.Provider value={{
            colorScheme,
            setColorScheme,
            theme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}