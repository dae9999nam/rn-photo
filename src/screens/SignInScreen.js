import { useNavigation } from '@react-navigation/native';
import { Keyboard, StyleSheet, Text, View } from 'react-native';
import { AuthRoutes } from '../navigations/routes';
import Input, { ReturnKeyTypes, InputTypes } from '../components/Input';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SafeInputView from '../components/SafeInputView';

const SignInScreen = () => {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();

  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = () => {
    Keyboard.dismiss();
    if (!disabled && !isLoading) {
      setIsLoading(true);
      console.log(email, password);
      setIsLoading(false);
    }
  };

  return (
    <SafeInputView>
      <View style={[styles.container, { padding: top }]}>
        <Text>Sign In</Text>
        <Input
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
          inputType={InputTypes.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
          onSubmitEditing={() => passwordRef.current.focus()}
          styles={{ container: { marginBottom: 20 } }}
        />
        <Input
          ref={passwordRef}
          value={password}
          onChangeText={(text) => setPassword(text.trim())}
          inputType={InputTypes.PASSWORD}
          returnKeyType={ReturnKeyTypes.DONE}
        />
        <Button
          title="Sign up"
          onPress={() => navigation.navigate(AuthRoutes.SIGN_UP)}
          styles={{
            container: {
              paddingHorizontal: 20,
              marginTop: 20,
            },
          }}
        />
      </View>
    </SafeInputView>
  );
};

const inputStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignInScreen;
