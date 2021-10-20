import styled from "styled-components";

 const StyledContact = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 80px;

 background: url("../commons/images/logo background.png");
 background-size: 500px 500px;
 background-repeat: no-repeat;
 

 form{
     width: 650px;
     height: 500px;
     border: 1px #32CD32 solid;
     align-self: center;
 }

 .form-control{
    border: 1px #32CD32 solid;
    font-size: 15px;
 }

 .form-control:focus{
    outline-style: none;
    box-shadow: none;
 }

 .form-group {
     width: 90%;
     margin: 20px auto;    
 }

label{
    font-size: 15px;
}

label span{
    font-size: 15px;
    opacity: 0.5;
}

#attachment{
    font-size: 15px;
    margin-left: 30px;
}


#btn{
    width: 90%;
    margin: 20px 30px;    
    background-color: #32CD32;
    text-align: left;
    border: 1px #32CD32 solid;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
    padding: 5px 10px 5px 10px;
}

#social-icons{
    margin-top: 50px;
    position: relative;
    left: 10%;
}

#social-icons img, span{
    margin-right: 20px;

}
 `
 
export default StyledContact;