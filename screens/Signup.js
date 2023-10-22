import {
  View, Text, Image, Pressable, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet, ScrollView, KeyboardAvoidingView, Platform,} from "react-native"
import React, { useState, useCallback } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import COLORS from "../constants/colors"
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons"
import Button from "../components/Button"
import { useForm, Controller } from "react-hook-form"
import DropDownPicker from "react-native-dropdown-picker"
import * as ImagePicker from "expo-image-picker"
import PhoneInput from "react-native-phone-number-input"
import { Formik } from "formik"
import * as Yup from "yup"
import axios from "axios"


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

const Signup = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [image, setImage] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  const [priorityOpen, setPriorityOpen] = useState(false);
  const [priorityValue, setPriorityValue] = useState(null);
  const [priority, setPriority] = useState([
    { label: "Manager", value: "manager" },
    { label: "User", value: "user" },
  ]);

  const onPriorityOpen = useCallback(() => {
    setPriorityOpen(true);
  }, []);

  const { handleSubmit, control } = useForm();

  // const insertuser= () => {
  //   axios.post('http://192.168.1.19:8080/register', data)
  //   .then 
  // }
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView  style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          
          <Formik
            initialValues={{
              name: "",
              email: "",
              mobile: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              navigation.navigate("Home"); 
            }} 
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              handleChange,
              setFieldTouched,
              isValid,
            })=> ( 
              <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
                <View style={{ flex: 1, marginHorizontal: 22 }}>
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
                  <View style={{ marginVertical: 22 }}>
                    
                    <Text
                      style={{
                        fontSize: 42,
                        fontWeight: "bold",
                        marginVertical: 12,
                        color: COLORS.black,
                      }}
                    >
                      Create Account
                    </Text>
                    {image && (
                      <Image
                        source={{ uri: image }}
                        style={{
                          alignSelf: "flex-end",
                          width: 60,
                          height: 60,
                          borderRadius: 25,
                        }}
                      />
                    )}

                    <Text
                      style={{
                        fontSize: 16,
                        color: COLORS.black,
                      }}
                    >
                      Connect with your manager today!
                    </Text>
                  </View>

                  <View style={{ marginBottom: 12 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8,
                      }}
                    >
                      User name
                    </Text>

                    <View
                      style={{
                        width: "100%",
                        height: 48,
                        borderRadius: 10,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 10,
                        flexDirection: "row",
                        borderWidth: 1,
                        borderRadius: 8,
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 4,
                        elevation: 4,
                      }}
                    >
                      <Entypo name="user" size={24} color="black" />
                      <TextInput
                        placeholder="Enter your username"
                        value={values.name}
                        onChangeText={handleChange("name")}
                        placeholderTextColor={COLORS.black}
                        onBlur={() => setFieldTouched("name")}
                        keyboardType="email-address"
                        style={{
                          flex: 1,
                          marginLeft: 10,
                        }}
                      />
                    </View>
                    {touched.name && errors.name && (
                      <Text style={{ color: "red" }}>{errors.name}</Text>
                    )}
                  </View>

                  <View style={{ marginBottom: 12 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8,
                      }}
                    >
                      Email address
                    </Text>

                    <View
                      style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 10,
                        flexDirection: "row",
                        borderWidth: 1,
                        borderRadius: 8,
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 4,
                        elevation: 4,
                      }}
                    >
                      <MaterialIcons name="email" size={24} color="black" />
                      <TextInput
                        placeholder="Enter your email address"
                        placeholderTextColor={COLORS.black}
                        keyboardType="email-address"
                        style={{ flex: 1, marginLeft: 10 }}
                        value={values.email}
                        onChangeText={handleChange("email")}
                        onBlur={() => setFieldTouched("email")}
                      />
                    </View>
                    {touched.email && errors.email && (
                      <Text style={{ color: "red" }}>{errors.email}</Text>
                    )}
                  </View>

                  <View style={{ marginBottom: 12 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8,
                      }}
                    >
                      Mobile Number
                    </Text>

                    <View
                      style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 5,
                      }}
                    >
                      <PhoneInput
                        defaultValue={phoneNumber}
                        defaultCode="TN"
                        placeholderTextColor={COLORS.black}
                        onChangeFormattedText={(text) => {
                          setPhoneNumber(text);
                        }}
                        style={{
                          width: "1%",
                          borderRightWidth: 1,
                          borderLeftColor: COLORS.white,
                          height: "100%",
                        }}
                      />
                    </View>
                  </View>

                  <View style={{ marginBottom: 12 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8,
                      }}
                    >
                      Password
                    </Text>

                    <View
                      style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22,
                      }}
                    >
                      <TextInput
                        placeholder="Enter your password"
                        placeholderTextColor={COLORS.black}
                        value={values.password}
                        onChangeText={handleChange("password")}
                        onBlur={() => setFieldTouched("password")}
                        secureTextEntry={isPasswordShown}
                        style={{
                          width: "100%",
                        }}
                      />

                      <TouchableOpacity
                        onPress={() => setIsPasswordShown(!isPasswordShown)}
                        style={{
                          position: "absolute",
                          right: 12,
                        }}
                      >
                        {isPasswordShown == true ? (
                          <Ionicons
                            name="eye-off"
                            size={24}
                            color={COLORS.black}
                          />
                        ) : (
                          <Ionicons name="eye" size={24} color={COLORS.black} />
                        )}
                      </TouchableOpacity>
                    </View>
                    {touched.password && errors.password && (
                      <Text style={{ color: "red" }}>{errors.password}</Text>
                    )}
                  </View>
                  <View
                    style={{
                      marginBottom: 12,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Controller
                        name="priority"
                        defaultValue=""
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <View style={styles.dropdownPriority}>
                            <DropDownPicker
                              style={styles.dropdown}
                              open={priorityOpen}
                              value={priorityValue}
                              items={priority}
                              setOpen={setPriorityOpen}
                              setValue={setPriorityValue}
                              setItems={setPriority}
                              placeholder="Role"
                              placeholderStyle={styles.placeholderStyles}
                              onOpen={onPriorityOpen}
                              onChangeValue={onChange}
                              zIndex={3000}
                              zIndexInverse={1000}
                              dropDownDirection="top"
                            />
                          </View>
                        )}
                      />
                    </View>

                    <View
                      style={{
                        width: 100,
                        height: 48,
                        marginLeft: 8,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        paddingLeft: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 2,
                        elevation: 2,
                      }}
                    >
                      <TouchableOpacity
                        onPress={pickImage}
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Entypo name="images" size={24} color="black" />
                        <Text style={{ marginLeft: 4 }}>image</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <Button
                    title="Sign Up"
                    onPress={handleSubmit} 
                  //  onPress ={insertuser}
                      disabled={!isValid}
                    filled
                    style={{
                      marginTop: 60,
                      marginBottom: 4,
                      
                    }}
                  />

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      marginVertical: 22,
                    }}
                  >
                    <Text style={{ fontSize: 16, color: COLORS.black }}>
                      Already have an account ?
                    </Text>
                    <Pressable onPress={() => navigation.navigate("Login")}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: COLORS.primary,
                          fontWeight: "bold",
                          marginLeft: 6,
                        }}
                      >
                        Login
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </SafeAreaView>
            )}
          </Formik>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  input: {
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 7,
    borderWidth: 1,
    fontSize: 15,
    height: 50,
    marginHorizontal: 10,
    paddingStart: 10,
    marginBottom: 15,
  },
  dropdownPriority: {
    marginHorizontal: 10,
    width: "50%",
    marginBottom: 15,
  },
  dropdown: {
    borderColor: "black",
    height: 50,
  },
  label: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 8,
  },
  dateContainer: {
    width: "100%",
    height: 48,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    flexDirection: "row",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  button: {
    marginLeft: 10,
    paddingVertical: 8,
  },
  buttonText: {
    color: "green",
  },
});
export default Signup;
