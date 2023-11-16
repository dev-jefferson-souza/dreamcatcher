import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { Card } from "../../../../components/card";
import { Phase, ReceivedVariables } from "../../../../models/moonPhases";
import moonPhasesService from "../../../../services/moonPhases";
import { styles } from "./styles";

export interface IHeaderDataProps {
  weekDay: string;
  moonthDay: number;
  month: string;
  year: number;
  moonPhase: Phase;
}

export const MoonPhases = () => {
  const [loading, setLoading] = useState(true);
  const [moonPhaseHeaderData, setMoonPhaseHeaderData] =
    useState<IHeaderDataProps>();

  useEffect(() => getMoonPhaseDiaAtual(), []);

  function getMoonPhaseDiaAtual() {
    moonPhasesService
      .getMoonPhase()
      .then((res) => {
        const dataAtual = new Date();
        const reqData: ReceivedVariables = res.data.receivedVariables;
        const weekDay = dataAtual.getDay();

        const headerData: IHeaderDataProps = {
          weekDay: res.data.nameDay[weekDay === 0 ? 6 : weekDay - 1],
          moonthDay: dataAtual.getDate(),
          month: res.data.nameMonth[reqData.month as any],
          year: res.data.year,
          moonPhase: res.data.phase[dataAtual.getDate()],
        };
        setMoonPhaseHeaderData(headerData);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  function handleMoonPhasesLoading() {
    if (loading || !moonPhaseHeaderData) {
      return <ActivityIndicator color="#8957e5" size="large" />;
    } else {
      return (
        <View style={styles.moonContainer}>
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.informationText}>
              {moonPhaseHeaderData.month}, {moonPhaseHeaderData.year}
            </Text>
            <Text style={styles.informationText}>
              Dia {moonPhaseHeaderData.moonthDay}, {moonPhaseHeaderData.weekDay}
            </Text>
            <Text style={styles.informationText}>
              Lua {moonPhaseHeaderData.moonPhase.phaseName}
            </Text>
          </View>
          <View style={{ padding: 8, width: "100%", height: "100%" }}>
            <SvgXml
              xml={moonPhaseHeaderData.moonPhase.svg}
              width={"100%"}
              height={"100%"}
            />
          </View>
        </View>
      );
    }
  }

  return <Card style={styles.card}>{handleMoonPhasesLoading()}</Card>;
};
