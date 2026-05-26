import React from "react";

export default function App() {
  const features = [
    {
      title: "Validação em Tempo Real",
      description:
        "Verificação de CPF e comprovante de residência para evitar retiradas duplicadas.",
      icon: "🛡️",
    },
    {
      title: "Dashboard Inteligente",
      description:
        "Visualize excesso e falta de mantimentos entre paróquias.",
      icon: "📊",
    },
    {
      title: "Conformidade com a LGPD",
      description:
        "Tratamento seguro dos dados sensíveis das famílias cadastradas.",
      icon: "🔒",
    },
    {
      title: "Agilidade na Entrega",
      description:
        "Interface intuitiva para utilização em celulares durante a distribuição.",
      icon: "⚡",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5EFE1] text-[#12213D]">
      <header className="sticky top-0 bg-[#F5EFE1]/90 backdrop-blur border-b border-black/5 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-black text-2xl">
            F.<span className="text-[#FF7F1E]">O</span>.M.E.
          </h1>

          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#problema">Problema</a>
            <a href="#solucao">Solução</a>
            <a href="#sobre">Sobre</a>
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block bg-white px-4 py-2 rounded-full shadow mb-6">
            Tecnologia aplicada à solidariedade
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
            Tecnologia a serviço da{" "}
            <span className="text-[#FF7F1E]">solidariedade.</span>
          </h1>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Veja o sistema funcionando na prática. Gestão simples, rápida e segura para o controle e distribuição de cestas básicas.
          </p>

          <div className="flex flex-wrap gap-4">

          </div>
        </div>

        <div className="bg-white rounded-[3rem] p-5 shadow-2xl border border-black/5">
          <div className="bg-[#12213D] rounded-[2.5rem] overflow-hidden min-h-[500px] flex items-center justify-center">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/fome-demo.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </section>

      <section id="problema" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-black mb-6">
              Gestão manual gera desperdício.
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Controle em papel ou planilhas isoladas gera duplicidades,
              burocracia e falta de transparência na distribuição.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["📄", "Controle Manual"],
              ["⚠️", "Duplicidades"],
              ["📦", "Falta de Controle"],
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition"
              >
                <div className="text-5xl mb-6">{item[0]}</div>
                <h3 className="text-2xl font-bold mb-4">{item[1]}</h3>

                <p className="text-gray-600">
                  Processos descentralizados prejudicam a eficiência da ação
                  social.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solucao" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black">
              Uma solução inteligente para quem ajuda.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#F5EFE1] rounded-3xl p-8 border border-black/5 hover:shadow-2xl hover:-translate-y-2 transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#FF7F1E] text-white flex items-center justify-center text-3xl mb-6">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#12213D] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black mb-6">
            De Votorantim para a Região.
          </h2>

          <p className="text-xl text-gray-300 mb-16">
            Projeto piloto implantado com sucesso na Paróquia Nossa Senhora
            Consolata.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["1", "Paróquia Integrada"],
              ["100%", "Controle de Entradas e Saídas"],
              ["24/7", "Gestão Centralizada"],
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-3xl p-10 backdrop-blur"
              >
                <h3 className="text-6xl font-black text-[#FF7F1E] mb-4">
                  {item[0]}
                </h3>

                <p className="text-lg">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black mb-6">
              Fraterno Oferecimento de Mantimentos e Esperança
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              O F.O.M.E. nasceu da necessidade de tornar a distribuição de
              mantimentos mais organizada, transparente e eficiente,
              garantindo que o alimento chegue a quem realmente precisa.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#FF7F1E] to-[#12213D] rounded-[3rem] h-[400px] flex items-center justify-center text-white text-8xl shadow-2xl">
            ❤
          </div>
        </div>
      </section>

      <footer className="bg-[#12213D] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-3xl font-black mb-4">
              F.<span className="text-[#FF7F1E]">O</span>.M.E.
            </h2>

            <p className="text-gray-300">
              Tecnologia e solidariedade caminhando juntas.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>

            <div className="space-y-2 text-gray-300">
              <p>Cadastro de Instituição</p>
              <p>Login</p>
              <p>Documentação LGPD</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Equipe</h3>

            <p className="text-gray-300 leading-relaxed">
              Cristhian, Gabriel, Giovane, Lucas, Matheus H. e Matheus S.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
