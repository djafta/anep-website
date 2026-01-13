import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <div className={"min-h-screen bg-white"}>
      <Header />
      <article className={"max-w-5xl mx-auto prose flex flex-col text-justify space-y-4 py-16"}>
        <h2>O que é a ANEP</h2>
        <p>
          A Autoridade Nacional de Educação Profissional, abreviadamente designada por ANEP, é o órgão Regulador e de
          Garantia de Qualidade de Educação Profissional em Moçambique. A ANEP foi criada através da Lei nº. 23/2014 de
          23 de Setembro alterada e republicada pela Lei nº. 6/2016 de 16 de Junho, ambas revogadas pela Lei nº 26/2022
          de 29 de Dezembro.
        </p>
        <p>
          A criação da ANEP é resultado de um amplo processo de consulta nacional que envolveu diversos segmentos da
          sociedade, nomeadamente governos locais, instituições provedoras de educação profissional, sector empresarial,
          sindicatos, organizações da sociedade civil, pais e encarregados de educação entre outros.
        </p>
        <p>
          Ao criar e estabelecer a ANEP, o Governo de Moçambique visa, por um lado, dotar o sistema de educação
          profissional de um novo quadro de governação que promove a participação activa do sector privado e de outros
          parceiros sociais na gestão e nos processos de tomada de decisão sobre a educação profissional e, por outro,
          garantir a qualidade do subsistema de educação profissional que integra o Ensino Técnico Profissional e a
          Formação Profissional.
        </p>
        <p>
          Como órgão regulador, compete a ANEP a gestão do Quadro Nacional de Qualificações Profissionais, incluindo a
          aprovação de Qualificações Profissionais e seu registo no respectivo Catálogo Nacional. Na sua actuação como
          órgão de garantia de Qualidade cabe a ANEP a Acreditação dos Provedores de Formação e a Certificação dos
          Formadores, dos Avaliadores e dos Formandos da Educação Profissional.
        </p>
        <p>
          É, ainda, competência da ANEP gerir o Fundo Nacional de Educação Profissional (FNEP) que é um novo mecanismo
          de financiamento da educação profissional que conta com a comparticipação do Sector Produtivo, através de uma
          contribuição mensal de 0.65%, calculada com base na folha de salário de cada empresa contribuinte do fundo.
        </p>
        <h2>Estrutura da ANEP</h2>
        <p>A ANEP é tutelada pela entidade que superintende o subsistema de educação profissional. </p>
        <p>
          Com vista a garantir a governação participativa da educação profissional a ANEP é superiormente dirigida por
          um Conselho de Administração, com funções não executivas, com a seguinte composição:
        </p>
        <ul>
          <li>1 Presidente, nomeado pelo Primeiro Ministro;</li>
          <li>1 Representante do Ministério que superintende a área de Ensino Técnico Profissional;</li>
          <li>1 Representante do Ministério que superintende a área de Emprego;</li>
          <li>1 Representante do Ministério que superintende a área das Finanças;</li>
          <li>
            2 Representantes do Sector Privado, identificados pela Confederação das Associações Económicas de Moçambique
            (CTA);{" "}
          </li>
          <li>
            2 Representantes dos Sindicatos, um identificado pela Organização dos Trabalhadores de Moçambique- Central
            Sindical (OTM-CS) e outro pela Confederação Nacional dos Sindicatos Independentes e Livres de Moçambique
            (CONSILMO);
          </li>
          <li>1 Representante da Sociedade Civil, identificado pelo Conselho Nacional da Juventude (CNJ).</li>
        </ul>
        <p>
          A gestão diária da ANEP é assegurada por um Conselho de Direcção dirigido por um Director Geral, nomeado pelo
          Ministro de tutela, através de um concurso público, e integra as seguintes Divisões direcções e serviços:{" "}
        </p>
        <ul>
          <li>Direcção de Qualificações Profissionais;</li>
          <li>Direcção de Desenvolvimento Estratégico e Institucional;</li>
          <li>Direcção de Registo e Certificação;</li>
          <li>Direcção de Gestão e Garantia da Qualidade;</li>
          <li>Direcção do Fundo Nacional da Educação Profissional;</li>
          <li>Serviços de Administração e Recursos Humanos; e</li>
          <li>Departamento de Gestão de Tecnologias e Sistemas de Informação.</li>
        </ul>
        <h2>Visão</h2>
        <p>
          Estabelecer um Sistema de Educação Profissional de excelência que responda às crescentes exigências da
          competitividade global.
        </p>
        <h2>Missão </h2>
        <p>
          Regular a educação profissional, com a participação dos parceiros sociais, para o desenvolvimento de um
          capital humano competitivo.
        </p>
        <h2>Valores</h2>
        <ul>
          <li>Qualidade</li>
          <li>Parceria</li>
          <li>Integridade</li>
          <li>Inclusão</li>
          <li>Competência</li>
          <li>Inovação</li>
        </ul>
        <h2>Competências da ANEP</h2>
        <ul>
          <li>
            Gerir o Quadro Nacional de Qualificações Profissionais e supervisionar a implementação de todos os
            mecanismos correspondentes;
          </li>
          <li>Fixar e registar os padrões de competência e qualificações;</li>
          <li>Administrar o Quadro Nacional de Qualificações (QNQP) na forma prescrita;</li>
          <li>Proceder ao registo e acreditação do provedor e do avaliador de educação profissional;</li>
          <li>Certificar o graduado de educação profissional;</li>
          <li>Certificar o formador de educação profissional;</li>
          <li>Implementar o sistema de garantia de qualidade da educação profissional</li>
          <li>
            Partilhar com o Observatório do Mercado de Trabalho e outras entidades competentes, informação relevante
            para o mercado de trabalho;
          </li>
          <li>
            Tramitar e dar parecer sobre os pedidos de criação de instituições de Educação Profissional, nos termos da
            lei;
          </li>
          <li>Fiscalizar o funcionamento das instituições de Educação Profissional</li>
        </ul>
      </article>
      <Footer />
    </div>
  );
}
