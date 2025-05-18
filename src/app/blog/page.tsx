import React from 'react';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-cyan-700">Blog JACI</h1>
      
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <p className="text-xl text-gray-700">
          Compartilhamos conhecimento, tendências e insights sobre o mercado de construção e investimentos imobiliários.
        </p>
      </div>
      
      {/* Artigos do Blog */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Artigo 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
            <p className="text-gray-500">[Imagem: Galpão Moderno]</p>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-sm text-gray-500">12 de Maio, 2025</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-sm bg-cyan-100 text-cyan-800 px-2 py-1 rounded">Investimentos</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-cyan-600">Como Maximizar o Retorno em Investimentos em Galpões</h3>
            <p className="text-gray-700 mb-4">
              Descubra as estratégias mais eficientes para aumentar a rentabilidade dos seus investimentos em galpões industriais e logísticos.
            </p>
            <Link href="#" className="text-cyan-600 font-medium hover:text-cyan-800 transition-colors">
              Leia mais →
            </Link>
          </div>
        </div>
        
        {/* Artigo 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
            <p className="text-gray-500">[Imagem: Documentos de Aprovação]</p>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-sm text-gray-500">28 de Abril, 2025</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-sm bg-cyan-100 text-cyan-800 px-2 py-1 rounded">Regularização</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-cyan-600">Guia Completo para Desdobro de Terrenos: O Que Você Precisa Saber</h3>
            <p className="text-gray-700 mb-4">
              Entenda todos os aspectos legais e técnicos envolvidos no processo de desdobro de terrenos e como maximizar o valor do seu imóvel.
            </p>
            <Link href="#" className="text-cyan-600 font-medium hover:text-cyan-800 transition-colors">
              Leia mais →
            </Link>
          </div>
        </div>
        
        {/* Artigo 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
            <p className="text-gray-500">[Imagem: Construção Sustentável]</p>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-sm text-gray-500">15 de Abril, 2025</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-sm bg-cyan-100 text-cyan-800 px-2 py-1 rounded">Sustentabilidade</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-cyan-600">Construção Sustentável: Tendências e Benefícios para Galpões Industriais</h3>
            <p className="text-gray-700 mb-4">
              Conheça as principais práticas de construção sustentável e como elas podem reduzir custos operacionais e aumentar o valor do seu empreendimento.
            </p>
            <Link href="#" className="text-cyan-600 font-medium hover:text-cyan-800 transition-colors">
              Leia mais →
            </Link>
          </div>
        </div>
        
        {/* Artigo 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
            <p className="text-gray-500">[Imagem: Mercado Imobiliário]</p>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-sm text-gray-500">2 de Abril, 2025</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-sm bg-cyan-100 text-cyan-800 px-2 py-1 rounded">Mercado</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-cyan-600">Panorama do Mercado de Galpões em 2025: Oportunidades e Desafios</h3>
            <p className="text-gray-700 mb-4">
              Análise completa das tendências atuais do mercado de galpões industriais e logísticos, com projeções para os próximos anos.
            </p>
            <Link href="#" className="text-cyan-600 font-medium hover:text-cyan-800 transition-colors">
              Leia mais →
            </Link>
          </div>
        </div>
      </div>
      
      {/* Categorias */}
      <section className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-cyan-600">Categorias</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="#" className="bg-white px-4 py-2 rounded-full shadow text-cyan-700 hover:bg-cyan-600 hover:text-white transition-colors">
            Investimentos
          </Link>
          <Link href="#" className="bg-white px-4 py-2 rounded-full shadow text-cyan-700 hover:bg-cyan-600 hover:text-white transition-colors">
            Regularização
          </Link>
          <Link href="#" className="bg-white px-4 py-2 rounded-full shadow text-cyan-700 hover:bg-cyan-600 hover:text-white transition-colors">
            Construção
          </Link>
          <Link href="#" className="bg-white px-4 py-2 rounded-full shadow text-cyan-700 hover:bg-cyan-600 hover:text-white transition-colors">
            Mercado Imobiliário
          </Link>
          <Link href="#" className="bg-white px-4 py-2 rounded-full shadow text-cyan-700 hover:bg-cyan-600 hover:text-white transition-colors">
            Sustentabilidade
          </Link>
          <Link href="#" className="bg-white px-4 py-2 rounded-full shadow text-cyan-700 hover:bg-cyan-600 hover:text-white transition-colors">
            Tecnologia
          </Link>
        </div>
      </section>
      
      {/* Newsletter */}
      <div className="text-center py-8 bg-cyan-600 text-white rounded-lg shadow-lg mb-16">
        <h2 className="text-3xl font-bold mb-4">Fique por dentro das novidades</h2>
        <p className="text-xl mb-6">Assine nossa newsletter e receba conteúdos exclusivos sobre o mercado imobiliário.</p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
          <input 
            type="email" 
            placeholder="Seu melhor e-mail" 
            className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
            Assinar
          </button>
        </div>
      </div>
    </div>
  );
}
