import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const saveData =async () => {
    console.warn(name, age, email)
    const url = "http://10.0.2.2:3000/users"
    let result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({name,email,age})
    })
    result=await result.json()
  }
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Post API with Input Field</Text>
      <TextInput style={styles.talha} placeholder='Enter Name'
        placeholderTextColor={"white"} value={name} onChangeText={(text) => setName(text)}
      />
      <TextInput style={styles.talha} placeholder='Enter AGE'
        placeholderTextColor={"white"} value={age} onChangeText={(text) => setAge(text)}
      />
      <TextInput style={styles.talha} placeholder='Enter Email'
        placeholderTextColor={"white"} value={email} onChangeText={(text) => setEmail(text)}
      />
      <Button title='Save Data' onPress={saveData} />


    </View>
  )
}
const styles = StyleSheet.create({
  talha: {
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: 'grey',
    color: 'white',
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 5,
    textAlign: "center"
  }
})
export default App
