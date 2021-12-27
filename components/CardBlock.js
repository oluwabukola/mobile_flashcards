import React from 'react';
import { View, StyleSheet , Text} from 'react-native';
import { TextInput, Button } from 'react-native-paper';





const CardBlock = ({InputAnswer, InputQuestion, NewlyAddedQuestion}) => {

    return (
        <View>
             <View>
        <Text style={styles.textCenter}>Welcome to the New Question screen</Text>
          <TextInput
            mode="flat"
            placeholder="Type your question"
            onChangeText={InputQuestion}
          />
          <TextInput
            mode="flat"
            placeholder="Type your answer"
            onChangeText={InputAnswer}
          />
          <View style={styles.buttonWrapper}>
            <Button
              raised
              dark
              theme={{roundness: 6}}
              mode="contained"
              onPress={NewlyAddedQuestion}
              style={styles.button}>
              Create question
            </Button>
          </View>
        </View>
        </View>
    )
}


export default CardBlock;



const styles = StyleSheet.create({
    button: {
        marginTop: 460,
        width: '90%'
    },
    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCenter: {
      textAlign: 'center',
      fontSize: 18,
      marginTop: "3%",
    }
})