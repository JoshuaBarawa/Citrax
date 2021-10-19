import styled from "styled-components";

const StyledAbout = styled.div`
text-align: center;

#slogan h2 , #our-team h2{
color: #00FF00;
font-weight: bold;
font-size: 3.5em;
}

.cards{
    margin-top: 50px;
     }

 #item img{
    border: 1px black solid;
    border-radius: 100% 100%;
    height: 200px;
    width: 200px;
    margin-right: 0px;
}

.right h2{
    color: #fff;
    font-weight: bold;
    font-size: 3.5em;
    }

#item p, #partner p{
    font-size: 15px;
 }

 #partner p{
    color:#fff;
 }

 

 #partner img{
    border:none;
    height: 300px;
    width: 200px;
    margin-right: 0px;
    background-color: #fff;
}

`
 

export default StyledAbout;