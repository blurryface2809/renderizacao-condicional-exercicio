import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";


function TelaCadastroEndereco(props) {
    return (
      <FormContainer>
        <h1>Cadastro do Endereço</h1>
        <Form>
          <StyledLabel htmlFor="endereco">
            Endereço:
            <Input id="endereco" />
          </StyledLabel>
          <StyledLabel htmlFor="numero">
            Número:
            <Input id="numero" />
          </StyledLabel>
          <StyledLabel htmlFor="complemento">
            Complemento
            <Input  id="complemento" />
          </StyledLabel>
          <StyledLabel htmlFor="telefone">
            Telefone:
            <Input type="number" id="telefone" />
          </StyledLabel>
          <SendButton onClick={() => props.mudarTela(4)}>Cadastrar</SendButton>
          </Form>
    </FormContainer>
  );
}

export default TelaCadastroEndereco;