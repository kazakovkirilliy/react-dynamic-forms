import { BooleanInputProperties } from '@/components/form/input/BooleanInput';
import { SelectInputProperties } from '@/components/form/input/SelectInput';
import { TextInputProperties } from '@/components/form/input/TextInput';
import { FieldTypeEnum } from './genericInputProps';

export type FieldInputType = {
  type: FieldTypeEnum;
  properties?: InputProperties;
};

export type InputProperties = TextInputProperties | SelectInputProperties | BooleanInputProperties;

export type FieldProperties = {
  id?: string;
  label?: string;
  input: FieldInputType;
};
