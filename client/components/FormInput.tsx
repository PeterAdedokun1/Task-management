import react from "react";
import { Text, View, TextInput } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
interface InputText {
  label: string;
  OnChangeText: any;
  Value: any;
  OnBlur: any;
  placeholder: string;
}

const FormInput = ({
  label,
  OnBlur,
  OnChangeText,
  Value,
  placeholder,
}: InputText) => {
  const navigation: any = useNavigation();
  const validateSchema = yup.object().shape({
    email: yup
      .string()
      // .email("Not a valid email address")
      .required("Please enter an email address to continue "),
    password: yup.string().required("Please enter your password"),
  });
  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: "#B8FFB2",
        paddingHorizontal: 10,
        position: "relative",
        borderRadius: 6,
      }}
    >
      <View>
        <Text
          style={{
            position: "absolute",
            top: -10,
            backgroundColor: "#efefef",
            fontSize: 16,
          }}
        >
          {label}
        </Text>
        <TextInput
          style={{ height: 50, fontSize: 19 }}
          placeholder={"ll"}
          onChangeText={OnChangeText}
          onBlur={OnBlur}
          value={Value}
        />
      </View>
    </View>
  );
};

export default FormInput;
