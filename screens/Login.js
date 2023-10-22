import { View, Text, Pressable, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView,
    KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import COLORS from '../constants/colors'
import { Ionicons, MaterialIcons } from "@expo/vector-icons"
import Button from '../components/Button'
import { Formik } from "formik"
import * as Yup from "yup"

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(25, "Too Long!")
      .required("please enter your username !"),
    email: Yup.string()
      .email("Invalid email")
      .required("Please enter your email address !"),
    password: Yup.string()
      .min(8)
      .required("Please enter your password !")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Must contain minimum 8 caracters, at least one uppercase letter, one lowercase letter, one number and one special character "
      ),
  });


const Login = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [email, setEmail] = useState('');

    const handleEmailChange = (text) => {
      setEmail(text);
    };
  
    return (
        <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView  style={{ flex: 1 }}>
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
            size={34}
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
                        
                        Welcome Back ! </Text>
                   

                    <Text style={{
                        fontSize: 20,
                        color: COLORS.black
                    }}>Hello again you have been missed !</Text>

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

                

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Password</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22,
                        borderWidth: 1,
                        borderRadius: 8,
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 4,
                        elevation: 4,
                    }}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%"
                            }}
                            maxLength={15}
                        />
                        
                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                    <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    
                    <Pressable
                        onPress={() => navigation.navigate("Forgotpassword")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Forgot Password ?</Text>
                    </Pressable>
                </View>
                </View>
                
                
                
                

                <Button
                    title="Log In"
                    onPress={() => navigation.navigate("Home")}
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                />

             

                

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Don't have an account ?</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Signup")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Sign up</Text>
                    </Pressable>
                </View>
               
            </View>
        </SafeAreaView>
        </TouchableWithoutFeedback>
        </ScrollView>
       </KeyboardAvoidingView>
    )
}

export default Login