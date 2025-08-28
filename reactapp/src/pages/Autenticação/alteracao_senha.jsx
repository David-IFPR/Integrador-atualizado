import styled from "styled-components";
import { FiArrowLeft, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

const TelaStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #e0f7fa, #ffffff);
  padding: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 40px 32px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const TopText = styled.div`
  position: absolute;
  top: 16px;
  left: 24px;
  font-size: 12px;
  color: #aaa;
`;

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #555;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 24px;

  &:hover {
    color: #007bff;
    text-decoration: underline;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: #007bff;
  margin-bottom: 32px;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const Icon = styled(FiLock)`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  color: #aaa;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 14px 12px 40px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 15px;
  transition: border-color 0.3s;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled(Link)`
  display: block;
  width: 100%;
  text-align: center;
  padding: 14px;
  background-color: #007bff;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  font-size: 16px;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function AlterarSenha() {
  return (
    <TelaStyled>
      <Card>
        <BackLink to="/">
          <FiArrowLeft size={16} />
          Voltar
        </BackLink>
        <Title>Redefinir Senha</Title>
        <InputGroup>
          <Icon />
          <Input type="password" placeholder="Nova senha" />
        </InputGroup>
        <InputGroup>
          <Icon />
          <Input type="password" placeholder="Confirmar nova senha" />
        </InputGroup>
        <Button to="/">Salvar e voltar ao login</Button>
      </Card>
    </TelaStyled>
  );
}