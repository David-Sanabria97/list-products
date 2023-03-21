
import axios from "axios";

 const getListProducts = async () => {

    const result = await axios.get('https://fakestoreapi.com/products')
        .then(function (response) {
    // handle success
    return response.data
  })

  return result
}

export default getListProducts