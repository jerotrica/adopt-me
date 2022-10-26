import { createContext } from "react";

// const [theme, setTheme] = useState("darkBlue");
//we're imitating a useState hook ,that is why is the empty function
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
