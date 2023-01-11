import { FormProperties } from '@/types/formProperties';
import { FormField } from '../form/FormField';
import { FormSection } from '../form/FormSection';

export const DynamicForm = (props: FormProperties) => {
  const { fields, sections, submitButton, resetButton, ...formAttrs } = props;

  return (
    <form {...formAttrs}>
      {fields?.map((fieldProps, i) => (
        <FormField key={fieldProps.id || i} {...fieldProps} />
      ))}

      {sections?.map((sectionProps, i) => (
        <FormSection key={sectionProps.id || i} {...sectionProps} />
      ))}
    </form>
  );
};
