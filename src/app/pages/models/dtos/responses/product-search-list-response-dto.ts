import { BaseSearchListResponseDto } from './base-search-list-response-dto';
import { ProductSearchResponseDto } from './product-search-response-dto';

/**
 * 
 */
export interface ProductSearchListResponseDto extends BaseSearchListResponseDto {
    //プロダクトサーチリストDTOを配列で保持
    productSearchResponseDtos: ProductSearchResponseDto[];
  }