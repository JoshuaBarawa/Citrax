import styled from "styled-components";

export const StyledFlex = styled.div`

display: flex;
align-items: center;

& > div,
& > div{
    flex: 1;
    height: 100vh;
    max-width: 100%;
}

.right{
    background-color: rgba(21, 95, 6, 0.726); 

}

.cards{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
}
@media only screen and (max-width: 800px){
    flex-direction: column;
} 
`

