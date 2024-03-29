import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged as onAuthStateChangedFireBase, //인증상태를 유지해주는 기능과 인증 상태가 변경되었을때 알려주는 함수 - 함수 이름을 변경한 버전
} from 'firebase/auth';

export const getAuthErrorMessages = (errorCode) => {
  //로그인 과정에서 발생할 수 있는 에러코드
  switch (errorCode) {
    case AuthErrorCodes.USER_DELETED:
      return '계정을 찾을 수 없습니다.';
    case AuthErrorCodes.INVALID_EMAIL:
      return '유효하지 않은 이메일 주소입니다.';
    case AuthErrorCodes.INVALID_PASSWORD:
      return '잘못된 비밀번호입니다.';
    case AuthErrorCodes.EMAIL_EXISTS:
      return '이미 가입된 이메일입니다.';
    case AuthErrorCodes.WEAK_PASSWORD:
      return '비밀번호는 최소 6자리입니다.';
    default:
      return '로그인에 실패했습니다.';
  }
};

export const signIn = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(getAuth(), email, password);
  return user;
};

export const signUp = async ({ email, password }) => {
  const { user } = await createUserWithEmailAndPassword(
    getAuth(),
    email,
    password
  );
  return user;
};

export const onAuthStateChanged = (callback) => {
  return onAuthStateChangedFireBase(getAuth(), callback);
};
