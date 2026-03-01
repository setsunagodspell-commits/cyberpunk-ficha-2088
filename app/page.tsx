export default function Home() {
  return (
    <main className="bg-black text-green-400 min-h-screen p-8 font-mono">
      <h1 className="text-4xl mb-6 text-cyan-400 font-bold animate-pulse">
        🧬 Ficha Cyberpunk 2077 RPG
      </h1>

      {/* Dados principais */}
      <section className="grid grid-cols-2 gap-6 mb-8">
        <div className="border border-cyan-400 p-4 rounded">
          <h2 className="text-xl">Nome:</h2>
          <p>Johnny Silverhand</p>
        </div>
        <div className="border border-cyan-400 p-4 rounded">
          <h2 className="text-xl">Classe:</h2>
          <p>Solo</p>
        </div>
        <div className="border border-cyan-400 p-4 rounded">
          <h2 className="text-xl">Nível:</h2>
          <p>5</p>
        </div>
      </section>

      {/* Atributos */}
      <section className="mb-8">
        <h2 className="text-2xl text-pink-400 mb-4">🧬 Atributos</h2>
        <ul className="grid grid-cols-2 gap-4">
          <li>FOR (Físico): 8</li>
          <li>REF (Reflexos): 9</li>
          <li>RES (Resistência): 7</li>
          <li>TEC (Técnica): 6</li>
          <li>INT (Inteligência): 7</li>
          <li>PRE (Presença): 5</li>
          <li>EST (Estabilidade Neural): 6</li>
        </ul>
      </section>

      {/* Barras */}
      <section className="mb-8">
        <h2 className="text-2xl text-red-400 mb-4">❤️ Barras</h2>
        <ul className="space-y-2">
          <li>HP: 10 + (RES × 5)</li>
          <li>Stamina: 5 + (FOR + RES)</li>
          <li>Foco: 5 + (INT + REF)</li>
          <li>Sanidade: 10 + (EST × 3)</li>
          <li>Carga Cibernética: limite de implantes</li>
        </ul>
      </section>

      {/* Combate */}
      <section className="mb-8">
        <h2 className="text-2xl text-yellow-400 mb-4">🔫 Combate</h2>
        <ul className="space-y-2">
          <li>Precisão: +2</li>
          <li>Crítico: 15%</li>
          <li>Redução de Dano: 20%</li>
          <li>Iniciativa: +3</li>
          <li>Penetração: +1</li>
        </ul>
      </section>

      {/* Implantes */}
      <section className="mb-8">
        <h2 className="text-2xl text-purple-400 mb-4">🦾 Implantes</h2>
        <p>Braço Cibernético, Óptica Neural, Reforço Muscular</p>
      </section>

      {/* Armadura */}
      <section>
        <h2 className="text-2xl text-blue-400 mb-4">🛡 Armadura</h2>
        <ul className="space-y-2">
          <li>Nome: Jaqueta Blindada</li>
          <li>Blindagem: 30</li>
          <li>Durabilidade: 100</li>
          <li>Consumo: Médio</li>
        </ul>
      </section>
    </main>
  );
}