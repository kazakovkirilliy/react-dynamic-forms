import { ForwardedRef, forwardRef, ReactElement } from 'react';
import { GenericInputProperties } from '@/types/genericInputProps';

export type BooleanInputProperties = {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  inputType?: 'checkbox' | 'radio';
} & GenericInputProperties<HTMLInputElement>;

/**
 * Boolean component.
 */
const BooleanInput = (props: BooleanInputProperties, ref: ForwardedRef<HTMLInputElement>): ReactElement => {
  const { inputType, label, id, ariaLabel, invalid, ...rest } = props;

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} ref={ref} type={inputType || 'checkbox'} aria-label={ariaLabel} {...rest} />
    </div>
  );
};

export default forwardRef(BooleanInput);
