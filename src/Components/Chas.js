import React from "react";
import chaaromatico from "../Imagens/cha-aromatico.png";
import chamel from "../Imagens/cha-de-mel-de-gengibre-e-limao.png";
import chacitrus from "../Imagens/cha-gelado-citrus.png";
import chagengibre from "../Imagens/cha-gengibre-mel.png";
import chapreto from "../Imagens/cha-preto-com-limao.png";
import chaervas from "../Imagens/limao-cha-de-ervas.png";
import chagelado from "../Imagens/refrigerante-cha-gelado.png";
import chamelancia from "../Imagens/refrigerante-cha-gelado-melancia.png";
import chavermelho from "../Imagens/refrigerante-vermelho.png";
import chaindiano from "../Imagens/masala-chai-indiano 1.png";
import "../Styles/Chas.scss";

function Chas() {
  return (
    <div className="chas" id="Chas">
      <div className="container-colunas">
        <ul className="coluna-1">
          <h2>Chás Quentes</h2>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={chaindiano} alt="cha-indiano" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">Chá Indiano</span>
                </div>
                <div className="ingredientes">
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </span>
                </div>
                <div className="preco">R$ 4,50</div>
              </div>
            </div>
          </li>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={chaervas} alt="cha-ervas" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">Chá de Ervas</span>
                </div>
                <div className="ingredientes">
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </span>
                </div>
                <div className="preco">R$ 4,50</div>
              </div>
            </div>
          </li>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={chaaromatico} alt="cha-aromatico" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">Chá Aromático</span>
                </div>
                <div className="ingredientes">
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </span>
                </div>
                <div className="preco">R$ 4,50</div>
              </div>
            </div>
          </li>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={chamel} alt="cha-mel" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">Chá com mel</span>
                </div>
                <div className="ingredientes">
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </span>
                </div>
                <div className="preco">R$ 4,50</div>
              </div>
            </div>
          </li>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={chagengibre} alt="cha-gengibre" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">Chá com gengibre</span>
                </div>
                <div className="ingredientes">
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </span>
                </div>
                <div className="preco">R$ 4,50</div>
              </div>
            </div>
          </li>
        </ul>
        <ul className="coluna-2">
          <h2>Chás Gelados</h2>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={chacitrus} alt="cha-citrus" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">Chá Citrus</span>
                </div>
                <div className="ingredientes">
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </span>
                </div>
                <div className="preco">R$ 4,50</div>
              </div>
            </div>
          </li>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={chagelado} alt="cha-gelado" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">Chá Gelado</span>
                </div>
                <div className="ingredientes">
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </span>
                </div>
                <div className="preco">R$ 4,50</div>
              </div>
            </div>
          </li>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={chamelancia} alt="cha-melancia" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">Chá com Melancia</span>
                </div>
                <div className="ingredientes">
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </span>
                </div>
                <div className="preco">R$ 4,50</div>
              </div>
            </div>
          </li>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={chapreto} alt="cha-preto" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">Chá Preto</span>
                </div>
                <div className="ingredientes">
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </span>
                </div>
                <div className="preco">R$ 4,50</div>
              </div>
            </div>
          </li>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={chavermelho} alt="cha-vermelho" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">Chá Vermelho</span>
                </div>
                <div className="ingredientes">
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </span>
                </div>
                <div className="preco">R$ 4,50</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Chas;
export { Chas };
