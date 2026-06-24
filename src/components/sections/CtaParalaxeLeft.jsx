import links from "../../content/links";
import content from "../../content/content";
import SectionContent from "../sectionElements/SectionContent";
import MotionDivUpToDown from "../animation/MotionDivUpToDown";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Button from "../interactives/Button";

const whatsappContactLink = `` + `${links.ctaWhatsapp}`;

export default function CtaParalaxeLeft() {
  return (
    <div
      className="bg-left bg-cover desktop1:bg-fixed desktop1:bg-left"
      style={{
        backgroundImage: `url(${content.texts.cta.backgroundImg})`,
      }}
      id="contact"
    >
      <div className="flex justify-center w-full bg-opacity-10 bg-primary">
        <div className="flex justify-center w-full bg-black bg-opacity-30">
          <SectionContent>
            <div className="flex justify-center w-full  font-mainFont py-[40px] tablet1:py-[64px] desktop1:py-[96px]">
              <div className="w-full max-w-[1215px] flex flex-row items-end justify-center desktop2:justify-start">
                <div className=" flex flex-col w-full desktop1:w-[90%] justify-evenly items-center desktop1:items-start gap-[32px]">
                  <h1 className="w-full leading-[58px] text-secondary desktop1:w-[60%] text-center desktop1:text-left text-title4 font-poppins desktop1:text-title5 desktop2:text-title6 flex justify-center">
                    <MotionDivUpToDown className="w-[90%] desktop1:w-full [text-shadow:_2px_3px_0_rgb(0_0_0_/_50%)]">
                      {content.texts.cta.title}
                    </MotionDivUpToDown>
                  </h1>
                  <MotionDivDownToUp className="flex justify-center">
                    <div className="w-[80%] phone2:w-full tablet1:w-full">
                      <Button
                        label={content.texts.cta.ctaButtonText}
                        buttonLink={whatsappContactLink}
                        className="invert"
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
                  </MotionDivDownToUp>
                </div>
                <div className="hidden phone1:min-h-[197px] phone1:max-h-[229.39px] phone2:min-h-[229.40px] phone2:max-h-[261px] phone3:min-h-[262px] phone3:max-h-[334px] tablet1:min-h-[235px] tablet1:max-h-[292px] tablet2:min-h-[292px] tablet2:max-h-[335px] desktop1:min-h-[335px] desktop3:max-h-[335px] w-[90%] max-w-40 phone1:w-[100%] phone1:max-w-none phone3:max-w-60 tablet1:w-[45%]"></div>
              </div>
            </div>
          </SectionContent>
        </div>
      </div>
    </div>
  );
}
