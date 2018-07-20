import { createThemedComponent } from "../utils";
import PlainButton from "./Button";

import theme from "./theme.scss";

const ThemedButton = createThemedComponent("Button", PlainButton, theme);

export default ThemedButton;
export { PlainButton };
export { ThemedButton as Button };
