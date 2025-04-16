/* eslint-disable react/no-unknown-property */
import links from "./links";

import logo from "../assets/imgs/logo/logo.png";
import solidLogo from "../assets/imgs/logo/solidLogo.png";
import bgHeroPc from "../assets/imgs/hero/bgHeroPc.webp";
import bgHeroMobile from "../assets/imgs/hero/bgHeroMobile.webp";

import imgFeatures from "../assets/imgs/features/imgFeatures.webp";
import imgDivisor from "../assets/imgs/features/imgDivisor.webp";

import aboutImg1 from "../assets/imgs/about/imgAbout.webp";
import aboutSocialImg from "../assets/imgs/about/aboutSocialImg.jpg";

import imgSteps from "../assets/imgs/steps/imgSteps.webp";

import numbersImgBg from "../assets/imgs/paralaxe/bgParalaxe1.jpg";

import trustedByImg1 from "../assets/imgs/trustedBy/item1.jpg";
import trustedByImg2 from "../assets/imgs/trustedBy/item2.jpg";
import trustedByImg3 from "../assets/imgs/trustedBy/item3.jpg";

import featuresImg1 from "../assets/imgs/features/featuresImg1.png";
import featuresImg2 from "../assets/imgs/features/featuresImg2.webp";
import featuresImg3 from "../assets/imgs/features/featuresImg3.webp";
import featuresImg4 from "../assets/imgs/features/featuresImg4.webp";
import featuresImg5 from "../assets/imgs/features/featuresImg5.webp";
import featuresImg6 from "../assets/imgs/features/featuresImg6.png";
import featuresImg7 from "../assets/imgs/features/featuresImg7.jpg";

import ctaWhatsappImgBg from "../assets/imgs/paralaxe/bgParalaxe2.jpg";

import teamMemberImg1 from "../assets/imgs/team/team1.webp";
import teamMemberImg2 from "../assets/imgs/team/team2.webp";
import teamMemberImg3 from "../assets/imgs/team/team3.webp";
import teamMemberImg4 from "../assets/imgs/team/team4.webp";

import imgTestimonial1 from "../assets/imgs/testimonials/testimonial1.webp";
import imgTestimonial2 from "../assets/imgs/testimonials/testimonial2.webp";
import imgTestimonial3 from "../assets/imgs/testimonials/testimonial3.webp";
import imgTestimonial4 from "../assets/imgs/testimonials/testimonial4.webp";
import TypewriterComponent from "../components/animation/TypeWriter";

