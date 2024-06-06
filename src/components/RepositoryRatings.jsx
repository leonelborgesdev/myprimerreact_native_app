import StyledText from "./StyledText.jsx";
import { View } from "react-native";

const RespositoryRatings = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      {props.ratings.map((rating) => {
        return (
          <View key={rating.id}>
            <StyledText fontWeight="bold">{rating.title}</StyledText>
            <StyledText>{rating.percent}</StyledText>
          </View>
        );
      })}
    </View>
  );
};

export default RespositoryRatings;
