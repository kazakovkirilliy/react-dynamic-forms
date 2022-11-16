import { ForwardedRef, forwardRef, ReactElement } from 'react';
import { GenericInputProperties } from '@/types/genericInputProps';

export type TextInputProperties = {
  inputType?: 'text' | 'email' | 'search' | 'tel' | 'url' | 'password';
  placeholder?: string;
  autoComplete?: 'on' | 'off';
  pattern?: string;
  defaultValue?: string;
} & GenericInputProperties<HTMLInputElement>;

/**
 * Text input component.
 */
const TextInput = (props: TextInputProperties, ref: ForwardedRef<HTMLInputElement>): ReactElement => {
  const { invalid, ariaLabel, value, ...rest } = props;

  return <input ref={ref} aria-label={ariaLabel} value={value} {...rest} />;
};

export default forwardRef(TextInput);
