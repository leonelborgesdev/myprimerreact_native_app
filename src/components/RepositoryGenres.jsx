import StyledText from "./StyledText.jsx";
import { View, Text } from "react-native";

const RepositoryGenres = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <StyledText fontWeight="bold">Genres:</StyledText>
      <View>
        {props.genres.map((genre) => {
          return <StyledText key={genre.id}>{genre.name}</StyledText>;
        })}
      </View>
      <StyledText fontWeight="bold">Platforms:</StyledText>
      <View>
        {props.platforms.map((obj) => {
          return (
            <StyledText key={obj.platform.id}>{obj.platform.name}</StyledText>
          );
        })}
      </View>
    </View>
  );
};

export default RepositoryGenres;
