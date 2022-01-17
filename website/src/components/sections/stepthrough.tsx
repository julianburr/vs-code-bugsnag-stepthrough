import { ExtensionPreview } from "../extension-preview";
import { Inner } from "../inner";
import { ExtensionMock } from "../mock/extension/stepthrough";
import { Section } from "../section";
import { SectionContent } from "../section-content";
import { SectionImage } from "../section-image";

export function StepthroughSection() {
  return (
    <Section id="stepthrough" reverse>
      <Inner>
        <SectionContent>
          <h2>Simple stepthrough functionality</h2>
          <p>
            Easily go through all your open issues one by, directly in your IDE,
            and see all the info that might help you fix the issue. If you use
            sourcemaps, the extension will automatically open the relevant files
            as to go through the errors 🚀
          </p>
        </SectionContent>
        <SectionImage>
          <ExtensionPreview content={<ExtensionMock />} height="50rem" />
        </SectionImage>
      </Inner>
    </Section>
  );
}
