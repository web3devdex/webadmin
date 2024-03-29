import image from "./image"
import date from "./date"
import category from "./category"
import product from "./product"
import promotionType from "./promotionType"
import promotion from "./promotion"
import postIntro from "./postIntro"
import format from "./format"

export default {
  ...image,
  ...category,
  ...product,
  ...date,
  ...promotionType,
  ...promotion,
  ...postIntro,
  ...format
}