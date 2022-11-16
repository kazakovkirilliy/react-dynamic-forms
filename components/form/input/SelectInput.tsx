import { ForwardedRef, forwardRef, OptionHTMLAttributes, ReactElement } from 'react';
import { GenericInputProperties } from '@/types/genericInputProps';

export type SelectInputProperties = {
  options: OptionHTMLAttributes<HTMLOptionElement>[];
  multiple?: boolean;
  size?: number;
} & GenericInputProperties<HTMLSelectElement>;

/**
 * Select input component.
 */
const SelectInput = (props: SelectInputProperties, ref: ForwardedRef<HTMLSelectElement>): ReactElement => {
  const { ariaLabel, options, ...rest } = props;

  const disabled = !options || options.length === 0;

  return (
    <select disabled={disabled} ref={ref} aria-label={ariaLabel} {...rest}>
      {disabled ? (
        <option>No available options</option>
      ) : (
        options.map((o: OptionHTMLAttributes<HTMLOptionElement>, i) => <option key={i} {...o} />)
      )}
    </select>
  );
};

export default forwardRef(SelectInput);
