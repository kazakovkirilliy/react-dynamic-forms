import React, { CSSProperties, FormEvent } from 'react';
import { FieldProperties } from './fieldProperties';

export type SectionProperties = {
  id?: string;
  title?: string;
  fields: FieldProperties[];
  hidden?: boolean;
  style?: CSSProperties;
};

// XOR
type ChildrenProperties =
  | {
      sections: SectionProperties[];
      fields?: never;
    }
  | {
      fields: FieldProperties[];
      sections?: never;
    };

export type FormProperties = {
  id?: string;
  title?: string;
  style?: CSSProperties;
  submitButton?: {
    component: React.ReactElement;
    onSubmit: (e?: FormEvent<HTMLFormElement>) => void;
  };
  resetButton?: {
    component: React.ReactElement;
    onReset?: () => void;
  };
} & ChildrenProperties;
