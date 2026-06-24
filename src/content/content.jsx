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
      subtitle:
        "Um pouco mais sobre a Descãoplicando Escola e Hotel para Cães.",
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
        title: "Consulta Comportamental e Programas de Treinamento",
        subtitle:
          "Antes de iniciar qualquer protocolo ou escolher um programa de treinamento, nós precisamos entender o cenário real. ",
        description: (
          <div>
            <div className="w-full max-w-3xl mx-auto text-slate-700">
              {/* Header */}
              <div className="relative p-5 mb-6 overflow-hidden border rounded-2xl bg-gradient-to-br from-violet-50 via-fuchsia-50 to-white border-violet-100 sm:p-7">
                <div className="absolute rounded-full -top-10 -right-10 w-36 h-36 bg-violet-200/30 blur-2xl" />
                <div className="absolute w-32 h-32 rounded-full -bottom-12 -left-12 bg-fuchsia-200/30 blur-2xl" />

                <div className="relative">
                  <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold border rounded-full bg-white/80 border-violet-200 sm:text-sm text-violet-700">
                    📋 Consulta Comportamental e Programas de Treinamento
                  </span>

                  <h2 className="text-2xl font-bold leading-tight sm:text-3xl text-slate-900">
                    O ponto de partida para a transformação do seu cão
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed sm:text-base text-slate-600">
                    Antes de iniciar qualquer protocolo ou escolher um programa
                    de treinamento, nós precisamos entender o cenário real. A
                    Consulta Comportamental é um diagnóstico completo e
                    personalizado realizado{" "}
                    <strong className="text-slate-900">100% a domicílio</strong>
                    , diretamente onde os desafios do dia a dia acontecem.
                  </p>
                </div>
              </div>

              {/* Consulta */}
              <section className="mb-6">
                <div className="grid grid-cols-1 gap-3 mb-4 sm:grid-cols-2">
                  <div className="p-4 bg-white border shadow-sm rounded-2xl border-slate-200">
                    <div className="flex items-center justify-center mb-3 text-lg h-9 w-9 rounded-xl bg-violet-100">
                      🎯
                    </div>

                    <h3 className="text-sm font-bold sm:text-base text-slate-900">
                      Objetivo da consulta
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Mapear a rotina da casa, identificar os gatilhos dos
                      comportamentos indesejados e alinhar as expectativas da
                      família com metas reais de evolução e bem-estar.
                    </p>
                  </div>

                  <div className="p-4 bg-white border shadow-sm rounded-2xl border-slate-200">
                    <div className="flex items-center justify-center mb-3 text-lg h-9 w-9 rounded-xl bg-amber-100">
                      💡
                    </div>

                    <h3 className="text-sm font-bold sm:text-base text-slate-900">
                      Planejamento preventivo
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Também atendemos futuros tutores que planejam adotar ou
                      comprar um cão, preparando a família antes da chegada do
                      animal e estruturando o ambiente da forma correta.
                    </p>
                  </div>
                </div>

                <div className="p-5 mb-4 bg-white border shadow-sm rounded-2xl border-slate-200 sm:p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 text-xl shrink-0 rounded-xl bg-slate-100">
                      🧠
                    </div>

                    <div>
                      <h3 className="text-lg font-bold sm:text-xl text-slate-900">
                        O que acontece na consulta
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed sm:text-base text-slate-600">
                        Realizamos uma anamnese técnica para entender o cão, o
                        ambiente e a forma como a família se comunica com ele.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Avaliamos o histórico do cão, a dinâmica do ambiente doméstico e como os tutores se comunicam com ele.",
                      "Entregamos um conteúdo exclusivo sobre a natureza biológica da espécie canina, ajudando a família a entender por que o cão age de determinada maneira.",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-3 p-3 rounded-xl bg-slate-50"
                      >
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">
                          {index + 1}
                        </div>

                        <p className="text-sm leading-relaxed text-slate-600">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 text-white rounded-2xl bg-slate-900 sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex items-center justify-center w-12 h-12 text-2xl shrink-0 rounded-2xl bg-white/10">
                      ✅
                    </div>

                    <div>
                      <h3 className="text-lg font-bold sm:text-xl">
                        Resultado prático
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed sm:text-base text-slate-300">
                        Você recebe um direcionamento claro de como reestruturar
                        a rotina de casa para proporcionar mais qualidade de
                        vida, equilíbrio mental e bem-estar para o seu cão,
                        pavimentando o caminho para um comportamento muito
                        melhor.
                      </p>

                      <a
                        href="https://descao.inovasys.net.br/cadastro?origem=site"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-violet-500 px-5 py-3 text-sm sm:text-base font-bold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-600 hover:-translate-y-0.5"
                      >
                        👉 Agendar Triagem para Consulta Comportamental
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Programas */}
              <section>
                <div className="p-5 mb-4 bg-white border shadow-sm rounded-2xl border-slate-200 sm:p-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-semibold border rounded-full bg-violet-50 border-violet-100 sm:text-sm text-violet-700">
                    🐶 Programas de treinamento
                  </span>

                  <h3 className="text-xl font-bold leading-tight sm:text-2xl text-slate-900">
                    Escolha o caminho ideal para a fase e necessidade do seu cão
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed sm:text-base text-slate-600">
                    Cada programa foi estruturado para atender um momento
                    específico da vida do cão, desde os primeiros meses até
                    protocolos mais intensivos de reestruturação comportamental.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: "🏡",
                      title: "Descãoplicando Puppy Start 360",
                      subtitle:
                        "Treinamento domiciliar para filhotes até 6 meses",
                      objective:
                        "Construir uma convivência harmônica e prevenir desvios comportamentais comuns da infância canina, como ansiedade, destruição de objetos e erros de banheiro, antes que se tornem problemas crônicos.",
                      how: "Protocolo realizado integralmente a domicílio, capacitando a família na prática a estabelecer regras, limites saudáveis e uma comunicação clara desde o primeiro dia.",
                    },
                    {
                      icon: "🏫",
                      title: "Descãoplicando Life Style 360",
                      subtitle: "Treinamento híbrido",
                      objective:
                        "Desenvolver obediência, foco, estabilidade mental e neutralidade social aproveitando a estrutura profissional de Day Training da nossa sede.",
                      how: "O cão frequenta a nossa Escola para estímulos e treinos dinâmicos com a equipe. O programa inclui consultorias individuais para transferir o aprendizado aos tutores e manter o mesmo padrão de comunicação, manejo e respeito em casa.",
                    },
                    {
                      icon: "🚗",
                      title: "Descãoplicando Life Style Prime",
                      subtitle:
                        "Treinamento domiciliar para cães acima de 6 meses",
                      objective:
                        "Correção de problemas comportamentais desafiadores, como puxões na guia, reatividade, agitação excessiva, dificuldades em casa e falta de foco nos tutores.",
                      how: "Aulas individuais e personalizadas realizadas na residência do cliente e em ambientes públicos reais, como ruas e praças. A família é capacitada a gerenciar a rotina e estabelecer uma comunicação clara no dia a dia.",
                    },
                    {
                      icon: "🏨",
                      title: "Descãoplicando 360 Board and Train",
                      subtitle:
                        "Treinamento hospedado / Imersão comportamental",
                      objective:
                        "Indicado para modificação comportamental profunda, reabilitação de fobias ou reatividades severas, ou para tutores que buscam alta performance de obediência em curto prazo.",
                      how: "O cão reside na nossa estrutura e passa por um cronograma diário de treinos e manejo focado nos objetivos específicos dele. Ao final, realizamos sessões obrigatórias de entrega técnica para capacitar o tutor a manter o manejo em casa.",
                      support:
                        "O programa inclui acompanhamento exclusivo de 30 dias via WhatsApp. Durante esse período, caso a equipe técnica avalie necessidade, o cão poderá retornar ao centro para sessões de reciclagem e reforço da estrutura trabalhada.",
                    },
                  ].map((program, index) => (
                    <article
                      key={index}
                      className="p-5 transition bg-white border shadow-sm group rounded-2xl border-slate-200 sm:p-6 hover:border-violet-300 hover:shadow-md"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row">
                        <div className="flex items-center justify-center w-12 h-12 text-2xl shrink-0 rounded-2xl bg-violet-50">
                          {program.icon}
                        </div>

                        <div className="w-full">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <span className="text-xs font-bold tracking-wide uppercase text-violet-600">
                                Programa {index + 1}
                              </span>

                              <h4 className="mt-1 text-lg font-bold leading-tight sm:text-xl text-slate-900">
                                {program.title}
                              </h4>

                              <p className="mt-1 text-sm font-medium text-slate-500">
                                {program.subtitle}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2">
                            <div className="p-4 rounded-xl bg-slate-50">
                              <p className="mb-1 text-sm font-bold text-slate-900">
                                Objetivo do programa
                              </p>

                              <p className="text-sm leading-relaxed text-slate-600">
                                {program.objective}
                              </p>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-50">
                              <p className="mb-1 text-sm font-bold text-slate-900">
                                Como funciona
                              </p>

                              <p className="text-sm leading-relaxed text-slate-600">
                                {program.how}
                              </p>
                            </div>
                          </div>

                          {program.support && (
                            <div className="p-4 mt-3 border rounded-xl border-emerald-100 bg-emerald-50">
                              <p className="mb-1 text-sm font-bold text-emerald-900">
                                Garantia e suporte pós-treino
                              </p>

                              <p className="text-sm leading-relaxed text-emerald-800">
                                {program.support}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>
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
        title: "Treinamento hospedado",
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
        title: "Escola para Cães / Day Training",
        subtitle:
          "Muito mais do que um espaço para o seu cão passar o dia, somos um centro de desenvolvimento e equilíbrio canino. ",
        description: (
          <div>
            <div className="w-full max-w-3xl mx-auto text-slate-700">
              {/* Header */}
              <div className="relative p-5 mb-6 overflow-hidden border rounded-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-white border-amber-100 sm:p-7">
                <div className="absolute w-32 h-32 rounded-full -top-10 -right-10 bg-amber-200/30 blur-2xl" />

                <div className="relative">
                  <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold border rounded-full bg-white/80 border-amber-200 sm:text-sm text-amber-700">
                    🐾 Escola para Cães / Day Training
                  </span>

                  <h2 className="text-2xl font-bold leading-tight sm:text-3xl text-slate-900">
                    Desenvolvimento, equilíbrio e rotina planejada para o seu
                    cão
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed sm:text-base text-slate-600">
                    Muito mais do que um espaço para o seu cão passar o dia,
                    somos um centro de desenvolvimento e equilíbrio canino. Não
                    acreditamos em cães soltos em pátios gerando ansiedade.
                    Nosso foco é o{" "}
                    <strong className="text-slate-900">Day Training</strong>:
                    uma rotina planejada que une socialização segura, estímulo
                    físico e descanso de alta qualidade.
                  </p>
                </div>
              </div>

              {/* Ciência */}
              <section className="mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 text-xl shrink-0 rounded-xl bg-indigo-50">
                    🧠
                  </div>

                  <div>
                    <h3 className="text-lg font-bold sm:text-xl text-slate-900">
                      A ciência por trás: estímulo e descanso restaurador
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed sm:text-base text-slate-600">
                      Para um cão se manter saudável, o gasto de energia deve
                      estar alinhado com o equilíbrio do sistema límbico.
                      Alternamos atividades estruturadas com momentos
                      obrigatórios de relaxamento.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="p-4 bg-white border shadow-sm rounded-2xl border-slate-200">
                    <p className="mb-1 text-sm font-bold text-slate-900">
                      Prevenção da vigilância
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Cães que não descansam acumulam altos níveis de cortisol,
                      conhecido como o hormônio do estresse.
                    </p>
                  </div>

                  <div className="p-4 bg-white border shadow-sm rounded-2xl border-slate-200">
                    <p className="mb-1 text-sm font-bold text-slate-900">
                      Sono REM protegido
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Utilizamos caixas de transporte individuais para garantir
                      o sono restaurador. O seu cão volta para casa calmo, e não
                      exausto.
                    </p>
                  </div>
                </div>
              </section>

              {/* Rotina */}
              <section className="mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 text-xl shrink-0 rounded-xl bg-orange-50">
                    ⚙️
                  </div>

                  <div>
                    <h3 className="text-lg font-bold sm:text-xl text-slate-900">
                      Como funciona a nossa rotina biológica
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed sm:text-base text-slate-600">
                      Cada etapa é pensada para trabalhar comportamento,
                      energia, foco, descanso e convivência com segurança.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      title: "Adaptação comportamental",
                      text: "Triagem detalhada para entender o perfil do cão e garantir a segurança do grupo.",
                    },
                    {
                      title: "Caminhada estruturada em matilha",
                      text: "Nosso pilar de enriquecimento ambiental. Respeita a natureza migratória da espécie através de longas caminhadas em sincronia e neutralidade social.",
                    },
                    {
                      title: "Esteira ergométrica",
                      text: "Condicionamento físico de alta performance em laboratório, focando na queima de energia controlada e estabilidade mental.",
                    },
                    {
                      title: "Socialização orientada",
                      text: "Convivência coletiva supervisionada para ensinar o cão a estar em grupo com calmaria, evitando picos de ansiedade.",
                    },
                    {
                      title: "Exercícios de manejo",
                      text: "Prática diária de permanência no Place Board e uso correto da caixa de transporte para a nossa dinâmica interna.",
                    },
                    {
                      title: "O momento da toca",
                      text: "Pausas obrigatórias em caixas individuais, respeitando o instinto de toca do cão, zerando o modo de vigilância e controlando o estresse.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-4 transition bg-white border shadow-sm group rounded-2xl border-slate-200 hover:border-amber-300 hover:shadow-md"
                    >
                      <div className="flex gap-3">
                        <div className="flex items-center justify-center w-6 h-6 mt-1 text-xs font-bold rounded-full shrink-0 bg-amber-100 text-amber-700">
                          {index + 1}
                        </div>

                        <div>
                          <h4 className="text-sm font-bold sm:text-base text-slate-900">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Matrícula */}
              <section className="p-5 text-white rounded-2xl bg-slate-900 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex items-center justify-center w-12 h-12 text-2xl shrink-0 rounded-2xl bg-white/10">
                    📅
                  </div>

                  <div>
                    <h3 className="text-lg font-bold sm:text-xl">
                      Formatos de matrícula
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed sm:text-base text-slate-300">
                      Planos mensais com frequências de{" "}
                      <strong className="text-white">
                        2x, 3x ou 4x por semana
                      </strong>
                      , adaptados à necessidade do seu cão.
                    </p>
                  </div>
                </div>
              </section>
            </div>
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
        title: "Hospedagem Comum (Hotel / Férias)",
        subtitle:
          "Vai viajar ou precisa se ausentar? Nossa Hospedagem foi desenhada para tutores que buscam total paz de espírito e a excelência no cuidado.",
        description: (
          <div>
            <div className="w-full max-w-3xl mx-auto text-slate-700">
              {/* Header */}
              <div className="relative p-5 mb-6 overflow-hidden border rounded-2xl bg-gradient-to-br from-sky-50 via-cyan-50 to-white border-sky-100 sm:p-7">
                <div className="absolute rounded-full -top-10 -right-10 w-36 h-36 bg-sky-200/30 blur-2xl" />
                <div className="absolute w-32 h-32 rounded-full -bottom-12 -left-12 bg-cyan-200/30 blur-2xl" />

                <div className="relative">
                  <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold border rounded-full bg-white/80 border-sky-200 sm:text-sm text-sky-700">
                    🏡 Hospedagem Comum / Hotel para Cães
                  </span>

                  <h2 className="text-2xl font-bold leading-tight sm:text-3xl text-slate-900">
                    Férias com rotina, cuidado profissional e tranquilidade para
                    o tutor
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed sm:text-base text-slate-600">
                    Vai viajar ou precisa se ausentar? Nossa hospedagem foi
                    desenhada para tutores que buscam paz de espírito e
                    excelência no cuidado. Aqui, o seu cão não fica apenas
                    hospedado; ele desfruta de uma rotina de férias integrada à
                    dinâmica da nossa Escola, com o manejo de um centro
                    comportamental profissional.
                  </p>
                </div>
              </div>

              {/* Diferencial */}
              <section className="mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 text-xl shrink-0 rounded-xl bg-indigo-50">
                    🧠
                  </div>

                  <div>
                    <h3 className="text-lg font-bold sm:text-xl text-slate-900">
                      O diferencial do nosso manejo profissional
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed sm:text-base text-slate-600">
                      Cães encontram segurança na previsibilidade. Mesmo sendo
                      uma estadia focada em lazer, o seu cão se beneficia
                      diretamente da nossa metodologia biológica.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    {
                      title: "Rotina estruturada",
                      text: "Horários rigorosos de alimentação, atividades e descanso para manter o cão estável e seguro.",
                    },
                    {
                      title: "Ambiente seguro",
                      text: "Monitoramento constante por profissionais preparados para ler a linguagem corporal canina.",
                    },
                    {
                      title: "Ferramentas corretas",
                      text: "Uso de guias unificadas e caixas de transporte adequadas para um manejo correto e sem estresse.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white border shadow-sm rounded-2xl border-slate-200"
                    >
                      <div className="flex items-center justify-center w-8 h-8 mb-3 text-xs font-bold rounded-full bg-sky-100 text-sky-700">
                        {index + 1}
                      </div>

                      <h4 className="text-sm font-bold sm:text-base text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Férias */}
              <section className="mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 text-xl shrink-0 rounded-xl bg-cyan-50">
                    ⚙️
                  </div>

                  <div>
                    <h3 className="text-lg font-bold sm:text-xl text-slate-900">
                      Como funcionam as férias do seu cão
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed sm:text-base text-slate-600">
                      Durante o dia, o seu cão é inserido em nosso cronograma de
                      atividades, respeitando rigorosamente os limites e a
                      segurança individual de cada indivíduo.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      title: "Caminhada estruturada em matilha",
                      text: "Atividade voltada para cães aptos ao manejo de rua, satisfazendo o instinto migratório natural através de longas caminhadas em grupo e neutralidade social.",
                    },
                    {
                      title: "Esteira ergométrica",
                      text: "Excelente alternativa para condicionamento físico e queima de energia controlada em nosso laboratório interno, ideal para trabalhar foco e estabilidade mental.",
                    },
                    {
                      title: "Socialização orientada",
                      text: "Convivência coletiva supervisionada dentro de nossa estrutura para ensinar o cão a interagir com calmaria e neutralidade social.",
                    },
                    {
                      title: "O momento da toca",
                      text: "Descansos diurnos e pernoite são feitos em caixas de transporte individuais, respeitando o instinto de toca, reduzindo vigilância, controlando o cortisol e favorecendo um sono restaurador.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-4 transition bg-white border shadow-sm group rounded-2xl border-slate-200 hover:border-sky-300 hover:shadow-md"
                    >
                      <div className="flex gap-3">
                        <div className="flex items-center justify-center w-6 h-6 mt-1 text-xs font-bold rounded-full shrink-0 bg-sky-100 text-sky-700">
                          {index + 1}
                        </div>

                        <div>
                          <h4 className="text-sm font-bold sm:text-base text-slate-900">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-sm leading-relaxed text-slate-600">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Nota de segurança */}
              <section className="p-5 border rounded-2xl border-amber-200 bg-amber-50 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="flex items-center justify-center w-12 h-12 text-2xl shrink-0 rounded-2xl bg-amber-100">
                    ⚠️
                  </div>

                  <div>
                    <h3 className="text-lg font-bold sm:text-xl text-slate-900">
                      Nota de manejo e segurança
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed sm:text-base text-slate-700">
                      Nosso serviço de hospedagem comum não engloba protocolos
                      de modificação comportamental ou treinamento do zero. Por
                      isso, as atividades externas, como a caminhada em matilha,
                      são validadas de acordo com o perfil de cada cão durante a
                      adaptação.
                    </p>

                    <p className="mt-3 text-sm leading-relaxed sm:text-base text-slate-700">
                      Caso o indivíduo não esteja apto para a dinâmica de rua,
                      sua rotina de estímulos e gasto de energia será realizada
                      de forma{" "}
                      <strong className="text-slate-900">
                        100% interna e segura em nosso laboratório.
                      </strong>
                    </p>
                  </div>
                </div>
              </section>
            </div>
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
            "Atividades físicas são importantíssimas assim como o descanso de qualidade. Entenda como funciona a noção de abrigo para seu cão e proporcione qualidade física nos momentos de atividades ativas e repouso em momentos de atividades passivas.",
        },
        card3: {
          stepNumber: 3,
          cardTitle: "Comunicação",
          cardDescription:
            "Entenda como funciona a comunicação da espécie canina, muito importante para estabelecer uma relação respeitosa e assertiva para as duas espécies que estão envolvidas nesse contexto, a nossa e a dos cães.",
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
