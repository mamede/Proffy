import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form>
          <fieldset>
            <legend>Seus Dados</legend>

            <Input
              name="name"
              label="Nome Completo"
              value="Nome"
            />
            <Input
              name="avatar"
              label="Avatar"
              value="Avatar"
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value="Zap"
            />
            <Textarea
              name="bio"
              label="Biografia"
              value="Biografia"
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Matéria"
              value="Programação"
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação Física', label: 'Educação Física' },
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
                { value: 'Programação', label: 'Programação' },
              ]}
            />
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value="R$ 60,00"
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button">
                + Novo horário
              </button>
            </legend>

            <div className="schedule-item">
              <Select
                name="week_day"
                label="Dia da semana"
                value="1"
                options={[
                  { value: '0', label: 'Domingo' },
                  { value: '1', label: 'Segunda-feira' },
                  { value: '2', label: 'Terça-feira' },
                  { value: '3', label: 'Quarta-feira' },
                  { value: '4', label: 'Quinta-feira' },
                  { value: '5', label: 'Sexta-feira' },
                  { value: '6', label: 'Sábado' },
                ]}
              />
              <Input
                name="from"
                label="Das"
                type="time"
                value=""
              />
              <Input
                name="to"
                label="Até"
                type="time"
                value=""
              />
            </div>
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"/>
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar Cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;