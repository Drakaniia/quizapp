import type { Question } from './collegeQuizTypes';

// ── ILLUSTRATION: Electronegativity Periodic Trend ──────────────────────────

const electronegativityTrendIllustration = `
<svg role="img" aria-label="Electronegativity trend on the periodic table" viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="enBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="280" rx="8" fill="url(#enBg)"/>
	<text x="32" y="40" fill="#00d4ff" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">ELECTRONEGATIVITY PERIODIC TREND</text>
	<!-- Arrow indicating direction of increase -->
	<text x="380" y="70" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">PAULING SCALE</text>
	<!-- Periodic trend diagram - simplified PT fragment -->
	<rect x="40" y="88" width="88" height="44" rx="4" fill="#1f1917" stroke="#ffffff20" stroke-width="1"/>
	<text x="84" y="108" text-anchor="middle" fill="#c4b8ad" font-family="monospace" font-size="13">Li</text>
	<text x="84" y="124" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">0.98</text>
	<rect x="136" y="88" width="88" height="44" rx="4" fill="#1f1917" stroke="#ffffff20" stroke-width="1"/>
	<text x="180" y="108" text-anchor="middle" fill="#c4b8ad" font-family="monospace" font-size="13">Be</text>
	<text x="180" y="124" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">1.57</text>
	<rect x="232" y="88" width="88" height="44" rx="4" fill="#1f1917" stroke="#ffffff20" stroke-width="1"/>
	<text x="276" y="108" text-anchor="middle" fill="#c4b8ad" font-family="monospace" font-size="13">B</text>
	<text x="276" y="124" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">2.04</text>
	<rect x="328" y="88" width="88" height="44" rx="4" fill="#1f1917" stroke="#ffffff20" stroke-width="1"/>
	<text x="372" y="108" text-anchor="middle" fill="#c4b8ad" font-family="monospace" font-size="13">C</text>
	<text x="372" y="124" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">2.55</text>
	<rect x="424" y="88" width="88" height="44" rx="4" fill="#1f1917" stroke="#00d4ff" stroke-width="2"/>
	<text x="468" y="108" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="13" font-weight="700">N</text>
	<text x="468" y="124" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="8">3.04</text>
	<rect x="520" y="88" width="88" height="44" rx="4" fill="#1f1917" stroke="#ffffff20" stroke-width="1"/>
	<text x="564" y="108" text-anchor="middle" fill="#c4b8ad" font-family="monospace" font-size="13">O</text>
	<text x="564" y="124" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">3.44</text>
	<rect x="616" y="88" width="88" height="44" rx="4" fill="#1f1917" stroke="#ff6b6b" stroke-width="2"/>
	<text x="660" y="108" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="13" font-weight="700">F</text>
	<text x="660" y="124" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="8">3.98</text>

	<!-- Row 2 -->
	<rect x="40" y="142" width="88" height="44" rx="4" fill="#1f1917" stroke="#ffffff20" stroke-width="1"/>
	<text x="84" y="162" text-anchor="middle" fill="#c4b8ad" font-family="monospace" font-size="13">Na</text>
	<text x="84" y="178" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">0.93</text>
	<rect x="136" y="142" width="88" height="44" rx="4" fill="#1f1917" stroke="#ffffff20" stroke-width="1"/>
	<text x="180" y="162" text-anchor="middle" fill="#c4b8ad" font-family="monospace" font-size="13">Mg</text>
	<text x="180" y="178" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">1.31</text>
	<rect x="232" y="142" width="88" height="44" rx="4" fill="#1f1917" stroke="#ffffff20" stroke-width="1"/>
	<text x="276" y="162" text-anchor="middle" fill="#c4b8ad" font-family="monospace" font-size="13">Al</text>
	<text x="276" y="178" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">1.61</text>
	<rect x="328" y="142" width="88" height="44" rx="4" fill="#1f1917" stroke="#ffffff20" stroke-width="1"/>
	<text x="372" y="162" text-anchor="middle" fill="#c4b8ad" font-family="monospace" font-size="13">Si</text>
	<text x="372" y="178" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">1.90</text>
	<rect x="424" y="142" width="88" height="44" rx="4" fill="#1f1917" stroke="#ffffff20" stroke-width="1"/>
	<text x="468" y="162" text-anchor="middle" fill="#c4b8ad" font-family="monospace" font-size="13">P</text>
	<text x="468" y="178" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">2.19</text>
	<rect x="520" y="142" width="88" height="44" rx="4" fill="#1f1917" stroke="#ffffff20" stroke-width="1"/>
	<text x="564" y="162" text-anchor="middle" fill="#c4b8ad" font-family="monospace" font-size="13">S</text>
	<text x="564" y="178" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">2.58</text>
	<rect x="616" y="142" width="88" height="44" rx="4" fill="#1f1917" stroke="#ffffff20" stroke-width="1"/>
	<text x="660" y="162" text-anchor="middle" fill="#c4b8ad" font-family="monospace" font-size="13">Cl</text>
	<text x="660" y="178" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">3.16</text>

	<!-- Trend arrows -->
	<line x1="40" y1="204" x2="698" y2="204" stroke="#ff6b6b" stroke-width="2"/>
	<polygon points="710,204 698,198 698,210" fill="#ff6b6b"/>
	<text x="375" y="218" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="10">INCREASING ELECTRONEGATIVITY →</text>
	<line x1="84" y1="88" x2="84" y2="190" stroke="#00d4ff" stroke-width="2"/>
	<text x="84" y="244" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="10">DECREASING</text>
	<text x="84" y="258" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="10">↓</text>
	<text x="380" y="274" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Fluorine (3.98) is the most electronegative element</text>
</svg>`;

// ── ILLUSTRATION: Bond Polarity Scale ───────────────────────────────────────

