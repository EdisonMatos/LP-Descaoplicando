import links from "../../content/links";
import content from "../../content/content";
import SectionContent from "../sectionElements/SectionContent";
import MotionDivUpToDown from "../animation/MotionDivUpToDown";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Button from "../interactives/Button";

const whatsappContactLink = `` + `${links.ctaWhatsapp}`;

export default function CtaParalaxeCenter() {
  return (
    <div
      className="bg-scroll bg-center bg-cover desktop1:bg-fixed"
      style={{
        backgroundImage: `url(${content.texts.cta.backgroundImg})`,
        backgroundRepeat: "no-repeat",
      }}
      id="contact"
    >
      <div className="flex justify-center w-full bg-opacity-10 bg-primary">
        <div className="flex justify-center w-full bg-black bg-opacity-30">
          <SectionContent>
            <div className="flex justify-center w-full  font-mainFont py-[40px] tablet1:py-[64px] desktop1:py-[96px]">
              <div className="w-full max-w-[1110px] flex flex-row items-end justify-between">
                <div className=" flex flex-col w-full justify-evenly items-center gap-[32px]">
                  <h1 className="w-full text-center text-secondary text-title4 font-poppins desktop1:text-title5 desktop2:text-title6 [text-shadow:_2px_3px_0_rgb(0_0_0_/_50%)]">
                    <MotionDivUpToDown>
                      {content.texts.cta.title}
                    </MotionDivUpToDown>
                  </h1>
                  <MotionDivDownToUp>
                    <div className="w-full">
                      <Button
                        className="invert"
                        label={content.texts.cta.ctaButtonText}
                        buttonLink={whatsappContactLink}
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
              </div>
            </div>
          </SectionContent>
        </div>
      </div>
    </div>
  );
}
