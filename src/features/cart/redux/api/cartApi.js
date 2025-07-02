import { API } from "../../../../services/API";

export async function GetCartProductDetailsAPI(data) {
  try {
    const resp = await API.post("/product/get-cart/details", {
      productIds: data,
    });

    return resp.data;
  } catch (err) {
    return err;
  }
}
