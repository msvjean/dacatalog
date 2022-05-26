import './styles.css';

const Form = () => {
  return (
    <div className="product-crud-container">
      <div className="base-card product-crud-form-card">
        <h3 className="product-crud-form-title">DADOS DO PRODUTO</h3>
        <form action="">
          <div className="row">
            <div className="col-md-6">
              <input type="text" className="form-control base-input" />
              <input type="text" className="form-control base-input" />
              <input type="text" className="form-control base-input" />
            </div>
            <div className="col-md-6">
              <textarea name="" rows={10} className="form-control base-input"></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
