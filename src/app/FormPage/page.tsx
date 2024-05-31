'use client'
import { NextPage } from "next";
import Form from "../components/InputCompoent";
import DataContext from "../context/DataContext";
import { useContext, useMemo } from "react";


import React, { useEffect, useState } from "react";
import Image from "next/image";

import logoBranco from '../../app/public/img/logos/versao_1_branco.png'
import logoPreto from '../../app/public/img/logos/versao_2_preto.png';
import imgFogrete from '../../app/public/img/fundos/spaceship5 1.png';
import imgFundo from '../../app/public/img/fundos/creative-mars-collage 1.png';
import filmIcon from '../../app/public/img/icons/Group_3568.svg';
import Api from '../../app/axiosConfig';

//Imagens Planets 

import Naboo from "../../app/public/img/planetas/planeta_0001_naboo.png";
import Mustafar from "../../app/public/img/planetas/planeta_0002_mustafar.png";
import Kashyyyk from "../../app/public/img/planetas/planeta_0003_kashyyyk.png";
import Noth from "../../app/public/img/planetas/planeta_0004_hoth.png";
import Endor from "../../app/public/img/planetas/planeta_0005_endor.png";
import Dagobah from "../../app/public/img/planetas/planeta_0006_dagobah.png";
import Coruscant from "../../app/public/img/planetas/planeta_0007_coruscant.png";
import Bespin from "../../app/public/img/planetas/planeta_0008_bespin.png";
import Alderaan from "../../app/public/img/planetas/planeta_0009_alderaan.png";
import Tatooine from "../../app/public/img/planetas/planeta_0000_tatooine.png";

import InputComponent from "../components/InputCompoent";

import {
  HomePageContainer,
  TitleLogo,
  Content,

  MainContent,
  LeftColumn,

  RightColumn,
  Title,
  BoxSearch,
  SearchInput,
  SearchButton,
  NewSearchButton,
  Footer,
  FooterText,
  BoxIconSearch,
  ColoredBackground,
  GridContainer,
  VerticalTopLeft,
  VerticalTopRight,
  InfosTitleRight,
  PlanetTitle,
  HorizontalBottomLeft,
  HorizontalBottomRight,
  DivTitle,
  ResidentsInfo,
  EditButton,
  SaveButton,

  ErrorMessage,
  ErrorMessageTitle,
  ErrorMessageText,
  ErrorDescription,
} from './styles';





