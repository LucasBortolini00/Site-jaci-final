import React from 'react';
import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-cyan-700">Nosso Portfólio</h1>
      
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <p className="text-xl text-gray-700">
          Conheça alguns dos nossos projetos concluídos com sucesso. Cada obra representa nosso compromisso com qualidade, eficiência e resultados.
        </p>
      </div>
      
      {/* Projetos */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Projeto 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
            <p className="text-gray-500">[Imagem: Galpão Industrial]</p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 text-cyan-600">Galpão Industrial Modelo</h3>
            <p className="text-gray-600 mb-3">Localização: São Paulo, SP</p>
            <p className="text-gray-700 mb-4">
              Construção de galpão industrial com 2.500m² para empresa do setor logístico. Projeto completo desde a fundação até a entrega final.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">Galpão Industrial</span>
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">Construção Completa</span>
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">2.500m²</span>
            </div>
            <p className="text-gray-700 font-medium">
              Prazo de execução: 8 meses | Entregue em 2023
            </p>
          </div>
        </div>
        
        {/* Projeto 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
            <p className="text-gray-500">[Imagem: Desdobro de Terreno]</p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 text-cyan-600">Desdobro de Terreno Comercial</h3>
            <p className="text-gray-600 mb-3">Localização: Campinas, SP</p>
            <p className="text-gray-700 mb-4">
              Processo completo de desdobro de terreno de 5.000m² em 4 lotes comerciais, incluindo toda a regularização e aprovação junto à prefeitura.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">Desdobro</span>
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">Regularização</span>
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">5.000m²</span>
            </div>
            <p className="text-gray-700 font-medium">
              Prazo de execução: 6 meses | Concluído em 2022
            </p>
          </div>
        </div>
        
        {/* Projeto 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
            <p className="text-gray-500">[Imagem: Condomínio de Galpões]</p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 text-cyan-600">Condomínio de Galpões Modulares</h3>
            <p className="text-gray-600 mb-3">Localização: Guarulhos, SP</p>
            <p className="text-gray-700 mb-4">
              Desenvolvimento de condomínio com 6 galpões modulares para locação, totalizando 4.800m² de área construída. Projeto completo desde a concepção até a entrega.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">Condomínio Logístico</span>
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">Galpões Modulares</span>
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">4.800m²</span>
            </div>
            <p className="text-gray-700 font-medium">
              Prazo de execução: 14 meses | Entregue em 2023
            </p>
          </div>
        </div>
        
        {/* Projeto 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
            <p className="text-gray-500">[Imagem: Edifício Comercial]</p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 text-cyan-600">Edifício Comercial Centro Empresarial</h3>
            <p className="text-gray-600 mb-3">Localização: São Paulo, SP</p>
            <p className="text-gray-700 mb-4">
              Construção de edifício comercial de 3 andares com 1.800m² de área construída, incluindo estacionamento e áreas comuns.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">Edifício Comercial</span>
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">3 Pavimentos</span>
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">1.800m²</span>
            </div>
            <p className="text-gray-700 font-medium">
              Prazo de execução: 12 meses | Entregue em 2022
            </p>
          </div>
        </div>
      </div>
      
      {/* Depoimentos */}
      <section className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-cyan-600 text-center">O Que Nossos Clientes Dizem</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 mb-4 italic">
              "A JACI superou todas as nossas expectativas. O projeto foi entregue dentro do prazo e com um padrão de qualidade excepcional. A equipe foi extremamente profissional e atenciosa durante todo o processo."
            </p>
            <p className="font-semibold text-cyan-700">João Silva, Diretor da Empresa XYZ Logística</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 mb-4 italic">
              "O processo de desdobro do nosso terreno foi conduzido com muita eficiência pela JACI. A equipe demonstrou grande conhecimento técnico e agilidade nas aprovações junto à prefeitura."
            </p>
            <p className="font-semibold text-cyan-700">Maria Oliveira, Investidora Imobiliária</p>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <div className="text-center py-8 bg-cyan-600 text-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Quer seu projeto no nosso portfólio?</h2>
        <p className="text-xl mb-6">Entre em contato e vamos transformar sua visão em realidade.</p>
        <Link href="/contato" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300">
          Fale com Nossa Equipe
        </Link>
      </div>
    </div>
  );
}
