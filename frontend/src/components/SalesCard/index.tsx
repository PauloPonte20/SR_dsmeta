import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationBtn from "../NotificationBtn";
import "./styles.css";

function SalesCard() {
  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={new Date()}
            onChange={(date: Date) => {}}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={new Date()}
            onChange={(date: Date) => {}}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show992">321</td>
              <td className="show576">08/07/2022</td>
              <td>Farengar</td>
              <td className="show992">10</td>
              <td className="show992">8</td>
              <td>R$ 25300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationBtn />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">341</td>
              <td className="show576">08/07/2022</td>
              <td>Kodlak</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationBtn />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">366</td>
              <td className="show576">08/07/2022</td>
              <td>Hadvar</td>
              <td className="show992">13</td>
              <td className="show992">17</td>
              <td>R$ 34400.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationBtn />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesCard;
