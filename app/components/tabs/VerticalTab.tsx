import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const VerticalTab = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="flex lg:flex md:flex sm:flex sm:flex-col md:flex-row">
      <Tabs
        aria-label="Vertical tabs"
        orientation={isSmallScreen ? "horizontal" : "vertical"}
        sx={{ width: "100%", textAlign: "center", justifyContent: "center" }}
      >
        <TabList sx={{ minWidth: 250 }}>
          <Tab
            sx={{
              "&.Mui-selected": {
                color: "white",
                backgroundColor: "purple",
                borderBottom: "2px solid purple", // opcional: adicionar uma borda inferior roxa
              },
            }}
          >
            24 Julho
          </Tab>
          <Tab
            sx={{
              "&.Mui-selected": {
                color: "white",
                backgroundColor: "purple",
                borderBottom: "2px solid purple",
              },
            }}
          >
            25 Julho
          </Tab>
          <Tab
            sx={{
              "&.Mui-selected": {
                color: "white",
                backgroundColor: "purple",
                borderBottom: "2px solid purple",
              },
            }}
          >
            26 Julho
          </Tab>
          <Tab
            sx={{
              "&.Mui-selected": {
                color: "white",
                backgroundColor: "purple",
                borderBottom: "2px solid purple",
              },
            }}
          >
            27 Julho
          </Tab>
        </TabList>
        <TabPanel value={0}>
          <b>8h30</b> <br />
          <p>Registro e café da manhã</p>
          <br />
          <b>9h</b> <br />
          <p>Abertura e boas vindas</p>
          <br />
          <b>10h</b> <br />
          <p>Caso de Estudo 1: Como a Inteligência Artificial pode mudar o mundo</p>
          <br />
          <b>11h</b> <br />
          <p>Caso de Estudo 2: Blockchain e o uso de moedas virtuais</p>
          <br />
          <b>12h</b> <br />
          <p>Encerramento do dia</p>
        </TabPanel>
        <TabPanel value={1}>
          <b>8h30</b> <br />
          <p>Registro e café da manhã</p>
          <br />
          <b>9h</b> <br />
          <p>Abertura e boas vindas</p>
          <br />
          <b>10h</b> <br />
          <p>Caso de Estudo 3: Como a Inteligência Artificial pode mudar o mundo</p>
          <br />
          <b>11h</b> <br />
          <p>Caso de Estudo 4: Blockchain e o uso de moedas virtuais</p>
          <br />
          <b>12h</b> <br />
          <p>Encerramento do dia</p>
        </TabPanel>
        <TabPanel value={2}>
          <b>8h30</b> <br />
          <p>Registro e café da manhã</p>
          <br />
          <b>9h</b> <br />
          <p>Abertura e boas vindas</p>
          <br />
          <b>10h</b> <br />
          <p>Caso de Estudo 5: Como a Inteligência Artificial pode mudar o mundo</p>
          <br />
          <b>11h</b> <br />
          <p>Caso de Estudo 6: Blockchain e o uso de moedas virtuais</p>
          <br />
          <b>12h</b> <br />
          <p>Encerramento do dia</p>
        </TabPanel>
        <TabPanel value={3}>
          <b>8h30</b> <br />
          <p>Registro e café da manhã</p>
          <br />
          <b>9h</b> <br />
          <p>Abertura e boas vindas</p>
          <br />
          <b>10h</b> <br />
          <p>Caso de Estudo 7: Como a Inteligência Artificial pode mudar o mundo</p>
          <br />
          <b>11h</b> <br />
          <p>Caso de Estudo 8: Blockchain e o uso de moedas virtuais</p>
          <br />
          <b>12h</b> <br />
          <p>Encerramento do dia</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default VerticalTab;
