export default function Price({oldPrice,newPrice}) {
    let styles = {
        textDecoration: "line-through",
    };
    let newStyle = {
        fontWeight: "bold"
    };
    let style1 = {
        backgroundColor: "yellow",
        hight:"30px",
        width:"200px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
    };
    return(
        <div style = {style1}>
            <span style={styles}>{oldPrice}</span>
            &nbsp; &nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    )
}