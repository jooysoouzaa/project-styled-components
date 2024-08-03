import styled from "styled-components";

export const GithubSecao = styled.div`
padding: 32px 0 64px 0;
display: flex;
flex-wrap: wrap;
gap: 16px;

@media only screen and (max-width: 768px){
justify-content: center;

}

img{
height: 140px;

@media only screen and (min-width: 769px) and (max-width: 885px){
height: 114px;

}
@media only screen and (max-width: 767px){
height: auto;
margin: 0 auto;
margin-bottom: 8px;
width: 100%;
}

`
