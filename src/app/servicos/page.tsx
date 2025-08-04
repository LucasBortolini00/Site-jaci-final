import React from 'react';
import Link from 'next/link';

export default function ServicosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-cyan-700">Nossos Serviços</h1>
      
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <p className="text-xl text-gray-700">
          Oferecemos soluções completas para NOSSA ALEGRIA seu investimento imobiliário, desde a concepção até a entrega final.
        </p>
      </div>
      
      {/* Serviços Principais */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-cyan-600 text-center">Serviços Especializados</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Serviço 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-64 overflow-hidden">
              <img
                src="/images/amora.jpeg"
                alt="Construção de Galpão"
                className="w-full h-full object-cover"
             />
          </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-cyan-600">Construção de Galpões</h3>
              <p className="text-gray-700 mb-4">
                Desenvolvemos projetos completos de galpões industriais e comerciais, desde a fundação até o acabamento final, com foco em durabilidade, funcionalidade e retorno sobre investimento.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Galpões para locação ou uso próprio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Estruturas metálicas ou concreto pré-moldado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Projetos personalizados conforme necessidade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Gerenciamento completo da obra</span>
                </li>
              </ul>
              <Link href="/contato" className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Solicitar Orçamento
              </Link>
            </div>
          </div>
          
          {/* Serviço 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
              <p className="text-gray-500">[Imagem: Desdobro de Terreno]</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-cyan-600">Desdobro de Terrenos</h3>
              <p className="text-gray-700 mb-4">
                Realizamos todo o processo de desdobro de terrenos, desde o orçamento preliminar de serviços tercerizados até a aprovação final junto à prefeitura, maximizando o potencial do seu investimento.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Análise de viabilidade técnica e legal</span>
                </li>
             
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Elaboração de projetos conforme legislação</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Aprovação junto aos órgãos competentes</span>
                </li>
              </ul>
              <Link href="/contato" className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Solicitar Orçamento
              </Link>
            </div>
          </div>
          
          {/* Serviço 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
              <p className="text-gray-500">[Imagem: Unificação de Lotes]</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-cyan-600">Unificação de Lotes</h3>
              <p className="text-gray-700 mb-4">
                Conduzimos o processo completo de unificação de lotes, permitindo o desenvolvimento de projetos maiores e mais rentáveis em áreas anteriormente fragmentadas.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Estudo de viabilidade e potencial construtivo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Documentação técnica e legal completa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Acompanhamento junto aos cartórios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Regularização junto à prefeitura</span>
                </li>
              </ul>
              <Link href="/contato" className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Solicitar Orçamento
              </Link>
            </div>
          </div>
          
          {/* Serviço 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
              <p className="text-gray-500">[Imagem: Aprovação de Projetos]</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-cyan-600">Aprovação de Projetos</h3>
              <p className="text-gray-700 mb-4">
                Contamos com expertise técnica e conhecimento burocrático para agilizar a aprovação de seus projetos junto às prefeituras e demais órgãos competentes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Análise de legislação e zoneamento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Elaboração de projetos conforme normas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Acompanhamento de processos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Obtenção de alvarás e licenças</span>
                </li>
              </ul>
              <Link href="/contato" className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Processo de Trabalho */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-8 text-cyan-600 text-center">Nosso Processo de Trabalho</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-700">Consultoria Inicial</h3>
            <p className="text-gray-700">Entendemos suas necessidades e objetivos para o projeto.</p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-700">Planejamento</h3>
            <p className="text-gray-700">Desenvolvemos o projeto técnico e cronograma detalhado.</p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-700">Execução</h3>
            <p className="text-gray-700">Realizamos o trabalho com qualidade e dentro do prazo.</p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-700">Entrega</h3>
            <p className="text-gray-700">Finalizamos com documentação completa e suporte pós-entrega.</p>
          </div>
        </div>
      </section>
      
      {/* Diferenciais */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-cyan-600 text-center">Por Que Escolher a JACI</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-cyan-700">Expertise Técnica</h3>
            <p className="text-gray-700">
              Nossa equipe possui amplo conhecimento técnico e experiência prática em todos os aspectos da construção e regularização.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-cyan-700">Agilidade em Aprovações</h3>
            <p className="text-gray-700">
              Conhecemos os trâmites burocráticos e mantemos bom relacionamento com órgãos públicos para agilizar processos.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-cyan-700">Transparência</h3>
            <p className="text-gray-700">
              Mantemos comunicação clara e relatórios detalhados em todas as etapas do projeto.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <div className="text-center py-8 bg-cyan-600 text-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Pronto para iniciar seu projeto?</h2>
        <p className="text-xl mb-6">Entre em contato para uma consulta personalizada e descubra como podemos ajudar.</p>
        <Link href="/contato" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300">
          Solicite um Orçamento
        </Link>
      </div>
    </div>
  );
}
