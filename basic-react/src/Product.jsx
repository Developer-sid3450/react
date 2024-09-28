import "./Product.css";
import Price from "./Price";
function Product({ tittle, idx }) {
  let oldPrice = [ "2000", "3000", "45,000", "3400"];
  let newPrice =   ["24,660", "3,46,500", "4,56,700", "3400"];
  let description = [["8,000 DPI", "5 Programable button"], ["Intuitive Surface ", "Design for iPad Pro"],  ["designed for ipad pro", "Intuitive surface"], ["wireless", "optical orientation"]];
    return(
        <div className="Product">
         <p>{tittle}</p>  
         <p>{description[idx][0]}</p>
         <p>{description[idx][1]}</p>
         <Price  oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>  
        </div>
    )
}

export default Product;