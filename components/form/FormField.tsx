import { InputFactory } from './input/InputFactory';
import { FieldProperties } from '@/types/fieldProperties';

/**
 * Displays an input with an optional label.
 */
export const FormField = (props: FieldProperties) => {
  const { id, label, input } = props;

  return (
    <div id={id}>
      {label && <label htmlFor={input.properties?.id}>{label}</label>}
      <div>
        <InputFactory {...input} />
      </div>
    </div>
  );
};
