import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categorias, setCategorias]= useState(['Teste']);
  //const [nomeDaCategoria, setValues] = useState('Filmes');
  
  const valoresIniciais = {
      nome:'Nome Inicial',
      descricao:'Descrição Inicial',
      cor: '#000 ',
  } 
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave,valor) {
    setValue({

      ...values,
      chave: valor,
      
    })
  }


    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>


        <form onSubmit={function handleSubmit(infoDoEvento){
          infoDoEvento.preventDefault();
          console.log('Enviando formulario')
          setCategorias([
            ...categorias,
            values,
          ]);
        }}>
          {/* State */}

            <div>
          <label>
            Nome da Categoria: 
            <input
              type="text"
              value={values.nome}
              onChange={function apagaInputInicial (infoDoEvento){
               setValues(infoDoEvento.target.value)
              }}
           />
          </label>
            </div>

            <div>
            <label>
            Descrição
            <textarea
              type="text"
              value={values.descricao}
              onChange={function apagaInputInicial (infoDoEvento){
               setValues(infoDoEvento.target.value)
              }}
           />
          </label>
            </div>     

            <div>
            <label>
            Cor
            <input
              type="color"
              value={values.cor}
              onChange={function apagaInputInicial (infoDoEvento){
               setValues(infoDoEvento.target.value)
              }}
           />
          </label>
            </div>

          <button>
            Cadastar
          </button>

        </form>
        <ul>
          {categorias.map((categorias, indice) =>{
            return (
              <li key={`${categorias}${indice}`}>
                  {categorias}
              </li>
            )
          })}
        </ul>




      <Link to="/">
        Ir para home
      </Link>
      </PageDefault>
    )
  
  }

  export default CadastroCategoria;