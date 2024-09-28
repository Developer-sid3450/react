import Product from "./Product.jsx";
function ProductTab() {
    let styles = {
        display : "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems:"center"
    }
    return(
        <div style={styles}>
    <Product  tittle="Logitech master "  idx={0}/>
    <Product  tittle="pencil  tech" idx={1}/>
    <Product  tittle=" Zebraic phone" idx={2}/>
    <Product tittle="phone " idx={3}/>
    </div>
    )
}

export default ProductTab;