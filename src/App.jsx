```react
import React, { useState, useEffect } from 'react';
import { Gift, Heart, Search, CreditCard, Copy, Check } from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedPix, setCopiedPix] = useState(false);
  const [selectedGift, setSelectedGift] = useState(null);

  const pixKey = "81997368267"; 
  const pixInfo = "Ana Beatriz Mendonça de Paiva | Banco Bradesco";
  const whatsappNumber = "5581997368267"; 
  
  const weddingDate = new Date("2026-07-15T16:30:00");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyPix = () => {
    const el = document.createElement('textarea');
    el.value = pixKey;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  const handleWhatsAppClick = (gift) => {
    const message = `Olá! Gostaria de presentear vocês com a cota: *${gift.name}* no valor de R$ ${gift.price.toFixed(2).replace('.', ',')}! 🎉`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const gifts = [
    { id: 1, name: "Vai ter picanha sim!", price: 223.78, desc: "cota para ser chamado para o churrasco", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=600&auto=format&fit=crop" },
    { id: 2, name: "É TPM, CORRE!", price: 115.00, desc: "Me ajude a comprar doce, ninguém segura Beatriz de TPM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJS5mZCStfTYHTamoNfcq8wIq8fjzgaBBEA&s" },
    { id: 3, name: "Parcela iPhone", price: 680.00, desc: "ajude a storymaker a paga as longas 10 parcelas", image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=600&auto=format&fit=crop" },
    { id: 4, name: "Casal Fitness", price: 180.00, desc: "1 mês de mensalidade para virarmos marombas", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop" },
    { id: 5, name: "Cafeteira elétrica", price: 110.00, desc: "O combustível matinal que a gente não dispensa para enfrentar a rotina.", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQp9CGh8bd0rWxd88mslAoK1r6UMFe23u1FNt7gYHMfIdAX8IyKXUOd-klbE2Wl0rLrqz7YnErqKui_WDFe5kAnvVcJQ4-r5yLxPwyg52TEGDq_Vkh4X9tN1DH3tsGfSUA1nfbqHdg&usqp=CAc" },
    { id: 6, name: "Conta de água", price: 70.00, desc: "Pague nossas contas.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHns8t3Wt0AKzyhZM4GAU5GtIOUjCB_ztIg&s" },
    { id: 7, name: "Cota pra dormir no quarto de visita", price: 360.00, desc: "Quem não comprar vai dormir no sofá", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhpKV71xFy9c4fsthMpegpiwSyHYsMbhuHbg&s" },
    { id: 8, name: "Cota para ver o vestido da noiva", price: 846.00, desc: "O segredo mais bem guardado", image: "https://cdn0.casamentos.com.br/article/9601/3_2/960/png/71069-2.jpeg" },
    { id: 9, name: "Jogo de taças para água", price: 169.99, desc: "Para receber os amigos e brindar bons momentos.", image: "https://studiomkhome.com.br/wp-content/uploads/2024/11/jogo-taca-geometrica-2.jpg" },
    { id: 10, name: "Jogo de lençol de alta qualidade", price: 612.00, desc: "Uma cama gostosa para sonhar com o nosso futuro.", image: "https://m.media-amazon.com/images/I/81VgmkOPQvL.jpg" },
    { id: 11, name: "Cota Malinois", price: 415.00, desc: "me ajude a convencer Beatriz a comprar o cachorro", image: "https://pocoscom.com/wp-content/uploads/2023/06/pastor-belga-canil-gcm.jpg" },
    { id: 12, name: "Conta de Luz", price: 280.00, desc: "o ar condicionado gasta muito", image: "https://einvestidor.estadao.com.br/wp-content/uploads/2024/11/conta-luz-alta-que-fazer_211120243140.jpg-1200x800.webp" },
    { id: 13, name: "Luminária de mesa", price: 215.80, desc: "para o noivo estudar melhor", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=600&auto=format&fit=crop" },
    { id: 14, name: "Parcela IPVA", price: 394.41, desc: "Porque a vida adulta bate na porta o tempo todo.", image: "https://inspiringfans4takes.vteximg.com.br/arquivos/ids/198251-800-800/81933_88882_007_81933-007_MINIATURA-1961--FUSCA-VOLKSWAGEN-81933-AZUL-CLARO_1.jpg.jpg?v=638786212809630000" },
    { id: 15, name: "Jantar romântico à luz de velas", price: 458.00, desc: "Um momento reservado para celebrar nossa união com boa comida e conversa.", image: "https://thumbs.dreamstime.com/b/gatos-elegantes-jantando-em-uma-mesa-de-vela-durante-festa-gourmet-dois-vestidos-tuxedos-sentam-se-numa-maravilhosamente-marcada-394778044.jpg" },
    { id: 16, name: "Assinatura anual de streaming", price: 259.00, desc: "Para garantir que nossos momentos de lazer no sofá tenham sempre um bom conteúdo.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-8KlcHKaiZ0zWnAX3Mc26fcx0UP7Ms4rEQ&s" },
    { id: 17, name: "Tapete para os gatos estragarem", price: 657.00, desc: "Vai durar uns 2 meses, com sorte.", image: "https://lardaana.com/cdn/shop/files/Sa4763291c34348f7b786b3964e4f31a0a.webp?v=1733170602" },
    { id: 18, name: "Faqueiro de Ouro", price: 550.00, desc: "Chique demais da conta.", image: "https://a-static.mlcdn.com.br/470x352/kit-faqueiro-talheres-com-maleta-24-pecas-em-inox-c-dourado-99mx/lojaprimestore/dourado/93316770f80a2da24c77d5f56013e403.jpeg" },
    { id: 19, name: "Micro-ondas", price: 705.00, desc: "Essencial para a praticidade do nosso dia a dia corrido.", image: "https://brastemp.vtexassets.com/arquivos/ids/272273-1200-auto?v=639009631118370000&width=1200&height=auto&aspect=true" },
    { id: 20, name: "Geladeira duplex", price: 4200.00, desc: "Beatriz odeia o congelador atual", image: "https://brastemp.vtexassets.com/arquivos/ids/284166-1200-auto?v=639112517989700000&width=1200&height=auto&aspect=tru" },
    { id: 21, name: "Sofá confortável", price: 3800.20, desc: "Lugar oficial das maratonas de séries e sonecas de domingo.", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop" },
    { id: 22, name: "Liquidificador potente", price: 238.00, desc: "Para vitaminas, sucos e muitas receitas saudáveis.", image: "https://jcsbrasil.vteximg.com.br/arquivos/ids/241148-1000-1000/01.jpg?v=639148830202630000" },
    { id: 23, name: "Primeiro lugar na fila do Buffet", price: 230.00, desc: "Aproveite que só tem uma", image: "https://wl-incrivel.cf.tsp.li/resize/728x/jpg/a6d/2ad/9e03d85c5ea0aae3b27ce453e3.jpg" },
    { id: 24, name: "Estoque da fralda de Luninha", price: 587.00, desc: "Daqui a 2 anos ela chega", image: "https://i.ytimg.com/vi/vFNebfflQ18/maxresdefault.jpg" },
    { id: 25, name: "Fundo para nossa 1ª viagem internacional", price: 4950.50, desc: "um presentinho simples pra não passar em branco", image: "https://thumbs.dreamstime.com/b/gatos-rom%C3%A2nticos-em-paris-dois-estilosos-posando-frente-%C3%A0-torre-eiffel-uma-viagem-rom%C3%A2ntica-de-perfeito-para-viagens-e-amantes-407860420.jpg" },
    { id: 26, name: "Jogo de toalha de banho", price: 287.12, desc: "Porque um banho relaxante merece uma toalha de qualidade.", image: "https://casanovatoalhas.cdn.magazord.com.br/img/2025/07/blog/2678/post-blog-casanova-toalhas-decoracao-banheiro-3.png" },
    { id: 27, name: "Ar condicionado para o quarto de visitas", price: 2324.00, desc: "vai dizer que não ia gostar?", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThs78lZwtvoYRv3n1CX5H8E1wHOErmXt-jfA&s" },
    { id: 28, name: "Fogão 5 bocas", price: 1789.00, desc: "esse nosso ta solando os bolos", image: "https://lojasguaibim.vtexassets.com/arquivos/ids/172257/fogao-5-bocas-itatiaia-mesa-de-vidro-automatico-itaglass-plus-preto-1.jpg?v=638513801750830000" },
    { id: 29, name: "Aparelho de Jantar Novo", price: 432.00, desc: "Beatriz gosta de mesa posta", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaToeHMDibXxKRVVqEOp8fL3bpDZIp7hc5GQ&s" },
    { id: 30, name: "Feira de 1 mês", price: 905.00, desc: "assim quem sabe a gente não vai ao mercado todo dia", image: "https://cdn.folhape.com.br/img/c/800/600/dn_arquivo/2022/07/alta-da-inflacao-1ok.jpg" },
    { id: 31, name: "Robô aspirador", price: 2780.00, desc: "A vassoura nao da conta das perucas que ficam pela casa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZf54vBQx_1_bhi8pT5ctjOIp16JDxr0hqw&s" },
    { id: 32, name: "Cama Nova", price: 6500.00, desc: "a atual só tem buracos, help!", image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=600&auto=format&fit=crop" },
    { id: 33, name: "Câmera Analógica", price: 1500.00, desc: "Beatriz inventou que quer", image: "https://http2.mlstatic.com/D_NQ_NP_725510-MLB108250977059_032026-O.webp" },
    { id: 34, name: "Smoking de Jon", price: 738.00, desc: "Os gatos querem participar do casamento", image: "https://thumbs.dreamstime.com/z/smoking-vestindo-do-gato-53140072.jpg" },
    { id: 35, name: "Ferro a vapor", price: 302.00, desc: "passar roupa é horrível, vamos ver se assim não é tão ruim", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQaygEo1dCGff-W2H50bccpuTK0mLyeLuetTH-CcIC4-OiASOvcPWzR-97yifGIrrWJrwF8k6LEkdVc9gL0iD4Fk4bfESr1pt3W31ypWiRcGsZhkPoa4MUKVyZZH9ycczOp9bkm2iM&usqp=CAc" },
    { id: 36, name: "Resort All Inclusive", price: 2890.00, desc: "o que são 3 dias em um all inclusive?", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop" },
    { id: 37, name: "Aparador da sala", price: 970.00, desc: "Madeira maciça, um luxo.", image: "https://images.tcdn.com.br/img/img_prod/1215519/aparador_em_madeira_macica_2_gavetas_e_1_prateleira_com_2_opcoes_de_medidas_linha_cairo_5135_1_71718b55c10aa69b6ca1b8f02b8b3653.jpg" },
    { id: 38, name: "Cotas Amizade para sempre", price: 3575.00, desc: "nos ama? pois compre e nos tenha até o final", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpvzrNuCBSSOAPmQGqPoYdmS6j-SrkeeKRw&s" },
    { id: 39, name: "3 meses de Delivery", price: 340.00, desc: "Todo casal tem aquele dia de preguiça. Nossa salvação!", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi7lRbOvp3Sb0Yb95koAQDggTNSfOgdxlH0A&s" },
    { id: 40, name: "Conjunto de panelas antiaderentes", price: 780.00, desc: "Para evitar a frustração de comida grudada no fundo da panela.", image: "https://moveislinhares.vteximg.com.br/arquivos/ids/242424-1000-1000/116584-1.jpg?v=638850725680800000" },
    { id: 41, name: "Máquina Lava e Seca", price: 3888.00, desc: "Beatriz quer jogar o tanquinho fora", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTzCh8vGpyLrUX3rBp86J8XBxkXbVoizTsFw&s" }
  ];

  const filteredGifts = gifts.filter(gift => 
    gift.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap'); @import url('https://fonts.googleapis.com/css2?family=Allura&family=Raleway:wght@300;400;500;600&display=swap');`}
      </style>
      
      <div 
        className="fixed inset-0 z-0 bg-cover bg-[center_top_10%] bg-no-repeat"
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/d/1JJNPQxk_lli14JFYZDJPrNIsCXwC2oHZ')" }}
      />
      <div className="fixed inset-0 z-0 bg-stone-100/85 backdrop-blur-[2px]" />

      <main className="relative z-10 container mx-auto px-4 py-12 md:py-20 max-w-6xl">
        <header className="text-center mb-16 animate-fade-in-down">
          <h1 
            className="text-5xl md:text-7xl font-normal text-stone-900 tracking-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Beatriz <span style={{ fontFamily: "'Allura', cursive" }}>&</span> Mateus
          </h1>
          
          <p className="text-lg md:text-xl text-stone-700 mb-4 font-light italic max-w-2xl mx-auto leading-relaxed px-4 font-[Raleway]">
            "O amor é paciente, o amor é bondoso. Tudo sofre, tudo crê, tudo espera, tudo suporta. O amor nunca perece."
            <span className="block text-sm font-medium not-italic mt-2 text-stone-500">1 Coríntios 13: 4-8</span>
          </p>
          
          <p className="text-xl md:text-2xl text-stone-800 mb-10 font-light tracking-wide mt-6 font-[Raleway]">
            15 de Julho de 2026 às 16:30
          </p>

          <div className="flex justify-center gap-3 md:gap-6 font-[Raleway]">
            {[
              { label: 'Dias', value: timeLeft.days },
              { label: 'Horas', value: timeLeft.hours },
              { label: 'Minutos', value: timeLeft.minutes },
              { label: 'Segundos', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center bg-white/60 backdrop-blur-md p-3 md:p-5 rounded-2xl shadow-sm border border-stone-200/50 min-w-[70px] md:min-w-[100px]">
                <span className="text-3xl md:text-4xl font-light text-stone-800">{item.value}</span>
                <span className="text-xs md:text-sm uppercase tracking-wider text-stone-500 mt-1">{item.label}</span>
              </div>
            ))}
          </div>
        </header>

        <div className="max-w-3xl mx-auto mb-12 text-center font-[Raleway]">
          <h2 className="text-2xl md:text-3xl font-medium text-stone-800 mb-4">
            Nossa Lista de Presentes
          </h2>
          <p className="text-stone-600 mb-8 font-light leading-relaxed px-4">
            <strong>Sua presença é o nosso maior presente! Mas se quiser nos abençoar com algo para nossa nova casa, criamos algumas "cotas" divertidas de itens que precisamos. O valor será revertido em dinheiro para comprarmos no nosso tempo.</strong>
          </p>
          
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Buscar presentes..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-stone-200 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-transparent transition-all shadow-sm text-stone-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-3.5 text-stone-400 w-5 h-5" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 font-[Raleway]">
          {filteredGifts.map((gift) => (
            <div 
              key={gift.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-stone-100 flex flex-col group"
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img 
                  src={gift.image} 
                  alt={gift.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                  <span className="font-medium text-stone-800">
                    R$ {gift.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-medium text-stone-800 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{gift.name}</h3>
                <p className="text-stone-500 text-sm mb-6 flex-grow leading-relaxed font-light">{gift.desc}</p>
                
                <button
                  onClick={() => setSelectedGift(gift)}
                  className="w-full py-3 px-4 bg-stone-800 hover:bg-stone-900 text-white rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2 group-hover:shadow-md"
                >
                  <Gift className="w-4 h-4" />
                  <span>Presentear</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedGift && (
          <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 md:p-8 shadow-2xl relative overflow-hidden">
              <button 
                onClick={() => setSelectedGift(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 transition-colors"
              >
                ✕
              </button>
              
              <div className="text-center mb-6">
                <p className="text-stone-700 font-medium mb-4 italic">Sua presença é o nosso maior presente.</p>
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-stone-600" />
                </div>
                <h3 className="text-2xl font-medium text-stone-800 mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {selectedGift.name}
                </h3>
                <p className="text-stone-500 font-light mb-4 font-[Raleway]">{selectedGift.desc}</p>
                <div className="text-3xl font-semibold text-stone-800 font-[Raleway]">
                  R$ {selectedGift.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
              </div>

              <div className="space-y-6 font-[Raleway]">
                <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200">
                  <h4 className="font-medium text-stone-800 mb-3 flex items-center">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Pagamento via Pix
                  </h4>
                  <p className="text-xs text-stone-700 font-semibold mb-1">{pixInfo}</p>
                  <p className="text-sm text-stone-600 mb-3 font-light leading-relaxed">
                    Copie a chave Pix abaixo e confirme o valor de <strong>R$ {selectedGift.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>.
                  </p>
                  
                  <div className="flex items-center space-x-2">
                    <code className="flex-1 bg-white border border-stone-200 p-3 rounded-xl text-stone-800 text-sm font-mono text-center select-all">
                      {pixKey}
                    </code>
                    <button 
                      onClick={handleCopyPix}
                      className="p-3 bg-stone-800 hover:bg-stone-900 text-white rounded-xl transition-colors shrink-0"
                    >
                      {copiedPix ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="text-center">
                  <button 
                    onClick={() => handleWhatsAppClick(selectedGift)}
                    className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Nos mande um recado de amor!</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

```
