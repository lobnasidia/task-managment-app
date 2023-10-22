import { View, Text,  TextInput, TouchableWithoutFeedback,TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { MaterialIcons } from "@expo/vector-icons";
import Button from '../components/Button'





const Forgotpassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

        <View style={{ flex: 1, marginHorizontal: 22 }}>

          <View style={{ marginVertical: 22 }}>
          <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            left: 0,
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={COLORS.black}
          />
        </TouchableOpacity>
            <Text style={{
              fontSize: 42,
              justifyContent: "center",
              fontWeight: 'bold',
              marginVertical: 12,
              color: COLORS.black,
              marginTop: 100,
            }}>
              Reset Your Password !
            </Text>

          </View>

          <View style={{ marginBottom: 12 }}>
                <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>Email address</Text>

                <View style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 10,
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderRadius: 8,
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                    elevation: 4,
                }}>
                <MaterialIcons name="email" size={24} color="black" />
                <TextInput
                placeholder='Enter your email address'
                placeholderTextColor={COLORS.black}
                keyboardType='email-address'
                style={{ flex: 1, marginLeft: 10 }}
                value={email}
                onChangeText={handleEmailChange}
                />
            </View>
        
            </View>

          <Button
            title="Submit"
            filled
            style={{
              marginTop: 18,
              marginBottom: 4,
            }} />



            

        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default Forgotpassword