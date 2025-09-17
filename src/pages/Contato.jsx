import { InputField } from '../components/input/InputField'
import { useState } from 'react'

export const Contato = () => {
  const [form, setForm] = useState({});

  const handleChange = e => setForm({ ...form, [e.target.id]: e.target.value });

  // api
  const fetchEnderecoByCep = async (e) => {
    console.log('buscar na api cep')
    const cep = e.target.value;

    if (cep.length === 8) {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json();

      console.log('dados api cep', data)

      setFormData({
        ...formData,
        rua: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.estado,
      })
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Cadastro enviado com sucesso!');
    setForm({
      nome: '', email: '', telefone: '',
      cep: '', rua: '', bairro: '', cidade: '', estado: ''
    });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="card shadow-lg">
          <div className="card-header text-center">
            <h4 className="mb-0">Fale Conosco</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <h5>Dados Pessoais</h5>
              <div className="row">
                <div className="col-md-6 mb-3">

                  <InputField
                    id="nome"
                    label="Nome"
                    type="text"
                    placeholder="Nome"
                    value={form.nome}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <InputField
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <InputField
                    id="telefone"
                    label="Telefone"
                    type="tel"
                    placeholder="Telefone"
                    value={form.telefone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <hr />
              <h5>Endereço</h5>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <InputField
                    id="cep"
                    label="CEP"
                    type="text"
                    placeholder="CEP"
                    value={form.cep}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <InputField
                    id="rua"
                    label="Rua"
                    type="text"
                    placeholder="Rua"
                    value={form.rua}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <InputField
                    id="bairro"
                    label="Bairro"
                    type="text"
                    placeholder="Bairro"
                    value={form.bairro}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <InputField
                    id="cidade"
                    label="Cidade"
                    type="text"
                    placeholder="Cidade"
                    value={form.cidade}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <InputField
                    id="estado"
                    label="Estado"
                    type="text"
                    placeholder="Estado"
                    value={form.estado}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-success w-100 mt-2">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}