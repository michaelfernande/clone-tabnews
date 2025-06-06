function status(request, response) {
  response.status(200).json({ chave: "gosta de arroz é muito bão" });
}
export default status;
