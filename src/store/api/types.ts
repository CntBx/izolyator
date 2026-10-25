// Короткий объект для карточки в каталоге
export interface ProductShort {
  id: number;
  code: number;
  title: string;
  voltageClass: string;
  amperage: string;
}

// Полный объект для страницы детализации
export interface ProductDetailResponse {
  id: number;
  code: number;
  title: string;
  namecode: string;
  blueprintPrototype: string;
  hasBlueprintSketch: boolean;
  MIM: boolean;
  productType: string;
  contaminationDegree: string;
  installationAngle: string;
  voltageClass: string;
  amperage: string;
  environmentType: string;
  connectionType: string;
  [key: string]: any; // На случай если прилетят другие ключи из базы
}