import { View, Text,  TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, TouchableOpacity,   Modal, ScrollView, } from 'react-native'
import React, { useState, useCallback } from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import COLORS from '../constants/colors'
import Button from '../components/Button'
import {useForm, Controller} from 'react-hook-form'
import DropDownPicker from "react-native-dropdown-picker"
import { MaterialIcons } from "@expo/vector-icons"

import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";


const Addtask = ({navigation}) => {
    const [priorityOpen, setPriorityOpen] = useState(false);
    const [priorityValue, setPriorityValue] = useState(null);
    const [priority, setPriority] = useState([
      { label: "High", value: "high" },
      { label: "Medium", value: "medium" },
      { label: "Low", value: "low" },
    ]);

    const onPriorityOpen = useCallback(() => {
      setPriorityOpen(true);
    }, []);
  
    const { handleSubmit, control } = useForm();
    const onSubmit = (data) => {
      console.log(data, "data");
    };

    


  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("15/06/2000");
  const [startedDate, setStartedDate] = useState("12/12/2023");

  const handleChangeStartDate = (propDate) => {
    setStartedDate(propDate);
  };

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };


  function renderDatePicker() {
    return (
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={openStartDatePicker}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              margin: 20,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              padding: 35,
              width: "90%",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <DatePicker
              mode="calendar"
              minimumDate={startDate}
              selected={startedDate}
              onDateChanged={handleChangeStartDate}
              onSelectedChange={(date) => setSelectedStartDate(date)}
              options={{
                backgroundColor: COLORS.primary,
                textHeaderColor: "#469ab6",
                textDefaultColor: COLORS.white,
                selectedTextColor: COLORS.white,
                mainColor: "#469ab6",
                textSecondaryColor: COLORS.white,
                borderColor: "rgba(122,146,165,0.1)",
              }}
            />

            <TouchableOpacity onPress={handleOnPressStartDate}>
              <Text style={{  color: COLORS.white }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

    return (
      <ScrollView>
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
                        marginTop: 50,
                    }}>
                        Add new task ! </Text>
                </View>

                

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Task name</Text>
               
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
                        <TextInput
                            placeholder='Enter your task name'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                flex: 1,
                                marginLeft: 10
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                        
                    }}>User name</Text>
               
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
                        <TextInput
                            placeholder='Enter your user name'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                flex: 1,
                                marginLeft: 10
                            }}
                        />
                    </View>
                </View>

                

                <View style={{ marginBottom: 12 }}>
      <Text style={styles.label}>Start Date</Text>

      <TouchableOpacity
              onPress={handleOnPressStartDate}
              style={{
                height: 44,
                width: "100%",
                borderColor: COLORS.secondaryGray,
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <Text>{selectedStartDate}</Text>
            </TouchableOpacity>
    </View>

    <View style={{ marginBottom: 12 }}>
      <Text style={styles.label}>Deadline</Text>

      <TouchableOpacity
              onPress={handleOnPressStartDate}
              style={{
                height: 44,
                width: "100%",
                borderColor: COLORS.secondaryGray,
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <Text>{selectedStartDate}</Text>
            </TouchableOpacity>
    </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                        
                    }}>Priority</Text>
               
                    <View>
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
                            placeholder="Select Priority"
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
                </View>

                {/* <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                        
                    }}>Status</Text>
               
                    <View>
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
                            placeholder="Select Priority"
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
                </View> */}
                
               
                
                            
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Button
                    title="Save"
                    filled
                    style={{
                      marginTop: 20,
                      marginBottom: 4,
                      marginRight: 5,
                      width: 90, 
                      height: 50,
                     
                    }}
                  />

                 
              </View>

               
            </View>
            {renderDatePicker()}
        </SafeAreaView>
        </TouchableWithoutFeedback>
        </ScrollView>
    )
}
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
        fontWeight: '400',
        marginVertical: 8,
      },
      dateContainer: {
        width: '100%',
        height: 48,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        flexDirection: 'row',
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
        color: 'green',
      },
    });


export default Addtask;
