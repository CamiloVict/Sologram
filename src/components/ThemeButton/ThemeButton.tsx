import styled from "styled-components"
// import { useItemContext } from '../../context/ItemContext';

const Button = styled.button`color: ${({ theme }) => theme.text};}`

const Toggle = ({ toggleTheme }) => {
    //Call context variables and functions
    // const { mode } = useItemContext()
    //Change light/dark mode
    function handleClick(){
        toggleTheme()
        //Used in context to change NavMobil
        // mode()
    }
    return (
        <Button onClick={handleClick} className="moon">
          ☪
        </Button>
    );
};

export default Toggle;