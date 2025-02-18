import blackImg1 from "../images/ifcem1.png";
import blackImg2 from "../images/ifcem1.png";
import redImg1 from "../images/ifcem2.png";
import redImg2 from "../images/ifcem2.png";
import purpleImg1 from "../images/ifcem3.png";
import purpleImg2 from "../images/ifcem3.png";

export function getData() {
    return [
        {title: "ПЦ ІІ/А-Ш-550Р-Н палетизований по 25 кг", price: 154.50, Image: blackImg1},
        {title: "ПЦ ІІ/А-Ш-550Р-Н палетизований по 50 кг", price: 298.00, Image: blackImg2},
        {title: "ПЦ II/А-В-500Р-Н палетизований по 25 кг", price: 131.62, Image: redImg1},
        {title: "ПЦ II/А-В-500Р-Н палетизований по 50 кг", price: 252.75, Image: redImg2},
        {title: "Цемент ПЦ II/Б-К(Ш-В-П)-400Р-Н палетизований по 25 кг", price: 123.00, Image: purpleImg1},
        {title: "Цемент ПЦ II/Б-К(Ш-В-П)-400Р-Н палетизований по 50 кг", price: 235.50, Image: purpleImg2},
    ];
}