
function TransationsDisplay({posterImg, title, trailer}) {
//   console.log(props)
    return <div className="cart-display">
    <img src={posterImg} alt={title}/> 
    <p><a href={trailer} target="_blank">Watch Here</a></p>
    {/* <h1>hello world</h1> */}
    </div>

}

export default TransationsDisplay;