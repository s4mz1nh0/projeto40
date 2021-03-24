import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './index.css';

const Serie = () => {
  const [serie, setSerie] = useState([]);
  useEffect(() => {
    async function getSerie() {
      const resposta = await axios.get(
        'http://localhost:3000/serie?_expand=genero',
      );
      setSerie(resposta.data);
    }
    getSerie();
  }, []);

  async function excluirSerie(id) {
    if (window.confirm('Excluir a Série?')) {
      try {
        await axios.delete(`http://localhost:3000/serie/${id}`);

        setSerie(serie.filter((serie) => serie.id !== id));
      } catch (error) {
        alert('Erro ao excluir!');
      }
    }
  }

  if (serie.length === 0) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <br />
      <div className="tab">
        <table className="table table-row">
          <thead>
            <tr className="tr">
              <th>Nome</th>
              <th>Ano de Lançamento</th>
              <th>Gênero</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {serie.map((serie) => (
              <tr key={serie.id} className="tb">
                <td>{serie.nome}</td>
                <td>{serie.ano}</td>
                <td>{serie.genero.nome}</td>
                <td>{serie.status}</td>
                <td>
                  <Link
                    to={`cadastro/${serie.id}`}
                    className="badge badge-success"
                  >
                    Editar
                  </Link>{' '}
                  <button
                    className="badge badge-danger"
                    onClick={() => excluirSerie(serie.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Serie;
