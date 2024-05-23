import styled from 'styled-components';
import myImage from '../../app/public/img/fundos/fundo_orbita.png'

export const HomePageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 100vh;
background-image: url(${myImage})
background-size: cover;
background-position: center;
padding-top: 2%;
`;


export const TitleLogo = styled.p`
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 400;
  line-height: 19.5px;
  letter-spacing: 0.155em;
  text-align: center;
  color: #ffffff;
`;

export const CompanyLogo = styled.image`
  max-width: 200px;
  height: auto;
  margin-bottom: 20px;
`;


export const RocketImage = styled.image`
  max-width: 400px;
  display: flex;
  border-radius: 20px 0px 0px 20px;
`;



export const NewSearchButton = styled.button`
  padding: 10px;
  height: 40px;
  background: #FFFFFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5%;
  color:#000000;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #f0f0f0;
  padding: 20px 20px;
  margin-bottom: 0;
`;

export const FooterText = styled.p`
  font-size: 14px;
  color: #000000;
`;


export const ColoredBackground = styled.div`
  background-color: black;
`;

// Componentes estilizados para a renderização da tela de erro
export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  color: #333;
`;

export const ErrorMessageTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #000000;
`;

export const ErrorMessageText = styled.p`
  font-size: 16px;
  color: #000000;
`;

export const ErrorDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 20px;
`;



////


export const Content = styled.div`
  border-radius: 20px;
`;

export const MainContent = styled.div`
  box-sizing: content-box;
  display: flex;
  max-width: 800px;
  max-height: 400px;
`;

export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  max-width: 400px;
  max-height: 400px;

  .rocketImage {
    max-width: 400px;
    display: flex;
    border-radius: 20px 0px 0px 20px;
  }
`;

export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  max-height: 400px;
  padding: 5%;
  background-color: #000000b2;
  border-radius: 0px 20px 20px 0px;
`;

export const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  text-align: center;
  color: white;
  word-break: break-word;
  padding: 2%;
`;

export const BoxSearch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  width: 80%;
  height: 40px;
  gap: 0px;
  border-radius: 5px;
  padding-left: 2%;
  text-align: center;
`;

export const SearchButton = styled.button`
  width: 80%;
  height: 40px;
  background: #de1212;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5%;
  
  &:disabled {
    background: #de1212;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: not-allowed;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5%;
    opacity: 0.6;
  }
`;

export const BoxIconSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  color: #ffffff;

  label {
    color: #ffffff;
    margin: 5px;
    font-size: 14px;
  }
`;

///

export const GridContainer = styled.div`
  margin-top: 20px;
  width: 600px;
  height: 400px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 16px;
  justify-content: center;
  align-content: center;
  margin-buttom: 20px;
`;

export const VerticalTopLeft = styled.div`
  display: flex;
  width: 50%;
  align-items: center;

  p {
    margin-left: 5px;
    color: #000000;
  }
`;

export const VerticalTopRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const InfosTitleRight = styled.div`
  display: flex;
  color: #000000;
  align-items: center;

  span {
    margin-right: 5px;
    color: #000000;
  }

  h4 {
    font-weight: bold;
    margin-left: 5px;
    color: #000000;
  }

  p {
    margin-left: 5px;
    color: #000000;
  }
`;

export const PlanetTitle = styled.p`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bolder;
  line-height: 21.94px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
`;

export const HorizontalBottomLeft = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  padding: 9px 24px 24px 24px;
  border-radius: 20px;
  background-color: #f1f1f1;
`;

export const HorizontalBottomRight = styled.div`
  margin-top: 6px;
  height: 50%;
  display: flex;
  flex-direction: column;
  padding: 9px 24px 24px 24px;
  border-radius: 20px;
  background-color: #f1f1f1;

  p{
    color:#000000;
  }
`;

export const DivTitle = styled.div`
  display: flex;
  border-bottom: 1px solid #000000;
  padding: 2px 4px 4px 2px;
  color: #000000;

  p {
    font-size: 12px;
    color: #000000;
  }

  .material-icons-outlined {
    margin-right: 5px;
    color: #000000;
  }
`;

export const ResidentsInfo = styled.div`
  display: flex;
  flex-direction: column;

  p{
    color: #000000;
  }
`;

export const EditButton = styled.button`

  cursor: pointer;
  
`;

export const SaveButton = styled.button`
 
  cursor: pointer;
`;
