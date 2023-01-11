import { FormProperties } from '@/types/formProperties';
import { FieldTypeEnum } from '@/types/genericInputProps';

export const useSimpleForm = (): FormProperties => {
  return {
    id: 'dynamic-form-id',
    style: {
      width: '40vw',
      justifyContent: 'space-around',
    },
    fields: [
      {
        label: 'Text input',
        input: {
          type: FieldTypeEnum.TEXT,
        },
      },
      {
        label: 'Text input 2',
        input: {
          type: FieldTypeEnum.TEXT,
        },
      },
      {
        label: 'Text input 3',
        input: {
          type: FieldTypeEnum.TEXT,
        },
      },
    ],
  };
};
