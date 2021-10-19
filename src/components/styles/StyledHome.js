import styled from "styled-components";

const StyledHome = styled.div`

img{
width:180%;
}

p{
    font-size: 3.5em;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
   margin-top: 150px;
   color: #fff;
}

.btns{
    display: flex;
    justify-content: space-around;
    margin-top: 50px;  
}

#lnk{
    background-color: #fff;
    padding: 15px 20px 15px 20px;
    border-radius: 25px 25px;
    cursor: pointer;
    text-decoration: none;
    color: #00FF00;
    font-weight: bold;
    font-size: 15px;
}


`
export default StyledHome;