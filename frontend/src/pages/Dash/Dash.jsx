import React, { useState, useEffect, useRef } from "react";
import "../Dashboard.css";
import { fetchDataGet, fetchDataPost } from "../../controler/comunicacao.js";
import Modal from "../../components/Modal/Modal.jsx";
import ChartBar from "../../components/Charts/ChartBar.jsx";
import ChartLine from "../../components/Charts/ChartLine.jsx";
import InfoCard from "../../components/InfoCard/InfoCard.jsx";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation.jsx";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";
import DropdownItem from "../../components/Dropdown/DropdownItem.jsx";
import DropdownToolTip from "../../components/Dropdown/DropdownToolTip.jsx";

function Dash() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    fetchDataGet("/dashboard").then((res) => {
      console.log(res); // Adicione isso para ver a resposta
      setData(res);
    });
  }, []);

  return (
    <section className="container-fluid dashboard px-0">
      {/* TITULO */}
      <div className="row mb-3">
        <div className="col-12">
          <div className="titulo p-3 d-flex justify-content-between align-items-center">
            <div className="titulo-nome">Notificações por Tuberculose</div>
            <div className="filter-button" onClick={() => setFlag(!flag)}>
              Filtros
            </div>
          </div>
        </div>
      </div>

      {/* FILTROS */}
      <div className={"on " + (flag ? "show mb-3" : "hide mb-0")}>
        <div className="row on-content">
          <div className="col-12">
            <div className="titulo p-3">
              <div className="titulo-nome">Filtros</div>
            </div>
          </div>
        </div>
      </div>

      {/* BLOCOS INFORMATIVOS */}

      {/* <div className="row gx-3 gy-3 mb-3">
        <div className="col-md-6 col-lg-4 col-xl">
          <InfoCard title="Nº de Casos">
            {loading ? (
              <LoadingAnimation />
            ) : (
              <h4>{dadosNumericos.total_casos}</h4>
            )}
          </InfoCard>
        </div>
        <div className="col-md-6 col-lg-4 col-xl">
          <InfoCard title="Nº de Curas">
            {loading ? (
              <LoadingAnimation />
            ) : (
              <h4>{dadosNumericos.total_curas}</h4>
            )}
          </InfoCard>
        </div>
        <div className="col-md-6 col-lg-4 col-xl">
          <InfoCard title="Nº de Interrupções de tratamento">
            {loading ? (
              <LoadingAnimation />
            ) : (
              <h4>{dadosNumericos.total_abandono}</h4>
            )}
          </InfoCard>
        </div>
        <div className="col-md-6 col-lg-6 col-xl">
          <InfoCard title="Nº de Óbitos">
            {loading ? (
              <LoadingAnimation />
            ) : (
              <h4>{dadosNumericos.total_obitos}</h4>
            )}
          </InfoCard>
        </div>
        <div className="col-md-12 col-lg-6 col-xl">
          <InfoCard title="Nº de TB Multirresistente">
            {loading ? (
              <LoadingAnimation />
            ) : (
              <h4>{dadosNumericos.total_tb_multirresistente}</h4>
            )}
          </InfoCard>
        </div>
      </div> */}

      {/* CARDS */}

      <div className="row gx-3 mb-3">
        {/* CARD RACA */}

        <div className="col-sm-12 col-md-12 col-lg-6 mb-3 m-md-0">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="m-0">Raça</h5>

              <div className="d-inline-flex align-items-center">
                <DropdownToolTip>
                  <p className="mb-2">
                    Utilize o gráfico para visualizar a distribuição de casos
                    por raça.
                  </p>
                  <p className="mb-2">
                    Passe o cursor sobre as barras do gráfico para ver detalhes
                    específicos sobre a porcentagem de casos em cada categoria
                    racial.
                  </p>
                  <p className="m-0">
                    O gráfico abrange exclusivamente as raças selecionadas.
                  </p>
                </DropdownToolTip>

                <Modal title="Raça" id="ModalRaca">
                  <ChartBar
                    data={dataRaca}
                    selectedCities={selectedCities}
                    column="RacaPaciente"
                    title2="Raça"
                    title1="Percentual de Casos"
                    horizontal={true}
                  />
                </Modal>
              </div>
            </div>
            <div className="card-body card-body-graph ps-1">
              {loading === true ? (
                <LoadingAnimation />
              ) : (
                <div className="seila">
                  <ChartBar
                    data={dataRaca}
                    selectedCities={selectedCities}
                    column="RacaPaciente"
                    title2="Raça"
                    title1="Percentual de Casos"
                    horizontal={true}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CARD ESCOLARIDADE */}

        {/* <div className="col-sm-12 col-md-12 col-lg-6 ">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="m-0">Escolaridade</h5>

              <div className="d-inline-flex align-items-center">
                <DropdownToolTip>
                  <p className="mb-2">
                    Utilize o gráfico para visualizar a distribuição de casos
                    por nível de escolaridade.
                  </p>
                  <p className="mb-2">
                    Passe o cursor sobre as barras do gráfico para ver detalhes
                    específicos sobre a porcentagem de casos em cada nível
                    educacional.
                  </p>
                  <p className="m-0">
                    O gráfico abrange exclusivamente os níveis de escolaridade
                    selecionados.
                  </p>
                </DropdownToolTip>

                <Modal title="Escolaridade" id="ModalEsc">
                  <ChartBar
                    data={dataEscolaridade}
                    selectedCities={selectedCities}
                    column="Escolaridade"
                    title2="Escolaridade"
                    title1="Percentual de Casos"
                    horizontal={true}
                  />
                </Modal>
              </div>
            </div>
            <div className="card-body card-body-graph ps-0">
              {loading === true ? (
                <LoadingAnimation />
              ) : (
                <div className="seila">
                  <ChartBar
                    data={dataEscolaridade}
                    selectedCities={selectedCities}
                    column="Escolaridade"
                    title2="Escolaridade"
                    title1="Percentual de Casos"
                    horizontal={true}
                  />
                </div>
              )}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Dash;
