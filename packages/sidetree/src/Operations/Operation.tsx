import React from 'react';

import { getAnchoredOperation } from '../core-utils';
import { CreateOperation } from './Create';
import { UpdateOperation } from './Update';
import { RecoverOperation } from './Recover';
import { DeactivateOperation } from './Deactivate';

export interface IOperationProps {
  operation: any;
  didMethodPrefix: string;
}

export const Operation = ({ didMethodPrefix, operation }: any) => {
  const anchoredOperation = getAnchoredOperation(operation);
  switch (anchoredOperation.type) {
    case 'create':
      return (
        <CreateOperation
          didMethodPrefix={didMethodPrefix}
          operation={anchoredOperation.operation}
        />
      );
    case 'update':
      return (
        <UpdateOperation
          didMethodPrefix={didMethodPrefix}
          operation={anchoredOperation.operation}
        />
      );
    case 'recover':
      return (
        <RecoverOperation
          didMethodPrefix={didMethodPrefix}
          operation={anchoredOperation.operation}
        />
      );
    case 'deactivate':
      return (
        <DeactivateOperation
          didMethodPrefix={didMethodPrefix}
          operation={anchoredOperation.operation}
        />
      );
    default: {
      throw new Error(
        'Unknown anchoredOperation type ' + anchoredOperation.type
      );
    }
  }
};
