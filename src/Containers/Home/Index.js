
import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
import People from '../../Assets/people.svg';
import Arrow from '../../Assets/arrow.svg';
import Trash from  '../../Assets/trash3.svg'


import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  User
  
  

} from "./styles";

function App() {
const [users, setUsers] = useState([]);
const inputName = useRef()
const inputAge = useRef()

 async function addNewUser() {

  const {data:newUsers} = await axios.post("http://localhost:3001/users", {
    name: inputName.current.value,
    age: inputAge.current.value,

  });

setUsers ([...users, newUsers]);

}



 useEffect(()=>{
  async function fetchUsers(){
    const {data:newUsers} = await axios.get("http://localhost:3001/users")

  setUsers(newUsers)

  }
  

  fetchUsers()
 },[users])

  async function deleteUser(userId){
    await axios.delete(`http://localhost:3001/users/${userId}`)
 const newUsers = users.filter(user => user.id !== userId)

 setUsers(newUsers);


 };
  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>

        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}  >
          Cadastrar<img alt="seta" src={Arrow}
          /></Button>

        <ul>
          {users.map(user => (
            <User key ={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo"/>
                </button>
              </User>
          ))

          }


        </ul>

      </ContainerItens>
    </Container>

  );

  }
export default App;
