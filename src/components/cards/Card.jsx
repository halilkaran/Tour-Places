import { Card } from "react-bootstrap";
import "./Card.css"
function Carde({data}) {
    return (
    <div className="row con ">
      {data.map((item) => {
        const {id,title,desc,image} = item;
          return (
            <div className="col-3 card" key={id}>
              <Card.Title>{title.toUpperCase()}</Card.Title>
              <Card className="bg-dark text-white">
                <Card.Img src={image} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Text>{desc}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          );
      })}
    </div>
  );
   
 



 
}

export default Carde