import StyledText from "./StyledText.jsx";
import { View } from "react-native";

const parseThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

const RespositoryRatings = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      {props.ratings.map((rating) => {
        return (
          <View key={rating.id}>
            <StyledText
              align="center"
              fontWeight="bold"
              textTransform="uppercase"
            >
              {rating.title}
            </StyledText>

            <StyledText align="center">{rating.percent}%</StyledText>
            <StyledText align="center">
              {parseThousands(rating.count)}
            </StyledText>
          </View>
        );
      })}
    </View>
  );
};

export default RespositoryRatings;
