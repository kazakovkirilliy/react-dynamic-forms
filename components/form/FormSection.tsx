import { SectionProperties } from '@/types/formProperties';
import { FormField } from './FormField';

export const FormSection = ({ fields, title, hidden, ...rest }: SectionProperties) => {
  if (hidden) {
    return null;
  }
  
  return (
    <div {...rest}>
      {title && <h2>{title}</h2>}
      {fields?.map((f, i) => (
        <FormField key={f.id || i} {...f} />
      ))}
    </div>
  );
};
