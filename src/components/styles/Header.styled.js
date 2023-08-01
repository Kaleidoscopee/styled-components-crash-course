import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    padding:40px 0;

    h1 {
        color: black;
    }

    // &:hover { //makes it so that the color changes once the mouse hovers over
    //     background-color: black;
    // }
`