const bondPolarityScaleIllustration = `
<svg role="img" aria-label="Bond polarity scale from nonpolar covalent to ionic" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="bpBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="240" rx="8" fill="url(#bpBg)"/>
	<text x="32" y="40" fill="#00d4ff" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">BOND POLARITY CLASSIFICATION</text>
	<!-- Scale bar -->
	<rect x="40" y="76" width="680" height="24" rx="12" fill="#1f1917" stroke="#ffffff15" stroke-width="1"/>
	<!-- Nonpolar section -->
	<path d="M40 88 Q90 64 140 88" fill="none" stroke="#4ecdc4" stroke-width="1" opacity="0.3"/>
	<rect x="40" y="76" width="160" height="24" rx="12" fill="#4ecdc4" opacity="0.25"/>
	<!-- Polar covalent section -->
	<rect x="200" y="76" width="300" height="24" fill="#fcb045" opacity="0.25"/>
	<!-- Ionic section -->
	<rect x="500" y="76" width="220" height="24" rx="12" fill="#ff6b6b" opacity="0.25"/>
	<!-- Ticks -->
	<line x1="200" y1="68" x2="200" y2="108" stroke="#ffffff30" stroke-width="2"/>
	<text x="200" y="124" text-anchor="middle" fill="#888" font-family="monospace" font-size="10">0.5</text>
	<line x1="500" y1="68" x2="500" y2="108" stroke="#ffffff30" stroke-width="2"/>
	<text x="500" y="124" text-anchor="middle" fill="#888" font-family="monospace" font-size="10">2.0</text>
	<!-- Labels -->
	<text x="120" y="154" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="12" font-weight="700">Nonpolar Covalent</text>
	<text x="120" y="172" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">ΔEN &lt; 0.5</text>
	<text x="120" y="190" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">H₂, O₂, N₂, CH₄</text>

	<text x="350" y="154" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="12" font-weight="700">Polar Covalent</text>
	<text x="350" y="172" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">0.5 &lt; ΔEN &lt; 2.0</text>
	<text x="350" y="190" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">H₂O, NH₃, HCl, HF</text>

	<text x="610" y="154" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="12" font-weight="700">Ionic</text>
	<text x="610" y="172" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">ΔEN &gt; 2.0</text>
	<text x="610" y="190" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">NaCl, LiCl, MgO</text>

	<text x="380" y="220" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Delta EN (Electronegativity Difference) = |EN(A) - EN(B)|</text>
</svg>`;

// ── ILLUSTRATION: Polar vs Nonpolar Molecular Shapes ───────────────────────

const molecularPolarityIllustration = `
<svg role="img" aria-label="Polar vs nonpolar molecules with different geometries" viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="mpBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="280" rx="8" fill="url(#mpBg)"/>
	<text x="32" y="40" fill="#00d4ff" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">MOLECULAR POLARITY</text>

	<!-- NONPOLAR panel -->
	<rect x="34" y="66" width="340" height="188" rx="8" fill="#1f1917" stroke="#4ecdc4" stroke-width="2"/>
	<text x="204" y="94" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="13" font-weight="700">NONPOLAR MOLECULES</text>
	<!-- CO₂ (linear) -->
	<text x="100" y="122" text-anchor="middle" fill="#c4b8ad" font-family="monospace" font-size="9">CO₂ (Linear)</text>
	<text x="100" y="136" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="10">O</text>
	<circle cx="100" cy="133" r="2" fill="#fcb045"/>
	<line x1="108" y1="133" x2="124" y2="133" stroke="#ffffff" stroke-width="2"/>
	<circle cx="127" cy="133" r="3" fill="#c4b8ad"/>
	<line x1="130" y1="133" x2="146" y2="133" stroke="#ffffff" stroke-width="2"/>
	<circle cx="149" cy="133" r="2" fill="#fcb045"/>
	<text x="149" y="146" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="10">O</text>
	<text x="100" y="158" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Bond dipoles cancel</text>

	<!-- CCl₄ (tetrahedral) -->
	<text x="260" y="122" text-anchor="middle" fill="#c4b8ad" font-family="monospace" font-size="9">CCl₄ (Tetrahedral)</text>
	<circle cx="270" cy="133" r="3" fill="#c4b8ad"/>
	<line x1="270" y1="133" x2="255" y2="146" stroke="#ffffff" stroke-width="1.5"/>
	<circle cx="252" cy="149" r="2" fill="#4ecdc4"/>
	<line x1="270" y1="133" x2="285" y2="146" stroke="#ffffff" stroke-width="1.5"/>
	<circle cx="288" cy="149" r="2" fill="#4ecdc4"/>
	<line x1="270" y1="133" x2="260" y2="120" stroke="#ffffff" stroke-width="1.5"/>
	<circle cx="257" cy="117" r="2" fill="#4ecdc4"/>
	<text x="260" y="158" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Symmetrical — dipoles cancel</text>

	<!-- POLAR panel -->
	<rect x="390" y="66" width="340" height="188" rx="8" fill="#1f1917" stroke="#fcb045" stroke-width="2"/>
	<text x="560" y="94" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="13" font-weight="700">POLAR MOLECULES</text>
	<!-- H₂O (bent) -->
	<text x="460" y="122" text-anchor="middle" fill="#c4b8ad" font-family="monospace" font-size="9">H₂O (Bent)</text>
	<circle cx="470" cy="136" r="3" fill="#ff6b6b"/>
	<line x1="470" y1="136" x2="455" y2="126" stroke="#ffffff" stroke-width="1.5"/>
	<circle cx="452" cy="123" r="2" fill="#c4b8ad"/>
	<line x1="470" y1="136" x2="485" y2="126" stroke="#ffffff" stroke-width="1.5"/>
	<circle cx="488" cy="123" r="2" fill="#c4b8ad"/>
	<!-- Dipole arrow -->
	<line x1="470" y1="140" x2="470" y2="156" stroke="#00d4ff" stroke-width="2" stroke-linecap="round"/>
	<polygon points="470,158 466,150 474,150" fill="#00d4ff"/>
	<text x="472" y="167" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="8">μ</text>
	<text x="460" y="158" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Bent shape → net dipole</text>

	<!-- NH₃ (trigonal pyramidal) -->
	<text x="600" y="122" text-anchor="middle" fill="#c4b8ad" font-family="monospace" font-size="9">NH₃ (Pyramidal)</text>
	<circle cx="620" cy="120" r="3" fill="#00d4ff"/>
	<line x1="620" y1="120" x2="606" y2="138" stroke="#ffffff" stroke-width="1.5"/>
	<circle cx="603" cy="141" r="2" fill="#c4b8ad"/>
	<line x1="620" y1="120" x2="634" y2="138" stroke="#ffffff" stroke-width="1.5"/>
	<circle cx="637" cy="141" r="2" fill="#c4b8ad"/>
	<line x1="620" y1="120" x2="620" y2="145" stroke="#ffffff" stroke-width="1.5"/>
	<circle cx="620" cy="148" r="2" fill="#c4b8ad"/>
	<text x="600" y="158" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Lone pair → net dipole</text>

	<!-- Bottom summary -->
	<text x="380" y="222" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Key: Symmetry determines overall polarity | Bond dipoles may cancel even if individual bonds are polar</text>
	<text x="380" y="244" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Nonpolar: CO₂, CCl₄, CH₄, BF₃ | Polar: H₂O, NH₃, CHCl₃, HF</text>
</svg>`;

