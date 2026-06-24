import { useState } from "react";
import links from "../../content/links";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import content from "../../content/content";
import Button from "../interactives/Button";
import imgAppStore from "../../assets/imgs/hero/appStore.png";
import imgGooglePlay from "../../assets/imgs/hero/googlePlay.png";
// import imgLaw from "../../assets/imgs/hero/lawHero.jpg";
import imgPoints from "../../assets/imgs/about/points.png";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const whatsappContactLink = `` + `${links.ctaWhatsapp}`;

export default function HeroBgImg() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  return (
    <div
      className="w-full bg-center bg-no-repeat bg-cover desktop1:bg-right-top font-mainFont"
      style={{
        // backgroundImage: `url(${content.texts.hero.images.background})`,
        backgroundImage: `url(${
          window.innerWidth < 1023
            ? content.texts.hero.images.backgroundMobile
            : content.texts.hero.images.backgroundPC
        })`,
      }}
      id="home"
    >
      <div className="relative z-10 flex w-full bg-black bg-opacity-50 desktop2:bg-opacity-50 items-left">
        <div className="w-full text-secondary justify-evenly">
          <div className="h-[125px] desktop3:h-[140px]" />
          <div className="flex flex-col mx-auto w-[90%] max-w-[1215px] items-center desktop1:items-start pt-[46px] pb-[50px] desktop1:pt-[120px] desktop1:pb-[120px]">
            <div className=" flex flex-col w-full desktop1:w-[45%] desktop1:mr-[20px] mt-[200px] tablet1:mt-[400px] desktop1:mt-0">
              <div className="hidden w-auto text-center desktop1:flex desktop1:text-left font-secondFont phone1:text-paragraph4 ">
                <p className="mb-[16px] bg-black bg-opacity-30 text-lighter rounded-2xl px-[16px] py-[6px] inline-block text-paragraph2">
                  {content.texts.hero.miniTag}
                </p>
              </div>
              <div className="text-lighter flex justify-center tablet1:justify-center desktop1:justify-start font-bold leading-[42px] phone3:leading-[45px] tablet1:leading-[65px] desktop1:leading-[65px] text-center text-title4 phone2:text-title5 phone3:text-title5 tablet1:text-title7">
                <h1 className="[text-shadow:_2px_3px_0_rgb(0_0_0_/_50%)] desktop1:text-left">
                  {content.texts.hero.title}
                </h1>
              </div>
              <div className="flex justify-center text-center desktop1:justify-start phone1:w-full font-secondFont text-paragraph4 phone3:text-paragraph5">
                <p className="text-lighter mb-[32px] opacity-100 [text-shadow:_2px_2px_2px_rgb(0_0_0_/_50%)] desktop1:text-left">
                  {content.texts.hero.subtitle}
                </p>
              </div>
              <div className="w-full phone2:w-full tablet2:w-auto">
                <div className="flex justify-center w-full desktop1:justify-start">
                  <Button
                    aria-label={content.texts.hero.ctaButtonAriaLabel}
                    label={content.texts.hero.ctaButtonText}
                    buttonLink={whatsappContactLink}
                    className="w-[100%]"
                    icon={
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
                        class="lucide lucide-circle-arrow-right-icon lucide-circle-arrow-right"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m12 16 4-4-4-4" />
                        <path d="M8 12h8" />
                      </svg>
                    }
                  />
                </div>
                {/* <MotionDivDownToUp className="mt-[40px] w-full ">
                  <a href="#" className="flex justify-center" onClick={onClick}>
                    <p className="text-center text-white underline transition hover:scale-125 [text-shadow:_2px_2px_10px_rgb(0_0_0_/_100%)]">
                      {content.texts.hero.secondaryCta}
                    </p>
                  </a>
                </MotionDivDownToUp> */}
              </div>
              <div className="flex justify-center desktop1:justify-start mt-[32px]">
                <div className="flex items-center">
                  {content.texts.hero.obsHero.icon}
                  <p className="text-white opacity-80 ml-[10px] text-center [text-shadow:_2px_2px_2px_rgb(0_0_0_/_50%)]">
                    {content.texts.hero.obsHero.text}
                  </p>
                </div>
              </div>
              {/* <div className="">
                <MotionDivDownToUp>
                  <p className="mb-[20px]">Baixe nosso app:</p>
                  <div className="">
                    {" "}
                    <div className="flex items-start gap-[20px]">
                      <a
                        href="#"
                        target="_blank"
                        className="transition hover:scale-110"
                      >
                        <img
                          src={imgAppStore}
                          alt="Botão para a App Store"
                          className=""
                        />
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="transition hover:scale-110"
                      >
                        <img
                          src={imgGooglePlay}
                          alt="Botão para a Google Play"
                          className=""
                        />
                      </a>
                    </div>
                  </div>
                </MotionDivDownToUp>
              </div> */}
            </div>
            {/* <div className="hidden">
              <MotionDivDownToUp className="relative flex justify-end">
                <img
                  src={imgLaw}
                  alt="Foto de itens do direito"
                  className="bg-red-500 "
                />
                <img
                  src={imgLaw}
                  alt="Foto de itens que representam a profissão de advogado"
                  className="w-[80%] rounded-3xl"
                ></img>
                <img
                  src={imgPoints}
                  alt="Imagem de efeito pontilhado"
                  className="absolute opacity-75 phone1:right-[-10px] phone1:top-[20px] desktop1:right-[-40px] desktop1:top-[40px]"
                ></img>
              </MotionDivDownToUp>
            </div> */}
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-50 desktop2:bg-opacity-50">
        <div class="custom-shape-divider-bottom-1722451194 ">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <Dialog
        className="font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "35vw", "1024px": "60vw", "641px": "90vw" }}
      >
        <p className="m-0 ">{modalContent}</p>
      </Dialog>
    </div>
  );
}
