import React, { useRef, useState } from "react";
import axios from 'axios';
import Faces from '../../Assets/faces.svg';
import Arrow from '../../Assets/arrow.svg';


import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  
} from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    try {
      const { data: newUsers } = await axios.post("http://localhost:3001/users", {
        name: inputName.current.value,
        age: inputAge.current.value
      });
      setUsers([...users, newUsers]);
    } catch (error) {
      console.error("Erro ao cadastrar novo usuário:", error);
    }
  }



  return (
    <Container>
      <Image alt="logo-imagem" src={Faces} />
      <ContainerItens>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />
        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />
        <Button onClick={addNewUser}>
          Cadastrar
          <img alt="seta" src={Arrow} />
        </Button>
       
      </ContainerItens>
    </Container>
  );
}

export default Users;
