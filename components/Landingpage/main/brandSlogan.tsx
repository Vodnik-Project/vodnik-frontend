import { FunctionComponent } from "react";

import style from "./main.module.css";

interface BrandSloganProps {}

const BrandSlogan: FunctionComponent<BrandSloganProps> = () => {
  return (
    <div className={style.brandSloganContainer}>
      <h1 className={`${style.brandSloganText} ${style.work}`}>Work Together</h1>
      <h1 className={`${style.brandSloganText} ${style.talk}`}>Talk Together</h1>
      <h1 className={`${style.brandSloganText} ${style.enjoy}`}>Enjoy Together</h1>
    </div>
  );
};

export default BrandSlogan;
