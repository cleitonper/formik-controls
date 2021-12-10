import * as Yup from 'yup';


export const schema = Yup.object({
  'first_name': Yup.string()
    .required('Informe seu nome'),
  'last_name': Yup.string()
    .required('Informe seu sobrenome'),
  'email': Yup.string()
    .email('Informe um e-mail válido')
    .required('Informe seu email'),
  'phone': Yup.string()
    .required('Informe seu telefone'),
  'cpf': Yup.string()
    .required('Informe seu CPF'),
  'current_pass': Yup.string()
    .min(8, 'No mínimo 8 caracteres')
    .max(32, 'No máximo 32 caracteres'),
  'new_pass': Yup.string()
    .when('current_pass', {
      is: (current_pass: string) => current_pass?.length >= 8 && current_pass?.length <= 32,
      then: Yup.string()
        .min(8, 'No mínimo 8 caracteres')
        .max(32, 'No máximo 32 caracteres')
        .required('Informe a nova senha'),
    }),
  'confirm_new_pass': Yup.string()
    .when('new_pass', {
      is: (new_pass: string) => new_pass?.length >= 8 && new_pass?.length <= 32,
      then: Yup.string()
        .required('Confirme a nova senha')
        .test('pass-match', 'Senhas diferentes', function(confirm_new_pass) {
          return this.parent.new_pass === confirm_new_pass;
        }),
    }),
});

export const initialValues = {
  'first_name': '',
  'last_name': '',
  'email': '',
  'phone': '',
  'cpf': '',
  'current_pass': '',
  'new_pass': '',
  'confirm_new_pass': '',
};
