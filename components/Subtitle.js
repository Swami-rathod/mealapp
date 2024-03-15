import { Text } from "react-native";

function Subtitle({children,titlestyle}){

    return (
        <Text style={titlestyle}>{children}</Text>
    )
}
export default Subtitle;