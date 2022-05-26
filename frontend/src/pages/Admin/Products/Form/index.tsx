import './styles.css';

const Form = () => {
  return (
    <div className="product-crud-container">
      <div className="base-card product-crud-form-card">
        <h3 className="product-crud-form-title">DADOS DO PRODUTO</h3>
        <form action="">
          <div className="row product-crud-inputs-container">
            <div className="col-md-6 product-crud-inputs-left-container">
              <div className="margin-botton-30">
                <input type="text" className="form-control base-input" />
              </div>
              <div className="margin-botton-30">
                <input type="text" className="form-control base-input" />
              </div>
              <div>
                <input type="text" className="form-control base-input" />
              </div>
            </div>
            <div className="col-md-6">
              <div>
              <textarea
                name=""
                rows={10}
                className="form-control base-input h-auto"
              />
              </div>
            </div>
          </div>
          <div className="product-crud-buttons-container">
            <button className="btn btn-outline-danger product-crud-button">CANCELAR</button>
            <button className="btn btn-primary text-white product-crud-button">SALVAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
