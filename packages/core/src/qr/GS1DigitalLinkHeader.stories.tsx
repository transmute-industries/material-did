import React from 'react';
import Button from '@material-ui/core/Button';
import { GS1DigitalLinkHeader } from '..';

export default {
  title: 'QR/GS1 Digital Link',
  component: GS1DigitalLinkHeader,
};

const logo = 'https://www.transmute.industries/Transmute-Google.png';

const digiLink =
  'https://id.gs1.org/gdti/00000000000001?240=https://edv.did.ai/edvs/439cb8b5-d57b-450d-806a-02363f9c0e1d/documents/z1A3GMS2NM5PvRtoQzcx1DXZx&423=Canada&8008=2020/01/16&document_type=certified_mill_test_report&vc_id=did:elem:EiCNtMb2FtfdLqAuPhClUZdwLFB97rVGf9rax0FgBfUJHQ';

export const Header = (props?: Partial<any>) => {
  return (
    <div>
      <GS1DigitalLinkHeader digiLink={digiLink} logo={logo} />
    </div>
  );
};
