import React, { FC, HTMLAttributes } from 'react';
import Grid from '@material-ui/core/Grid';
import { OperationAccordion } from './OperationAccordion';
import { LongFormPreview } from '../../LongFormPreview';
import { LinkedDataIdentifier } from '../../../Common/LinkedDataIdentifier';
import { JSONEditor } from '../../../Common/JSONEditor';

import { OperationPreviewHeader } from '../OperationPreviewHeader';
import {
  suffixDataToLongFormDID,
  fullyDecodedCreateOperation,
} from '../../core-utils';

export interface ICreateOperationProps extends HTMLAttributes<HTMLDivElement> {
  operation: any;
}

export const CreateOperation: FC<ICreateOperationProps> = ({ operation }) => {
  const longFormDid = suffixDataToLongFormDID(operation.suffix_data);
  const decodedCreateOperation = fullyDecodedCreateOperation(operation);
  return (
    <div>
      <OperationAccordion
        open={false}
        summary={
          <OperationPreviewHeader
            operation={operation}
            controller={
              <LinkedDataIdentifier value={longFormDid.split('?')[0]} />
            }
          />
        }
        details={
          <React.Fragment>
            <Grid container>
              <Grid item xs={12}>
                <LongFormPreview value={longFormDid} />
              </Grid>
              <Grid item xs={12}>
                <JSONEditor
                  value={JSON.stringify(decodedCreateOperation, null, 2)}
                />
              </Grid>
            </Grid>
          </React.Fragment>
        }
      />
    </div>
  );
};
