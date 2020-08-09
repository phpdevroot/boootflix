import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function apagaInputInicial(infoDoEvento) {
    const getAttribute = infoDoEvento.target.getAttribute.bind(infoDoEvento.target);
    const { value } = infoDoEvento.target;
    setValue(
      getAttribute('name'),
      value,

    );
  }


  //ADICIONANDO EFEITOS AO CARREGAR PAGINA
    useEffect(() => {
      console.log('VErificando resultado');
      const URL_TOP = 'http://localhost:8080/categorias';
      fetch(URL_TOP)
        .then(async (respostaDoServidor) => {
          const resposta = await respostaDoServidor.json();
          setCategorias([
            ...resposta,
          ]);
        });
    },[] );

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infoDoEvento) {
        infoDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValue(valoresIniciais);
      }}
      >

        {/* NOME DA CATEGORIA */}

        <FormField
          label="Nome da Categoria"
          // type="text"
          name="nome"
          value={values.nome}
          onChange={apagaInputInicial}
        />

        {/* DESCRIÇÃO DA CATEGORIA */}

        <FormField
          label="Descrição da Categoria"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={apagaInputInicial}
        />

        {/* COR DA CATEGORIA */}
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={apagaInputInicial}
        />

        <Button>
          Cadastar
        </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {categorias.map((categorias, indice) => (
          <li key={`${categorias}${indice}`}>
            {categorias.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
