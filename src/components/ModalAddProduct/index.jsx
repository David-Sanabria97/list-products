import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const ModalAddProduct = (props) => {
  const { open, handleClose, handleSubmit, addProduct, register, errors } =
    props;

  return (
    <form>
      <Modal open={open} onClose={handleClose}>
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            background: "white",
            boxShadow: 24,

            padding: "2rem",
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <Stack>
            Nombre:
            <TextField
              required
              error={errors.name ? true : false}
              {...register("title", { required: true, pattern: /^[A-Za-z]+$/ })}
            />
          </Stack>
          <Stack>
            Precio:
            <TextField
              required
              error={errors.price ? true : false}
              {...register("price", {
                required: true,
                pattern: /^[0-9]+([.][0-9]+)?$/,
              })}
            />
          </Stack>
          <Stack>
            Descripción :
            <TextField
              required
              error={errors.description ? true : false}
              {...register("description", { required: true })}
            />
          </Stack>
          <Button type="submit" onClick={handleSubmit(addProduct)}>
            Guardar
          </Button>
        </Box>
      </Modal>
    </form>
  );
};
export default ModalAddProduct;
