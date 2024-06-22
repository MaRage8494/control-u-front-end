import { IBase } from './root.types';

export enum EnumTaskPriority {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export interface ITaskResponse extends IBase {
  name: string;
  Priority?: EnumTaskPriority;
  isCompleted: boolean;
}

export type TypeTaskFormState = Partial<
  Omit<ITaskResponse, 'id' | 'updatedAt'>
>;
