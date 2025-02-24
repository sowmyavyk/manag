declare module "@env" {
    export const API_URL: string;
    export const FOOD_RATING_URL: string;
  }
  
  declare module "exceljs" {
    import ExcelJS from "exceljs";
    export default ExcelJS;
  }
  