// ── ILLUSTRATION: VSEPR Molecular Geometries ────────────────────────────────

const vseprGeometriesIllustration = `
<svg role="img" aria-label="Common VSEPR molecular geometries" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="vgBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="260" rx="8" fill="url(#vgBg)"/>
	<text x="32" y="40" fill="#00d4ff" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">VSEPR MOLECULAR GEOMETRIES</text>

	<!-- Linear (2 electron groups) -->
	<rect x="34" y="66" width="162" height="160" rx="8" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="115" y="94" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="12" font-weight="700">Linear</text>
	<circle cx="55" cy="128" r="4" fill="#ff6b6b"/>
	<line x1="62" y1="128" x2="100" y2="128" stroke="#ffffff" stroke-width="2.5"/>
	<circle cx="115" cy="128" r="5" fill="#c4b8ad"/>
	<line x1="125" y1="128" x2="155" y2="128" stroke="#ffffff" stroke-width="2.5"/>
	<circle cx="168" cy="128" r="4" fill="#ff6b6b"/>
	<text x="115" y="152" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">2 electron groups</text>
	<text x="115" y="170" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">180° bond angle</text>
	<text x="115" y="194" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">CO₂, BeCl₂</text>
	<text x="115" y="212" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Nonpolar</text>

	<!-- Trigonal Planar (3 electron groups) -->
	<rect x="210" y="66" width="162" height="160" rx="8" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="291" y="94" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="12" font-weight="700">Trigonal Planar</text>
	<circle cx="291" cy="128" r="5" fill="#c4b8ad"/>
	<line x1="291" y1="128" x2="256" y2="154" stroke="#ffffff" stroke-width="2"/>
	<circle cx="248" cy="160" r="4" fill="#a78bfa"/>
	<line x1="291" y1="128" x2="326" y2="154" stroke="#ffffff" stroke-width="2"/>
	<circle cx="334" cy="160" r="4" fill="#a78bfa"/>
	<line x1="291" y1="128" x2="291" y2="160" stroke="#ffffff" stroke-width="2"/>
	<circle cx="291" cy="167" r="4" fill="#a78bfa"/>
	<text x="291" y="152" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">3 electron groups</text>
	<text x="291" y="170" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">120° bond angle</text>
	<text x="291" y="194" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">BF₃, SO₃</text>
	<text x="291" y="212" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Nonpolar</text>

	<!-- Tetrahedral (4 electron groups) -->
	<rect x="386" y="66" width="162" height="160" rx="8" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="467" y="94" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="12" font-weight="700">Tetrahedral</text>
	<circle cx="467" cy="124" r="5" fill="#c4b8ad"/>
	<line x1="467" y1="124" x2="445" y2="148" stroke="#ffffff" stroke-width="2"/>
	<circle cx="440" cy="155" r="4" fill="#00d4ff"/>
	<line x1="467" y1="124" x2="489" y2="148" stroke="#ffffff" stroke-width="2"/>
	<circle cx="494" cy="155" r="4" fill="#00d4ff"/>
	<line x1="467" y1="124" x2="467" y2="155" stroke="#ffffff" stroke-width="2"/>
	<circle cx="467" cy="162" r="4" fill="#00d4ff"/>
	<line x1="467" y1="124" x2="452" y2="108" stroke="#ffffff" stroke-width="2"/>
	<circle cx="448" cy="104" r="4" fill="#00d4ff"/>
	<text x="467" y="156" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">4 electron groups</text>
	<text x="467" y="174" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">109.5° bond angle</text>
	<text x="467" y="196" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">CH₄, CCl₄</text>
	<text x="467" y="214" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Nonpolar or polar</text>

	<!-- Bent (2 bonds + 2 lone pairs) -->
	<rect x="562" y="66" width="166" height="160" rx="8" fill="#1f1917" stroke="#a78bfa" stroke-width="1.5"/>
	<text x="645" y="94" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="12" font-weight="700">Bent</text>
	<circle cx="645" cy="130" r="5" fill="#ff6b6b"/>
	<line x1="645" y1="130" x2="618" y2="110" stroke="#ffffff" stroke-width="2"/>
	<circle cx="612" cy="106" r="4" fill="#c4b8ad"/>
	<line x1="645" y1="130" x2="672" y2="110" stroke="#ffffff" stroke-width="2"/>
	<circle cx="678" cy="106" r="4" fill="#c4b8ad"/>
	<!-- Lone pairs -->
	<ellipse cx="636" cy="145" rx="6" ry="5" fill="#f7f0e8" opacity="0.2"/>
	<ellipse cx="654" cy="145" rx="6" ry="5" fill="#f7f0e8" opacity="0.2"/>
	<text x="645" y="156" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">2 bonds + 2 lone</text>
	<text x="645" y="174" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">~104.5° angle</text>
	<text x="645" y="196" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">H₂O, H₂S</text>
	<text x="645" y="214" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Polar</text>
</svg>`;

// ── ILLUSTRATION: Water & Oil Immiscibility ────────────────────────────────

