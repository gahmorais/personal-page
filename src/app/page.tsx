import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl">Projetos</h1>
      <ul className="list-decimal">
        <li>
          <div>
            <p>Kotlin</p>
            <Link
              href="https://github.com/gahmorais/AutoCare_ProjetoAplicado.git"
              className="text-blue-500"
            >
              TCC MBA - Controle de manutenção de veículos
            </Link>
          </div>
        </li>
        <li>Javascript</li>
        <li>
          <div>
            <p>Java</p>
            <Link
              href="https://github.com/gahmorais/uri-online-judge.git"
              className="text-blue-500"
            >
              Desafios URI Online Judge
            </Link>
          </div>
        </li>
        <li>
          <div>
            <p>C</p>
            <Link
              href="https://github.com/gahmorais/crud-in-c"
              className="text-blue-500"
            >
              CRUD em C
            </Link>
          </div>
        </li>
        <li>
          <div>
            <p>C#</p>
            <Link
              href="https://github.com/gahmorais/supervisorio-arduino-c-.git"
              className="text-blue-500"
            >
              Monitoramento de tanque para mistura de bebidas
            </Link>
          </div>
        </li>
        <li>
          <div>
            <p>Python</p>
            <Link
              href="https://github.com/gahmorais/mercadinho-tio-salim.git"
              className="text-blue-500"
            >
              Sistema para frente de caixa
            </Link>
          </div>
        </li>
        <li>
          <div>
            <p>Flutter | Dart</p>
            <Link
              href="https://github.com/gahmorais/projeto_flutter_tmdb_mba_xpedecacao.git"
              className="text-blue-500"
            >
              Exibição de filmes populares utilizando a api TMDB
            </Link>
          </div>
        </li>
      </ul>
      <div></div>
    </main>
  );
}
