import React, {useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Question = ({image, option1, option2, option3, option4, setAnswer})=> {
    return (
        <View style={{marginTop: 10, marginBottom: 10}}>
            <Image
                source={{uri: image}}
                style={{width: 420, height: 350}}
            />
            <Text style={{textAlign: 'center', color: 'dimgrey'}}>What cat is this?</Text>
            <Picker onValueChange={(value) => setAnswer(value)}>
                <Picker.Item label={option1} value={option1} />
                <Picker.Item label={option2} value={option2} />
                <Picker.Item label={option3} value={option3} />
                <Picker.Item label={option4} value={option4} />
            </Picker>
        </View>
    );
};

const MyApp = () => {
    const [answer1, setAnswer1] = useState('Ragdoll');
    const [answer2, setAnswer2] = useState('Burmese');
    const [answer3, setAnswer3] = useState('Tiger');
    const [answer4, setAnswer4] = useState('Maine Coon');
    const [answer5, setAnswer5] = useState('Savannah');

    return (
        <ScrollView style={{marginTop: 40, marginBottom: 50}}>
            <Text style={{fontSize: 32, fontFamily: 'serif', textAlign: 'center', color: 'cornflowerblue'}}><FontAwesome6 name='paw' size='32' color='cornflowerblue' /> Cat Quiz</Text>
            <Question image='https://images.pexels.com/photos/357141/pexels-photo-357141.jpeg' option1='Ragdoll' option2='Balinese' option3='Siamese' option4='Himalayan' setAnswer={setAnswer1} />
            <Question image='https://images.pexels.com/photos/11722654/pexels-photo-11722654.jpeg' option1='Burmese' option2='Chartreux' option3='American Shorthair' option4='Sand' setAnswer={setAnswer2} />
            <Question image='https://images.pexels.com/photos/3660441/pexels-photo-3660441.jpeg' option1='Tiger' option2='Snow Leopard' option3='Jaguar' option4='Leopard' setAnswer={setAnswer3} />
            <Question image='https://images.pexels.com/photos/10626402/pexels-photo-10626402.jpeg' option1='Maine Coon' option2='Norwegian Forest' option3='Siberian' option4='British Longhair' setAnswer={setAnswer4} />
            <Question image='https://images.pexels.com/photos/19974273/pexels-photo-19974273.jpeg' option1='Savannah' option2='Abyssinian' option3='Ocicat' option4='Bengal' setAnswer={setAnswer5} />

            <TouchableOpacity
                style={{
                    margin: 5, backgroundColor: 'deepskyblue', height: 50, borderRadius: 5,
                    justifyContent: 'center', alignItems: 'center'
                }}
                onPress={() => {
                    let score = 0
                    if (answer1 === 'Siamese') score += 1
                    if (answer2 === 'Sand') score += 1
                    if (answer3 === 'Snow Leopard') score += 1
                    if (answer4 === 'Maine Coon') score += 1
                    if (answer5 === 'Bengal') score += 1

                    let alertMsg = ''
                    if (score === 5) {
                        alertMsg = "Excellent! You scored 5/5!";
                    } else if (score === 4) {
                        alertMsg = "Great job! You scored 4/5!";
                    } else if (score === 3) {
                        alertMsg = "Good effort! You scored 3/5!";
                    } else if (score === 2) {
                        alertMsg = "Not bad! You scored 2/5!";
                    } else if (score === 1) {
                        alertMsg = "Nice try! You scored 1/5!";
                    } else {
                        alertMsg = "Better luck next time!";
                    }

                    Alert.alert(alertMsg);

                }}
            >
                <Text style={{fontSize: 15}}>SUBMIT ANSWERS</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

export default MyApp;
