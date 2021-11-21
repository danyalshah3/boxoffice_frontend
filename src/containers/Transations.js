import { connect } from "react-redux";
import TransationDisplay from "../components/TransationDisplay";
import Nav from '../components/Nav'
import {useEffect} from 'react'
import { addTransation } from "../redux/actionCreators";


function Transations({props}){

    useEffect(() => addTransation(), [addTransation])



// const handleClick = (e) => {
//     console.log(e)
// }


    return <div className="transations">
        <Nav/>
    {props.transations.map(transation => <TransationDisplay  {...transation} key={transation.id}/>)}
    </div>

}


const mapStateToProps = (state) =>  ({transations: state.user.transations})



export default connect(mapStateToProps)(Transations);

// function Transations(){
// 	return <div>
//             <span className='mr-2'>Rent(HD)</span>
//         </div>

// export default Transations;

// const  Transations = () => {
// 	return (
// 		<>
// 			<span className='mr-2'>Rent(HD)</span>
// 			{/* <svg
// 				width='1em'
// 				height='1em'
// 				viewBox='0 0 16 16'
// 				class='bi bi-heart-fill'
// 				fill='red'
// 				xmlns='http://www.w3.org/2000/svg'
// 			>
// 				<path
// 					fill-rule='evenodd'
// 					d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
// 				/>
// 			</svg> */}
// 		</>
// 	);
// };

// export default Transations;
