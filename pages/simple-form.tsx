import { DynamicForm } from '@/components/DynamicForm';
import { useSimpleForm } from '@/components/DynamicForm/useSimpleForm';

export default function SimpleFormPage() {
  const formProperties = useSimpleForm();

  return <DynamicForm {...formProperties} />;
}
