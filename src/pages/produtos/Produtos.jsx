import styles from './Produtos.module.css';
import { IoBed } from "react-icons/io5";
import { FaKitchenSet } from "react-icons/fa6";
import { FaToilet } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { MdBabyChangingStation } from "react-icons/md";

function Produtos() {
  const [categoria, setCategoria] = useState('quarto');
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const getItems = () => {
      const url = 'https://8xl4mzcac3.execute-api.sa-east-1.amazonaws.com/test/DynamoDBManager';
      const data = {
        operation: 'read'
      };

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          setItens(data.Items)
        })
        .catch(error => {
          console.error('Erro ao enviar requisição:', error);
        });
    }
    getItems();
  }, [])

  function AdicionarNaAPI(id, novoNome) {
    const url = 'https://8xl4mzcac3.execute-api.sa-east-1.amazonaws.com/test/DynamoDBManager';
    const data = {
      operation: 'update',
      payload: {
        Key: { id: id },
        UpdateExpression: 'SET #n = list_append(if_not_exists(#n, :empty_list), :novoNome)',
        ExpressionAttributeNames: { '#n': 'nomes' },
        ExpressionAttributeValues: { ':novoNome': [novoNome], ':empty_list': [] }
      }
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  async function RemoverDaAPI(id, index) {
    const url = 'https://8xl4mzcac3.execute-api.sa-east-1.amazonaws.com/test/DynamoDBManager';
    const data = {
      operation: 'update',
      payload: {
        Key: { id: id },
        UpdateExpression: `REMOVE #n[${index}]`,
        ExpressionAttributeNames: { '#n': 'nomes' },
        ReturnValues: 'ALL_NEW'
      }
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const DarProduto = (item) => {
    const nome = localStorage.getItem('nome_do_convidado_danyeriquelme');
    const confirmarAcao = () => {
      return window.confirm(`${nome.split(' ')[0]}, você gostaria de dar "${item}" para Dany e Riquelme?`);
    };

    const resposta = confirmarAcao();
    if (resposta) {
      AdicionarNaAPI(item, nome);
      alert('Agradecemos o seu presente <3');
    } else {
      alert('Tudo bem, o importante é a intenção.');
    }
  }

  const RemoverProduto = (item) => {
    const nome = localStorage.getItem('nome_do_convidado_danyeriquelme');
    const confirmarAcao = () => {
      return window.confirm(`${nome.split(' ')[0]}, você marcou "${item}" por acidente?`);
    };

    const resposta = confirmarAcao();
    if (resposta) {
      AcharNome(item, nome).then(index => RemoverDaAPI(item, index));
      alert('Entendido, o item será removido.');
    } else {
      alert('Ok, o item continua marcado');
    }
  }

  const AcharNome = (item, nome) => {
    const url = 'https://8xl4mzcac3.execute-api.sa-east-1.amazonaws.com/test/DynamoDBManager';
    const data = {
      operation: 'read'
    };

    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          for (let i = 0; i < data.Items.length; i++) {
            if (data.Items[i].id.S == item) {
              for (let j = 0; j < data.Items[i].nomes.L.length; j++) {
                if (data.Items[i].nomes.L[j].S == nome) {
                  resolve(j);
                }
              }
            }
          }
          reject('Nome não encontrado.');
        })
        .catch(error => {
          reject('Erro ao enviar requisição: ' + error);
        });
    });
  }


  return (
    <main className={styles.main}>
      <div className={styles.moldura}>
        <div className={styles.paper}>
          <div className={styles.pattern}>
            <div className={styles.content}>
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
              <br />
              <br />
              {itens.map((item, id) => {
                if (item.categoria.S.normalize("NFD").replace(/[\u0300-\u036f]/g, "") === (categoria.charAt(0).toUpperCase() + categoria.slice(1))) {
                  return (
                    <div key={id} className={styles.linha}>
                      <span className={styles.nomeDoProduto}>-{item.id.S}</span>
                      <div className={styles.gerenciarProduto}>
                        {item.nomes.L.length > 0 ?
                          <span className={styles.remover} onClick={() => RemoverProduto(item.id.S)}>-</span> : <div>&nbsp;</div>
                        }
                        <span>{item.nomes.L.length}</span>
                        <span className={styles.adicionar} onClick={() => DarProduto(item.id.S)}>+</span>
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.button}>
          <IoBed onClick={() => setCategoria('quarto')} />
          <span>Quarto</span>
        </div>
        <div className={styles.button}>
          <FaKitchenSet onClick={() => setCategoria('cozinha')} />
          <span>Cozinha</span>
        </div>
        <div className={styles.button}>
          <FaToilet onClick={() => setCategoria('banheiro')} />
          <span>Banheiro</span>
        </div>
        <div className={styles.button}>
          <MdBabyChangingStation onClick={() => setCategoria('higiene')} />
          <span>Higiene</span>
        </div>
      </div>
    </main>
  )
}

export default Produtos;
