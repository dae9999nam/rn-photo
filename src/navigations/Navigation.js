import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { Asset } from 'expo-asset';
import { initFirebase } from '../api/firebase';
import { useUserState } from '../contexts/USerContext';
import MainStack from './MainStack';
import { onAuthStateChanged } from 'firebase/auth';

const Navigation = () => {
  const [user, setUser] = useUserState();
  const [isReady, SetIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Asset.fromModule(
          require('../../assets/cover.png')
        ).downloadAsync();
        const app = initFirebase();
        const unsubscribe = onAuthStateChanged((user) => {
          if (user) {
            setUser(user);
          }
          SetIsReady(true);
          unsubscribe();
        });
      } catch (e) {
        //eslint-disabled-next-line no-console
        console.log(e);
        SetIsReady(true);
      }
    })();
  }, [setUser]);

  const onReady = async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  };

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer onReady={onReady}>
      {user.uid ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
