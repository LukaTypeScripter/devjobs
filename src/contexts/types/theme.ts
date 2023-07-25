export interface DarkModeContextValue {
    theme:string
    setTheme:React.Dispatch<React.SetStateAction<string>>
    switchTheme: () => void
}


export const initialContextValue: DarkModeContextValue = {
    theme:"light",
    setTheme:() => {},
    switchTheme:() => {}
};