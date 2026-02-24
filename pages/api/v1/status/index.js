function status(request, response) {
  response.status(200).json({ mensagem: "testando o endpoint" });
}

export default status;
