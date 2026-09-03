/* ---------- Base de Dados de Estados e Pontos de Coleta ---------- */

const ESTADOS = [
    ["AC", "Acre"], ["AL", "Alagoas"], ["AP", "Amapá"], ["AM", "Amazonas"],
    ["BA", "Bahia"], ["CE", "Ceará"], ["DF", "Distrito Federal"], ["ES", "Espírito Santo"],
    ["GO", "Goiás"], ["MA", "Maranhão"], ["MT", "Mato Grosso"], ["MS", "Mato Grosso do Sul"],
    ["MG", "Minas Gerais"], ["PA", "Pará"], ["PB", "Paraíba"], ["PR", "Paraná"],
    ["PE", "Pernambuco"], ["PI", "Piauí"], ["RJ", "Rio de Janeiro"], ["RN", "Rio Grande do Norte"],
    ["RS", "Rio Grande do Sul"], ["RO", "Rondônia"], ["RR", "Roraima"], ["SC", "Santa Catarina"],
    ["SP", "São Paulo"], ["SE", "Sergipe"], ["TO", "Tocantins"]
];

const PONTOS = {
    AC: {
        "Rio Branco": [
            {
                nome: "Ecoponto Central Rio Branco",
                desc: "Ponto de recolhimento de pequenos e médios eletroeletrônicos e pilhas.",
                tag: "Ecoponto"
            }
        ]
    },
    AL: {
        "Maceió": [
            {
                nome: "Ecoponto Maceió / Coleta Seletiva",
                desc: "Ponto municipal para entrega voluntária de resíduos eletrônicos.",
                tag: "Ecoponto"
            }
        ]
    },
    AP: {
        "Macapá": [
            {
                nome: "Ecoponto Macapá",
                desc: "Local de descarte correto para computadores, monitores e periféricos.",
                tag: "Ecoponto"
            }
        ]
    },
    AM: {
        "Manaus": [
            {
                nome: "Centro de Descarte de Eletrônicos Manaus",
                desc: "Ponto fixo para recolhimento e destinação ambientalmente adequada.",
                tag: "Ecoponto"
            }
        ]
    },
    BA: {
        "Salvador": [
            {
                nome: "Ecoponto Salvador",
                desc: "Coleta de eletrodomésticos, celulares e equipamentos de informática.",
                tag: "Ecoponto"
            }
        ]
    },
    CE: {
        "Fortaleza": [
            {
                nome: "Ecoponto Fortaleza",
                desc: "Recebimento de e-waste e pequenos aparelhos domésticos fora de uso.",
                tag: "Ecoponto"
            }
        ]
    },
    DF: {
        "Brasília": [
            {
                nome: "Ecoponto Brasília / Plano Piloto",
                desc: "Ponto para entrega voluntária de resíduos eletroeletrônicos.",
                tag: "Ecoponto"
            }
        ]
    },
    ES: {
        "Vitória": [
            {
                nome: "Ecoponto Vitória",
                desc: "Descarte gratuito de componentes eletrônicos e bateria.",
                tag: "Ecoponto"
            }
        ]
    },
    GO: {
        "Goiânia": [
            {
                nome: "Ecoponto Goiânia",
                desc: "Ponto de coleta especializado em eletrônicos e lâmpadas.",
                tag: "Ecoponto"
            }
        ]
    },
    MA: {
        "São Luís": [
            {
                nome: "Ecoponto São Luís",
                desc: "Coleta e triagem de resíduos eletroeletrônicos urbanos.",
                tag: "Ecoponto"
            }
        ]
    },
    MT: {
        "Cuiabá": [
            {
                nome: "Ecoponto Cuiabá",
                desc: "Recebimento de computadores, TVs e aparelhos portáteis.",
                tag: "Ecoponto"
            }
        ]
    },
    MS: {
        "Campo Grande": [
            {
                nome: "Ecoponto Campo Grande",
                desc: "Ponto fixo municipal de descarte consciente de e-waste.",
                tag: "Ecoponto"
            }
        ]
    },
    MG: {
        "Belo Horizonte": [
            {
                nome: "Ecoponto BH",
                desc: "Coleta seletiva de aparelhos e periféricos eletroeletrônicos.",
                tag: "Ecoponto"
            }
        ]
    },
    PA: {
        "Belém": [
            {
                nome: "Ecoponto Belém",
                desc: "Ponto de entrega voluntária de equipamentos de TI e celulares.",
                tag: "Ecoponto"
            }
        ]
    },
    PB: {
        "João Pessoa": [
            {
                nome: "Ecoponto João Pessoa",
                desc: "Local destinado para descarte seguro de eletrônicos quebrados.",
                tag: "Ecoponto"
            }
        ]
    },
    PR: {
        "Curitiba": [
            {
                nome: "Ecoponto Curitiba",
                desc: "Ponto de logística reversa e reciclagem de resíduos eletrônicos.",
                tag: "Ecoponto"
            }
        ]
    },
    PE: {
        "Recife": [
            {
                nome: "Ecoponto Recife",
                desc: "Recebimento e destinação ambientalmente correta de e-waste.",
                tag: "Ecoponto"
            }
        ]
    },
    PI: {
        "Teresina": [
            {
                nome: "Ecoponto Teresina",
                desc: "Ponto oficial para coleta de aparelhos fora de uso.",
                tag: "Ecoponto"
            }
        ]
    },
    RJ: {
        "Rio de Janeiro": [
            {
                nome: "Ecoponto RJ Central",
                desc: "Descarte de eletroeletrônicos, monitores e baterias.",
                tag: "Ecoponto"
            }
        ]
    },
    RN: {
        "Natal": [
            {
                nome: "Ecoponto Natal",
                desc: "Coleta de e-waste e pequenos aparelhos eletrônicos.",
                tag: "Ecoponto"
            }
        ],
        "Mossoró": [
            {
                nome: "Sede da CAERN — Bom Jardim",
                desc: "Coletor fixo do programa RN + Limpo, no bairro Bom Jardim.",
                tag: "RN + Limpo"
            },
            {
                nome: "Campus Central da UERN",
                desc: "Ponto de coleta para resíduos eletrônicos no campus universitário.",
                tag: "Ecoponto"
            },
            {
                nome: "UFERSA — Campus Leste",
                desc: "Coleta de pequenos e médios eletroeletrônicos no setor acadêmico.",
                tag: "Ecoponto"
            }
        ],
        "Parnamirim": [
            {
                nome: "Câmara Municipal de Parnamirim",
                desc: "Ecoponto instalado nas instalações da Câmara, aberto à população.",
                tag: "Ecoponto"
            }
        ],
        "Assú": [
            {
                nome: "Ecopontos em escolas municipais",
                desc: "Implantação em andamento pelo projeto TecnoSustentável RN (10 ecopontos previstos).",
                tag: "Em implantação"
            }
        ],
        "Baraúna": [
            {
                nome: "Ecopontos em escolas municipais",
                desc: "Implantação em andamento pelo projeto TecnoSustentável RN (5 ecopontos previstos).",
                tag: "Em implantação"
            }
        ]
    },
    RS: {
        "Porto Alegre": [
            {
                nome: "Ecoponto Porto Alegre",
                desc: "Ponto de recebimento e descarte responsável de e-waste.",
                tag: "Ecoponto"
            }
        ]
    },
    RO: {
        "Porto Velho": [
            {
                nome: "Ecoponto Porto Velho",
                desc: "Coleta voluntária de eletroeletrônicos sem uso.",
                tag: "Ecoponto"
            }
        ]
    },
    RR: {
        "Boa Vista": [
            {
                nome: "Ecoponto Boa Vista",
                desc: "Local de descarte de resíduos eletrônicos domésticos.",
                tag: "Ecoponto"
            }
        ]
    },
    SC: {
        "Florianópolis": [
            {
                nome: "Ecoponto Florianópolis",
                desc: "Ponto de coleta e logística reversa de eletrônicos.",
                tag: "Ecoponto"
            }
        ]
    },
    SP: {
        "São Paulo": [
            {
                nome: "Ecoponto SP Central",
                desc: "Descarte de computadores, celulares e aparelhos domésticos.",
                tag: "Ecoponto"
            }
        ]
    },
    SE: {
        "Aracaju": [
            {
                nome: "Ecoponto Aracaju",
                desc: "Ponto público de destinação de resíduos eletrônicos.",
                tag: "Ecoponto"
            }
        ]
    },
    TO: {
        "Palmas": [
            {
                nome: "Ecoponto Palmas",
                desc: "Recebimento de e-waste para reciclagem seletiva.",
                tag: "Ecoponto"
            }
        ]
    }
};

