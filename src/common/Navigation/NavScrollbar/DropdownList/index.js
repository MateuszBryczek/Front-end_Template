import { 
    DropdownItem,
    DropdownList,
} from "./styled";
import useThemeColor from "../../../../features/useThemeColor/useThemeColor";

const Dropdown = ({ sections, scrollToSection }) => {
    const themeColor = useThemeColor();

    return (
        <DropdownList $getThemeColor={themeColor}>
            {sections.map(({ id, name }) => (
                <DropdownItem $getThemeColor={themeColor} key={id} onClick={() => scrollToSection(id)}>
                    {name}
                </DropdownItem>
            ))}
        </DropdownList>
    );
};

export default Dropdown;