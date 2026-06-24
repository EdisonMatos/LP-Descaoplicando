import Button from "../interactives/Button";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import links from "../../content/links";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import content from "../../content/content";

const whatsappContactLink = `` + `${links.ctaWhatsapp}`;

export default function CtaMinimal() {
  return (
    <div>
      <MotionDivDownToUp>
        <SectionArea className="" paddingbot={false}>
          <SectionWrapper>
            <SectionHeader
              className="text-center"
              miniTitle={content.texts.cta.miniTag}
              sectionHeaderTitle={content.texts.cta.title}
              sectionHeaderSubtitle={content.texts.cta.subtitle}
              color="dark"
            />
            <Button
              aria-label={content.texts.hero.ctaButtonAriaLabel}
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
          </SectionWrapper>
        </SectionArea>
      </MotionDivDownToUp>
      <div class="custom-shape-divider-bottom-var-escura mt-[64px] desktop1:mt-[70px]">
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
  );
}
