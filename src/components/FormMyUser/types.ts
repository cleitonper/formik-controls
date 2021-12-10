export interface Props {
  readonly className?: string;
}

export interface FormValues {
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly phone: string;
  readonly cpf: string;
  readonly current_pass: string;
  readonly new_pass: string;
  readonly confirm_new_pass: string;
}
