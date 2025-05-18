import React from 'react';
import Link from 'next/link';

export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-cyan-700">Sobre a JACI Projetos e Construções</h1>
      
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <p className="text-xl text-gray-700">
          Somos uma empresa especializada em gerenciamento de obras, com foco em galpões, desdobros de terreno, unificação de lotes e aprovação de projetos em prefeituras.
        </p>
      </div>
      
      {/* História da Empresa */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-cyan-600 text-center">Nossa História</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-4">
            A JACI Projetos e Construções nasceu da visão de profissionais com mais de 15 anos de experiência no mercado de construção civil e aprovações de projetos. Identificamos uma lacuna no mercado: empresários e investidores precisavam de um parceiro que entendesse não apenas de construção, mas também de todo o processo burocrático e legal envolvido em seus empreendimentos.
          </p>
          <p className="text-gray-700 mb-4">
            Fundada em 2018, nossa empresa rapidamente se destacou pela capacidade de navegar com eficiência pelos complexos processos de aprovação junto às prefeituras, enquanto mantinha o mais alto padrão de qualidade nas construções.
          </p>
          <p className="text-gray-700">
            Hoje, somos reconhecidos como especialistas em galpões industriais e comerciais, desdobros de terreno e regularizações, tendo completado com sucesso mais de 50 projetos que geraram retorno significativo para nossos clientes.
          </p>
        </div>
      </section>
      
      {/* Missão, Visão e Valores */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-cyan-600 text-center">Missão, Visão e Valores</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-700 text-center">Missão</h3>
            <p className="text-gray-700">
              Transformar investimentos imobiliários em ativos de alto valor através de soluções construtivas inteligentes e processos de aprovação eficientes, maximizando o retorno para nossos clientes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-700 text-center">Visão</h3>
            <p className="text-gray-700">
              Ser reconhecida como a empresa referência em construção de galpões e regularização de empreendimentos no estado de São Paulo, conhecida pela excelência técnica e capacidade de entrega.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-700 text-center">Valores</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Transparência em todas as etapas do projeto</li>
              <li>• Compromisso com prazos e orçamentos</li>
              <li>• Excelência técnica e qualidade construtiva</li>
              <li>• Foco no retorno do investimento do cliente</li>
              <li>• Ética e responsabilidade em todas as relações</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Equipe */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-cyan-600 text-center">Nossa Equipe</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Membro 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
              <p className="text-gray-500">[Foto do Diretor]</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1 text-cyan-700">João Silva</h3>
              <p className="text-gray-600 mb-3">Diretor de Projetos</p>
              <p className="text-gray-700">
                Engenheiro Civil com mais de 20 anos de experiência em aprovações de projetos e gerenciamento de obras industriais.
              </p>
            </div>
          </div>
          {/* Membro 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
              <p className="text-gray-500">[Foto da Gerente]</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1 text-cyan-700">Maria Oliveira</h3>
              <p className="text-gray-600 mb-3">Gerente de Obras</p>
              <p className="text-gray-700">
                Arquiteta especializada em projetos industriais e comerciais, com vasta experiência em otimização de espaços e fluxos operacionais.
              </p>
            </div>
          </div>
          {/* Membro 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
              <p className="text-gray-500">[Foto do Especialista]</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1 text-cyan-700">Carlos Santos</h3>
              <p className="text-gray-600 mb-3">Especialista em Regularizações</p>
              <p className="text-gray-700">
                Advogado especializado em direito imobiliário e urbanístico, com profundo conhecimento dos processos de regularização e aprovação.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Clientes e Parceiros */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-cyan-600 text-center">Clientes e Parceiros</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-6 text-center">
            Temos orgulho de trabalhar com empresas e investidores que valorizam qualidade e eficiência.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Logos de Clientes - Placeholders */}
            <div className="h-24 bg-gray-200 rounded flex items-center justify-center">
              <p className="text-gray-500">Cliente 1</p>
            </div>
            <div className="h-24 bg-gray-200 rounded flex items-center justify-center">
              <p className="text-gray-500">Cliente 2</p>
            </div>
            <div className="h-24 bg-gray-200 rounded flex items-center justify-center">
              <p className="text-gray-500">Cliente 3</p>
            </div>
            <div className="h-24 bg-gray-200 rounded flex items-center justify-center">
              <p className="text-gray-500">Cliente 4</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <div className="text-center py-8 bg-cyan-600 text-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Pronto para trabalhar conosco?</h2>
        <p className="text-xl mb-6">Entre em contato e descubra como podemos transformar seu projeto em realidade.</p>
        <Link href="/contato" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300">
          Fale com Nossa Equipe
        </Link>
      </div>
    </div>
  );
}
