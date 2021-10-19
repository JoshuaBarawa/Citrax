import styled from "styled-components";


export const StyledNavbar = styled.nav`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,400&display=swap');

img{
    width:200px;
}
li {
    list-style: none;
}

.nav-link{
    font-size:15px !important;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px 0px 40px;
}

.hamburger {
    display: none;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #00FF00;
}

.nav-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.nav-item {
    margin: auto;
}

.nav-link{
    font-size: 1.6rem;
    font-weight: bold;
    color: #475569;
}

.nav-link:hover{
    color:#00FF00;
}

@media only screen and (max-width: 850px) {
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 5rem;
        flex-direction: column;
        background-color: #fff;
        width: 100%;
        border-radius: 10px;
        text-align: center;
        transition: 0.3s;
        box-shadow:
            0 10px 27px rgba(0, 0, 0, 0.05);
    }

    .nav-menu.active {
        left: 0;
    }

    .nav-item {
        margin: 2.5rem 0;
    }

    .hamburger {
        display: block;
        cursor: pointer;
    }

    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }


}

.nav-link-active{
    color:#00FF00;
}

`