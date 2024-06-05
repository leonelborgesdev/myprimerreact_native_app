import StyledText from "./StyledText.jsx";
import { View } from "react-native";

const RepositoryGenres = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        {props.genres.map((genre) => {
          return <StyledText key={genre.id}>{genre.name}</StyledText>;
        })}
      </View>
    </View>
  );
};

export default RepositoryGenres;
