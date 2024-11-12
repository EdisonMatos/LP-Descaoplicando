import links from "./links";

import logo from "../assets/imgs/logo/logo.png";
import solidLogo from "../assets/imgs/logo/solidLogo.png";
import bgHeroImg from "../assets/imgs/hero/bgHero.webp";

import imgFeatures from "../assets/imgs/features/imgFeatures.webp";
import imgDivisor from "../assets/imgs/features/imgDivisor.webp";

import aboutImg1 from "../assets/imgs/about/imgAbout.webp";
import aboutSocialImg from "../assets/imgs/about/aboutSocialImg.jpg";

import imgSteps from "../assets/imgs/steps/imgSteps.webp";

import numbersImgBg from "../assets/imgs/paralaxe/bgParalaxe1.jpg";

import trustedByImg1 from "../assets/imgs/trustedBy/item1.jpg";
import trustedByImg2 from "../assets/imgs/trustedBy/item2.jpg";
import trustedByImg3 from "../assets/imgs/trustedBy/item3.jpg";

import featuresImg1 from "../assets/imgs/features/featuresImg1.jpg";
import featuresImg2 from "../assets/imgs/features/featuresImg2.jpg";
import featuresImg3 from "../assets/imgs/features/featuresImg3.jpg";
import featuresImg4 from "../assets/imgs/features/featuresImg4.jpg";

import ctaWhatsappImgBg from "../assets/imgs/paralaxe/bgParalaxe2.jpg";

import teamMemberImg1 from "../assets/imgs/team/team1.webp";
import teamMemberImg2 from "../assets/imgs/team/team2.webp";
import teamMemberImg3 from "../assets/imgs/team/team3.webp";
import teamMemberImg4 from "../assets/imgs/team/team4.webp";

import imgTestimonial1 from "../assets/imgs/testimonials/testimonial1.webp";
import imgTestimonial2 from "../assets/imgs/testimonials/testimonial2.webp";
import imgTestimonial3 from "../assets/imgs/testimonials/testimonial3.webp";
import imgTestimonial4 from "../assets/imgs/testimonials/testimonial4.webp";

