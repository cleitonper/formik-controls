import React, { FunctionComponent, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Form, FormikHelpers } from 'formik';

import { Input, Submit } from 'components/Formik';
import { schema, initialValues } from './form.schema';
import { Container } from './styles';
import { Props, FormValues } from './types';


const FormMyUser: FunctionComponent<Props> = ({ className }) => {

  const handleSubmit = useCallback(async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    actions.setSubmitting(true);
    actions.setStatus('submiting');

    console.log(values);
    const { first_name, last_name, email } = values;

    setTimeout(() => {
      actions.setValues({ first_name, last_name, email, phone: '', cpf: '', current_pass: '', new_pass: '', confirm_new_pass: ''  });
      actions.setSubmitting(false);
      actions.setStatus('submited');
    }, 5000);
  }, []);

  return (
    <Container className={className}>
      <Formik
        validationSchema={schema}
        enableReinitialize={true}
        initialValues={{ ...initialValues }}
        initialStatus="unsubmited"
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <Input
            type="text"
            name="first_name"
            label="Nome"
            className="field"
            model="float"
          />
          <Input
            type="text"
            name="last_name"
            label="Sobrenome"
            className="field"
            model="float"
          />
          <Input
            type="text"
            name="email"
            label="Endereço de e-mail"
            inputMode="email"
            className="field"
            model="float"
          />
          <Input
            type="text"
            name="phone"
            label="Telefone para contato"
            inputMode="numeric"
            mask="(00) 00000-0000"
            className="field"
            model="float"
          />
          <Input
            type="text"
            name="cpf"
            label="CPF"
            inputMode="numeric"
            mask="000.000.000-00"
            className="field"
            model="float"
          />
          <div className="password">
            <h2>
              Alteração de senha
            </h2>

            <div className="message">
              <FontAwesomeIcon icon={['fas', 'exclamation-circle']} className="icon" />
              <p>
                Deixe os campos em branco para não alterar a senha
              </p>
            </div>

            <Input
              type="password"
              name="current_pass"
              label="Senha atual"
              className="field"
              model="float"
            />
            <Input
              type="password"
              name="new_pass"
              label="Nova senha"
              className="field"
              model="float"
            />
            <Input
              type="password"
              name="confirm_new_pass"
              label="Confirmar nova senha"
              className="field"
              model="float"
            />
          </div>
          <Submit
            label="Salvar"
            className="submit"
          />
        </Form>
      </Formik>
    </Container>
  );
};


export default FormMyUser;