const waterOilImmiscibilityIllustration = `
<svg role="img" aria-label="Water and oil immiscibility explained by polarity" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="woBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="240" rx="8" fill="url(#woBg)"/>
	<text x="32" y="40" fill="#00d4ff" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">LIKE DISSOLVES LIKE</text>

	<!-- Water panel -->
	<rect x="34" y="66" width="340" height="148" rx="8" fill="#1f1917" stroke="#00d4ff" stroke-width="2"/>
	<text x="204" y="94" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="13" font-weight="700">WATER (POLAR)</text>
	<!-- Water molecules -->
	<circle cx="80" cy="130" r="4" fill="#ff6b6b"/>
	<line x1="82" y1="128" x2="72" y2="118" stroke="#ffffff" stroke-width="1.5"/>
	<circle cx="70" cy="115" r="3" fill="#c4b8ad"/>
	<line x1="82" y1="128" x2="95" y2="118" stroke="#ffffff" stroke-width="1.5"/>
	<circle cx="98" cy="115" r="3" fill="#c4b8ad"/>
	<text x="80" y="148" text-anchor="middle" fill="#888" font-family="monospace" font-size="7">H₂O · H₂O · H₂O</text>
	<text x="80" y="160" text-anchor="middle" fill="#888" font-family="monospace" font-size="7">H₂O · H₂O · H₂O</text>
	<text x="204" y="130" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Polar molecules interact</text>
	<text x="204" y="152" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">via dipole-dipole forces</text>
	<text x="204" y="180" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="9">Dissolves: salt, sugar, acids</text>

	<!-- Oil panel -->
	<rect x="390" y="66" width="340" height="148" rx="8" fill="#1f1917" stroke="#fcb045" stroke-width="2"/>
	<text x="560" y="94" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="13" font-weight="700">OIL (NONPOLAR)</text>
	<!-- Oil molecules (zigzag chains) -->
	<polyline points="440,115 455,105 470,115 485,105 500,115 515,105" fill="none" stroke="#fcb045" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>
	<polyline points="440,135 455,125 470,135 485,125 500,135 515,125" fill="none" stroke="#fcb045" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
	<text x="560" y="130" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Nonpolar hydrocarbons</text>
	<text x="560" y="152" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">only London dispersion forces</text>
	<text x="560" y="180" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="9">Dissolves: wax, grease, CCl₄</text>

	<!-- Bottom -->
	<text x="380" y="228" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Why they don't mix: Water-water attraction > water-oil attraction</text>
</svg>`;

// ── ILLUSTRATION: Dipole Moment ────────────────────────────────────────────

const dipoleMomentIllustration = `
<svg role="img" aria-label="Dipole moment in water and other polar molecules" viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="dmBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="220" rx="8" fill="url(#dmBg)"/>
	<text x="32" y="40" fill="#00d4ff" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">DIPOLE MOMENT (μ)</text>

	<!-- Water dipole -->
	<rect x="34" y="66" width="340" height="130" rx="8" fill="#1f1917" stroke="#00d4ff" stroke-width="1.5"/>
	<text x="204" y="92" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="12" font-weight="700">Water (H₂O)</text>
	<circle cx="204" cy="128" r="6" fill="#ff6b6b"/>
	<text x="204" y="132" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7" font-weight="700">O</text>
	<line x1="204" y1="128" x2="174" y2="108" stroke="#ffffff" stroke-width="2"/>
	<circle cx="170" cy="105" r="5" fill="#c4b8ad"/>
	<text x="170" y="109" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="7" font-weight="700">H</text>
	<line x1="204" y1="128" x2="234" y2="108" stroke="#ffffff" stroke-width="2"/>
	<circle cx="238" cy="105" r="5" fill="#c4b8ad"/>
	<text x="238" y="109" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="7" font-weight="700">H</text>
	<!-- δ+ δ- labels -->
	<text x="170" y="100" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="8">δ+</text>
	<text x="238" y="100" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="8">δ+</text>
	<text x="215" y="116" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="8">δ−</text>
	<!-- Dipole arrow -->
	<line x1="204" y1="142" x2="204" y2="168" stroke="#00d4ff" stroke-width="2.5" stroke-linecap="round"/>
	<polygon points="204,170 200,162 208,162" fill="#00d4ff"/>
	<text x="218" y="158" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="9">μ = 1.85 D</text>
	<text x="204" y="186" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Net dipole points toward oxygen</text>

	<!-- Ammonia dipole -->
	<rect x="390" y="66" width="340" height="130" rx="8" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="560" y="92" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="12" font-weight="700">Ammonia (NH₃)</text>
	<circle cx="560" cy="118" r="6" fill="#00d4ff"/>
	<text x="560" y="122" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7" font-weight="700">N</text>
	<line x1="560" y1="118" x2="538" y2="138" stroke="#ffffff" stroke-width="2"/>
	<circle cx="534" cy="142" r="5" fill="#c4b8ad"/>
	<text x="534" y="146" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="7" font-weight="700">H</text>
	<line x1="560" y1="118" x2="582" y2="138" stroke="#ffffff" stroke-width="2"/>
	<circle cx="586" cy="142" r="5" fill="#c4b8ad"/>
	<text x="586" y="146" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="7" font-weight="700">H</text>
	<line x1="560" y1="118" x2="560" y2="145" stroke="#ffffff" stroke-width="2"/>
	<circle cx="560" cy="150" r="5" fill="#c4b8ad"/>
	<text x="560" y="154" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="7" font-weight="700">H</text>
	<!-- Lone pair -->
	<ellipse cx="560" cy="108" rx="5" ry="7" fill="#f7f0e8" opacity="0.15"/>
	<!-- Dipole arrow -->
	<line x1="560" y1="145" x2="560" y2="162" stroke="#00d4ff" stroke-width="2.5" stroke-linecap="round"/>
	<polygon points="560,164 556,156 564,156" fill="#00d4ff"/>
	<text x="574" y="158" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="9">μ = 1.47 D</text>
	<text x="560" y="186" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Lone pair contributes to net dipole</text>
</svg>`;

// ── ILLUSTRATION: Factors Affecting Polarity ───────────────────────────────

