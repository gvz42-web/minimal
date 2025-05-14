export type SelectionDialogOption<T> = {
  value: T;
  label: string;
};

export type SelectionDialogData<T> = {
  options: SelectionDialogOption<T>[];
  selectedOption: T;
  title: string;
};