const content = {
  texts: {
    navbar: {
      logo: {
        img: logo,
        alt: "Logomarca Arraial Melhor Só o Céu",
      },
      solidLogo: {
        img: solidLogo,
        alt: "Logomarca Arraial Melhor Só o Céu",
      },
      menuItems: ["Início", "Serviços", "Quem somos", "Perguntas Frequentes"],
      ctaButtonText: "Contato",
      ctaButtonTextResponsive: "Contato",
    },
    hero: {
      miniTag: "ADESTRAMENTO E HOSPEDAGEM CANINA EM SÃO BERNARDO DO CAMPO - SP",
      title: <h1 className="mb-[16px]">Seu cão feliz, você mais ainda</h1>,
      subtitle:
        "Técnicas personalizadas para garantir obediência, respeito e uma conexão verdadeira, harmônica e saudável com seu pet.",
      ctaButtonText: "Falar com um adestrador",
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
      secondaryCta: "A Definir",
      obsHero: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-map-pin text-primary"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        ),
        text: "Atendimento em todo ABC e Grande SP",
      },
      images: {
        background: bgHeroImg,
        static: {
          img: {},
          alt: "",
        },
        slide1: {
          img: {},
          alt: "",
        },
        slide2: {
          img: {},
          alt: "",
        },
        slide3: {
          img: {},
          alt: "",
        },
      },
    },
    trustedBy: {
      title: "Nossas Marcas Parceiras",
      subtitle: "Trabalhamos com as melhores marcas do mercado",
      trustedMore: {
        title: "Seguradoras",
        subtitle:
          "Confiança que apenas as maiores seguradoras do Brasil oferecem",
      },
      images: {
        img1: {
          img: { trustedByImg1 },
          alt: "marca Rennova",
        },
        img2: {
          img: { trustedByImg2 },
          alt: "marca Colgate",
        },
        img3: {
          img: { trustedByImg3 },
          alt: "marca dental Cremer",
        },
      },
    },
    numbers: {
      backgroundImg: numbersImgBg,
      number1: 7,
      number1Description: "Anos de experiência",
      number2: 500,
      number2Description: "Em ações ganhas para clientes",
      number3: 1000,
      number3Description: "Ações jurídicas",
    },
    about: {
      imagem: {
        img: aboutImg1,
        alt: "imagem empty",
      },
      miniTag: "NOSSA TRAJETÓRIA",
      title: "Quem somos?",
      subtitle: "Um pouco mais sobre a Descãoplicando Escola e Hotel para Cães",
      paragraph: (
        <div>
          A Descãoplicando foi idealizada em 2021 por dois apaixonados por cães:
          Rafael de Araújo, adestrador com 7 anos de experiência, e Thales Eloi,
          engenheiro formado e tutor que encontrou no mundo canino uma forma de
          proporcionar bem-estar e qualidade de vida para cães e suas famílias.
          <br />
          <br />
          Com uma abordagem única, unimos conhecimento técnico e empatia para
          oferecer soluções eficazes e transformadoras no comportamento canino.
        </div>
      ),
      aboutSocial: {
        img: {
          img: aboutSocialImg,
          alt: "Foto Profissional",
        },
        miniTag: "FIQUE POR DENTRO",
        title: "Siga a Descãoplicando nas redes sociais 🐾",
        subtitle: "",
        paragraph: (
          <p>
            Quer saber mais sobre como melhorar a rotina do seu cão? Siga a
            Descãoplicando no Instagram!
            <br />
            <br />
            Fique por dentro das dicas, novidades e conteúdos sobre
            comportamento canino, treinamentos e cuidados essenciais para a vida
            do seu pet. Não perca a chance de proporcionar mais qualidade de
            vida para o seu cãozinho! 🐶
          </p>
        ),
      },
    },
    team: {
      title: "Nossa Equipe",
      subtitle: "Conheça as mentes brilhantes por trás do nosso sucesso",
      members: {
        member1: {
          img: {
            img: teamMemberImg1,
            alt: "Edison Matos",
          },
          name: "Edison Matos",
          role: "CEO & Diretor de Desenvolvimento",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/edison-matoss/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/EdisonMatos",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            ),
            link3: "https://edisonmatos.github.io/",
          },
        },
        member2: {
          img: {
            img: teamMemberImg2,
            alt: "Gabriel Adans",
          },
          name: "Gabriel Adans",
          role: "Marketing Outsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/gabriel-adans-2bb029227/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/GabrielAdans",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: "https://www.instagram.com/adansgabriel/",
          },
        },
        member3: {
          img: {
            img: teamMemberImg3,
            alt: "Gabriel Souza",
          },
          name: "Gabriel Souza",
          role: "Desenvolvedor Frontend",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: " https://www.linkedin.com/in/gabriel-souza-b9945929a",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/BiellSouza",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: " https://www.instagram.com/biel.souza.904",
          },
        },
        member4: {
          img: {
            img: teamMemberImg4,
            alt: "Luiz Felipe",
          },
          name: "Luiz Felipe",
          role: "Designer Ourtsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/luiz-felipe-leite-95a246192/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link2: "https://www.instagram.com/luizleitedesigner/",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                fill="#000000"
                className=" bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            ),
            link3: "+556596241854",
          },
        },
      },
    },
    features: {
      miniTag: "ROTINA EQUILIBRADA",
      title: "Proporcione o melhor para o seu amigo de quatro patas!",
      subtitle:
        "Hospede e adestre seu cão, criando uma experiência inesquecível para ele e para você!",
      imgFeatures: imgFeatures,
      imgDivisor: imgDivisor,
      card1: {
        title: "Consulta comportamental",
        subtitle:
          "Diagnóstico do comportamento do cão para definir o melhor programa de treinamento.",
        img: featuresImg1,
        buttonLabel: "Saiba mais",
        buttonLink: `${links.whatsapp}Olá! Vim através do site e gostaria de saber sobre sites.`,
      },
      card2: {
        title: "Sessões a domicílio",
        subtitle:
          "Treinamento personalizado no conforto da sua casa para corrigir comportamentos específicos.",
        img: featuresImg2,
        buttonLabel: "Saiba mais",
        buttonLink: `${links.whatsapp}Olá! Vim através do site e gostaria de saber sobre landing pages.`,
      },
      card3: {
        title: "Treinamento hospedado",
        subtitle:
          "Cão hospedado e treinado em ambiente controlado para resultados rápidos.",
        img: featuresImg3,
        buttonLabel: "Saiba mais",
        buttonLink: `${links.whatsapp}Olá! Vim através do site e gostaria de saber sobre landing pages.`,
      },
      card4: {
        title: "Escola + Atendimento a domicílio",
        subtitle:
          "Treinamento completo na escola e reforço com sessões a domicílio.",
        img: featuresImg4,
        buttonLabel: "Saiba mais",
        buttonLink: `${links.whatsapp}Olá! Vim através do site e gostaria de saber sobre landing pages.`,
      },
    },
    steps: {
      miniTag: "ROTINA EQUILIBRADA",
      title: "Como funciona o dia-a-dia do seu cão?",
      subtitle: "empty",
      imgSteps: imgSteps,
      cards: {
        card1: {
          stepNumber: 1,
          cardTitle: "Planejamento",
          cardDescription:
            "Estabeleça horários consistentes para alimentação, passeios e momentos de descanso. A previsibilidade ajuda seu cão a se sentir seguro e tranquilo.",
        },
        card2: {
          stepNumber: 2,
          cardTitle: "Atividades",
          cardDescription:
            "Inclua atividades físicas, sociais e passivas que atendam às necessidades do seu cão, com variações para manter a diversão e engajamento.",
        },
        card3: {
          stepNumber: 3,
          cardTitle: "Ambiente",
          cardDescription:
            "Prepare um ambiente familiar e tranquilo, com espaços para descanso e socialização, de modo que seu cão se sinta confortável e equilibrado.",
        },
        card4: {
          stepNumber: 4,
          cardTitle: "Acompanhamento",
          cardDescription:
            "Conte conosco para o suporte contínuo na adaptação e manutenção da rotina do seu cão, garantindo que ele tenha uma vida mais feliz e saudável.",
        },
      },
    },
    cta: {
      backgroundImg: ctaWhatsappImgBg,
      miniTag: "CONTATE AGORA",
      title: "Pronto para transformar a vida do seu cão?",
      subtitle:
        "Entre em contato agora e comece a proporcionar uma rotina mais feliz, equilibrada e saudável para o seu pet com nossos serviços especializados!",
      ctaButtonText: "Vamos criar uma vida mais feliz para seu pet",
    },
    testimonials: {
      miniTag: "FEEDBACKS REAIS",
      title: "Clientes sempre satisfeitos",
      subtitle: "Nossos clientes são a prova do que oferecemos.",
      images: {
        img1: {
          img: imgTestimonial1,
          alt: "Imagem de feedback",
        },
        img2: {
          img: imgTestimonial2,
          alt: "Imagem de feedback",
        },
        img3: {
          img: imgTestimonial3,
          alt: "Imagem de feedback",
        },
        img4: {
          img: imgTestimonial4,
          alt: "Imagem de feedback",
        },
      },
    },
    faq: {
      miniTag: "TIRE SUAS DÚVIDAS",
      title: "Perguntas Frequentes",
      subtitle:
        "Confira as perguntas abaixo para esclarecer suas dúvidas. Estamos aqui para ajudar!",
      questions: {
        question1: {
          question: "Como funciona o processo de treinamento para meu cão?",
          answer:
            "Nosso treinamento é personalizado, adaptado às necessidades de cada cão. Após uma avaliação inicial, montamos um plano de ação com atividades práticas para garantir que seu cão aprenda de forma eficaz e natural.",
        },
        question2: {
          question:
            "Quais serviços vocês oferecem na escola e hotel para cães?",
          answer:
            "Oferecemos uma variedade de serviços, incluindo treinamento especializado, hospedagem com acompanhamento diário, e uma rotina estruturada com atividades físicas, sociais e de relaxamento.",
        },
        question3: {
          question:
            "Como posso saber se meu cão está pronto para a hospedagem?",
          answer:
            "Para garantir que seu cão se adapte bem à nossa hospedagem, recomendamos uma avaliação prévia. Isso nos permite entender suas necessidades e ajustar a rotina para o máximo de conforto e segurança.",
        },
        question4: {
          question:
            "Vocês atendem cães com necessidades especiais ou comportamentais?",
          answer:
            "Sim! Nossa abordagem personalizada é ideal para cães com necessidades comportamentais ou especiais. Trabalhamos com paciência e dedicação para ajudar cada cão a desenvolver habilidades e encontrar equilíbrio, independentemente de suas particularidades.",
        },
      },
    },
    carouselv1: {
      title: "Título",
      subtitle: "Subtítulo",
    },
  },
};

export default content;
