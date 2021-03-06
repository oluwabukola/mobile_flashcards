import React from 'react';
import { View,  StyleSheet, TouchableOpacity } from 'react-native';
import {
    Button,
    Text,
    Card,
    Paragraph,
    Dialog,
    Portal,
    Divider,
  } 
  from 'react-native-paper';
import { calculatePercentage  } from '../utils/helpers';


const QuizBlock = ({showAnswer, handleClick, 
    refreshQuestion, closeDialog, questionIndex,
    finalMessage, showQuestion, correctAnswers,
    Answer, totalQuestions}) => {

    return (
        <View>
<View style={styles.container}>
        <View>
          <Card mode="outlined" style={styles.card}>
            <Card.Title 
            style={styles.titleStyle}
            subtitle="choose the
            correct  answer for each question" />
            <Card.Content>
              <Paragraph>
                {' '}
                {questionIndex}/{totalQuestions} Questions
              </Paragraph>
              <Paragraph>
                <Text>{Answer}</Text>
              </Paragraph>
              <Paragraph></Paragraph>
              <Paragraph style={{paddingTop: 20}}>
                {finalMessage ? (
                  <Portal>
                    <Dialog
                      visible={finalMessage}
                      onDismiss={refreshQuestion}>
                      <Dialog.Title>END!!</Dialog.Title>
                      <Dialog.Content>
                        <Paragraph>
                          Correct Score:
                          {calculatePercentage (correctAnswers, totalQuestions)}%
                        </Paragraph>
                      </Dialog.Content>
                      <Dialog.Actions>
                        <Button onPress={closeDialog}>Cancel</Button>
                        <Button onPress={refreshQuestion}>Restart</Button>
                      </Dialog.Actions>
                    </Dialog>
                  </Portal>
                ) : (
                  <Paragraph></Paragraph>
                )}
              </Paragraph>
            </Card.Content>
          </Card>
          <Divider />
        </View>
      </View>
      <View style={styles.btnWrapper}>
        {showQuestion ? (
          <TouchableOpacity
            dark
            title="Question"
            // mode="contained"
            onPress={() => showAnswer('question')}
            style={styles.routeBtn}>
           <Text style={styles.textStyle}> Question </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            mode="contained"
            title="Answer"
            dark
            onPress={() => showAnswer('answer')}
            style={styles.routeBtn}
            >
           <Text style={styles.textStyle}> Answer </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          mode="contained"
          
          onPress={() => {
            handleClick('correct');
          }}
          style={[styles.routeBtn, {backgroundColor: 'green'}]}>
        <Text style={styles.textStyle}> Correct answer </Text>
        </TouchableOpacity>
        <TouchableOpacity
          mode="contained"
          style={[styles.routeBtn, {backgroundColor: 'red'}]}
          onPress={() => {
            manageClick('Incorrect');
          }}>
      <Text style={styles.textStyle}> Incorrect answer </Text>

        </TouchableOpacity>
      </View>
        </View>
    )
}


export default QuizBlock;



const styles = StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'center',
    },
    routeBtn: {
      backgroundColor: 'black',
      borderRadius: 5,
      width: '80%',
      padding: 15,
      margin: 10,
    },
    textStyle: {
      color: 'white',
      textAlign: 'center',
    },
    btn: {
      marginBottom: 10,
    },
    btnWrapper: {
      marginTop: '60%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleStyle: {
      fontSize: 20,
    }
  });
