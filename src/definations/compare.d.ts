import { _ProductColor } from '@type/APIs/colors.res';
import { _ProductInventoryTransfomed } from '@type/APIs/inventory.res';
import { _ProductBySku } from '@type/APIs/productDetail.res';

interface _CompareProducts {
  details: _ProductBySku[] | null;
  colors: Array<_ProductColor[] | null> | null;
  inventory: (_ProductInventoryTransfomed | null)[] | null;
}