const content = {
  texts: {
    navbar: {
      logo: {
        img: logo,
        alt: "Logomarca",
      },
      solidLogo: {
        img: solidLogo,
        alt: "Logomarca",
      },
      menuItems: ["Início", "Serviços", "Quem somos", "Perguntas Frequentes"],
      ctaButtonText: "Contato",
      ctaButtonTextResponsive: "Contato",
    },
    hero: {
      miniTag: "ADESTRAMENTO E HOSPEDAGEM CANINA EM SÃO BERNARDO DO CAMPO - SP",
      title: (
        <h1 className="mb-[16px] desktop1:leading-[65px]">
          <span className="">
            Seu cão
            <TypewriterComponent strings={["em paz,", "feliz,", "calmo,"]} />
          </span>
          você mais ainda
        </h1>
      ),

      subtitle:
        "Técnicas personalizadas para garantir obediência, respeito e uma conexão verdadeira, harmônica e saudável com seu cão.",
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
        backgroundMobile: bgHeroMobile,
        backgroundPC: bgHeroPc,
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
      subtitle: "Um pouco mais sobre a Descãoplicando Escola e Hotel para Cães.",
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
      buttonModalLabelAbout: "Continuar lendo",
      modal: (
        <p>
          A Descãoplicando foi idealizada em 2021 por dois apaixonados por cães:
          Rafael de Araújo, adestrador com 7 anos de experiência, e Thales Eloi,
          engenheiro formado e tutor que encontrou no mundo canino uma forma de
          proporcionar bem-estar e qualidade de vida para cães e suas famílias.
          <br />
          <br />
          Com uma abordagem única, unimos conhecimento técnico e empatia para
          oferecer soluções eficazes e transformadoras no comportamento canino.
          <br />
          <br />
          Nossa missão é simples: proporcionar bem-estar, saúde emocional e
          equilíbrio aos cães que passam pelo nosso espaço. Somos muito mais que
          uma escola e hotel para cães; somos um centro especializado em
          comportamento canino, onde respeitamos a natureza de cada animal e nos
          dedicamos a atender suas necessidades individuais. Acreditamos que a
          vida com um cão pode ser mais simples e gratificante quando há
          compreensão mútua e respeito pelos limites de cada um.
          <br />
          <br />
          Rafael, idealizador da Descãoplicando, é adestrador desde 2015 e já
          atendeu mais de 300 cães. Com especialização em comportamento canino,
          ele aplica uma metodologia prática e acessível, projetada para ajudar
          tutores a atenderem as necessidades de seus cães de maneira eficaz e
          com qualidade. Além de formar novos profissionais no campo, ele
          compartilha seu conhecimento para tornar a convivência entre cães e
          tutores mais harmônica e satisfatória.
          <br />
          <br />
          Thales, engenheiro e sócio de Rafael, trouxe sua paixão pelo
          comportamento canino após ser cliente de Rafael e perceber os ótimos
          resultados no treinamento de seu próprio cão. Ele se aprofundou no
          assunto e, com seu conhecimento, oferece apoio administrativo e
          atendimento especializado aos tutores, garantindo que cada cão receba
          o cuidado que merece.
          <br />
          <br />
          Na Descãoplicando, cada cão é tratado de forma única, com um
          atendimento personalizado e sempre com foco no equilíbrio físico e
          emocional. Nossos serviços de Escola, Hospedagem e Treinamento foram
          planejados para oferecer uma rotina segura, divertida e enriquecedora.
          O resultado é uma relação mais saudável, feliz e conectada entre cães
          e seus tutores.
          <br />
          <br />
          Junte-se a nós e descubra como uma rotina estruturada e respeitosa
          pode transformar a vida do seu cão e de sua família.
          <br />
          <br />
        </p>
      ),
      ctaButtonAriaLabel: "Botão para entrar em contato",
      ctaButtonText: "Entre em contato",
      aboutSocial: {
        img: {
          img: aboutSocialImg,
          alt: "Foto Profissional",
        },
        miniTag: "FIQUE POR DENTRO",
        title: "Siga a Descãoplicando nas redes sociais 🐶",
        subtitle: "",
        paragraph: (
          <p>
            Quer saber mais sobre como melhorar a rotina do seu cão? Siga a
            Descãoplicando no Instagram!
            <br />
            <br />
            Fique por dentro das dicas, novidades e conteúdos sobre
            comportamento canino, treinamentos e cuidados essenciais para a vida
            do seu cão. Não perca a chance de proporcionar mais qualidade de
            vida para o seu cão!
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
      miniTag: "NOSSOS SERVIÇOS",
      title: "Proporcione o melhor para o seu cão!",
      subtitle:
        "Hospede e adestre seu cão, criando uma experiência inesquecível para ele e para você!",
      imgFeatures: imgFeatures,
      imgDivisor: imgDivisor,
      card1: {
        img: featuresImg2,
        title: "Consulta comportamental",
        subtitle: "Diagnóstico e solução para o seu cão.",
        description: (
          <div>
            Na nossa Escola e Hotel para cães, oferecemos a Consulta
            Comportamental como o primeiro passo essencial para entender e
            melhorar o comportamento do seu cão.
            <br />
            <br />
            A Consulta Comportamental nos permite avaliar o comportamento do seu
            cão e identificar as causas de comportamentos indesejados.
            Analisamos o histórico de vida e saúde, identificamos problemas como
            ansiedade e agressividade, e fornecemos orientações importantes
            sobre alimentação, exercícios, socialização e técnicas de
            treinamento.
            <br />
            <br />
            Realizamos a consulta comportamental a domicílio para a região do
            ABCD e algumas regiões de São Paulo, além de oferecê-la online para
            outras localidades, garantindo praticidade e atendimento onde você
            estiver.
            <br />
            <br />
            Com base na consulta, desenvolvemos um plano personalizado que pode
            incluir:
            <ul>
              <li>- Treinamento Hospedado</li>
              <li>- Treinamento a domicílio</li>
              <li>- Escola com Acompanhamento a Domicílio</li>
            </ul>
            <br />
            Nosso objetivo é garantir que seu cão tenha uma vida
            comportamentalmente saudável e feliz. Agende sua consulta e dê o
            primeiro passo para uma convivência mais harmoniosa com o seu cão.
          </div>
        ),
        imgModal: featuresImg2,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba mais",
        buttonLink: links.ctaWhatsapp,
      },
      card2: {
        img: featuresImg3,
        title: "Sessões a domicílio",
        subtitle: "Sessões comportamentais no conforto de casa.",
        description: (
          <div>
            Aqui na nossa Escola e Hotel para cães Descãoplicando, oferecemos um
            serviço especial de treinamento a domicílio, com o objetivo de
            proporcionar uma vida comportamental mais saudável para cães e
            tutores.
            <br />
            <br />
            Nesse programa, destacamos a importância do envolvimento dos tutores
            em todas as dinâmicas e processos de treinamento.
            <br />
            <br />
            Os tutores também são responsáveis pela evolução do cão, se
            comprometendo com as dinâmicas abordadas na residência, participando
            ativamente da modelagem comportamental, além de se dedicarem às
            atividades de rotina e direcionamentos propostos pelo profissional.
            <br />
            <br />
            As sessões acontecem duas vezes por semana, com duração média de uma
            hora.
            <br />
            <br />
            Estamos à disposição para ajudar você e seu cão a alcançarem uma
            convivência harmoniosa e equilibrada!
          </div>
        ),
        imgModal: featuresImg3,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba mais",
      },
      card3: {
        img: featuresImg4,
        title: "Treinamento canino",
        subtitle: "Um serviço exclusivo da Descãoplicando.",
        description: (
          <div>
            <h2 className="font-bold">TREINAMENTO HOSPEDADO:</h2>
            <br />
            Um serviço exclusivo da nossa Escola e Hotel para cães
            Descãoplicando, que visa proporcionar uma vida comportamental
            saudável para o seu cão e tranquilidade para você. Durante a
            hospedagem, o cão precisará de uma caixa de transporte (disponível
            para aluguel, se necessário), ferramentas específicas indicadas por
            nós. A alimentação e a quantidade de tacãoes higiênicos conforme o
            número de diárias também são oferecidas pelos tutores.
            <br /> <br />
            É essencial que o cão seja castrado, tenha a carteirinha de
            vacinação em dia (vacinas V10, raiva e gripe canina) e um exame de
            fezes negativo para giárdia. Nos últimos cinco dias consecutivos de
            hospedagem, os tutores devem comparecer à nossa Escola para receber
            orientações sobre o treinamento realizado. Após o período de
            hospedagem, oferecemos acompanhamento via WhatsApp por um mês.
            Durante esse período, pode ser necessário o retorno do cão para
            ajustes no treinamento. Nosso objetivo é garantir que seu cão tenha
            uma experiência positiva e que você, como tutor, sinta-se seguro e
            bem orientado em cada etapa do processo.
            <br />
            <br />
          </div>
        ),
        imgModal: featuresImg4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba mais",
      },
      card4: {
        img: featuresImg5,
        title: "Escola para cães",
        subtitle: "Seu cão aprendendo com especialistas.",
        description: (
          <div>
            Na nossa Escola para Cães, proporcionamos um ambiente ideal para
            equilibrar a vida física e emocional dos cães e tutores. Oferecemos
            uma rotina estruturada que inclui atividades físicas como caminhada,
            uso de esteira e atividades sociais, todas adaptadas às necessidades
            individuais de cada cão.
            <br />
            <br />
            Nossa escola é exclusiva para cães castrados, sendo aceitos machos
            até 6 meses e após esse período a castração é obrigatória. Fêmeas em
            período de cio ficam afastadas de todas as atividades. Para a
            matrícula, é necessário apresentar a carteira de vacinação
            atualizada com V10, vacina de gripe, raiva e um exame de fezes
            negativo para giárdia.
            <br />
            <br />
            Os cães devem trazer sua própria ração para o almoço e um tapete
            higiênico. Todo o restante é oferecido pela escola. Funcionamos de
            segunda, quarta, quinta e sexta-feira, das 7h às 19h, garantindo que
            seu cão tenha um dia repleto de exercícios, socialização e
            relaxamento sob nossa supervisão especializada.
            <br />
            <br />
            Venha fazer parte da nossa Escola para Cães e proporcione ao seu
            companheiro uma vida mais saudável e equilibrada. Estamos prontos
            para acolher seu cão e oferecer o melhor cuidado para seu bem-estar.
            Entre em contato e agende uma visita!
          </div>
        ),
        imgModal: featuresImg5,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba mais",
      },
      card5: {
        img: featuresImg7,
        title: "Hospedagem para cães",
        subtitle: "Conforto e segurança enquanto você estiver fora.",
        description: (
          <div>
            Nosso serviço de hospedagem comum oferece uma rotina completa para o
            seu cão, com exercícios físicos, sociais e momentos de relaxamento
            participando de todas as atividades com os cães que frequentam o
            espaço para o serviço de Escola para Cães. Os cães repousam na caixa
            de transporte, que deve ser trazida pelo tutor ou alugada conosco. A
            alimentação é fornecida pelos tutores, assim como a quantidade de
            tacãoes higiênicos necessária para o período de hospedagem.
            <br />
            <br />
            Caso o seu cão não frequente nossa escola, é necessário agendamento
            prévio para as adaptações necessárias onde o cão frequenta a rotina
            da Escola para Cães em datas específicas que antecedem o período da
            hospedagem.
            <br />
            <br />
            Este serviço é exclusivo para cães castrados, com a carteirinha de
            vacinação em dia (vacina v10, gripe, raiva) e um exame de fezes
            negativo para giárdia.
            <br />
            <br />
          </div>
        ),
        imgModal: featuresImg7,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba mais",
      },
    },
    steps: {
      miniTag: "ROTINA EQUILIBRADA",
      title: "Como fornecer uma boa rotina para o seu cão?",
      subtitle: "empty",
      imgSteps: imgSteps,
      cards: {
        card1: {
          stepNumber: 1,
          cardTitle: "Planejamento",
          cardDescription:
            "Crie hábitos e adicione em sua rotina momentos onde a interação com seu cão seja rica em atividades que fazem sentido para a natureza deste animal, tais como atividades físicas, passivas e sociais. A previsibilidade ajuda seu cão a se sentir seguro e pertencente ao grupo que hoje ele vive.",
        },
        card2: {
          stepNumber: 2,
          cardTitle: "Atividades",
          cardDescription:
            "Atividades físicas são importantíssimas assim como o decanso de qualidade. Entenda como funciona a noção de abrigo para seu cão e proporcione qualidade física nos momentos de atividades ativas e repouso em momentos de atividades passivas.",
        },
        card3: {
          stepNumber: 3,
          cardTitle: "Comunicação",
          cardDescription:
            "Entenda como funciona a comunicação da espécie canina, muito importante para estabelecer uma relação respeitosa e acertiva para as duas espécies que estão envolvidas nesse contexto, a nossa e a dos cães.",
        },
        card4: {
          stepNumber: 4,
          cardTitle: "Acompanhamento",
          cardDescription:
            "Conte conosco para o suporte contínuo na adaptação e manutenção da rotina do seu cão, garantindo que ele tenha uma vida mais previsível e saudável.",
        },
      },
    },
    cta: {
      backgroundImg: ctaWhatsappImgBg,
      miniTag: "CONTATE AGORA",
      title: "Pronto para transformar a vida do seu cão?",
      subtitle:
        "Entre em contato agora e comece a proporcionar uma rotina mais feliz, equilibrada e saudável para o seu cão com nossos serviços especializados!",
      ctaButtonText: "Vamos criar uma vida mais feliz para seu cão",
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
            "Nosso treinamento é personalizado, adaptado às necessidades de cada cão. Após um diagnóstico inicial, montamos um plano de ação com atividades práticas para garantir que seu cão aprenda de forma eficaz e natural.",
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
            "Para garantir que seu cão se adapte bem à nossa hospedagem é necessário o agendamento com antecedência. Isso nos permite entender suas necessidades e ajustar a rotina para o máximo de conforto e segurança.",
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

export const abstractions = {
  titleModal: <strong>{content.texts.about.title}</strong>,
  subtitleModal: <strong>{content.texts.about.subtitle}</strong>,
};

export default content;
