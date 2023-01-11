import { DynamicForm } from '@/components/DynamicForm';
import { useFormWithSections } from '@/components/DynamicForm/useFormWithSections';

export default function FormWithSectionsPage() {
  const formProperties = useFormWithSections();

  return <DynamicForm {...formProperties} />;
}
