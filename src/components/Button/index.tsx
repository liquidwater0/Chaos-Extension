import "./index.scss";
import { Button as AriaButton } from "react-aria-components";
import type { ButtonProps as AriaButtonProps } from "react-aria-components";

interface ButtonProps extends AriaButtonProps {}

export default function Button({
    className = "",
    children,
    ...props
}: ButtonProps) {
    return (
        <AriaButton
            className={`button ${className}`}
            { ...props }
        >
            { children }
        </AriaButton>
    );
}