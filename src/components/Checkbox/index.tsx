import "./index.scss";
import { 
    Checkbox as AriaCheckbox,
    type CheckboxProps as AriaCheckboxProps
} from "react-aria-components";
import { Check, Dash } from "react-bootstrap-icons";

interface CheckboxProps extends AriaCheckboxProps {}

export default function Checkbox({
    className = "",
    ...props
}: CheckboxProps) {
    return (
        <AriaCheckbox 
            className={`checkbox ${className}`}
            { ...props }
        >
            { props.isIndeterminate ? <Dash /> : <Check /> }
        </AriaCheckbox>
    );
}