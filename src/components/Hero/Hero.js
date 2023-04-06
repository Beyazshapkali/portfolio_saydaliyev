import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome to <br />
      Saydaliyev's Personal Portfolio
    </SectionTitle>
    <SectionText>
      The purpose of this website is to show my projects
     </SectionText>
    <Button onclick={() => window.location = 'https://google.com'}>Learn More</Button>
   </LeftSection>
 </Section>
);

export default Hero;