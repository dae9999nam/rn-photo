import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';
import PropTypes from 'prop-types';

const SafeInputView = ({ children }) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: 'padding' })}
    ></KeyboardAvoidingView>
  );
};
