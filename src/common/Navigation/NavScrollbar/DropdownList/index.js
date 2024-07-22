import { 
    DropdownItem,
    DropdownList,
} from "./styled";

const Dropdown = ({ sections, scrolltoSection }) => {
    return (
        <DropdownList>
            {sections.map((sectionId) => (
                <DropdownItem key={sectionId} onClick={() => scrolltoSection(sectionId)}>
                    {sectionId}
                </DropdownItem>

            ))}
        </DropdownList>
    );
};

export default Dropdown;