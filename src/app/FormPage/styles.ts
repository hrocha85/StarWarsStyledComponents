import styled from 'styled-components';

// Componentes estilizados para a página principal
export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-image: url('../../public/img/fundos/glowing-spaceship-orbits-sphere-deep-space-generated-by-ai 1.png');
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

export const CompanyLogo = styled.img`
  max-width: 200px;
  height: auto;
  margin-bottom: 20px;
`;

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
`;

export const RocketImage = styled.img`
  max-width: 400px;
  display: flex;
  border-radius: 20px 0px 0px 20px;
`;

export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  max-height: 400px;
  border-radius: 0px 20px 20px 0px;
  padding: 5%;
  background-color: #000000b2;
`;

export const Title = styled.div`
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
  background: #DE1212;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5%;
`;

export const DisabledSearchButton = styled(SearchButton)`
  cursor: not-allowed;
  opacity: 0.6;
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
`;

export const BoxIconSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  color: #ffffff;
`;

export const BoxIconSearchLabel = styled.label`
  color: #ffffff;
  margin: 5px;
  font-size: 14px;
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
`;

export const ErrorMessageText = styled.p`
  font-size: 16px;
`;

export const ErrorDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 20px;
`;
