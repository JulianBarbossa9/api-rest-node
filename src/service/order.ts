//Logica de negocio


import ItemModel from "../models/item";



const getOrders = async () => {
  return await ItemModel.find({});
};



export { getOrders };