const polarityFactorsIllustration = `
<svg role="img" aria-label="Four factors affecting molecular polarity" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="pfBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="240" rx="8" fill="url(#pfBg)"/>
	<text x="32" y="40" fill="#00d4ff" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">FACTORS AFFECTING MOLECULAR POLARITY</text>

	<!-- Factor 1: Electronegativity -->
	<rect x="34" y="66" width="162" height="140" rx="8" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="115" y="96" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="12" font-weight="700">1. EN Diff</text>
	<text x="115" y="122" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Greater difference →</text>
	<text x="115" y="140" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">more polar bond</text>
	<text x="115" y="168" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">HF > HCl > HBr > HI</text>
	<text x="115" y="184" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">H-F: ΔEN = 1.78</text>

	<!-- Factor 2: Bond Dipoles -->
	<rect x="210" y="66" width="162" height="140" rx="8" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="291" y="96" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="12" font-weight="700">2. Bond Dipoles</text>
	<text x="291" y="122" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Vector quantity —</text>
	<text x="291" y="140" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">direction matters</text>
	<text x="291" y="168" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Points toward more</text>
	<text x="291" y="184" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">electronegative atom</text>

	<!-- Factor 3: Molecular Shape -->
	<rect x="386" y="66" width="162" height="140" rx="8" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="467" y="96" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="12" font-weight="700">3. Symmetry</text>
	<text x="467" y="122" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Symmetrical shape →</text>
	<text x="467" y="140" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">dipoles may cancel</text>
	<text x="467" y="168" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">CO₂: linear → nonpolar</text>
	<text x="467" y="184" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">H₂O: bent → polar</text>

	<!-- Factor 4: Lone Pairs -->
	<rect x="562" y="66" width="166" height="140" rx="8" fill="#1f1917" stroke="#a78bfa" stroke-width="1.5"/>
	<text x="645" y="96" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="12" font-weight="700">4. Lone Pairs</text>
	<text x="645" y="122" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Asymmetric electron</text>
	<text x="645" y="140" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">distribution</text>
	<text x="645" y="168" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Lone pair → net</text>
	<text x="645" y="184" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">dipole in NH₃, H₂O</text>
</svg>`;

// ── QUIZ QUESTIONS ──────────────────────────────────────────────────────────

