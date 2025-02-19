import { useState } from "react";
import FeatureImgOnBgCardButton from "../cards/FeatureImgOnBgCardButton";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import links from "../../content/links";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import ServiceDetailCard from "../cards/ServiceDetailCard";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

const whatsappContactLink = `` + `${links.ctaWhatsapp}`;

export default function FeaturesButton() {
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalSubtitle, setModalSubtitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const onClick = (title, subtitle, content) => {
    setModalTitle(title);
    setModalSubtitle(subtitle);
    setModalContent(content);
    setVisible(true);
  };

  return (
    <div>
      <SectionArea
        paddingbot={false}
        id={"service"}
        // className="py-[40px] tablet1:py-[64px] desktop1:py-[96px] desktop1:pb-[0px] bg-quinary"
      >
        <MotionDivDownToUp className="flex justify-center w-full">
          <SectionHeader
            className="text-center"
            miniTitle={content.texts.features.miniTag}
            sectionHeaderTitle={content.texts.features.title}
            sectionHeaderSubtitle={content.texts.features.subtitle}
            color="dark"
          />
        </MotionDivDownToUp>
        <SectionWrapper>
          <div className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px]">
            <FeatureImgOnBgCardButton
              bgImg={content.texts.features.card1.img}
              title={content.texts.features.card1.title}
              description={content.texts.features.card1.subtitle}
              buttonLabel={content.texts.features.card1.buttonLabel}
              buttonColor=""
              bgPosition=""
              onClick={() =>
                onClick(
                  content.texts.features.card1.title,
                  <div>
                    <ServiceDetailCard
                      img={content.texts.features.card1.imgModal}
                      // subtitle={content.texts.features.card1.subtitle}
                      description={content.texts.features.card1.description}
                      buttonIcon={content.texts.features.card1.icon}
                      buttonLabel={
                        content.texts.features.card1.buttonLabelModal
                      }
                      buttonLink={whatsappContactLink}
                      bgPosition="bg-top"
                    />
                  </div>
                )
              }
            />
            <FeatureImgOnBgCardButton
              bgImg={content.texts.features.card2.img}
              title={content.texts.features.card2.title}
              description={content.texts.features.card2.subtitle}
              buttonLabel={content.texts.features.card2.buttonLabel}
              buttonColor="bg-black"
              onClick={() =>
                onClick(
                  content.texts.features.card2.title,
                  <div>
                    <ServiceDetailCard
                      img={content.texts.features.card2.imgModal}
                      // subtitle={content.texts.features.card2.subtitle}
                      description={content.texts.features.card2.description}
                      buttonIcon={content.texts.features.card2.icon}
                      buttonLabel={
                        content.texts.features.card2.buttonLabelModal
                      }
                      buttonLink={whatsappContactLink}
                    />
                  </div>
                )
              }
            />
            <FeatureImgOnBgCardButton
              bgImg={content.texts.features.card3.img}
              title={content.texts.features.card3.title}
              description={content.texts.features.card3.subtitle}
              buttonLabel={content.texts.features.card3.buttonLabel}
              buttonColor="bg-black"
              onClick={() =>
                onClick(
                  content.texts.features.card3.title,
                  <div>
                    <ServiceDetailCard
                      img={content.texts.features.card3.imgModal}
                      // subtitle={content.texts.features.card3.subtitle}
                      description={content.texts.features.card3.description}
                      buttonIcon={content.texts.features.card3.icon}
                      buttonLabel={
                        content.texts.features.card3.buttonLabelModal
                      }
                      buttonLink={whatsappContactLink}
                    />
                  </div>
                )
              }
            />
            <FeatureImgOnBgCardButton
              bgImg={content.texts.features.card4.img}
              title={content.texts.features.card4.title}
              description={content.texts.features.card4.subtitle}
              buttonLabel={content.texts.features.card4.buttonLabel}
              buttonColor="bg-black"
              onClick={() =>
                onClick(
                  content.texts.features.card4.title,
                  <div>
                    <ServiceDetailCard
                      img={content.texts.features.card4.imgModal}
                      // subtitle={content.texts.features.card4.subtitle}
                      description={content.texts.features.card4.description}
                      buttonIcon={content.texts.features.card4.icon}
                      buttonLabel={
                        content.texts.features.card4.buttonLabelModal
                      }
                      buttonLink={whatsappContactLink}
                    />
                  </div>
                )
              }
            />
          </div>
          <MotionDivDownToUp>
            <img
              src={content.texts.features.imgDivisor}
              className="p-[60px] tablet1:p-[84px] opacity-30"
              alt="Imagem de divisão em formato de onda"
            />
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>

      <Dialog
        className="font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "40000px": "425px", "450px": "90vw" }}
      >
        <h3>{modalSubtitle}</h3>
        <p className="m-0">{modalContent}</p>
      </Dialog>
    </div>
  );
}
