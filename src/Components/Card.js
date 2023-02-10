import "./Card.css";
// import cloud from "./cloud.jpg";
function Card(props) {
  return (
    <div className="card">
      <img className="image" src="./cloud.jpg" alt="Cloud-Img" />
      <div className="card-img-overlay">
        <div className="row">
          <div className="col-6 b-r align-self-center">
            <div className="card-title text-white m-b-0 dl">
              <h3 className="city">{props.citiData.name}</h3>
              <img align="top" src="" alt="" className="ic" />
            </div>

            <small className="card-text text-white font-light">
              <p className="desc">{props.citiData.description}</p>
            </small>
          </div>

          <div className="col-4 b-r text-right">
            <div className="card-title text-white m-b-0 dl">
              <h3 className="temp">{props.citiData.temp}&#8451;</h3>
              <br />
            </div>

            <div className="m-l-20"></div>
          </div>
        </div>
      </div>
      <div className="card-body weather-small">
        <div className="row">
          <div className="col-6 b-r align-self-center">
            <div className="d-flex">
              <div className="m-l-20">
                <div className="font">
                  <p className="id">ID : {props.citiData.id}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 b-r text-center">
            <div className="m-l-20">
              <div className="font">
                <p className="dt">DT : {props.citiData.dt}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
