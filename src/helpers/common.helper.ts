import { _ProductColor } from '@type/APIs/colors.res';
import { _ProductDiscountTable } from '@type/APIs/discountTable.res';
import { _ProductInventoryTransfomed } from '@type/APIs/inventory.res';
import { _ProductDetails, _ProductSEO } from '@type/APIs/productDetail.res';
import { _SizeChartTransformed } from '@type/APIs/sizeChart.res';
import { _showConsoles, __fileNames } from 'show.config';
import { _conditionalLog } from 'show.type';

export function removeDuplicates(arr: any[]) {
  return arr.filter(
    (arr, index, self) =>
      index === self.findIndex((t) => t.seName === arr.seName),
  );
}

export const highLightResponse = ({
  dataToShow,
  component,
}: {
  dataToShow: any;
  component: string;
}) => {
  console.log(
    `Console.log: Response ===========================================================================================================================================( ${component} `,
    `)================================================================================================================================================Data>`,
    dataToShow,
    `<Data=============================================================================================================================================================================================END>`,
  );
};

export const highLightError = ({
  error,
  component,
}: {
  error: any;
  component: string;
}) => {
  console.log(
    `Console.log: ERROR ========================================================================================================================================Error( ${component} )`,
    `================================================================================================================================================Data>`,
    error,
    `<Data===============================================================================================================================================================================================END`,
  );
};