function FormPage() {
  const { dataInformation, setDataInformation } : any = useContext(DataContext);

  const [showPlanet, setShowPlanet] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);


  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState('');

  const [residents, setResidents] = useState<string[]>([]);
  const [films, setFilms] = useState<string[]>([]);

  const [planetName, setPlanetName] = useState("");


  const [allData, setAllData] = useState<object[]>([]);

  const planetImages: any = {
    Naboo,
    Mustafar,
    Kashyyyk,
    Noth,
    Endor,
    Dagobah,
    Coruscant,
    Bespin,
    Alderaan,
    Tatooine
  };


  function getPlanetImage(planetName: any) {
    const image = planetImages[planetName];
    if (!image) {
      console.error(`imagem não entencontrada: ${planetName}`);
      return null;
    } else {
      console.log("entrou em imagem");
      return image;
    }

  }


  useEffect(() => {
    // Função para buscar dados da API All planets
    async function fetchData() {
      try {
        const response = await Api.get(`/planets`);
        console.log("Objet", response);
        // const result = await response;
        setAllData(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setLoading(false);
      }
    }

    // Chama a função para buscar dados
    fetchData();
  }, []); // 



  const searchResult = useMemo(() => {
    return encontrarObjetoPorInformacao(allData, search);
  }, [allData, search]);
  
  function encontrarObjetoPorInformacao(rede: any, informacao: any) {

    return rede.find((objeto: { [s: string]: unknown; } | ArrayLike<unknown>) => {
      return Object.values(objeto).some(valor => valor?.toString().toLowerCase().includes(informacao.toLowerCase()));
    });

  }

  const handleEditClick = () => {
    setEditing(true);

  };

  const handleSaveClick = () => {
    // Lógica para salvar o nome do planeta atualizado
    setEditing(false);
  };

  // Função para lidar com a mudança na entrada de pesquisa
  const handleInputChange = (e: any) => {
    setSearch(e.target.value);
  };

  // Função para lidar com a mudança na opção selecionada
  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  const getInformation = async () => {
    setDataInformation(searchResult);
    setShowPlanet(true);
  
    if (searchResult) {
      await getResidents(searchResult.residents);
      await getFilms(searchResult.films);
    }
  };
  

  const getResidents = async (urls: any) => {
    try {
      const promises = urls.map(async (url: any) => {
        const path = url.replace('https://swapi.dev/api/', '');
        const response = await Api.get(path);
        return response.data.name;
      });

      const names = await Promise.all(promises);
      setResidents((prevResidents) => [...prevResidents, ...names]);
    } catch (error) {
      console.error('Erro ao obter dados dos residentes:', error);
    }
  };

  const getFilms = async (urls: any) => {
    try {
      const promises = urls.map(async (url: any) => {
        const path = url.replace('https://swapi.dev/api/', '');
        const response = await Api.get(path);
        return response.data.title;
      });

      const titles = await Promise.all(promises);
      setFilms((prevFilms) => [...prevFilms, ...titles]);
    } catch (error) {
      console.error('Erro ao obter dados dos filmes:', error);
    }
  };




// Função para renderizar a tela de erro
const renderErrorScreen = () => {
  return (
    <GridContainer>
      <ErrorMessage>
        <ErrorMessageTitle>Nenhum resultado encontrado</ErrorMessageTitle>
        <ErrorMessageText>Não conseguimos encontrar nenhum resultado correspondente à sua pesquisa.</ErrorMessageText>
        <ErrorDescription>Tente novamente com termos de pesquisa diferentes.</ErrorDescription>
      </ErrorMessage>
    </GridContainer>
  );
};


// Função para renderizar a tela inicial
const renderDefaultScreen = () => {
  return (
    <Content>
      <MainContent>
        <LeftColumn>
          <Image src={imgFogrete} alt="Imagem 1" style={{ height:"200px",display: 'flex', position: "absolute", paddingRight: "200px", zIndex: 1 }} />
          <Image src={imgFundo} alt="Imagem 2" className="rocketImage" />
        </LeftColumn>
        <RightColumn>
          <Title>Discover all the information about Planets of the Star Wars Saga</Title>
          <BoxSearch>
            <SearchInput
              type="text"
              placeholder="Enter the name in the planet"
              onChange={handleInputChange}
            />
            <SearchButton disabled={selectedOption == "" || search == ""} onClick={() => { getInformation() }}>
              <span className="material-symbols-outlined">search</span>Search
            </SearchButton>
          </BoxSearch>
          <div style={{ display: "flex", paddingTop: 4 }}>
            <BoxIconSearch>
              <span className="material-symbols-outlined">tune</span>
              <p style={{ marginRight: 5 }}>Filter: </p>
            </BoxIconSearch>

            <BoxIconSearch>
              <input
                type="radio"
                id="option1"
                name="options"
                value="planets"
                checked={selectedOption === 'planets'}
                onChange={handleOptionChange}
              />
              <label htmlFor="option1">planets</label>
            </BoxIconSearch>

            <BoxIconSearch>
              <input
                type="radio"
                id="option2"
                name="people"
                value="people"
                checked={selectedOption === 'people'}
                onChange={handleOptionChange}
              />
              <label htmlFor="option2">Population</label>
            </BoxIconSearch>
          </div>
        </RightColumn>
      </MainContent>
    </Content>
  );
};


// Função para renderizar a tela de resposta da pesquisa
const renderSearchResponse = (info: any) => {
  if (info == undefined) {
    return renderErrorScreen();
  } else {
    return (
      <GridContainer key={1}>
        <div style={{ display: "flex", width: "100%", justifyContent: "center", marginBottom: 24 }}>
          <VerticalTopLeft>
            <Image width={74} src={getPlanetImage(info.name)} alt="PLANET" style={{ marginLeft: 10, marginRight: 10 }} />
            <div>
              <p>Planet:</p>
              {editing ? (
              <InputComponent
                InputType="text"
                InputValue={planetName}
                InputOnChange={(e) => setPlanetName(e.target.value)}
                InputPlaceholder= "Nome do planeta" />
              ) : (
                planetName === "" ? <PlanetTitle>{info.name}</PlanetTitle> : <PlanetTitle>{planetName}</PlanetTitle>
              )}
              {editing ? (
                <SaveButton onClick={handleSaveClick}>Salvar</SaveButton>
              ) : (
                <EditButton onClick={handleEditClick}>Editar</EditButton>
              )}
            </div>
          </VerticalTopLeft>
          <VerticalTopRight>
            <InfosTitleRight>
              <span className="material-symbols-outlined">device_thermostat</span>
              <h4> Clima:</h4>
              <p>{info.climate}</p> {/* Altere para o campo correto do clima */}
            </InfosTitleRight>
            <InfosTitleRight>
              <span className="material-symbols-outlined">landscape</span>
              <h4>Solo: </h4>
              <p>{info.terrain}</p> {/* Altere para o campo correto do solo */}
            </InfosTitleRight>
            <InfosTitleRight>
              <span className="material-symbols-outlined">groups</span>
              <h4>População:</h4>
              <p>{info.population}</p> {/* Altere para o campo correto da população */}
            </InfosTitleRight>
          </VerticalTopRight>
        </div>

        <div style={{ alignContent: "center", justifyItems: "center" }}>
          <HorizontalBottomLeft>
            <ResidentsInfo>
              <DivTitle>
                <span className="material-symbols-outlined">person</span>
                <h4>Residents: </h4>
              </DivTitle>
              <p>{residents !== undefined ? residents?.join(", ") : null}</p>
            </ResidentsInfo>
          </HorizontalBottomLeft>

          <HorizontalBottomRight>
            <DivTitle>
              <Image src={filmIcon} alt="PLANET" />
              <h4>Filmes:</h4>
            </DivTitle>
            <p>{films !== undefined ? films?.join(", ") : null}</p>
          </HorizontalBottomRight>
        </div>
      </GridContainer>
    );
  }
};



  if (loading) {
    return <div>Carregando...</div>;
  } else

  return (
    <HomePageContainer>
    
        <div>
          <TitleLogo>PLANET SEARCH</TitleLogo>
          <Image width={321.55} src={logoBranco} alt="Logo da Empresa" style={{ marginTop: '20%' }} />
        </div>

        {showPlanet ? (
          <NewSearchButton onClick={() => {
            setShowPlanet(false);
            setFilms([]);
            setResidents([])
            setPlanetName('')
            setEditing(false);
          }}>
            <span className="material-symbols-outlined">search</span> Nova pesquisa
          </NewSearchButton>
        ) : null}
        
        <Content>
          {showPlanet ? renderSearchResponse(dataInformation) : renderDefaultScreen()}
        </Content>
        
        <Footer>
          <FooterText>CNPJ: STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos reservados</FooterText>
          <Image src={logoPreto} alt="Logo da Empresa" style={{ paddingLeft: 20 }} />
        </Footer>

    </HomePageContainer>
  );
}

export default FormPage;