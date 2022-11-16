import { ChangeEvent } from "react";

/**
 * Common input attributes available for each input type.
 */
export type GenericInputProperties<T = {}, V = {}> = {
  id?: string;
  name?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  ariaLabel?: string;
  maxLength?: number;
  minLength?: number;
  invalid?: boolean; // applies error styles if true
  value?: string | number | readonly string[];
  onChange?: (event?: ChangeEvent<T>) => void;
  onChangeValue?: (value: V) => void;
};

/**
 * Types of input fields
 */
export enum FieldTypeEnum {
  TEXT = "TEXT",
  TEXTAREA = "TEXTAREA",
  SELECT = "SELECT",
  BOOLEAN = "BOOLEAN",
}
