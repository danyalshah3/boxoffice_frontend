import Auth from './Auth'

function welcome() {

    return <div className="welcome">
     {/* <button onClick={<Auth/>}> </button> */}
       
     <h1>BOX OFFICE</h1>

     <h3>'HUB of Entertainment'</h3>

     <Auth/>
    </div>


}

export default welcome