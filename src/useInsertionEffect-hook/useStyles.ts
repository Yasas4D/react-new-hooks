import { useInsertionEffect, useMemo } from "react";
//@ts-ignore
import styleToCss from "style-object-to-css-string";

export const useStyles = (stylesObject: any, props = {}) => {
  const [styles, styleRules] = useMemo(() => {
    const styles: any = {};
    const styleRules = [];

    for (const [styleProperty, styleValue] of Object.entries(
      stylesObject(props)
    )) {
      styles[styleProperty] = `${styleProperty}`;
      const rule = `.${styleProperty} {${styleToCss(styleValue)}}`;
      styleRules.push(rule);
    }

    return [styles, styleRules];
  }, [stylesObject, props]);
  console.log(styles);

  useInsertionEffect(() => {
    const stylesheet: any = document.createElement("style");
    document.head.appendChild(stylesheet);

    for (const rule of styleRules) {
      stylesheet.sheet.insertRule(rule);
    }

    return () => {
      document.head.removeChild(stylesheet);
    };
  }, [styles]);
  return styles;
};
