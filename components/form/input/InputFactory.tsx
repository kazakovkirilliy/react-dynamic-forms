import TextInput from './TextInput';
import SelectInput from './SelectInput';
import BooleanInput from './BooleanInput';
import { ReactElement, useMemo } from 'react';
import { FieldInputType, InputProperties } from '@/types/fieldProperties';
import { FieldTypeEnum } from '@/types/genericInputProps';

/**
 * Factory component that returns input based on props.
 */
export const InputFactory = (props: FieldInputType) => {
  const { type, properties } = props;

  const Input = useMemo(() => {
    let _input;

    switch (type) {
      case FieldTypeEnum.TEXT:
        _input = TextInput;
        break;
      case FieldTypeEnum.SELECT:
        _input = SelectInput;
        break;
      case FieldTypeEnum.BOOLEAN:
        _input = BooleanInput;
        break;
    }

    return _input as (props: InputProperties) => ReactElement;
  }, [type]);

  return <Input {...properties} />;
};
