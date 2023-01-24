import img1 from '../material-grafico/aceites.jpg'
import img2 from '../material-grafico/especias.jpg'
import img3 from '../material-grafico/hierbas.jpg'
import img4 from '../material-grafico/resina.jpg'
import img5 from '../material-grafico/sahumo.jpg'
import img6 from '../material-grafico/velas.jpg'
import img7 from '../material-grafico/cristales-gemas.jpg'
import img8 from '../material-grafico/incienso.jpg'
import img9 from '../material-grafico/libros.jpg'
import img10 from '../material-grafico/cartas.jpg'


const arreglo =[
    {
        id:1,
        titulo: "aceites",
        precio: 500,
        categoria: "cocina",
        descripcion: "Una mezcla especial de aromas herbales profundos e impactantes que ayuda a alcanzar el descanso absoluto durante el sueño. Así mismo, colabora en la mejora de estados gripales, dolores de cabeza o simplemente para activarte en la mañana.",
        img: img1,
        stock: 8,
    },
    {
        id:2,
        titulo: "especias",
        precio: 350,
        categoria: "cocina",
        descripcion: "Las especias son sustancias de origen vegetal muy apreciadas en la cocina por su gran capacidad de aromatizar, dar color o resaltar el sabor de los ingredientes. Las especias son vegetales principalmente secos, que contienen sustancias aromáticas y aceites que condimentan y mejoran el sabor de los alimentos.",
        img: img2,
        stock: 50,
    },
    {
        id:3,
        titulo: "hierbas",
        precio: 250,
        categoria: "cocina",
        descripcion: "Las hierbas aromáticas son plantas muy utilizadas en la cocina mediterránea por sus cualidades aromáticas y condimentarias. Son cultivadas en huertos de diferente extensión.",
        img: img3,
        stock: 40,
    },
    {
        id:4,
        titulo: "resina",
        precio: 380,
        categoria: 'holistica',
        descripcion: "Sustancia espesa que viene de las plantas o que se puede producir en el laboratorio a partir de ciertos productos químicos. Las resinas no se disuelven en agua; se usan en la fabricación de plásticos, barnices, tintas de impresión y medicamentos, y para endurecer las telas.",
        img: img4,
        stock: 8,
    
    },
    {
        id:5,
        titulo:"sahumo",
        precio:2900,
        categoria:'holistica',
        descripcion:"El Sahumo es un antiguo ritual que, por medio de la quema de plantas medicinales, trabaja sobre la limpieza, curación, protección y alineación del espíritu. Tanto el aroma como las propiedades medicinales de las hierbas realizan una acción terapéutica sobre el espacio y seres que allí se encuentren.",
        img: img5,
        stock: 15,
    },
    {
        id:6,
        titulo:"velas",
        precio:400,
        categoria:'holistica',
        descripcion:"Las velas aromáticas además de ser decorativas para nuestros hogares nos permiten crear momentos especiales y brindar iluminación. Existen infinidad de tamaños, colores y aromas. Son incluso una buena opción de regalo para nuestros seres queridos.",
        img: img6,
        stock: 20,
    },
    {
        id:7,
        titulo:"cristales y gemas",
        precio:5900,
        categoria:'holistica',
        descripcion:"El significado espiritual de una piedra preciosa son los beneficios emocionales y físicos que puede traer a tu vida.",
        img: img7,
        stock: 35,
    },
    {
        id:8,
        titulo:"incienso",
        precio:2000,
        categoria:'holistica',
        descripcion:"Los inciensos son preparaciones creadas a partir de resinas vegetales y aceites esenciales, y que al arder con el fuego desprenden un humo balsámico que se utiliza con propósitos terapéuticos o relajantes en la aromaterapia, y como aromatizantes en la casa.",
        img: img8,
        stock: 40,
    },
    {
        id:9,
        titulo:"libro",
        precio:1300,
        categoria:'holistica',
        descripcion:"La forma del libro es, sobre todo, una forma simbólica en el sentido que expresa, implícitamente, un conjunto de valores y representaciones del mundo.",
        img: img9,
        stock: 30,
    },
    {
        id:10,
        titulo:"cartas",
        precio:3850,
        categoria:'holistica',
        descripcion:"El tarot holístico es una lectura para sanar basada en el autoconocimiento. Un acompañamiento para reinterpretar la situación que te preocupa y avanzar en tus procesos de forma más fluida.",
        img: img10,
        stock: 10,
    },
];

export const getProducts = () => {
    let error = false;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!error) {
          resolve(arreglo);
        } else {
          reject('Hubo un error intente mas tarde');
        }
      }, 2000);
    });
  };
  
  export const getProductsByCategory = (category) => {
    return new Promise((res) => {
        const productos = arreglo.filter(product => product.categoria === category);
        setTimeout(() => {
            res(productos);
        }, 2000);
    });
  }
  
  
  export const getProduct = (id) => {
    return new Promise((resolve) => {
        const productoFiltrado  = arreglo.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(productoFiltrado )
        }, 1000)
    })
  }
  