import "./index.scss";
import { 
    Select as AriaSelect,
    Button,
    SelectValue,
    Popover,
    ListBox ,
    ListBoxItem,
    Label,
    type SelectProps as AriaSelectProps,
    type ListBoxItemProps,
    type PopoverProps
} from "react-aria-components";
import { CaretDownFill } from "react-bootstrap-icons";

interface SelectProps extends AriaSelectProps {
    label?: string,
    placement: PopoverProps["placement"]
}
interface OptionProps extends ListBoxItemProps {}

export default function Select({
    children,
    className = "",
    label = "",
    placement,
    ...props
}: SelectProps) {
    return (
        <AriaSelect
            className={`select ${className}`}
            { ...props }
        >
            { 
                label && 
                <Label className="select-label">
                    { label }
                </Label> 
            }
            <Button className="select-button">
                <SelectValue />
                <CaretDownFill className="caret" />
            </Button>
            <Popover className="select-items" placement={placement}>
                <ListBox>
                    { children }
                </ListBox>
            </Popover>
        </AriaSelect>
    );
}

function Option({
    children,
    className = "",
    ...props
}: OptionProps) {
    return (
        <ListBoxItem
            className={`option ${className}`}
            { ...props }
        >
            { children }
        </ListBoxItem>
    );
}

Select.Option = Option;