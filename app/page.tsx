"use client";
import { useState } from "react";

export default function FichaCyberpunk() {
  const [nome, setNome] = useState("");
  const [classe, setClasse] = useState("");
  const [nivel, setNivel] = useState("");

  const [forca, setForca] = useState<number | "">("");
  const [reflexos, setReflexos] = useState<number | "">("");
  const [resistencia, setResistencia] = useState<number | "">("");
  const [tecnica, setTecnica] = useState<number | "">("");
  const [inteligencia, setInteligencia] = useState<number | "">("");
  const [presenca, setPresenca] = useState<number | "">("");
  const [estabilidade, setEstabilidade] = useState<number | "">("");

  // Fórmulas automáticas
  const hp = resistencia !== "" ? 10 + resistencia * 5 : "";
  const stamina =
    forca !== "" && resistencia !== "" ? 5 + (forca + resistencia) : "";
  const foco =
    inteligencia !== "" && reflexos !== "" ? 5 + (inteligencia + reflexos) : "";
  const sanidade = estabilidade !== "" ? 10 + estabilidade * 3 : "";

  return (
    <main style={{ padding: "20px", fontFamily: "monospace" }}>
      <h1>Ficha Cyberpunk 2088</h1>

      <h2>Identidade</h2>
      <label>Nome: <input value={nome} onChange={e => setNome(e.target.value)} /></label><br/>
      <label>Classe: <input value={classe} onChange={e => setClasse(e.target.value)} /></label><br/>
      <label>Nível: <input value={nivel} onChange={e => setNivel(e.target.value)} /></label>

      <h2>🧬 Atributos</h2>
      <label>FOR: <input type="number" value={forca} onChange={e => setForca(Number(e.target.value))} /></label><br/>
      <label>REF: <input type="number" value={reflexos} onChange={e => setReflexos(Number(e.target.value))} /></label><br/>
      <label>RES: <input type="number" value={resistencia} onChange={e => setResistencia(Number(e.target.value))} /></label><br/>
      <label>TEC: <input type="number" value={tecnica} onChange={e => setTecnica(Number(e.target.value))} /></label><br/>
      <label>INT: <input type="number" value={inteligencia} onChange={e => setInteligencia(Number(e.target.value))} /></label><br/>
      <label>PRE: <input type="number" value={presenca} onChange={e => setPresenca(Number(e.target.value))} /></label><br/>
      <label>EST: <input type="number" value={estabilidade} onChange={e => setEstabilidade(Number(e.target.value))} /></label>

      <h2>❤️ Barras</h2>
      <p>HP: {hp}</p>
      <p>Stamina: {stamina}</p>
      <p>Foco: {foco}</p>
      <p>Sanidade: {sanidade}</p>

      <h2>🔫 Combate</h2>
      <label>Precisão: <input /></label><br/>
      <label>Crítico: <input /></label><br/>
      <label>Redução de Dano: <input /></label><br/>
      <label>Iniciativa: <input /></label><br/>
      <label>Penetração: <input /></label>

      <h2>🦾 Implantes</h2>
      <textarea rows={3} />

      <h2>🛡 Armadura</h2>
      <label>Nome: <input /></label><br/>
      <label>Blindagem: <input /></label><br/>
      <label>Durabilidade: <input /></label><br/>
      <label>Consumo: <input /></label>
    </main>
  );
}