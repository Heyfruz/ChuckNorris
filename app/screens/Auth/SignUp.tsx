import { useRef, useState } from 'react';
import { TextInput, View } from 'react-native';

import {
  Button,
  Container,
  Footer,
  Form,
  FormField,
  Header,
  Submit,
} from 'components';
import { AuthRoutes, StackNavigationProps } from 'navigation';
import { setAuthenticated, useDispatch } from 'store';
import { signUpValidationSchema as validationSchema } from 'utils';

export default function SignUp({
  navigation,
}: StackNavigationProps<AuthRoutes, 'SignUp'>): JSX.Element {
  const [secure, setSecure] = useState(true);
  const dispatch = useDispatch();

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  return (
    <>
      <Header
        hideLeftComp
        title="Sign Up"
        showCloseIcon
        rightLabel="Login"
        onRightLabelPress={() => navigation.navigate('Login')}
      />
      <Container>
        <Form
          {...{ validationSchema }}
          initialValues={{
            email: '',
            name: '',
            password: '',
          }}
          onSubmit={values => {
            console.log(values);
            dispatch(setAuthenticated(true));
          }}>
          <View style={{ height: 32 }} />
          <FormField
            name="name"
            placeholder="Name"
            onSubmitEditing={() => emailRef.current?.focus()}
            autoCapitalize="none"
            autoCorrect
            returnKeyLabel="Next"
            returnKeyType="next"
          />
          <FormField
            ref={emailRef}
            placeholder="Email"
            name="email"
            keyboardType="email-address"
            autoCorrect={false}
            returnKeyLabel="Next"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
          <FormField
            ref={passwordRef}
            placeholder="Password"
            name="password"
            secureTextEntry={secure}
            returnKeyLabel="Done"
            returnKeyType="done"
            rightIcon={secure ? 'eye' : 'eye-off'}
            onRightIconPress={() => {
              setSecure(sec => !sec);
            }}
          />
          <View style={{ height: 32 }} />
          <Footer>
            <Submit label="Sign Up" />
            <Button variant="transparent" label="Forgot your password?" />
          </Footer>
        </Form>
      </Container>
    </>
  );
}
