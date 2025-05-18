import React from 'react';
import Link from 'next/link';

export default function DiferenciaisPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-cyan-700">Nossos Diferenciais</h1>
      
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <p className="text-xl text-gray-700">
          Conheça o que torna a JACI Projetos e Construções a escolha ideal para seu investimento imobiliário.
        </p>
      </div>
      
      {/* Diferenciais Principais */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Diferencial 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-48 bg-cyan-600 flex items-center justify-center">
            <span className="text-5xl text-white">🏗️</span>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-3 text-cyan-600">Expertise em Aprovações</h3>
            <p className="text-gray-700">
              Nossa equipe possui profundo conhecimento dos processos de aprovação junto às prefeituras e órgãos competentes, garantindo agilidade e eficiência na regularização do seu empreendimento.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Conhecimento técnico das legislações municipais</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Relacionamento com órgãos públicos</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Acompanhamento personalizado de processos</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Diferencial 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-48 bg-cyan-600 flex items-center justify-center">
            <span className="text-5xl text-white">💰</span>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-3 text-cyan-600">Economia Inteligente</h3>
            <p className="text-gray-700">
              Nosso gerenciamento otimizado garante que seu investimento renda mais, sem comprometer a qualidade final da obra. Buscamos as melhores soluções para maximizar seu retorno.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Otimização de recursos e materiais</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Negociação eficiente com fornecedores</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Controle rigoroso de orçamentos</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Diferencial 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-48 bg-cyan-600 flex items-center justify-center">
            <span className="text-5xl text-white">🔍</span>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-3 text-cyan-600">Transparência Total</h3>
            <p className="text-gray-700">
              Mantemos uma comunicação clara e honesta em todas as fases do projeto. Você sempre saberá exatamente o que está acontecendo com seu investimento.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Relatórios detalhados de progresso</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Prestação de contas transparente</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Comunicação direta e acessível</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Diferenciais Adicionais */}
      <section className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-cyan-600 text-center">Mais Razões para Escolher a JACI</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3 text-cyan-700">Qualidade Inegociável</h3>
            <p className="text-gray-700">
              Utilizamos materiais de primeira linha e contamos com profissionais qualificados para garantir a durabilidade e segurança de cada obra. Nosso compromisso com a excelência é visível em cada detalhe.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3 text-cyan-700">Compromisso com Prazos</h3>
            <p className="text-gray-700">
              Entendemos que tempo é dinheiro, especialmente em investimentos imobiliários. Por isso, trabalhamos com cronogramas realistas e nos comprometemos a cumpri-los rigorosamente.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3 text-cyan-700">Soluções Personalizadas</h3>
            <p className="text-gray-700">
              Cada cliente e cada projeto têm necessidades únicas. Desenvolvemos soluções sob medida para atender às especificidades do seu empreendimento e maximizar seus resultados.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3 text-cyan-700">Suporte Pós-Entrega</h3>
            <p className="text-gray-700">
              Nosso compromisso não termina com a entrega da obra. Oferecemos suporte contínuo para garantir que seu investimento continue rendendo frutos a longo prazo.
            </p>
          </div>
        </div>
      </section>
      
      {/* Comparativo */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-cyan-600 text-center">Por Que Nos Escolher</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-cyan-600 text-white">
                <th className="p-4 text-left">Características</th>
                <th className="p-4 text-center">JACI Projetos</th>
                <th className="p-4 text-center">Concorrência</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium">Expertise em Aprovações</td>
                <td className="p-4 text-center text-green-600">✓</td>
                <td className="p-4 text-center text-gray-400">Limitada</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-4 font-medium">Economia Inteligente</td>
                <td className="p-4 text-center text-green-600">✓</td>
                <td className="p-4 text-center text-gray-400">Variável</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium">Transparência Total</td>
                <td className="p-4 text-center text-green-600">✓</td>
                <td className="p-4 text-center text-gray-400">Nem sempre</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-4 font-medium">Foco em Galpões e Regularizações</td>
                <td className="p-4 text-center text-green-600">✓</td>
                <td className="p-4 text-center text-gray-400">Generalista</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium">Suporte Pós-Entrega</td>
                <td className="p-4 text-center text-green-600">✓</td>
                <td className="p-4 text-center text-gray-400">Raramente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      {/* CTA */}
      <div className="text-center py-8 bg-cyan-600 text-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Experimente a diferença JACI em seu próximo projeto</h2>
        <p className="text-xl mb-6">Entre em contato para uma consulta personalizada e descubra como podemos transformar sua visão em realidade.</p>
        <Link href="/contato" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300">
          Fale com Nossa Equipe
        </Link>
      </div>
    </div>
  );
}