const polarityMoleculesQuizItems: Question[] = [
	// ═══════════════════════════════════════════════════════════════════════
	// SECTION 1: Electronegativity (Q1–Q6)
	// ═══════════════════════════════════════════════════════════════════════
	{
		id: 1,
		question:
			'A chemistry student looks at the periodic table and observes that electronegativity changes in a predictable pattern. Which statement best describes the periodic trend of electronegativity as defined by Linus Pauling?',
		options: [
			'Electronegativity increases across a period and decreases down a group.',
			'Electronegativity decreases across a period and increases down a group.',
			'Electronegativity is highest at the bottom-left of the periodic table.',
			'Electronegativity is constant for all elements in the same period.'
		],
		answer: 'Electronegativity increases across a period and decreases down a group.',
		explanation:
			'Electronegativity, the ability of an atom to attract shared electrons in a bond, increases across a period (left to right) as nuclear charge increases, and decreases down a group as atomic radius increases and shielding weakens the pull.',
		difficulty: 'advanced',
		illustration: electronegativityTrendIllustration
	},
	{
		id: 2,
		question:
			'A chemist determines that Element X has an electronegativity of 3.98 on the Pauling scale, while Element Y has a value of 0.93. Based on these values and the periodic trend, which elements are most likely X and Y?',
		options: [
			'X is Fluorine (F), Y is Sodium (Na).',
			'X is Chlorine (Cl), Y is Lithium (Li).',
			'X is Oxygen (O), Y is Magnesium (Mg).',
			'X is Nitrogen (N), Y is Potassium (K).'
		],
		answer: 'X is Fluorine (F), Y is Sodium (Na).',
		explanation:
			'Fluorine has the highest electronegativity of all elements at 3.98 on the Pauling scale. Sodium (Na) has a very low electronegativity of 0.93. Both values match the known periodic trend — F is top-right of the periodic table and Na is bottom-left.',
		difficulty: 'advanced',
		illustration: electronegativityTrendIllustration
	},
	{
		id: 3,
		question:
			'A researcher compares the electronegativity values of four elements: C (2.55), N (3.04), O (3.44), and F (3.98). Which conclusion about these values is supported by the periodic trend?',
		options: [
			'The increasing values from C to F correlate with decreasing atomic radii and increasing nuclear charge.',
			'The values increase from C to F because each successive element has more electron shells.',
			'The values decrease from C to F because metallic character increases.',
			'The values show no predictable pattern across Period 2.'
		],
		answer: 'The increasing values from C to F correlate with decreasing atomic radii and increasing nuclear charge.',
		explanation:
			'Across Period 2, atomic radius decreases while nuclear charge increases, pulling bonding electrons more strongly toward the nucleus. This explains the steady increase in electronegativity from C (2.55) through N, O, to F (3.98).',
		difficulty: 'expert',
		illustration: electronegativityTrendIllustration
	},
	{
		id: 4,
		question:
			'Why is fluorine (EN = 3.98) more electronegative than chlorine (EN = 3.16), even though both are halogens?',
		options: [
			'Fluorine has a smaller atomic radius, so its nucleus exerts a stronger pull on bonding electrons.',
			'Chlorine has more protons, so it should be more electronegative.',
			'Fluorine has more electron shells, increasing its attraction for electrons.',
			'Chlorine has a higher electron affinity than fluorine.'
		],
		answer: 'Fluorine has a smaller atomic radius, so its nucleus exerts a stronger pull on bonding electrons.',
		explanation:
			'Despite having fewer protons, fluorine\'s much smaller atomic radius means bonding electrons are closer to the nucleus and less shielded, resulting in a stronger effective nuclear pull. This makes fluorine the most electronegative element in the periodic table.',
		difficulty: 'expert',
		illustration: electronegativityTrendIllustration
	},
	{
		id: 5,
		question:
			'A student claims that oxygen should be more electronegative than nitrogen based on its position in the periodic table. Is this claim correct, and what is the numerical evidence?',
		options: [
			'Yes, oxygen (3.44) has a higher electronegativity than nitrogen (3.04).',
			'No, nitrogen (3.04) is more electronegative than oxygen (2.55).',
			'Yes, oxygen (3.98) has a higher electronegativity than nitrogen (3.44).',
			'No, both have the same electronegativity of approximately 3.00.'
		],
		answer: 'Yes, oxygen (3.44) has a higher electronegativity than nitrogen (3.04).',
		explanation:
			'Oxygen is to the right of nitrogen in Period 2, so it has higher electronegativity. The Pauling values confirm this: O = 3.44 vs N = 3.04. The increasing nuclear charge without added shielding explains the trend.',
		difficulty: 'advanced',
		illustration: electronegativityTrendIllustration
	},
	{
		id: 6,
		question:
			'Which of the following lists elements in order of INCREASING electronegativity?',
		options: [
			'Cs < Na < Mg < Al < Si < P < S < Cl < F',
			'F < Cl < S < P < Si < Al < Mg < Na < Cs',
			'Cs < Cl < Na < F < Mg < Al < Si < P < S',
			'Na < Cs < Mg < Al < Si < P < S < Cl < F'
		],
		answer: 'Cs < Na < Mg < Al < Si < P < S < Cl < F',
		explanation:
			'Cesium (Cs) at the bottom-left has the lowest electronegativity (~0.79). Values increase moving toward Fluorine (F) at the top-right (3.98). The order follows the established periodic trend correctly.',
		difficulty: 'expert',
		illustration: electronegativityTrendIllustration
	},

	// ═══════════════════════════════════════════════════════════════════════
	// SECTION 2: Bond Polarity (Q7–Q12)
	// ═══════════════════════════════════════════════════════════════════════
	{
		id: 7,
		question:
			'A student is asked to classify chemical bonds based on electronegativity difference (ΔEN). Using the Pauling scale, what is the correct classification for a bond with ΔEN = 1.20?',
		options: [
			'Polar covalent, because 0.5 < ΔEN < 2.0.',
			'Nonpolar covalent, because ΔEN < 0.5.',
			'Ionic, because ΔEN > 2.0.',
			'Metallic, because ΔEN is between 0.5 and 2.0.'
		],
		answer: 'Polar covalent, because 0.5 < ΔEN < 2.0.',
		explanation:
			'The bond polarity scale classifies ΔEN values between 0.5 and 2.0 as polar covalent bonds. These bonds have unequal sharing of electrons, resulting in partial positive (δ+) and partial negative (δ−) charges on the atoms.',
		difficulty: 'advanced',
		illustration: bondPolarityScaleIllustration
	},
	{
		id: 8,
		question:
			'Which bond is expected to be the MOST polar based on electronegativity differences?',
		options: [
			'H−F (EN: H = 2.20, F = 3.98)',
			'H−Cl (EN: H = 2.20, Cl = 3.16)',
			'H−Br (EN: H = 2.20, Br = 2.96)',
			'H−I (EN: H = 2.20, I = 2.66)'
		],
		answer: 'H−F (EN: H = 2.20, F = 3.98)',
		explanation:
			'ΔEN for H−F = 1.78, which is the largest difference among the hydrogen halides. This makes the H−F bond the most polar, with fluorine carrying the strongest partial negative charge (δ−).',
		difficulty: 'advanced',
		illustration: bondPolarityScaleIllustration
	},
	{
		id: 9,
		question:
			'A chemistry lab report describes an ionic bond as having a ΔEN greater than 2.0. Which of the following pairs would form an ionic bond based on this criterion?',
		options: [
			'Na (EN = 0.93) and Cl (EN = 3.16)',
			'H (EN = 2.20) and O (EN = 3.44)',
			'C (EN = 2.55) and H (EN = 2.20)',
			'N (EN = 3.04) and H (EN = 2.20)'
		],
		answer: 'Na (EN = 0.93) and Cl (EN = 3.16)',
		explanation:
			'ΔEN for NaCl = 3.16 − 0.93 = 2.23, which is greater than 2.0, classifying this bond as ionic. In ionic bonds, electrons are transferred rather than shared, forming Na⁺ and Cl⁻ ions.',
		difficulty: 'advanced',
		illustration: bondPolarityScaleIllustration
	},
	{
		id: 10,
		question:
			'Which bond is classified as nonpolar covalent based on the ΔEN classification scale?',
		options: [
			'C−H (EN: C = 2.55, H = 2.20)',
			'H−O (EN: H = 2.20, O = 3.44)',
			'C−Cl (EN: C = 2.55, Cl = 3.16)',
			'Na−Cl (EN: Na = 0.93, Cl = 3.16)'
		],
		answer: 'C−H (EN: C = 2.55, H = 2.20)',
		explanation:
			'ΔEN for C−H = 2.55 − 2.20 = 0.35, which is less than 0.5. This classifies it as nonpolar covalent — the electrons are shared nearly equally between carbon and hydrogen.',
		difficulty: 'advanced',
		illustration: bondPolarityScaleIllustration
	},
	{
		id: 11,
		question:
			'A biochemist notes that the O−H bond in water has a significant polar character. Using the Pauling scale (O = 3.44, H = 2.20), which statement correctly describes the charge distribution?',
		options: [
			'Oxygen carries a partial negative charge (δ−) and hydrogen carries a partial positive charge (δ+).',
			'Hydrogen carries a partial negative charge (δ−) and oxygen carries a partial positive charge (δ+).',
			'Both atoms carry equal partial charges due to covalent bonding.',
			'There is no charge separation because the bond is nonpolar covalent.'
		],
		answer: 'Oxygen carries a partial negative charge (δ−) and hydrogen carries a partial positive charge (δ+).',
		explanation:
			'With ΔEN = 1.24, the O−H bond is polar covalent. Oxygen\'s higher electronegativity pulls bonding electrons toward itself, giving it a partial negative charge (δ−), while hydrogen becomes electron-deficient with a partial positive charge (δ+).',
		difficulty: 'advanced',
		illustration: dipoleMomentIllustration
	},
	{
		id: 12,
		question:
			'If the electronegativity difference between two bonded atoms is 0.0, what type of bond exists, and which molecule is an example?',
		options: [
			'Nonpolar covalent; H₂ or O₂.',
			'Polar covalent; HCl.',
			'Ionic; NaCl.',
			'Nonpolar covalent; H₂O.'
		],
		answer: 'Nonpolar covalent; H₂ or O₂.',
		explanation:
			'When two identical atoms bond (like H₂ or O₂), the electronegativity difference is 0.0. Electrons are shared equally, making this a pure nonpolar covalent bond with no charge separation.',
		difficulty: 'advanced',
		illustration: bondPolarityScaleIllustration
	},

	// ═══════════════════════════════════════════════════════════════════════
	// SECTION 3: Molecular Geometry & Polarity (Q13–Q20)
	// ═══════════════════════════════════════════════════════════════════════
	{
		id: 13,
		question:
			'A student draws a Lewis structure for a molecule with 4 electron groups around the central atom — all bonding groups and no lone pairs. What is the predicted molecular geometry and bond angle?',
		options: [
			'Tetrahedral with 109.5° bond angles.',
			'Trigonal planar with 120° bond angles.',
			'Linear with 180° bond angles.',
			'Bent with approximately 104.5° bond angles.'
		],
		answer: 'Tetrahedral with 109.5° bond angles.',
		explanation:
			'A central atom with 4 bonding groups (no lone pairs) adopts tetrahedral geometry with 109.5° bond angles. Methane (CH₄) and carbon tetrachloride (CCl₄) are classic examples. The lecture specifically mentions 109.5° for dichlorine monoxide.',
		difficulty: 'advanced',
		illustration: vseprGeometriesIllustration
	},
	{
		id: 14,
		question:
			'Carbon dioxide (CO₂) has polar C=O bonds, yet the molecule is nonpolar overall. Which explanation best resolves this apparent contradiction?',
		options: [
			'The linear geometry causes the two equal bond dipoles to point in opposite directions and cancel each other.',
			'The C=O bonds are actually nonpolar because carbon and oxygen have the same electronegativity.',
			'The bent shape of CO₂ asymmetrically distributes charge, but the molecule is too small to be polar.',
			'The lone pairs on oxygen neutralize the dipole of each C=O bond.'
		],
		answer: 'The linear geometry causes the two equal bond dipoles to point in opposite directions and cancel each other.',
		explanation:
			'CO₂ has a linear geometry (O=C=O) with identical C=O bonds pointing 180° apart. The bond dipoles are equal in magnitude but opposite in direction, resulting in a net dipole moment of zero. This illustrates that bond polarity ≠ molecular polarity.',
		difficulty: 'expert',
		illustration: molecularPolarityIllustration
	},
	{
		id: 15,
		question:
			'Water (H₂O) and carbon tetrachloride (CCl₄) both contain polar bonds, but water is polar while CCl₄ is nonpolar. What structural property accounts for this difference?',
		options: [
			'Water has a bent shape with asymmetric dipole vectors; CCl₄ has a symmetrical tetrahedral shape where dipoles cancel.',
			'Water has a symmetrical linear shape; CCl₄ has an asymmetrical shape.',
			'The O−H bond is polar but the C−Cl bond is nonpolar.',
			'Water has lone pairs that make it polar; CCl₄ has no lone pairs on carbon but still has a net dipole.'
		],
		answer: 'Water has a bent shape with asymmetric dipole vectors; CCl₄ has a symmetrical tetrahedral shape where dipoles cancel.',
		explanation:
			'H₂O is bent (104.5°) due to two lone pairs on oxygen, so the two O−H bond dipoles combine to give a net dipole. In CCl₄, the four C−Cl dipoles are symmetrically arranged in a tetrahedron and cancel out, making the molecule nonpolar overall.',
		difficulty: 'expert',
		illustration: molecularPolarityIllustration
	},
	{
		id: 16,
		question:
			'A student compares NH₃ and BF₃. Both have three bonds to the central atom, but NH₃ is polar while BF₃ is not. What structural difference explains this?',
		options: [
			'NH₃ has a lone pair on nitrogen giving it a trigonal pyramidal shape; BF₃ has no lone pair and is trigonal planar.',
			'BF₃ has a lone pair on boron making it bent; NH₃ is linear.',
			'NH₃ has 120° bond angles; BF₃ has 109.5° bond angles.',
			'BF₃ has polar bonds that cancel out because boron is more electronegative than fluorine.'
		],
		answer: 'NH₃ has a lone pair on nitrogen giving it a trigonal pyramidal shape; BF₃ has no lone pair and is trigonal planar.',
		explanation:
			'NH₃ has 3 bonds and 1 lone pair on nitrogen, resulting in a trigonal pyramidal shape. The asymmetric lone pair creates a net dipole. BF₃ has 3 bonds and 0 lone pairs, adopting a symmetrical trigonal planar shape where bond dipoles cancel.',
		difficulty: 'expert',
		illustration: vseprGeometriesIllustration
	},
	{
		id: 17,
		question:
			'Which molecule is expected to have a net dipole moment (i.e., be polar)?',
		options: [
			'CHCl₃ (chloroform), because the asymmetrical substitution of H by Cl creates an uneven charge distribution.',
			'CCl₄, because all four C−Cl bonds are polar.',
			'CO₂, because the C=O bonds are strongly polar.',
			'CH₄, because carbon is more electronegative than hydrogen.'
		],
		answer: 'CHCl₃ (chloroform), because the asymmetrical substitution of H by Cl creates an uneven charge distribution.',
		explanation:
			'CHCl₃ has three polar C−Cl bonds and one C−H bond. Unlike CCl₄, the tetrahedron is not perfectly symmetrical because C−H and C−Cl have different bond polarities, resulting in a net dipole moment. CHCl₃ is indeed a polar molecule.',
		difficulty: 'expert',
		illustration: molecularPolarityIllustration
	},
	{
		id: 18,
		question:
			'A student is given four molecules: H₂, CH₄, NH₃, and CCl₄. Which pair is classified as polar?',
		options: [
			'NH₃ is polar; the others are nonpolar.',
			'H₂ and CH₄ are polar; NH₃ and CCl₄ are nonpolar.',
			'All four are polar molecules.',
			'CH₄ and CCl₄ are polar; H₂ and NH₃ are nonpolar.'
		],
		answer: 'NH₃ is polar; the others are nonpolar.',
		explanation:
			'NH₃ (ammonia) has a trigonal pyramidal shape with a lone pair, creating a net dipole. H₂ is a diatomic nonpolar molecule. CH₄ and CCl₄ both have symmetrical tetrahedral geometry where bond dipoles cancel out.',
		difficulty: 'advanced',
		illustration: molecularPolarityIllustration
	},
	{
		id: 19,
		question:
			'What is the molecular geometry of a molecule with 3 bonding groups and 1 lone pair on the central atom, and what is the approximate bond angle?',
		options: [
			'Trigonal pyramidal with approximately 107° bond angles.',
			'Bent with approximately 104.5° bond angles.',
			'Trigonal planar with 120° bond angles.',
			'Tetrahedral with 109.5° bond angles.'
		],
		answer: 'Trigonal pyramidal with approximately 107° bond angles.',
		explanation:
			'A central atom with 3 bond pairs and 1 lone pair (AX₃E) has trigonal pyramidal geometry. The lone pair repels more strongly than bonding pairs, compressing the bond angles from the ideal 109.5° to about 107°. NH₃ is the classic example.',
		difficulty: 'advanced',
		illustration: vseprGeometriesIllustration
	},
	{
		id: 20,
		question:
			'The lecture slide mentions that dichlorine monoxide (Cl₂O) has a bond angle of 109.5°. Based on VSEPR theory, what molecular geometry does this suggest, and what is the likely hybridization of oxygen?',
		options: [
			'Bent/angular geometry with sp³ hybridization of oxygen (2 bonds + 2 lone pairs).',
			'Linear geometry with sp hybridization of oxygen.',
			'Trigonal planar geometry with sp² hybridization of oxygen.',
			'Tetrahedral geometry with sp³ hybridization and 4 bonds.'
		],
		answer: 'Bent/angular geometry with sp³ hybridization of oxygen (2 bonds + 2 lone pairs).',
		explanation:
			'Oxygen in Cl₂O has 2 bond pairs (to Cl atoms) and 2 lone pairs, giving 4 electron groups (sp³ hybridized). The ideal tetrahedral angle is 109.5°, but the two lone pairs compress the bond angle to slightly less. This bent geometry makes the molecule polar.',
		difficulty: 'expert',
		illustration: vseprGeometriesIllustration
	},

	// ═══════════════════════════════════════════════════════════════════════
	// SECTION 4: Applications & Intermolecular Forces (Q21–Q25)
	// ═══════════════════════════════════════════════════════════════════════
	{
		id: 21,
		question:
			'Water and oil do not mix, as introduced at the start of the lecture. Which principle best explains this everyday observation?',
		options: [
			'"Like dissolves like" — polar water molecules interact strongly with each other but cannot form favorable interactions with nonpolar oil molecules.',
			'Oil is less dense than water, so it floats regardless of molecular interactions.',
			'Water forms hydrogen bonds with oil that are too weak to maintain mixing.',
			'Oil molecules repel water molecules due to their negative charge.'
		],
		answer: '"Like dissolves like" — polar water molecules interact strongly with each other but cannot form favorable interactions with nonpolar oil molecules.',
		explanation:
			'Water molecules form strong dipole-dipole interactions (hydrogen bonds) with each other. Oil molecules are nonpolar and only experience weak London dispersion forces. The energy gained from water-water interactions is much greater than any possible water-oil interaction, so they remain separated.',
		difficulty: 'advanced',
		illustration: waterOilImmiscibilityIllustration
	},
	{
		id: 22,
		question:
			'A pharmaceutical company needs a solvent that dissolves a nonpolar drug compound. Based on the "like dissolves like" principle, which solvent would be most effective?',
		options: [
			'Carbon tetrachloride (CCl₄), a nonpolar solvent.',
			'Water (H₂O), a polar solvent.',
			'Ethanol (C₂H₅OH), a polar solvent.',
			'Acetic acid (CH₃COOH), a polar protic solvent.'
		],
		answer: 'Carbon tetrachloride (CCl₄), a nonpolar solvent.',
		explanation:
			'Nonpolar solutes dissolve best in nonpolar solvents because the intermolecular forces are similar. CCl₄ is nonpolar, making it an excellent solvent for nonpolar drug compounds. The lecture notes that chlorinated hydrocarbons are excellent nonpolar solvents.',
		difficulty: 'advanced',
		illustration: waterOilImmiscibilityIllustration
	},
	{
		id: 23,
		question:
			'The lecture defines polarity as "equal or unequal sharing of electrons among the atoms of a molecule." If electrons are shared unequally in a bond, what measurable physical property results?',
		options: [
			'A dipole moment (μ), representing the separation of positive and negative charge.',
			'An increase in molecular weight.',
			'A decrease in bond dissociation energy.',
			'Complete electron transfer from one atom to another.'
		],
		answer: 'A dipole moment (μ), representing the separation of positive and negative charge.',
		explanation:
			'Unequal electron sharing creates a charge separation — a dipole. The dipole moment (μ) is a vector quantity that measures this separation, pointing from the positive to the negative center. The lecture slide includes a dipole moment reference (from Chemistry LibreTexts).',
		difficulty: 'advanced',
		illustration: dipoleMomentIllustration
	},
	{
		id: 24,
		question:
			'A chemical spill occurs in a laboratory. The spilled substance is nonpolar and liquid at room temperature. Which clean-up approach would be most effective based on the substance\'s polarity?',
		options: [
			'Use a nonpolar absorbent material, since nonpolar substances interact best with other nonpolar materials.',
			'Flush the spill with large amounts of water, since water dissolves most chemicals.',
			'Use an acidic solution to neutralize the spill chemically.',
			'Evacuate and wait for the substance to evaporate completely.'
		],
		answer: 'Use a nonpolar absorbent material, since nonpolar substances interact best with other nonpolar materials.',
		explanation:
			'Based on the "like dissolves like" principle, a nonpolar substance cannot be cleaned up effectively with polar water. Nonpolar absorbents (like oil-absorbent pads) have nonpolar surfaces that attract the nonpolar spill, effectively containing and removing it.',
		difficulty: 'advanced',
		illustration: waterOilImmiscibilityIllustration
	},
	{
		id: 25,
		question:
			'A biologist studying cell membranes explains that phospholipids have a polar head and nonpolar tail. This amphipathic nature allows membranes to form a bilayer in water. Which combination of polarity concepts from the lecture explains this behavior?',
		options: [
			'The polar heads interact with water (hydrophilic) while the nonpolar tails avoid water and interact with each other (hydrophobic), driven by the "like dissolves like" principle.',
			'The nonpolar tails are attracted to water while the polar heads repel water, creating a reverse micelle.',
			'Both the head and tail are polar, but they differ in size, causing the bilayer to form naturally.',
			'The polar heads form covalent bonds with water molecules, while the tails evaporate into the membrane interior.'
		],
		answer: 'The polar heads interact with water (hydrophilic) while the nonpolar tails avoid water and interact with each other (hydrophobic), driven by the "like dissolves like" principle.',
		explanation:
			'This integrative question combines the concept of molecular polarity with the "like dissolves like" principle. The polar phosphate head is attracted to water, while the nonpolar hydrocarbon tails cluster together away from water. This spontaneous self-assembly into a bilayer is fundamental to all cellular life.',
		difficulty: 'expert',
		illustration: molecularPolarityIllustration
	}
];

export const polarityMoleculesQuizData = polarityMoleculesQuizItems satisfies Question[];
