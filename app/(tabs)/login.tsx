import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Alert, // Para exibir alertas
  Image, // Para a imagem do chef
} from 'react-native';
import styled from 'styled-components/native'; // Importe de 'native' para React Native

// --- Componentes Estilizados ---

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #f8f8f8; /* Fundo cinza claro, ajuste conforme necessário */
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const LogoImage = styled.Image`
  width: 150px; /* Ajuste o tamanho conforme necessário */
  height: 150px; /* Ajuste o tamanho conforme necessário */
  resize-mode: contain;
  margin-bottom: 30px;
`;

const WelcomeText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
`;

const HighlightedText = styled.Text`
  color: #ff5722; /* Cor laranja para "Gulinha!" */
`;

const Input = styled.TextInput`
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ddd; /* Borda leve */
`;

const LoginButton = styled.TouchableOpacity`
  background-color:#ff5722; /* Botão laranja */
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const RegisterContainer = styled.View`
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
`;

const RegisterText = styled.Text`
  font-size: 16px;
  color: #666;
`;

const RegisterLink = styled.TouchableOpacity`
  margin-left: 5px;
`;

const RegisterLinkText = styled.Text`
  font-size: 16px;
  color:#ff5722; /* Cor laranja para o link */
  font-weight: bold;
`;

// --- Componente Principal ---

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Em uma aplicação real, você enviaria isso para o seu backend para autenticação
    if (email && password) {
      Alert.alert('Tentativa de Login', `Email: ${email}\nSenha: ${password}`);
      // Aqui você normalmente navegaria para outra tela ou dispararia uma ação de autenticação
    } else {
      Alert.alert('Erro', 'Por favor, insira o email e a senha.');
    }
  };

  const handleRegister = () => {
    // Navegar para a tela de registro
    Alert.alert('Cadastro', 'Navegando para a tela de cadastro...');
    // Você normalmente usaria navigation.navigate('RegisterScreen') aqui
  };

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      {/* Substitua pelo caminho real da sua imagem do chef */}
      <LogoImage source={require('../../assets/images/chef_image.png')} />

      <WelcomeText>
        Bem-Vindo ao <HighlightedText>Gulinha!</HighlightedText>
      </WelcomeText>

      <Input
        placeholder="Email:"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Senha:"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <LoginButton onPress={handleLogin}>
        <ButtonText>Login</ButtonText>
      </LoginButton>

      <RegisterContainer>
        <RegisterText>Não possui uma conta?</RegisterText>
        <RegisterLink onPress={handleRegister}>
          <RegisterLinkText>Cadastrar-se</RegisterLinkText>
        </RegisterLink>
      </RegisterContainer>
    </Container>
  );
};

export default LoginScreen;