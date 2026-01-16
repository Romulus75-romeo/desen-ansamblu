const subjectsData = [
    {
        id: "intro",
        title: "Informații Curs & Planificare",
        icon: "information-circle-outline",
        content: `
            <h2>Planificare Calendaristică</h2>
            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem; border-left: 4px solid var(--accent-color);">
                <p><strong>Unitatea de învăţământ:</strong> Liceul Tehnologic „Aurel Vlaicu” Galați</p>
                <p><strong>Profilul:</strong> Tehnic / <strong>Domeniul:</strong> Mecanică</p>
                <p><strong>Calificarea:</strong> Tehnician prelucrări mecanice</p>
                <p><strong>Modulul I:</strong> Desen de ansamblu</p>
                <p><strong>Clasa:</strong> a XII-a B (Seral) / <strong>Nr. ore/an:</strong> 99</p>
                <p><strong>Realizat de:</strong> Prof. Ing. Popescu Romulus</p>
            </div>
            <h3>Competențe Specifice</h3>
            <ul>
                <li>Interpretarea regulilor de reprezentare și cotare a desenelor de ansamblu.</li>
                <li>Identificarea materialelor și a tratamentelor termice prescrise.</li>
                <li>Utilizarea documentației tehnice pentru lucrările de întreținere și reparații.</li>
            </ul>
        `
    },
    {
        id: "8.1.1",
        title: "1. Reguli de Reprezentare (STAS 6134-84)",
        icon: "easel-outline",
        content: `
            <h2>Reguli de reprezentare pentru desenul de ansamblu</h2>
            <p>Conform <strong>STAS 6134-84</strong> (înlocuit de SR 6134:2008), desenul de ansamblu trebuie să definească complet funcționarea, montajul și gabaritul produsului.</p>
            
            <h3>Reguli Fundamentale:</h3>
            <div class="content-card">
                <h4>1. Poziția de Reprezentare</h4>
                <p>Ansamblul se desenează în <strong>poziția de funcționare</strong>. Proiecția principală (frontală) trebuie să ofere cele mai multe detalii despre structura și funcționalitatea mecanismului.</p>
            </div>
            
            <div class="content-card">
                <h4>2. Numărul de Proiecții</h4>
                <p>Se utilizează numărul <strong>minim necesar</strong> de vederi și secțiuni. Nu se repetă aceleași detalii în mai multe vederi. Scopul este claritatea, nu volumul de desen.</p>
            </div>

            <div class="content-card">
                <h4>3. Reprezentarea Simplificată (Esențial!)</h4>
                <ul>
                    <li><strong>Nu se secționează longitudinal:</strong> Șuruburi, piulițe, șaibe, pene, nituri, osii, arbori plini, bile de rulmenți, spițe de roți. Acestea se reprezintă "în vedere" (nehașurate) chiar dacă planul de secțiune trece prin axa lor.</li>
                    <li><strong>Elemente identice repetate:</strong> Se poate reprezenta unul singur complet, restul fiind marcate prin axe de simetrie sau contur simplificat.</li>
                </ul>
            </div>

            <div class="content-card">
                <h4>4. Hașurarea Pieselor Alăturate</h4>
                <p>Pentru a distinge piesele în secțiune:</p>
                <ul>
                    <li>Piesele adiacente se hașurează în direcții opuse (45° vs 135°).</li>
                    <li>Dacă sunt mai mult de două piese în contact, se variază densitatea (distanța) liniilor de hașură.</li>
                    <li>Secțiunile înguste (sub 2mm) se pot înnegri complet.</li>
                </ul>
            </div>
        `
    },

    {
        id: "8.1.2",
        title: "2. Poziționarea Pieselor",
        icon: "layers-outline",
        content: `
            <h2>Poziționarea pieselor componente</h2>
            <p>Identificarea componentelor într-un ansamblu se face prin <strong>baloane de poziție</strong> (numere de poziție).</p>
            
            <h3>Reguli de Poziționare:</h3>
            <ul>
                <li><strong>Liniile de indicație:</strong> Se trasează cu linie continuă subțire. Capătul dinspre piesă se termină cu un <strong>punct îngroșat</strong> (dacă e pe suprafață) sau o <strong>săgeată</strong> (dacă e pe o muchie).</li>
                <li><strong>Amplasarea:</strong> Numerele se scriu în afara conturului proiecțiilor, aliniate pe orizontală sau verticală, paralel cu chenarul.</li>
                <li><strong>Ordinea:</strong> De regulă, numerotarea se face în sens orar sau în ordinea montajului.</li>
                <li><strong>Dimensiunea:</strong> Cifrele au înălțimea de 1.5 - 2 ori mai mare decât cea a cotelor de pe desen (de obicei 5-7 mm).</li>
                <li><strong>Unicitate:</strong> Fiecare piesă distinctă primește un singur număr de poziție, indiferent de câte ori apare în ansamblu.</li>
            </ul>
        `
    },
    {
        id: "8.1.3",
        title: "3. Cotarea Desenului",
        icon: "resize-outline",
        content: `
            <h2>Cotarea desenelor de ansamblu</h2>
            <p>Spre deosebire de desenele de execuție, pe ansamblu NU se trec toate dimensiunile. Se cotează doar ceea ce este relevant pentru ansamblul total.</p>
            
            <h3>Categorii de Cote:</h3>
            <div class="grid-2-cols" style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
                <div class="info-box">
                    <h4 style="color:var(--accent-color)">1. Cote de Gabarit</h4>
                    <p>Lungimea, lățimea și înălțimea maximă (L x l x h). Sunt necesare pentru ambalare, transport și stabilirea spațiului de amplasare.</p>
                </div>
                <div class="info-box">
                    <h4 style="color:var(--accent-color)">2. Cote de Legătură</h4>
                    <p>Dimensiunile interfețelor cu exteriorul (ex: diametrul flanșelor de prindere, distanța dintre șuruburile de fundație, diametrul conductelor de intrare/ieșire).</p>
                </div>
                <div class="info-box">
                    <h4 style="color:var(--accent-color)">3. Cote de Montaj</h4>
                    <p>Cote necesare în timpul asamblării pentru reglaje (ex: distanța dintre doi rulmenți, jocul prescris între electrozi).</p>
                </div>
                <div class="info-box">
                    <h4 style="color:var(--accent-color)">4. Cote Funcționale</h4>
                    <p>Parametrii principali ai mașinii (ex: cursa pistonului, diametrul alezajului cilindrului).</p>
                </div>
            </div>
        `
    },
    {
        id: "8.1.4",
        title: "4. Tabelul de Componență",
        icon: "list-circle-outline",
        content: `
            <h2>Tabelul de componență</h2>
            <p>Este documentul care însoțește desenul și listează toate elementele. Conform <strong>SR ISO 7573</strong>, se amplasează deasupra indicatorului sau pe o pagină separată (A4).</p>
            
            <h3>Coloane Standard:</h3>
            <table style="width:100%; border-collapse: collapse; margin-top:1rem; color:#fff; border: 1px solid var(--border-color);">
                <thead style="background:var(--primary-dark);">
                    <tr>
                        <th style="padding:10px; border:1px solid #555;">Poz.</th>
                        <th style="padding:10px; border:1px solid #555;">Denumire</th>
                        <th style="padding:10px; border:1px solid #555;">Nr. Desen / STAS</th>
                        <th style="padding:10px; border:1px solid #555;">Material</th>
                        <th style="padding:10px; border:1px solid #555;">Buc.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding:8px; border:1px solid #444; text-align:center;">1</td>
                        <td style="padding:8px; border:1px solid #444;">Corp pompă</td>
                        <td style="padding:8px; border:1px solid #444;">A4-01</td>
                        <td style="padding:8px; border:1px solid #444;">Fc 200</td>
                        <td style="padding:8px; border:1px solid #444; text-align:center;">1</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #444; text-align:center;">2</td>
                        <td style="padding:8px; border:1px solid #444;">Arbore principal</td>
                        <td style="padding:8px; border:1px solid #444;">A4-02</td>
                        <td style="padding:8px; border:1px solid #444;">OLC 45</td>
                        <td style="padding:8px; border:1px solid #444; text-align:center;">1</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #444; text-align:center;">3</td>
                        <td style="padding:8px; border:1px solid #444;">Șurub M10x40</td>
                        <td style="padding:8px; border:1px solid #444;">SR ISO 4014</td>
                        <td style="padding:8px; border:1px solid #444;">Gr. 8.8</td>
                        <td style="padding:8px; border:1px solid #444; text-align:center;">6</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    {
        id: "8.1.5",
        title: "5. Întocmirea Desenului după Model",
        icon: "pencil-outline",
        content: `
            <h2>Întocmirea desenului de ansamblu după model</h2>
            <p>Procesul de realizare a desenului de ansamblu pe baza unui dispozitiv existent (releveu) presupune parcurgerea unor etape logice pentru a asigura corectitudinea documentației.</p>

            <div class="content-card">
                <h4>1. Identificarea și Analiza Ansamblului</h4>
                <p>Se studiază funcționarea dispozitivului, rolul fiecărei piese și modul de asamblare. Se stabilesc:</p>
                <ul>
                    <li>Poziția de reprezentare (de funcționare).</li>
                    <li>Denumirea și rolul funcțional al pieselor.</li>
                    <li>Suprafețele funcționale și de asamblare.</li>
                </ul>
            </div>

            <div class="content-card">
                <h4>2. Demontarea și Măsurarea (Schițarea)</h4>
                <p>Se demontează ansamblul piesă cu piesă. Pentru fiecare piesă nestadardizată se întocmește o <strong>schiță</strong> care trebuie să conțină:</p>
                <ul>
                    <li>Gabaritul și forma geometrică (vederi/secțiuni).</li>
                    <li>Toate cotele necesare execuției (măsurate cu șublerul, micrometrul).</li>
                    <li>Rugozitatea suprafețelor și toleranțele.</li>
                </ul>
                <p><em>Notă: Piesele standardizate (șuruburi, rulmenți) nu se schițează, ci doar se identifică (ex: Șurub M10x50 SR ISO 4014).</em></p>
            </div>

            <div class="content-card">
                <h4>3. Întocmirea Schiței de Ansamblu</h4>
                <p>Se realizează asamblarea "pe hârtie" a pieselor schițate, respectând poziția relativă. Se verifică dacă lanțurile de dimensiuni se închid corect.</p>
            </div>

            <div class="content-card">
                <h4>4. Definitivarea Desenului la Scară</h4>
                <p>Pe baza schiței de ansamblu, se trasează desenul final la scară (1:1, 1:2 etc.), respectând grosimea liniilor, regulile de hașurare și de cotare.</p>
            </div>
        `
    },
    {
        id: "8.1.6",
        title: "6. Materiale în Desen Tehnic",
        icon: "construct-outline",
        content: `
            <h2>Notarea și Simbolizarea Materialelor</h2>
            <p>În desenele vechi și în documentația existentă, materialele sunt notate conform STAS, dar este importantă cunoașterea echivalențelor europene (SR EN).</p>

            <h3>Materiale Frecvente:</h3>
            
            <div style="margin-bottom: 2rem;">
                <h4 style="color:var(--success-color); border-bottom: 1px solid #444; padding-bottom:0.5rem;">OL 37 (Oțel Laminat de uz general)</h4>
                <p><strong>Echivalent European:</strong> S235JR</p>
                <p><strong>Utilizare:</strong> Construcții metalice sudate, profile, table, piese puțin solicitate (capace, suporți).</p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h4 style="color:var(--success-color); border-bottom: 1px solid #444; padding-bottom:0.5rem;">OLC 45 (Oțel Laminat de Calitate)</h4>
                <p><strong>Echivalent European:</strong> C45</p>
                <p><strong>Caracteristici:</strong> Conținut 0.45% Carbon. Oțel pentru îmbunătățire.</p>
                <p><strong>Utilizare:</strong> Organe de mașini solicitate mediu (arbori, osii, roți dințate, biele, șuruburi de mișcare).</p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h4 style="color:var(--success-color); border-bottom: 1px solid #444; padding-bottom:0.5rem;">Fc 200 (Fontă cenușie)</h4>
                <p><strong>Echivalent European:</strong> EN-GJL-200</p>
                <p><strong>Caracteristici:</strong> Bună turnabilitate, amortizează vibrațiile, fragilă la șocuri.</p>
                <p><strong>Utilizare:</strong> Batiuri de mașini-unelte, carcase de reductoare, blocuri motor, corpuri de pompă.</p>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h4 style="color:var(--success-color); border-bottom: 1px solid #444; padding-bottom:0.5rem;">Alte Materiale</h4>
                <ul>
                    <li><strong>Bz:</strong> Bronzuri (pentru lagăre de alunecare, bucșe, roți melcate).</li>
                    <li><strong>Al:</strong> Aliaje de aluminiu (carcase ușoare, pistoane).</li>
                </ul>
            </div>
        `
    },
    {
        id: "8.1.7",
        title: "7. Citirea și Interpretarea Desenelor",
        icon: "glasses-outline",
        content: `
            <h2>Citirea și interpretarea desenelor tehnice</h2>
            <p>Capacitatea de a înțelege un desen tehnic este esențială pentru orice technician. Aceasta presupune:</p>
            
            <div class="content-card">
                <h4>1. Citirea Desenelor de Execuție</h4>
                <p>Analiza detaliată a unei singure piese pentru fabricare:</p>
                <ul>
                    <li><strong>Vizualizarea formei:</strong> Reconstituirea mentală a piesei 3D din proiecțiile 2D.</li>
                    <li><strong>Identificarea dimensiunilor:</strong> Citirea cotelor nominale și a toleranțelor.</li>
                    <li><strong>Condiții tehnice:</strong> Rugozitate, tratamente termice, abateri de formă (ex: cilindricitate, planeitate).</li>
                </ul>
            </div>

            <div class="content-card">
                <h4>2. Citirea Desenelor de Ansamblu</h4>
                <p>Înțelegerea funcționării unui mecanism:</p>
                <ul>
                    <li>Identificarea pieselor componente după numerele de poziție.</li>
                    <li>Înțelegerea lanțului cinematic (cum se transmite mișcarea).</li>
                    <li>Identificarea modului de asamblare/demontare.</li>
                </ul>
            </div>
        `
    },
    {
        id: "8.2.0",
        title: "8.1. Desene de Construcții Metalice",
        icon: "business-outline",
        content: `
            <h2>Desene de Construcții Metalice</h2>
            <p>Utilizează simboluri standardizate pentru profile și suduri (conform SR EN 22553).</p>
            
            <h3>1. Profile Laminate (Simboluri)</h3>
            <div class="grid-2-cols" style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem; margin-bottom: 2rem;">
                <div class="info-box">
                    <ul style="list-style:none; padding:0;">
                        <li><strong style="color:var(--accent-color); font-size:1.2rem;">I</strong> &nbsp; Profil dublu T (INP)</li>
                        <li><strong style="color:var(--accent-color); font-size:1.2rem;">[</strong> &nbsp; Profil U (UNP)</li>
                    </ul>
                </div>
                <div class="info-box">
                    <ul style="list-style:none; padding:0;">
                        <li><strong style="color:var(--accent-color); font-size:1.2rem;">L</strong> &nbsp; Cornier (Laminat L)</li>
                        <li><strong style="color:var(--accent-color); font-size:1.2rem;">T</strong> &nbsp; Profil T</li>
                    </ul>
                </div>
            </div>

            <h3>2. Reprezentarea Sudurilor</h3>
            <p>Simbolul de sudură este compus din: <strong>Linia de referință</strong> (orizontală) + <strong>Săgeata</strong> + <strong>Simbolul elementar</strong>.</p>
            
            <div class="content-card">
                <h4>Regula de Poziționare:</h4>
                <ul>
                    <li><strong>Sub linie:</strong> Sudura este pe partea săgeții ("aici").</li>
                    <li><strong>Deasupra liniei:</strong> Sudura este pe partea opusă ("dincolo").</li>
                </ul>
            </div>

            <div class="content-card">
                <h4>Simboluri Elementare Uzuale:</h4>
                <ul class="symbol-list" style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                    <li><strong>Δ (Triunghi):</strong> Sudură de colț (în V).</li>
                    <li><strong>V:</strong> Sudură cap la cap în V.</li>
                    <li><strong>Y:</strong> Sudură cap la cap în Y.</li>
                    <li><strong>O (Cerc pe linie):</strong> Sudură de jur împrejur (perimetrală).</li>
                    <li><strong>Steag:</strong> Sudură efectuată pe șantier (la montaj).</li>
                </ul>
            </div>
        `
    },

    {
        id: "8.3.0",
        title: "8.2. Desene de Operații",
        icon: "cog-outline",
        content: `
            <h2>Desene de Operații și Tehnologice</h2>
            <p>Sunt utilizate în procesul de producție pentru a descrie stadiile intermediare ale prelucrării.</p>

            <div class="content-card">
                <h4>1. Desenul de Semifabricat</h4>
                <p>Reprezintă piesa brută (turnată sau forjată) cu adaosurile de prelucrare incluse. Dimensiunile finale sunt trecute ca referință.</p>
            </div>

            <div class="content-card">
                <h4>2. Desenul de Operație</h4>
                <p>Indicarea strictă a cotelor care trebuie realizate la o anumită mașină (ex: strunjire, frezare). Cuprinde:</p>
                <ul>
                    <li>Modul de prindere a piesei în dispozitiv.</li>
                    <li>Suprafețele de bază (de așezare).</li>
                    <li>Parametrii regimului de așchiere (viteză, avans).</li>
                </ul>
            </div>
        `
    },
    {
        id: "8.4.0",
        title: "8.3. Scheme Cinematice (Mecanica)",
        icon: "git-network-outline",
        content: `
            <h2>Scheme Cinematice</h2>
            <p>Reprezentarea simplificată a mișcării (SR EN ISO 3952). Se desenează fără a respecta scara sau forma constructivă reală, doar funcționalitatea.</p>

            <div class="content-card">
                <h3>Elemente de Transmitere a Mișcării</h3>
                <ul style="display:grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <li><strong> ———— </strong> Arbore / Ax (Linie continuă groasă)</li>
                    <li><strong> ==||== </strong> Cuplaj fix</li>
                    <li><strong> X (în casetă)</strong> Cuplaj mobil / Ambreiaj</li>
                    <li><strong> —O—O— </strong> Transmisie prin curea</li>
                    <li><strong> —⛓— </strong> Transmisie prin lanț</li>
                </ul>
            </div>

            <div class="content-card">
                <h3>Elemente de Susținere și Acționare</h3>
                <ul>
                    <li><strong>Lagăr (Rulment):</strong> Reprezentat schematic prin simboluri specifice pentru lagăre radiale sau axiale.</li>
                    <li><strong>Angrenaje (Roți dințate):</strong>
                        <ul>
                            <li>Cilindrice: Două dreptunghiuri sau cercuri tangente.</li>
                            <li>Conice: Două trapeze tangente.</li>
                            <li>Melcate: Cerc (roata) + Trapez/Dreptunghi (melcul).</li>
                        </ul>
                    </li>
                    <li><strong>M 3~</strong> Motor electric trifazat.</li>
                </ul>
            </div>
        `
    },

    {
        id: "8.5.0",
        title: "8.4. Desene de Instalații",
        icon: "flash-outline",
        content: `
            <h2>Desene de Instalații (Sanitare & Electrice)</h2>
            <p>Se bazează pe coduri de culori și simboluri standardizate universal.</p>

            <h3>1. Instalații Sanitare (Coduri de Culori)</h3>
            <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:20px;">
                <div style="background:#3498db; color:white; padding:10px; borderRadius:5px; flex:1; min-width:120px; text-align:center;">
                    <strong>ALBASTRU</strong><br>Apă Rece Potabilă
                </div>
                <div style="background:#e74c3c; color:white; padding:10px; borderRadius:5px; flex:1; min-width:120px; text-align:center;">
                    <strong>ROȘU</strong><br>Apă Caldă Menajeră
                </div>
                <div style="background:#8e44ad; color:white; padding:10px; borderRadius:5px; flex:1; min-width:120px; text-align:center;">
                    <strong>MARO</strong><br>Canalizare
                </div>
                <div style="background:#f1c40f; color:black; padding:10px; borderRadius:5px; flex:1; min-width:120px; text-align:center;">
                    <strong>GALBEN</strong><br>Gaze Naturale
                </div>
            </div>

            <h3>2. Instalații Electrice (Simboluri Uzuale)</h3>
            <div class="grid-2-cols" style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
                <div class="content-card">
                    <h4>Aparataj de Comandă</h4>
                    <ul>
                        <li><strong>Întrerupător simplu:</strong> Cerc cu o linie oblică (crosă).</li>
                        <li><strong>Întrerupător dublu:</strong> Cerc cu două crose.</li>
                        <li><strong>Comutator cap-scară:</strong> Cerc cu două crose opuse.</li>
                        <li><strong>Buton (Sonerie):</strong> Cerc cu un punct în centru.</li>
                    </ul>
                </div>
                <div class="content-card">
                    <h4>Receptoare & Protecție</h4>
                    <ul>
                        <li><strong>Priză (Simplă):</strong> Semicerc cu o linie.</li>
                        <li><strong>Priză (Schuko/Împământare):</strong> Semicerc cu linie + T vertical.</li>
                        <li><strong>Lampă (Bec):</strong> Cerc cu un X (cruce) în interior.</li>
                        <li><strong>Tablou (Siguranțe):</strong> Dreptunghi hașurat sau cutie cu simboluri de siguranțe automate.</li>
                    </ul>
                </div>
            </div>
        `
    }

];
