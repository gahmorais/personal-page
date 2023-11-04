import ListItem from "@/components/ListItem";
import ListLink from "@/components/ListLink";
import ListTitle from "@/components/ListText";
import BigTitle from "@/components/Title";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BigTitle>Projetos</BigTitle>
      <ul className="list-decimal">
        <ListItem>
          <ListTitle>Kotlin</ListTitle>
          <ListLink url="https://github.com/gahmorais/AutoCare_ProjetoAplicado.git">
            TCC MBA - Controle de manutenção de veículos
          </ListLink>

          <ListLink url="https://github.com/gahmorais/cartcheck">
            Verificador do valor das compras
          </ListLink>
        </ListItem>

        <ListItem>
          <ListTitle>Javascript</ListTitle>
          <ListLink url="https://github.com/gahmorais/curso-igti-react.git">
            Projetos desenvolvidos durante o Bootcamp React do IGTI
          </ListLink>
        </ListItem>
        <ListItem>
          <ListTitle>Java</ListTitle>
          <ListLink url="https://github.com/gahmorais/uri-online-judge.git">
            Desafios URI Online Judge
          </ListLink>
        </ListItem>
        <ListItem>
          <ListTitle>C</ListTitle>
          <ListLink url="https://github.com/gahmorais/crud-in-c">
            CRUD em C
          </ListLink>
        </ListItem>
        <ListItem>
          <ListTitle>C#</ListTitle>
          <ListLink url="https://github.com/gahmorais/supervisorio-arduino-c-.git">
            Monitoramento de tanque para mistura de bebidas
          </ListLink>
        </ListItem>
        <ListItem>
          <ListTitle>Python</ListTitle>
          <ListLink url="https://github.com/gahmorais/mercadinho-tio-salim.git">
            Sistema para frente de caixa
          </ListLink>
        </ListItem>
        <ListItem>
          <ListTitle>Flutter | Dart</ListTitle>
          <ListLink url="https://github.com/gahmorais/projeto_flutter_tmdb_mba_xpedecacao.git">
            Exibição de filmes populares utilizando a api TMDB
          </ListLink>
        </ListItem>
      </ul>
      <div></div>
    </main>
  );
}
