import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import './index.css';

const CadastroS = () => {
  const [generos, setGeneros] = React.useState([]);

  const [nome, setNome] = React.useState('');
  const [ano, setAno] = React.useState('');
  const [generoId, setGeneroId] = React.useState(1);
  const [status, setStatus] = React.useState('');

  const params = useParams();

  React.useEffect(() => {
    if (params.id) {
      async function getSerie() {
        const resposta = await axios.get(
          `http://localhost:3000/serie/${params.id}`,
        );
        setNome(resposta.data.nome);
        setAno(resposta.data.ano);
        setGeneroId(resposta.data.generoId);
        setStatus(resposta.data.status);
      }
      getSerie();
    }
  }, [params.id]);

  React.useEffect(() => {
    async function getGeneros() {
      const resposta = await axios.get('http://localhost:3000/generos');
      setGeneros(resposta.data);
    }
    getGeneros();
  }, [params.id]);

  async function submeterForm(e) {
    e.preventDefault();

    try {
      if (!params.id) {
        await axios.post('http://localhost:3000/serie', {
          nome,
          ano: Number(ano),
          generoId: Number(generoId),
          status,
        });
      } else {
        await axios.put(`http://localhost:3000/serie/${params.id}`, {
          nome,
          ano: Number(ano),
          generoId: Number(generoId),
          status,
        });
      }

      setNome('');
      setAno('');
      setGeneroId(1);
      setStatus('');

      alert('Dados salvos com sucesso!');
    } catch (error) {
      alert('Erro ao salvar os dados!');
    }
  }

  return (
    <form onSubmit={submeterForm}>
      <div className="c">
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            className="form-control"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="ano">Ano de Lançamento</label>
          <input
            type="number"
            name="ano"
            id="ano"
            className="form-control"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="generoId">Gênero</label>
          <select
            name="generoId"
            id="generoId"
            className="form-control"
            value={generoId}
            onChange={(e) => setGeneroId(e.target.value)}
          >
            {generos.map((genero) => (
              <option key={genero.id} value={genero.id}>
                {genero.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <input
            type="text"
            name="status"
            id="status"
            className="form-control"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          {' '}
          Salvar
        </button>
      </div>
    </form>
  );
};

export default CadastroS;