/* ---------- Referências DOM ---------- */

const estadoSelect = document.getElementById('estadoSelect');
const cidadeSelect = document.getElementById('cidadeSelect');
const buscarBtn = document.getElementById('buscarBtn');
const resultsArea = document.getElementById('resultsArea');
const resultsCount = document.getElementById('resultsCount');
const resultsBadge = document.getElementById('resultsBadge');

const iconPin = `<svg viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="3"/></svg>`;
const iconInfo = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;

/* ---------- Funções de Renderização ---------- */

function dict(uf) {
    const item = ESTADOS.find(e => e[0] === uf);
    return item ? item[1] : uf;
}

function populateEstados() {
    estadoSelect.innerHTML = ESTADOS.map(([uf, nome]) => 
        `<option value="${uf}" ${uf === "RN" ? "selected" : ""}>${nome} (${uf})</option>`
    ).join('');
}

function populateCidades(uf) {
    let cidades = [];
    if (PONTOS[uf]) {
        cidades = Object.keys(PONTOS[uf]);
    }
    
    let html = cidades.map(c => `<option value="${c}">${c}</option>`).join('');
    html += `<option value="__outra__">Outra cidade...</option>`;
    
    cidadeSelect.innerHTML = html;
}

function renderResults() {
    const uf = estadoSelect.value;
    const cidade = cidadeSelect.value;
    const estadoNome = dict(uf);
    const pontos = (PONTOS[uf] && PONTOS[uf][cidade]) ? PONTOS[uf][cidade] : [];

    if (cidade !== "__outra__" && pontos.length) {
        resultsCount.innerHTML = `<strong>${cidade}</strong> — <strong>${pontos.length}</strong> ponto(s) de coleta encontrado(s) em <strong>${uf}</strong>`;
        resultsBadge.textContent = "Base verificada";
        resultsBadge.className = "status-badge ok";

        resultsArea.innerHTML = `
            <div class="results-grid">
                ${pontos.map(p => `
                    <div class="result-card">
                        <div class="result-icon">${iconPin}</div>
                        <div>
                            <h4>${p.nome}</h4>
                            <p>${p.desc}</p>
                            <span class="result-tag">${p.tag}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    } else {
        const nomeCidadeExibicao = cidade === "__outra__" ? "esse município" : (cidade || "essa cidade");
        
        resultsCount.innerHTML = `Nenhum ponto verificado ainda em <strong>${nomeCidadeExibicao} — ${estadoNome}</strong>`;
        resultsBadge.textContent = "Consulta nacional";
        resultsBadge.className = "status-badge pending";

        resultsArea.innerHTML = `
            <div class="empty-state">
                <div class="icon-box">${iconInfo}</div>
                <h4>Mapeamento local em expansão</h4>
                <p>Ainda não mapeamos ecopontos próprios nesta cidade. Utilize os buscadores nacionais parceiros (ABREE ou Green Eletron) para localizar os pontos de descarte mais próximos de você.</p>
            </div>
        `;
    }
}

/* ---------- Event Listeners e Inicialização ---------- */

populateEstados();
populateCidades(estadoSelect.value);
cidadeSelect.value = "Mossoró";
renderResults();

estadoSelect.addEventListener('change', () => {
    populateCidades(estadoSelect.value);
    renderResults();
});

cidadeSelect.addEventListener('change', renderResults);
buscarBtn.addEventListener('click', renderResults);

/* ---------- Animações (Intersection Observer) ---------- */

const els = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });

    els.forEach(el => io.observe(el));
} else {
    els.forEach(el => el.classList.add('in'));
}