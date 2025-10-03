import Image from "next/image";
import qr_code from "../../../../public/svgs/qr_code.svg";
import ic_google_playstore from "../../../../public/svgs/ic_google_playstore.svg";
import ic_baseline_apple from "../../../../public/svgs/ic_baseline_apple.svg";
import ic_chevron_down from "../../../../public/svgs/ic_chevron_down.svg";
import ic_copyright from "../../../../public/svgs/ic_copyright.svg";

const linksArr = [
  {
    title: "Company",
    links: ["About OptimAIze", "Careers", "Press"],
  },
  {
    title: "Legal",
    links: ["Terms of Use", "Privacy Policy", "Security"],
  },
  {
    title: "Support",
    links: ["Contact Us", "FAQ", "Documentation"],
  },
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  QRContainer,
  QRImageCtn,
  TextCtn,
  IconCtn,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  Translator,
  CopyRight,
} from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        {/* Footer Logo Row */}
        <FooterLogo
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer hexagon */}
            <polygon
              points="20,2 36,10 36,30 20,38 4,30 4,10"
              stroke="#2B892E"
              strokeWidth="3"
              fill="none"
            />
            {/* Inner circle for "O" effect */}
            <circle cx="20" cy="20" r="8" fill="#2B892E" />
          </svg>

          <span
            style={{
              fontWeight: 700,
              fontSize: "1.5rem",
              color: "#FFFFFF",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            OptimAIze
          </span>
        </FooterLogo>

        <FooterMainContent>
          <FooterMiddle>
            <QRContainer>
              <QRImageCtn>
                <Image src={qr_code} alt="qr_code" />
              </QRImageCtn>
              <TextCtn>
                <p>
                  Scan to download the OptimAIze App on Playstore and Appstore.
                </p>
                <IconCtn>
                  <Image src={ic_google_playstore} alt="playstore icon" />
                  <Image src={ic_baseline_apple} alt="apple icon" />
                </IconCtn>
              </TextCtn>
            </QRContainer>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => (
                      <li key={i}>{link}</li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <Translator>
              <h3>English (United Kingdom)</h3>
              <Image src={ic_chevron_down} alt="chevron down" />
            </Translator>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              OptimAIze Corp, LLC.
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
