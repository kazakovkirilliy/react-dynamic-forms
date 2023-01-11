import { FormProperties } from '@/types/formProperties';
import { FieldTypeEnum } from '@/types/genericInputProps';

export const useFormWithSections = (): FormProperties => {
  return {
    id: 'dynamic-form-id',
    style: {
      display: 'flex',
      flexDirection: 'row',
      width: '40vw',
      justifyContent: 'space-around',
    },
    sections: [
      {
        title: 'Section 1',
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
      },
      {
        title: 'Section 2',
        fields: [
          {
            label: 'Text input',
            input: {
              type: FieldTypeEnum.BOOLEAN,
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
      },
    ],
  };
};
