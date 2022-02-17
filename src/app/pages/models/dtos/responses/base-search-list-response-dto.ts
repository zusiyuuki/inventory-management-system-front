//一覧結果のパラメータ設定
export interface BaseSearchListResponseDto {
  
  //検索結果が何ページ面か
  pageIndex: number;

  //検索結果の件数
  resultsLength: number;
}

