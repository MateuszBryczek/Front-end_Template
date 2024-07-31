import { 
    DropdownItem,
    DropdownList,
} from "./styled";

const Dropdown = ({ sections, scrollToSection }) => {
    return (
        <DropdownList>
            {sections.map(({ id, name }) => (
                <DropdownItem key={id} onClick={() => scrollToSection(id)}>
                    {name}
                </DropdownItem>
            ))}
        </DropdownList>
    );
};

export default Dropdown;