import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    menu: [
      {
        menutitle: "lunch dishes",
        menucontent: [
          {
            title: "Chappati",
            description: "Frischer Vollkorn-Teigfladen vom Tandoor",
            price: 2.00,
            count: 0
          },
          {
            title: "Raita Gurken",
            description: "Joghurt mit frischen Gurken",
            price: 3.00,
            count: 0
          },
          {
            title: "Lassan Nan",
            description: "Hefeteigbrot mit frischem Knoblauch",
            price: 3.00,
            count: 0
          },
          {
            title: "Nan",
            description: "Hefeteigbrot",
            price: 2.50,
            count: 0
          },
          {
            title: "Lamm Jalfrezi (mittelscharf)",
            description: "Lammfleisch mit Zwiebeln, Paprika, Ingwer",
            price: 9.50,
            count: 0
          },
          {
            title: "Ente Sabji",
            description: "Entenbrustfilet mit frischem Gemüse in Kokosnussmilch und verschiedenen feinen Gewürzen",
            price: 10.50,
            count: 0
          },
          {
            title: "Sabji Nilgiri",
            description: "frisches Gemüse mit frischer Minze und Spinat in Kokosnuss-Milch-Sauce",
            price: 7.50,
            count: 0
          }
        ]
      },
      {
        menutitle: "Warme vorspeisen",
        menucontent: [
          {
            title: "Gemüse Pakoras",
            description: "frisches Gemüse in Kichererbsenmehl gebacken",
            price: 5.50,
            count: 0
          },
          {
            title: "Paneer Pakoras",
            description: "Käse in Kichererbsenmehl gebacken",
            price: 6.50,
            count: 0
          },
          {
            title: "Lassan Nan",
            description: "Hefeteigbrot mit frischem Knoblauch",
            price: 3.00,
            count: 0
          },
          {
            title: "Nan",
            description: "Hefeteigbrot",
            price: 2.50,
            count: 0
          },
          {
            title: "Lamm Jalfrezi (mittelscharf)",
            description: "Lammfleisch mit Zwiebeln, Paprika, Ingwer",
            price: 9.50,
            count: 0
          },
          {
            title: "Gemischte Vorspeisen (für 2 Personen)",
            description: "mit Onions, Bhajia, Chicken, Pakoras, Vegetable Pakoras und Paneer Pakoras",
            price: 13.50,
            count: 0
          },
          {
            title: "Papadam (2 Stück)",
            description: "hauchdünne, gewürzte Linsenfladen",
            price: 3.60,
            count: 0
          }
        ]
      },
      {
        menutitle: "Suppen",
        menucontent: [
          {
            title: "Dal Suppe",
            description: "Linsensuppe",
            price: 3.90,
            count: 0
          },
          {
            title: "Raita Gurken",
            description: "Joghurt mit frischen Gurken",
            price: 3.00,
            count: 0
          },
          {
            title: "Lassan Nan",
            description: "Hefeteigbrot mit frischem Knoblauch",
            price: 3.00,
            count: 0
          },
          {
            title: "Nan",
            description: "Hefeteigbrot",
            price: 2.50,
            count: 0
          },
          {
            title: "Malkatani Suppe",
            description: "mit Linsen, Reis und Hühnerfleisch",
            price: 4.80,
            count: 0
          }
        ]
      },
      {
        menutitle: "Salate",
        menucontent: [
          {
            title: "Chappati",
            description: "Frischer Vollkorn-Teigfladen vom Tandoor",
            price: 2.00,
            count: 0
          },
          {
            title: "Raita Gurken",
            description: "Joghurt mit frischen Gurken",
            price: 3.00,
            count: 0
          },
          {
            title: "Lassan Nan",
            description: "Hefeteigbrot mit frischem Knoblauch",
            price: 3.00,
            count: 0
          },
          {
            title: "Nan",
            description: "Hefeteigbrot",
            price: 2.50,
            count: 0
          },
          {
            title: "Lamm Jalfrezi (mittelscharf)",
            description: "Lammfleisch mit Zwiebeln, Paprika, Ingwer",
            price: 9.50,
            count: 0
          },
          {
            title: "Ente Sabji",
            description: "Entenbrustfilet mit frischem Gemüse in Kokosnussmilch und verschiedenen feinen Gewürzen",
            price: 10.50,
            count: 0
          },
          {
            title: "Sabji Nilgiri",
            description: "frisches Gemüse mit frischer Minze und Spinat in Kokosnuss-Milch-Sauce",
            price: 7.50,
            count: 0
          }
        ]
      },
      {
        menutitle: "Beilagen",
        menucontent: [
          {
            title: "Chappati",
            description: "Frischer Vollkorn-Teigfladen vom Tandoor",
            price: 2.00,
            count: 0
          },
          {
            title: "Raita Gurken",
            description: "Joghurt mit frischen Gurken",
            price: 3.00,
            count: 0
          },
          {
            title: "Lassan Nan",
            description: "Hefeteigbrot mit frischem Knoblauch",
            price: 3.00,
            count: 0
          },
          {
            title: "Nan",
            description: "Hefeteigbrot",
            price: 2.50,
            count: 0
          },
          {
            title: "Lamm Jalfrezi (mittelscharf)",
            description: "Lammfleisch mit Zwiebeln, Paprika, Ingwer",
            price: 9.50,
            count: 0
          },
          {
            title: "Ente Sabji",
            description: "Entenbrustfilet mit frischem Gemüse in Kokosnussmilch und verschiedenen feinen Gewürzen",
            price: 10.50,
            count: 0
          },
          {
            title: "Sabji Nilgiri",
            description: "frisches Gemüse mit frischer Minze und Spinat in Kokosnuss-Milch-Sauce",
            price: 7.50,
            count: 0
          }
        ]
      },
      {
        menutitle: "Spezialitäten aus dem tandoor",
        menucontent: [
          {
            title: "Chappati",
            description: "Frischer Vollkorn-Teigfladen vom Tandoor",
            price: 2.00,
            count: 0
          },
          {
            title: "Raita Gurken",
            description: "Joghurt mit frischen Gurken",
            price: 3.00,
            count: 0
          },
          {
            title: "Lassan Nan",
            description: "Hefeteigbrot mit frischem Knoblauch",
            price: 3.00,
            count: 0
          },
          {
            title: "Nan",
            description: "Hefeteigbrot",
            price: 2.50,
            count: 0
          },
          {
            title: "Lamm Jalfrezi (mittelscharf)",
            description: "Lammfleisch mit Zwiebeln, Paprika, Ingwer",
            price: 9.50,
            count: 0
          },
          {
            title: "Ente Sabji",
            description: "Entenbrustfilet mit frischem Gemüse in Kokosnussmilch und verschiedenen feinen Gewürzen",
            price: 10.50,
            count: 0
          },
          {
            title: "Sabji Nilgiri",
            description: "frisches Gemüse mit frischer Minze und Spinat in Kokosnuss-Milch-Sauce",
            price: 7.50,
            count: 0
          }
        ]
      },
      {
        menutitle: "Vegetarische-spezialitäten",
        menucontent: [
          {
            title: "Chappati",
            description: "Frischer Vollkorn-Teigfladen vom Tandoor",
            price: 2.00,
            count: 0
          },
          {
            title: "Raita Gurken",
            description: "Joghurt mit frischen Gurken",
            price: 3.00,
            count: 0
          },
          {
            title: "Lassan Nan",
            description: "Hefeteigbrot mit frischem Knoblauch",
            price: 3.00,
            count: 0
          },
          {
            title: "Nan",
            description: "Hefeteigbrot",
            price: 2.50,
            count: 0
          },
          {
            title: "Lamm Jalfrezi (mittelscharf)",
            description: "Lammfleisch mit Zwiebeln, Paprika, Ingwer",
            price: 9.50,
            count: 0
          },
          {
            title: "Ente Sabji",
            description: "Entenbrustfilet mit frischem Gemüse in Kokosnussmilch und verschiedenen feinen Gewürzen",
            price: 10.50,
            count: 0
          },
          {
            title: "Sabji Nilgiri",
            description: "frisches Gemüse mit frischer Minze und Spinat in Kokosnuss-Milch-Sauce",
            price: 7.50,
            count: 0
          }
        ]
      },
      {
        menutitle: "Huhn-spezialitäten",
        menucontent: [
          {
            title: "Chappati",
            description: "Frischer Vollkorn-Teigfladen vom Tandoor",
            price: 2.00,
            count: 0
          },
          {
            title: "Raita Gurken",
            description: "Joghurt mit frischen Gurken",
            price: 3.00,
            count: 0
          },
          {
            title: "Lassan Nan",
            description: "Hefeteigbrot mit frischem Knoblauch",
            price: 3.00,
            count: 0
          },
          {
            title: "Nan",
            description: "Hefeteigbrot",
            price: 2.50,
            count: 0
          },
          {
            title: "Lamm Jalfrezi (mittelscharf)",
            description: "Lammfleisch mit Zwiebeln, Paprika, Ingwer",
            price: 9.50,
            count: 0
          },
          {
            title: "Ente Sabji",
            description: "Entenbrustfilet mit frischem Gemüse in Kokosnussmilch und verschiedenen feinen Gewürzen",
            price: 10.50,
            count: 0
          },
          {
            title: "Sabji Nilgiri",
            description: "frisches Gemüse mit frischer Minze und Spinat in Kokosnuss-Milch-Sauce",
            price: 7.50,
            count: 0
          }
        ]
      },
      {
        menutitle: "Enten-spezialitäten",
        menucontent: [
          {
            title: "Chappati",
            description: "Frischer Vollkorn-Teigfladen vom Tandoor",
            price: 2.00,
            count: 0
          },
          {
            title: "Raita Gurken",
            description: "Joghurt mit frischen Gurken",
            price: 3.00,
            count: 0
          },
          {
            title: "Lassan Nan",
            description: "Hefeteigbrot mit frischem Knoblauch",
            price: 3.00,
            count: 0
          },
          {
            title: "Nan",
            description: "Hefeteigbrot",
            price: 2.50,
            count: 0
          },
          {
            title: "Lamm Jalfrezi (mittelscharf)",
            description: "Lammfleisch mit Zwiebeln, Paprika, Ingwer",
            price: 9.50,
            count: 0
          },
          {
            title: "Ente Sabji",
            description: "Entenbrustfilet mit frischem Gemüse in Kokosnussmilch und verschiedenen feinen Gewürzen",
            price: 10.50,
            count: 0
          },
          {
            title: "Sabji Nilgiri",
            description: "frisches Gemüse mit frischer Minze und Spinat in Kokosnuss-Milch-Sauce",
            price: 7.50,
            count: 0
          }
        ]
      },
      {
        menutitle: "Lamm-spezialitäten",
        menucontent: [
          {
            title: "Chappati",
            description: "Frischer Vollkorn-Teigfladen vom Tandoor",
            price: 2.00,
            count: 0
          },
          {
            title: "Raita Gurken",
            description: "Joghurt mit frischen Gurken",
            price: 3.00,
            count: 0
          },
          {
            title: "Lassan Nan",
            description: "Hefeteigbrot mit frischem Knoblauch",
            price: 3.00,
            count: 0
          },
          {
            title: "Nan",
            description: "Hefeteigbrot",
            price: 2.50,
            count: 0
          },
          {
            title: "Lamm Jalfrezi (mittelscharf)",
            description: "Lammfleisch mit Zwiebeln, Paprika, Ingwer",
            price: 9.50,
            count: 0
          },
          {
            title: "Ente Sabji",
            description: "Entenbrustfilet mit frischem Gemüse in Kokosnussmilch und verschiedenen feinen Gewürzen",
            price: 10.50,
            count: 0
          },
          {
            title: "Sabji Nilgiri",
            description: "frisches Gemüse mit frischer Minze und Spinat in Kokosnuss-Milch-Sauce",
            price: 7.50,
            count: 0
          }
        ]
      },
      {
        menutitle: "Fisch-spezialitäten",
        menucontent: [
          {
            title: "Chappati",
            description: "Frischer Vollkorn-Teigfladen vom Tandoor",
            price: 2.00,
            count: 0
          },
          {
            title: "Raita Gurken",
            description: "Joghurt mit frischen Gurken",
            price: 3.00,
            count: 0
          },
          {
            title: "Lassan Nan",
            description: "Hefeteigbrot mit frischem Knoblauch",
            price: 3.00,
            count: 0
          },
          {
            title: "Nan",
            description: "Hefeteigbrot",
            price: 2.50,
            count: 0
          },
          {
            title: "Lamm Jalfrezi (mittelscharf)",
            description: "Lammfleisch mit Zwiebeln, Paprika, Ingwer",
            price: 9.50,
            count: 0
          },
          {
            title: "Ente Sabji",
            description: "Entenbrustfilet mit frischem Gemüse in Kokosnussmilch und verschiedenen feinen Gewürzen",
            price: 10.50,
            count: 0
          },
          {
            title: "Sabji Nilgiri",
            description: "frisches Gemüse mit frischer Minze und Spinat in Kokosnuss-Milch-Sauce",
            price: 7.50,
            count: 0
          }
        ]
      },
      {
        menutitle: "Reisgerichte",
        menucontent: [
          {
            title: "Chappati",
            description: "Frischer Vollkorn-Teigfladen vom Tandoor",
            price: 2.00,
            count: 0
          },
          {
            title: "Raita Gurken",
            description: "Joghurt mit frischen Gurken",
            price: 3.00,
            count: 0
          },
          {
            title: "Lassan Nan",
            description: "Hefeteigbrot mit frischem Knoblauch",
            price: 3.00,
            count: 0
          },
          {
            title: "Nan",
            description: "Hefeteigbrot",
            price: 2.50,
            count: 0
          },
          {
            title: "Lamm Jalfrezi (mittelscharf)",
            description: "Lammfleisch mit Zwiebeln, Paprika, Ingwer",
            price: 9.50,
            count: 0
          },
          {
            title: "Ente Sabji",
            description: "Entenbrustfilet mit frischem Gemüse in Kokosnussmilch und verschiedenen feinen Gewürzen",
            price: 10.50,
            count: 0
          },
          {
            title: "Sabji Nilgiri",
            description: "frisches Gemüse mit frischer Minze und Spinat in Kokosnuss-Milch-Sauce",
            price: 7.50,
            count: 0
          }
        ]
      },
      {
        menutitle: "Nachspeisen",
        menucontent: [
          {
            title: "Chappati",
            description: "Frischer Vollkorn-Teigfladen vom Tandoor",
            price: 2.00,
            count: 0
          },
          {
            title: "Raita Gurken",
            description: "Joghurt mit frischen Gurken",
            price: 3.00,
            count: 0
          },
          {
            title: "Lassan Nan",
            description: "Hefeteigbrot mit frischem Knoblauch",
            price: 3.00,
            count: 0
          },
          {
            title: "Ente Sabji",
            description: "Entenbrustfilet mit frischem Gemüse in Kokosnussmilch und verschiedenen feinen Gewürzen",
            price: 10.50,
            count: 0
          },
          {
            title: "Sabji Nilgiri",
            description: "frisches Gemüse mit frischer Minze und Spinat in Kokosnuss-Milch-Sauce",
            price: 7.50,
            count: 0
          }
        ]
      },
      {
        menutitle: "Alkoholfreie getränke",
        menucontent: [
          {
            title: "Chappati",
            description: "Frischer Vollkorn-Teigfladen vom Tandoor",
            price: 2.00,
            count: 0
          },
          {
            title: "Raita Gurken",
            description: "Joghurt mit frischen Gurken",
            price: 3.00,
            count: 0
          },
          {
            title: "Lassan Nan",
            description: "Hefeteigbrot mit frischem Knoblauch",
            price: 3.00,
            count: 0
          },
          {
            title: "Nan",
            description: "Hefeteigbrot",
            price: 2.50,
            count: 0
          },
          {
            title: "Lamm Jalfrezi (mittelscharf)",
            description: "Lammfleisch mit Zwiebeln, Paprika, Ingwer",
            price: 9.50,
            count: 0
          },
          {
            title: "Ente Sabji",
            description: "Entenbrustfilet mit frischem Gemüse in Kokosnussmilch und verschiedenen feinen Gewürzen",
            price: 10.50,
            count: 0
          },
          {
            title: "Sabji Nilgiri",
            description: "frisches Gemüse mit frischer Minze und Spinat in Kokosnuss-Milch-Sauce",
            price: 7.50,
            count: 0
          }
        ]
      },
      {
        menutitle: "3444444ke",
        menucontent: [
          {
            title: "Chappati",
            description: "Frischer Vollkorn-Teigfladen vom Tandoor",
            price: 2.00,
            count: 0
          },
          {
            title: "Raita Gurken",
            description: "Joghurt mit frischen Gurken",
            price: 3.00,
            count: 0
          },
          {
            title: "Lassan Nan",
            description: "Hefeteigbrot mit frischem Knoblauch",
            price: 3.00,
            count: 0
          },
          {
            title: "Nan",
            description: "Hefeteigbrot",
            price: 2.50,
            count: 0
          },
          {
            title: "Lamm Jalfrezi (mittelscharf)",
            description: "Lammfleisch mit Zwiebeln, Paprika, Ingwer",
            price: 9.50,
            count: 0
          },
          {
            title: "Ente Sabji",
            description: "Entenbrustfilet mit frischem Gemüse in Kokosnussmilch und verschiedenen feinen Gewürzen",
            price: 10.50,
            count: 0
          },
          {
            title: "Sabji Nilgiri",
            description: "frisches Gemüse mit frischer Minze und Spinat in Kokosnuss-Milch-Sauce",
            price: 7.50,
            count: 0
          }
        ]
      }
    ]
  },
  reducers: {
    increment: (state, action) => {
      state.menu[action.payload.id1].menucontent[action.payload.id2].count += 1;
    },
    decrement: (state, action) => {
      state.menu[action.payload.id1].menucontent[action.payload.id2].count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
