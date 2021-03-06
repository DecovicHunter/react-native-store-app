import * as React from "react";
import { Control, Controller } from "react-hook-form";
import { KeyboardTypeOptions } from "react-native";

import Input from "./Input";

export interface InputControlledProps {
  control: Control<Record<string, any>>;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  name: string;
}

const InputControlled: React.FC<InputControlledProps> = ({
  control,
  placeholder,
  keyboardType,
  name,
}) => {
  return (
    <Controller
      control={control}
      render={({ onBlur, onChange, value }) => (
        <Input
          keyboardType={keyboardType}
          onChangeText={(value) => onChange(value)}
          placeholder={placeholder}
          value={value}
        />
      )}
      name={name}
      defaultValue=""
    />
  );
};
export default InputControlled;
